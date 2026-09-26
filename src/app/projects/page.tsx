import { projects } from "@/lib/data";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export const metadata = {
  title: "Engineering Projects & Case Studies | Invictus Engineering",
  description:
    "Explore our featured plant engineering, 3D piping layout, stress analysis, and grassroot facility projects delivered for global EPC leaders.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* Subpage Banner */}
      <SubpageBanner
        badge="ENGINEERING PORTFOLIO"
        title="Our Industrial Projects"
        subtitle="Explore our proven track record of grassroot engineering design, complex piping stress analysis, 3D plant modelling, and turnkey facility solutions."
        breadcrumbs={[{ label: "Projects" }]}
        bgImage="/images/banners/projects-banner.png"
      />

      {/* Projects Grid Section */}
      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-[#060D1A]/50 relative">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#071A2B] dark:text-white mb-4">
              Featured Case Studies &amp; Engineering Deliverables
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              From high-pressure steam lines in the UK &amp; India to offshore gas conditioning skids in Saudi Arabia, view our detailed project scope and technical execution.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <FadeUpBox key={project.slug} delay={idx * 0.08}>
                <ProjectCard project={project} />
              </FadeUpBox>
            ))}
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
