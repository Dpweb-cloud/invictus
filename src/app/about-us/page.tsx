import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import { StaggerWrapper, FadeUpBox, FadeInBox } from "@/components/ui/Animations";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Page Header */}
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">About Invictus Engineering</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            Delivering precision, safety, and innovation in every project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <StaggerWrapper className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">Who We Are</h2>
            <p className="mb-6">
              Invictus Engineering is a premier engineering services provider, specializing in comprehensive plant engineering for greenfield and brownfield projects. Our multi-disciplinary expertise spans Process, Equipment, Piping, Instrumentation, Automation, and Electrical Engineering.
            </p>
            <p className="mb-12">
              We are committed to delivering precise, cost-effective, and safe engineering solutions that drive the industrial sector forward. From detailed engineering design to rigorous quality assurance, our team of seasoned professionals ensures that every project meets the highest global standards.
            </p>
          </FadeUpBox>

          <FadeUpBox className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-brand-primary-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-primary rounded-lg text-white">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary-dark m-0">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To be the globally preferred engineering partner, recognized for our unwavering commitment to quality, innovation, and sustainable design solutions.
              </p>
            </div>

            <div className="bg-brand-primary-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-accent rounded-lg text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary-dark m-0">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To provide safe, efficient, and highly optimized engineering designs that exceed client expectations, ensuring on-time delivery without compromising on rigorous quality standards.
              </p>
            </div>
          </FadeUpBox>

          <FadeUpBox>
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Integrity", icon: Heart },
                { title: "Excellence", icon: CheckCircle },
                { title: "Innovation", icon: Target },
              ].map((val, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl hover:border-brand-accent transition-colors">
                  <val.icon className="w-8 h-8 text-brand-accent mb-4" />
                  <h4 className="font-bold text-lg text-foreground">{val.title}</h4>
                </div>
              ))}
            </div>
          </FadeUpBox>
        </StaggerWrapper>
      </section>
    </div>
  );
}
