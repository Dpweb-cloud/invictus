export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  sector: string;
  scope: string;
  description: string;
  duration: string;
  headerImage: string;
  galleryImages: string[];
  highlights: string[];
  servicesUsed: string[];
}

export const projects: Project[] = [
  {
    slug: "gas-collecting-station-assam",
    title: "Gas Collecting Station",
    client: "ONGC",
    location: "Silchar, Assam, India",
    sector: "Oil & Gas",
    scope: "Grassroot Plant Engineering Project",
    duration: "Completed & Commissioned",
    description:
      "Engineering support for the development of a grassroot plant, covering complete piping and plant detail engineering activities from plot planning through commissioning support.",
    headerImage: "/images/projects/gas-collecting-station-1.jpg",
    galleryImages: [
      "/images/projects/gas-collecting-station-1.jpg",
      "/images/projects/gas-collecting-station-2.jpg",
      "/images/projects/gas-collecting-station-3.jpg",
    ],
    highlights: [
      "Plot Plan Development in accordance with applicable OISD requirements",
      "Equipment Layouts for various plant sections",
      "Piping Routing & Layout Development",
      "3D Plant Modelling and piping model development",
      "Piping Isometric Drawings and deliverables",
      "Bill of Materials (BOM) preparation",
      "Piping General Arrangement (GA) Drawings",
      "Vendor & Site Coordination for engineering and construction activities",
      "Commissioning Support during plant start-up",
      "As Built Drawings Preparation",
    ],
    servicesUsed: [
      "Plot Plan & OISD Compliance",
      "Equipment & Piping Layout",
      "3D Plant Modelling",
      "Isometric & GA Deliverables",
      "BOM Generation",
      "Commissioning & As-Built Support",
    ],
  },
  {
    slug: "solvent-recovery-plant-sun-pharma",
    title: "Solvent Recovery Plant",
    client: "Sun Pharma",
    location: "Panoli, Gujarat, India",
    sector: "Chemical",
    scope: "Detail Engineering & Unit Expansion",
    duration: "Completed & Commissioned",
    description:
      "Engineering support for the development of an additional process unit, covering equipment layout, piping design and detailed engineering deliverables.",
    headerImage: "/images/projects/solvent-recovery-1.jpg",
    galleryImages: [
      "/images/projects/solvent-recovery-1.jpg",
      "/images/projects/solvent-recovery-2.png",
      "/images/projects/solvent-recovery-3.png",
    ],
    highlights: [
      "Equipment Layout Development for the additional process unit",
      "Piping Routing & Layout optimization",
      "3D Plant & Piping Modelling",
      "Piping Specification Development",
      "Piping Stress Analysis",
      "Piping Isometric Drawings generation",
      "Bill of Materials (BOM) preparation",
      "Piping General Arrangement (GA) Drawings",
      "Vendor & Site Coordination for engineering and execution activities",
    ],
    servicesUsed: [
      "Equipment Layout Development",
      "3D Plant & Piping Modelling",
      "Piping Stress Analysis",
      "Piping Specification",
      "Isometrics & BOM",
    ],
  },
  {
    slug: "fuel-gas-conditioning-teg-dehydration",
    title: "Fuel Gas Conditioning & TEG Dehydration Package",
    client: "Process Group International (PGI), Abu Dhabi, UAE",
    location: "Turaif, Saudi Arabia",
    sector: "Oil & Gas",
    scope: "Piping Stress Analysis – Critical Systems",
    duration: "Completed & Commissioned",
    description:
      "Invictus Engineering executed comprehensive piping stress analysis for over 30 critical piping systems, involving high operating pressures and temperatures. The project presented multiple engineering challenges requiring detailed analysis and optimization of the piping support arrangements.",
    headerImage: "/images/projects/fuel-gas-conditioning-1.png",
    galleryImages: [
      "/images/projects/fuel-gas-conditioning-1.png",
      "/images/projects/fuel-gas-conditioning-2.jpg",
      "/images/projects/fuel-gas-conditioning-3.png",
    ],
    highlights: [
      "Stress Analysis of 30+ Critical Piping Systems",
      "Analysis of systems operating at critical pressures and temperatures",
      "Evaluation and resolution of complex piping flexibility and support challenges",
      "Optimization of piping support arrangements through rigorous engineering analysis",
      "Minimized the requirement for special supports and spring hangers",
      "Delivered safe, reliable and optimized piping systems while maintaining practical support arrangements",
    ],
    servicesUsed: [
      "CAESAR II Stress Analysis",
      "High Pressure / Temperature System Design",
      "Piping Flexibility Optimization",
      "Support & Spring Hanger Minimization",
      "Code Compliance & Documentation",
    ],
  },
  {
    slug: "lpg-import-terminal-jetty-bpcl",
    title: "LPG Import Terminal & Jetty",
    client: "BPCL",
    location: "Haldia, Kolkata, India",
    sector: "Oil & Gas",
    scope: "Fire Water & Jetty Piping Engineering",
    duration: "Completed & Commissioned",
    description:
      "Engineering support for the Fire Water Pump House, Fire Water Network and Jetty Pipeline, covering detailed piping engineering and project coordination from layout development through site execution.",
    headerImage: "/images/projects/lpg-import-terminal-1.jpg",
    galleryImages: [
      "/images/projects/lpg-import-terminal-1.jpg",
      "/images/projects/lpg-import-terminal-2.jpg",
    ],
    highlights: [
      "Engineering consultation for replacement of existing fire water pump with the new one and associated modifications",
      "Equipment Layout Development for the Fire Water Pump House",
      "Piping Routing & Layout for the fire water network and jetty pipeline",
      "3D Plant & Piping Modelling",
      "Piping Specification Development",
      "Piping Isometric Drawings",
      "Bill of Materials (BOM) preparation",
      "Piping General Arrangement (GA) Drawings",
      "Vendor & Site Coordination for engineering and execution activities",
    ],
    servicesUsed: [
      "Fire Water Pump House Layout",
      "Jetty Pipeline Design",
      "3D Modelling & Specifications",
      "Isometrics & GA Deliverables",
      "Site & Vendor Coordination",
    ],
  },
  {
    slug: "water-bath-heater-design-integraheat",
    title: "Water Bath Heater Design",
    client: "Integraheat Ltd.",
    location: "United Kingdom / Nigeria",
    sector: "Oil & Gas",
    scope: "Water Bath Heater – Design & Engineering",
    duration: "Completed & Commissioned",
    description:
      "Engineering support for the design and development of a Water Bath Heater, including critical component design, procurement support and integration with the existing plant facilities.",
    headerImage: "/images/projects/water-bath-heater-1.png",
    galleryImages: [
      "/images/projects/water-bath-heater-1.png",
      "/images/projects/water-bath-heater-2.jpg",
    ],
    highlights: [
      "Design & Development of Process Coil and Critical Components",
      "Detailed Engineering of Water Bath Heater Systems",
      "Procurement Support and Material Tracking",
      "Logistics Coordination and Delivery Tracking",
      "Tie-in Engineering for New Bath Heater Lines with Existing Plant Piping",
      "Site Coordination and Support for Tie-in Activities",
    ],
    servicesUsed: [
      "Process Coil & Component Design",
      "Detailed Heater Systems Engineering",
      "Procurement & Material Tracking",
      "Tie-in Engineering & Site Support",
    ],
  },
  {
    slug: "lp-steam-line-turbine-bilt",
    title: "LP Steam Line from EC2 Turbine to Paper Machine 1",
    client: "Bilt Graphic Paper Products Ltd.",
    location: "Bhigwan, Pune, India",
    sector: "Power",
    scope: "14\" LP Steam Line – Engineering & Stress Analysis",
    duration: "Completed & Commissioned",
    description:
      "Engineering support for the design and development of a new 14\" LP Steam Line from the EC2 Turbine to Paper Machine 1, including routing, line sizing and detailed stress analysis.",
    headerImage: "/images/projects/lp-steam-line-1.jpg",
    galleryImages: [
      "/images/projects/lp-steam-line-1.jpg",
      "/images/projects/lp-steam-line-2.jpg",
    ],
    highlights: [
      "P&ID Development and Line Sizing",
      "New LP Steam Line Routing through Existing Pipe Racks and Units",
      "Site Surveys and Multiple Site Visits for Existing Plant Assessment",
      "Piping Stress Analysis of approximately 500 m long Steam Line",
      "Tie-in Engineering with the Existing Steam System",
      "Engineering Support for Tie-in Execution within a Minimum Shutdown Window",
      "Resolution of Routing and Execution Challenges within the Existing Plant",
    ],
    servicesUsed: [
      "P&ID & Line Sizing",
      "Pipe Rack Routing",
      "500m Line Stress Analysis",
      "Tie-in & Minimum Shutdown Support",
    ],
  },
];

