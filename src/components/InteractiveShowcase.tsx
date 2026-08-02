"use client";

import { useState } from "react";

const experiences = [
  {
    id: "ai-assistant",
    title: "AI Assistant",
    subtitle: "Instant service guidance",
    description: "A conversational companion that answers questions about products, pricing, deployment support, and next steps in real time.",
    highlights: ["24/7 availability", "Context-aware replies", "Quick service recommendations"],
    metric: "98% response readiness",
  },
  {
    id: "smart-recommender",
    title: "Smart Recommender",
    subtitle: "Tailored solutions",
    description: "Visitors can answer a few quick prompts and instantly receive a tailored recommendation for security, networking, or fiber projects.",
    highlights: ["Adaptive questions", "Budget-aware choices", "Fast decision support"],
    metric: "3-step guidance",
  },
  {
    id: "lead-intelligence",
    title: "Lead Intelligence",
    subtitle: "Qualified opportunities",
    description: "Every inquiry is scored with intelligent cues so your team can prioritize high-value prospects faster.",
    highlights: ["Live lead scoring", "Priority routing", "Faster follow-up"],
    metric: "Hot lead detection",
  },
];

export default function InteractiveShowcase() {
  const [active, setActive] = useState(experiences[0].id);

  const selected = experiences.find((item) => item.id === active) ?? experiences[0];

  return (
    <section className="py-24 bg-gradient-to-b from-primary via-secondary/40 to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">Interactive Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">A technology experience built for modern buyers</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore how AI, automation, and immersive product storytelling come together to make every visit feel intelligent and premium.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
          <div className="rounded-3xl border border-white/10 bg-secondary/60 p-3 sm:p-4 backdrop-blur-xl">
            {experiences.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-full text-left rounded-2xl border px-4 py-4 mb-3 transition-all ${
                  active === item.id
                    ? "border-accent/40 bg-accent/10 shadow-lg shadow-accent/10"
                    : "border-white/10 bg-white/5 hover:border-accent/20 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.subtitle}</p>
                  </div>
                  <div className="text-accent text-sm">↗</div>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-secondary/80 via-primary/80 to-secondary/70 p-6 sm:p-8 shadow-2xl shadow-accent/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em]">Live preview</p>
                <h3 className="text-2xl font-semibold text-white mt-2">{selected.title}</h3>
              </div>
              <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
                {selected.metric}
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">{selected.description}</p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {selected.highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-gray-200">
                  {highlight}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-primary/50 p-4">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>System health</span>
                <span className="text-accent">Excellent</span>
              </div>
              <div className="space-y-3">
                {["Response flow", "Conversion readiness", "Client engagement"].map((item, index) => (
                  <div key={item}>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>{item}</span>
                      <span>{90 + index * 3}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-accent to-blue-300" style={{ width: `${90 + index * 3}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
