import Image from "next/image";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

const clientLogos = [
  { name: "ONGC",         logo: "/Photo/Client Logos/ONGC.png" },
  { name: "EIL",          logo: "/Photo/Client Logos/EIL2.png" },
  { name: "PRAJ",         logo: "/Photo/Client Logos/PRAJ.jpg" },
  { name: "thyssenkrupp", logo: "/Photo/Client Logos/thyssenkrupp_logo.png" },
  { name: "Sopan",        logo: "/Photo/Client Logos/Sopan.png" },
  { name: "Fenix",        logo: "/Photo/Client Logos/fenix1.png" },
  { name: "BPCL",         logo: "/Photo/Client Logos/BPCL.jpg" },
  { name: "FlareTec",     logo: "/Photo/Client Logos/FlareTec.jpg" },
  { name: "Reliance Industries", logo: "/Photo/Client Logos/RIL.jpg" },
  { name: "SUEZ",         logo: "/Photo/Client Logos/suez.png" },
  { name: "PGI",          logo: "/Photo/Client Logos/PGI1.jpg" },
  { name: "Tooltech",     logo: "/Photo/Client Logos/Tooltech.jpg" },
];

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
            {clientLogos.map((client, idx) => (
              <FadeUpBox
                key={idx}
                className="bg-brand-primary-light rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border border-gray-100 hover:border-brand-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={64}
                    className="object-contain max-h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                </div>
                <span className="text-sm font-semibold text-brand-primary-dark text-center">{client.name}</span>
              </FadeUpBox>
            ))}
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
