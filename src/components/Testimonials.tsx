"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Building, 
  MapPin, 
  ShieldCheck 
} from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Trade References</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
            Trusted by Commercial Recyclers Nationwide
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            See why leading auto scrap yards, authorized ELV dismantlers, and industrial trading firms rely on Ideal Import Exports.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/60 relative"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 mb-6">
                <Quote className="w-6 h-6 rotate-180" />
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-500 ml-2">
                  5.0 / 5.0 Rating
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed mb-8">
                &ldquo;{current.review}&rdquo;
              </blockquote>

              {/* Author Info & Verified Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-100 gap-4">
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white font-bold font-poppins text-sm flex items-center justify-center shadow-md">
                    {current.avatarInitials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-950 text-base font-poppins">
                        {current.name}
                      </h4>
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {current.role}, <span className="font-semibold text-slate-700">{current.company}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-[11px] text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>{current.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {current.volume}
                  </span>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Prev / Next Buttons */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentIndex
                      ? "w-8 bg-emerald-600"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full bg-slate-950 hover:bg-slate-800 text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
