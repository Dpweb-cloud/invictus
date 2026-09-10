import { CheckCircle, ShieldCheck, Activity, Users, Clock } from "lucide-react";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export default function QualityPage() {
  const pillars = [
    {
      title: "Engineering Procedures",
      desc: "We strictly adhere to documented internal engineering procedures and globally recognized codes and standards for every deliverable.",
      icon: ShieldCheck
    },
    {
      title: "Quality Assurance Workflows",
      desc: "Multi-layered checking mechanisms involving peer reviews, lead engineer reviews, and final management audits before any design is issued.",
      icon: CheckCircle
    },
    {
      title: "Continuous Improvement",
      desc: "We actively monitor industry trends, updating our software and methodologies to ensure we deliver state-of-the-art engineering.",
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
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">Our Commitment to Quality</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            Quality is engineered, not just inspected.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">The 5 Pillars of Invictus Quality</h2>
            <p className="text-lg text-gray-600">
              At Invictus Engineering, we believe that rigorous quality control is the foundation of structural integrity, operational safety, and project success. Our quality policy is built upon five foundational pillars.
            </p>
          </FadeUpBox>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <FadeUpBox key={idx} className="bg-brand-primary-light rounded-2xl p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-accent mb-6 shadow-sm">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary-dark mb-4">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed">{pillar.desc}</p>
              </FadeUpBox>
            ))}
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
