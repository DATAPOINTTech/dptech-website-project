<?php
/**
 * DATAPOINT Technologies - Contact Page (PHP)
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Contact & Free Site Survey | " . APP_NAME;
$pageDescription = "Get in touch with DATAPOINT Technologies. Book a 100% Free On-Site Site Survey for CCTV, networking, fiber optic, or software solutions.";

include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';
?>

<!-- HERO -->
<section style="padding:150px 0 50px 0; text-align:center;">
    <div class="container">
        <span class="eyebrow">Get in Touch</span>
        <h1 style="font-size:3.2rem; margin-bottom:1rem;">Contact &amp; Free Site Survey</h1>
        <p style="color:var(--text-muted); font-size:1.15rem; max-width:650px; margin:0 auto;">
            Have a project in mind? Let&apos;s schedule a 100% Free On-Site Site Survey by a senior engineer.
        </p>
    </div>
</section>

<!-- CONTACT SECTION -->
<section class="section" style="padding-top:0;">
    <div class="container">
        <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:3rem;">
            <!-- Form Card -->
            <div style="background:var(--surface-glass); border:1px solid var(--border); border-radius:26px; padding:2.5rem; backdrop-filter:blur(14px);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; border-bottom:1px solid var(--border); padding-bottom:1rem;">
                    <div>
                        <h2 style="font-size:1.8rem; margin-bottom:0.25rem;">Send Us an Inquiry</h2>
                        <span style="font-size:0.8rem; color:#34d399; font-weight:600;">● Connected to AI Receptionist (Moomal)</span>
                    </div>
                    <span style="font-size:0.75rem; background:rgba(16,150,254,0.15); color:var(--accent); padding:4px 10px; border-radius:9999px; font-weight:700;">
                        100% Free Survey
                    </span>
                </div>

                <div id="contactAlert" style="display:none; padding:1rem; border-radius:12px; margin-bottom:1.5rem; font-size:0.88rem;"></div>

                <form id="contactFormMain" style="display:flex; flex-direction:column; gap:1.2rem;">
                    <?= csrf_field() ?>
                    <input type="text" name="dp_website_trap" style="display:none;" tabindex="-1" autocomplete="off">

                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                        <div>
                            <label style="display:block; font-size:0.8rem; font-weight:600; color:#cbd5e1; margin-bottom:0.4rem;">1. Full Name *</label>
                            <input type="text" name="name" required placeholder="e.g. Engr. Asif Khan" style="width:100%; padding:0.75rem 1rem; border-radius:12px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
                        </div>
                        <div>
                            <label style="display:block; font-size:0.8rem; font-weight:600; color:#cbd5e1; margin-bottom:0.4rem;">2. WhatsApp / Phone *</label>
                            <input type="tel" name="phone" required placeholder="e.g. 0316 7788990" style="width:100%; padding:0.75rem 1rem; border-radius:12px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
                        </div>
                    </div>

                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                        <div>
                            <label style="display:block; font-size:0.8rem; font-weight:600; color:#cbd5e1; margin-bottom:0.4rem;">3. Property Location (City/Area) *</label>
                            <input type="text" name="location" required placeholder="e.g. Clifton, Karachi / Hyderabad / Sukkur" style="width:100%; padding:0.75rem 1rem; border-radius:12px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
                        </div>
                        <div>
                            <label style="display:block; font-size:0.8rem; font-weight:600; color:#cbd5e1; margin-bottom:0.4rem;">Email Address</label>
                            <input type="email" name="email" placeholder="client@company.com" style="width:100%; padding:0.75rem 1rem; border-radius:12px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
                        </div>
                    </div>

                    <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:1rem;">
                        <div>
                            <label style="display:block; font-size:0.8rem; font-weight:600; color:#cbd5e1; margin-bottom:0.4rem;">4. Service Division *</label>
                            <select name="service" style="width:100%; padding:0.75rem 1rem; border-radius:12px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
                                <option value="4-Camera ColorVu CCTV Setup">1. CCTV 4-Camera ColorVu Package (PoE)</option>
                                <option value="Commercial CCTV & AcuSense Surveillance">1. CCTV Commercial &amp; AcuSense AI</option>
                                <option value="Networking Solutions (Cat6 & WiFi)">2. Networking Solutions (Cat6, Switches, WiFi 6)</option>
                                <option value="Fiber Optic and DATA Communication">3. Fiber Optic &amp; DATA Communication</option>
                                <option value="Store Inventory & Asset Management System">4. Store Inventory System (sm.datapointtechnology.com)</option>
                                <option value="Enterprise Invoicing System">4. Invoicing Portal (invoicing.datapointtechnology.com)</option>
                                <option value="Custom Software / LMS / ANPR">4. Software Solutions (LMS, ANPR, Attendance)</option>
                            </select>
                        </div>
                        <div>
                            <label style="display:block; font-size:0.8rem; font-weight:600; color:#cbd5e1; margin-bottom:0.4rem;">Timeline</label>
                            <select name="urgency" style="width:100%; padding:0.75rem 1rem; border-radius:12px; background:#082255; border:1px solid var(--border); color:white; outline:none;">
                                <option value="urgent">Immediate (This Week)</option>
                                <option value="normal" selected>Normal (1-2 Weeks)</option>
                                <option value="planning">Planning Phase Only</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label style="display:block; font-size:0.8rem; font-weight:600; color:#cbd5e1; margin-bottom:0.4rem;">Project Details / Cable Paths / Cameras</label>
                        <textarea name="message" rows="4" placeholder="Tell us about your premise or software requirements..." style="width:100%; padding:0.75rem 1rem; border-radius:12px; background:#082255; border:1px solid var(--border); color:white; outline:none; resize:none;"></textarea>
                    </div>

                    <button type="submit" id="btnSubmitContact" class="btn-cta" style="padding:0.9rem; justify-content:center; font-size:0.95rem; margin-top:0.5rem;">
                        Submit Inquiry &amp; Confirm Free Survey
                    </button>
                </form>
            </div>

            <!-- Contact Information Sidebar -->
            <div style="display:flex; flex-direction:column; gap:1.25rem;">
                <div style="background:var(--surface-glass); border:1px solid var(--border); border-radius:24px; padding:2rem;">
                    <h3 style="font-size:1.4rem; margin-bottom:1.5rem;">Official Contacts</h3>

                    <div style="display:flex; flex-direction:column; gap:1.25rem;">
                        <div style="display:flex; align-items:flex-start; gap:1rem;">
                            <div style="width:44px; height:44px; border-radius:12px; background:rgba(16,150,254,0.15); display:flex; align-items:center; justify-content:center; font-size:1.3rem;">📞</div>
                            <div>
                                <span style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em;">Phone / AI Reception</span>
                                <div style="font-weight:700; color:white; font-size:1.05rem;">
                                    <a href="tel:<?= e(APP_PHONE) ?>"><?= e(APP_PHONE) ?></a>
                                </div>
                            </div>
                        </div>

                        <div style="display:flex; align-items:flex-start; gap:1rem;">
                            <div style="width:44px; height:44px; border-radius:12px; background:rgba(16,150,254,0.15); display:flex; align-items:center; justify-content:center; font-size:1.3rem;">✉️</div>
                            <div>
                                <span style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em;">Email Address</span>
                                <div style="font-weight:700; color:white; font-size:1.05rem;">
                                    <a href="mailto:<?= e(APP_EMAIL) ?>"><?= e(APP_EMAIL) ?></a>
                                </div>
                            </div>
                        </div>

                        <div style="display:flex; align-items:flex-start; gap:1rem;">
                            <div style="width:44px; height:44px; border-radius:12px; background:rgba(16,150,254,0.15); display:flex; align-items:center; justify-content:center; font-size:1.3rem;">📍</div>
                            <div>
                                <span style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em;">Head Office</span>
                                <div style="font-weight:700; color:white; font-size:1.05rem;">
                                    <?= e(APP_ADDRESS) ?>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border);">
                        <a href="<?= e(PORTAL_WHATSAPP_RECEPTION) ?>" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-order" style="background:#16a34a; color:white; border-color:#22c55e; padding:0.85rem; font-size:0.88rem;">
                            💬 WhatsApp Live Chat with Moomal
                        </a>
                    </div>
                </div>

                <!-- Live Demos Callout -->
                <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); border-radius:24px; padding:1.75rem;">
                    <div style="font-size:0.75rem; font-weight:800; color:#fbbf24; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">
                        Live Software Portals
                    </div>
                    <p style="color:#cbd5e1; font-size:0.85rem; line-height:1.5; margin-bottom:1rem;">
                        Need immediate access to our software demos or accounting engine?
                    </p>
                    <div style="display:flex; flex-direction:column; gap:0.5rem;">
                        <a href="<?= e(PORTAL_INVENTORY_DEMO) ?>" target="_blank" rel="noopener noreferrer" style="color:#fbbf24; font-size:0.85rem; font-weight:700; display:flex; align-items:center; justify-content:space-between;">
                            <span>📦 Store Inventory Demo</span>
                            <span>sm.datapointtechnology.com ↗</span>
                        </a>
                        <a href="<?= e(PORTAL_INVOICING) ?>" target="_blank" rel="noopener noreferrer" style="color:#38bdf8; font-size:0.85rem; font-weight:700; display:flex; align-items:center; justify-content:space-between;">
                            <span>🧾 Invoicing System Portal</span>
                            <span>invoicing.datapointtechnology.com ↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactFormMain');
    const contactAlert = document.getElementById('contactAlert');
    const btnSubmit = document.getElementById('btnSubmitContact');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            btnSubmit.disabled = true;
            btnSubmit.innerText = 'Transmitting to Moomal...';

            const formData = new FormData(contactForm);

            try {
                const res = await fetch('api/contact.php', {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();

                contactAlert.style.display = 'block';
                if (data.success) {
                    contactAlert.style.background = 'rgba(16, 185, 129, 0.2)';
                    contactAlert.style.border = '1px solid #10b981';
                    contactAlert.style.color = '#34d399';
                    contactAlert.innerHTML = `<strong>Inquiry Received!</strong> ${data.message} <br><br><a href="https://wa.me/923167788990?text=${encodeURIComponent('Assalam-o-Alaikum Moomal! I just submitted an inquiry for: ' + (formData.get('name') || '') + ' (' + (formData.get('phone') || '') + ')')}" target="_blank" style="color:#fde68a; font-weight:bold; text-decoration:underline;">💬 Tap here to continue directly on WhatsApp</a>`;
                    contactForm.reset();
                } else {
                    contactAlert.style.background = 'rgba(239, 68, 68, 0.2)';
                    contactAlert.style.border = '1px solid #ef4444';
                    contactAlert.style.color = '#f87171';
                    contactAlert.innerHTML = `<strong>Error:</strong> ${data.error || 'Submission failed. Please try again.'}`;
                }
            } catch (err) {
                contactAlert.style.display = 'block';
                contactAlert.style.background = 'rgba(239, 68, 68, 0.2)';
                contactAlert.style.border = '1px solid #ef4444';
                contactAlert.style.color = '#f87171';
                contactAlert.innerHTML = '<strong>Network Notice:</strong> Could not transmit. Please reach out directly on WhatsApp at 0316 7788990.';
            } finally {
                btnSubmit.disabled = false;
                btnSubmit.innerText = 'Submit Inquiry & Confirm Free Survey';
            }
        });
    }
});
</script>

<?php include __DIR__ . '/includes/footer.php'; ?>
