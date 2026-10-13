"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function HeroOverview() {
  const trustPoints = [
    "NABL Certified Assay",
    "Instant RTGS / IMPS Bank Transfer",
    "Pan-India Pickup (All 28 States)",
  ];

  return (
    <section className="relative bg-white text-slate-900 pt-8 pb-20 sm:pt-12 sm:pb-24 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-xl text-slate-600 font-normal max-w-3xl leading-relaxed mb-8"
        >
          We purchase catalytic converter scrap with transparent pricing, certified XRF assay valuation, and fast pan-India doorstep logistics.
        </motion.p>

        {/* Key Trust Checkpoints */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto"
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

      </div>
    </section>
  );
}
