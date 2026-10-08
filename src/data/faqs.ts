export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "pricing" | "pickup" | "payment" | "materials" | "compliance";
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do you calculate the scrap price of a catalytic converter?",
    answer: "Every catalytic converter contains varying ratios of Platinum (Pt), Palladium (Pd), and Rhodium (Rh). We price units either by matching the stamped manufacturer OEM code against our international database of over 20,000 verified catalyst assays, or by conducting on-site handheld XRF spectrometry. This price is directly linked to the live London Platinum and Palladium Market (LPPM) spot exchange, ensuring you receive true refinery value.",
    category: "pricing",
  },
  {
    id: "faq-2",
    question: "Do you buy loose ceramic dust, damaged honeycomb cores, or only complete catalytic units?",
    answer: "We purchase all conditions! This includes complete uncut assemblies, canned converters with pipes cut flush, hollowed ceramic honeycomb chunks, crushed biscuit, and milled catalyst dust. For loose cores and dust batches, we homogenize the sample and perform a precise XRF or fire assay to determine the exact PGM parts-per-million (PPM).",
    category: "materials",
  },
  {
    id: "faq-3",
    question: "How does Pan-India pickup work for sellers outside your primary hub?",
    answer: "We offer comprehensive pan-India logistics coverage across all 28 states and Union Territories. For small to medium quantities (10 to 100 units), we provide insured doorstep pickup via our logistics partners. For large commercial scrap volumes (500+ units or metric tons), our dedicated logistics fleet coordinates direct pickup from your scrap yard with full transit insurance and e-Way billing.",
    category: "pickup",
  },
  {
    id: "faq-4",
    question: "How quickly do I receive payment for my scrap material?",
    answer: "We operate on a strict instant payment policy. Once your converters or catalyst cores are physically received and verified against the agreed serial codes or weight tally, 100% of the payment is disbursed immediately via RTGS, IMPS, or NEFT bank transfer before the material is released into processing.",
    category: "payment",
  },
  {
    id: "faq-5",
    question: "What is the minimum quantity of catalytic converters you purchase?",
    answer: "We cater to suppliers of all sizes. For local workshops, garages, and dismantlers, we accept lots as small as 5 to 10 units. For commercial aggregators, recycling yards, and industrial petrochemical plants, we handle multi-ton container shipments.",
    category: "materials",
  },
  {
    id: "faq-6",
    question: "Can individual vehicle owners or unorganized scrap collectors sell to you?",
    answer: "Yes. While we regularly service corporate automotive dismantlers and large recycling companies, we also purchase from individual mechanics, garages, and scrap collectors with valid government ID proof (Aadhaar / PAN) in compliance with Indian scrap acquisition regulations.",
    category: "compliance",
  },
  {
    id: "faq-7",
    question: "How can I get an instant price estimate right now?",
    answer: "The fastest method is WhatsApp! Simply take clear photos showing the serial code stamped on the metal casing and the ceramic honeycomb opening, then message our direct desk at +91 91645 31341. Our valuation team will reply with your exact price within 15 to 30 minutes.",
    category: "pricing",
  },
  {
    id: "faq-8",
    question: "Do you provide GST invoices and legal disposal documentation?",
    answer: "Yes, Ideal Import Exports is a fully compliant Indian corporate entity. We issue official GST tax invoices, formal weight bridge slips, e-Way bills, and certificate of recycling/destruction documentation required by authorized ELV (End-of-Life Vehicle) scrapping centers.",
    category: "compliance",
  },
];
