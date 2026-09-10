"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroPipelineAnimation() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-[#F8FAFC] dark:bg-[#0B132B] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg">
      
      {/* Light Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <svg viewBox="0 0 600 400" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Base Ground Platform */}
        <rect x="20" y="350" width="560" height="18" rx="5" fill="#94A3B8" />

        {/* --- Tanks --- */}
        {/* Main Blue Storage Tank (Left) */}
        <g>
          <rect x="50" y="170" width="85" height="180" rx="12" fill="#3B82F6" />
          <rect x="62" y="170" width="20" height="180" fill="#60A5FA" />
          <path d="M 50 180 C 50 155 135 155 135 180" fill="#2563EB" />
          <rect x="82" y="145" width="22" height="20" rx="2" fill="#1E3A8A" />
        </g>

        {/* Cyan Processing Unit (Center) */}
        <g>
          <rect x="260" y="190" width="75" height="160" rx="8" fill="#06B6D4" />
          <rect x="272" y="190" width="18" height="160" fill="#22D3EE" />
          <rect x="285" y="215" width="26" height="16" rx="3" fill="#164E63" />
          <rect x="285" y="255" width="26" height="16" rx="3" fill="#164E63" />
          <rect x="285" y="295" width="26" height="16" rx="3" fill="#164E63" />
        </g>

        {/* Small Magenta Tank (Right) */}
        <g>
          <rect x="440" y="250" width="60" height="100" rx="10" fill="#D946EF" />
          <rect x="450" y="250" width="12" height="100" fill="#E879F9" />
          <rect x="462" y="235" width="16" height="16" rx="2" fill="#86198F" />
        </g>

        {/* --- PIPELINE NETWORKS --- */}

        {/* Yellow Pipeline Network (Top Storage -> Center Unit) */}
        <g>
          <path d="M 93 145 L 93 75 L 297 75 L 297 190" stroke="#A16207" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M 93 145 L 93 75 L 297 75 L 297 190" stroke="#FACC15" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
          
          {/* Valve Box */}
          <rect x="180" y="65" width="30" height="20" rx="4" fill="#1E293B" />
          <rect x="190" y="70" width="10" height="10" rx="5" fill="#EF4444" />

          {/* Flowing Yellow Gas */}
          <motion.path 
            d="M 93 145 L 93 75 L 297 75 L 297 190" 
            stroke="#FEF08A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="16 32"
            animate={{ strokeDashoffset: [-120, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Green Pipeline Network (Left Storage -> Right Manifold) */}
        <g>
          <path d="M 135 295 L 210 295 L 210 130 L 470 130 L 470 350" stroke="#166534" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M 135 295 L 210 295 L 210 130 L 470 130 L 470 350" stroke="#22C55E" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
          
          {/* Junction Connector */}
          <rect x="200" y="200" width="20" height="30" rx="3" fill="#1E293B" />

          {/* Flowing Green Fluid */}
          <motion.path 
            d="M 135 295 L 210 295 L 210 130 L 470 130 L 470 350" 
            stroke="#86EFAC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="20 40"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Magenta Pipeline Network (Center Unit -> Magenta Tank) */}
        <g>
          <path d="M 335 270 L 390 270 L 390 235 L 470 235" stroke="#86198F" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M 335 270 L 390 270 L 390 235 L 470 235" stroke="#E879F9" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
          
          <motion.path 
            d="M 335 270 L 390 270 L 390 235 L 470 235" 
            stroke="#F0ABFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="12 24"
            animate={{ strokeDashoffset: [-72, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </g>

      </svg>

      {/* --- Floating Badges --- */}
      <motion.div 
        animate={{ y: [0, -6, 0] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-6 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/80 dark:border-white/10 flex items-center gap-2"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        Main Storage
      </motion.div>

      <motion.div 
        animate={{ y: [0, 6, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-8 right-8 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/80 dark:border-white/10 flex items-center gap-2"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        Routing Active
      </motion.div>

    </div>
  );
}
