<?php
/**
 * DATAPOINT Technologies - Footer Component
 */
?>
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Brand -->
            <div class="footer-col">
                <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
                    <div class="logo-badge">
                        <img src="assets/images/logo.png" alt="<?= e(APP_NAME) ?>">
                    </div>
                    <div>
                        <h4 style="margin:0; font-size:1.1rem;"><?= e(APP_NAME) ?></h4>
                        <span style="font-size:0.75rem; color:var(--accent);"><?= e(APP_TAGLINE) ?></span>
                    </div>
                </div>
                <p style="color:var(--text-muted); font-size:0.85rem; line-height:1.6; margin-bottom:1.5rem; max-width:380px;">
                    Leading IT system integrator established in 2016, specializing in CCTV security surveillance, enterprise networking, optical fiber backbones, and custom business software.
                </p>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                    <span style="padding:0.25rem 0.65rem; background:rgba(255,255,255,0.05); border:1px solid var(--border); border-radius:9999px; font-size:0.72rem;">
                        cPanel Cloud Hosted
                    </span>
                    <span style="padding:0.25rem 0.65rem; background:rgba(16,150,254,0.15); border:1px solid var(--border-accent); border-radius:9999px; font-size:0.72rem; color:var(--accent);">
                        AI Receptionist Active
                    </span>
                </div>
            </div>

            <!-- Core Services -->
            <div class="footer-col">
                <h4>Core Divisions</h4>
                <ul class="footer-links">
                    <li><a href="services.php#cctv">1. CCTV &amp; Security Surveillance</a></li>
                    <li><a href="services.php#networking">2. Networking Solutions</a></li>
                    <li><a href="services.php#fiber-datacom">3. Fiber Optic &amp; DATA Comm</a></li>
                    <li><a href="services.php#software">4. Software Solutions</a></li>
                    <li><a href="products.php">Product Hardware Catalog</a></li>
                </ul>
            </div>

            <!-- Software Demos & Portals -->
            <div class="footer-col">
                <h4>Software &amp; Portals</h4>
                <ul class="footer-links">
                    <li>
                        <a href="<?= e(PORTAL_INVENTORY_DEMO) ?>" target="_blank" rel="noopener noreferrer" style="color:#fbbf24; font-weight:600;">
                            📦 Store Inventory Demo ↗
                        </a>
                    </li>
                    <li>
                        <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" style="color:#38bdf8; font-weight:600;">
                            🧾 Invoicing System Login ↗
                        </a>
                    </li>
                    <li>
                        <a href="<?= e(PORTAL_WEBMAIL) ?>" target="_blank" rel="noopener noreferrer" style="color:#34d399; font-weight:600;">
                            ✉️ Webmail Login ↗
                        </a>
                    </li>
                    <li><a href="services.php#software">Student Portal &amp; LMS</a></li>
                    <li><a href="services.php#software">ANPR Monitoring Suite</a></li>
                    <li><a href="services.php#software">Biometric Attendance</a></li>
                </ul>
            </div>

            <!-- Contact & Reception -->
            <div class="footer-col">
                <h4>Contact &amp; Support</h4>
                <ul class="footer-links">
                    <li>
                        <span style="color:var(--accent);">📞</span>
                        <a href="tel:<?= e(APP_PHONE) ?>"><?= e(APP_PHONE) ?></a>
                        <div style="font-size:0.7rem; color:var(--text-muted);">24/7 AI Reception Helpline</div>
                    </li>
                    <li>
                        <span style="color:var(--accent);">✉️</span>
                        <a href="mailto:<?= e(APP_EMAIL) ?>"><?= e(APP_EMAIL) ?></a>
                    </li>
                    <li>
                        <span style="color:var(--accent);">📍</span>
                        <span><?= e(APP_ADDRESS) ?></span>
                    </li>
                    <li style="margin-top:0.75rem;">
                        <a href="<?= e(PORTAL_WHATSAPP_RECEPTION) ?>" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-order" style="background:#15803d; color:white; border-color:#16a34a;">
                            💬 WhatsApp AI Receptionist
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <div>
                &copy; <?= date('Y') ?> <?= e(APP_LEGAL_NAME) ?>. All rights reserved.
            </div>
            <div style="display:flex; gap:1.25rem;">
                <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer">Invoicing Portal</a>
                <a href="<?= e(PORTAL_INVENTORY_DEMO) ?>" target="_blank" rel="noopener noreferrer">Inventory Live Demo</a>
                <a href="<?= e(PORTAL_WEBMAIL) ?>" target="_blank" rel="noopener noreferrer">Webmail</a>
                <a href="contact.php">Free Site Survey</a>
            </div>
        </div>
    </div>
