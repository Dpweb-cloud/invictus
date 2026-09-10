"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Precision Engineering",
    heading: "Unmatched Accuracy",
    description: "Our proprietary 3D modeling eliminates clashes before they happen, saving millions in rework.",
  },
  {
    id: "02",
    title: "Real-Time Tracking",
    heading: "Total Visibility",
    description: "Monitor procurement and construction progress in real-time with our intelligent cloud dashboard.",
  },
  {
    id: "03",
    title: "Future-Proof Design",
    heading: "Built for Tomorrow",
    description: "Scalable digital twin architecture ensures your facilities can adapt to changing energy demands.",
  }
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Tab List */}
        <div className="flex-1 w-full space-y-4">
          {features.map((feature, idx) => {
            const isActive = activeTab === idx;
            return (
              <div 
                key={feature.id}
                onClick={() => setActiveTab(idx)}
                className={`group relative flex items-center gap-6 p-6 cursor-pointer rounded-2xl transition-all duration-300
                  ${isActive ? 'bg-[rgba(255,255,255,0.04)] shadow-lg border border-white/10' : 'hover:bg-[rgba(255,255,255,0.02)] border border-transparent hover:border-white/5'}`
                }
              >
                <span className={`font-mono text-sm font-bold transition-colors ${isActive ? 'text-teal-400' : 'text-slate-500'}`}>
                  {feature.id}
                </span>
                <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>
                  {feature.title}
                </h3>
                
                {/* Active Underline Indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-teal-500 to-blue-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Active Content Card */}
        <div className="flex-1 w-full min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
            >
              {/* Massive Watermark ID */}
              <div className="absolute -bottom-8 -right-4 font-heading font-black text-[180px] leading-none text-white/5 pointer-events-none select-none">
                {features[activeTab].id}
              </div>

              {/* Top Right Circular Button */}
              <div className="absolute top-8 right-8 hidden sm:flex items-center justify-center w-20 h-20 rounded-full border border-slate-700 hover:border-teal-500 hover:bg-teal-500/10 cursor-pointer transition-colors group">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="text-[11px] font-bold tracking-[0.2em] uppercase fill-slate-400 group-hover:fill-teal-400 transition-colors">
                    <textPath href="#circlePath" startOffset="0%">
                      • Request Demo • Learn More
                    </textPath>
                  </text>
                </svg>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-sm mt-4">
                <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                    {features[activeTab].heading.split(' ')[0]}
                  </span>
                  <br />
                  {features[activeTab].heading.split(' ').slice(1).join(' ')}
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {features[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
