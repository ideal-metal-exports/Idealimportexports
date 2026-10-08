"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { COMPANY } from "@/data/company";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp Quick Support" className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-50 flex items-end flex-col">
      {/* Clean Tooltip Message Bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-[220px] bg-white text-slate-800 text-xs p-3.5 rounded-2xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300 relative group">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-200 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center space-x-1.5 text-emerald-700 font-bold text-[11px] mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Online | 15-Min Quote</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-snug">
            Send photos of your catalytic converter scrap for instant valuation!
          </p>
        </div>
      )}

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
