import { clients } from "@/lib/data";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export default function ClientsPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">Our Clients</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            Trusted by industry leaders across the globe.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpBox className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">Partnering for Success</h2>
            <p className="text-lg text-gray-600">
              We take pride in our long-standing relationships with some of the most respected organizations in the engineering, procurement, and construction sectors.
            </p>
          </FadeUpBox>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, idx) => (
              <FadeUpBox key={idx} className="bg-brand-primary-light rounded-2xl p-8 flex items-center justify-center border border-gray-100 hover:border-brand-accent transition-colors duration-300">
                <span className="font-heading font-black text-xl md:text-2xl text-brand-primary-dark">{client.name}</span>
              </FadeUpBox>
            ))}
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
