"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export function Accordion({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden mb-4 shadow-sm hover:border-gray-300 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent"
      >
        <span className="font-heading font-bold text-lg text-brand-primary-dark">{title}</span>
        <div className={`p-1 rounded-full ${isOpen ? 'bg-brand-accent/10 text-brand-accent' : 'bg-gray-100 text-gray-500'} transition-colors`}>
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
            <div className="px-6 py-6 border-t border-gray-100 bg-gray-50/50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
