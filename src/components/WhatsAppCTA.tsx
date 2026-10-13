"use client";

import React from "react";
import { 
  Clock, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function WhatsAppCTA() {
  const whatsappSteps = [
    {
      num: "1",
      title: "Take Clear Photos",
      desc: "Photograph the converter body, serial numbers stamped on the casing, and honeycomb opening.",
    },
    {
      num: "2",
      title: "Send to WhatsApp",
      desc: "Message our valuation team at +91 91645 31341 with the photos and your city location.",
    },
    {
      num: "3",
      title: "Receive Estimate",
      desc: "Our assay team cross-references the codes and delivers a guaranteed quotation in 15 minutes.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-xs">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <FaWhatsapp className="w-4 h-4 text-emerald-600" />
            <span>Fast-Track Valuation Desk</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
              Need a Quick Quote?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Send photos of your catalytic converter scrap and receive a fast estimate directly on WhatsApp.
            </p>
          </div>

          {/* 3 Steps Mini Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left py-2">
            {whatsappSteps.map((step) => (
              <div 
                key={step.num}
                className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs hover:border-emerald-300 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold font-mono text-sm flex items-center justify-center border border-emerald-200">
                  {step.num}
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-poppins">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            
            {/* Green WhatsApp Button */}
            <a
              href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, here are photos of my catalytic converter scrap. Please provide an estimate:")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xs hover:shadow-sm transition-all duration-200 group cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Get Instant Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Bottom Trust Notice */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              Replies within 15 minutes
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              No obligation free quote
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
