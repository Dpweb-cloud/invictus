"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#108A00] transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* Photo Header Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[#071A2B]">
        <Image
          src={project.headerImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          unoptimized
        />

        {/* Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-black/30 to-transparent opacity-90" />

        {/* Sector Tag Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 bg-[#0B5CAD] text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded shadow-md">
            {project.sector}
          </span>
        </div>

        {/* Client Tag Pill */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#071A2B]/85 backdrop-blur-md text-gray-200 text-xs font-mono rounded border border-white/10">
            <Building2 className="w-3 h-3 text-[#108A00]" />
            {project.client.split(',')[0]}
          </span>
        </div>

        {/* Title over Image on Hover / Base */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="text-[11px] font-mono text-[#108A00] uppercase tracking-wider mb-1">
            {project.scope}
          </p>
          <h3 className="text-lg font-heading font-bold text-white leading-snug drop-shadow-md group-hover:text-[#108A00] transition-colors line-clamp-1">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-grow flex flex-col justify-between bg-white">
        <div>
          {/* Location */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#0B5CAD] flex-shrink-0" />
            <span>{project.location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4 font-normal">
            {project.description}
          </p>

          {/* Key Services Preview */}
          {project.servicesUsed && project.servicesUsed.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.servicesUsed.slice(0, 3).map((srv, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F1F5F9] border border-slate-200 text-slate-700 text-[10px] font-mono"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#108A00]" />
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-[#0B5CAD] group-hover:text-[#108A00] transition-colors">
          <span>VIEW PROJECT</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