</footer>

<!-- MOOMAL AI RECEPTIONIST FLOATING WIDGET -->
<div class="moomal-chat-bubble">
    <div class="moomal-badge-alert" id="moomalBadgeAlert">
        <span class="moomal-pulse"></span>
        <span>Moomal AI Receptionist Online</span>
    </div>
    <button class="moomal-btn-trigger" id="btnToggleChat" aria-label="Open Moomal AI Reception Chat">
        <span>👩‍💼</span>
    </button>
</div>

<!-- MOOMAL CHAT DRAWER -->
<div class="moomal-chat-drawer" id="moomalDrawer">
    <!-- Header -->
    <div class="chat-header">
        <div class="chat-agent-info">
            <div class="chat-avatar">👩‍💼</div>
            <div>
                <div style="display:flex; align-items:center; gap:0.4rem;">
                    <strong style="color:white; font-size:0.95rem;">Moomal</strong>
                    <span style="background:rgba(16,185,129,0.2); color:#34d399; font-size:0.65rem; padding:1px 6px; border-radius:9999px; font-weight:700;">AI Reception</span>
                </div>
                <div style="color:var(--text-muted); font-size:0.7rem;">Inbound Lead Qualification &amp; Support</div>
            </div>
        </div>
        <div style="display:flex; align-items:center; gap:0.4rem;">
            <a href="https://wa.me/<?= e(APP_WHATSAPP) ?>" target="_blank" rel="noopener noreferrer" style="background:rgba(16,185,129,0.2); color:#34d399; padding:4px 8px; border-radius:8px; font-size:0.75rem; font-weight:600;">
                📞 Call
            </a>
            <button id="btnCloseChat" style="background:none; border:none; color:var(--text-muted); font-size:1.2rem; cursor:pointer; padding:0 4px;">✕</button>
        </div>
    </div>

    <!-- Subbar: Language & Free Survey -->
    <div class="chat-subbar">
        <div style="display:flex; align-items:center; gap:0.4rem;">
            <span>Language:</span>
            <button class="lang-btn active" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="ur">اردو</button>
            <button class="lang-btn" data-lang="sd">سنڌي</button>
        </div>
        <button id="btnOpenSurveyModal" style="background:none; border:none; color:var(--accent); font-size:0.72rem; font-weight:700; cursor:pointer;">
            📋 Free Site Survey
        </button>
    </div>

    <!-- Messages List -->
    <div class="chat-messages" id="chatMessages">
        <div class="msg bot">
            Assalam-o-Alaikum! 🌸 I am <strong>Moomal</strong>, the Official AI Receptionist for DATAPOINT Technologies. I qualify inbound inquiries, schedule 100% Free On-Site Site Surveys, and guide you through our CCTV, Networking, Fiber, and Enterprise Software solutions. How can I assist you today?
        </div>
    </div>

    <!-- Quick Chips -->
    <div class="chat-quick-chips">
        <button class="chip-btn" data-query="Tell me about the 4-Camera ColorVu Package & Free Site Survey">📹 4-Camera Package</button>
        <button class="chip-btn" data-query="Show me demo of Store Inventory and Asset Management System">📦 Inventory Demo</button>
        <button class="chip-btn" data-query="How do I access the Invoicing System?">🧾 Invoicing System</button>
        <button class="chip-btn" data-query="I want to schedule a Free Site Survey">🛠️ Free Site Survey</button>
    </div>

    <!-- WhatsApp Forwarding Strip -->
    <div style="padding:6px 12px; background:#010816; border-top:1px solid var(--border); display:flex;">
        <a id="btnChatWhatsAppTransfer" href="<?= e(PORTAL_WHATSAPP_RECEPTION) ?>" target="_blank" rel="noopener noreferrer" style="flex:1; padding:6px 10px; background:#16a34a; color:white; border-radius:10px; font-size:0.75rem; font-weight:700; text-align:center; display:flex; align-items:center; justify-content:center; gap:0.4rem;">
            💬 Continue with Moomal on WhatsApp
        </a>
    </div>

    <!-- Input Form -->
    <form id="chatForm" class="chat-input-area">
        <input type="text" id="chatInput" placeholder="Ask Moomal about CCTV, Networking, Software..." autocomplete="off">
        <button type="submit">Send</button>
    </form>
