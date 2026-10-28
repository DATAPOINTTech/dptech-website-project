<?php
/**
 * DATAPOINT Technologies - Products JSON API
 */

require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../includes/data.php';

header('Content-Type: application/json; charset=utf-8');

// Rate limiting
if (!check_rate_limit('products_api', 60, 60)) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests'], JSON_PRETTY_PRINT);
    exit;
}

echo json_encode([
    'success' => true,
    'count' => count($products),
    'products' => $products,
    'synced_at' => date('c')
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
