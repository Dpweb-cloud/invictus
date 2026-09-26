import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export const metadata = {
  title: "Proposal Engineering & Estimation | Invictus Engineering",
  description: "Accurate estimation, proprietary BOM software processing, and technical proposals that win competitive bids.",
};

export default function ProposalEngineeringPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="BID WINNING PRECISION"
        title="Proposal Engineering Services"
        subtitle="Accurate estimation, preliminary design, and proprietary BOM software processing that give clients the competitive edge to win bids."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Proposal Engineering" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#04101C]">
        <StaggerWrapper className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-3xl font-heading font-bold text-[#071A2B] dark:text-white mb-6">
              Winning Starts with Precision Estimation
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              At the core of every successful EPC project lies a proposal built on precision &mdash; one that is technically sound, competitively priced, and delivered without delay. Invictus Engineering&apos;s specialized Proposal Engineering services are designed to give clients exactly that edge, empowering them to bid with confidence and win the projects that matter most.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              To further strengthen this commitment, we have developed a <strong>proprietary, in-house Bill of Material (BOM) processing software</strong> capable of handling complex Piping BOM data at both the proposal and execution stages &mdash; enabling faster turnaround, greater accuracy, and stronger, value-driven proposals that improve our clients&apos; competitiveness.
            </p>
            <p className="mb-12 leading-relaxed text-lg">
              By combining fast turnaround with rigorous technical accuracy, we help clients submit proposals that are not only competitive on cost, but also credible and defensible on scope, ensuring stronger win rates and reduced risk of costly revisions further down the project lifecycle.
            </p>
          </FadeUpBox>

          <FadeUpBox>
            <h3 className="text-2xl font-heading font-bold text-[#071A2B] dark:text-white mb-6">
              Our Proposal Deliverables
            </h3>
            <ul className="space-y-4 mb-12">
              {[
                "Proprietary BOM Software Processing for Piping discipline, delivering instant and accurate MTO estimations",
                "Preliminary Bill of Materials (BOMs) providing a reliable, defensible basis for early-stage cost estimation",
                "Plot Plan and Equipment Layout Conceptualization, establishing a practical spatial framework for proposed facilities",
                "Man-hour Estimation for Detail Engineering, enabling accurate resourcing and scheduling forecasts",
                "Technical Bid Evaluation (TBE) of Vendor Offers, ensuring vendor proposals are assessed objectively against technical criteria"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200/70 dark:border-white/10">
                  <CheckCircle className="h-6 w-6 text-[#108A00] mr-4 shrink-0 mt-0.5" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeUpBox>

          <FadeUpBox className="bg-[#071A2B] border border-[#0B5CAD]/30 p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#108A00]/20 rounded-full blur-[90px]" />
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold mb-4">Need help with an upcoming bid?</h3>
              <p className="text-gray-300 text-lg mb-8">Partner with us for rapid, accurate proposal engineering and BOM processing.</p>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-2xl bg-[#108A00] hover:bg-[#0D7000] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-200">
                Contact Our Proposal Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeUpBox>
        </StaggerWrapper>
      </section>
    </div>
  );
}
