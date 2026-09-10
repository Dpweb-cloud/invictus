"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useInView, AnimatePresence } from "framer-motion";

interface PipelineSectionProps {
  index: number;
  isLast?: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  color?: "teal" | "blue" | "emerald" | "magenta" | "indigo";
  defaultOpen?: boolean;
}

const colorMap = {
  teal: { base: "#0D9488", light: "#CCFBF1", border: "#99F6E4" },
  blue: { base: "#2563EB", light: "#DBEAFE", border: "#BFDBFE" },
  emerald: { base: "#059669", light: "#D1FAE5", border: "#A7F3D0" },
  indigo: { base: "#4F46E5", light: "#E0E7FF", border: "#C7D2FE" },
};

export function PipelineSection({ 
  index, 
  isLast = false, 
  title, 
  children, 
  color = "teal",
  defaultOpen = false 
}: PipelineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isInView = useInView(containerRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (isInView && !isOpen) {
      setIsOpen(true);
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Type assertion for color since we removed magenta
  const activeColor = colorMap[color as keyof typeof colorMap] || colorMap.teal;
  const isEven = index % 2 === 0;

  // X coordinates as percentages for the SVG viewBox
  const startX = isEven ? 8 : 92;
  const endX = isEven ? 92 : 8;

  // The Bezier curve path
  const pathData = isLast 
    ? `M ${startX} 0 L ${startX} 100` 
    : `M ${startX} 0 C ${startX} 60, ${endX} 40, ${endX} 100`;

  return (
    <div className="relative w-full min-h-[70vh] py-24 md:py-32" ref={containerRef}>
      
      {/* --- Background SVG Curve --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Background Empty Pipe */}
          <path 
            d={pathData} 
            stroke="rgba(255,255,255,0.08)" 
            fill="none" 
            strokeWidth="8" 
            vectorEffect="non-scaling-stroke" 
            strokeLinecap="round"
          />
          {/* Foreground Filled Pipe */}
          <motion.path 
            d={pathData} 
            stroke={activeColor.base} 
            fill="none" 
            strokeWidth="8" 
            vectorEffect="non-scaling-stroke" 
            strokeLinecap="round"
            style={{ pathLength }}
          />
          {/* Flowing Gas Dashes (Only visible when filled) */}
          <motion.path 
            d={pathData} 
            stroke="rgba(255,255,255,0.7)" 
            fill="none" 
            strokeWidth="3" 
            vectorEffect="non-scaling-stroke" 
            strokeLinecap="round"
            strokeDasharray="15 30"
            animate={{ strokeDashoffset: [0, -90] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            style={{ pathLength, opacity: pathLength }}
          />
        </svg>
      </div>

      {/* --- Foreground Content --- */}
      {/* We align the container either to the Left (isEven) or Right (!isEven) */}
      <div className={`relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex ${isEven ? 'justify-start' : 'justify-end'}`}>
        
        {/* The Card wrapper. Width takes up 90% of screen on desktop */}
        <div className={`w-full lg:w-11/12 flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
          
          {/* The Valve Node Header */}
          <div className={`flex items-center gap-3 md:gap-4 mb-4 ${!isEven ? 'flex-row-reverse text-right' : ''}`}>
            
            {/* Valve Icon */}
            <div 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white cursor-pointer z-30 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-md shrink-0"
              style={{ backgroundColor: activeColor.base }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.svg 
                viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                className="w-5 h-5 md:w-6 md:h-6"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="2" fill="white" />
                <path d="M12 3 L12 10" />
                <path d="M12 14 L12 21" />
                <path d="M3 12 L10 12" />
                <path d="M14 12 L21 12" />
              </motion.svg>
            </div>

            {/* Title */}
            <div className="group bg-white/80 dark:bg-[#0A0E14]/80 backdrop-blur-xl rounded-xl shadow-md border border-slate-200 dark:border-white/10 px-5 py-2 md:px-6 md:py-3 cursor-pointer hover:shadow-lg transition-all hover:bg-slate-800 dark:hover:bg-white/5" onClick={() => setIsOpen(!isOpen)}>
              <h2 className="text-xl md:text-2xl font-heading font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 group-hover:text-white flex items-center gap-2 transition-colors">
                {title}
              </h2>
            </div>
          </div>

          {/* Expandable Body */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full mt-4"
              >
                <div 
                  className="bg-[rgba(255,255,255,0.02)] backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden w-full relative z-20 transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: activeColor.base }} />
                  <div className="p-6 md:p-8 text-slate-300">
                    {children}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
