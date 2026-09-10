"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
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
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            Ready to start your next engineering project? Get in touch.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeUpBox>
              <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-10 text-lg">
                Whether you need proposal engineering, detailed plant design, or corporate training, our team is ready to assist you. Fill out the form or reach out directly.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-4 bg-brand-primary-light rounded-xl text-brand-accent mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary-dark mb-1">Our Office</h3>
                    <p className="text-gray-600 leading-relaxed">
                      'Ameya' Building, Flat No.5,<br />
                      Chintamani Nagar Phase I, Bibwewadi,<br />
                      Pune – 411037, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-4 bg-brand-primary-light rounded-xl text-brand-accent mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary-dark mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919890300211" className="hover:text-brand-accent transition-colors">+91 98 90 300 211</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-4 bg-brand-primary-light rounded-xl text-brand-accent mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary-dark mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:a.unavane@invictusengg.com" className="hover:text-brand-accent transition-colors">a.unavane@invictusengg.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </FadeUpBox>

            <FadeUpBox delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-brand-primary-dark mb-8">Send a Message</h3>
                
                {status === "success" ? (
                  <div className="p-6 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent-dark text-center">
                    <h4 className="font-bold text-xl mb-2">Message Sent!</h4>
                    <p>Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-brand-primary-dark mb-2">Full Name *</label>
                      <input type="text" name="name" id="name" required className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-brand-primary-dark mb-2">Email Address *</label>
                      <input type="email" name="email" id="email" required className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-brand-primary-dark mb-2">Subject</label>
                      <input type="text" name="subject" id="subject" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-brand-primary-dark mb-2">Message *</label>
                      <textarea name="message" id="message" rows={5} required className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === "submitting"}
                      className="w-full rounded-xl bg-brand-accent px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-brand-accent-dark hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                    {status === "error" && (
                      <p className="text-red-500 text-sm mt-2 text-center font-semibold">An error occurred. Please try again.</p>
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
