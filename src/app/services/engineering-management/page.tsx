import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export const metadata = {
  title: "Engineering Management Services | Invictus Engineering",
  description: "Central coordination hub managing inter-disciplinary interfaces, 3D model reviews, vendor reviews, and constructability.",
};

export default function EngineeringManagementPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="INTER-DISCIPLINARY LEADERSHIP"
        title="Engineering Management Services"
        subtitle="Expert coordination to align multidisciplinary teams, control technical interfaces, and ensure constructible, compliant facilities."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Engineering Management" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#0A0E14]">
        <StaggerWrapper className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-3xl font-heading font-extrabold text-[#0A192F] dark:text-white mb-6">
              Orchestrating Complex Projects with Engineering Leadership
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Large-scale industrial projects demand more than technical expertise &mdash; they require disciplined coordination, clear communication, and strong engineering leadership across every stage of project execution. Our Engineering Management services provide the integrated oversight needed to align multidisciplinary teams, control technical interfaces, and keep projects progressing safely, efficiently, and in accordance with defined objectives.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              We serve as the <strong>central coordination hub</strong> between engineering disciplines, clients, vendors, contractors, and construction teams. By managing technical interfaces, reviewing engineering deliverables, resolving design conflicts, and monitoring project progress, we help ensure that the original design intent is effectively translated into a constructible, compliant, and high-quality facility.
            </p>
            <p className="mb-12 leading-relaxed text-lg">
              Our approach combines engineering expertise with structured project coordination to identify potential issues early, minimize rework, streamline decision-making, and maintain alignment between engineering, procurement, and construction activities.
            </p>
          </FadeUpBox>

          <FadeUpBox>
            <h3 className="text-2xl font-heading font-bold text-[#0A192F] dark:text-white mb-8">
              Key Engineering Management Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Multi-Disciplinary Design Coordination",
                  desc: "Integrating civil, structural, mechanical, piping, electrical, instrumentation, and other engineering disciplines to ensure seamless interfaces and coordinated design development."
                },
                {
                  title: "Vendor Document Review & Approval (VDR)",
                  desc: "Managing the review, coordination, and approval of vendor drawings, technical documents, and engineering data to ensure compliance with project specifications and design requirements."
                },
                {
                  title: "3D Model Reviews – 30%, 60% & 90%",
                  desc: "Conducting structured model reviews at key design milestones to identify spatial conflicts, interface issues, accessibility concerns, and potential constructability challenges before construction."
                },
                {
                  title: "Constructability Reviews",
                  desc: "Evaluating designs from a construction and installation perspective to improve practicality, accessibility, sequencing, safety, and overall execution efficiency."
                },
                {
                  title: "Change Management & Impact Analysis",
                  desc: "Assessing technical and project impacts arising from design changes, scope modifications, and field requirements while maintaining alignment across affected disciplines and stakeholders."
                },
                {
                  title: "Schedule & Deliverable Tracking",
                  desc: "Monitoring engineering deliverables, review cycles, key milestones, and discipline-wise progress to support timely decision-making and maintain project schedules."
                },
                {
                  title: "Technical Interface Management",
                  desc: "Identifying and managing interfaces between engineering disciplines, vendors, contractors, and project stakeholders to minimize gaps, overlaps, and coordination-related delays."
                },
                {
                  title: "Design Quality & Compliance Assurance",
                  desc: "Supporting consistency and technical quality across engineering deliverables while ensuring alignment with applicable project standards, specifications, codes, and client requirements."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200/70 dark:border-white/10 flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#108A00] dark:text-[#4ADE80] mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-[#0A192F] dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUpBox>

          <FadeUpBox className="bg-[#0A192F] p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#108A00]/20 rounded-full blur-[90px]" />
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold mb-4">Ensure your project runs smoothly</h3>
              <p className="text-gray-300 text-lg mb-8">Discuss management and inter-disciplinary coordination for your project.</p>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-2xl bg-[#108A00] hover:bg-[#0C6B00] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-200">
                Discuss Management Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeUpBox>
        </StaggerWrapper>
      </section>
    </div>
  );
}
