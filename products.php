<?php
/**
 * DATAPOINT Technologies - Products Catalog (PHP)
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Hardware Catalog & Surveillance Equipment | " . APP_NAME;
$pageDescription = "Official product catalog of DATAPOINT Technologies: Hikvision ColorVu cameras, 4K AcuSense, PoE NVRs, pure copper Cat6 rolls, and biometrics.";

include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';

$categories = ['All'];
foreach ($products as $p) {
    if (!in_array($p['category'], $categories)) {
        $categories[] = $p['category'];
    }
}
?>

<!-- HERO -->
<section style="padding:150px 0 50px 0; text-align:center;">
    <div class="container">
        <span class="eyebrow">Enterprise Hardware &amp; Surveillance</span>
        <h1 style="font-size:3.2rem; margin-bottom:1rem;">Official Product Catalog</h1>
        <p style="color:var(--text-muted); font-size:1.1rem; max-width:650px; margin:0 auto 2rem auto;">
            Verified CCTV, ColorVu cameras, 4K NVRs, pure copper networking cables, and enterprise security systems with official warranty.
        </p>

        <!-- Search Bar -->
        <div class="search-input-wrap">
            <span class="search-icon">🔍</span>
            <input type="text" id="productSearchInput" placeholder="Search cameras, NVRs, cables, biometrics...">
        </div>

        <!-- Category Filters -->
        <div class="product-filter-bar">
            <?php foreach ($categories as $cat): ?>
                <button class="filter-btn <?= $cat === 'All' ? 'active' : '' ?>" data-cat="<?= e($cat) ?>">
                    <?= e($cat) ?>
                </button>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- PRODUCTS GRID -->
<section class="section" style="padding-top:0;">
    <div class="container">
        <div class="products-grid" id="productsContainer">
            <?php foreach ($products as $p): ?>
                <div class="product-item" data-category="<?= e($p['category']) ?>">
                    <div>
                        <div class="prod-thumb">
                            <img src="<?= e($p['image']) ?>" alt="<?= e($p['name']) ?>" loading="lazy" onerror="this.onerror=null; this.src='assets/images/products/hik-bullet-front.png';">
                            <?php if (!empty($p['badge'])): ?>
                                <span class="prod-badge"><?= e($p['badge']) ?></span>
                            <?php endif; ?>
                            <span class="prod-cat-tag"><?= e($p['category']) ?></span>
                        </div>
                        <div class="prod-body">
                            <div class="prod-header">
                                <div style="color:#fbbf24; font-size:0.75rem;">
                                    <?php for ($i = 0; $i < $p['rating']; $i++): ?>★<?php endfor; ?>
                                </div>
                                <div class="prod-price"><?= e($p['price']) ?></div>
                            </div>
                            <h3><?= e($p['name']) ?></h3>
                            <p><?= e($p['description']) ?></p>
                        </div>
                    </div>
                    <div class="prod-action">
                        <a href="https://wa.me/<?= e(APP_WHATSAPP) ?>?text=<?= urlencode('Assalam-o-Alaikum Moomal, I am inquiring about product: ' . $p['name'] . ' (' . $p['price'] . ')') ?>" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-order">
                            💬 Inquire / Order on WhatsApp
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
