"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  TrendingUp
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function Hero() {
  const trustPoints = [
    "NABL Certified Assay",
    "Instant RTGS / IMPS Bank Transfer",
    "Pan-India Pickup (All 28 States)",
  ];

  const quickStats = [
    { label: "Quote Speed", value: "15 Mins", sub: "WhatsApp Average", icon: Zap },
    { label: "Assay Accuracy", value: "99.8%", sub: "Olympus XRF Testing", icon: ShieldCheck },
    { label: "Bank Settlement", value: "Same-Day", sub: "Immediate RTGS / IMPS", icon: TrendingUp },
  ];

  return (
    <section id="home" className="relative bg-white text-slate-900 pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden border-b border-slate-100">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Blank Space Slot (Reserved for custom content / banner) */}
        <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl min-h-[40px] sm:min-h-[60px] mb-6 flex items-center justify-center">
          {/* Add your custom content or banner here */}
        </div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-poppins leading-[1.1] mb-6 max-w-4xl text-slate-950"
        >
          South India’s Trusted <br className="hidden sm:inline" />
          <span>Catalytic Converter</span>{" "}
          <span className="text-emerald-700">
            Scrap Buyer
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-600 font-normal max-w-3xl leading-relaxed mb-8"
        >
          We purchase catalytic converter scrap with transparent pricing, certified XRF assay valuation, and fast pan-India doorstep logistics.
        </motion.p>

        {/* Key Trust Checkpoints */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10 max-w-3xl"
        >
          {trustPoints.map((point, index) => (
            <div key={index} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">{point}</span>
            </div>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto mb-10"
        >
          {/* WhatsApp Button */}
          <a
            href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, I have catalytic converter scrap for sale. Please provide an instant quotation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
          >
            <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Get Quote on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Call Now Button */}
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-base transition-all duration-200 shadow-2xs"
          >
            <Phone className="w-5 h-5 text-emerald-700" />
            <span>Call Now: {COMPANY.phone}</span>
          </a>
        </motion.div>

        {/* 3 Clean Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
        >
          {quickStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 flex items-center space-x-3.5 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-950 font-poppins leading-none">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
