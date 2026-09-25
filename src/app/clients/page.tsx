import Image from "next/image";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

const clientLogos = [
  { name: "ONGC",         logo: "/Photo/Client Logos/ONGC.png" },
  { name: "BPCL",         logo: "/Photo/Client Logos/BPCL.jpg" },
  { name: "Bilt Graphic Paper Products Ltd.", logo: "/images/clients/new-client-logo.png" },
  { name: "EIL",          logo: "/Photo/Client Logos/EIL2.png" },
  { name: "PRAJ",         logo: "/Photo/Client Logos/PRAJ.jpg" },
  { name: "thyssenkrupp", logo: "/Photo/Client Logos/thyssenkrupp_logo.png" },
  { name: "Sopan",        logo: "/Photo/Client Logos/Sopan.png" },
  { name: "Fenix",        logo: "/Photo/Client Logos/fenix1.png" },
  { name: "FlareTec",     logo: "/Photo/Client Logos/FlareTec.jpg" },
  { name: "Reliance Industries", logo: "/Photo/Client Logos/RIL.jpg" },
  { name: "SUEZ",         logo: "/Photo/Client Logos/suez.png" },
  { name: "PGI (Process Group)", logo: "/Photo/Client Logos/PGI1.jpg" },
  { name: "Tooltech",     logo: "/Photo/Client Logos/Tooltech.jpg" },
  { name: "Kamal Oil",    logo: "/Photo/Client Logos/kamal oil.jpg" },
  { name: "Willbo",       logo: "/Photo/Client Logos/Willbo.png" },
];

export const metadata = {
  title: "Our Clients & Partners | Invictus Engineering",
  description: "Trusted by top EPC contractors, refineries, chemical process plants, and power corporations worldwide.",
};

export default function ClientsPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="GLOBAL TRUST"
        title="Our Valued Clients"
        subtitle="Trusted by industry leaders across oil & gas, chemical, power, and industrial manufacturing sectors globally."
        breadcrumbs={[{ label: "Clients" }]}
        bgImage="/images/banners/clients-banner.png"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#0A0E14]">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpBox className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-[#0A192F] dark:text-white mb-4">
              Partnering for Engineering Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We take pride in our long-standing relationships with some of the most respected organizations in the engineering, procurement, and construction sectors.
            </p>
          </FadeUpBox>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientLogos.map((client, idx) => (
              <FadeUpBox
                key={idx}
                className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-gray-200/70 dark:border-white/10 hover:border-[#108A00] hover:shadow-xl transition-all duration-300 group"
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
                <span className="text-xs font-bold text-[#0A192F] dark:text-gray-200 text-center line-clamp-1">
                  {client.name}
                </span>
              </FadeUpBox>
            ))}
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
