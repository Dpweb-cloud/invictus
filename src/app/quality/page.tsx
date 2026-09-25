import { CheckCircle, ShieldCheck, Activity, Users, Clock } from "lucide-react";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export const metadata = {
  title: "Quality Policy & Standards | Invictus Engineering",
  description: "Our 5 pillars of quality assurance, ASME/API code compliance, peer review workflows, and zero-defect engineering commitment.",
};

export default function QualityPage() {
  const pillars = [
    {
      title: "Engineering Procedures",
      desc: "We strictly adhere to documented internal engineering procedures and globally recognized codes and standards (ASME, API, OISD) for every deliverable.",
      icon: ShieldCheck
    },
    {
      title: "Quality Assurance Workflows",
      desc: "Multi-layered checking mechanisms involving peer reviews, lead engineer reviews, and final management audits before any design is issued.",
      icon: CheckCircle
    },
    {
      title: "Continuous Improvement",
      desc: "We actively monitor industry trends, updating our software and proprietary BOM tools to ensure state-of-the-art engineering.",
      icon: Activity
    },
    {
      title: "Client Feedback Loop",
      desc: "Proactive communication and regular alignment meetings ensure the final deliverable perfectly matches client requirements.",
      icon: Users
    },
    {
      title: "Schedule & Cost Discipline",
      desc: "Quality also means delivering on time and within budget. Our project management frameworks track progress meticulously.",
      icon: Clock
    }
  ];

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="ZERO DEFECT POLICY"
        title="Our Commitment to Quality"
        subtitle="Quality is engineered into every line, isometric, and calculation — not just inspected."
        breadcrumbs={[{ label: "Quality Policy" }]}
        bgImage="/images/banners/quality-banner.png"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#0A0E14]">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-extrabold text-[#0A192F] dark:text-white mb-4">
              The 5 Pillars of Invictus Quality
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At Invictus Engineering, we believe that rigorous quality control is the foundation of structural integrity, operational safety, and project success. Our quality policy is built upon five foundational pillars.
            </p>
          </FadeUpBox>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <FadeUpBox key={idx} className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-200/70 dark:border-white/10 hover:-translate-y-1 hover:border-[#108A00] hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#0A192F] rounded-2xl flex items-center justify-center text-[#4ADE80] mb-6 shadow-md">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] dark:text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{pillar.desc}</p>
              </FadeUpBox>
            ))}
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
