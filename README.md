# DATAPOINT Technologies — Enterprise PHP Website & AI Receptionist

Official enterprise web platform for **DATAPOINT Technologies** (Established 2016), built in native **PHP 8.0+** with zero Node.js server dependencies, optimized for standard **cPanel hosting**, and hardened with enterprise security.

---

## 🚀 Key Highlights & Architectural Features

### 1. Pure Native PHP 8.0+ Architecture
- **Zero Node/V8 Heap Overhead:** Eliminates all `ERR_MEMORY_ALLOCATION_FAILED` errors and complex Passenger / PM2 setups on cPanel.
- **Micro-Memory Footprint:** Operates smoothly with minimal RAM (under 10 MB per worker vs. 500 MB+ in Node/Webpack).
- **Direct cPanel Compatibility:** Ready to upload straight to `public_html/` on any Apache, LiteSpeed, or Nginx cPanel server.
- **Seamless Local AI Integration:** Connects directly with the local PHP/Python `Dptech-Reception` AI agent.

### 2. Product Pictures & Verified Assets
- All 26 products, banners, and software screenshots are served locally from `assets/images/products/` and `assets/images/`.
- Local fallback `onerror` handlers ensure images never appear broken or blank.
- Complete product rate card with verified pricing in PKR.

### 3. Support Agent & Inbound AI Receptionist (Moomal)
- **Front-Desk AI Receptionist:** Embedded floating widget (`assets/js/chat.js`) powered by backend endpoint `api/chat.php`.
- **Trilingual Fluency:** Live language toggle supporting **English**, **Urdu** (اردو), and **Sindhi** (سنڌي).
- **Mandatory 4-Point Lead Qualification Protocol:**
  1. **Full Name**
  2. **WhatsApp / Contact Phone Number**
  3. **Property Location (City/Area)**
  4. **Camera / Service Preference**
  - Proactively offers a **100% Free On-Site Technical Site Survey** by a senior engineer.
- **Lead Qualification Handoff:**
  - Automatically records leads with file locking (`LOCK_EX`) into `data/leads.json`.
  - Instant 1-click continuation on WhatsApp (`https://wa.me/923167788990`) pre-populated with lead survey details.

