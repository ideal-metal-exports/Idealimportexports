export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Step 1",
    number: "01",
    title: "Send Photos & Serial Codes",
    description: "Snap clear photos of the converter body, serial number stamps, and honeycomb condition. Share them via WhatsApp or email.",
    detail: "WhatsApp +91 91645 31341 for immediate queue priority.",
    iconName: "Camera",
  },
  {
    step: "Step 2",
    number: "02",
    title: "Receive Instant Scientific Quote",
    description: "We cross-reference our global database of 20,000+ OEM catalyst codes and live PGM market rates to give you an accurate, maximum payout price.",
    detail: "Quotes generated in under 15–30 minutes.",
    iconName: "FileSpreadsheet",
  },
  {
    step: "Step 3",
    number: "03",
    title: "Approve Deal & Rate Lock",
    description: "Once you approve the quotation, we lock the valuation price against daily precious metal spot fluctuations to protect your profit.",
    detail: "Guaranteed locked rate with no renegotiation tricks.",
    iconName: "CheckCircle",
  },
  {
    step: "Step 4",
    number: "04",
    title: "Pan-India Pickup / Drop-off",
    description: "We coordinate door-to-door insured logistics pickup across any Indian pin code, or you can drop materials directly at our secure industrial yards.",
    detail: "e-Way bill generation and transit insurance included.",
    iconName: "Truck",
  },
  {
    step: "Step 5",
    number: "05",
    title: "Instant Bank Payment",
    description: "Upon verification or physical weight tally, we disburse 100% of the funds via RTGS / IMPS / NEFT immediately. Transparent, secure, and fast.",
    detail: "Same-day electronic bank transfer to your account.",
    iconName: "CreditCard",
  },
];
