"use client";

import Link from "next/link";
import { ArrowRight, Settings, Users, PenTool, BookOpen, Globe, ChevronRight, CheckCircle2, Zap, Shield, Target, Award, Clock, MapPin } from "lucide-react";
import { projects, clients } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const services = [
  {
    title: "Proposal Engineering",
    desc: "Accurate estimation, cost analysis, and technical proposals that win bids and set projects on the right path.",
    icon: PenTool,
    link: "/services/proposal-engineering",
    iconBg: "bg-[#108A00]/10",
    iconColor: "text-[#108A00]",
  },
  {
    title: "Detail Engineering",
    desc: "Comprehensive 3D design, piping layout, stress analysis, and construction-ready deliverables.",
    icon: Settings,
    link: "/services/detail-engineering",
    iconBg: "bg-[#0A192F]/10",
    iconColor: "text-[#0A192F]",
  },
  {
    title: "Engineering Management",
    desc: "End-to-end coordination to ensure timely delivery, quality compliance, and seamless execution.",
    icon: Users,
    link: "/services/engineering-management",
    iconBg: "bg-[#108A00]/10",
    iconColor: "text-[#108A00]",
  },
  {
    title: "Corporate Training",
    desc: "Specialized industrial training programs for students and working professionals in piping and plant design.",
    icon: BookOpen,
    link: "/services/engineering-training",
    iconBg: "bg-[#0A192F]/10",
    iconColor: "text-[#0A192F]",
  },
];

const stats = [
  { value: "50+", label: "Systems Delivered", icon: Target },
  { value: "99%", label: "Design Accuracy", icon: Shield },
  { value: "14+", label: "Years Experience", icon: Clock },
  { value: "10+", label: "Countries Served", icon: Globe },
];

