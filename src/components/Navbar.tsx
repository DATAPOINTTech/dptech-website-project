"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/services#software", label: "Software" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-accent/10 border border-accent/30 p-1 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Data Point Technologies"
                width={36}
                height={36}
                className="group-hover:scale-105 transition-transform object-contain"
              />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-accent font-extrabold text-lg tracking-tight">DATAPOINT</span>
                <span className="text-white font-semibold text-lg ml-1.5">Technologies</span>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest hidden sm:block">Security • Networking • Software</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-accent/15 text-accent font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Enterprise Portals & CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Invoicing System Login */}
            <a
              href={siteConfig.portals.invoicing}
              target="_blank"
              rel="noopener noreferrer"
              title="Login to Invoicing System"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-sky-300 border border-sky-400/20 hover:border-sky-400/40 transition-all shadow-sm"
            >
              <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Invoicing Login</span>
            </a>

            {/* Webmail Login */}
            <a
              href={siteConfig.portals.webmail}
              target="_blank"
              rel="noopener noreferrer"
              title="Login to Webmail"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-emerald-300 border border-emerald-400/20 hover:border-emerald-400/40 transition-all shadow-sm"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Webmail</span>
            </a>

            {/* Get a Quote / Free Survey */}
            <Link
              href="/contact"
              className="ml-1 px-4 py-2 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-all duration-200 text-xs shadow-md shadow-accent/25"
            >
              Free Site Survey
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.portals.invoicing}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sky-400 bg-sky-400/10 rounded-lg text-xs"
              title="Invoicing"
            >
              🧾
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="lg:hidden pb-5 pt-2 border-t border-white/10 space-y-2 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
                  pathname === link.href
                    ? "bg-accent/15 text-accent font-semibold"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={siteConfig.portals.invoicing}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-white/5 rounded-xl text-xs font-semibold text-sky-300 text-center border border-white/10 flex items-center justify-center gap-1.5"
              >
                <span>🧾</span> Invoicing Login
              </a>
              <a
                href={siteConfig.portals.webmail}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-white/5 rounded-xl text-xs font-semibold text-emerald-300 text-center border border-white/10 flex items-center justify-center gap-1.5"
              >
                <span>✉️</span> Webmail
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-4 py-3 bg-accent text-primary font-bold rounded-xl text-center text-sm shadow-lg shadow-accent/20"
            >
              Request Free Site Survey
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
