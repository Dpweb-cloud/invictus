"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedGasStation() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center bg-[#F8FAFC] dark:bg-[#0B132B] rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 rounded-[2.5rem] overflow-hidden pointer-events-none"></div>
      
      <svg viewBox="0 50 400 400" className="w-full h-full relative z-10 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Main Tank (Left) */}
        <path d="M 60 150 C 60 130 90 130 90 150 L 90 300 C 90 320 60 320 60 300 Z" fill="#E2E8F0" />
        <path d="M 90 150 C 90 130 120 130 120 150 L 120 300 C 120 320 90 320 90 300 Z" fill="#CBD5E1" />
        <rect x="65" y="180" width="50" height="10" fill="#94A3B8" />
        <rect x="65" y="240" width="50" height="10" fill="#94A3B8" />
        
        {/* Gas Level Indicator in Main Tank */}
        <rect x="130" y="160" width="10" height="130" rx="5" fill="#F1F5F9" />
        <motion.rect 
          x="130" y="160" width="10" height="130" rx="5" fill="#2DD4BF"
          initial={{ height: 20, y: 270 }}
          animate={{ height: [20, 100, 20], y: [270, 190, 270] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pipes from Main Tank to Processing Unit */}
        <path d="M 120 280 L 200 280 L 200 200 L 250 200" stroke="#94A3B8" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M 120 280 L 200 280 L 200 200 L 250 200" stroke="#CBD5E1" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round" />
        
        {/* Flowing Gas inside Pipe 1 */}
        <motion.path 
          d="M 120 280 L 200 280 L 200 200 L 250 200" 
          stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="20 40"
          animate={{ strokeDashoffset: [-100, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Valve 1 */}
        <circle cx="160" cy="280" r="15" fill="#0A192F" />
        <circle cx="160" cy="280" r="6" fill="#34D399" />

        {/* Processing Unit (Center) */}
        <rect x="250" y="160" width="80" height="100" rx="10" fill="#0A192F" />
        <rect x="255" y="165" width="70" height="90" rx="5" fill="#1E293B" />
        
        {/* Processing Unit Screens / Lights */}
        <motion.rect x="270" y="180" width="10" height="10" rx="2" fill="#2DD4BF" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
        <motion.rect x="290" y="180" width="10" height="10" rx="2" fill="#34D399" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.rect x="310" y="180" width="10" height="10" rx="2" fill="#F43F5E" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} />

        {/* Output Pipe */}
        <path d="M 330 200 L 380 200 L 380 320" stroke="#94A3B8" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M 330 200 L 380 200 L 380 320" stroke="#CBD5E1" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round" />
        
        {/* Flowing Gas inside Output Pipe */}
        <motion.path 
          d="M 330 200 L 380 200 L 380 320" 
          stroke="#34D399" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="15 30"
          animate={{ strokeDashoffset: [-100, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Final Storage / Pump */}
        <path d="M 350 320 L 410 320 L 410 370 L 350 370 Z" fill="#0A192F" />
        <rect x="360" y="310" width="40" height="15" fill="#34D399" />
        
        <motion.rect x="375" y="340" width="10" height="10" rx="5" fill="#2DD4BF" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 1, repeat: Infinity }} />

        {/* Connecting Pipe dropping down to connect seamlessly to Section 1 */}
        <path d="M 380 370 L 380 500" stroke="#047857" strokeWidth="16" strokeLinecap="square" strokeLinejoin="round" />
        <path d="M 380 370 L 380 500" stroke="#10B981" strokeWidth="12" strokeLinecap="square" strokeLinejoin="round" />
        
        {/* Flowing Gas inside Connecting Pipe */}
        <motion.path 
          d="M 380 370 L 380 500" 
          stroke="#A7F3D0" strokeWidth="6" strokeLinecap="square" strokeLinejoin="round"
          strokeDasharray="15 30"
          animate={{ strokeDashoffset: [-100, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      
      {/* Decorative Floating Elements */}
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-10 bg-teal-50 px-3 py-1 rounded-full text-xs font-bold text-teal-700 border border-teal-200 shadow-sm">
        100% Efficiency
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 left-10 bg-blue-50 px-3 py-1 rounded-full text-xs font-bold text-blue-700 border border-blue-200 shadow-sm">
        Active Pumping
      </motion.div>
    </div>
  );
}
