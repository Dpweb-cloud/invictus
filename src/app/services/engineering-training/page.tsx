import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, CheckCircle, GraduationCap, Award } from "lucide-react";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export const metadata = {
  title: "Corporate Technical Training & Capability Development | Invictus Engineering",
  description: "Industry-oriented engineering training, ASME/API international codes, and graduate engineer development programs.",
};

export default function EngineeringTrainingPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="CAPABILITY DEVELOPMENT"
        title="Corporate & Technical Training"
        subtitle="Specialized capability-development programs bridging academic knowledge and real-world industrial engineering practice."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Corporate Training" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#04101C]">
        <StaggerWrapper className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mb-12">
            <h2 className="text-3xl font-heading font-bold text-[#071A2B] dark:text-white mb-6">
              Bridging the Gap Between Academia &amp; Industry
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              The transition from academic knowledge to real-world engineering practice requires more than theoretical understanding. It demands exposure to industry standards, engineering methodologies, design practices, and the practical challenges encountered on live projects.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              At <strong className="text-[#108A00]">Invictus Engineering</strong>, we bridge this gap through specialized technical training and capability-development programs designed for <strong>fresh engineering graduates, experienced professionals, and corporate engineering teams</strong>. Our programs are structured to develop practical engineering competence and enable participants to confidently apply their knowledge in real project environments.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              Our training programs are delivered by <strong>experienced senior engineers and industry professionals actively involved in live engineering projects</strong>. This ensures that the learning goes beyond classroom theory, incorporating practical design considerations, project workflows, industry best practices, and lessons learned from actual engineering applications.
            </p>
            <p className="mb-12 leading-relaxed text-lg">
              We place strong emphasis on <strong>international engineering codes and standards (ASME, API)</strong>, engineering analysis, design methodologies, and modern digital engineering tools. The training can also be tailored to suit specific organizational requirements, project disciplines, and experience levels.
            </p>
          </FadeUpBox>

          {/* Training gallery — real photos */}
          <FadeUpBox className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl border border-gray-200 dark:border-white/10 group">
              <Image
                src="/Photo/DSC05255_edited.jpg"
                alt="Stress analysis training session at Invictus"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <p className="text-white text-sm font-semibold">Live Training Session — Simplified Methods of Stress Analysis</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl border border-gray-200 dark:border-white/10 group">
              <Image
                src="/Photo/D1438.jpg"
                alt="3D modeling in Navisworks training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <p className="text-white text-sm font-semibold">3D Modelling &amp; Review — Autodesk Navisworks</p>
              </div>
            </div>
          </FadeUpBox>

          <FadeUpBox>
            <h3 className="text-2xl font-heading font-bold text-[#071A2B] dark:text-white mb-8">
              Key Training &amp; Capability Development Areas
            </h3>
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
                <div key={idx} className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200/70 dark:border-white/10 flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#108A00] mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-[#071A2B] dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUpBox>

          <FadeUpBox className="bg-[#071A2B] border border-[#0B5CAD]/30 p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#108A00]/20 rounded-full blur-[90px]" />
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold mb-4">Upskill Your Workforce</h3>
              <p className="text-gray-300 mb-8 text-lg">We offer custom corporate batches and individual engineer enrollments.</p>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-2xl bg-[#108A00] hover:bg-[#0D7000] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-200">
                Inquire About Training Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeUpBox>
        </StaggerWrapper>
      </section>
    </div>
  );
}
