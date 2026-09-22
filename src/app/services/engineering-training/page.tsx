import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, CheckCircle } from "lucide-react";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export default function EngineeringTrainingPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        {/* Real training photo as background */}
        <Image
          src="/Photo/DSC05255_edited.jpg"
          alt="Invictus training session"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
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
          <FadeUpBox className="prose prose-lg max-w-none text-gray-700 mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">Bridging the Gap Between Academia &amp; Industry</h2>
            <p className="mb-6 leading-relaxed">
              The transition from academic knowledge to real-world engineering practice requires more than theoretical understanding. It demands exposure to industry standards, engineering methodologies, design practices, and the practical challenges encountered on live projects.
            </p>
            <p className="mb-6 leading-relaxed">
              At Invictus Engineering, we bridge this gap through specialized technical training and capability-development programs designed for fresh engineering graduates, experienced professionals, and corporate engineering teams. Our programs are structured to develop practical engineering competence and enable participants to confidently apply their knowledge in real project environments.
            </p>
            <p className="mb-6 leading-relaxed">
              Our training programs are delivered by experienced senior engineers and industry professionals actively involved in live engineering projects. This ensures that the learning goes beyond classroom theory, incorporating practical design considerations, project workflows, industry best practices, and lessons learned from actual engineering applications.
            </p>
            <p className="mb-12 leading-relaxed">
              We place strong emphasis on international engineering codes and standards, engineering analysis, design methodologies, and modern digital engineering tools. The training can also be tailored to suit specific organizational requirements, project disciplines, and experience levels.
            </p>
          </FadeUpBox>

          {/* Training gallery — real photos */}
          <FadeUpBox className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <Image
                src="/Photo/DSC05255_edited.jpg"
                alt="Stress analysis training session at Invictus"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Live Training Session &mdash; Simplified Methods of Stress Analysis</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <Image
                src="/Photo/D1438.jpg"
                alt="3D modeling in Navisworks training"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">3D Modelling &amp; Review &mdash; Autodesk Navisworks</p>
              </div>
            </div>
          </FadeUpBox>

          <FadeUpBox>
            <h3 className="text-2xl font-heading font-bold text-brand-primary-dark mb-6">Key Training &amp; Capability Development Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Industry-Oriented Engineering Training",
                  desc: "Practical training programs designed to prepare engineering graduates and professionals for real-world project environments."
                },
                {
                  title: "International Codes & Standards",
                  desc: "Comprehensive exposure to industry-recognized standards and codes, including ASME, API, and other applicable engineering standards."
                },
                {
                  title: "Engineering Analysis",
                  desc: "Practical understanding of engineering analysis methodologies, design assessment, interpretation of results, and application to industrial systems."
                },
                {
                  title: "Project-Based Learning",
                  desc: "Training built around practical engineering scenarios, design challenges, project workflows, and real-world case studies."
                },
                {
                  title: "Graduate Engineer Development Programs",
                  desc: "Structured programs aimed at accelerating the transition of fresh graduates from academic learning to industry-ready engineering professionals."
                },
                {
                  title: "Corporate Upskilling Programs",
                  desc: "Customized technical training for engineering organizations seeking to strengthen their teams' capabilities, improve technical proficiency, and stay aligned with evolving industry practices."
                },
                {
                  title: "Expert-Led Knowledge Transfer",
                  desc: "Training delivered by experienced engineers with hands-on exposure to live projects, providing participants with practical insights into engineering decision-making and project execution."
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
