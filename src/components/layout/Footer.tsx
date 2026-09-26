import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#04101C] text-white border-t border-[#0B5CAD]/30 relative overflow-hidden">
      {/* Background blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Brand & Overview (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/Photo/LOGO.png"
                  alt="Invictus Engineering"
                  width={180}
                  height={54}
                  className="h-12 w-auto object-contain bg-white p-2 rounded-lg shadow-md"
                  unoptimized
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                Engineering solutions, project management, and technical expertise for complex industrial infrastructure, process plants, and oil &amp; gas facilities worldwide.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#66727D]">
              <Cpu className="w-3.5 h-3.5 text-[#108A00]" />
              <span>CAD REGISTRATION // ISO B31.3 CODE COMPLIANT</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-[#108A00] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Selected Projects</Link></li>
              <li><Link href="/clients" className="text-gray-400 hover:text-white transition-colors">Clients &amp; Partners</Link></li>
              <li><Link href="/quality" className="text-gray-400 hover:text-white transition-colors">Quality &amp; Safety</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-[#108A00] mb-5">
              Engineering Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/proposal-engineering" className="text-gray-400 hover:text-white transition-colors">Proposal Engineering</Link></li>
              <li><Link href="/services/detail-engineering" className="text-gray-400 hover:text-white transition-colors">Detail Engineering</Link></li>
              <li><Link href="/services/engineering-management" className="text-gray-400 hover:text-white transition-colors">Engineering Management</Link></li>
              <li><Link href="/services/engineering-training" className="text-gray-400 hover:text-white transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-[#108A00] mb-5">
              Headquarters
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0B5CAD] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  A-201, Ziggurat, Ambegaon (B),<br />Pune – 411046, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0B5CAD] shrink-0" />
                <a href="tel:+919890300211" className="hover:text-white transition-colors">+91 9890300211</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0B5CAD] shrink-0" />
                <a href="mailto:a.unavane@invictusengg.com" className="hover:text-white transition-colors">a.unavane@invictusengg.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <p>
            &copy; {new Date().getFullYear()} INVICTUS ENGINEERING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/quality" className="hover:text-white transition-colors">QUALITY POLICY</Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">PROJECT INQUIRY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
