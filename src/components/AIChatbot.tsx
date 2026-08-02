"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

type CatalogProduct = {
  id: string | number;
  name: string;
  category: string;
};

const knowledgeBase: { keywords: string[]; response: string }[] = [
  { keywords: ["cctv", "camera", "security", "surveillance"], response: "We offer a wide range of CCTV solutions including HD cameras, PTZ cameras, NVRs/DVRs, and complete surveillance systems. Our top brands are Hikvision, EZVIZ, Dahua, and Reoqoo. Would you like me to help you find the right camera for your needs?" },
  { keywords: ["networking", "router", "switch", "wifi", "network"], response: "Our networking solutions include LAN/WAN design, structured cabling, WiFi 6/6E access points, managed switches, and firewalls. We work with Cisco, MikroTik, TP-Link, and Ubiquiti. What kind of networking setup are you looking for?" },
  { keywords: ["fiber", "fiberoptic", "fiber optic", "optic"], response: "We specialize in fiber optic communication including single-mode & multi-mode fiber, FTTH/FTTP deployments, splicing & termination, and DWDM/CWDM solutions. Our partners include Corning, CommScope, FS.com, and Panduit." },
  { keywords: ["data", "communication", "datacom", "structured cabling"], response: "Our data communication services cover structured cabling systems, data center cabling, wireless point-to-point bridges, and IoT connectivity solutions. We ensure your entire infrastructure communicates seamlessly." },
  { keywords: ["price", "cost", "rate", "pricing", "how much"], response: "Our pricing varies based on your specific requirements. For CCTV cameras, prices range from ₨6,500 to ₨65,000+. For networking equipment, we have solutions starting from ₨4,500. Would you like to get a customized quote? You can visit our Products page or Contact us for a detailed quotation." },
  { keywords: ["contact", "phone", "email", "call", "location", "address"], response: "You can reach us at 📞 0316 7788990 or 📧 info@datapointtechnology.com. We are based in Karachi, Pakistan. Feel free to call or visit our Contact page for more details!" },
  { keywords: ["biometric", "biometrics", "fingerprint", "access control"], response: "We offer biometric devices and access control systems including fingerprint scanners, facial recognition, and ZKTeco products. These integrate seamlessly with our security solutions." },
  { keywords: ["hello", "hi", "hey", "assalam", "salam"], response: "Assalam-o-Alaikum! Welcome to Data Point Technologies. I'm your AI assistant. How can I help you today? You can ask me about our CCTV systems, networking solutions, fiber optic services, or pricing." },
  { keywords: ["thank", "thanks", "shukria"], response: "You're welcome! If you have any other questions, feel free to ask. We're here to help you with all your technology needs!" },
  { keywords: ["quote", "quotation", "estimate"], response: "I'd be happy to help you get a quote! Please visit our Contact page and fill out the form, or call us directly at 0316 7788990. Our team will get back to you within 24 hours with a customized solution." },
];

function getBotResponse(input: string, products: CatalogProduct[] = []): string {
  const lower = input.toLowerCase();
  for (const item of knowledgeBase) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.response;
    }
  }

  if (products.length > 0 && (lower.includes("product") || lower.includes("catalog") || lower.includes("more info") || lower.includes("show me"))) {
    const sampleProducts = products.slice(0, 3).map((product) => product.name).join(", ");
    return `I can connect you to our WhatsApp-connected product catalog. We currently have ${products.length} products ready to explore, including ${sampleProducts}. Open our Products page to browse the full catalog and request more information.`;
  }

  if (products.length > 0 && (lower.includes("camera") || lower.includes("cctv"))) {
    const cctvProducts = products.filter((product) => product.category.toLowerCase().includes("cctv") || product.name.toLowerCase().includes("camera")).slice(0, 3);
    if (cctvProducts.length > 0) {
      return `For CCTV and camera products, I can point you to our catalog items such as ${cctvProducts.map((product) => product.name).join(", ")}. Open the Products page for the full catalog.`;
    }
  }

  if (products.length > 0 && (lower.includes("network") || lower.includes("router") || lower.includes("switch") || lower.includes("wifi"))) {
    const networkProducts = products.filter((product) => product.category.toLowerCase().includes("network") || product.name.toLowerCase().includes("router") || product.name.toLowerCase().includes("switch") || product.name.toLowerCase().includes("wifi")).slice(0, 3);
    if (networkProducts.length > 0) {
      return `For networking products, I can guide you to items like ${networkProducts.map((product) => product.name).join(", ")}. Visit the Products page for the complete catalog.`;
    }
  }

  return "Thank you for your interest in Data Point Technologies! For specific inquiries about our CCTV, networking, fiber optic, or data communication services, please call us at 0316 7788990 or visit our Contact page. How else can I assist you?";
}

const whatsappCatalogUrl = "https://wa.me/c/923167788990";

const quickReplies = [
  { label: "View Catalog", prompt: "show me your products catalog" },
  { label: "CCTV Products", prompt: "show me cctv products" },
  { label: "Networking", prompt: "show me networking products" },
  { label: "Contact Info", prompt: "contact info" },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "👋 Assalam-o-Alaikum! I'm the AI assistant for Data Point Technologies. Ask me about CCTV, networking, fiber optic, or our other services!" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [catalogProducts, setCatalogProducts] = useState<CatalogProduct[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        if (!cancelled) {
          setCatalogProducts(data.products || []);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setCatalogProducts([]);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSend = (text: string) => {
    const msg = text.trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const botText = msg.toLowerCase().includes("catalog") || msg.toLowerCase().includes("product") || msg.toLowerCase().includes("more info")
        ? `I can open your WhatsApp catalog directly for product details. Click the Catalog button below or visit ${whatsappCatalogUrl}.`
        : getBotResponse(msg, catalogProducts);

      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const openCatalog = () => {
    window.open(whatsappCatalogUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] bg-secondary border border-white/10 rounded-2xl shadow-2xl shadow-accent/10 overflow-hidden animate-slide-up">
          <div className="bg-gradient-to-r from-accent to-accent-dark p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg">🤖</div>
              <div>
                <p className="text-primary font-semibold text-sm">AI Assistant</p>
                <p className="text-primary/70 text-xs">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-primary/70 hover:text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="h-[350px] overflow-y-auto p-4 space-y-3 bg-primary/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-accent text-primary rounded-br-md"
                    : "bg-white/5 text-gray-200 rounded-bl-md"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.map((qr) => (
                <button
                  key={qr.label}
                  onClick={() => handleSend(qr.prompt)}
                  className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          <div className="p-4 border-t border-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                placeholder="Ask about our services..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button
                onClick={openCatalog}
                className="bg-white/10 border border-white/10 text-white px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-white/15 transition-colors"
              >
                Catalog
              </button>
              <button
                onClick={() => handleSend(input)}
                className="bg-accent text-primary p-2.5 rounded-xl hover:bg-accent-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 bg-gradient-to-r from-accent to-accent-dark rounded-full shadow-lg shadow-accent/30 flex items-center justify-center hover:scale-105 transition-all animate-pulse-glow"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
}
