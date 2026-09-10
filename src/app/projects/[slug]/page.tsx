import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Building2, Target } from "lucide-react";
import { projects } from "@/lib/data";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Invictus Engineering`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/projects" className="inline-flex items-center text-brand-primary-light hover:text-white mb-8 transition-colors font-semibold">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 bg-white/20 text-white text-sm font-bold rounded-full">
              {project.sector}
            </span>
            <span className="px-4 py-1.5 bg-brand-accent text-white text-sm font-bold rounded-full">
              {project.scope}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <FadeUpBox className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                {project.description}
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-brand-primary-dark mb-6 mt-12">Services Rendered</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.servicesUsed.map((service, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 bg-brand-primary-light p-4 rounded-xl font-medium border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-brand-accent mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </FadeUpBox>
            
            <FadeUpBox delay={0.2} className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 sticky top-24 shadow-xl">
                <h3 className="text-xl font-heading font-bold text-brand-primary-dark mb-6 pb-4 border-b border-gray-100">
                  Key Facts
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-brand-primary-light rounded-xl mr-4 text-brand-primary">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Client</p>
                      <p className="text-gray-600 font-medium">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-brand-primary-light rounded-xl mr-4 text-brand-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Location</p>
                      <p className="text-gray-600 font-medium">{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-brand-primary-light rounded-xl mr-4 text-brand-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Duration</p>
                      <p className="text-gray-600 font-medium">{project.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-brand-primary-light rounded-xl mr-4 text-brand-primary">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Sector</p>
                      <p className="text-gray-600 font-medium">{project.sector}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUpBox>
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
