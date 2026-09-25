"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export default function ContactUsPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="GET IN TOUCH"
        title="Contact Invictus Engineering"
        subtitle="Ready to start your next engineering project? Speak directly with our lead engineering team today."
        breadcrumbs={[{ label: "Contact Us" }]}
        bgImage="/images/banners/contact-banner.png"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#0A0E14]">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeUpBox>
              <h2 className="text-3xl font-heading font-extrabold text-[#0A192F] dark:text-white mb-6">
                Let&apos;s Discuss Your Project Scope
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed">
                Whether you need proposal engineering, detailed 3D plant design, Caesar II stress analysis, or corporate training, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-200/70 dark:border-white/10">
                  <div className="p-3 bg-[#0A192F] text-[#4ADE80] rounded-2xl mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A192F] dark:text-white mb-1 text-base">Headquarters &amp; Office</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      A-201, Ziggurat,<br />
                      Off Pune Mumbai Bypass, Ambegaon (B),<br />
                      Pune – 411046, Maharashtra, India
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-200/70 dark:border-white/10">
                  <div className="p-3 bg-[#108A00]/10 text-[#108A00] dark:text-[#4ADE80] rounded-2xl mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A192F] dark:text-white mb-1 text-base">Direct Line</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      <a href="tel:+919890300211" className="hover:text-[#108A00] font-semibold transition-colors">+91 9890300211</a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-200/70 dark:border-white/10">
                  <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-2xl mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A192F] dark:text-white mb-1 text-base">WhatsApp Support</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      <a href="https://wa.me/919890300211" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] font-semibold transition-colors">
                        +91 9890300211
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-200/70 dark:border-white/10">
                  <div className="p-3 bg-[#0A192F] text-[#4ADE80] rounded-2xl mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A192F] dark:text-white mb-1 text-base">Email Enquiries</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      <a href="mailto:a.unavane@invictusengg.com" className="hover:text-[#108A00] font-semibold transition-colors">a.unavane@invictusengg.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </FadeUpBox>

            <FadeUpBox delay={0.2}>
              <div className="bg-white dark:bg-[#0E1726] rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-xl p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-[#0A192F] dark:text-white mb-6">Send an Enquiry</h3>
                
                {status === "success" ? (
                  <div className="p-6 bg-[#108A00]/10 border border-[#108A00]/30 rounded-2xl text-[#108A00] dark:text-[#4ADE80] text-center">
                    <h4 className="font-bold text-xl mb-2">Message Received!</h4>
                    <p className="text-sm">Thank you for reaching out. Our lead engineer will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-[#0A192F] dark:text-white mb-2">Full Name *</label>
                      <input type="text" name="name" id="name" required className="w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 px-4 py-3 text-sm focus:border-[#108A00] focus:outline-none focus:ring-2 focus:ring-[#108A00]/20 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#0A192F] dark:text-white mb-2">Email Address *</label>
                      <input type="email" name="email" id="email" required className="w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 px-4 py-3 text-sm focus:border-[#108A00] focus:outline-none focus:ring-2 focus:ring-[#108A00]/20 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-[#0A192F] dark:text-white mb-2">Subject / Scope</label>
                      <input type="text" name="subject" id="subject" className="w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 px-4 py-3 text-sm focus:border-[#108A00] focus:outline-none focus:ring-2 focus:ring-[#108A00]/20 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-[#0A192F] dark:text-white mb-2">Project Message *</label>
                      <textarea name="message" id="message" rows={4} required className="w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 px-4 py-3 text-sm focus:border-[#108A00] focus:outline-none focus:ring-2 focus:ring-[#108A00]/20 transition-all"></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === "submitting"}
                      className="w-full rounded-2xl bg-[#108A00] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#108A00]/25 hover:bg-[#0C6B00] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {status === "submitting" ? "Sending..." : "Submit Enquiry"}
                    </button>
                    {status === "error" && (
                      <p className="text-red-500 text-xs mt-2 text-center font-semibold">An error occurred. Please try again.</p>
                    )}
                  </form>
                )}
              </div>
            </FadeUpBox>
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
