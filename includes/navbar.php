<?php
/**
 * DATAPOINT Technologies - Navbar Component
 */
$current = basename($_SERVER['SCRIPT_NAME'] ?? 'index.php');
?>
<header class="site-header">
    <div class="container">
        <div class="nav-wrap">
            <!-- Brand Logo -->
            <a href="index.php" class="brand-logo" title="<?= e(APP_NAME) ?>">
                <div class="logo-badge">
                    <img src="assets/images/logo.png" alt="<?= e(APP_NAME) ?> Logo">
                </div>
                <div class="brand-text">
                    <span class="title"><span class="text-accent">DATA</span>POINT</span>
                    <span class="sub">Technologies</span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <nav>
                <ul class="nav-links">
                    <li><a href="index.php" class="nav-link <?= $current === 'index.php' ? 'active' : '' ?>">Home</a></li>
                    <li><a href="services.php" class="nav-link <?= $current === 'services.php' ? 'active' : '' ?>">Services</a></li>
                    <li><a href="products.php" class="nav-link <?= $current === 'products.php' ? 'active' : '' ?>">Products</a></li>
                    <li><a href="services.php#software" class="nav-link">Software</a></li>
                    <li><a href="about.php" class="nav-link <?= $current === 'about.php' ? 'active' : '' ?>">About</a></li>
                    <li><a href="contact.php" class="nav-link <?= $current === 'contact.php' ? 'active' : '' ?>">Contact</a></li>
                </ul>
            </nav>

            <!-- Actions: Invoicing Login, Webmail Login, Free Survey CTA -->
            <div class="nav-actions">
                <!-- Invoicing Portal Login -->
                <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" class="portal-btn invoicing" title="Login to Invoicing System (invoicing.datapointtechnology.com)">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    <span>Invoicing Login</span>
                </a>

                <!-- Webmail Login -->
                <a href="<?= e(PORTAL_WEBMAIL) ?>" target="_blank" rel="noopener noreferrer" class="portal-btn webmail" title="Login to Webmail">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>Webmail</span>
                </a>

                <!-- Free Survey CTA -->
                <a href="contact.php" class="btn-cta">Free Site Survey</a>

                <!-- Mobile Hamburger Toggle -->
                <button class="mobile-toggle" id="btnMobileToggle" aria-label="Toggle navigation">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobileDrawer" style="display:none; padding:1rem 0; border-top:1px solid var(--border);">
            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem; margin-bottom:1rem;">
                <li><a href="index.php" class="nav-link">Home</a></li>
                <li><a href="services.php" class="nav-link">Services</a></li>
                <li><a href="products.php" class="nav-link">Products</a></li>
                <li><a href="services.php#software" class="nav-link">Software Solutions</a></li>
                <li><a href="about.php" class="nav-link">About Us</a></li>
                <li><a href="contact.php" class="nav-link">Contact</a></li>
            </ul>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.75rem;">
                <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" class="portal-btn invoicing" style="justify-content:center;">🧾 Invoicing Login</a>
                <a href="<?= e(PORTAL_WEBMAIL) ?>" target="_blank" rel="noopener noreferrer" class="portal-btn webmail" style="justify-content:center;">✉️ Webmail</a>
            </div>
            <a href="contact.php" class="btn-cta" style="width:100%; justify-content:center;">Request Free Site Survey</a>
        </div>
    </div>
</header>
