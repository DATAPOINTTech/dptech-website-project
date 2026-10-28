<?php
/**
 * DATAPOINT Technologies - Secure Contact Form Handler
 */

require_once __DIR__ . '/../config.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed'], JSON_PRETTY_PRINT);
    exit;
}

// 1. Rate Limiting
if (!check_rate_limit('contact_form', 10, 60)) {
    http_response_code(429);
    echo json_encode(['success' => false, 'error' => 'Too many submissions. Please wait 1 minute.'], JSON_PRETTY_PRINT);
    exit;
}

// 2. Honeypot Anti-Spam Trap
if (is_honeypot_triggered($_POST)) {
    // Silently reject spam bots
    echo json_encode(['success' => true, 'message' => 'Thank you for your inquiry!']);
    exit;
}

// 3. CSRF Verification
$token = $_POST['csrf_token'] ?? ($_SERVER['HTTP_X_CSRF_TOKEN'] ?? '');
if (!verify_csrf_token($token)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Security token expired. Please refresh the page.'], JSON_PRETTY_PRINT);
    exit;
}

// 4. Input Sanitization
$name = sanitize_text($_POST['name'] ?? '');
$phone = sanitize_phone($_POST['phone'] ?? '');
$email = sanitize_email_address($_POST['email'] ?? '');
$location = sanitize_text($_POST['location'] ?? '');
$service = sanitize_text($_POST['service'] ?? 'cctv');
$urgency = sanitize_text($_POST['urgency'] ?? 'normal');
$message = sanitize_text($_POST['message'] ?? '');

if (empty($name) || empty($phone) || empty($location)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please fill in Name, Phone, and Property Location.'], JSON_PRETTY_PRINT);
    exit;
}

// 5. Store Lead in data/leads.json with locking
$leadFile = DATA_PATH . '/leads.json';
$leadRecord = [
    'timestamp' => date('c'),
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'location' => $location,
    'service' => $service,
    'urgency' => $urgency,
    'message' => $message,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    'user_agent' => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 150)
];

$existing = [];
if (file_exists($leadFile)) {
    $raw = @file_get_contents($leadFile);
    if ($raw) {
        $existing = json_decode($raw, true) ?: [];
    }
}
$existing[] = $leadRecord;

$fp = @fopen($leadFile, 'w');
if ($fp) {
    if (flock($fp, LOCK_EX)) {
        fwrite($fp, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        fflush($fp);
        flock($fp, LOCK_UN);
    }
    fclose($fp);
}

// Calculate qualification score
$score = 50;
if (strlen($name) > 2) $score += 10;
if (strlen($phone) >= 10) $score += 20;
if (!empty($location)) $score += 10;
if (!empty($email)) $score += 10;
$score = min($score, 100);

echo json_encode([
    'success' => true,
    'message' => 'Thank you, ' . $name . '! Moomal has received your inquiry for a Free Site Survey.',
    'score' => $score,
    'lead' => [
        'name' => $name,
        'phone' => $phone,
        'location' => $location,
        'service' => $service
    ]
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

