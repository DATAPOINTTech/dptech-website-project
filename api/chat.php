<?php
/**
 * DATAPOINT Technologies - Moomal AI Receptionist API Endpoint
 * Handles live chat, inbound qualification, and forwards to Dptech-Reception
 */

require_once __DIR__ . '/../config.php';

header('Content-Type: application/json; charset=utf-8');

// Reject non-POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed'], JSON_PRETTY_PRINT);
    exit;
}

// Rate limiting (max 40 requests per minute)
if (!check_rate_limit('chat_api', 40, 60)) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please wait a moment.'], JSON_PRETTY_PRINT);
    exit;
}

$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (empty($input) || empty(trim($input['message'] ?? ''))) {
    http_response_code(400);
    echo json_encode(['error' => 'Message is required'], JSON_PRETTY_PRINT);
    exit;
}

$message = sanitize_text($input['message']);
$sessionId = sanitize_text($input['session_id'] ?? ('web_' . time()));
$leadInfo = $input['lead_info'] ?? null;
$lang = sanitize_text($input['language'] ?? 'en');

// Check if adjacent Dptech-Reception PHP backend exists
$receptionBridges = [
    ROOT_PATH . '/../Dptech-Reception/api/chat.php',
    ROOT_PATH . '/reception/api/chat.php',
    dirname(ROOT_PATH) . '/Dptech-Reception/api/chat.php'
];

foreach ($receptionBridges as $bridgePath) {
    if (file_exists($bridgePath)) {
        $_SERVER['REQUEST_METHOD'] = 'POST';
        ob_start();
        include $bridgePath;
        $output = ob_get_clean();
        if (!empty($output)) {
            $parsed = json_decode($output, true);
            if ($parsed && !empty($parsed['reply'])) {
                echo $output;
                exit;
            }
        }
    }
}

// Securely store qualified leads with file locking
if ($leadInfo && !empty($leadInfo['phone'])) {
    $leadRecord = [
        'timestamp' => date('c'),
        'session_id' => $sessionId,
        'name' => sanitize_text($leadInfo['name'] ?? ''),
        'phone' => sanitize_phone($leadInfo['phone'] ?? ''),
        'location' => sanitize_text($leadInfo['location'] ?? ''),
        'preference' => sanitize_text($leadInfo['preference'] ?? ''),
        'language' => $lang,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
        'last_query' => $message
    ];

    $leadFile = DATA_PATH . '/leads.json';
    $existing = [];
    if (file_exists($leadFile)) {
        $content = @file_get_contents($leadFile);
        if ($content) {
            $existing = json_decode($content, true) ?: [];
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
}

// Trilingual Moomal AI Receptionist Knowledge Logic
$lower = strtolower($message);
$reply = "";

if (strpos($lower, 'inventory') !== false || strpos($lower, 'asset') !== false || strpos($lower, 'stock') !== false) {
    $reply = "Our Store Inventory & Asset Management System features multi-warehouse stock levels, barcode auditing, purchase order approvals, and asset lifecycle tracking. You can access our interactive live demo anytime at: " . PORTAL_INVENTORY_DEMO . " . Would you like to schedule a guided walkthrough with our software architect?";
} elseif (strpos($lower, 'invoice') !== false || strpos($lower, 'invoicing') !== false || strpos($lower, 'billing') !== false) {
    $reply = "Our commercial Invoicing & Billing Portal is live at: " . PORTAL_INVOICING . " . It generates verified PDF estimates, manages client ledgers, and integrates directly with Moomal for automatic quotation generation.";
} elseif (strpos($lower, 'camera') !== false || strpos($lower, 'cctv') !== false || strpos($lower, 'surveillance') !== false) {
    $reply = "Assalam-o-Alaikum! We provide Hikvision ColorVu (24/7 full-color night vision) and EZVIZ smart systems with complete 4-camera PoE NVR bundles (including 1TB/2TB WD Purple surveillance drive, pure copper Cat6 cabling, and certified mounting). May I know your Full Name and Property Location so I can schedule our 100% Free On-Site Technical Site Survey for you?";
} elseif (strpos($lower, 'network') !== false || strpos($lower, 'router') !== false || strpos($lower, 'switch') !== false || strpos($lower, 'wifi') !== false) {
    $reply = "Our networking division delivers structured pure copper Cat6/Cat6A cabling, enterprise WiFi 6 access points, Cisco/MikroTik routing, and managed PoE switching. Could you please share your Name and WhatsApp Contact Number so our senior network engineer can assess your site requirements?";
} elseif (strpos($lower, 'fiber') !== false || strpos($lower, 'optic') !== false || strpos($lower, 'data com') !== false) {
    $reply = "We engineer mission-critical optical fiber backbones with core fusion splicing, OTDR budget certification, and long-range point-to-point wireless bridges. What is the approximate distance and location for your fiber link?";
} elseif (strpos($lower, 'survey') !== false || strpos($lower, 'free site') !== false) {
    $reply = "We offer a 100% Free On-Site Site Survey! A senior engineer will visit your location, assess camera blind spots, measure cable pathways, and provide an itemized proposal. Please provide: 1) Full Name, 2) Phone Number, and 3) Property Location (City/Area).";
} else {
    if ($lang === 'ur') {
        $reply = "السلام علیکم! میں مومل ہوں، ڈیٹا پوائنٹ ٹیکنالوجیز کی آفیشل اے آئی ریسپشنسٹ۔ ہمارے پاس سی سی ٹی وی کیمرے، نیٹ ورکنگ کیبلنگ، آپٹیکل فائبر اور سافٹ ویئر سلوشنز (سٹور انوینٹری اور انوائسنگ سسٹم) دستیاب ہیں۔ آپ اپنا نام اور فون نمبر فراہم کریں تاکہ ہم مفت آن سائٹ سروے شیڈول کر سکیں۔";
    } elseif ($lang === 'sd') {
        $reply = "اسلام عليڪم! مان مومل آهيان، ڊيٽا پوائنٽ ٽيڪنالاجيز جي آفيشل اي آءِ ريسيپشنسٽ. اسان وٽ سي سي ٽي وي ڪئميرائون، نيٽ ورڪنگ، فائبر آپٽڪ ۽ سافٽ ويئر موجود آهن. پنهنجو نالو ۽ فون نمبر موڪليو ته اسان اوهان لاءِ فري سائيٽ سروي بڪ ڪريون.";
    } else {
        $reply = "Assalam-o-Alaikum! I'm Moomal, AI Receptionist at DATAPOINT Technologies. How can I assist you today? You can ask about our 4 Core Divisions: CCTV & Security Surveillance, Networking Solutions, Fiber Optic & DATA Communication, or our Enterprise Software (Store Inventory & Invoicing systems).";
    }
}

echo json_encode([
    'success' => true,
    'session_id' => $sessionId,
    'reply' => $reply,
    'lead_captured' => !empty($leadInfo['phone']),
    'engine' => 'DATAPOINT Moomal AI Engine'
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

