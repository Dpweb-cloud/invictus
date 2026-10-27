"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export function Accordion({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-[#071A2B]/60 backdrop-blur-md overflow-hidden mb-4 shadow-sm hover:border-gray-300 dark:hover:border-white/20 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#108A00]"
      >
        <span className="font-heading font-bold text-lg text-[#071A2B] dark:text-white">{title}</span>
        <div className={`p-1.5 rounded-full ${isOpen ? 'bg-[#108A00]/10 text-[#108A00] dark:bg-[#108A00]/20 dark:text-[#38DF25]' : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'} transition-colors`}>
          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 py-6 border-t border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-black/20">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
