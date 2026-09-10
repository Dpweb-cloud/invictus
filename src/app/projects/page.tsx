import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowRight, Globe } from "lucide-react";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">Our Projects</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            A showcase of our engineering precision across diverse industrial sectors.
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-primary-light/50">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <FadeUpBox key={project.slug} delay={idx * 0.1}>
                <Link href={`/projects/${project.slug}`} className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2">
                  <div className="h-48 bg-brand-primary-light flex items-center justify-center p-6 text-center group-hover:bg-brand-primary-dark transition-colors duration-300">
                    <span className="text-brand-primary-dark font-bold text-xl group-hover:text-white transition-colors">{project.title}</span>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent-dark text-xs font-bold rounded-full mb-4 w-max">{project.sector}</span>
                    <h3 className="text-xl font-bold mb-3 text-brand-primary-dark">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 flex items-center gap-2 font-medium"><Globe className="w-4 h-4 text-brand-accent" /> {project.location}</p>
                    <div className="mt-auto inline-flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                      Read Case Study <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
