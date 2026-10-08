export const COMPANY = {
  name: "Ideal Import Exports",
  tagline: "South India's Trusted Catalytic Converter Scrap Buyer & Exporter",
  phone: "+91 91645 31341",
  phoneRaw: "+919164531341",
  email: "idealimportexports@gmail.com",
  country: "India",
  serviceArea: "Pan-India (All 28 States & UTs)",
  hours: "Monday – Saturday: 9:00 AM – 8:00 PM IST (WhatsApp Available 24/7)",
  address: "Industrial Scrap & Refining Corridor, India",
  whatsappUrl: "https://wa.me/919164531341",
  getWhatsAppQuoteUrl: (msg?: string) => {
    const text = msg 
      ? encodeURIComponent(msg)
      : encodeURIComponent("Hello Ideal Import Exports, I have catalytic converter scrap to sell. Please provide your current buying rates.");
    return `https://wa.me/919164531341?text=${text}`;
  },
  established: "2014",
  stats: {
    tonsPurchased: "1,500+",
    clientsServed: "4,200+",
    yearsExperience: "10+",
    turnaroundTime: "15 Mins",
    settlementSpeed: "Same-Day",
  }
};
