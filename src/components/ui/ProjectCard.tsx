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
      className="group flex flex-col h-full bg-white dark:bg-[#0E1726] rounded-2xl border border-gray-200/80 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#108A00]/40 transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* Photo Header Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[#0A192F]">
        <Image
          src={project.headerImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          unoptimized
        />

        {/* Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Sector Tag Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 bg-[#108A00]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider rounded-md shadow-md">
            {project.sector}
          </span>
        </div>

        {/* Client Tag Pill */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md text-gray-200 text-xs font-semibold rounded-md border border-white/10">
            <Building2 className="w-3 h-3 text-[#4ADE80]" />
            {project.client.split(',')[0]}
          </span>
        </div>

        {/* Title over Image on Hover / Base */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="text-xs text-[#4ADE80] font-semibold tracking-wide uppercase mb-1">
            {project.scope}
          </p>
          <h3 className="text-lg font-bold text-white leading-snug drop-shadow-md group-hover:text-[#4ADE80] transition-colors line-clamp-1">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#108A00] flex-shrink-0" />
            <span>{project.location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Key Services Preview */}
          {project.servicesUsed && project.servicesUsed.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.servicesUsed.slice(0, 3).map((srv, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-[11px] font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#108A00]" />
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer CTA */}
        <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#108A00] dark:text-[#4ADE80] group-hover:text-[#0C6B00]">
          <span>View Detailed Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
