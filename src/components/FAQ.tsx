"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FAQS_DATA } from "@/data/faqs";
import { COMPANY } from "@/data/company";

export default function FAQ() {
  const [openId, setOpenId] = useState<string>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "pricing", label: "Pricing & Assay" },
    { key: "pickup", label: "Pan-India Pickup" },
    { key: "payment", label: "Payments & Speed" },
    { key: "materials", label: "Materials & Minimums" },
    { key: "compliance", label: "GST & Compliance" },
  ];

  const filteredFaqs = activeCategory === "all"
    ? FAQS_DATA
    : FAQS_DATA.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
            Transparent Answers to Your Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Everything you need to know about our valuation methodology, pan-India logistics, instant payouts, and material grades.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-slate-950 text-white shadow-2xs"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-2xs overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 font-poppins pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-emerald-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Question WhatsApp Bar */}
        <div className="mt-14 max-w-xl mx-auto text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-2xs">
          <p className="text-sm font-semibold text-slate-800">
            Have a question about a specific converter code or custom lot?
          </p>
          <a
            href={COMPANY.getWhatsAppQuoteUrl("Hello Ideal Import Exports, I have a specific question about selling my catalytic scrap:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-600" />
            <span>Ask Us Directly on WhatsApp (+91 91645 31341)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
