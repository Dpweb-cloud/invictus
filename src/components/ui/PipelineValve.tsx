"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface PipelineValveProps {
  title: React.ReactNode;
  children: React.ReactNode;
  color?: "teal" | "blue" | "emerald" | "magenta";
  defaultOpen?: boolean;
}

const colorMap = {
  teal: { base: "#0D9488", light: "#CCFBF1", border: "#99F6E4" },
  blue: { base: "#2563EB", light: "#DBEAFE", border: "#BFDBFE" },
  emerald: { base: "#059669", light: "#D1FAE5", border: "#A7F3D0" },
  magenta: { base: "#C026D3", light: "#FAE8FF", border: "#F5D0FE" },
};

export function PipelineValve({ title, children, color = "teal", defaultOpen = false }: PipelineValveProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (isInView && !isOpen) {
      setIsOpen(true);
    }
  }, [isInView]);

  const activeColor = colorMap[color];

  return (
    <div className="relative pl-12 md:pl-24 py-6" ref={ref}>
      {/* 
        The Valve Node 
        It sits on the vertical spine which is positioned at left: 0 in the parent.
      */}
      <div 
        className="absolute left-[-16px] md:left-[-20px] top-12 w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-white cursor-pointer z-30 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
        style={{ backgroundColor: activeColor.base }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 md:w-6 md:h-6"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Outer Wheel */}
          <circle cx="12" cy="12" r="9" />
          {/* Inner Hub */}
          <circle cx="12" cy="12" r="2" fill="white" />
          {/* Spokes */}
          <path d="M12 3 L12 10" />
          <path d="M12 14 L12 21" />
          <path d="M3 12 L10 12" />
          <path d="M14 12 L21 12" />
        </motion.svg>
      </div>

      {/* Horizontal connecting pipe (background empty) */}
      <div className="absolute left-0 top-[60px] md:top-[64px] h-3 bg-slate-200 z-10 w-12 md:w-24 -translate-y-1/2 rounded-r-full overflow-hidden" />
      
      {/* Horizontal connecting pipe (filled with flowing gas) */}
      <div className="absolute left-0 top-[60px] md:top-[64px] h-3 z-20 -translate-y-1/2 rounded-r-full w-12 md:w-24 overflow-hidden pointer-events-none">
        <motion.div 
          className="w-full h-full origin-left relative"
          style={{ backgroundColor: activeColor.base }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isOpen ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Flowing liquid/gas dashes inside the pipe */}
          <motion.div 
            className="absolute inset-0 w-[200%] h-full bg-[linear-gradient(to_right,transparent_50%,rgba(255,255,255,0.6)_50%)] bg-[length:20px_100%]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Content Container */}
      <motion.div 
        className="bg-white rounded-3xl shadow-lg border relative z-30 overflow-hidden"
        style={{ borderColor: isOpen ? activeColor.border : '#F1F5F9' }}
        animate={{ 
          boxShadow: isOpen ? `0 20px 40px -10px ${activeColor.base}30` : '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Header / Title */}
        <div 
          className="px-8 py-6 cursor-pointer flex items-center justify-between transition-colors"
          style={{ backgroundColor: isOpen ? activeColor.light : '#ffffff' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-2xl md:text-3xl font-heading font-extrabold text-gray-900">
            {title}
          </div>
          <motion.div 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm"
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke={activeColor.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        {/* Expandable Body */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="px-8 pb-8 pt-4 border-t border-slate-100">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
