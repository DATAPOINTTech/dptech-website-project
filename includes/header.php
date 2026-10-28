<?php
/**
 * DATAPOINT Technologies - Header Component
 */
if (!defined('APP_NAME')) {
    require_once __DIR__ . '/../config.php';
}

$pageTitle = $pageTitle ?? (APP_NAME . ' | ' . APP_TAGLINE);
$pageDescription = $pageDescription ?? 'Leading IT system integrator in Pakistan specializing in CCTV Security Surveillance, Networking Solutions, Fiber Optic & DATA Communication, and Custom Software Systems.';
$currentScript = basename($_SERVER['SCRIPT_NAME'] ?? 'index.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($pageTitle) ?></title>
    <meta name="description" content="<?= e($pageDescription) ?>">
    <link rel="icon" type="image/png" href="assets/images/logo.png">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css?v=2.0">
</head>
<body>
