"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/quality", label: "Quality" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 dark:bg-[#0A192F]/95 backdrop-blur-md border-gray-200 dark:border-white/10 shadow-sm"
            : "bg-white dark:bg-[#0A192F] border-gray-100 dark:border-white/5"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between h-[72px] px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[#108A00] flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">I</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0A192F] dark:text-white font-bold text-lg tracking-tight leading-tight group-hover:text-[#108A00] transition-colors">
                Invictus
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] leading-none font-medium hidden sm:block">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#108A00] dark:hover:text-[#108A00] rounded-lg hover:bg-[#108A00]/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg bg-[#108A00] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0C6B00] hover:shadow-md transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-[#108A00] transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-[72px] right-0 w-full max-w-sm h-[calc(100vh-72px)] bg-white dark:bg-[#0A192F] shadow-2xl overflow-y-auto">
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#108A00] hover:bg-[#108A00]/5 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center rounded-lg bg-[#108A00] px-6 py-3 text-base font-semibold text-white hover:bg-[#0C6B00] transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
