"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
  isQualificationPrompt?: boolean;
  qualificationStep?: number;
  time?: string;
};

interface LeadData {
  name: string;
  phone: string;
  location: string;
  preference: string;
  isQualified: boolean;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ur" | "sd">("en");
  const [lead, setLead] = useState<LeadData>({
    name: "",
    phone: "",
    location: "",
    preference: "",
    isQualified: false,
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Assalam-o-Alaikum! 🌸 I am Moomal, the Official AI Receptionist for DATAPOINT Technologies. I qualify inbound inquiries, schedule Free On-Site Site Surveys, and guide you through our CCTV, Networking, Fiber, and Enterprise Software solutions.",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getCurrentTime = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isTyping) return;

    const userMsg: Message = {
      role: "user",
      text: textToSend,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInput("");
    setIsTyping(true);

    // Analyze text for qualification hints (e.g. phone number or names)
    const phoneMatch = textToSend.match(/(\+92|03)[0-9]{9}/);
    if (phoneMatch && !lead.phone) {
      setLead((prev) => ({ ...prev, phone: phoneMatch[0] }));
    }

    try {
      const response = await fetch("/api/reception", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          session_id: `web_client_${lead.phone || "guest"}`,
          lead_info: lead,
          language,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botReply: Message = {
          role: "bot",
          text: data.reply,
          time: getCurrentTime(),
        };
        setMessages((prev) => [...prev, botReply]);
      } else {
        throw new Error("Reception offline");
      }
    } catch {
      // Offline fallback receptionist response
      setTimeout(() => {
        let reply = "Thank you for reaching out! To prepare an accurate proposal and book a 100% Free On-Site Technical Survey, please click 'Qualify Lead / Request Quote' below or reach me directly on WhatsApp.";
        const lower = textToSend.toLowerCase();

        if (lower.includes("demo") || lower.includes("inventory")) {
          reply = "You can test our live Store Inventory and Asset Management System demo directly at http://sm.datapointtechnology.com . Would you like our senior software engineer to walk you through it?";
        } else if (lower.includes("invoice") || lower.includes("invoicing")) {
          reply = "Our commercial invoicing system is available at http://invoicing.datapointtechnology.com .";
        } else if (lower.includes("survey") || lower.includes("quote") || lower.includes("cctv")) {
          reply = "Our standard package includes 4x ColorVu full-color cameras, 4-Port PoE NVR, 1TB WD Purple surveillance hard disk, Cat6 pure copper cabling, and certified installation. Please share your Name, Contact Phone, and City/Area so I can finalize your estimate.";
        }

        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: reply,
            time: getCurrentTime(),
          },
        ]);
      }, 500);
    } finally {
      setIsTyping(false);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.name || !lead.phone) return;

    setLead((prev) => ({ ...prev, isQualified: true }));
    setShowLeadModal(false);

