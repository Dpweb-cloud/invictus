"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroPipelineTerminal() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center bg-[#F8FAFC] dark:bg-[#0B132B] rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl">
      
      {/* Light Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none rounded-[2.5rem] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <svg viewBox="0 0 650 420" className="w-full h-full relative z-10 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Base Platform */}
        <rect x="20" y="360" width="610" height="18" rx="6" fill="#94A3B8" />

        {/* --- INDUSTRIAL EQUIPMENT UNITS --- */}

        {/* 1. Inlet Separator Vessel (Far Left) */}
        <g>
          <rect x="40" y="160" width="75" height="200" rx="14" fill="#2563EB" />
          <rect x="52" y="160" width="18" height="200" fill="#60A5FA" />
          <path d="M 40 170 C 40 145 115 145 115 170" fill="#1D4ED8" />
          <rect x="68" y="135" width="20" height="20" rx="2" fill="#1E3A8A" />
          
          {/* Liquid Sight Glass Indicator */}
          <rect x="100" y="190" width="6" height="130" rx="3" fill="#1E293B" />
          <motion.rect 
            x="101" y="220" width="4" height="90" rx="2" fill="#38BDF8"
            animate={{ height: [60, 100, 60], y: [250, 210, 250] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* 2. High-Pressure Compressor Skid (Lower Left-Center) */}
        <g>
          <rect x="155" y="270" width="90" height="90" rx="8" fill="#1E293B" />
          <rect x="165" y="280" width="70" height="30" rx="4" fill="#334155" />
          <circle cx="185" cy="295" r="6" fill="#10B981" />
          <circle cx="205" cy="295" r="6" fill="#108A00" />
          <circle cx="225" cy="295" r="6" fill="#3B82F6" />
          
          {/* Ventilation Louvers */}
          <rect x="165" y="320" width="70" height="4" fill="#475569" />
          <rect x="165" y="330" width="70" height="4" fill="#475569" />
          <rect x="165" y="340" width="70" height="4" fill="#475569" />
        </g>

        {/* 3. Twin Dehydration Towers (Center Columns) */}
        <g>
          {/* Left Column */}
          <rect x="290" y="140" width="45" height="220" rx="6" fill="#0891B2" />
          <rect x="296" y="140" width="12" height="220" fill="#22D3EE" />
          <line x1="290" y1="180" x2="335" y2="180" stroke="#164E63" strokeWidth="4" />
          <line x1="290" y1="240" x2="335" y2="240" stroke="#164E63" strokeWidth="4" />
          <line x1="290" y1="300" x2="335" y2="300" stroke="#164E63" strokeWidth="4" />

          {/* Right Column */}
          <rect x="350" y="140" width="45" height="220" rx="6" fill="#0891B2" />
          <rect x="356" y="140" width="12" height="220" fill="#22D3EE" />
          <line x1="350" y1="180" x2="395" y2="180" stroke="#164E63" strokeWidth="4" />
          <line x1="350" y1="240" x2="395" y2="240" stroke="#164E63" strokeWidth="4" />
          <line x1="350" y1="300" x2="395" y2="300" stroke="#164E63" strokeWidth="4" />

          {/* Bridge Crossover Pipe */}
          <rect x="335" y="200" width="15" height="12" fill="#155E75" />
          <rect x="335" y="280" width="15" height="12" fill="#155E75" />
        </g>

        {/* 4. Metering & Pressure Regulating Station (Right) */}
        <g>
          <rect x="440" y="230" width="65" height="130" rx="8" fill="#059669" />
          <rect x="450" y="230" width="15" height="130" fill="#34D399" />
          
          {/* Digital Display Box */}
          <rect x="455" y="250" width="35" height="22" rx="3" fill="#064E3B" />
          <rect x="460" y="256" width="8" height="10" rx="1" fill="#A7F3D0" />
          <rect x="472" y="256" width="12" height="10" rx="1" fill="#A7F3D0" />
        </g>

        {/* 5. Gas Holder Sphere / Buffer Vessel (Far Right) */}
        <g>
          <circle cx="560" cy="270" r="50" fill="#C084FC" />
          <circle cx="545" cy="255" r="40" fill="#E9D5FF" opacity="0.3" />
          <rect x="548" y="320" width="24" height="40" fill="#6B21A8" />
        </g>

        {/* ================= PIPELINE ROUTES & FLOW ANIMATIONS ================= */}

        {/* ROUTE 1: Amber Inlet Gas Line (Inlet Separator -> Compressor Skid) */}
        <g>
          <path d="M 78 135 L 78 70 L 200 70 L 200 270" stroke="#B45309" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M 78 135 L 78 70 L 200 70 L 200 270" stroke="#108A00" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
          
          {/* Valve Control */}
          <rect x="125" y="60" width="28" height="20" rx="4" fill="#1E293B" />
          <circle cx="139" cy="70" r="5" fill="#EF4444" />

          <motion.path 
            d="M 78 135 L 78 70 L 200 70 L 200 270" 
            stroke="#FEF08A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="16 32"
            animate={{ strokeDashoffset: [-120, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* ROUTE 2: Teal Processed Gas Line (Compressor -> Twin Towers) */}
        <g>
          <path d="M 245 315 L 312 315 L 312 360" stroke="#0E7490" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M 245 315 L 312 315 L 312 360" stroke="#06B6D4" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
          
          <motion.path 
            d="M 245 315 L 312 315 L 312 360" 
            stroke="#CFFAFE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="14 28"
            animate={{ strokeDashoffset: [-84, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* ROUTE 3: Blue Conditioned Line (Twin Towers Top -> Metering Skid) */}
        <g>
          <path d="M 372 140 L 372 90 L 472 90 L 472 230" stroke="#1D4ED8" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M 372 140 L 372 90 L 472 90 L 472 230" stroke="#3B82F6" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
          
          <motion.path 
            d="M 372 140 L 372 90 L 472 90 L 472 230" 
            stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="18 36"
            animate={{ strokeDashoffset: [-120, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* ROUTE 4: Emerald Grid Distribution Line (Metering Skid -> Gas Sphere) */}
        <g>
          <path d="M 505 290 L 560 290" stroke="#047857" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M 505 290 L 560 290" stroke="#10B981" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
          
          <motion.path 
            d="M 505 290 L 560 290" 
            stroke="#A7F3D0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="10 20"
            animate={{ strokeDashoffset: [-60, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* ROUTE 5: Emerald Main Connection Pipeline (Runs vertically down right edge to connect seamlessly to Section 1) */}
        <g>
          <path d="M 505 290 L 595 290 L 595 500" stroke="#047857" strokeWidth="14" strokeLinejoin="round" strokeLinecap="square" />
          <path d="M 505 290 L 595 290 L 595 500" stroke="#10B981" strokeWidth="10" strokeLinejoin="round" strokeLinecap="square" />
          
          <motion.path 
            d="M 505 290 L 595 290 L 595 500" 
            stroke="#A7F3D0" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round"
            strokeDasharray="16 32"
            animate={{ strokeDashoffset: [-120, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </g>

      </svg>

      {/* --- FLOATING STATUS BADGES --- */}
      <motion.div 
        animate={{ y: [0, -6, 0] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-6 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/80 dark:border-white/10 flex items-center gap-2"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        Inlet Terminal
      </motion.div>

      <motion.div 
        animate={{ y: [0, 6, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-6 right-6 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/80 dark:border-white/10 flex items-center gap-2"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        Grid Supply Active
      </motion.div>

      <motion.div 
        animate={{ y: [0, -5, 0] }} 
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-8 left-8 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/80 dark:border-white/10 flex items-center gap-2 hidden sm:flex"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
        Compressor: 100%
      </motion.div>

    </div>
  );
}
