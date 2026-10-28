<?php
/**
 * DATAPOINT Technologies - cPanel AI Reception Bridge
 * Connects website inquiries to Moomal AI Receptionist
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Method not allowed'], JSON_PRETTY_PRINT);
    exit;
}

$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (empty($input) || empty(trim($input['message'] ?? ''))) {
    echo json_encode(['error' => 'Message is required'], JSON_PRETTY_PRINT);
    exit;
}

$message = trim($input['message']);
$sessionId = trim($input['session_id'] ?? ('web_' . time()));
$leadInfo = $input['lead_info'] ?? null;

// Check if Dptech-Reception is hosted in adjacent directory or subfolder
$possiblePaths = [
    __DIR__ . '/../../Dptech-Reception/api/chat.php',
    __DIR__ . '/../reception/api/chat.php',
    __DIR__ . '/reception/api/chat.php'
];

foreach ($possiblePaths as $receptionScript) {
    if (file_exists($receptionScript)) {
        // Forward internally
        $_SERVER['REQUEST_METHOD'] = 'POST';
        ob_start();
        include $receptionScript;
        $output = ob_get_clean();
        if (!empty($output)) {
            echo $output;
            exit;
        }
    }
}

// Log qualified leads locally on cPanel
if ($leadInfo && !empty($leadInfo['phone'])) {
    $logDir = __DIR__ . '/../data';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    $leadEntry = [
        'timestamp' => date('c'),
        'session_id' => $sessionId,
        'name' => $leadInfo['name'] ?? '',
        'phone' => $leadInfo['phone'] ?? '',
        'location' => $leadInfo['location'] ?? '',
        'preference' => $leadInfo['preference'] ?? '',
        'message' => $message
    ];
    @file_put_contents($logDir . '/leads.json', json_encode($leadEntry, JSON_PRETTY_PRINT) . PHP_EOL, FILE_APPEND | LOCK_EX);
}

// Default Moomal response for cPanel standalone deployment
$lower = strtolower($message);
$reply = "Assalam-o-Alaikum! I am Moomal, AI Receptionist at DATAPOINT Technologies. We specialize in CCTV ColorVu security, networking infrastructure, optical fiber backbones, and enterprise software (Store Inventory & Invoicing systems). Please share your Name, Contact Phone, and City/Area so our senior engineer can schedule your 100% Free On-Site Site Survey.";

if (strpos($lower, 'inventory') !== false || strpos($lower, 'asset') !== false) {
    $reply = "You can test our live Store Inventory and Asset Management System anytime at http://sm.datapointtechnology.com . Would you like to schedule a customized demo?";
} elseif (strpos($lower, 'invoice') !== false || strpos($lower, 'billing') !== false) {
    $reply = "Our Invoicing Portal is active at http://invoicing.datapointtechnology.com .";
} elseif (strpos($lower, 'camera') !== false || strpos($lower, 'cctv') !== false) {
    $reply = "Our complete 4-camera ColorVu bundle includes 4x ColorVu full-color cameras, 4-port PoE NVR, 1TB WD Purple surveillance drive, pure copper Cat6 cabling, and certified on-site installation. May I have your Name and Property Location for a Free Site Survey?";
}

echo json_encode([
    'success' => true,
    'session_id' => $sessionId,
    'reply' => $reply,
    'lead_captured' => !empty($leadInfo['phone']),
    'engine' => 'cPanel Moomal AI Bridge'
], JSON_PRETTY_PRINT);