const steps = [
  {
    step: "01",
    title: "Share Your Requirements",
    desc: "Tell us about your project scope, specifications, and timeline. We'll analyze your needs and propose the best approach.",
  },
  {
    step: "02",
    title: "We Engineer the Solution",
    desc: "Our expert team designs, models, and validates your engineering deliverables using industry-leading tools and standards.",
  },
  {
    step: "03",
    title: "Precision Delivered",
    desc: "Receive construction-ready drawings, 3D models, and documentation — on time, within budget, and to the highest quality.",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col bg-white dark:bg-[#0A0E14] min-h-screen font-sans overflow-x-hidden">

      {/* ===== SECTION 1: HERO WITH VIDEO BACKGROUND ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-bg.png"
        >
          {/* Place your video file in /public and update the src below */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/75 to-[#0A192F]/50" />
        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0A0E14] to-transparent" />
        {/* Subtle animated pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeIn} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#108A00]/20 text-[#4ADE80] text-sm font-semibold mb-6 backdrop-blur-sm border border-[#108A00]/30">
              <Zap className="w-4 h-4" />
              Trusted by Industry Leaders
            </motion.div>

            <motion.h1 variants={fadeIn} custom={1} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading text-white leading-[1.15] tracking-tight mb-6 drop-shadow-lg">
              Engineering Excellence, <span className="text-[#4ADE80] italic">Built to Last</span>
            </motion.h1>

            <motion.p variants={fadeIn} custom={2} className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Transform your engineering operations with precision 3D modeling, piping design, and plant engineering solutions that drive real results.
            </motion.p>

            <motion.div variants={fadeIn} custom={3} className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg bg-[#108A00] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#108A00]/25 hover:bg-[#0C6B00] hover:shadow-xl hover:shadow-[#108A00]/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Quick trust stats */}
            <motion.div variants={fadeIn} custom={4} className="flex justify-center gap-10 sm:gap-16 mt-10 pt-8 border-t border-white/15 w-full max-w-md">
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Systems</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">14+</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Years</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 2: TRUSTED BY — Logo Marquee ===== */}
      <section className="bg-gray-50 dark:bg-[#0A192F]/50 border-y border-gray-100 dark:border-white/5 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-center text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            Trusted by industry leaders worldwide
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 dark:from-[#0A192F]/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 dark:from-[#0A192F]/50 to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <span className="text-lg font-bold text-gray-300 dark:text-gray-600 hover:text-[#0A192F] dark:hover:text-white transition-colors duration-300 whitespace-nowrap tracking-wide">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SERVICE CATEGORIES ===== */}
      <section className="bg-white dark:bg-[#0A0E14] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeIn} className="text-sm font-semibold text-[#108A00] uppercase tracking-widest mb-3">
              Our Services
            </motion.p>
            <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#0A192F] dark:text-white tracking-tight mb-4">
              Engineering services{" "}
              <span className="text-[#108A00] italic">tailored to your needs</span>
            </motion.h2>
            <motion.p variants={fadeIn} custom={2} className="text-lg text-gray-500 dark:text-gray-400">
              From concept to construction, we deliver comprehensive engineering solutions across every project phase.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={idx}
              >
                <Link
                  href={service.link}
                  className="group flex flex-col h-full p-6 lg:p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#108A00]/30 hover:shadow-xl hover:shadow-[#108A00]/5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${service.iconBg} dark:bg-white/10 flex items-center justify-center mb-5`}>
                    <service.icon className={`w-5 h-5 ${service.iconColor} dark:text-[#108A00]`} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A192F] dark:text-white mb-2 group-hover:text-[#108A00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-grow">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#108A00] group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: WHY CHOOSE INVICTUS — Stats ===== */}
      <section className="bg-[#0A192F] dark:bg-[#060F1D] py-20 lg:py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#108A00]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#108A00]/5 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
            {/* Left — Headline */}
            <motion.div
              className="flex-1 max-w-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.p variants={fadeIn} className="text-sm font-semibold text-[#108A00] uppercase tracking-widest mb-3">
                Why Invictus
              </motion.p>
              <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white tracking-tight mb-6">
                Why industry leaders{" "}
                <span className="text-[#108A00] italic">choose Invictus</span>
              </motion.h2>
              <motion.p variants={fadeIn} custom={2} className="text-lg text-gray-400 leading-relaxed mb-8">
                With over a decade of experience, we combine cutting-edge technology with deep domain expertise to deliver engineering solutions that exceed expectations.
              </motion.p>
              <motion.div variants={fadeIn} custom={3}>
                <Link
                  href="/about-us"
                  className="inline-flex items-center text-base font-semibold text-white hover:text-[#108A00] transition-colors group"
                >
                  Learn about our story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — Stats Grid */}
            <div className="flex-1 w-full grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-[#108A00]/30 transition-all duration-300 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                  custom={idx}
                >
                  <stat.icon className="w-6 h-6 text-[#108A00] mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: HOW IT WORKS ===== */}
      <section className="bg-white dark:bg-[#0A0E14] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeIn} className="text-sm font-semibold text-[#108A00] uppercase tracking-widest mb-3">
              Simple Process
            </motion.p>
            <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#0A192F] dark:text-white tracking-tight">
              How it <span className="text-[#108A00] italic">works</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-[#108A00]/20 via-[#108A00]/40 to-[#108A00]/20" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                custom={idx}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#108A00] text-white text-lg font-bold mb-6 relative z-10 shadow-lg shadow-[#108A00]/25">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: FEATURED PROJECTS ===== */}
      <section className="bg-gray-50 dark:bg-[#0A192F]/30 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <div>
              <motion.p variants={fadeIn} className="text-sm font-semibold text-[#108A00] uppercase tracking-widest mb-3">
                Our Work
              </motion.p>
              <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#0A192F] dark:text-white tracking-tight">
                Featured <span className="text-[#108A00] italic">projects</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeIn} custom={2}>
              <Link
                href="/projects"
                className="inline-flex items-center text-sm font-semibold text-[#108A00] hover:text-[#0C6B00] transition-colors group"
              >
                View all projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={idx}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col h-full bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 hover:border-[#108A00]/30 hover:shadow-xl hover:shadow-[#108A00]/5 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="h-44 bg-gradient-to-br from-[#0A192F] to-[#0A192F]/80 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #108A00 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <span className="text-white font-bold text-xl relative z-10 text-center">{project.title}</span>
                  </div>
                  {/* Card Body */}
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="inline-block px-3 py-1 bg-[#108A00]/10 text-[#108A00] text-[10px] font-bold rounded-full mb-3 w-max uppercase tracking-wider">
                      {project.sector}
                    </span>
                    <h3 className="text-lg font-bold text-[#0A192F] dark:text-white mb-2 group-hover:text-[#108A00] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#108A00]" />
                      {project.location}
                    </p>
                    <div className="mt-auto inline-flex items-center text-sm font-semibold text-[#108A00] group-hover:gap-2 transition-all">
                      Read case study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: TESTIMONIALS ===== */}
      <section className="bg-white dark:bg-[#0A0E14] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeIn} className="text-sm font-semibold text-[#108A00] uppercase tracking-widest mb-3">
              Client Stories
            </motion.p>
            <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#0A192F] dark:text-white tracking-tight">
              What our clients <span className="text-[#108A00] italic">say</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients
              .filter((c) => c.testimonialQuote)
              .map((client, idx) => (
                <motion.div
                  key={client.name}
                  className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-white/10 hover:border-[#108A00]/20 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}
                  custom={idx}
                >
                  {/* Quote mark */}
                  <div className="text-[#108A00] text-4xl font-heading leading-none mb-4">&ldquo;</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                    {client.testimonialQuote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{client.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0A192F] dark:text-white">{client.name}</div>
                      <div className="text-xs text-gray-400">{client.testimonialAuthor}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: CTA BANNER ===== */}
      <section className="bg-[#108A00] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white tracking-tight mb-4">
              Ready to start your next project?
            </motion.h2>
            <motion.p variants={fadeIn} custom={1} className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how Invictus Engineering can bring precision, reliability, and excellence to your next engineering challenge.
            </motion.p>
            <motion.div variants={fadeIn} custom={2} className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-bold text-[#108A00] shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
