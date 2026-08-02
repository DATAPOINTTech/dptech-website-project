"use client";

import { useState } from "react";


const questions = [
  {
    key: "purpose",
    question: "What is your primary need?",
    options: [
      { value: "home", label: "Home Security" },
      { value: "business", label: "Business Security" },
      { value: "networking", label: "Networking Setup" },
      { value: "industrial", label: "Industrial Solution" },
    ],
  },
  {
    key: "budget",
    question: "What is your budget range?",
    options: [
      { value: "budget", label: "Budget Friendly (₨5k-₨15k)" },
      { value: "mid", label: "Mid Range (₨15k-₨50k)" },
      { value: "premium", label: "Premium (₨50k+)" },
    ],
  },
  {
    key: "type",
    question: "Do you prefer wired or wireless?",
    options: [
      { value: "wired", label: "Wired (Most Reliable)" },
      { value: "wireless", label: "Wireless (Easy Setup)" },
      { value: "both", label: "No Preference" },
    ],
  },
];

export default function AIRecommender() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[step].key]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      generateRecommendation(newAnswers);
    }
  };

  const generateRecommendation = (ans: Record<string, string>) => {
    let result = "";
    if (ans.purpose === "home" || ans.purpose === "business") {
      if (ans.budget === "budget") result = "Based on your needs, we recommend the REOQOO Smart Camera Dual-Band or REOQOO Smart Camera Pro. Both offer excellent value for money with reliable performance.";
      else if (ans.budget === "mid") result = "For your budget range, the EZVIZ H3C 2K Color VU Outdoor or EZVIZ H4 3K would be ideal. They offer superior image quality and advanced features.";
      else result = "We recommend the Hikvision 4MP+4MP PTZ or EZVIZ Wireless Kit for premium security coverage with advanced AI analytics.";
    } else if (ans.purpose === "networking") {
      result = "For networking needs, we recommend our MikroTik routers and TP-Link WiFi 6 access points. These provide enterprise-grade performance and reliability.";
    } else {
      result = "For industrial solutions, we recommend our high-end Hikvision PTZ cameras with thermal imaging capabilities and robust networking infrastructure.";
    }
    setRecommendation(result);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary to-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">AI Powered</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Smart Product Recommender</h2>
          <p className="text-gray-400 mt-4">Answer 3 quick questions and let our AI find the perfect solution for you</p>
        </div>

        <div className="bg-gradient-to-b from-secondary/50 to-primary/50 border border-white/5 rounded-2xl p-8">
          {!recommendation ? (
            <div>
              <div className="flex justify-center gap-2 mb-8">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1.5 w-16 rounded-full transition-colors ${i <= step ? "bg-accent" : "bg-white/10"}`} />
                ))}
              </div>

              <div className="text-center mb-8">
                <p className="text-sm text-gray-500 mb-2">Question {step + 1} of {questions.length}</p>
                <h3 className="text-xl font-semibold">{questions[step].question}</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl text-left hover:border-accent/50 hover:bg-accent/5 transition-all group"
                  >
                    <span className="text-white font-medium group-hover:text-accent transition-colors">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-accent">AI Recommendation</h3>
              <p className="text-gray-300 leading-relaxed mb-8">{recommendation}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button onClick={reset} className="px-6 py-2.5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">
                  Start Over
                </button>
                <a href="/products" className="px-6 py-2.5 bg-accent text-primary rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors">
                  Browse All Products
                </a>
                <a href="/contact" className="px-6 py-2.5 bg-accent/10 text-accent rounded-xl text-sm font-semibold hover:bg-accent/20 transition-colors">
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
