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
    <section className={`relative bg-[#060D1A] text-white overflow-hidden ${compact ? "py-16 md:py-20" : "pt-24 pb-20 md:pt-28 md:pb-24"}`}>
      {/* CAD Blueprint Background Graphic Image */}
      {bgImage && (
        <Image
          src={bgImage}
          alt="Engineering Blueprint Background"
          fill
          priority
          className="object-cover object-center opacity-25 dark:opacity-30 mix-blend-luminosity scale-105"
          unoptimized
        />
      )}

      {/* Dark gradient overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A]/95 via-[#060D1A]/85 to-[#0A192F]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-transparent to-[#060D1A]/60" />

      {/* Technical CAD grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Glowing green & blue ambient light graphics */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-[#108A00]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-[#0A192F]/80 rounded-full blur-[100px] pointer-events-none" />

      {/* Technical CAD crosshair & line accent */}
      <div className="absolute top-10 right-12 hidden lg:flex items-center gap-3 opacity-30 pointer-events-none">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#4ADE80]" />
        <Cpu className="w-4 h-4 text-[#4ADE80]" />
        <div className="text-[10px] font-mono tracking-widest text-[#4ADE80] uppercase">
          CAD // MODEL VIEW
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 font-medium">
            <Link href="/" className="hover:text-[#4ADE80] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#4ADE80] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold line-clamp-1">{item.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Badge Pill */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#108A00]/25 border border-[#108A00]/50 text-[#4ADE80] text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md shadow-lg shadow-[#108A00]/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white max-w-4xl leading-tight drop-shadow-md">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom glowing border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#108A00] to-transparent opacity-60" />
    </section>
  );
}
