"use client";

import { Scroll } from "@react-three/drei";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function OverlayContent() {
  return (
    <div className="relative z-10 w-full pointer-events-none">
      {/* SECTION 1: HERO */}
      <section className="h-screen w-full flex flex-col items-center justify-center pointer-events-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 text-center drop-shadow-2xl">
          The <span className="text-teal-400">Future</span> of Industry
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl text-center mb-8">
          A dynamic, interactive digital twin experience. Scroll down to explore our 3D engineering ecosystem.
        </p>
        <div className="animate-bounce">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-500 mb-2">Scroll Down</p>
          <div className="w-px h-16 bg-gradient-to-b from-teal-500 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* SECTION 2: HOW WE BUILD IT */}
      <section className="h-screen w-full flex items-center justify-end px-12 md:px-24 pointer-events-auto">
        <div className="max-w-xl bg-[#0A192F]/80 backdrop-blur-xl border border-[#112240] p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            How We Build <span className="text-emerald-400">Consulting</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            We don't just draft plans on paper. We construct highly detailed, clash-free 3D models of entire industrial plants before a single shovel hits the dirt.
          </p>
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors pointer-events-auto">
            Our Process
          </button>
        </div>
      </section>

      {/* SECTION 3: REAL VS ACTUAL */}
      <section className="h-screen w-full flex items-center justify-start px-12 md:px-24 pointer-events-auto">
        <div className="max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            <span className="text-blue-400">Real</span> vs Actual
          </h2>
          <p className="text-slate-200 text-lg leading-relaxed mb-6">
            Compare our precision engineering digital twins directly with the physical site construction. Unmatched accuracy every time.
          </p>
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-bold pointer-events-auto">
            Back to Home <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
