import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import { COMPANY } from "@/data/company";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://idealimportexports.com"),
  title: {
    default: "Ideal Import Exports | South India's Trusted Catalytic Converter Scrap Buyer & Exporter",
    template: "%s | Ideal Import Exports",
  },
  description:
    "India's leading catalytic converter scrap buyer and authorized exporter. We purchase ceramic and metal honeycomb catalysts, DPF/SCR filters, and PGM components at top market rates. Instant XRF assay valuation, same-day payment, and pan-India pickup. Call +91 91645 31341.",
  keywords: [
    "catalytic converter scrap buyer India",
    "catalyst scrap exporter India",
    "catalytic converter scrap price India",
    "sell catalytic converter scrap",
    "ceramic honeycomb catalyst buyer",
    "metal catalytic converter scrap",
    "platinum palladium rhodium recovery India",
    "DPF scrap buyer India",
    "auto catalytic scrap recycling",
    "Ideal Import Exports",
    "catalyst scrap rates per kg",
  ],
  authors: [{ name: "Ideal Import Exports" }],
  creator: "Ideal Import Exports",
  publisher: "Ideal Import Exports",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://idealimportexports.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ideal Import Exports | South India's Trusted Catalytic Converter Scrap Buyer & Exporter",
    description:
      "We purchase catalytic converter scrap with transparent pricing, certified XRF assay, fast response, and same-day payment across India. WhatsApp +91 91645 31341.",
    url: "https://idealimportexports.com",
    siteName: "Ideal Import Exports",
    images: [
      {
        url: "/images/hero_warehouse.jpg",
        width: 1200,
        height: 630,
        alt: "Ideal Import Exports Catalytic Converter Scrap Warehouse",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Import Exports | Catalytic Converter Scrap Buyer & Exporter",
    description:
      "India's trusted catalytic converter scrap buyer. Top market rates, certified XRF testing, instant payouts, and pan-India logistics. Call +91 91645 31341.",
    images: ["/images/hero_warehouse.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RecyclingCenter"],
    name: COMPANY.name,
    description:
      "India's premier catalytic converter scrap buyer and authorized exporter. We purchase ceramic and metallic honeycomb catalyst scrap, commercial DPFs, and PGM components with instant XRF testing and same-day bank settlement.",
    image: "https://idealimportexports.com/images/hero_warehouse.jpg",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    url: "https://idealimportexports.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "All 28 States & Union Territories",
      streetAddress: "Industrial Scrap & Refining Corridor",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6139",
      longitude: "77.2090",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "₹₹₹₹",
    paymentAccepted: "Bank Transfer, RTGS, IMPS, NEFT",
    currenciesAccepted: "INR, USD, EUR",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      "https://wa.me/919164531341",
    ],
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-600 selection:text-white pb-14 sm:pb-0">
        {children}
        <FloatingWhatsApp />
        <MobileBottomBar />
      </body>
    </html>
  );
}
