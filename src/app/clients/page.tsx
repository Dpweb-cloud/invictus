import Image from "next/image";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";
import { clients } from "@/lib/data";

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

      <section className="py-16 md:py-24 bg-white dark:bg-[#04101C]">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpBox className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-[#071A2B] dark:text-white mb-4">
              Partnering for Engineering Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We take pride in our long-standing relationships with some of the most respected organizations in the engineering, procurement, and construction sectors.
            </p>
          </FadeUpBox>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, idx) => {
              const isBoost = client.name.toUpperCase().includes("BPCL") || client.name.toUpperCase().includes("TOOLTECH");
              return (
                <FadeUpBox
                  key={idx}
                  className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-gray-200/70 dark:border-white/10 hover:border-[#108A00] hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="h-20 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={72}
                      className={`object-contain max-h-16 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 ${
                        isBoost ? "scale-[1.45]" : ""
                      }`}
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-bold text-[#071A2B] dark:text-gray-200 text-center line-clamp-1">
                    {client.name}
                  </span>
                </FadeUpBox>
              );
            })}
          </div>
        </StaggerWrapper>
      </section>
    </div>
  );
}
