import Link from "next/link";
import { ArrowRight, PenTool, CheckCircle } from "lucide-react";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export default function ProposalEngineeringPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="bg-brand-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
            <PenTool className="h-10 w-10 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">Proposal Engineering</h1>
          <p className="text-xl text-brand-primary-light max-w-2xl mx-auto font-light">
            Accurate estimation and preliminary design to win bids.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <StaggerWrapper className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUpBox className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-heading font-bold text-brand-primary-dark mb-6">Winning Starts with Accuracy</h2>
            <p className="mb-8">
              At the core of every successful EPC project is a highly accurate, competitively priced proposal. Invictus Engineering provides specialized Proposal Engineering services designed to help you bid with confidence.
            </p>
            <p className="mb-12">
              We leverage our extensive database and deep industry experience to quickly turn around accurate preliminary designs and Material Take-Offs (MTOs) during the critical bidding phase.
            </p>
          </FadeUpBox>

          <FadeUpBox>
            <h3 className="text-2xl font-heading font-bold text-brand-primary-dark mb-6">Our Proposal Deliverables</h3>
            <ul className="space-y-4 mb-12">
              {[
                "Preliminary Material Take-Offs (MTOs) for Piping and Structural",
                "Equipment Sizing and Data Sheets for Vendor Quotations",
                "Plot Plan and Equipment Layout Conceptualization",
                "Man-hour Estimation for Detail Engineering Phase",
                "Technical Bid Evaluation (TBE) of Vendor Offers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start p-4 bg-brand-primary-light rounded-xl border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-brand-accent mr-4 shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeUpBox>

          <FadeUpBox className="bg-brand-primary p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Need help with an upcoming bid?</h3>
              <p className="text-brand-primary-light mb-8 text-lg">Partner with us for rapid, accurate proposal engineering.</p>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-white hover:text-brand-accent transition-colors">
                Contact Our Estimators <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeUpBox>
        </StaggerWrapper>
      </section>
    </div>
  );
}
