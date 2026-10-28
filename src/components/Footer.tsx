import Image from "next/image";
import Link from "next/link";
import { siteConfig, portalLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-900 to-primary/95 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-accent/30 bg-accent/10 p-1.5 shadow-lg shadow-accent/10">
                <Image src="/images/logo.png" alt="Data Point Technologies logo" fill className="object-contain" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">DATAPOINT</p>
                <p className="text-accent font-semibold text-sm -mt-1">Technologies</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              {siteConfig.tagline}. Leading IT system integrator established in 2016, specializing in CCTV security surveillance, enterprise networking, optical fiber backbones, and custom software systems.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                cPanel Cloud Hosted
              </span>
              <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium">
                AI Receptionist Connected
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#cctv" className="text-gray-400 hover:text-accent transition-colors">
                  CCTV &amp; Surveillance
                </Link>
              </li>
              <li>
                <Link href="/services#networking" className="text-gray-400 hover:text-accent transition-colors">
                  Networking Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#fiber-datacom" className="text-gray-400 hover:text-accent transition-colors">
                  Fiber Optic &amp; DATA Comm
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="text-gray-400 hover:text-accent transition-colors">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-accent transition-colors">
                  Product Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Software Demos & Portals */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Software &amp; Portals
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={portalLinks.inventoryDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>📦</span> Store Inventory Demo
                </a>
              </li>
              <li>
                <a
                  href={portalLinks.invoicing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 hover:text-sky-200 flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>🧾</span> Invoicing System Login
                </a>
              </li>
              <li>
                <a
                  href={portalLinks.webmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>✉️</span> Webmail Portal
                </a>
              </li>
              <li>
                <Link href="/services#software" className="text-gray-400 hover:text-accent transition-colors">
                  Student Portal &amp; LMS
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="text-gray-400 hover:text-accent transition-colors">
                  ANPR Monitoring Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Contact &amp; Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <span className="text-accent mt-0.5">📞</span>
                <div>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors block text-white font-medium">
                    {siteConfig.phone}
                  </a>
                  <span className="text-[11px] text-gray-400">24/7 AI Reception Line</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-accent">✉️</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-accent">📍</span>
                <span>{siteConfig.address}</span>
              </li>
              <li className="pt-2">
                <a
                  href={portalLinks.receptionWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-semibold hover:bg-emerald-600/30 transition-colors"
                >
                  <span>💬</span> WhatsApp Reception
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={portalLinks.invoicing} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Invoicing Portal
            </a>
            <a href={portalLinks.inventoryDemo} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Inventory Live Demo
            </a>
            <a href={portalLinks.webmail} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Webmail
            </a>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Free Site Survey
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
