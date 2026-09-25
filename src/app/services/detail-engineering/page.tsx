import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageBanner } from "@/components/ui/SubpageBanner";
import { Accordion } from "@/components/ui/Accordion";
import { StaggerWrapper, FadeUpBox } from "@/components/ui/Animations";

export const metadata = {
  title: "Detail Engineering | Invictus Engineering",
  description: "Comprehensive multi-disciplinary detail engineering services including process, equipment, piping, instrumentation, automation, and electrical engineering.",
};

export default function DetailEngineering() {
  const processList = ["Scope of Work", "Design Basis", "Process Calculations", "Legends & Symbols", "PFD", "P&ID", "Heat & Material Balance", "Datasheets", "Equipment Sizing", "Hydraulics", "PSV & Flare Hydraulics", "Line List", "Equipment List", "Battery Limit Summary", "Tie-In List", "Utility Summary", "Vendor Documents", "Cause & Effect", "Control & Safeguarding Philosophy", "HAZOP and SIL", "Debottlenecking", "Troubleshooting", "Plant Scale-Up", "SOPs", "Plant Documentation", "Operating Manual", "Safety Studies"];
  const equipmentList = ["Process Columns", "Reactors", "Pressure Vessels", "Stacks", "Pig Traps", "Storage Tanks", "Heat Exchangers"];
  const equipmentCodes = ["ASME Section VIII Division 1 & 2", "API 650", "API 620", "API 653", "IBR", "IS Standards", "TEMA"];
  const pipingList = ["Plant Layout / Plot Plan", "Equipment Layout", "Piping Material Specification", "Nozzle Orientation", "Stress Analysis", "3D Modeling", "Piping Layout / GA", "Piping Isometrics", "Material Take Off", "Tie-In Drawings", "Civil Information Drawings", "Pipe Rack Planning", "Underground Coordination", "As-Built 3D Models", "Site Construction Support", "Procurement / Vendor Support"];
  const instrumentationList = ["Design Basis", "Specifications", "Datasheets", "Technical Bid Evaluations", "Location Layouts", "MTO", "Hook-up", "Junction Box", "Cable Systems", "Instrument Selection", "Hydraulic Calculations", "SIL Studies", "Alarm Management"];
  const automationList = ["DCS", "PLC", "ESD", "F&G", "ICSS", "SCADA"];
  const electricalList = ["Power System Studies", "Design Verification", "SLD", "Protection System Design", "Electrical Equipment Layout", "Lighting & Earthing", "Cable Route Layout", "Panel Layout", "Hook-up & Installation Drawings", "Transformer Sizing", "DG Sizing", "APFC", "UPS", "Battery Charger", "PMCC", "MCC", "Distribution Panels", "Lighting Distribution Boards", "Busbar Sizing", "Lighting Calculations", "Relay & Cable Calculations", "Lightning Protection", "Earthing", "Load Calculations", "Short Circuit Studies", "Harmonic Analysis", "Datasheets", "Reports"];

  const renderGrid = (items: string[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start">
          <CheckCircle2 className="h-4 w-4 text-[#108A00] dark:text-[#4ADE80] mt-1 mr-2 shrink-0" />
          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <SubpageBanner
        badge="CORE EXPERTISE"
        title="Detail Engineering Services"
        subtitle="Comprehensive multi-disciplinary design and engineering services to translate concepts into construction-ready deliverables."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Detail Engineering" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white dark:bg-[#0A0E14] flex-grow">
        <StaggerWrapper className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <FadeUpBox className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mb-16">
            <h2 className="text-3xl font-heading font-extrabold text-[#0A192F] dark:text-white mb-6">
              Precision Multi-Disciplinary Design
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Comprehensive, multi-disciplinary design and engineering services that translate early-stage concepts into fully construction-ready deliverables. At Invictus Engineering, detail engineering represents the critical bridge between design intent and physical execution &mdash; the stage at which every dimension, specification, and interface must be resolved with absolute precision before a single piece of steel is cut or a pipe is laid.
            </p>
            <p className="mb-12 leading-relaxed text-lg">
              Our detail engineering practice is built on decades of combined hands-on experience across greenfield and brownfield projects in the oil &amp; gas, chemical, petrochemical, power, fertilizer, biofuels, and pharmaceutical sectors, and is delivered by a team fluent in the international codes and standards (ASME, API, NFPA, BS, DIN, JIS, IS, IBR, OISD, PED, and others) that govern safe, compliant plant design.
            </p>

            <div className="bg-gray-50 dark:bg-white/5 border-l-4 border-[#108A00] p-8 rounded-r-3xl my-10 not-prose shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-[#0A192F] dark:text-white mb-4">
                Piping Engineering &mdash; Our Core Strength
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base">
                Piping engineering is where Invictus Engineering truly excels, and it forms the backbone of our in-house technical capability. Our dedicated piping team delivers end-to-end services spanning design basis development, plot plan and equipment layout, piping specifications, stress analysis, comprehensive 3D modelling, pipe rack planning and loading, civil load data coordination, nozzle orientation, MTO estimation, isometrics, and piping general arrangement (GA) drawings.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                Leveraging industry-leading tools such as AutoCAD, Aveva 3D modelling platforms, and Caesar II &mdash; together with our own proprietary in-house BOM processing software &mdash; we produce fully coordinated, clash-free, and execution-ready piping deliverables that minimize field rework, reduce project risk, and keep schedules on track. With engineers experienced from trainee to expert level, piping engineering is the discipline our clients rely on us for most.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl my-10 shadow-sm not-prose">
              <h3 className="text-2xl font-heading font-bold text-[#0A192F] dark:text-white mb-3">
                Supported Through Our Associate Network
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base">
                For the following disciplines, Invictus Engineering draws on a trusted network of experienced cross-functional associate professionals, ensuring clients receive fully integrated, multi-disciplinary engineering support without compromise:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#108A00] dark:text-[#4ADE80] mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-[#0A192F] dark:text-white">Process Engineering &mdash; </span>
                    <span className="text-gray-700 dark:text-gray-300">process flow diagrams (PFDs), P&amp;IDs, and mass/energy balances</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#108A00] dark:text-[#4ADE80] mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-[#0A192F] dark:text-white">Equipment Engineering &mdash; </span>
                    <span className="text-gray-700 dark:text-gray-300">equipment specification, sizing, and vendor drawing coordination</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#108A00] dark:text-[#4ADE80] mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-[#0A192F] dark:text-white">Instrumentation &amp; Electrical Engineering &mdash; </span>
                    <span className="text-gray-700 dark:text-gray-300">instrumentation datasheets, control philosophy, and electrical distribution design</span>
                  </div>
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400 italic text-sm border-t border-gray-100 dark:border-white/10 pt-4">
                This model lets us stay focused on doing what we do best &mdash; piping &mdash; while still offering clients a single point of accountability for the full engineering scope.
              </p>
            </div>
          </FadeUpBox>

          <FadeUpBox className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-[#0A192F] dark:text-white mb-4">
              Engineering Capabilities &amp; Deliverables Breakdown
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-8">
              Expand the sections below to view detailed breakdown of deliverables across each engineering discipline.
            </p>
          </FadeUpBox>

          <FadeUpBox className="space-y-4 max-w-5xl">
            <Accordion title="Process Engineering">
              {renderGrid(processList)}
            </Accordion>
            
            <Accordion title="Equipment Engineering">
              <div className="mb-6">
                <h4 className="text-xs font-black text-[#0A192F] dark:text-white mb-4 uppercase tracking-widest bg-gray-100 dark:bg-white/10 inline-block px-3 py-1 rounded-md">Equipment Types</h4>
                {renderGrid(equipmentList)}
              </div>
              <div>
                <h4 className="text-xs font-black text-[#0A192F] dark:text-white mb-4 uppercase tracking-widest bg-gray-100 dark:bg-white/10 inline-block px-3 py-1 rounded-md">Codes &amp; Standards</h4>
                {renderGrid(equipmentCodes)}
              </div>
            </Accordion>

            <Accordion title="Piping Engineering">
              {renderGrid(pipingList)}
            </Accordion>

            <Accordion title="Instrumentation Engineering">
              {renderGrid(instrumentationList)}
            </Accordion>

            <Accordion title="Automation">
              <p className="text-sm text-gray-500 mb-6 italic bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-white/10">Note: Automation capabilities delivered through our associate network.</p>
              {renderGrid(automationList)}
            </Accordion>

            <Accordion title="Electrical Engineering">
              {renderGrid(electricalList)}
            </Accordion>
          </FadeUpBox>

          <FadeUpBox delay={0.2} className="mt-20 p-10 bg-[#0A192F] rounded-3xl shadow-2xl text-center max-w-3xl mx-auto relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#108A00]/20 rounded-full blur-[90px]" />
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-4">Ready to start your project?</h3>
              <p className="text-gray-300 text-lg mb-8">Contact our engineering team to discuss your detail engineering requirements.</p>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-2xl bg-[#108A00] hover:bg-[#0C6B00] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-200">
                Discuss Your Scope <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeUpBox>

        </StaggerWrapper>
      </section>
    </div>
  );
}