</div>

<!-- 4-POINT LEAD QUALIFICATION MODAL -->
<div class="modal-overlay" id="surveyModal">
    <div class="modal-card">
        <button id="btnCloseSurveyModal" style="position:absolute; top:1rem; right:1rem; background:none; border:none; color:var(--text-muted); font-size:1.2rem; cursor:pointer;">✕</button>
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
            <div style="width:40px; height:40px; border-radius:10px; background:rgba(16,150,254,0.15); display:flex; align-items:center; justify-content:center; font-size:1.3rem;">📋</div>
            <div>
                <h3 style="font-size:1.2rem; margin:0;">Moomal Lead Qualification</h3>
                <span style="font-size:0.75rem; color:var(--accent);">100% Free On-Site Site Survey by Senior Engineer</span>
            </div>
        </div>

        <form id="surveyForm" style="display:flex; flex-direction:column; gap:0.85rem;">
            <?= csrf_field() ?>
            <input type="text" name="dp_website_trap" style="display:none;" tabindex="-1" autocomplete="off">

            <div>
                <label style="display:block; font-size:0.75rem; font-weight:600; color:#cbd5e1; margin-bottom:0.25rem;">1. Full Name *</label>
                <input type="text" id="leadName" name="name" required placeholder="e.g. Engr. Asif Khan" style="width:100%; padding:0.65rem 0.85rem; border-radius:10px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
            </div>

            <div>
                <label style="display:block; font-size:0.75rem; font-weight:600; color:#cbd5e1; margin-bottom:0.25rem;">2. WhatsApp / Contact Phone *</label>
                <input type="tel" id="leadPhone" name="phone" required placeholder="e.g. 0316 7788990" style="width:100%; padding:0.65rem 0.85rem; border-radius:10px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
            </div>

            <div>
                <label style="display:block; font-size:0.75rem; font-weight:600; color:#cbd5e1; margin-bottom:0.25rem;">3. Property Location (City/Area) *</label>
                <input type="text" id="leadLocation" name="location" required placeholder="e.g. Clifton, Karachi / Hyderabad / Sukkur" style="width:100%; padding:0.65rem 0.85rem; border-radius:10px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
            </div>

            <div>
                <label style="display:block; font-size:0.75rem; font-weight:600; color:#cbd5e1; margin-bottom:0.25rem;">4. Service / Camera Preference</label>
                <select id="leadPreference" name="preference" style="width:100%; padding:0.65rem 0.85rem; border-radius:10px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
                    <option value="4-Camera ColorVu CCTV Setup">CCTV 4-Camera ColorVu Package (PoE + 1TB)</option>
                    <option value="Commercial CCTV & AcuSense Surveillance">Commercial CCTV &amp; AcuSense AI</option>
                    <option value="Enterprise Networking & Structured Cabling">Enterprise Networking &amp; Structured Cabling</option>
                    <option value="Fiber Optic Splicing & Backbone">Fiber Optic Backbone &amp; DATA Comm</option>
                    <option value="Store Inventory & Asset Management System">Store Inventory System (sm.datapointtechnology.com)</option>
                    <option value="Enterprise Invoicing Portal">Invoicing System (invoicing.datapointtechnology.com)</option>
                    <option value="Custom Software / LMS / ANPR">Custom Software Solutions</option>
                </select>
            </div>

            <button type="submit" class="btn-cta" style="margin-top:0.5rem; justify-content:center; padding:0.8rem;">
                Qualify Lead &amp; Confirm Free Survey
            </button>
        </form>
    </div>
</div>

<!-- Core Scripts -->
<script src="assets/js/main.js"></script>
<script src="assets/js/chat.js"></script>
</body>
</html>
