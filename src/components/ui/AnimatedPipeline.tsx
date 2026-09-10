"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedPipeline() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-[#F8FAFC] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-inner">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
      
      <svg viewBox="0 0 600 400" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* --- Background Structures / Supports --- */}
        {/* Support Frame 1 */}
        <path d="M 150 100 L 150 350 M 250 100 L 250 350 M 150 150 L 250 150 M 150 250 L 250 250" stroke="#CBD5E1" strokeWidth="8" strokeLinecap="round" />
        <path d="M 150 150 L 250 250 M 150 250 L 250 150" stroke="#CBD5E1" strokeWidth="4" />
        
        {/* Support Frame 2 */}
        <path d="M 400 150 L 400 350 M 500 150 L 500 350 M 400 200 L 500 200 M 400 280 L 500 280" stroke="#CBD5E1" strokeWidth="8" strokeLinecap="round" />
        <path d="M 400 200 L 500 280 M 400 280 L 500 200" stroke="#CBD5E1" strokeWidth="4" />

        {/* Base Platform */}
        <rect x="20" y="350" width="560" height="20" rx="4" fill="#94A3B8" />

        {/* --- Tanks --- */}
        {/* Main Blue Tank (Left) */}
        <rect x="50" y="180" width="80" height="170" rx="10" fill="#3B82F6" />
        <rect x="60" y="180" width="20" height="170" fill="#60A5FA" />
        <path d="M 50 190 C 50 170 130 170 130 190" fill="#2563EB" />
        <rect x="80" y="160" width="20" height="20" fill="#1E3A8A" />

        {/* Cyan Processing Unit (Right) */}
        <rect x="420" y="220" width="60" height="130" rx="5" fill="#06B6D4" />
        <rect x="430" y="220" width="15" height="130" fill="#22D3EE" />
        <rect x="440" y="240" width="20" height="15" fill="#164E63" />
        <rect x="440" y="280" width="20" height="15" fill="#164E63" />

        {/* Small Magenta Tank */}
        <rect x="300" y="280" width="50" height="70" rx="8" fill="#D946EF" />
        <rect x="305" y="280" width="10" height="70" fill="#E879F9" />

        {/* --- Yellow Pipeline Network --- */}
        {/* Background yellow pipe shadow/outline */}
        <path d="M 90 160 L 90 80 L 350 80 L 350 250 L 450 250 L 450 220" stroke="#A16207" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M 90 160 L 90 80 L 350 80 L 350 250 L 450 250 L 450 220" stroke="#FACC15" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
        
        {/* Flowing Yellow Gas */}
        <motion.path 
          d="M 90 160 L 90 80 L 350 80 L 350 250 L 450 250 L 450 220" 
          stroke="#FEF08A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="15 30"
          animate={{ strokeDashoffset: [-100, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* --- Green Pipeline Network --- */}
        <path d="M 130 300 L 200 300 L 200 120 L 520 120 L 520 350" stroke="#166534" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M 130 300 L 200 300 L 200 120 L 520 120 L 520 350" stroke="#22C55E" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
        
        {/* Flowing Green Liquid */}
        <motion.path 
          d="M 130 300 L 200 300 L 200 120 L 520 120 L 520 350" 
          stroke="#86EFAC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="20 40"
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* --- Magenta Interconnecting Pipe --- */}
        <path d="M 325 280 L 325 200 L 220 200 L 220 250" stroke="#86198F" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M 325 280 L 325 200 L 220 200 L 220 250" stroke="#D946EF" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
        
        <motion.path 
          d="M 220 250 L 220 200 L 325 200 L 325 280" 
          stroke="#F0ABFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="10 20"
          animate={{ strokeDashoffset: [-60, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* --- Valves and Connectors --- */}
        {/* Yellow Pipe Valve */}
        <rect x="250" y="70" width="30" height="20" rx="3" fill="#1E293B" />
        <motion.circle cx="265" cy="80" r="6" fill="#EF4444" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />

        {/* Green Pipe Valve */}
        <rect x="190" y="200" width="20" height="30" rx="3" fill="#1E293B" />
        <motion.g animate={{ rotate: 90 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ originX: '200px', originY: '215px' }}>
          <path d="M 190 215 L 210 215 M 200 205 L 200 225" stroke="#CBD5E1" strokeWidth="3" />
        </motion.g>

      </svg>

      {/* Floating Badges */}
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-8 left-8 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 shadow-md border border-slate-100 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        Main Storage
      </motion.div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-12 right-12 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 shadow-md border border-slate-100 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        Routing Active
      </motion.div>

    </div>
  );
}
