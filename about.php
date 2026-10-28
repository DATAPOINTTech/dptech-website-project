<?php
/**
 * DATAPOINT Technologies - About Us Page (PHP)
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "About Us | " . APP_NAME;
$pageDescription = "About DATAPOINT Technologies (Established 2016). Leading IT system integrator in Pakistan specializing in CCTV, networking, fiber optic, and enterprise software.";

include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';
?>

<!-- HERO -->
<section style="padding:150px 0 60px 0; text-align:center;">
    <div class="container">
        <span class="eyebrow">Established 2016</span>
        <h1 style="font-size:3.2rem; margin-bottom:1rem;">Where Technology Meets Excellence</h1>
        <p style="color:var(--text-muted); font-size:1.15rem; max-width:650px; margin:0 auto;">
            Leading IT system integrators specializing in physical security, networking infrastructure, fiber optics, and enterprise software applications.
        </p>
    </div>
</section>

<!-- MAIN ABOUT SECTION -->
<section class="section section-alt">
    <div class="container">
        <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:3.5rem; align-items:center;">
            <div>
                <span class="eyebrow">Our Journey</span>
                <h2 style="font-size:2.4rem; margin-bottom:1.25rem;">A Decade of Proven Engineering</h2>
                <p style="color:#cbd5e1; font-size:1.05rem; line-height:1.7; margin-bottom:1.25rem;">
                    DATAPOINT is a premier IT system integrator specializing in Security &amp; Surveillance (PACS), Datacenter solutions, Networking infrastructure, Fiber Optic communication, and custom software development.
                </p>
                <p style="color:#cbd5e1; font-size:1.05rem; line-height:1.7; margin-bottom:2rem;">
                    With over a decade of hands-on field experience, our certified engineering team has completed 500+ institutional, industrial, and commercial deployments across Pakistan. From precision optical fiber core splicing to 4K ColorVu AI camera deployments and cloud ERP systems, we engineer solutions built to last.
                </p>

                <div class="hero-stats" style="border:none; padding:0;">
                    <?php foreach ($stats as $stat): ?>
                        <div class="stat-item">
                            <div class="val"><?= e($stat['value']) ?></div>
                            <div class="lbl"><?= e($stat['label']) ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                <?php foreach ($services as $srv): ?>
                    <div style="background:var(--surface-glass); border:1px solid var(--border); border-radius:18px; padding:1.5rem; text-align:center;">
                        <div style="font-size:2.2rem; margin-bottom:0.5rem;"><?= e($srv['icon']) ?></div>
                        <h4 style="font-size:0.95rem; margin-bottom:0.25rem;"><?= e($srv['title']) ?></h4>
                        <span style="font-size:0.7rem; color:var(--accent);">Division <?= e($srv['order']) ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- TECHNOLOGY PARTNERS -->
<section class="section">
    <div class="container">
        <div class="section-head">
            <span class="eyebrow">Strategic Alliances</span>
            <h2>Our Technology Partners</h2>
            <p>We engineer enterprise solutions using world-class hardware from global technology leaders.</p>
        </div>

        <div style="display:flex; justify-content:center; gap:1.25rem; flex-wrap:wrap;">
            <?php
            $partners = ['Hikvision', 'EZVIZ', 'Dahua', 'Cisco', 'MikroTik', 'TP-Link', 'Ubiquiti', 'Corning', 'CommScope', 'Panduit', 'Western Digital', 'ZKTeco'];
            foreach ($partners as $partner):
            ?>
                <div style="padding:0.75rem 1.5rem; background:var(--surface-glass); border:1px solid var(--border); border-radius:14px; font-weight:700; color:#e2e8f0; font-size:0.9rem;">
                    <?= e($partner) ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>

