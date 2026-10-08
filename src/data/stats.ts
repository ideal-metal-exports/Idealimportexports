export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

export const STATS_DATA: StatItem[] = [
  {
    id: "tons",
    value: 1500,
    suffix: "+",
    label: "Tons Purchased",
    description: "Catalyst scrap processed and refined across India",
  },
  {
    id: "clients",
    value: 4200,
    suffix: "+",
    label: "Verified Partners",
    description: "Automotive dismantlers, workshops, and scrap dealers",
  },
  {
    id: "experience",
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Dedicated industrial precious metals recovery & export",
  },
  {
    id: "states",
    value: 28,
    suffix: " States",
    label: "Pan-India Coverage",
    description: "Insured logistics and direct pickup hubs nationwide",
  },
  {
    id: "speed",
    value: 15,
    suffix: " Mins",
    label: "Avg. WhatsApp Quote",
    description: "Rapid serial code valuation response time",
  },
  {
    id: "payout",
    value: 100,
    suffix: "%",
    label: "Fast Payment Rate",
    description: "Instant RTGS / IMPS settlement upon verification",
  },
];
