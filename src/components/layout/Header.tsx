"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/quality", label: "Quality" },
  { href: "/contact-us", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Engineering Coordinate Bar */}
      <div className="bg-[#071A2B] text-[11px] font-mono text-[#F8FAFC] py-1.5 px-4 border-b border-[#0B5CAD]/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-gray-300">PUNE, INDIA</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <span>TEL: +91 9890300211</span>
            <span className="text-gray-300 font-medium">a.unavane@invictusengg.com</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200/90 py-3 shadow-md"
            : "bg-white border-slate-200/60 py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/Photo/LOGO.png"
              alt="Invictus Engineering"
              width={170}
              height={50}
              className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F1F5F9] px-3 py-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#071A2B] hover:text-[#0B5CAD] hover:bg-white rounded-full transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#108A00] hover:bg-[#0D7000] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#108A00]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#071A2B] hover:text-[#0B5CAD] transition-colors rounded-lg bg-slate-100"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="h-6 w-6 text-[#108A00]" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 right-0 w-full max-w-xs h-full bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <span className="font-heading font-bold text-[#071A2B] text-base tracking-wider uppercase">INVICTUS</span>
                <button onClick={() => setMobileOpen(false)} className="text-gray-500 hover:text-[#071A2B]">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#071A2B] hover:text-[#0B5CAD] hover:bg-slate-100 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#108A00] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
