<?php
/**
 * DATAPOINT Technologies - Home Page (PHP)
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = APP_NAME . " | " . APP_TAGLINE;
$pageDescription = "Official website of DATAPOINT Technologies. 1. CCTV & Security Surveillance, 2. Networking Solutions, 3. Fiber Optic and DATA Communication, 4. Software Solutions.";

include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';
?>

<!-- HERO SECTION -->
<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <div class="eyebrow">
                    <span style="width:8px; height:8px; border-radius:50%; background:var(--accent); display:inline-block; animation:pulse 2s infinite;"></span>
                    <span>AI-Powered Technology Partner &amp; System Integrator</span>
                </div>
                <h1>
                    <span>Smart Solutions for a</span><br>
                    <span class="text-accent">Smarter Business</span>
                </h1>
                <p class="hero-subtitle">
                    From intelligent ColorVu CCTV security and high-speed enterprise networks to optical fiber backbones and custom enterprise software suites.
                </p>

                <!-- Fast portal shortcuts -->
                <div class="hero-portals">
                    <a href="<?= e(PORTAL_INVENTORY_DEMO) ?>" target="_blank" rel="noopener noreferrer" class="portal-chip inventory" title="Store Inventory Demo">
                        <span>📦</span> Store Inventory Demo ↗
                    </a>
                    <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" class="portal-chip invoicing" title="Invoicing Portal">
                        <span>🧾</span> Invoicing System ↗
                    </a>
                    <a href="<?= e(PORTAL_WEBMAIL) ?>" target="_blank" rel="noopener noreferrer" class="portal-chip webmail" title="Webmail Portal">
                        <span>✉️</span> Webmail ↗
                    </a>
                </div>

                <div class="hero-buttons">
                    <a href="contact.php" class="btn-cta" style="padding:0.75rem 1.6rem; font-size:0.95rem;">
                        Book Free Site Survey
                    </a>
                    <a href="services.php" class="btn-secondary">
                        Explore 4 Core Divisions →
                    </a>
                </div>

                <div class="hero-stats">
                    <?php foreach ($stats as $stat): ?>
                        <div class="stat-item">
                            <div class="val"><?= e($stat['value']) ?></div>
                            <div class="lbl"><?= e($stat['label']) ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Hero Slider -->
            <div class="hero-slider-wrap">
                <div class="hero-slider">
                    <div class="slide active">
                        <img src="assets/images/hero-tech-1.jpg" alt="Security Infrastructure">
                    </div>
                    <div class="slide">
                        <img src="assets/images/hero-tech-2.jpg" alt="Data Center Technology">
                    </div>
                    <div class="slide">
                        <img src="assets/images/hero-tech-3.jpg" alt="Server Room">
                    </div>
                    <div class="slide">
                        <img src="assets/images/hero-tech-4.jpg" alt="Communication Circuit">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 4 HIGHLIGHTED SERVICES CARDS ON FRONT PAGE -->
<section class="section section-alt" id="highlighted-services">
    <div class="container">
        <div class="section-head">
            <span class="eyebrow">Pillars of Excellence</span>
            <h2>Highlighted Services</h2>
            <p>Explore our 4 dedicated service divisions engineered to elevate security, connectivity, and enterprise automation.</p>
        </div>

        <div class="services-card-grid">
            <!-- 1. CCTV & Security Surveillance -->
            <div class="service-card">
                <div>
                    <div class="card-img-wrap">
                        <img src="assets/images/cat-cctv.jpg" alt="CCTV & Security Surveillance">
                        <span class="card-number">1</span>
                        <span class="card-icon">📹</span>
                    </div>
                    <h3>CCTV &amp; Security Surveillance</h3>
                    <p class="desc">
                        Full perimeter defense with 4K AcuSense, ColorVu night vision, PTZ tracking, PoE NVRs, and AI video analytics.
                    </p>
                    <ul class="card-features">
                        <li><span>✓</span> 4-Camera ColorVu PoE Bundles</li>
                        <li><span>✓</span> Human &amp; Vehicle Smart Filter</li>
                        <li><span>✓</span> 100% Free On-Site Site Survey</li>
                        <li><span>✓</span> Hikvision, EZVIZ, Dahua</li>
                    </ul>
                </div>
                <a href="services.php#cctv" class="btn-card-action">View CCTV Details →</a>
            </div>

            <!-- 2. Networking Solutions -->
            <div class="service-card">
                <div>
                    <div class="card-img-wrap">
                        <img src="assets/images/cat-networking.jpg" alt="Networking Solutions">
                        <span class="card-number">2</span>
                        <span class="card-icon">🌐</span>
                    </div>
                    <h3>Networking Solutions</h3>
                    <p class="desc">
                        Robust enterprise network infrastructure, high-speed pure copper cabling, managed switches, and secure WiFi 6/6E.
                    </p>
                    <ul class="card-features">
                        <li><span>✓</span> Structured Cat6 / Cat6A Cabling</li>
                        <li><span>✓</span> Enterprise WiFi 6 Access Points</li>
                        <li><span>✓</span> Routers &amp; Firewall Security</li>
                        <li><span>✓</span> Cisco, MikroTik, TP-Link</li>
                    </ul>
                </div>
                <a href="services.php#networking" class="btn-card-action">View Networking Details →</a>
            </div>

            <!-- 3. Fiber Optic and DATA Communication -->
            <div class="service-card">
                <div>
                    <div class="card-img-wrap">
                        <img src="assets/images/cat-fiber.jpg" alt="Fiber Optic and DATA Communication">
                        <span class="card-number">3</span>
                        <span class="card-icon">🔌</span>
                    </div>
                    <h3>Fiber Optic &amp; DATA Comm</h3>
                    <p class="desc">
                        Light-speed optical fiber backbone, precision core fusion splicing, OTDR budget certification, and wireless bridges.
                    </p>
                    <ul class="card-features">
                        <li><span>✓</span> Single-Mode &amp; Multi-Mode Fiber</li>
                        <li><span>✓</span> Fiber Splicing &amp; Termination</li>
                        <li><span>✓</span> Point-to-Point Wireless Bridges</li>
                        <li><span>✓</span> Corning, CommScope, Panduit</li>
                    </ul>
                </div>
                <a href="services.php#fiber-datacom" class="btn-card-action">View Fiber &amp; DATA Details →</a>
            </div>

            <!-- 4. Software Solutions -->
            <div class="service-card">
                <div>
                    <div class="card-img-wrap">
                        <img src="assets/images/products/software-lms.jpg" alt="Software Solutions">
                        <span class="card-number">4</span>
                        <span class="card-icon">💻</span>
                    </div>
                    <h3>Software Solutions</h3>
                    <p class="desc">
                        Integrated enterprise applications, inventory management, cloud invoicing, LMS portals, and ANPR monitoring.
                    </p>

                    <!-- Links to existing developed software -->
                    <div class="software-quick-links">
                        <a href="<?= e(PORTAL_INVENTORY_DEMO) ?>" target="_blank" rel="noopener noreferrer" class="sw-quick-item demo">
                            <span>📦 Store Inventory Demo</span>
                            <span>Live Demo ↗</span>
                        </a>
                        <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" class="sw-quick-item invoicing">
                            <span>🧾 Invoicing System</span>
                            <span>Login ↗</span>
                        </a>
                        <a href="services.php#software" class="sw-quick-item">
                            <span>🎓 Student Portal &amp; LMS</span>
                            <span>Details →</span>
                        </a>
                        <a href="services.php#software" class="sw-quick-item">
                            <span>🚗 ANPR Vehicle Suite</span>
                            <span>Details →</span>
                        </a>
                    </div>
                </div>
                <a href="services.php#software" class="btn-card-action" style="background:var(--accent); color:var(--primary); font-weight:800;">
                    All Software Details →
                </a>
            </div>
        </div>
    </div>
</section>

<!-- FULL SECTION POSTERS -->
<!-- Section 1: CCTV -->
<div class="poster-row">
    <div class="poster-bg"><img src="assets/images/cat-cctv.jpg" alt="CCTV Security"></div>
    <div class="poster-overlay left"></div>
    <div class="container">
        <div class="poster-content">
            <span class="eyebrow">Division 1 • Security &amp; Surveillance</span>
            <h2>CCTV &amp; Security Surveillance</h2>
            <p>Advanced surveillance systems with ColorVu 24/7 full-color night vision, AcuSense deep learning human/vehicle classification, PoE NVR recording, and remote mobile viewing.</p>
            <div class="pill-group">
                <span class="pill-item">4K AcuSense Cameras</span>
                <span class="pill-item">ColorVu Night Vision</span>
                <span class="pill-item">PoE 4K NVRs</span>
                <span class="pill-item">Free Site Survey</span>
            </div>
            <div style="display:flex; gap:1rem;">
                <a href="services.php#cctv" class="btn-secondary">CCTV Packages →</a>
                <a href="contact.php" class="btn-cta">Book Free Survey</a>
            </div>
        </div>
    </div>
</div>

<!-- Section 2: Networking -->
<div class="poster-row reverse">
    <div class="poster-bg"><img src="assets/images/cat-networking.jpg" alt="Networking Infrastructure"></div>
    <div class="poster-overlay right"></div>
    <div class="container">
        <div class="poster-content">
            <span class="eyebrow">Division 2 • Infrastructure</span>
            <h2>Networking Solutions</h2>
            <p>Reliable structured cabling (pure copper Cat6/Cat6A), WiFi 6 access points, enterprise firewalls, and managed switches tailored for zero-downtime office environments.</p>
            <div class="pill-group">
                <span class="pill-item">Structured Cabling</span>
                <span class="pill-item">WiFi 6 Access Points</span>
                <span class="pill-item">Hardware Firewalls</span>
                <span class="pill-item">Managed PoE Switches</span>
            </div>
            <a href="services.php#networking" class="btn-secondary">Networking Solutions →</a>
        </div>
    </div>
</div>

<!-- Section 3: Fiber Optic and DATA Comm -->
<div class="poster-row">
    <div class="poster-bg"><img src="assets/images/cat-fiber.jpg" alt="Fiber Optic Communication"></div>
    <div class="poster-overlay left"></div>
    <div class="container">
        <div class="poster-content">
            <span class="eyebrow">Division 3 • High-Speed Connectivity</span>
            <h2>Fiber Optic &amp; DATA Communication</h2>
            <p>Light-speed connectivity engineered for critical industrial and enterprise operations. Optical fiber splicing, OTDR test certification, point-to-point wireless bridges, and SCADA data transmission.</p>
            <div class="pill-group">
                <span class="pill-item">Single &amp; Multi-Mode</span>
                <span class="pill-item">Core Fusion Splicing</span>
                <span class="pill-item">OTDR Certification</span>
                <span class="pill-item">Wireless P2P Bridges</span>
            </div>
            <a href="services.php#fiber-datacom" class="btn-secondary">Fiber &amp; DATA Details →</a>
        </div>
    </div>
</div>

<!-- Section 4: Software Solutions & Live Demos -->
<div class="poster-row reverse">
    <div class="poster-bg"><img src="assets/images/products/software-lms.jpg" alt="Software Solutions"></div>
    <div class="poster-overlay right"></div>
    <div class="container">
        <div class="poster-content">
            <span class="eyebrow">Division 4 • Business Automation</span>
            <h2>Software Solutions &amp; Cloud Demos</h2>
            <p>Automate your entire institution or business workflow with custom cloud software. Check out our live demos and operational web systems below:</p>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.5rem;">
                <a href="<?= e(PORTAL_INVENTORY_DEMO) ?>" target="_blank" rel="noopener noreferrer" style="background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.3); padding:0.85rem; border-radius:14px; text-decoration:none;">
                    <div style="font-weight:700; color:#fbbf24; font-size:0.85rem;">📦 Store Inventory Demo</div>
                    <div style="font-size:0.72rem; color:#cbd5e1; margin-top:2px;">Stock levels, barcode audit, multi-store.</div>
                    <span style="font-size:0.7rem; color:#fde68a; font-weight:600; display:inline-block; margin-top:6px;">sm.datapointtechnology.com ↗</span>
                </a>

                <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" style="background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.3); padding:0.85rem; border-radius:14px; text-decoration:none;">
                    <div style="font-weight:700; color:#38bdf8; font-size:0.85rem;">🧾 Invoicing System</div>
                    <div style="font-size:0.72rem; color:#cbd5e1; margin-top:2px;">Billing, estimates, client ledger, AI sync.</div>
                    <span style="font-size:0.7rem; color:#bae6fd; font-weight:600; display:inline-block; margin-top:6px;">invoicing.datapointtechnology.com ↗</span>
                </a>
            </div>

            <div style="display:flex; gap:1rem;">
                <a href="services.php#software" class="btn-cta">All Software Details →</a>
                <a href="contact.php" class="btn-secondary">Request Custom Demo</a>
            </div>
        </div>
    </div>
</div>

<!-- FEATURED HARDWARE EQUIPMENT -->
<section class="section">
    <div class="container">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:40px; flex-wrap:wrap; gap:1rem;">
            <div>
                <span class="eyebrow" style="margin-bottom:0.5rem;">Verified Hardware</span>
                <h2 style="font-size:2.2rem; margin:0;">Featured Equipment</h2>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-top:0.25rem;">Official products with warranty and professional installation</p>
            </div>
            <a href="products.php" class="btn-secondary" style="font-size:0.82rem;">
                Browse Full Catalog (<?= count($products) ?> items) →
            </a>
        </div>

        <div class="products-grid">
            <?php foreach (array_slice($products, 0, 8) as $prod): ?>
                <div class="product-item">
                    <div>
                        <div class="prod-thumb">
                            <img src="<?= e($prod['image']) ?>" alt="<?= e($prod['name']) ?>" loading="lazy">
                            <?php if (!empty($prod['badge'])): ?>
                                <span class="prod-badge"><?= e($prod['badge']) ?></span>
                            <?php endif; ?>
                            <span class="prod-cat-tag"><?= e($prod['category']) ?></span>
                        </div>
                        <div class="prod-body">
                            <div class="prod-header">
                                <div style="color:#fbbf24; font-size:0.75rem;">★★★★★</div>
                                <div class="prod-price"><?= e($prod['price']) ?></div>
                            </div>
                            <h3><?= e($prod['name']) ?></h3>
                            <p><?= e($prod['description']) ?></p>
                        </div>
                    </div>
                    <div class="prod-action">
                        <a href="https://wa.me/<?= e(APP_WHATSAPP) ?>?text=<?= urlencode('Assalam-o-Alaikum Moomal, I am inquiring about product: ' . $prod['name']) ?>" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-order">
                            💬 Inquire via WhatsApp
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- AI RECEPTIONIST MOOMAL BANNER -->
<section class="section section-alt" style="padding:60px 0;">
    <div class="container">
        <div style="background:linear-gradient(135deg, rgba(8,34,85,0.9) 0%, rgba(3,18,48,0.9) 100%); border:1px solid var(--border-accent); border-radius:28px; padding:3rem; display:grid; grid-template-columns:1.2fr 0.8fr; gap:2.5rem; align-items:center; box-shadow:0 20px 50px rgba(0,0,0,0.5);">
            <div>
                <span class="eyebrow" style="color:#34d399; background:rgba(16,185,129,0.15); border-color:rgba(16,185,129,0.3);">
                    🟢 Moomal — 24/7 AI Receptionist Connected
                </span>
                <h2 style="font-size:2.2rem; margin-bottom:1rem;">Need a Verified Proposal or Free Technical Site Survey?</h2>
                <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:1.5rem;">
                    Our front-desk AI receptionist, Moomal, instantly qualifies inbound requirements across CCTV, networking, optical fiber, and custom software. Talk to Moomal directly in Urdu, Sindhi, or English.
                </p>
                <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                    <a href="<?= e(PORTAL_WHATSAPP_RECEPTION) ?>" target="_blank" rel="noopener noreferrer" class="btn-cta" style="background:#16a34a; color:white;">
                        💬 Connect with Moomal on WhatsApp
                    </a>
                    <a href="contact.php" class="btn-secondary">
                        Submit Web Inquiry Form
                    </a>
                </div>
            </div>

            <div style="background:rgba(3,18,48,0.7); border:1px solid var(--border); border-radius:18px; padding:1.75rem;">
                <div style="font-size:0.75rem; font-weight:700; color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Lead Qualification Protocol</div>
                <h4 style="margin-bottom:1rem; font-size:1.1rem;">What Moomal prepares for you:</h4>
                <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; font-size:0.8rem; color:#cbd5e1;">
                    <li style="display:flex; align-items:flex-start; gap:0.5rem;">
                        <span style="color:var(--accent); font-weight:bold;">1.</span>
                        <span>100% Free On-Site Site Survey &amp; Cable Route Planning</span>
                    </li>
                    <li style="display:flex; align-items:flex-start; gap:0.5rem;">
                        <span style="color:var(--accent); font-weight:bold;">2.</span>
                        <span>Standardized 4-Camera ColorVu &amp; PoE NVR Hardware Package</span>
                    </li>
                    <li style="display:flex; align-items:flex-start; gap:0.5rem;">
                        <span style="color:var(--accent); font-weight:bold;">3.</span>
                        <span>Itemized Invoicing System PDF Quotation with Official Warranty</span>
                    </li>
                    <li style="display:flex; align-items:flex-start; gap:0.5rem;">
                        <span style="color:var(--accent); font-weight:bold;">4.</span>
                        <span>Direct Demo Access to Store Inventory &amp; Asset Management Suite</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
