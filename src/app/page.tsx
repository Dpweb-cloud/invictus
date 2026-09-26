"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight,
  PenTool, 
  Settings, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Globe, 
  Clock, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  Layers, 
  MapPin, 
  Building2, 
  Target,
  Zap,
  Cpu,
  Compass,
  Flame,
  Factory,
  Check
} from "lucide-react";
import { projects, clients } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";



const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

// 4 Major Engineering Capabilities
const capabilities = [
  {
    num: "01",
    title: "Proposal Engineering",
    shortDesc: "Fast-turnaround accurate estimation, in-house BOM software processing, and technical proposals that win competitive bids.",
    detailDesc: "Piping MTO estimations, conceptual plot plans, man-hour forecasting, and objective technical bid evaluation (TBE) of vendor offers.",
    icon: PenTool,
    href: "/services/proposal-engineering",
    deliverables: ["Piping BOM Software Processing", "Conceptual Plot Plan Layout", "Man-Hour Estimation", "Technical Bid Evaluation (TBE)"]
  },
  {
    num: "02",
    title: "Detail Engineering",
    shortDesc: "Comprehensive 3D plant design, piping layout, Caesar II stress analysis, and construction-ready deliverables.",
    detailDesc: "End-to-end multi-disciplinary design spanning process, equipment, piping, instrumentation, and electrical disciplines adhering to ASME, API, OISD.",
    icon: Settings,
    href: "/services/detail-engineering",
    deliverables: ["Piping Stress Analysis (Caesar II)", "3D Plant & Piping Modelling", "Piping Material Specifications", "Isometrics & GA Extraction"]
  },
  {
    num: "03",
    title: "Engineering Management",
    shortDesc: "Central coordination hub managing inter-disciplinary interfaces, 3D model reviews, vendor approvals, and constructability.",
    detailDesc: "Structured 30%, 60%, 90% model reviews, vendor document review (VDR), schedule tracking, and change management.",
    icon: Users,
    href: "/services/engineering-management",
    deliverables: ["30%, 60%, 90% 3D Model Reviews", "Vendor Document Review (VDR)", "Technical Interface Management", "Constructability Audits"]
  },
  {
    num: "04",
    title: "Engineering Training",
    shortDesc: "Specialized capability development for fresh engineers and corporate teams, bridging academia to live project practice.",
    detailDesc: "Expert-led practical training in piping design, stress analysis, international codes (ASME, API), and digital engineering tools.",
    icon: BookOpen,
    href: "/services/engineering-training",
    deliverables: ["ASME & API Code Training", "Graduate Engineer Upskilling", "Corporate Custom Training", "Project-Based Learning"]
  }
];

// 3D Plant Modelling tabs (PDMS, Navisworks, Caesar II - SolidWorks removed)
const modellingTabs = [
  {
    id: "pdms",
    label: "PDMS / AVEVA",
    tool: "AVEVA Plant",
    desc: "Full plant 3D modelling with piping, structural & equipment layout in AVEVA PDMS for complex process plant projects.",
    images: [
      { src: "/Photo/3D Model in PDMS View 1.jpg", caption: "PDMS — Full Plant Isometric View (FENIX Project)" },
      { src: "/Photo/Snap1.png", caption: "PDMS — Detailed Piping & Structural Layout" },
      { src: "/Photo/Snap2.png", caption: "PDMS — Multi-Level Plant Structure" },
    ],
  },
  {
    id: "navisworks",
    label: "Navisworks",
    tool: "Autodesk Navisworks",
    desc: "High-fidelity 3D clash detection and model review using Autodesk Navisworks for construction-ready deliverables.",
    images: [
      { src: "/Photo/D1438.jpg", caption: "Navisworks — 3D Model Review (D1438 Project)" },
      { src: "/Photo/Snap3.png", caption: "PDMS — Piping Clash & Clearance Review" },
    ],
  },
  {
    id: "caesar",
    label: "Caesar II",
    tool: "Intergraph Caesar II",
    desc: "Pipe stress analysis modelling and support optimization using Caesar II to ASME B31.3 / B31.1 codes.",
    images: [
      { src: "/Photo/Caesar Snap.jpg", caption: "Caesar II — Piping Stress Model" },
      { src: "/Photo/Caesar Snap3_edited.jpg", caption: "Caesar II — Support & Load Analysis" },
    ],
  },
];

