import { services, softwareSolutions, portalLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, string> = {
  cctv: "📹",
  networking: "🌐",
  "fiber-datacom": "🔌",
  fiberoptic: "🔌",
  datacom: "📡",
  software: "💻",
};

const serviceVisuals: Record<string, { src: string; alt: string; label: string }> = {
  cctv: { src: "/images/cat-cctv.jpg", alt: "CCTV surveillance system", label: "ColorVu 24/7 Security" },
  networking: { src: "/images/cat-networking.jpg", alt: "Networking infrastructure", label: "Cat6 & Enterprise WiFi" },
  "fiber-datacom": { src: "/images/cat-fiber.jpg", alt: "Fiber optic and data communication cabling", label: "Fiber & DATA Backbone" },
  software: { src: "/images/products/software-lms.jpg", alt: "Custom Software Solutions", label: "Cloud Software & Demos" },
};

const faqs = [
  { q: "What types of software solutions do you offer?", a: "We build and deploy Store Inventory & Asset Management (live demo available at sm.datapointtechnology.com), Enterprise Invoicing Portals (invoicing.datapointtechnology.com), Student Portal/LMS, Admission Systems, Biometric Attendance, Recruitment suites, and ANPR vehicle recognition platforms." },
  { q: "Can I test the Store Inventory and Asset Management System before ordering?", a: "Yes! A fully functional demo is live at http://sm.datapointtechnology.com . You can explore inventory tracking, multi-warehouse stock, barcode audits, and supplier workflows." },
  { q: "What is included in the standard 4-Camera CCTV package?", a: "Our 4-camera bundle includes 4x ColorVu full-color cameras, 4-Port PoE NVR, 1TB WD Purple surveillance hard drive, certified pure copper Cat6 cabling, connectors, waterproof junction boxes, and professional on-site mounting with warranty." },
  { q: "How do I access the Invoicing Portal?", a: "Authorized clients and staff can log in directly at http://invoicing.datapointtechnology.com to access verified estimates, generate invoices, and reconcile payment ledgers." },
  { q: "Do you provide a Free On-Site Site Survey?", a: "Yes! Our AI Receptionist (Moomal) or our engineering team will book a 100% Free On-Site Site Survey anywhere in our coverage areas to design the exact camera layout, cable paths, and network topology." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-wider uppercase mb-4">
            End-to-End Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Our 4 Core Divisions
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            1. CCTV &amp; Security Surveillance • 2. Networking Solutions • 3. Fiber Optic and DATA Communication • 4. Software Solutions
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href={portalLinks.inventoryDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold hover:bg-amber-500/30 transition-all flex items-center gap-1.5"
            >
              <span>📦</span> Store Inventory Demo (sm.datapointtechnology.com)
            </a>
            <a
              href={portalLinks.invoicing}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded-xl text-xs font-bold hover:bg-sky-500/30 transition-all flex items-center gap-1.5"
            >
              <span>🧾</span> Invoicing Login (invoicing.datapointtechnology.com)
            </a>
          </div>
        </div>
      </section>

      {/* 4 Core Divisions Navigation Anchors */}
      <div className="sticky top-20 z-40 bg-slate-900/95 backdrop-blur-md border-y border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 sm:gap-6 overflow-x-auto text-xs sm:text-sm font-semibold">
          <a href="#cctv" className="text-gray-300 hover:text-accent whitespace-nowrap py-1">
            1. CCTV &amp; Surveillance
          </a>
          <span className="text-gray-600">•</span>
          <a href="#networking" className="text-gray-300 hover:text-accent whitespace-nowrap py-1">
            2. Networking Solutions
          </a>
          <span className="text-gray-600">•</span>
          <a href="#fiber-datacom" className="text-gray-300 hover:text-accent whitespace-nowrap py-1">
            3. Fiber &amp; DATA Comm
          </a>
          <span className="text-gray-600">•</span>
          <a href="#software" className="text-accent hover:underline whitespace-nowrap py-1 font-bold">
            4. Software Solutions
          </a>
        </div>
      </div>

      {/* Services List */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 scroll-mt-24 ${index % 2 === 1 ? "bg-gradient-to-b from-secondary/40 via-primary to-secondary/30" : "bg-slate-950"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent font-extrabold text-sm flex items-center justify-center shadow-md">
                    {service.orderNumber}
                  </span>
                  <span className="text-4xl">{iconMap[service.id] || service.icon}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{service.title}</h2>
                <p className="text-gray-300 leading-relaxed mb-6 text-base">{service.description}</p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.brands.map((brand) => (
                    <span key={brand} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-accent text-xs font-medium">
                      {brand}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all text-sm shadow-lg shadow-accent/20"
                  >
                    Request Free Site Survey
                  </Link>
                  <a
                    href={`https://wa.me/923167788990?text=${encodeURIComponent(`Assalam-o-Alaikum Moomal, I am inquiring about ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all text-sm flex items-center gap-2"
                  >
                    <span>💬</span> Chat with Moomal
                  </a>
                </div>
              </div>

              <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-accent/10">
                  <Image
                    src={serviceVisuals[service.id]?.src || service.image || "/images/hero-tech-1.jpg"}
                    alt={serviceVisuals[service.id]?.alt || service.title}
                    fill
                    className="object-cover"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-slate-950/80 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {serviceVisuals[service.id]?.label || service.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SECTION 4: FULL SOFTWARE SOLUTIONS & LIVE DEMOS */}
      <section id="software" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/15 border border-accent/30 rounded-full text-accent text-xs font-bold uppercase tracking-wider mb-4">
              Section 4 • Enterprise Applications
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Software Solutions Developed
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base">
              Explore our full suite of enterprise software. Click any solution below to access live demos, login portals, and detailed module specifications.
            </p>
          </div>

          <div className="space-y-16">
            {softwareSolutions.map((sw, i) => (
              <div
                key={sw.id}
                id={`software-${sw.id}`}
                className="rounded-3xl bg-secondary/40 border border-white/10 p-8 sm:p-10 shadow-2xl backdrop-blur-lg hover:border-accent/30 transition-all"
              >
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{sw.icon}</span>
                      {sw.badge && (
                        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
                          {sw.badge}
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 bg-white/5 text-gray-400 text-xs rounded-full">
                        {sw.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      {sw.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                      {sw.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                      {sw.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-gray-300">
                          <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {sw.demoUrl && (
                        <a
                          href={sw.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all text-xs sm:text-sm shadow-lg shadow-accent/20 flex items-center gap-2"
                        >
                          <span>🚀</span> Open Live Demo / Portal ↗
                        </a>
                      )}
                      <Link
                        href={`/contact?subject=${encodeURIComponent(`Software Demo Request: ${sw.title}`)}`}
                        className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/15 transition-all text-xs sm:text-sm"
                      >
                        Request Custom Walkthrough
                      </Link>
                    </div>
                  </div>

                  <div className={`relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Image
                      src={sw.image}
                      alt={sw.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    {sw.demoUrl && (
                      <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-[11px] text-amber-300 font-semibold">
                        Live Demo URL: {sw.demoUrl.replace("http://", "")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-secondary/40 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/15 via-primary to-accent/10 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-base">
            Contact us today for a free on-site engineering survey or request a demo of our Store Inventory and Invoicing systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 text-sm"
            >
              Book Free Site Survey
            </Link>
            <a
              href={portalLinks.receptionWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg text-sm flex items-center gap-2"
            >
              <span>💬</span> Chat with Moomal on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
