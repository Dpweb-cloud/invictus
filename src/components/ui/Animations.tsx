"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface StaggerWrapperProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerWrapper({ children, className = "", staggerDelay = 0.1 }: StaggerWrapperProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeUpBoxProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUpBox({ children, className = "", delay = 0 }: FadeUpBoxProps) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay } 
    }
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInBox({ children, className = "", delay = 0 }: FadeUpBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