### 4. 4 Core Divisions & Highlighted Cards
Structured into 4 highlighted cards on the home page (`index.php`) and detailed sections in `services.php`:
1. **1. CCTV & Security Surveillance:** 4K AcuSense, ColorVu 24/7 full-color night vision, PTZ tracking, PoE NVRs, and Free On-Site Surveys.
2. **2. Networking Solutions:** Pure copper Cat6/Cat6A structured cabling, enterprise WiFi 6/6E, managed switches, and firewalls.
3. **3. Fiber Optic and DATA Communication:** Single/multi-mode optical fiber backbones, fusion core splicing, OTDR budget certification, and wireless P2P bridges.
4. **4. Software Solutions:** Complete details of developed applications and live web demo links:
   - 📦 **Store Inventory and Asset Management System:** [http://sm.datapointtechnology.com](http://sm.datapointtechnology.com) (Live Demo)
   - 🧾 **Enterprise Invoicing & Billing Portal:** [http://invoicing.datapointtechnology.com](http://invoicing.datapointtechnology.com) (Login)
   - 🎓 **Student Portal & LMS Management System**
   - 🚗 **ANPR Monitoring Suite** (Automatic Number Plate Recognition)
   - 📋 **Admission & Enrollment Management System**
   - ⏱️ **Biometric & AI Attendance Management System**
   - 👥 **Recruitment Management System**

### 5. Enterprise Navigation Icons & Portals
- **Invoicing System Login Icon:** Prominently featured in header bar and footer linking to [http://invoicing.datapointtechnology.com](http://invoicing.datapointtechnology.com).
- **Webmail Login Icon:** Prominently featured in header bar and footer linking to `https://webmail.datapointtechnology.com`.
- **Store Inventory Demo Link:** Highlighted in hero pills, service cards, Software division, and footer linking to [http://sm.datapointtechnology.com](http://sm.datapointtechnology.com).

---

## 🔒 Comprehensive Website Security Features

This website implements enterprise-grade security measures across server and application layers:

### 1. Server-Level Hardening (`.htaccess`)
- **Directory Browsing Disabled:** `Options -Indexes` prevents visitors from listing directory contents.
- **Protected Directories:** Direct URL access to `data/` and `includes/` is completely blocked (`403 Forbidden`).
- **Data Directory Defense (`data/.htaccess`):** Denies all direct HTTP requests (`Require all denied` / `Deny from all`).
- **Hidden & Sensitive File Blocking:** Blocks access to `.env`, `.git`, `.ini`, `.log`, `.bak`, `.sql`, `.json`, `.yml`, `.md`, and `.ts` files.
- **Anti-Exploit Rules:** Filters out common SQL injection (`UNION`, `SELECT`, `DROP`, `eval()`, `base64_encode`) and directory traversal (`../`) attacks in query strings.
- **Server Information Masking:** `ServerSignature Off` suppresses Apache/server version disclosure.
- **Forced HTTPS:** Automatically redirects all HTTP traffic to HTTPS in production.

### 2. Strict HTTP Security Headers
- `X-Content-Type-Options: nosniff` (Prevents MIME-type confusion attacks)
- `X-Frame-Options: SAMEORIGIN` (Protects against Clickjacking)
- `X-XSS-Protection: 1; mode=block` (Enables browser cross-site scripting filter)
- `Referrer-Policy: strict-origin-when-cross-origin` (Safeguards sensitive referrer metadata)
- `Permissions-Policy: camera=(), microphone=(), geolocation=()` (Disables unauthorized browser device APIs)
- `Content-Security-Policy (CSP)` (Restricts unauthorized script, frame, and form destinations)

### 3. Application-Level Security (`includes/security.php`)
- **XSS Protection:** Context-safe output escaping with `e()` (`htmlspecialchars(..., ENT_QUOTES, 'UTF-8')`) on all dynamic outputs.
- **CSRF Defense:** Cryptographically secure CSRF token generation (`csrf_token()`) and verification (`verify_csrf_token()`) on all forms.
- **Honeypot Anti-Spam Trap:** Hidden bot-trap fields silently intercept and discard automated spam submissions.
- **Rate Limiting:** Prevents API and form submission flooding per IP/session.
- **Secure Sessions:** Sessions configured with `httponly: true`, `samesite: Lax`, and `secure: true` (on HTTPS).
- **Safe File Locking:** `flock($fp, LOCK_EX)` ensures atomic file writes to `data/leads.json` without corruption or race conditions.
- **Information Leakage Prevention:** `display_errors = 0` suppresses raw PHP error traces on live sites.

---

## 📂 Project Directory Structure

```text
dptec-website-project/
├── .htaccess                 # Hardened Apache / cPanel security rules
├── config.php                # Global configuration & portal URLs
├── index.php                 # Home page (4 Highlighted Services Cards, Hero, AI Reception)
├── services.php              # 4 Core Divisions: CCTV, Networking, Fiber/DATA, Software
├── products.php              # Hardware catalog with local images & WhatsApp ordering
├── about.php                 # About Us, mission, technology partners, stats
├── contact.php               # Secure contact form, AI lead qualification, phone & address
├── api/
│   ├── chat.php              # Moomal AI Receptionist API & qualification bridge
│   ├── contact.php           # Secure contact form submission handler (CSRF + Honeypot)
│   └── products.php          # Products JSON API
├── includes/
│   ├── security.php          # Security headers, CSRF, rate limiter, sanitizers
│   ├── header.php            # HTML <head>, meta tags, CSS
│   ├── navbar.php            # Responsive navbar, Webmail & Invoicing icons
│   ├── footer.php            # Footer, Moomal AI Receptionist drawer & survey modal
│   └── data.php              # Services, products, software solutions, stats data
├── assets/
│   ├── css/
│   │   └── style.css         # Modern glassmorphism dark theme CSS
│   ├── js/
│   │   ├── main.js           # Mobile navigation toggle & hero slider
│   │   └── chat.js           # Moomal AI Receptionist chat controller
│   └── images/
│       ├── products/         # All 26 verified product and software images
│       └── logo.png          # DATAPOINT Technologies official logo
└── data/
    ├── .htaccess             # Strict 'Require all denied' directory guard
    └── leads.json            # Concurrency-safe leads storage (file-locked)
```

---

## 🌐 cPanel Deployment in 3 Easy Steps

1. **Upload Files:**
   - Zip the project files and upload to your cPanel **File Manager** inside `public_html/` (or your subdomain directory).
   - Extract the archive into `public_html/`.

2. **Verify Permissions:**
   - Ensure the `data/` directory has write permissions (**755** or **775**).
   - Verify `.htaccess` is present in `public_html/`.

3. **Test:**
   - Open your domain: `https://datapointtechnology.com`
   - Test Moomal AI Receptionist in the bottom-right bubble.
   - Verify Invoicing login button links to `http://invoicing.datapointtechnology.com`.
   - Verify Store Inventory demo links to `http://sm.datapointtechnology.com`.
   - Verify Webmail links to `https://webmail.datapointtechnology.com`.

---

## 💻 Local Testing with PHP

To run the site locally without Apache or Node:
```bash
php -S localhost:8000
```
Then navigate to [http://localhost:8000](http://localhost:8000).