export const clients = [
  { name: "ONGC", logo: "/Photo/Client Logos/ONGC.png", testimonialQuote: "Exceptional engineering support for our critical projects.", testimonialAuthor: "Engineering Director" },
  { name: "BPCL", logo: "/Photo/Client Logos/Bharat_Petroleum-Logo.wine.png", testimonialQuote: "Delivered fire water and jetty piping engineering with top-notch accuracy.", testimonialAuthor: "Senior Project Lead" },
  { name: "Bilt Graphic Paper Products Ltd.", logo: "/images/clients/new-client-logo.png", testimonialQuote: "Flawless stress analysis and tie-in engineering for our LP steam line within tight shutdown windows.", testimonialAuthor: "Plant Operations Lead" },
  { name: "EIL", logo: "/Photo/Client Logos/EIL2.png", testimonialQuote: "Reliable and technically sound detail engineering partner.", testimonialAuthor: "Project Manager" },
  { name: "PRAJ", logo: "/Photo/Client Logos/PRAJ.jpg", testimonialQuote: "Delivered our piping layout and 3D modeling on schedule.", testimonialAuthor: "Lead Engineer" },
  { name: "thyssenkrupp", logo: "/Photo/Client Logos/thyssenkrupp_logo.png", testimonialQuote: "A highly capable team for stress analysis and design.", testimonialAuthor: "Technical Lead" },
  { name: "Sopan", logo: "/Photo/Client Logos/Sopan.png" },
  { name: "Fenix", logo: "/Photo/Client Logos/fenix1.png" },
  { name: "FlareTec", logo: "/Photo/Client Logos/FlareTec.jpg" },
  { name: "Reliance Industries", logo: "/Photo/Client Logos/RIL.jpg" },
  { name: "SUEZ", logo: "/Photo/Client Logos/suez.png" },
  { name: "PGI (Process Group International)", logo: "/Photo/Client Logos/PGI1.jpg" },
  { name: "Integraheat Ltd. / IFAB", logo: "/Photo/Client Logos/ifab.png" },
  { name: "Tooltech", logo: "/Photo/Client Logos/Tooltech.jpg" },
  { name: "Kamal Oil", logo: "/Photo/Client Logos/kamal oil.jpg" },
  { name: "Willbo", logo: "/Photo/Client Logos/Willbo.png" },
];
