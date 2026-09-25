import Link from "next/link";
import { ArrowRight, Settings, Users, PenTool, BookOpen } from "lucide-react";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

const services = [
  { 
    title: "Proposal Engineering", 
    desc: "Fast-turnaround accurate estimation, in-house BOM software processing, and technical proposals that win competitive bids.", 
    icon: PenTool, 
    link: "/services/proposal-engineering" 
  },
  { 
    title: "Detail Engineering", 
    desc: "Comprehensive 3D plant design, piping layout, stress analysis, and construction-ready deliverables across Aveva & AutoCAD.", 
    icon: Settings, 
    link: "/services/detail-engineering" 
  },
  { 
    title: "Engineering Management", 
    desc: "Central coordination hub managing inter-disciplinary interfaces, vendor reviews, and site execution.", 
    icon: Users, 
    link: "/services/engineering-management" 
  },
  { 
    title: "Corporate Training", 
    desc: "Specialized capability development for fresh engineers & teams, bridging academia to industry practice.", 
    icon: BookOpen, 
    link: "/services/engineering-training" 
  }
];

export const metadata = {
  title: "Engineering Services | Invictus Engineering",
  description: "End-to-end plant & piping engineering services including proposal engineering, detail engineering, management, and training.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="ENGINEERING CAPABILITIES"
        title="Our Specialized Services"
        subtitle="Comprehensive engineering solutions across the complete project lifecycle — from proposal estimation to execution-ready 3D deliverables."
        breadcrumbs={[{ label: "Services" }]}
        bgImage="/images/banners/services-banner.png"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#0A0E14]">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpBox className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-[#0A192F] dark:text-white mb-4">
              End-to-End Plant Engineering
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From initial proposal estimations to highly detailed construction-ready designs, Invictus Engineering provides tailored services to meet the exacting standards of the industrial sector.
            </p>
          </FadeUpBox>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {services.map((service, idx) => (
              <FadeUpBox key={idx} delay={idx * 0.1}>
                <Link
                  href={service.link}
                  className="flex flex-col h-full bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-200/80 dark:border-white/10 p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#108A00]/40 transition-all duration-300 group hover:-translate-y-1.5"
                >
                  <div className="h-14 w-14 rounded-2xl bg-[#108A00]/10 dark:bg-[#108A00]/20 text-[#108A00] dark:text-[#4ADE80] flex items-center justify-center mb-6 group-hover:bg-[#108A00] group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#0A192F] dark:text-white group-hover:text-[#108A00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-base leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  <div className="inline-flex items-center font-bold text-[#108A00] dark:text-[#4ADE80] group-hover:text-[#0C6B00] transition-colors mt-auto text-sm">
                    Explore Service Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
