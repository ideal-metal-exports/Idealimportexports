"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Flame, 
  Disc, 
  Cpu, 
  Factory, 
  Truck, 
  Layers 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MATERIALS_DATA } from "@/data/materials";
import { COMPANY } from "@/data/company";

export default function WhatWeBuy() {
  const getIcon = (id: string) => {
    switch (id) {
      case "catalytic-scrap":
        return Layers;
      case "ceramic-catalysts":
        return Disc;
      case "metal-catalysts":
        return Flame;
      case "industrial-catalysts":
        return Factory;
      case "automotive-dpf-scr":
        return Truck;
      case "precious-metal-components":
        return Cpu;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="materials" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Materials Purchased</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
            What We Buy Across India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            We purchase complete assemblies, loose monoliths, and industrial batches with transparent scrap payouts guaranteed.
          </p>
        </div>

        {/* 6 Grid Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MATERIALS_DATA.map((item, index) => {
            const Icon = getIcon(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group shadow-2xs hover:shadow-md hover:border-emerald-500 transition-all duration-200"
              >
                <div>
                  {/* Top Header & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-200">
                      <Icon className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wide">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-poppins group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom WhatsApp Button Trigger */}
                <div className="pt-2">
                  <a
                    href={COMPANY.getWhatsAppQuoteUrl(`Hello Ideal Import Exports, I want to sell ${item.title} (${item.category}). Please provide your current rate.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-emerald-600 text-slate-800 hover:text-white text-xs font-bold border border-slate-200 hover:border-emerald-600 transition-all duration-200 group-btn cursor-pointer"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
                    <span>Inquire Rate for {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast Info Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-950 font-poppins">
              Have loose honeycomb biscuit, pulverized dust, or mixed scrap lots?
            </h4>
            <p className="text-sm text-slate-600">
              We provide full homogenization and lab fire-assay sampling for custom industrial batches.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, I have a mixed or custom catalyst scrap lot. How can we arrange a lab sample assay?")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs flex items-center space-x-2 transition-all cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Request Custom Lot Assay</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
