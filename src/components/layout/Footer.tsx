import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0A192F] dark:bg-[#060F1D] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#108A00] flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">I</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Invictus
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Precision plant and piping engineering solutions for industrial, process, and oil &amp; gas projects worldwide.
            </p>
            <div className="flex gap-3">
              <a href="mailto:a.unavane@invictusengg.com" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#108A00] flex items-center justify-center transition-colors duration-200 group" aria-label="Email us">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:+919890300211" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#108A00] flex items-center justify-center transition-colors duration-200 group" aria-label="Call us">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-sm text-gray-400 hover:text-[#108A00] transition-colors duration-200">About Us</Link></li>
              <li><Link href="/projects" className="text-sm text-gray-400 hover:text-[#108A00] transition-colors duration-200">Projects</Link></li>
              <li><Link href="/clients" className="text-sm text-gray-400 hover:text-[#108A00] transition-colors duration-200">Clients</Link></li>
              <li><Link href="/quality" className="text-sm text-gray-400 hover:text-[#108A00] transition-colors duration-200">Quality</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/proposal-engineering" className="text-sm text-gray-400 hover:text-[#108A00] transition-colors duration-200">Proposal Engineering</Link></li>
              <li><Link href="/services/detail-engineering" className="text-sm text-gray-400 hover:text-[#108A00] transition-colors duration-200">Detail Engineering</Link></li>
              <li><Link href="/services/engineering-management" className="text-sm text-gray-400 hover:text-[#108A00] transition-colors duration-200">Engineering Management</Link></li>
              <li><Link href="/services/engineering-training" className="text-sm text-gray-400 hover:text-[#108A00] transition-colors duration-200">Engineering Training</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <address className="not-italic text-sm text-gray-400 space-y-3">
              <p className="leading-relaxed">
                &apos;Ameya&apos; Building, Flat No.5,<br />
                Chintamani Nagar Phase I, Bibwewadi,<br />
                Pune &ndash; 411037, India
              </p>
              <p>
                <a href="tel:+919890300211" className="hover:text-[#108A00] transition-colors duration-200">+91 98 90 300 211</a>
              </p>
              <p>
                <a href="mailto:a.unavane@invictusengg.com" className="hover:text-[#108A00] transition-colors duration-200">a.unavane@invictusengg.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Invictus Engineering. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/quality" className="text-xs text-gray-500 hover:text-[#108A00] transition-colors">Quality Policy</Link>
              <Link href="/contact-us" className="text-xs text-gray-500 hover:text-[#108A00] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
