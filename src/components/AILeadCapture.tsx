"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
  urgency: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  budget: "",
  urgency: "normal",
};

export default function AILeadCapture() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateLeadScore = (data: FormData): number => {
    let s = 50;
    if (data.name.length > 2) s += 5;
    if (data.email.includes("@") && data.email.includes(".")) s += 10;
    if (data.phone.length >= 10) s += 10;
    if (data.service) s += 10;
    if (data.message.length > 20) s += 5;
    if (data.budget === "premium") s += 10;
    if (data.urgency === "urgent") s += 10;
    return Math.min(s, 100);
  };

  const getLeadLabel = (s: number) => {
    if (s >= 85) return "Hot Lead 🔥";
    if (s >= 65) return "Warm Lead ⭐";
    return "Cold Lead ❄️";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const leadScore = calculateLeadScore(form);
    setScore(leadScore);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-b from-secondary/50 to-primary/50 border border-white/5 rounded-2xl p-8 text-center">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-400 mb-4">We&apos;ve received your inquiry and will get back to you within 24 hours.</p>
        {score !== null && (
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-sm text-gray-300">AI Lead Score:</span>
            <span className="text-accent font-bold">{score}/100</span>
            <span className="text-sm">{getLeadLabel(score)}</span>
          </div>
        )}
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); setScore(null); }}
          className="block mx-auto mt-6 px-6 py-2.5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-b from-secondary/50 to-primary/50 border border-white/5 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        <span className="text-accent text-sm font-medium">AI-Powered Lead Scoring Active</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Full Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors" placeholder="your@email.com" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Phone *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors" placeholder="03XX-XXXXXXX" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Service Needed</label>
          <select name="service" value={form.service} onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors">
            <option value="" className="bg-primary">Select a service</option>
            <option value="cctv" className="bg-primary">CCTV & Security</option>
            <option value="networking" className="bg-primary">Networking</option>
            <option value="fiber" className="bg-primary">Fiber Optic</option>
            <option value="datacom" className="bg-primary">Data Communication</option>
            <option value="other" className="bg-primary">Other</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Budget Range</label>
          <select name="budget" value={form.budget} onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors">
            <option value="" className="bg-primary">Select budget</option>
            <option value="budget" className="bg-primary">Budget Friendly</option>
            <option value="mid" className="bg-primary">Mid Range</option>
            <option value="premium" className="bg-primary">Premium</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Urgency</label>
          <select name="urgency" value={form.urgency} onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors">
            <option value="normal" className="bg-primary">Normal</option>
            <option value="soon" className="bg-primary">Within a Week</option>
            <option value="urgent" className="bg-primary">Urgent (ASAP)</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-1.5">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors resize-none"
          placeholder="Tell us about your project requirements..." />
      </div>

      <button type="submit"
        className="w-full py-3.5 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25">
        Submit Inquiry
      </button>

      <p className="text-gray-500 text-xs text-center mt-4">Your information is secure. We&apos;ll respond within 24 hours.</p>
    </form>
  );
}
