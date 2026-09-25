"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, MapPin, Calendar, Target, CheckCircle2, ArrowRight, Layers, FileText } from "lucide-react";
import { Project } from "@/lib/data";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages[0]
      : project.headerImage
  );

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* Subpage Banner */}
      <SubpageBanner
        badge={project.sector}
        title={project.title}
        subtitle={`${project.scope} — Client: ${project.client}`}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0A0E14]">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image Gallery & Project Highlights (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Image Gallery Showcase */}
              <FadeUpBox className="bg-gray-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-4 sm:p-6">
                {/* Main Large Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/10">
                  <Image
                    src={selectedImage}
                    alt={project.title}
                    fill
                    className="object-contain transition-all duration-300"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">
                    Project Deliverable Photo / Model
                  </div>
                </div>

                {/* Thumbnails Bar (if > 1 image) */}
                {project.galleryImages && project.galleryImages.length > 1 && (
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                    {project.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
                          selectedImage === img
                            ? "border-[#108A00] ring-2 ring-[#108A00]/40 scale-105"
                            : "border-white/20 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </button>
                    ))}
                  </div>
                )}
              </FadeUpBox>

              {/* Description & Overview */}
              <FadeUpBox>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#108A00]/10 text-[#108A00] dark:text-[#4ADE80]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-[#0A192F] dark:text-white">
                    Project Overview
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </FadeUpBox>

              {/* Scope & Key Deliverables */}
              {project.highlights && project.highlights.length > 0 && (
                <FadeUpBox className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-[#108A00]/10 text-[#108A00] dark:text-[#4ADE80]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#0A192F] dark:text-white">
                      Scope of Work &amp; Key Deliverables
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 bg-white dark:bg-white/5 rounded-xl border border-gray-200/60 dark:border-white/5 shadow-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#108A00] dark:text-[#4ADE80] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeUpBox>
              )}

              {/* Services Rendered Pills */}
              {project.servicesUsed && project.servicesUsed.length > 0 && (
                <FadeUpBox>
                  <h3 className="text-lg font-heading font-bold text-[#0A192F] dark:text-white mb-4">
                    Core Technical Services Applied
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {project.servicesUsed.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl bg-[#108A00]/10 dark:bg-[#108A00]/20 text-[#108A00] dark:text-[#4ADE80] text-xs font-bold border border-[#108A00]/30"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </FadeUpBox>
              )}
            </div>

            {/* Right Column: Key Facts Sidebar (4 cols) */}
            <div className="lg:col-span-4 sticky top-28">
              <FadeUpBox className="bg-white dark:bg-[#0E1726] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-heading font-bold text-[#0A192F] dark:text-white pb-4 mb-6 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
                  <span>Project Metadata</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#108A00]" />
                </h3>

                <div className="space-y-6">
                  {/* Client */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-2xl text-[#108A00] dark:text-[#4ADE80]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        Client
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-2xl text-[#108A00] dark:text-[#4ADE80]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        Location
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-2xl text-[#108A00] dark:text-[#4ADE80]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        Duration &amp; Status
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  {/* Sector */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-2xl text-[#108A00] dark:text-[#4ADE80]">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        Sector
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {project.sector}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action Box */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                    Have a similar engineering requirement for your plant or facility?
                  </p>
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#108A00] hover:bg-[#0C6B00] text-white text-sm font-bold shadow-lg shadow-[#108A00]/25 transition-all duration-200"
                  >
                    <span>Request Engineering Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeUpBox>
            </div>
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
