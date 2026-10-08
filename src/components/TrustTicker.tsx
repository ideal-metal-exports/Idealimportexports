"use client";

import React from "react";
import { 
  ShieldCheck, 
  Truck, 
  Banknote, 
  Microscope, 
  Award, 
  Flame, 
  Scale, 
  Sparkles 
} from "lucide-react";

export default function TrustTicker() {
  const tickerItems = [
    { icon: Microscope, text: "Olympus & Horiba XRF Elemental Testing" },
    { icon: Banknote, text: "Instant RTGS / IMPS Bank Payouts" },
    { icon: Truck, text: "Insured Pan-India Doorstep Logistics" },
    { icon: Scale, text: "Calibrated Weight Bridges & Transparent Assay" },
    { icon: Award, text: "Direct European & Asian Refinery Channels" },
    { icon: ShieldCheck, text: "GST Invoiced & e-Way Bill Compliant" },
    { icon: Flame, text: "Ceramic Monolith & Metallic Foil Scrap" },
    { icon: Sparkles, text: "Platinum, Palladium & Rhodium Recovery" },
  ];

  return (
    <div className="bg-white border-y border-slate-200/80 py-4 overflow-hidden relative shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar py-1">
          {tickerItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center space-x-2.5 shrink-0 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3 text-emerald-700" />
                </div>
                <span className="text-xs font-semibold text-slate-800 tracking-tight whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
