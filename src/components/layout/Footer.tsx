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
              <a href="https://wa.me/919890300211" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366] flex items-center justify-center transition-colors duration-200 group" aria-label="WhatsApp us">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
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
                A-201, Ziggurat,<br />
                Off Pune Mumbai Bypass,<br />
                Ambegaon (B), Pune &ndash; 411046
              </p>
              <p>
                <a href="tel:+919890300211" className="hover:text-[#108A00] transition-colors duration-200">+91 9890300211</a>
              </p>
              <p>
                <a href="https://wa.me/919890300211" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors duration-200 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current text-[#25D366]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  WhatsApp Us
                </a>
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
