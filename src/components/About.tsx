"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Clock, 
  TrendingUp, 
  Globe2, 
  FileCheck2,
  PhoneCall
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function About() {
  const pillars = [
    {
      title: "Professional Industrial Buyer",
      description: "Direct procurement authority dealing with certified automotive dismantling centers, authorized ELV yards, corporate fleets, and regional scrap aggregators.",
      icon: Award,
    },
    {
      title: "100% Transparent Pricing",
      description: "Zero guessing or arbitrary grading. We evaluate every unit using certified Olympus handheld XRF spectrometry and catalogue matching for true PGM recovery value.",
      icon: TrendingUp,
    },
    {
      title: "Rapid Response & Logistics",
      description: "Get valuation quotes within 15–30 minutes via WhatsApp. Pan-India doorstep logistics coordination ensures fast pickup across all 28 states.",
      icon: Clock,
    },
    {
      title: "Trusted Global Exporter",
      description: "Direct supply pipeline to ISO-certified precious metal refineries across Europe and Asia, guaranteeing maximum value return to domestic suppliers.",
      icon: Globe2,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>About Ideal Import Exports</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
            India’s Premier Catalytic Converter Scrap Buyer & Exporter
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Headquartered in India, <strong className="text-slate-900 font-semibold">Ideal Import Exports</strong> is an industry-leading industrial trading and export house specializing in the recovery, assaying, and high-volume export of automotive catalytic converter scrap and precious metal catalysts.
          </p>
        </div>

        {/* 2-Column High End Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Card with Image & Live Proof */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 border border-slate-200 bg-slate-950">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="/images/about_xrf.jpg"
                  alt="Ideal Import Exports metallurgist conducting XRF spectrometry testing on catalytic converter honeycomb core"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              </div>

              {/* In-image Caption Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <FileCheck2 className="w-4 h-4" />
                    <span>Scientific Assay Protocol</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    Olympus XRF
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                  Handheld & benchtop XRF elemental analyzers measure precise parts-per-million (PPM) of Platinum, Palladium, and Rhodium.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl border border-slate-700 hidden sm:block">
              <span className="block text-3xl font-extrabold text-emerald-400 font-poppins">10+ Years</span>
              <span className="text-xs text-slate-300 font-medium">Metallurgy & Global Refining</span>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Core Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-poppins">
                Direct Refinery Connections. <br />
                <span className="text-emerald-700">Zero Intermediary Deductions.</span>
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Traditional scrap dealers often quote arbitrary flat rates and deduct steep margins. At Ideal Import Exports, we bridge domestic scrap recyclers directly with global precious metal smelters. We operate with strict metallurgical precision, ensuring suppliers are paid the authentic market value for every gram of recovered Platinum (Pt), Palladium (Pd), and Rhodium (Rh).
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-xs group-hover:border-emerald-400 group-hover:bg-emerald-500 transition-colors">
                      <Icon className="w-5 h-5 text-emerald-700 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-poppins mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, I would like to discuss selling catalytic converter scrap. Can we speak?")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat with Senior Valuer</span>
              </a>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm border border-slate-300 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-emerald-700" />
                <span>Call: {COMPANY.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
