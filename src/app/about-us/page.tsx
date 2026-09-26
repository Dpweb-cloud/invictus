import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export const metadata = {
  title: "About Invictus Engineering | Premier Plant & Piping Engineering Partner",
  description: "Learn about Invictus Engineering, our mission, vision, core values, proprietary BOM software, and decade of industrial experience.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="WHO WE ARE"
        title="About Invictus Engineering"
        subtitle="Delivering precision, safety, and innovation in plant & piping engineering solutions for over a decade."
        breadcrumbs={[{ label: "About Us" }]}
        bgImage="/images/banners/about-banner.png"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#0A0E14]">
        <StaggerWrapper className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-3xl font-heading font-bold text-[#071A2B] dark:text-white mb-6">
              Premier Engineering Solutions Provider
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Invictus Engineering is a premier engineering services provider, specializing in comprehensive plant engineering solutions for greenfield and brownfield projects across the industrial sector for more than a decade. Our multi-disciplinary expertise spans Process, Equipment, Piping, Civil &amp; Structure, Instrumentation, and Electrical Engineering, allowing us to support clients through every phase of a project&apos;s lifecycle &mdash; from concept and feasibility through to detailed design and execution.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              We are committed to delivering precise, cost-effective, and safe engineering solutions that drive operational excellence and long-term reliability for our clients.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              To further strengthen this commitment, we have developed a <strong>proprietary, in-house Bill of Material (BOM) processing software</strong> capable of handling complex Piping BOM data at both the proposal and execution stages &mdash; enabling faster turnaround, greater accuracy, and stronger, value-driven proposals that improve our clients&apos; competitiveness.
            </p>
            <p className="mb-12 leading-relaxed text-lg">
              From detailed engineering design to rigorous quality assurance, our team of seasoned professionals ensures that every deliverable meets the highest global standards of quality, safety, and technical excellence.
            </p>
          </FadeUpBox>

          <FadeUpBox className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-200/70 dark:border-white/10 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#071A2B] text-white rounded-2xl">
                  <Eye className="w-6 h-6 text-[#108A00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#071A2B] dark:text-white m-0">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                To be the globally preferred engineering partner, recognized for our unwavering commitment to quality, innovation, and sustainable design solutions.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-200/70 dark:border-white/10 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#108A00] text-white rounded-2xl">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#071A2B] dark:text-white m-0">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                To provide safe, efficient, and highly optimized engineering designs that exceed client expectations, ensuring on-time delivery without compromising on rigorous quality standards.
              </p>
            </div>
          </FadeUpBox>

          <FadeUpBox>
            <h2 className="text-3xl font-heading font-bold text-[#071A2B] dark:text-white mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Integrity", desc: "Honesty and transparency in every engineering deliverable", icon: Heart },
                { title: "Excellence", desc: "Zero-compromise precision and ASME/API code compliance", icon: CheckCircle },
                { title: "Innovation", desc: "Proprietary BOM tools and modern 3D digital workflows", icon: Target },
              ].map((val, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-8 bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 rounded-2xl hover:border-[#108A00] transition-colors shadow-sm">
                  <val.icon className="w-8 h-8 text-[#108A00] dark:text-[#108A00] mb-4" />
                  <h4 className="font-bold text-lg text-[#071A2B] dark:text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{val.desc}</p>
                </div>
              ))}
            </div>
          </FadeUpBox>
        </StaggerWrapper>
      </section>
    </div>
  );
}
