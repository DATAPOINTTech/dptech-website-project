<?php
/**
 * DATAPOINT Technologies - Security Engine
 * Comprehensive security hardening, CSRF protection, Rate Limiting, Sanitization
 */

// 1. Strict Error Reporting & Production Hardening
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('display_startup_errors', '0');
ini_set('log_errors', '1');

// 2. Secure Session Initialization
if (session_status() === PHP_SESSION_NONE) {
    $isSecure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443);
    
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'domain' => '',
        'secure' => $isSecure,
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    
    session_start();
}

// 3. Security HTTP Headers
function send_security_headers() {
    if (headers_sent()) return;

    // Prevent MIME-sniffing
    header('X-Content-Type-Options: nosniff');
    
    // Clickjacking defense
    header('X-Frame-Options: SAMEORIGIN');
    
    // Cross-Site Scripting filter
    header('X-XSS-Protection: 1; mode=block');
    
    // Referrer policy
    header('Referrer-Policy: strict-origin-when-cross-origin');
    
    // Restrict unnecessary browser hardware features
    header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
    
    // Strict-Transport-Security if on HTTPS
    if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
        header('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');
    }
    
    // Content Security Policy
    $csp = "default-src 'self'; " .
           "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " .
           "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " .
           "font-src 'self' https://fonts.gstatic.com data:; " .
           "img-src 'self' data: https: blob:; " .
           "connect-src 'self' https://datapointtechnology.com https://wa.me; " .
           "frame-ancestors 'self'; " .
           "base-uri 'self'; " .
           "form-action 'self' https://wa.me;";
    header('Content-Security-Policy: ' . $csp);
}
send_security_headers();

// 4. Safe HTML output encoding (Anti-XSS)
function e($string) {
    return htmlspecialchars((string)($string ?? ''), ENT_QUOTES, 'UTF-8');
}

// 5. CSRF Token Protection
function csrf_token() {
    if (empty($_SESSION['dp_csrf_token'])) {
        $_SESSION['dp_csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['dp_csrf_token'];
}

function csrf_field() {
    return '<input type="hidden" name="csrf_token" value="' . e(csrf_token()) . '">';
}

function verify_csrf_token($token) {
    if (empty($_SESSION['dp_csrf_token']) || empty($token)) {
        return false;
    }
    return hash_equals($_SESSION['dp_csrf_token'], (string)$token);
}

// 6. Rate Limiting Protection (Anti-flood / Anti-bruteforce)
function check_rate_limit($actionKey = 'general', $maxAttempts = 30, $decaySeconds = 60) {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $key = 'rate_' . md5($actionKey . '_' . $ip);
    $now = time();
    
    if (!isset($_SESSION[$key])) {
        $_SESSION[$key] = ['count' => 1, 'start' => $now];
        return true;
    }
    
    if ($now - $_SESSION[$key]['start'] > $decaySeconds) {
        $_SESSION[$key] = ['count' => 1, 'start' => $now];
        return true;
    }
    
    $_SESSION[$key]['count']++;
    if ($_SESSION[$key]['count'] > $maxAttempts) {
        return false;
    }
    
    return true;
}

// 7. Input Sanitization Helpers
function sanitize_text($input) {
    if (is_array($input)) {
        return array_map('sanitize_text', $input);
    }
    $clean = strip_tags(trim((string)$input));
    return preg_replace('/[\x00-\x1F\x7F]/', '', $clean);
}

function sanitize_phone($phone) {
    return preg_replace('/[^0-9+\-\s()]/', '', trim((string)$phone));
}

function sanitize_email_address($email) {
    $clean = filter_var(trim((string)$email), FILTER_SANITIZE_EMAIL);
    return filter_var($clean, FILTER_VALIDATE_EMAIL) ? $clean : '';
}

// 8. Honeypot check for bots
function is_honeypot_triggered($postArray) {
    return !empty($postArray['dp_website_trap']);
}
