"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Layers, 
  Users, 
  Globe, 
  Lock, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FEATURES_DATA } from "@/data/features";
import { COMPANY } from "@/data/company";

export default function WhyChooseUs() {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return TrendingUp;
      case "ShieldCheck":
        return ShieldCheck;
      case "Zap":
        return Zap;
      case "Clock":
        return Clock;
      case "Layers":
        return Layers;
      case "Users":
        return Users;
      case "Globe":
        return Globe;
      case "Lock":
        return Lock;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Industrial Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-poppins tracking-tight">
            Why Choose Ideal Import Exports
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Eliminating traditional scrap opacity with scientific assaying, direct refinery liquidity, and guaranteed rapid settlement across India.
          </p>
        </div>

        {/* 8 Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = getFeatureIcon(feature.iconName);
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="rounded-3xl bg-slate-950/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-slate-950 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl shadow-black/40"
              >
                <div>
                  {/* Top Bar with Icon & Highlight Pill */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/50 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-md">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-white font-poppins group-hover:text-emerald-300 transition-colors mb-1">
                    {feature.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {feature.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Micro accent */}
                <div className="pt-4 mt-4 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Certified Standard</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <a
            href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, I am interested in partnering with you as a regular scrap supplier.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/40 transition-all duration-300 group"
          >
            <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Join Our Pan-India Supplier Network</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
