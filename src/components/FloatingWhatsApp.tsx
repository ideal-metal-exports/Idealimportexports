"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Quick Support" className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-50 flex items-end flex-col">

      {/* Floating WhatsApp Button */}
      <a
        href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, I have catalytic converter scrap to sell. Please provide a quote.")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" />

        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
