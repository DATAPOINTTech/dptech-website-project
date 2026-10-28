<?php
/**
 * DATAPOINT Technologies - Services & Software Solutions Page (PHP)
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "4 Core Divisions & Software Solutions | " . APP_NAME;
$pageDescription = "1. CCTV & Security Surveillance, 2. Networking Solutions, 3. Fiber Optic and DATA Communication, 4. Software Solutions. Live demo for Store Inventory and Invoicing portal.";

include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';
?>

<!-- HERO -->
<section style="padding:150px 0 60px 0; text-align:center; position:relative; overflow:hidden;">
    <div class="container">
        <span class="eyebrow">End-to-End Capabilities</span>
        <h1 style="font-size:3.2rem; margin-bottom:1rem;">Our 4 Core Divisions</h1>
        <p style="color:var(--text-muted); font-size:1.15rem; max-width:650px; margin:0 auto 1.75rem auto;">
            1. CCTV &amp; Security Surveillance • 2. Networking Solutions • 3. Fiber Optic and DATA Communication • 4. Software Solutions
        </p>

        <!-- Live Demo Buttons -->
        <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
            <a href="<?= e(PORTAL_INVENTORY_DEMO) ?>" target="_blank" rel="noopener noreferrer" class="portal-chip inventory" style="font-size:0.85rem; padding:0.55rem 1.1rem;">
                📦 Store Inventory Demo (sm.datapointtechnology.com) ↗
            </a>
            <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" class="portal-chip invoicing" style="font-size:0.85rem; padding:0.55rem 1.1rem;">
                🧾 Invoicing System Login (invoicing.datapointtechnology.com) ↗
            </a>
        </div>
    </div>
</section>

<!-- STICKY JUMP BAR -->
<div style="position:sticky; top:75px; z-index:900; background:rgba(3,18,48,0.95); backdrop-filter:blur(10px); border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:0.75rem 0;">
    <div class="container" style="display:flex; justify-content:center; gap:1.5rem; overflow-x:auto; font-size:0.85rem; font-weight:700;">
        <a href="#cctv" style="color:#cbd5e1;">1. CCTV &amp; Surveillance</a>
        <span style="color:var(--border);">•</span>
        <a href="#networking" style="color:#cbd5e1;">2. Networking Solutions</a>
        <span style="color:var(--border);">•</span>
        <a href="#fiber-datacom" style="color:#cbd5e1;">3. Fiber &amp; DATA Comm</a>
        <span style="color:var(--border);">•</span>
        <a href="#software" style="color:var(--accent);">4. Software Solutions</a>
    </div>
</div>

<!-- SERVICES DETAIL BLOCKS -->
<?php foreach ($services as $key => $srv): ?>
    <section id="<?= e($srv['id']) ?>" class="section <?= $srv['order'] % 2 === 0 ? 'section-alt' : '' ?>" style="scroll-margin-top:120px;">
        <div class="container">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:center;">
                <div style="<?= $srv['order'] % 2 === 0 ? 'order:2;' : '' ?>">
                    <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
                        <span class="card-number" style="position:static;"><?= e($srv['order']) ?></span>
                        <span style="font-size:2rem;"><?= e($srv['icon']) ?></span>
                    </div>
                    <h2 style="font-size:2.4rem; margin-bottom:1rem;"><?= e($srv['title']) ?></h2>
                    <p style="color:#cbd5e1; font-size:1.05rem; line-height:1.6; margin-bottom:1.5rem;">
                        <?= e($srv['description']) ?>
                    </p>

                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.6rem; margin-bottom:1.75rem;">
                        <?php foreach ($srv['features'] as $feat): ?>
                            <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; color:#f1f5f9;">
                                <span style="color:var(--accent); font-weight:bold;">✓</span>
                                <span><?= e($feat) ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>

                    <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:2rem;">
                        <?php foreach ($srv['brands'] as $br): ?>
                            <span style="padding:0.25rem 0.75rem; background:rgba(255,255,255,0.06); border:1px solid var(--border); border-radius:9999px; font-size:0.75rem; color:var(--accent); font-weight:600;">
                                <?= e($br) ?>
                            </span>
                        <?php endforeach; ?>
                    </div>

                    <div style="display:flex; gap:1rem;">
                        <a href="contact.php" class="btn-cta">Request Free Site Survey</a>
                        <a href="https://wa.me/<?= e(APP_WHATSAPP) ?>?text=<?= urlencode('Assalam-o-Alaikum Moomal, I am inquiring about: ' . $srv['title']) ?>" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                            💬 Chat with Moomal
                        </a>
                    </div>
                </div>

                <div style="<?= $srv['order'] % 2 === 0 ? 'order:1;' : '' ?>">
                    <div style="border-radius:24px; overflow:hidden; border:1px solid var(--border); box-shadow:0 20px 40px rgba(0,0,0,0.4); aspect-ratio:4/3; position:relative;">
                        <img src="<?= e($srv['image']) ?>" alt="<?= e($srv['title']) ?>" style="width:100%; height:100%; object-fit:cover;">
                        <div style="position:absolute; bottom:14px; left:14px; background:rgba(3,18,48,0.85); backdrop-filter:blur(8px); padding:4px 12px; border-radius:8px; border:1px solid var(--border); font-size:0.75rem; font-weight:600;">
                            <?= e($srv['title']) ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php endforeach; ?>

<!-- SECTION 4: FULL SOFTWARE SOLUTIONS DEVELOPED -->
<section id="software" class="section section-alt" style="scroll-margin-top:120px; border-top:1px solid var(--border);">
    <div class="container">
        <div class="section-head">
            <span class="eyebrow">Section 4 • Enterprise Software Division</span>
            <h2>Software Solutions Developed</h2>
            <p>Full suite of web applications, portal solutions, and asset tracking suites developed by DATAPOINT Technologies. Click any link to explore live demos or system details.</p>
        </div>

        <div class="software-list">
            <?php foreach ($softwareSolutions as $sw): ?>
                <div class="software-card-detailed" id="software-<?= e($sw['id']) ?>">
                    <div>
                        <div class="sw-badge-row">
                            <span style="font-size:1.8rem;"><?= e($sw['icon']) ?></span>
                            <?php if (!empty($sw['badge'])): ?>
                                <span class="sw-tag-demo"><?= e($sw['badge']) ?></span>
                            <?php endif; ?>
                            <span style="font-size:0.72rem; color:var(--text-muted); background:rgba(255,255,255,0.06); padding:2px 8px; border-radius:9999px;">
                                <?= e($sw['category']) ?>
                            </span>
                        </div>

                        <h3><?= e($sw['title']) ?></h3>
                        <p><?= e($sw['description']) ?></p>

                        <div class="sw-feature-grid">
                            <?php foreach ($sw['features'] as $f): ?>
                                <div class="sw-feat-item">
                                    <span>✓</span>
                                    <div><?= e($f) ?></div>
                                </div>
                            <?php endforeach; ?>
                        </div>

                        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
                            <?php if (!empty($sw['demoUrl'])): ?>
                                <a href="<?= e($sw['demoUrl']) ?>" target="_blank" rel="noopener noreferrer" class="btn-cta" style="background:#f59e0b; color:#031230; font-weight:800;">
                                    🚀 Open Live Demo / Portal ↗
                                </a>
                            <?php endif; ?>
                            <a href="contact.php?subject=<?= urlencode('Demo Request: ' . $sw['title']) ?>" class="btn-secondary">
                                Request Custom Walkthrough
                            </a>
                        </div>
                    </div>

                    <div class="sw-img-preview">
                        <img src="<?= e($sw['image']) ?>" alt="<?= e($sw['title']) ?>">
                        <?php if (!empty($sw['demoUrl'])): ?>
                            <div style="position:absolute; bottom:12px; right:12px; background:rgba(2,11,30,0.85); backdrop-filter:blur(6px); border:1px solid rgba(245,158,11,0.4); padding:4px 10px; border-radius:8px; font-size:0.72rem; color:#fde68a; font-weight:700;">
                                Live Demo: <?= e(str_replace('http://', '', $sw['demoUrl'])) ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- FAQS -->
<section class="section">
    <div class="container" style="max-width:850px;">
        <div class="section-head">
            <span class="eyebrow">Clear Answers</span>
            <h2>Frequently Asked Questions</h2>
        </div>

        <div style="display:flex; flex-direction:column; gap:1rem;">
            <div style="background:var(--surface-glass); border:1px solid var(--border); border-radius:16px; padding:1.5rem;">
                <h4 style="font-size:1.1rem; margin-bottom:0.5rem; color:var(--accent);">What types of software solutions do you offer?</h4>
                <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.6;">
                    We build and deploy Store Inventory &amp; Asset Management (live demo available at sm.datapointtechnology.com), Enterprise Invoicing Portals (invoicing.datapointtechnology.com), Student Portal/LMS, Admission Systems, Biometric Attendance, Recruitment suites, and ANPR vehicle recognition platforms.
                </p>
            </div>

            <div style="background:var(--surface-glass); border:1px solid var(--border); border-radius:16px; padding:1.5rem;">
                <h4 style="font-size:1.1rem; margin-bottom:0.5rem; color:var(--accent);">Can I test the Store Inventory and Asset Management System before ordering?</h4>
                <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.6;">
                    Yes! A fully functional demo is live at <a href="<?= e(PORTAL_INVENTORY_DEMO) ?>" target="_blank" rel="noopener noreferrer" style="color:#fbbf24; text-decoration:underline;">http://sm.datapointtechnology.com</a>. You can explore inventory tracking, multi-warehouse stock, barcode audits, and supplier workflows.
                </p>
            </div>

            <div style="background:var(--surface-glass); border:1px solid var(--border); border-radius:16px; padding:1.5rem;">
                <h4 style="font-size:1.1rem; margin-bottom:0.5rem; color:var(--accent);">What is included in the standard 4-Camera CCTV package?</h4>
                <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.6;">
                    Our 4-camera bundle includes 4x ColorVu full-color cameras, 4-Port PoE NVR, 1TB WD Purple surveillance hard drive, certified pure copper Cat6 cabling, connectors, waterproof junction boxes, and professional on-site mounting with official warranty.
                </p>
            </div>

            <div style="background:var(--surface-glass); border:1px solid var(--border); border-radius:16px; padding:1.5rem;">
                <h4 style="font-size:1.1rem; margin-bottom:0.5rem; color:var(--accent);">How do I access the Invoicing Portal?</h4>
                <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.6;">
                    Authorized clients and staff can log in directly at <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" style="color:#38bdf8; text-decoration:underline;">http://invoicing.datapointtechnology.com</a> to access verified estimates, generate invoices, and reconcile payment ledgers.
                </p>
            </div>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
