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
    <div className="flex flex-col bg-[#F8FAFC] text-[#071A2B] min-h-screen">
      {/* Subpage Banner */}
      <SubpageBanner
        badge={project.sector}
        title={project.title}
        subtitle={`${project.scope} — Client: ${project.client}`}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        bgImage="/images/banners/projects-banner.png"
      />

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] cad-grid-bg">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image Gallery & Project Highlights (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Image Gallery Showcase */}
              <FadeUpBox className="bg-[#071A2B] rounded-3xl overflow-hidden border border-[#0B5CAD]/30 shadow-xl p-4 sm:p-6">
                {/* Main Large Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#04101C] border border-white/10">
                  <Image
                    src={selectedImage}
                    alt={project.title}
                    fill
                    className="object-contain p-2 transition-all duration-300"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#108A00] text-xs font-mono font-semibold px-3 py-1.5 rounded border border-white/10">
                    DELIVERABLE PHOTO / 3D MODEL
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
                            ? "border-[#108A00] scale-105 shadow-lg shadow-[#108A00]/20"
                            : "border-white/20 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} photo ${idx + 1}`}
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
              <FadeUpBox className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#0B5CAD]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-[#071A2B]">
                    Project Overview
                  </h2>
                </div>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {project.description}
                </p>
              </FadeUpBox>

              {/* Scope & Key Deliverables */}
              {project.highlights && project.highlights.length > 0 && (
                <FadeUpBox className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#0B5CAD]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#071A2B]">
                      Scope of Work &amp; Engineering Deliverables
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/80 shadow-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#108A00] flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-mono text-slate-700 leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeUpBox>
              )}

              {/* Services Rendered Pills */}
              {project.servicesUsed && project.servicesUsed.length > 0 && (
                <FadeUpBox className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-[#071A2B] mb-4">
                    Core Technical Services Applied
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {project.servicesUsed.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl bg-[#F1F5F9] text-[#071A2B] text-xs font-mono font-bold border border-slate-200"
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
              <FadeUpBox className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-heading font-bold text-[#071A2B] pb-4 mb-6 border-b border-slate-100 flex items-center justify-between">
                  <span>Project Metadata</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#108A00]" />
                </h3>

                <div className="space-y-6">
                  {/* Client */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F8FAFC] rounded-2xl text-[#0B5CAD] border border-slate-200">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">
                        Client
                      </p>
                      <p className="text-sm font-bold text-[#071A2B]">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F8FAFC] rounded-2xl text-[#0B5CAD] border border-slate-200">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">
                        Location
                      </p>
                      <p className="text-sm font-bold text-[#071A2B]">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F8FAFC] rounded-2xl text-[#0B5CAD] border border-slate-200">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">
                        Duration &amp; Status
                      </p>
                      <p className="text-sm font-bold text-[#108A00]">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  {/* Sector */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F8FAFC] rounded-2xl text-[#0B5CAD] border border-slate-200">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">
                        Sector
                      </p>
                      <p className="text-sm font-bold text-[#071A2B]">
                        {project.sector}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action Box */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed font-normal">
                    Have a similar engineering requirement for your plant or facility?
                  </p>
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#108A00] hover:bg-[#0D7000] text-white text-xs font-heading font-semibold uppercase tracking-wider shadow-md shadow-[#108A00]/20 transition-all duration-200"
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