const verifiedStats = [
  { value: "14+", label: "Years Experience", desc: "Decade+ of industrial plant engineering" },
  { value: "50+", label: "Systems Delivered", desc: "Complex piping & plant facilities" },
  { value: "15+", label: "Global Clients", desc: "Refineries, chemical & EPC leaders" },
  { value: "6+", label: "Core Disciplines", desc: "Piping, Process, Equipment & I&C" },
];

const industries = [
  {
    title: "Oil & Gas",
    desc: "Grassroot gas stations, TEG dehydration skids, LPG import terminals, and offshore piping stress analysis.",
    icon: Flame,
    image: "/images/projects/gas-collecting-station-1.jpg"
  },
  {
    title: "Chemical & Petrochemical",
    desc: "Solvent recovery plants, process unit expansions, equipment layout optimization, and specification.",
    icon: Factory,
    image: "/images/projects/solvent-recovery-1.jpg"
  },
  {
    title: "Power & Steam Generation",
    desc: "High-pressure & low-pressure steam lines, turbine tie-ins, pipe rack routing, and 500m line stress analysis.",
    icon: Zap,
    image: "/images/projects/lp-steam-line-1.jpg"
  },
  {
    title: "Industrial Infrastructure",
    desc: "Fire water pump houses, jetty pipelines, water bath heaters, and brownfield plant retrofits.",
    icon: Building2,
    image: "/images/projects/lpg-import-terminal-1.jpg"
  }
];

