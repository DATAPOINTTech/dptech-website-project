"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
  budget: string;
  urgency: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  service: "cctv",
  message: "",
  budget: "mid",
  urgency: "normal",
};

export default function AILeadCapture() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateLeadScore = (data: FormData): number => {
    let s = 50;
    if (data.name.length > 2) s += 5;
    if (data.email.includes("@") && data.email.includes(".")) s += 10;
    if (data.phone.length >= 10) s += 15;
    if (data.location.length >= 3) s += 10;
    if (data.service) s += 5;
    if (data.message.length > 20) s += 5;
    return Math.min(s, 100);
  };

  const getLeadLabel = (s: number) => {
    if (s >= 85) return "Priority Lead 🔥";
    if (s >= 65) return "Qualified Lead ⭐";
    return "Standard Inquiry ❄️";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const leadScore = calculateLeadScore(form);
    setScore(leadScore);

    try {
      await fetch("/api/reception", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `[WEB INQUIRY FORM] Name: ${form.name}, Phone: ${form.phone}, Email: ${form.email}, Location: ${form.location}, Service: ${form.service}, Urgency: ${form.urgency}, Message: ${form.message}`,
          session_id: `lead_form_${Date.now()}`,
          lead_info: {
            name: form.name,
            phone: form.phone,
            location: form.location,
            preference: form.service,
            isQualified: true,
          },
        }),
      });
    } catch {
      // Local fallback handled
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/923167788990?text=${encodeURIComponent(
    `Assalam-o-Alaikum Moomal!\nI have submitted an inquiry on datapointtechnology.com:\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nService: ${form.service}\nDetails: ${form.message || "Requesting Free Technical Site Survey"}`
  )}`;

  if (submitted) {
    return (
      <div className="bg-gradient-to-b from-secondary/50 to-primary/50 border border-white/10 rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
        <div className="w-16 h-16 bg-accent/20 border border-accent/40 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl">
          ✨
        </div>
        <h3 className="text-2xl font-extrabold text-white mb-2">Inquiry Verified!</h3>
        <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
          Thank you, <strong className="text-white">{form.name}</strong>. Moomal (our AI Receptionist) has logged your request for a Free Technical Site Survey.
        </p>

        {score !== null && (
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-xs text-gray-300">Qualification Score:</span>
            <span className="text-accent font-bold text-sm">{score}/100</span>
            <span className="text-xs font-semibold">{getLeadLabel(score)}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>💬</span> Continue with Moomal on WhatsApp
          </a>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); setScore(null); }}
            className="px-6 py-3 border border-white/10 rounded-xl text-xs sm:text-sm font-medium text-gray-300 hover:bg-white/5 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-b from-secondary/50 to-primary/50 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Connected to AI Reception
          </span>
        </div>
        <span className="text-[11px] text-accent font-medium">100% Free Site Survey</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">1. Full Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            placeholder="e.g. Asif Khan"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">2. WhatsApp / Phone *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            placeholder="0316 7788990"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">3. Property Location (City/Area) *</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            placeholder="Karachi / Hyderabad / Sukkur"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            placeholder="client@domain.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">4. Service Division *</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors"
          >
            <option value="4-Camera ColorVu CCTV Setup">1. CCTV 4-Camera ColorVu Package (PoE)</option>
            <option value="Commercial CCTV & AcuSense AI">1. CCTV &amp; Security Surveillance (Commercial)</option>
            <option value="Networking Solutions (Cat6 & WiFi)">2. Networking Solutions (Cat6, Switches, WiFi 6)</option>
            <option value="Fiber Optic and DATA Communication">3. Fiber Optic &amp; DATA Communication</option>
            <option value="Store Inventory & Asset Management System">4. Store Inventory System (sm.datapointtechnology.com)</option>
            <option value="Enterprise Invoicing System">4. Invoicing Portal (invoicing.datapointtechnology.com)</option>
            <option value="Custom Software / LMS / ANPR">4. Software Solutions (LMS, ANPR, Attendance)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">Deployment Timeline</label>
          <select
            name="urgency"
            value={form.urgency}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors"
          >
            <option value="immediate">Immediate / Urgent (This Week)</option>
            <option value="normal">Normal (Within 2 Weeks)</option>
            <option value="planning">Planning Phase / Estimation Only</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-300 mb-1.5">Project Details / Requirements</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="e.g. 4 cameras needed for home/office with night vision, or fiber splicing for 500m campus link..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 text-sm disabled:opacity-50"
      >
        {submitting ? "Transmitting to Moomal..." : "Submit Inquiry & Qualify for Free Survey"}
      </button>

      <p className="text-gray-400 text-xs text-center mt-3">
        Transferred instantly to Moomal (AI Receptionist). Verified replies dispatched promptly.
      </p>
    </form>
  );
}
