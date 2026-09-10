import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle } from "lucide-react";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export default function EngineeringTrainingPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
            <BookOpen className="h-10 w-10 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">Corporate Training</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            Specialized training programs for students and employees in piping and static equipment.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <StaggerWrapper className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">Bridging the Gap Between Academia & Industry</h2>
            <p className="mb-8">
              The transition from academic theory to practical industrial design can be steep. Invictus Engineering offers highly specialized training modules designed to upskill fresh graduates and corporate employees.
            </p>
            <p className="mb-12">
              Our training is conducted by senior engineers who actively work on live projects. We focus heavily on international codes (ASME, API), stress analysis, and modern 3D design tools.
            </p>
          </FadeUpBox>

          <FadeUpBox>
            <h3 className="text-2xl font-heading font-bold text-brand-primary-dark mb-6">Training Modules</h3>
            <div className="space-y-6 mb-12">
              <div className="bg-brand-primary-light p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xl font-bold text-brand-primary-dark mb-4">Piping Engineering & Stress Analysis</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-brand-accent mr-2" /> ASME B31.3 & B31.1 Codes</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-brand-accent mr-2" /> Pipe Sizing & Selection</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-brand-accent mr-2" /> Caesar II Stress Analysis</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-brand-accent mr-2" /> Support Selection</li>
                </ul>
              </div>
              
              <div className="bg-brand-primary-light p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xl font-bold text-brand-primary-dark mb-4">Static Equipment Engineering</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-brand-accent mr-2" /> ASME Sec VIII Div 1 & 2</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-brand-accent mr-2" /> PV Elite Software</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-brand-accent mr-2" /> Heat Exchanger Design (TEMA)</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-brand-accent mr-2" /> Storage Tank Design (API 650)</li>
                </ul>
              </div>
            </div>
          </FadeUpBox>

          <FadeUpBox className="bg-brand-primary p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Upskill Your Workforce</h3>
              <p className="text-brand-primary-light mb-8 text-lg">We offer custom corporate batches and individual student enrollments.</p>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-white hover:text-brand-accent transition-colors">
                Inquire About Training <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeUpBox>
        </StaggerWrapper>
      </section>
    </div>
  );
}