function Modelling3DSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImg, setActiveImg] = useState(0);

  const tab = modellingTabs[activeTab];

  function switchTab(idx: number) {
    setActiveTab(idx);
    setActiveImg(0);
  }

  return (
    <section className="bg-[#071A2B] text-white py-20 lg:py-28 relative overflow-hidden border-t border-[#0B5CAD]/30 cad-grid-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B5CAD]/25 text-[#108A00] text-xs font-mono uppercase tracking-widest mb-4 border border-[#0B5CAD]/40">
            <Cpu className="w-3.5 h-3.5" />
            3D DIGITAL PLANT MODELLING
          </motion.div>
          <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Live Engineering Models, <span className="text-[#108A00]">Built with Precision</span>
          </motion.h2>
          <motion.p variants={fadeIn} custom={2} className="text-base sm:text-lg text-gray-300">
            From AVEVA PDMS piping layouts to Intergraph Caesar II stress analysis — review our real project models across industry standard engineering platforms.
          </motion.p>
        </motion.div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {modellingTabs.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => switchTab(idx)}
              className={`px-6 py-2.5 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider transition-all duration-200 border ${
                activeTab === idx
                  ? "bg-[#108A00] border-[#108A00] text-white shadow-lg shadow-[#108A00]/25"
                  : "bg-[#04101C] border-white/15 text-gray-300 hover:border-[#0B5CAD] hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Showcase View */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
        >
          {/* Main Image Screen (3/5) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#04101C] border border-[#0B5CAD]/40 shadow-2xl aspect-video">
              <Image
                src={tab.images[activeImg].src}
                alt={tab.images[activeImg].caption}
                fill
                className="object-contain p-2"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                <p className="text-white text-xs font-mono tracking-wide">{tab.images[activeImg].caption}</p>
              </div>
              <div className="absolute top-4 left-4 bg-[#0B5CAD] text-white text-[10px] font-mono font-bold px-3 py-1 rounded uppercase tracking-wider">
                {tab.tool}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {tab.images.length > 1 && (
              <div className="flex gap-3">
                {tab.images.map((img, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => setActiveImg(iIdx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImg === iIdx ? "border-[#108A00] scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                    style={{ width: 110, height: 65 }}
                  >
                    <Image src={img.src} alt={img.caption} fill className="object-cover" unoptimized />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Side Info Panel (2/5) */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-6 p-6 rounded-2xl bg-[#04101C] border border-[#0B5CAD]/30">
            <div>
              <span className="text-xs font-mono text-[#108A00] uppercase tracking-widest block mb-2">VERIFIED DELIVERABLE MODEL</span>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">{tab.label}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{tab.desc}</p>
            </div>

            <ul className="space-y-3">
              {[
                "Construction-ready 3D plant deliverables",
                "Clash detection & clearance verification",
                "ASME & API international code compliance",
                "Automatic isometric & GA drawing extraction",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#108A00] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/services/detail-engineering"
              className="inline-flex items-center text-xs font-heading font-semibold uppercase tracking-wider text-[#108A00] hover:text-white transition-colors group mt-2"
            >
              Explore detail engineering
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const mainCaseStudy = projects.find(p => p.slug === "gas-collecting-station-assam") || projects[0];

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-[#071A2B] font-sans overflow-x-hidden">

      {/* ===== 1. HERO SECTION (Scenic Design with Dark Blur Overlay & Centered Layout) ===== */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
        {/* Background Visual Image */}
        <Image
          src="/hero-bg.png"
          alt="Industrial Engineering Infrastructure"
          fill
          priority
          className="object-cover object-center scale-105"
          unoptimized
        />

        {/* Light Overlay to show background visual clearly while preserving text contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />

        {/* Subtle CAD Technical Grid Lines Accent */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "20% 100%",
          }}
        />

        {/* Hero Content (Centered) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center flex flex-col items-center">
          
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Main Headline (Capitalized) */}
            <motion.h1 
              variants={fadeIn} 
              custom={1} 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold uppercase text-white leading-[1.15] tracking-wide mb-6 drop-shadow-lg max-w-4xl"
            >
              ENGINEERING THE INFRASTRUCTURE <br className="hidden sm:inline" />
              <span className="text-[#38BDF8]">BEHIND TOMORROW&apos;S INDUSTRY</span>
            </motion.h1>

            {/* Supporting Subtitle */}
            <motion.p 
              variants={fadeIn} 
              custom={2} 
              className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-light drop-shadow-sm"
            >
              Engineering solutions, project management, and technical expertise for complex industrial infrastructure, oil &amp; gas, chemical, and energy facilities.
            </motion.p>

            {/* Pill CTAs (matching design reference) */}
            <motion.div variants={fadeIn} custom={3} className="flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#108A00] hover:bg-[#0D7000] text-white px-7 py-3.5 text-sm font-medium shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Start a Project</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 px-7 py-3.5 text-sm font-medium transition-all duration-300"
              >
                <span>Explore Projects</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ===== 2. TRUST MARQUEE: CLIENT LOGOS ===== */}
      <section className="bg-[#F1F5F9] border-b border-slate-200 py-10 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-center text-xs font-heading font-semibold text-[#66727D] uppercase tracking-[0.25em]">
            TRUSTED BY INDUSTRY &amp; EPC LEADERS WORLDWIDE
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#F1F5F9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#F1F5F9] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee items-center py-2">
            {/* Track 1 */}
            <div className="flex shrink-0 items-center justify-around gap-5 sm:gap-7 pr-5 sm:pr-7">
              {clients.map((client, idx) => {
                const isBoost = client.name.toUpperCase().includes("BPCL") || client.name.toUpperCase().includes("TOOLTECH");
                return (
                  <div
                    key={`t1-${client.name}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-20 bg-white px-7 py-3.5 rounded-xl border border-slate-200/80 shadow-sm overflow-hidden"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={170}
                      height={65}
                      className={`object-contain max-h-14 sm:max-h-16 w-auto transition-transform duration-200 hover:scale-105 ${
                        isBoost ? "scale-[1.45]" : ""
                      }`}
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>

            {/* Track 2 (Seamless Infinite Duplicate) */}
            <div className="flex shrink-0 items-center justify-around gap-5 sm:gap-7 pr-5 sm:pr-7">
              {clients.map((client, idx) => {
                const isBoost = client.name.toUpperCase().includes("BPCL") || client.name.toUpperCase().includes("TOOLTECH");
                return (
                  <div
                    key={`t2-${client.name}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-20 bg-white px-7 py-3.5 rounded-xl border border-slate-200/80 shadow-sm overflow-hidden"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={170}
                      height={65}
                      className={`object-contain max-h-14 sm:max-h-16 w-auto transition-transform duration-200 hover:scale-105 ${
                        isBoost ? "scale-[1.45]" : ""
                      }`}
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. ENGINEERING CAPABILITIES SECTION ===== */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <div>
              <motion.span variants={fadeIn} className="text-xs font-mono text-[#0B5CAD] font-bold uppercase tracking-[0.25em] block mb-2">
                CORE EXPERTISE
              </motion.span>
              <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071A2B]">
                Engineering <span className="text-[#0B5CAD]">Capabilities</span>
              </motion.h2>
            </div>
            <motion.p variants={fadeIn} custom={2} className="text-slate-600 text-sm max-w-md mt-4 md:mt-0 font-normal">
              From fast-turnaround proposal estimations to construction-ready 3D models and inter-disciplinary management.
            </motion.p>
          </motion.div>

          {/* Premium Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={cap.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={idx}
                className="group relative bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 lg:p-10 transition-all duration-300 hover:border-[#108A00] hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading font-black text-4xl text-[#071A2B] group-hover:text-[#0B5CAD] transition-colors">
                      {cap.num}
                    </span>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 group-hover:border-[#108A00] transition-colors shadow-sm">
                      <cap.icon className="w-6 h-6 text-[#108A00]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#071A2B] mb-3 group-hover:text-[#0B5CAD] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {cap.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-slate-200 space-y-2 mb-6">
                    <span className="text-[11px] font-mono text-[#0B5CAD] font-bold uppercase tracking-wider block mb-2">Key Deliverables:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cap.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-mono">
                          <Check className="w-3.5 h-3.5 text-[#108A00]" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-[#071A2B] group-hover:text-[#0B5CAD] transition-colors mt-4"
                >
                  <span>LEARN MORE ABOUT {cap.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 4. ABOUT SECTION ===== */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200 cad-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Large Engineering Image with Technical CAD Overlays */}
            <motion.div 
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 aspect-[4/3] shadow-xl">
                <Image
                  src="/Photo/Pipe Bridge 1.jpg"
                  alt="Invictus Pipe Bridge Project Engineering"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-60" />
                
                {/* CAD Technical Dimension Lines Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded border border-slate-200 text-[10px] font-mono text-[#071A2B] font-bold shadow-sm">
                  CAD REF: PIPE-BRIDGE-01 // DIM: 14,250mm
                </div>

                <div className="absolute bottom-4 right-4 bg-[#071A2B] text-white px-3 py-1.5 rounded text-[10px] font-mono">
                  CODES: ASME B31.3 / OISD
                </div>
              </div>
            </motion.div>

            {/* Right: Company Story + Capabilities */}
            <motion.div 
              className="lg:col-span-6 flex flex-col items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.span variants={fadeIn} className="text-xs font-mono text-[#0B5CAD] font-bold uppercase tracking-[0.25em] block mb-2">
                COMPANY OVERVIEW
              </motion.span>
              
              <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071A2B] mb-6">
                Engineering with <span className="text-[#0B5CAD]">Purpose</span>
              </motion.h2>

              <motion.p variants={fadeIn} custom={2} className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                Invictus Engineering is a premier engineering services provider, specializing in comprehensive plant engineering solutions for greenfield and brownfield projects across the industrial sector for over a decade.
              </motion.p>

              <motion.p variants={fadeIn} custom={3} className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
                Our multi-disciplinary expertise spans Process, Equipment, Piping, Civil &amp; Structure, Instrumentation, and Electrical Engineering. We have also developed a <strong className="text-[#0B5CAD]">proprietary, in-house Bill of Material (BOM) processing software</strong> capable of handling complex Piping BOM data for rapid turnaround and maximum accuracy.
              </motion.p>

              <motion.div variants={fadeIn} custom={4} className="grid grid-cols-2 gap-4 w-full mb-8">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs font-mono text-[#108A00] font-bold uppercase mb-1">PROPRIETARY SOFTWARE</div>
                  <div className="text-sm font-bold text-[#071A2B]">In-House BOM Processor</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs font-mono text-[#0B5CAD] font-bold uppercase mb-1">CODE COMPLIANCE</div>
                  <div className="text-sm font-bold text-[#071A2B]">ASME, API, OISD, IBR</div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} custom={5}>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#071A2B] hover:bg-[#0B5CAD] px-6 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider text-white transition-all shadow-md"
                >
                  <span>LEARN MORE ABOUT US</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== 5. PROJECT SHOWCASE SECTION ===== */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <div>
              <motion.span variants={fadeIn} className="text-xs font-mono text-[#0B5CAD] font-bold uppercase tracking-[0.25em] block mb-2">
                INDUSTRIAL INFRASTRUCTURE
              </motion.span>
              <motion.h2 variants={fadeIn} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071A2B]">
                Selected <span className="text-[#0B5CAD]">Projects</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeIn} custom={2} className="mt-4 sm:mt-0">
              <Link
                href="/projects"
                className="inline-flex items-center text-xs font-heading font-semibold uppercase tracking-wider text-[#0B5CAD] hover:text-[#108A00] transition-colors group"
              >
                VIEW ALL PROJECTS
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Large Image-First Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={idx}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 6. FEATURED CASE STUDY: ASSAM GAS COLLECTING STATION ===== */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200 cad-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#071A2B] text-white rounded-3xl border border-[#0B5CAD]/40 overflow-hidden shadow-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Image with Blueprint Overlays */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#0B5CAD]/40 aspect-[4/3] shadow-xl">
                  <Image
                    src={mainCaseStudy.headerImage}
                    alt={mainCaseStudy.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-50" />
                </div>

                {/* Blueprint CAD Graphic Markers around Image */}
                <div className="absolute -top-3 -left-3 bg-[#0B5CAD] text-white text-[9px] font-mono px-2 py-1 rounded shadow">
                  CAD ID: GCS-ONGC-SILCHAR
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#108A00] text-white text-[9px] font-mono px-2 py-1 rounded shadow">
                  STATUS: COMMISSIONED
                </div>
              </div>

              {/* Right Column: Case Study Details */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <span className="px-3.5 py-1 bg-[#0B5CAD]/25 text-[#108A00] text-xs font-mono font-bold rounded-full uppercase tracking-wider mb-4 border border-[#0B5CAD]/40">
                  FEATURED PROJECT
                </span>

                <h3 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white mb-3">
                  {mainCaseStudy.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-200 mb-6">
                  <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#108A00]" /> Client: {mainCaseStudy.client}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#0B5CAD]" /> Location: {mainCaseStudy.location}</span>
                </div>

                <p className="text-gray-100 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                  {mainCaseStudy.description}
                </p>

                <div className="space-y-2.5 mb-8 w-full">
                  <span className="text-sm font-mono text-[#108A00] uppercase tracking-wider block mb-2 font-semibold">Scope Highlights:</span>
                  {mainCaseStudy.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-gray-200 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-[#108A00] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/projects/${mainCaseStudy.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#108A00] hover:bg-[#0D7000] px-7 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider text-white shadow-lg transition-all"
                >
                  <span>VIEW FULL PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===== 7. ENGINEERING NUMBERS / STATS SECTION ===== */}
      <section className="py-20 bg-[#071A2B] text-white relative border-b border-[#0B5CAD]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {verifiedStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0D273F] rounded-2xl border border-[#0B5CAD]/30 p-8 text-center hover:border-[#108A00] transition-all"
              >
                <div className="text-4xl sm:text-5xl font-heading font-bold text-[#108A00] mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. INDUSTRIES SERVED SECTION ===== */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#0B5CAD] font-bold uppercase tracking-[0.25em] block mb-2">
              SECTORS OF EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071A2B] mb-4">
              Industries We <span className="text-[#0B5CAD]">Serve</span>
            </h2>
            <p className="text-slate-600 text-sm">
              Providing multi-disciplinary engineering solutions for critical industrial sectors across domestic and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={idx}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#108A00] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 p-2.5 bg-[#071A2B] rounded-lg text-[#108A00]">
                    <ind.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-[#071A2B] mb-2 group-hover:text-[#0B5CAD] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 9. QUALITY & SAFETY SECTION ===== */}
      <section className="py-24 bg-white relative border-b border-slate-200 cad-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-mono text-[#0B5CAD] font-bold uppercase tracking-[0.25em] block mb-2">
                ZERO-DEFECT POLICY
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#071A2B] mb-6">
                Precision. Quality. <span className="text-[#0B5CAD]">Responsibility</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                At Invictus Engineering, quality is engineered into every line, isometric, and stress calculation — not just inspected at the end.
              </p>
              <div className="p-4 bg-[#F8FAFC] rounded-xl border-l-4 border-[#108A00] text-xs text-slate-700 font-mono">
                CODE COMPLIANCE: ASME Section VIII Div 1 &amp; 2, ASME B31.3, API 650, API 620, OISD 118, IBR, TEMA.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "ASME & API Compliance", desc: "Rigorous alignment with international design codes and project specifications." },
                { title: "30%, 60%, 90% Model Reviews", desc: "Structured inter-disciplinary reviews to catch spatial clashes before site execution." },
                { title: "Peer & Lead QA Audits", desc: "Multi-layered checking mechanisms ensuring zero-defect drawing outputs." },
                { title: "Constructability & Safety", desc: "Evaluating designs from installation and maintenance safety perspectives." },
              ].map((q, idx) => (
                <div key={idx} className="p-6 bg-[#F8FAFC] rounded-2xl border border-slate-200 hover:border-[#108A00] transition-colors shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#108A00] mb-3" />
                  <h4 className="font-heading font-bold text-[#071A2B] text-base mb-2">{q.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== 10. CLIENT TESTIMONIALS SECTION ===== */}
      <section className="py-24 bg-[#F8FAFC] relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#0B5CAD] font-bold uppercase tracking-[0.25em] block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#071A2B] mb-4">
              What Our Clients <span className="text-[#0B5CAD]">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients
              .filter((c) => c.testimonialQuote)
              .map((client, idx) => (
                <div
                  key={client.name}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#108A00] transition-all flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="text-[#108A00] text-3xl font-heading leading-none mb-3">&ldquo;</div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 italic">
                      {client.testimonialQuote}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#071A2B] text-white flex items-center justify-center font-bold text-xs">
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#071A2B]">{client.name}</div>
                      <div className="text-[10px] font-mono text-slate-500">{client.testimonialAuthor}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* ===== 11. CONTACT CTA SECTION ===== */}
      <section className="py-24 bg-[#071A2B] text-white relative overflow-hidden cad-grid-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono text-[#108A00] uppercase tracking-[0.25em] block mb-3 font-bold">
            START YOUR NEXT PROJECT
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Let&apos;s Engineer <span className="text-[#108A00]">What&apos;s Next</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Have an engineering requirement or industrial project? Let&apos;s discuss how Invictus Engineering can bring precision, speed, and execution excellence to your facility.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#108A00] hover:bg-[#0D7000] px-9 py-4 text-xs font-heading font-semibold uppercase tracking-wider text-white shadow-xl shadow-[#108A00]/20 hover:-translate-y-0.5 transition-all"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-9 py-4 text-xs font-heading font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
            >
              <span>START A PROJECT</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Plant Modelling Showcase section */}
      <Modelling3DSection />

    </div>
  );
}
