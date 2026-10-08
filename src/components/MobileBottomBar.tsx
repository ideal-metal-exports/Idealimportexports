"use client";

import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        className="flex-1 flex items-center justify-center space-x-2 py-3 px-3 bg-slate-900 active:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs"
      >
        <Phone className="w-4 h-4 text-emerald-400" />
        <span>Call Now</span>
      </a>

      <a
        href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, I have catalytic converter scrap to sell. Please provide a quote.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center space-x-2 py-3 px-3 bg-[#25D366] active:bg-[#20ba5a] text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/30"
      >
        <FaWhatsapp className="w-4 h-4" />
        <span>WhatsApp Quote</span>
      </a>
    </div>
  );
}
