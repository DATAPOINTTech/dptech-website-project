<?php
/**
 * DATAPOINT Technologies - Global Configuration
 */

require_once __DIR__ . '/includes/security.php';

define('APP_NAME', 'DATAPOINT Technologies');
define('APP_LEGAL_NAME', 'DATAPOINT Technologies (Pvt) Ltd');
define('APP_FOUNDED', 2016);
define('APP_TAGLINE', 'Smart Solutions for a Smarter Business');
define('APP_PHONE', '0316 7788990');
define('APP_PHONE_INTL', '+923167788990');
define('APP_WHATSAPP', '923167788990');
define('APP_EMAIL', 'info@datapointtechnology.com');
define('APP_ADDRESS', 'Karachi, Pakistan');

// Enterprise Portals
define('PORTAL_INVOICING', 'http://invoicing.datapointtechnology.com');
define('PORTAL_INVENTORY_DEMO', 'http://sm.datapointtechnology.com');
define('PORTAL_WEBMAIL', 'https://webmail.datapointtechnology.com');
define('PORTAL_WHATSAPP_RECEPTION', 'https://wa.me/923167788990?text=Assalam-o-Alaikum%20Moomal%2C%20I%20have%20an%20inquiry%20regarding%20DATAPOINT%20services');

// File paths
define('ROOT_PATH', __DIR__);
define('DATA_PATH', ROOT_PATH . '/data');
define('INCLUDES_PATH', ROOT_PATH . '/includes');
define('ASSETS_PATH', 'assets');

// Ensure data directory exists with write access
if (!is_dir(DATA_PATH)) {
    @mkdir(DATA_PATH, 0750, true);
}
