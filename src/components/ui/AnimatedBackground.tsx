"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none select-none">
      {/* Background blueprint grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #108A00 1px, transparent 1px),
            linear-gradient(to bottom, #108A00 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating CAD Nodes / Engineering Tech Dots */}
      <div className="absolute inset-0 opacity-15">
        <motion.div 
          className="absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-[#108A00]"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[35%] right-[12%] w-2 h-2 rounded-full bg-[#4ADE80]"
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-[25%] left-[20%] w-2.5 h-2.5 rounded-full bg-[#108A00]"
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Ambient Gradient Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[140px] bg-[#0A192F]/15 dark:bg-[#0A192F]/40 mix-blend-multiply dark:mix-blend-screen"
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-[140px] bg-[#108A00]/10 dark:bg-[#108A00]/20 mix-blend-multiply dark:mix-blend-screen"
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}
