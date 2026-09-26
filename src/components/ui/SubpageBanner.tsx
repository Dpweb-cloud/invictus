"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles, Cpu } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SubpageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  compact?: boolean;
  bgImage?: string;
}

export function SubpageBanner({
  title,
  subtitle,
  badge,
  breadcrumbs,
  compact = false,
  bgImage = "/hero-bg.png",
}: SubpageBannerProps) {
  return (
    <section className={`relative bg-[#F8FAFC] text-[#071A2B] overflow-hidden border-b border-slate-200/80 ${compact ? "py-16 md:py-20" : "pt-20 pb-16 md:pt-24 md:pb-20"}`}>
      {/* CAD Blueprint Background Graphic Image */}
      {bgImage && (
        <Image
          src={bgImage}
          alt="Engineering Blueprint Background"
          fill
          priority
          className="object-cover object-center opacity-10 mix-blend-multiply scale-105"
          unoptimized
        />
      )}

      {/* Light gradient mask overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-[#F1F5F9]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-[#F8FAFC]/60" />

      {/* Technical CAD grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11, 92, 173, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 92, 173, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient light graphics */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[250px] bg-[#0B5CAD]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Technical CAD crosshair & line accent */}
      <div className="absolute top-10 right-12 hidden lg:flex items-center gap-3 opacity-40 pointer-events-none">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#0B5CAD]" />
        <Cpu className="w-4 h-4 text-[#0B5CAD]" />
        <div className="text-[10px] font-mono tracking-widest text-[#0B5CAD] uppercase">
          CAD // INVICTUS ENGINEERING
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-5 font-mono font-medium">
            <Link href="/" className="hover:text-[#0B5CAD] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#0B5CAD] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#071A2B] font-semibold line-clamp-1">{item.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Badge Pill */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B5CAD]/10 border border-[#0B5CAD]/30 text-[#0B5CAD] text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#108A00]" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071A2B] max-w-4xl leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom accent border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#108A00] to-transparent opacity-60" />
    </section>
  );
}
