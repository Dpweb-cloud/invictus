"use client";

import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export interface DeliverableItem {
  title: string;
  docUrl?: string;
}

const deliverables: DeliverableItem[] = [
  { title: "Plant Layout / Plot Plan", docUrl: "/sample-documentation/Plot Plan.pdf" },
  { title: "Equipment Layout", docUrl: "/sample-documentation/Equipment Layout.pdf" },
  { title: "Piping Material Specification", docUrl: "/sample-documentation/Piping Material Specification.pdf" },
  { title: "Nozzle Orientation", docUrl: "/sample-documentation/Nozzle Orientation.pdf" },
  { title: "Stress Analysis", docUrl: "/sample-documentation/Stress Analysis Report.pdf" },
  { title: "3D Modeling" },
  { title: "Piping Layout / GA", docUrl: "/sample-documentation/Piping GA.pdf" },
  { title: "Piping Isometrics", docUrl: "/sample-documentation/Isometrics.pdf" },
  { title: "Material Take Off (MTO)", docUrl: "/sample-documentation/Material Take Off.pdf" },
  { title: "Tie-In / Battery Limit Drawings", docUrl: "/sample-documentation/Battery Limit Drawing.pdf" },
  { title: "Civil Information Drawings", docUrl: "/sample-documentation/Civil Information Drawing.pdf" },
  { title: "Pipe Rack Planning" },
  { title: "Underground Coordination", docUrl: "/sample-documentation/Underground Coordination Plan.pdf" },
  { title: "Area Division Drawings", docUrl: "/sample-documentation/Area Division Drawing.pdf" },
  { title: "As-Built 3D Models" },
  { title: "Site Construction Support" },
  { title: "Procurement / Vendor Support" },
];

export function PipingDeliverablesList() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3.5 gap-x-6">
        {deliverables.map((item, idx) => {
          if (item.docUrl) {
            return (
              <a
                key={idx}
                href={encodeURI(item.docUrl)}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open sample document: ${item.title}`}
                className="group flex items-start text-left focus:outline-none"
              >
                <CheckCircle2 className="h-4 w-4 text-[#108A00] mt-1 mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 dark:text-gray-200 font-medium text-sm group-hover:text-[#108A00] dark:group-hover:text-[#38DF25] transition-colors inline-flex items-center gap-1.5 flex-wrap">
                  <span>{item.title}</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#108A00]/10 text-[#0E7A00] dark:bg-[#108A00]/20 dark:text-[#42E62F] inline-flex items-center gap-0.5 group-hover:bg-[#108A00] group-hover:text-white transition-colors">
                    PDF <ArrowUpRight className="h-2.5 w-2.5" />
                  </span>
                </span>
              </a>
            );
          }

          return (
            <div key={idx} className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-[#108A00] mt-1 mr-2 shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
