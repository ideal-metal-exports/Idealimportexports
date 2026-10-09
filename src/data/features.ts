export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlight: string;
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "best-rates",
    title: "Best Market Rates",
    tagline: "Live International Market Peg",
    description: "Our purchase prices are benchmarked live to London Platinum and Palladium Market (LPPM) daily fixes, ensuring you get maximum scrap yield without middleman margins.",
    iconName: "TrendingUp",
    highlight: "Live PGM Index",
  },
  {
    id: "honest-pricing",
    title: "Honest Pricing",
    tagline: "Certified XRF Spectrometry",
    description: "Transparent grading with handheld and benchtop Olympus / Horiba XRF analyzers. Every PPM (parts per million) of Pt, Pd, and Rh is measured right in front of you.",
    iconName: "ShieldCheck",
    highlight: "Zero Secret Markdowns",
  },
  {
    id: "fast-payments",
    title: "Fast Payments",
    tagline: "Immediate Bank Transfer (RTGS / IMPS)",
    description: "We disburse funds immediately upon weight and assay approval. No lengthy credit cycles or payment delays—funds reflect in your registered bank account in minutes.",
    iconName: "Zap",
    highlight: "Same-Day Settlements",
  },
  {
    id: "quick-response",
    title: "Quick Response",
    tagline: "15-Minute WhatsApp Turnaround",
    description: "Simply share serial numbers and clear photos of converter codes on WhatsApp. Our scrap valuation desk evaluates catalogue references in 15–30 minutes.",
    iconName: "Clock",
    highlight: "Instant WhatsApp Valuations",
  },
  {
    id: "bulk-purchase",
    title: "Bulk Purchase",
    tagline: "Small Lots to 20-Ton Containers",
    description: "Whether you have 5 sample pieces from a local garage or multiple metric tons from an authorized dismantling yard, our liquid capital supports any lot size.",
    iconName: "Layers",
    highlight: "Unlimited Capacity",
  },
  {
    id: "professional-team",
    title: "Professional Team",
    tagline: "10+ Years Metallurgy Experience",
    description: "Our dedicated team of chemical engineers, certified assayers, and logistics specialists ensures seamless handling, de-canning, and customs export compliance.",
    iconName: "Users",
    highlight: "Certified Metallurgists",
  },
  {
    id: "trusted-exporter",
    title: "Trusted Exporter",
    tagline: "Global Export Network",
    description: "As an established Indian exporter supplying refining conglomerates in Europe and Asia, we adhere to strict environmental safety and international export standards.",
    iconName: "Globe",
    highlight: "Global Refinery Channels",
  },
  {
    id: "safe-transactions",
    title: "Safe Transactions",
    tagline: "Full Documentation & Pan-India Insured Logistics",
    description: "Complete legal compliance with GST invoicing, e-Way bills, manifest records, and insured door-to-door transit coverage across all 28 states.",
    iconName: "Lock",
    highlight: "100% Insured Transit",
  },
];
