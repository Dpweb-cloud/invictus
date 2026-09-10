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
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">Orchestrating Complex Projects</h2>
            <p className="mb-8">
              Large scale industrial projects require meticulous coordination between multiple engineering disciplines, vendors, and construction teams. Our Engineering Management service provides the leadership needed to keep projects on track.
            </p>
            <p className="mb-12">
              We act as the central hub of technical communication, resolving clashes, managing vendor data, and ensuring that the design intent is perfectly translated into the final constructed facility.
            </p>
          </FadeUpBox>

          <FadeUpBox>
            <h3 className="text-2xl font-heading font-bold text-brand-primary-dark mb-6">Management Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Multi-disciplinary Design Coordination",
                "Vendor Document Review & Approval (VDR)",
                "3D Model Reviews (30%, 60%, 90%)",
                "Constructability Reviews",
                "Change Management & Impact Analysis",
                "Schedule & Deliverable Tracking"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center p-4 bg-brand-primary-light rounded-xl border border-gray-100">
                  <CheckCircle className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                  <span className="text-gray-800 font-bold">{item}</span>
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
