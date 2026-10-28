import Link from "next/link";
import Image from "next/image";
import { stats, getProducts, portalLinks } from "@/lib/data";
import AIRecommender from "@/components/AIRecommender";
import HeroSlider from "@/components/HeroSlider";
import InteractiveShowcase from "@/components/InteractiveShowcase";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? "text-accent" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const featuredProducts = getProducts().slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,150,254,0.3),_transparent_35%),linear-gradient(135deg,_#031230_0%,_#061d45_45%,_#0a2e64_100%)]" />
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-float" />
        <div className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-accent-dark/20 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-accent text-xs sm:text-sm font-semibold tracking-wide">
                  AI-Powered Technology Partner &amp; System Integrator
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="text-white">Smart Solutions for a</span>
                <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-accent via-sky-300 to-blue-400">
                  Smarter Business
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                From intelligent ColorVu CCTV security and high-speed enterprise networks to optical fiber backbones and custom enterprise software suites.
              </p>

              {/* Fast portal shortcut pill buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={portalLinks.inventoryDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>📦</span> Store Inventory Demo
                </a>
                <a
                  href={portalLinks.invoicing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30 hover:bg-sky-500/25 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>🧾</span> Invoicing System
                </a>
                <a
                  href={portalLinks.webmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>✉️</span> Webmail
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 text-sm"
                >
                  Book Free Site Survey
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm text-sm"
                >
                  Explore 4 Core Services
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl sm:text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-gray-400 text-[11px] uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-[460px] lg:h-[500px] rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-accent/10 backdrop-blur-xl">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED SERVICES CARDS ON FRONT PAGE */}
      <section className="py-24 bg-gradient-to-b from-primary via-secondary/70 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-3">
              Pillars of Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Highlighted Services
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Explore our 4 dedicated service divisions engineered to elevate security, connectivity, and business automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: CCTV & Security Surveillance */}
            <div className="group rounded-3xl bg-secondary/50 border border-white/10 hover:border-accent/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/10 backdrop-blur-lg">
              <div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src="/images/cat-cctv.jpg"
                    alt="CCTV & Security Surveillance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-accent/90 text-primary font-bold text-sm flex items-center justify-center shadow-md">
                    1
                  </span>
                  <span className="absolute bottom-3 left-3 text-2xl">📹</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  CCTV &amp; Security Surveillance
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Full perimeter defense with 4K AcuSense, ColorVu night vision, PTZ tracking, PoE NVRs, and AI video analytics.
                </p>

                <ul className="space-y-1.5 text-xs text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> 4-Camera ColorVu PoE Bundles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Human &amp; Vehicle Smart Filter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> 100% Free On-Site Site Survey
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Hikvision, EZVIZ, Dahua
                  </li>
                </ul>
              </div>

              <Link
                href="/services#cctv"
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 group-hover:bg-accent group-hover:text-primary text-white text-xs font-bold text-center border border-white/10 group-hover:border-accent transition-all duration-200"
              >
                View CCTV Details →
              </Link>
            </div>

            {/* Card 2: Networking Solutions */}
            <div className="group rounded-3xl bg-secondary/50 border border-white/10 hover:border-accent/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/10 backdrop-blur-lg">
              <div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src="/images/cat-networking.jpg"
                    alt="Networking Solutions"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-sky-500/90 text-white font-bold text-sm flex items-center justify-center shadow-md">
                    2
                  </span>
                  <span className="absolute bottom-3 left-3 text-2xl">🌐</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  Networking Solutions
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Robust enterprise network infrastructure, high-speed pure copper cabling, managed switches, and secure WiFi 6/6E.
                </p>

                <ul className="space-y-1.5 text-xs text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Structured Cat6 / Cat6A Cabling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Enterprise WiFi 6 Access Points
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Routers &amp; Firewall Security
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Cisco, MikroTik, TP-Link
                  </li>
                </ul>
              </div>

              <Link
                href="/services#networking"
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 group-hover:bg-accent group-hover:text-primary text-white text-xs font-bold text-center border border-white/10 group-hover:border-accent transition-all duration-200"
              >
                View Networking Details →
              </Link>
            </div>

            {/* Card 3: Fiber Optic and DATA Communication */}
            <div className="group rounded-3xl bg-secondary/50 border border-white/10 hover:border-accent/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/10 backdrop-blur-lg">
              <div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src="/images/cat-fiber.jpg"
                    alt="Fiber Optic and DATA Communication"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-indigo-500/90 text-white font-bold text-sm flex items-center justify-center shadow-md">
                    3
                  </span>
                  <span className="absolute bottom-3 left-3 text-2xl">🔌</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  Fiber Optic &amp; DATA Comm
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Light-speed optical fiber backbone, precision core fusion splicing, OTDR budget certification, and wireless bridges.
                </p>

                <ul className="space-y-1.5 text-xs text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Single-Mode &amp; Multi-Mode Fiber
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Fiber Splicing &amp; Termination
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Point-to-Point Wireless Bridges
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Corning, CommScope, Panduit
                  </li>
                </ul>
              </div>

              <Link
                href="/services#fiber-datacom"
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 group-hover:bg-accent group-hover:text-primary text-white text-xs font-bold text-center border border-white/10 group-hover:border-accent transition-all duration-200"
              >
                View Fiber &amp; DATA Details →
              </Link>
            </div>

            {/* Card 4: Software Solutions */}
            <div className="group rounded-3xl bg-secondary/50 border border-white/10 hover:border-accent/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/10 backdrop-blur-lg">
              <div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src="/images/products/software-lms.jpg"
                    alt="Software Solutions"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-emerald-500/90 text-white font-bold text-sm flex items-center justify-center shadow-md">
                    4
                  </span>
                  <span className="absolute bottom-3 left-3 text-2xl">💻</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  Software Solutions
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Integrated enterprise applications, inventory management, cloud invoicing, LMS portals, and ANPR monitoring.
                </p>

                {/* Direct links to developed software */}
                <div className="space-y-1.5 text-xs mb-6">
                  <a
                    href={portalLinks.inventoryDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 transition-colors"
                  >
                    <span className="font-semibold">📦 Store Inventory Demo</span>
                    <span className="text-[10px] bg-amber-500/30 px-1.5 py-0.5 rounded">Live Demo ↗</span>
                  </a>
                  <a
                    href={portalLinks.invoicing}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/20 transition-colors"
                  >
                    <span className="font-semibold">🧾 Invoicing System Portal</span>
                    <span className="text-[10px] bg-sky-500/30 px-1.5 py-0.5 rounded">Login ↗</span>
                  </a>
                  <Link
                    href="/services#software"
                    className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
                  >
                    <span>🎓 Student Portal &amp; LMS</span>
                    <span className="text-gray-400">Details →</span>
                  </Link>
                  <Link
                    href="/services#software"
                    className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
                  >
                    <span>🚗 ANPR Vehicle Suite</span>
                    <span className="text-gray-400">Details →</span>
                  </Link>
                </div>
              </div>

              <Link
                href="/services#software"
                className="w-full py-2.5 px-4 rounded-xl bg-accent text-primary text-xs font-bold text-center hover:bg-accent-dark transition-all duration-200 shadow-md shadow-accent/20"
              >
                All Developed Software Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULL CATEGORY SECTIONS */}
      <section className="relative">
        {/* 1. CCTV */}
        <div className="relative min-h-[70vh] flex items-center py-20">
          <div className="absolute inset-0">
            <Image src="/images/cat-cctv.jpg" alt="CCTV Security" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#031230]/95 via-[#082255]/85 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                <span className="text-xl">📹</span>
                <span className="text-white text-xs font-bold uppercase tracking-wider">Section 1</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                CCTV &amp; Security Surveillance
              </h2>
              <p className="text-base text-gray-200 mb-6 leading-relaxed">
                Advanced surveillance systems with ColorVu 24/7 full-color night vision, AcuSense deep learning human/vehicle classification, PoE NVR recording, and remote mobile viewing.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["4K AcuSense Cameras", "ColorVu Night Vision", "PoE 4K NVRs", "Free Site Survey", "Mobile Monitoring"].map((f) => (
                  <span key={f} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/95 font-medium">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link href="/services#cctv" className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all text-xs sm:text-sm">
                  CCTV Solutions &amp; Packages →
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all text-xs sm:text-sm shadow-lg shadow-accent/20">
                  Book Free Survey
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Networking Solutions */}
        <div className="relative min-h-[70vh] flex items-center justify-end py-20">
          <div className="absolute inset-0">
            <Image src="/images/cat-networking.jpg" alt="Networking Solutions" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#031230]/95 via-[#0A2E64]/85 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-right flex justify-end">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                <span className="text-xl">🌐</span>
                <span className="text-white text-xs font-bold uppercase tracking-wider">Section 2</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Networking Solutions
              </h2>
              <p className="text-base text-gray-200 mb-6 leading-relaxed">
                Reliable structured cabling (pure copper Cat6/Cat6A), WiFi 6 access points, enterprise firewalls, and managed switches tailored for zero-downtime office environments.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["Cat6/6A Structured Cabling", "WiFi 6 Access Points", "Managed PoE Switches", "Hardware Firewalls", "VPN Remote Access"].map((f) => (
                  <span key={f} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/95 font-medium">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link href="/services#networking" className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all text-xs sm:text-sm">
                  Networking Infrastructure →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Fiber Optic and DATA Communication */}
        <div className="relative min-h-[70vh] flex items-center py-20">
          <div className="absolute inset-0">
            <Image src="/images/cat-fiber.jpg" alt="Fiber Optic and DATA Communication" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#031230]/95 via-[#0A2E64]/85 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                <span className="text-xl">🔌</span>
                <span className="text-white text-xs font-bold uppercase tracking-wider">Section 3</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Fiber Optic &amp; DATA Communication
              </h2>
              <p className="text-base text-gray-200 mb-6 leading-relaxed">
                Light-speed connectivity engineered for critical industrial and enterprise operations. Optical fiber splicing, OTDR test certification, point-to-point wireless bridges, and SCADA data transmission.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["Single & Multi-Mode Fiber", "Fusion Splicing", "OTDR Certification", "Wireless P2P Bridges", "SCADA Comm"].map((f) => (
                  <span key={f} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/95 font-medium">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link href="/services#fiber-datacom" className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all text-xs sm:text-sm">
                  Fiber &amp; DATA Details →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Software Solutions */}
        <div className="relative min-h-[70vh] flex items-center justify-end py-20">
          <div className="absolute inset-0">
            <Image src="/images/products/software-lms.jpg" alt="Software Solutions" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#031230]/98 via-[#061e47]/90 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full mb-4">
                <span className="text-xl">💻</span>
                <span className="text-accent text-xs font-bold uppercase tracking-wider">Section 4</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Software Solutions &amp; Cloud Demos
              </h2>
              <p className="text-base text-gray-200 mb-6 leading-relaxed">
                Automate your entire institution or business workflow with custom cloud software. Check out our live demos and operational web systems below:
              </p>

              {/* Demo cards inside section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <a
                  href={portalLinks.inventoryDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 transition-all text-white"
                >
                  <p className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                    <span>📦</span> Store Inventory Demo
                  </p>
                  <p className="text-[11px] text-gray-300 mt-1">
                    Multi-warehouse stock, barcode audit, asset management.
                  </p>
                  <span className="text-[10px] text-amber-200 font-semibold mt-2 inline-block">
                    sm.datapointtechnology.com ↗
                  </span>
                </a>

                <a
                  href={portalLinks.invoicing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-sky-500/15 border border-sky-500/30 hover:bg-sky-500/25 transition-all text-white"
                >
                  <p className="font-bold text-sky-300 text-sm flex items-center gap-1.5">
                    <span>🧾</span> Invoicing System
                  </p>
                  <p className="text-[11px] text-gray-300 mt-1">
                    Billing, estimates, client ledger, and AI sync.
                  </p>
                  <span className="text-[10px] text-sky-200 font-semibold mt-2 inline-block">
                    invoicing.datapointtechnology.com ↗
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/services#software" className="px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all text-xs sm:text-sm shadow-lg shadow-accent/20">
                  Full Software Catalog &amp; Features →
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all text-xs sm:text-sm">
                  Request Custom Software Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Experience & AI Receptionist */}
      <InteractiveShowcase />

      {/* Smart Product Recommender */}
      <AIRecommender />

      {/* Featured Products */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Verified Hardware</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Featured Equipment</h2>
              <p className="text-gray-400 text-sm mt-1">Official products with warranty and professional installation</p>
            </div>
            <Link
              href="/products"
              className="text-accent hover:text-accent-dark font-semibold text-sm flex items-center gap-1.5 bg-accent/10 px-4 py-2 rounded-xl border border-accent/20 transition-colors"
            >
              Browse Full Catalog ({getProducts().length} items) <span>→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-secondary/40 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-accent/5">
                <div>
                  <div className="aspect-square bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
                    <Image
                      src={product.image || "/images/products/hik-bullet-front.png"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    {product.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent/20 text-accent border border-accent/30">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-gray-300 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <StarRating rating={product.rating} />
                      {product.price && (
                        <span className="text-accent font-bold text-xs">{product.price}</span>
                      )}
                    </div>
                    <h3 className="text-white text-sm font-semibold leading-snug mb-1 line-clamp-2">{product.name}</h3>
                    {product.description && (
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{product.description}</p>
                    )}
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <Link
                    href={`https://wa.me/923167788990?text=${encodeURIComponent(`Assalam-o-Alaikum Moomal, I am inquiring about: ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-white/5 hover:bg-accent text-gray-200 hover:text-primary rounded-xl text-xs font-semibold text-center border border-white/10 hover:border-accent transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>💬</span> Inquire via WhatsApp
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Receptionist Qualification Banner */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-secondary/80 to-primary/80 border border-accent/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Moomal — 24/7 AI Receptionist Connected
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                  Need a Verified Proposal or Free Technical Site Survey?
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Our front-desk AI receptionist, Moomal, instantly qualifies inbound requirements across CCTV, networking, optical fiber, and custom software. Talk to Moomal directly in Urdu, Sindhi, or English.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/923167788990?text=Assalam-o-Alaikum%20Moomal%2C%20I%20would%20like%20to%20schedule%20a%20Free%20On-Site%20Site%20Survey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>💬</span> Connect with Moomal on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition-all"
                  >
                    Submit Web Inquiry Form
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Lead Qualification Protocol</p>
                <h4 className="text-lg font-bold text-white mb-4">What Moomal prepares for you:</h4>
                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold">1.</span>
                    <span>100% Free On-Site Site Survey &amp; Cable Route Planning</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold">2.</span>
                    <span>Standardized 4-Camera ColorVu &amp; PoE NVR Hardware Package</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold">3.</span>
                    <span>Itemized Invoicing System PDF Quotation with Official Warranty</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold">4.</span>
                    <span>Direct Demo Access to Store Inventory &amp; Asset Management Suite</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
