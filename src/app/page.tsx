import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroOverview from "@/components/HeroOverview";
import WhatWeBuy from "@/components/WhatWeBuy";
import ValuationCalculator from "@/components/ValuationCalculator";
import FAQ from "@/components/FAQ";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section (Image only) */}
      <Hero />

      {/* 2.5. Overview / Trust & CTA Section */}
      <HeroOverview />

      {/* 3. What We Buy (Services / Materials) */}
      <WhatWeBuy />

      {/* 4. Interactive Valuation Estimator Tool */}
      <ValuationCalculator />

      {/* 6. FAQ (Accordion) */}
      <FAQ />

      {/* 8. WhatsApp CTA Section */}
      <WhatsAppCTA />

      {/* 9. Contact Section */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
