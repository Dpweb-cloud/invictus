import Link from "next/link";
import { ArrowRight, Users, CheckCircle } from "lucide-react";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export default function EngineeringManagementPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
            <Users className="h-10 w-10 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">Engineering Management</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            Expert coordination to ensure timely delivery and seamless integration.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <StaggerWrapper className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">Orchestrating Complex Projects with Engineering Excellence</h2>
            <p className="mb-6 leading-relaxed">
              Large-scale industrial projects demand more than technical expertise &mdash; they require disciplined coordination, clear communication, and strong engineering leadership across every stage of project execution. Our Engineering Management services provide the integrated oversight needed to align multidisciplinary teams, control technical interfaces, and keep projects progressing safely, efficiently, and in accordance with defined objectives.
            </p>
            <p className="mb-6 leading-relaxed">
              We serve as the central coordination hub between engineering disciplines, clients, vendors, contractors, and construction teams. By managing technical interfaces, reviewing engineering deliverables, resolving design conflicts, and monitoring project progress, we help ensure that the original design intent is effectively translated into a constructible, compliant, and high-quality facility.
            </p>
            <p className="mb-12 leading-relaxed">
              Our approach combines engineering expertise with structured project coordination to identify potential issues early, minimize rework, streamline decision-making, and maintain alignment between engineering, procurement, and construction activities.
            </p>
          </FadeUpBox>

          <FadeUpBox>
            <h3 className="text-2xl font-heading font-bold text-brand-primary-dark mb-6">Key Engineering Management Capabilities</h3>
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
                  title: "3D Model Reviews \u2013 30%, 60% & 90%",
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
                <div key={idx} className="p-6 bg-brand-primary-light rounded-2xl border border-gray-100 flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-accent mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-brand-primary-dark mb-2">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUpBox>

          <FadeUpBox className="bg-brand-primary p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Ensure your project runs smoothly.</h3>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-white hover:text-brand-accent transition-colors">
                Discuss Management Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeUpBox>
        </StaggerWrapper>
      </section>
    </div>
  );
}