    const qualifiedMsg: Message = {
      role: "bot",
      text: `Shukria ${lead.name}! ✨ Your inquiry for ${lead.preference || "DATAPOINT services"} in ${lead.location || "your area"} has been verified. Our senior engineer has been notified for your Free Technical Survey. You can also tap below to chat directly with me on WhatsApp!`,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, qualifiedMsg]);

    // Send qualification to backend
    fetch("/api/reception", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `[LEAD QUALIFIED] Name: ${lead.name}, Phone: ${lead.phone}, Location: ${lead.location}, Preference: ${lead.preference}`,
        session_id: `qualified_${lead.phone}`,
        lead_info: { ...lead, isQualified: true },
      }),
    }).catch(() => {});
  };

  const whatsappDirectUrl = `https://wa.me/923167788990?text=${encodeURIComponent(
    `Assalam-o-Alaikum Moomal! I am reaching out from datapointtechnology.com.\n\nName: ${lead.name || "Client"}\nPhone: ${lead.phone || ""}\nLocation: ${lead.location || ""}\nRequirement: ${lead.preference || "CCTV & Security Solutions"}\nRequesting: 100% Free On-Site Survey & Verified Quotation`
  )}`;

  return (
    <>
      {/* Floating Receptionist Bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-900/90 text-white px-3.5 py-2 rounded-full border border-accent/40 shadow-xl backdrop-blur-md animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-semibold">Moomal (AI Receptionist) Online</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-16 h-16 rounded-full bg-gradient-to-tr from-accent-dark via-accent to-sky-400 text-primary shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center p-3 border-2 border-white/20"
          aria-label="Toggle AI Receptionist Chat"
        >
          {isOpen ? (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative flex items-center justify-center">
              <span className="text-2xl">👩‍💼</span>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
          )}
        </button>
      </div>

      {/* Main Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[95vw] sm:w-[420px] h-[640px] max-h-[85vh] bg-slate-950/95 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-primary to-slate-900 p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center text-xl shadow-lg shadow-accent/20">
                👩‍💼
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-sm tracking-wide">Moomal</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    AI Receptionist
                  </span>
                </div>
                <p className="text-gray-400 text-xs">DATAPOINT Front-Desk &amp; Lead Qualifier</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href="https://wa.me/923167788990"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect via WhatsApp Voice / Call"
                className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors text-xs flex items-center gap-1"
              >
                <span>📞</span>
                <span className="hidden sm:inline font-medium">Call</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Sub-bar with Portals & Language */}
          <div className="bg-slate-900/60 px-4 py-2 border-b border-white/5 flex items-center justify-between text-[11px] text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Language:</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded ${language === "en" ? "bg-accent text-primary font-bold" : "text-gray-400"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ur")}
                className={`px-1.5 py-0.5 rounded ${language === "ur" ? "bg-accent text-primary font-bold" : "text-gray-400"}`}
              >
                اردو
              </button>
              <button
                onClick={() => setLanguage("sd")}
                className={`px-1.5 py-0.5 rounded ${language === "sd" ? "bg-accent text-primary font-bold" : "text-gray-400"}`}
              >
                سنڌي
              </button>
            </div>

            <button
              onClick={() => setShowLeadModal(true)}
              className="text-accent hover:underline flex items-center gap-1 font-semibold"
            >
              <span>📋</span> Free Site Survey
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "bg-accent text-primary font-medium rounded-tr-none"
                      : "bg-slate-800/90 text-gray-100 border border-white/10 rounded-tl-none"
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
                {m.time && (
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{m.time}</span>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-slate-800/60 px-4 py-2.5 rounded-2xl w-24 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-accent animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-2.5 bg-slate-900/40 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleSendMessage("Tell me about the 4-Camera ColorVu Package & Free Site Survey")}
              className="shrink-0 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-xs transition-colors"
            >
              📹 4-Camera Package
            </button>
            <button
              onClick={() => handleSendMessage("Show me demo of Store Inventory and Asset Management System")}
              className="shrink-0 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-xs transition-colors"
            >
              📦 Inventory Demo
            </button>
            <button
              onClick={() => handleSendMessage("How do I access the Invoicing System?")}
              className="shrink-0 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-xs transition-colors"
            >
              🧾 Invoicing System
            </button>
            <button
              onClick={() => setShowLeadModal(true)}
              className="shrink-0 px-3 py-1.5 rounded-full bg-accent/15 hover:bg-accent/25 text-accent border border-accent/30 text-xs font-semibold transition-colors"
            >
              ✨ Qualify for Site Survey
            </button>
          </div>

          {/* Action Transfer Button if user details captured or requested */}
          <div className="px-3 pt-2 pb-1 bg-slate-950 flex items-center justify-between gap-2 border-t border-white/5">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>💬</span> Transfer to Moomal on WhatsApp
            </a>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-950 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask Moomal about CCTV, Networking, Software..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2.5 rounded-xl bg-accent text-primary font-bold hover:bg-accent-dark disabled:opacity-40 transition-colors"
              aria-label="Send message"
            >
              <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* 4-Point Lead Qualification Modal */}
      {showLeadModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-md w-full p-6 shadow-2xl relative animate-scale-up">
            <button
              onClick={() => setShowLeadModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-xl">
                📋
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Moomal Lead Qualification</h3>
                <p className="text-xs text-accent">100% Free On-Site Site Survey by Senior Engineer</p>
              </div>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">1. Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. Asif Khan"
                  value={lead.name}
                  onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">2. WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0316 7788990"
                  value={lead.phone}
                  onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">3. Property Location (City/Area) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Clifton, Karachi / Hyderabad / Sukkur"
                  value={lead.location}
                  onChange={(e) => setLead({ ...lead, location: e.target.value })}
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">4. Primary Requirement / System</label>
                <select
                  value={lead.preference}
                  onChange={(e) => setLead({ ...lead, preference: e.target.value })}
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-accent"
                >
                  <option value="4-Camera ColorVu CCTV Setup">CCTV 4-Camera ColorVu System (PoE + 1TB)</option>
                  <option value="Commercial CCTV & AcuSense Surveillance">Commercial CCTV &amp; AcuSense AI</option>
                  <option value="Enterprise Networking & Structured Cabling">Enterprise Networking &amp; Structured Cabling</option>
                  <option value="Fiber Optic Splicing & Backbone">Fiber Optic Backbone &amp; DATA Comm</option>
                  <option value="Store Inventory & Asset Management System">Store Inventory &amp; Asset Management</option>
                  <option value="Custom Enterprise Software Solutions">Custom Enterprise Software</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
                >
                  Qualify Lead &amp; Confirm Survey
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
