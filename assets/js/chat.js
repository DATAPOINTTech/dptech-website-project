/**
 * DATAPOINT Technologies - Moomal AI Receptionist Client Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.getElementById('btnToggleChat');
    const drawer = document.getElementById('moomalDrawer');
    const closeBtn = document.getElementById('btnCloseChat');
    const alertBadge = document.getElementById('moomalBadgeAlert');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const quickChips = document.querySelectorAll('.chip-btn');
    const langBtns = document.querySelectorAll('.lang-btn');
    const btnWhatsAppTransfer = document.getElementById('btnChatWhatsAppTransfer');

    // Survey Modal elements
    const surveyModal = document.getElementById('surveyModal');
    const btnOpenSurvey = document.getElementById('btnOpenSurveyModal');
    const btnCloseSurvey = document.getElementById('btnCloseSurveyModal');
    const surveyForm = document.getElementById('surveyForm');

    let currentLang = 'en';
    let leadData = {
        name: '',
        phone: '',
        location: '',
        preference: '',
        isQualified: false
    };

    // Toggle chat drawer
    function toggleChat(show) {
        if (!drawer) return;
        const isShow = (show !== undefined) ? show : (drawer.style.display !== 'flex');
        drawer.style.display = isShow ? 'flex' : 'none';
        if (alertBadge) alertBadge.style.display = isShow ? 'none' : 'flex';
        if (isShow && chatInput) chatInput.focus();
    }

    if (triggerBtn) triggerBtn.addEventListener('click', () => toggleChat());
    if (closeBtn) closeBtn.addEventListener('click', () => toggleChat(false));

    // Survey modal toggle
    if (btnOpenSurvey && surveyModal) {
        btnOpenSurvey.addEventListener('click', () => surveyModal.style.display = 'flex');
    }
    if (btnCloseSurvey && surveyModal) {
        btnCloseSurvey.addEventListener('click', () => surveyModal.style.display = 'none');
    }

    // Language switcher
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.getAttribute('data-lang') || 'en';

            let greeting = "Assalam-o-Alaikum! 🌸 I am Moomal, AI Receptionist for DATAPOINT Technologies. How can I assist you with CCTV, Networking, Fiber, or Software?";
            if (currentLang === 'ur') {
                greeting = "السلام علیکم! 🌸 میں مومل ہوں، ڈیٹا پوائنٹ ٹیکنالوجیز کی آفیشل اے آئی ریسپشنسٹ۔ میں سی سی ٹی وی، نیٹ ورکنگ، آپٹیکل فائبر اور سافٹ ویئر سلوشنز کے لیے آپ کی رہنمائی کر سکتی ہوں۔ میں آپ کی کیا مدد کروں؟";
            } else if (currentLang === 'sd') {
                greeting = "اسلام عليڪم! 🌸 مان مومل آهيان، ڊيٽا پوائنٽ ٽيڪنالاجيز جي آفيشل اي آءِ ريسيپشنسٽ. مان سي سي ٽي وي، نيٽ ورڪنگ، فائبر ۽ سافٽ ويئر ۾ اوهان جي مدد لاءِ حاضر آهيان. آئون اوهان جي ڇا خدمت ڪري سگهان ٿي؟";
            }
            appendMessage('bot', greeting);
        });
    });

    // Append Message helper
    function appendMessage(role, text) {
        if (!chatMessages) return;
        const msg = document.createElement('div');
        msg.className = `msg ${role}`;
        msg.innerHTML = text.replace(/\n/g, '<br>');
        chatMessages.appendChild(msg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Update WhatsApp prefilled link
    function updateWhatsAppLink() {
        if (!btnWhatsAppTransfer) return;
        const msg = `Assalam-o-Alaikum Moomal!\nI am inquiring from datapointtechnology.com:\n` +
            `Name: ${leadData.name || 'Client'}\n` +
            `Phone: ${leadData.phone || ''}\n` +
            `Location: ${leadData.location || ''}\n` +
            `Preference: ${leadData.preference || 'CCTV & IT Solutions'}\n` +
            `Requesting: 100% Free On-Site Site Survey & Quotation`;
        btnWhatsAppTransfer.href = `https://wa.me/923167788990?text=${encodeURIComponent(msg)}`;
    }

    // Send Message to AI Reception backend
    async function sendMessage(text) {
        if (!text || !text.trim()) return;
        appendMessage('user', text);
        if (chatInput) chatInput.value = '';

        // Auto phone detection
        const phoneMatch = text.match(/(\+92|03)[0-9]{9}/);
        if (phoneMatch && !leadData.phone) {
            leadData.phone = phoneMatch[0];
            updateWhatsAppLink();
        }

        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'msg bot';
        typingIndicator.id = 'chatTyping';
        typingIndicator.innerText = 'Moomal is thinking...';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const res = await fetch('api/chat.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    session_id: 'web_' + (leadData.phone || 'guest'),
                    lead_info: leadData,
                    language: currentLang
                })
            });

            const data = await res.json();
            const typingElem = document.getElementById('chatTyping');
            if (typingElem) typingElem.remove();

            if (data.reply) {
                appendMessage('bot', data.reply);
            } else {
                appendMessage('bot', "Thank you! To schedule your 100% Free On-Site Site Survey, please provide your Full Name, Contact Phone, and City/Area.");
            }
        } catch (err) {
            const typingElem = document.getElementById('chatTyping');
            if (typingElem) typingElem.remove();

            appendMessage('bot', "Assalam-o-Alaikum! We provide Hikvision ColorVu CCTV packages, networking cabling, fiber splicing, and custom software (Store Inventory & Invoicing). Please click 'Free Site Survey' above or tap WhatsApp below to connect directly with me.");
        }
    }

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = chatInput.value.trim();
            if (val) sendMessage(val);
        });
    }

    quickChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            if (query) sendMessage(query);
        });
    });

    // 4-Point Lead Qualification Form Submit
    if (surveyForm) {
        surveyForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('leadName')?.value.trim();
            const phone = document.getElementById('leadPhone')?.value.trim();
            const location = document.getElementById('leadLocation')?.value.trim();
            const preference = document.getElementById('leadPreference')?.value;

            leadData = {
                name: name,
                phone: phone,
                location: location,
                preference: preference,
                isQualified: true
            };

            updateWhatsAppLink();
            if (surveyModal) surveyModal.style.display = 'none';
            toggleChat(true);

            appendMessage('bot', `Shukria ${name}! ✨ Your inquiry for ${preference} in ${location} has been qualified. Our senior engineer has been notified for your Free On-Site Site Survey. You can also tap below to chat directly with me on WhatsApp!`);

            // Transmit to API
            try {
                await fetch('api/chat.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: `[LEAD QUALIFIED] Name: ${name}, Phone: ${phone}, Location: ${location}, Requirement: ${preference}`,
                        session_id: 'qualified_' + phone,
                        lead_info: leadData
                    })
                });
            } catch (err) {}
        });
    }
});
