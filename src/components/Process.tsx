"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Camera, 
  FileSpreadsheet, 
  CheckCircle, 
  Truck, 
  CreditCard, 
  ShieldCheck
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/processSteps";
import { COMPANY } from "@/data/company";

export default function Process() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Camera":
        return Camera;
      case "FileSpreadsheet":
        return FileSpreadsheet;
      case "CheckCircle":
        return CheckCircle;
      case "Truck":
        return Truck;
      case "CreditCard":
        return CreditCard;
      default:
        return CheckCircle;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Seamless 5-Step Settlement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
            How Our Selling Process Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            From photo appraisal to instant bank transfer, we make selling catalytic converter scrap transparent and fast.
          </p>
        </div>

        {/* 5-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(step.iconName);
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between relative group shadow-2xs hover:shadow-md hover:border-emerald-500 transition-all duration-200"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                      {step.step}
                    </span>
                    <span className="text-2xl font-extrabold font-poppins text-slate-300 group-hover:text-emerald-500 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 font-poppins mb-2 group-hover:text-emerald-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Step Micro Detail Badge */}
                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span>{step.detail}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Step 1 Quick Trigger CTA */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs space-y-4">
          <div className="text-sm font-semibold text-slate-800">
            Ready to initiate Step 1 right now?
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, here are photos and serial codes of my catalytic converter scrap for Step 1 valuation:")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>Send Photos via WhatsApp (+91 91645 31341)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
