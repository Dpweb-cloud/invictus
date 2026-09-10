"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function GlobalPipeline({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the entire page wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress so the pipeline fluidly catches up
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] w-full" ref={containerRef}>
      
      {/* 
        The Continuous Vertical Pipeline Spine 
        Positioned fixed or absolute? 
        Absolute spans the whole document height. 
      */}
      <div className="absolute left-6 md:left-[100px] top-0 bottom-0 w-4 md:w-6 bg-slate-200 z-10 rounded-full" />

      {/* Foreground Vertical Spine (Filled Liquid/Gas) */}
      <motion.div 
        className="absolute left-6 md:left-[100px] top-0 bottom-0 w-4 md:w-6 bg-gradient-to-b from-teal-400 to-blue-500 z-20 origin-top rounded-full shadow-[0_0_20px_rgba(45,212,191,0.4)]"
        style={{ scaleY }}
      />
      
      {/* Flowing dashes inside the filled pipe to make it feel alive */}
      <div className="absolute left-6 md:left-[100px] top-0 bottom-0 w-4 md:w-6 z-20 overflow-hidden rounded-full pointer-events-none">
        <motion.div 
          className="w-[2px] h-[200%] mx-auto bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.8)_50%)] bg-[length:100%_40px]"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-30 ml-12 md:ml-[130px] w-[calc(100%-3rem)] md:w-[calc(100%-130px)] max-w-7xl pb-32">
        {children}
      </div>

    </div>
  );
}
