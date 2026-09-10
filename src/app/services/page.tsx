import Link from "next/link";
import { ArrowRight, Settings, Users, PenTool, BookOpen } from "lucide-react";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

const services = [
  { 
    title: "Proposal Engineering", 
    desc: "Accurate estimation and preliminary design to support your bidding process.", 
    icon: PenTool, 
    link: "/services/proposal-engineering" 
  },
  { 
    title: "Detail Engineering", 
    desc: "Comprehensive multi-disciplinary design ready for construction and implementation.", 
    icon: Settings, 
    link: "/services/detail-engineering" 
  },
  { 
    title: "Engineering Management", 
    desc: "Expert coordination to ensure timely delivery and seamless integration.", 
    icon: Users, 
    link: "/services/engineering-management" 
  },
  { 
    title: "Engineering Training", 
    desc: "Specialized training programs for piping and static equipment engineers.", 
    icon: BookOpen, 
    link: "/services/engineering-training" 
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            Comprehensive engineering solutions across the complete project lifecycle.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpBox className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">End-to-End Engineering</h2>
            <p className="text-lg text-gray-600">
              From initial proposal estimations to highly detailed construction-ready designs, Invictus Engineering provides tailored services to meet the exacting standards of the industrial sector.
            </p>
          </FadeUpBox>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <FadeUpBox key={idx} delay={idx * 0.1}>
                <Link href={service.link} className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 p-10 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-left">
                  <div className="h-16 w-16 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-primary-dark">{service.title}</h3>
                  <p className="text-gray-600 mb-8 text-lg flex-grow">{service.desc}</p>
                  <div className="inline-flex items-center font-bold text-brand-accent group-hover:text-brand-accent-dark transition-colors mt-auto text-lg">
                    Explore Service <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FadeUpBox>
            ))}
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
