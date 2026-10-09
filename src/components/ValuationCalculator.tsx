"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Phone 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function ValuationCalculator() {
  const [materialType, setMaterialType] = useState("Ceramic Monolith Converter");
  const [vehicleOrigin, setVehicleOrigin] = useState("Indian OEM (Maruti / Hyundai / Tata / Mahindra)");
  const [lotQuantity, setLotQuantity] = useState("6 - 20 Units");
  const [serialCode, setSerialCode] = useState("");
  const [sellerCity, setSellerCity] = useState("");

  const materialOptions = [
    "Ceramic Monolith Converter",
    "Metallic Foil Matrix Converter",
    "Commercial DPF / SCR Truck Filter",
    "Loose Biscuit / Broken Honeycomb",
    "Industrial Petrochemical Catalyst Bed",
    "Precious Metal Oxygen Sensor / Wire",
  ];

  const originOptions = [
    "Indian OEM (Maruti / Hyundai / Tata / Mahindra)",
    "Japanese (Toyota / Honda / Nissan / Denso)",
    "European Luxury (VW / BMW / Mercedes / Audi)",
    "Commercial Heavy Duty (Ashok Leyland / BharatBenz / Volvo)",
    "Industrial / Petrochemical Batch",
  ];

  const quantityOptions = [
    "1 - 5 Units (Sample Lot)",
    "6 - 20 Units (Workshop Lot)",
    "21 - 50 Units (Aggregator Batch)",
    "50+ Units / Bulk Kilograms",
    "1+ Metric Ton (Container Load)",
  ];

  // Dynamic WhatsApp prefilled message
  const generateMessage = () => {
    let msg = `Hello Ideal Import Exports, I want an instant valuation quote for my scrap lot:\n\n`;
    msg += `• Material Type: ${materialType}\n`;
    msg += `• Origin / Category: ${vehicleOrigin}\n`;
    msg += `• Estimated Quantity: ${lotQuantity}\n`;
    if (serialCode.trim()) {
      msg += `• Serial Code / Number: ${serialCode.trim()}\n`;
    }
    if (sellerCity.trim()) {
      msg += `• Location / City: ${sellerCity.trim()}\n`;
    }
    msg += `\nPlease reply with your current best buying rate and pickup timeline.`;
    return msg;
  };

  const whatsappLink = COMPANY.getWhatsAppQuoteUrl(generateMessage());

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Quote Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
            Instant Scrap Valuation Tool
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Select your scrap material details below to instantly generate a tailored valuation request directly on WhatsApp.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Controls */}
            <div className="space-y-5">
              
              {/* Step 1: Material Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Scrap Material Type
                </label>
                <select
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                >
                  {materialOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Vehicle Origin */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Vehicle / Origin Category
                </label>
                <select
                  value={vehicleOrigin}
                  onChange={(e) => setVehicleOrigin(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                >
                  {originOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Quantity */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Approximate Lot Quantity
                </label>
                <select
                  value={lotQuantity}
                  onChange={(e) => setLotQuantity(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                >
                  {quantityOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 4: Optional Serial Code & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Serial Code (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1K0 131 701"
                    value={serialCode}
                    onChange={(e) => setSerialCode(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru, Mumbai"
                    value={sellerCity}
                    onChange={(e) => setSellerCity(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>

            </div>

            {/* Right Summary & Instant Trigger */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    Valuation Summary
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                    Live Rate Ready
                  </span>
                </div>

                {/* Selected Details Preview */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-500">Material:</span>
                    <span className="font-semibold text-slate-900 text-right">{materialType}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-500">Category:</span>
                    <span className="font-semibold text-slate-900 text-right truncate max-w-[190px]">{vehicleOrigin}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-500">Volume:</span>
                    <span className="font-semibold text-emerald-700 text-right">{lotQuantity}</span>
                  </div>
                  {sellerCity && (
                    <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                      <span className="text-slate-500">Pickup In:</span>
                      <span className="font-semibold text-slate-900 text-right">{sellerCity}</span>
                    </div>
                  )}
                  {serialCode && (
                    <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                      <span className="text-slate-500">Serial Stamp:</span>
                      <span className="font-mono text-emerald-700 font-semibold text-right">{serialCode}</span>
                    </div>
                  )}
                </div>

                {/* Features guaranteed */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 mb-6 shadow-2xs">
                  <div className="flex items-center space-x-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Same-day payment via RTGS/IMPS</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Pan-India insured courier / truck pickup</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2.5 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Send Details on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Prefer Calling? Dial {COMPANY.phone}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
