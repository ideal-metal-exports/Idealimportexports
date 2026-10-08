export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  review: string;
  volume: string;
  avatarInitials: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rajeshwar Sharma",
    role: "Managing Director",
    company: "Sharma Auto Recyclers Pvt. Ltd.",
    location: "Mayapuri, Delhi NCR",
    rating: 5,
    review: "We have supplied over 18 metric tons of catalytic scrap to Ideal Import Exports over the last 3 years. Their transparent XRF testing and prompt RTGS payments set them leagues ahead of traditional scrap middlemen. The locked WhatsApp quotes give us complete peace of mind.",
    volume: "18+ Tons Supplied",
    avatarInitials: "RS",
  },
  {
    id: "t2",
    name: "Vikram Deshmukh",
    role: "Head of Operations",
    company: "Apex Fleet Dismantling & Salvage",
    location: "Pune, Maharashtra",
    rating: 5,
    review: "When decommissioning BS-IV and Euro 5 commercial truck silencers, determining fair PGM value used to be difficult. Ideal Import Exports provided serial code-matched pricing in literally 20 minutes on WhatsApp and coordinated door-to-door transport with zero hassle.",
    volume: "850+ Converters",
    avatarInitials: "VD",
  },
  {
    id: "t3",
    name: "K. Subramanian",
    role: "Proprietor",
    company: "Subramanian Metal & Alloy Traders",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    review: "Exceptional honesty and professional conduct. Their assay results matched our independent lab tests with 99.8% precision. Immediate electronic bank settlement as soon as the material was weighed at their facility. Truly a world-class exporter.",
    volume: "5+ Metric Tons",
    avatarInitials: "KS",
  },
  {
    id: "t4",
    name: "Gurpreet Singh",
    role: "Partner",
    company: "Northern Industrial Salvage Corp.",
    location: "Ludhiana, Punjab",
    rating: 5,
    review: "Best market rates in northern India without question. We had a mixed container of ceramic monoliths and metallic foil units. They evaluated each category transparently and wired the total payment the exact same evening. Highly recommended!",
    volume: "12+ Tons Annual",
    avatarInitials: "GS",
  },
  {
    id: "t5",
    name: "Siddharth Patel",
    role: "Technical Director",
    company: "Gujarat Eco-Metals Recycling",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review: "As an authorized ELV (End-of-Life Vehicle) scrapping facility, compliance and documentation are critical for us. Ideal Import Exports provides complete GST bills, manifest records, and top dollar for high-palladium Japanese catalytic cores.",
    volume: "2,400+ Units",
    avatarInitials: "SP",
  },
];
