export interface MaterialItem {
  id: string;
  title: string;
  category: string;
  description: string;
  pgmElements: string[];
  specs: string[];
  popularBrands: string[];
  badge: string;
}

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "catalytic-scrap",
    title: "Catalytic Converter Scrap",
    category: "Whole & De-canned Units",
    description: "Complete catalytic converter assemblies from passenger cars, commercial vehicles, and heavy-duty trucks. We buy uncut, piped, or de-canned lots at transparent grading values.",
    pgmElements: ["Platinum (Pt)", "Palladium (Pd)", "Rhodium (Rh)"],
    specs: ["Ceramic & Metallic substrates", "All OEM & aftermarket shells", "Single pieces to container loads"],
    popularBrands: ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota"],
    badge: "High Demand",
  },
  {
    id: "ceramic-catalysts",
    title: "Ceramic Catalysts",
    category: "Honeycomb Monolith",
    description: "High-grade ceramic honeycomb cores with high cordierite thermal resistance and concentrated washcoat loadings. We buy loose cores, halves, and pulverized catalytic biscuit.",
    pgmElements: ["Pt 1000-2500 ppm", "Pd 800-3000 ppm", "Rh 100-350 ppm"],
    specs: ["400/600 cpsi cell density", "XRF spectrometry testing", "Moisture & ash deduction transparency"],
    popularBrands: ["Corning", "NGK Insulators", "Faurecia", "Tenneco"],
    badge: "Direct Refinery Pricing",
  },
  {
    id: "metal-catalysts",
    title: "Metal Catalysts",
    category: "Metallic Foil Substrate",
    description: "Stainless steel and FeCrAl alloy metallic foil converters commonly extracted from turbocharged sport vehicles, high-flow motorsport systems, and European luxury models.",
    pgmElements: ["High Platinum / Rhodium Yield"],
    specs: ["Wound metallic corrugated foil", "Zero ceramic dust loss", "Premium scrap valuation"],
    popularBrands: ["Emitec", "Eberspächer", "Boysen", "Continental"],
    badge: "Top Value",
  },
  {
    id: "industrial-catalysts",
    title: "Industrial Catalysts",
    category: "Chemical & Petrochemical Beds",
    description: "Fixed-bed, spherical, and pelletized precious metal catalysts retired from petrochemical refineries, fertilizer plants, nitric acid manufacture, and pharmaceutical synthesis.",
    pgmElements: ["Platinum Gauze", "Palladium Carbon (Pd/C)", "Ruthenium Beds"],
    specs: ["Homogenized bulk lots", "Inductively Coupled Plasma (ICP) assay", "Certified hazardous transport"],
    popularBrands: ["BASF", "Johnson Matthey", "Haldor Topsoe", "Clariant"],
    badge: "Bulk Industrial Lots",
  },
  {
    id: "automotive-dpf-scr",
    title: "Automotive Catalytic Converters",
    category: "Euro 4 / 5 / 6 & BS-IV / BS-VI",
    description: "Modern exhaust emission systems including Diesel Particulate Filters (DPF), Selective Catalytic Reduction (SCR) bricks, and lean NOx traps with heavy precious metal loadings.",
    pgmElements: ["Heavy Platinum Washcoat", "High Rare-Earth Content"],
    specs: ["Silicon carbide (SiC) & Cordierite", "BS6 Stage 1 & 2 compliance units", "Commercial fleet scrap"],
    popularBrands: ["Ashok Leyland", "BharatBenz", "Volvo", "Scania", "Eicher"],
    badge: "Commercial Specialists",
  },
  {
    id: "precious-metal-components",
    title: "Precious Metal Components",
    category: "PGM Electronics & Sensors",
    description: "PGM-bearing industrial scrap including oxygen sensors (Lambda sensors), high-temperature thermocouple wires (Type S, R, B), spark plug tips, and electrical contacts.",
    pgmElements: ["Pure Pt/Rh Wire", "Palladium Plating", "Silver-Palladium Paste"],
    specs: ["Instant laboratory fire assay", "Accurate weight-based payment", "Traceability documentation"],
    popularBrands: ["Bosch", "Denso", "Delphi", "NGK / NTK"],
    badge: "Precision Assay",
  },
];
