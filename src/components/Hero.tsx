"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import CarBrandsBanner from "./CarBrandsBanner";

const EXPORT_FLAGS = [
  { name: "Germany", src: "/images/flags/de.svg" },
  { name: "United States", src: "/images/flags/us.svg" },
  { name: "Western Sahara", src: "/images/flags/eh.svg" },
  { name: "Japan", src: "/images/flags/jp.svg" },
  { name: "Singapore", src: "/images/flags/sg.svg" },
  { name: "South Africa", src: "/images/flags/za.svg" },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-white text-slate-900 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden border-b border-slate-100 flex flex-col items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center w-full">
        {/* Our Authorised Clients */}
        <CarBrandsBanner />

        {/* Full Clear Hero Brand Lockup with Real Vector Text & Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col justify-center items-center max-w-4xl mx-auto px-4"
        >
          {/* Main IDEAL Logo */}
          <div className="w-full max-w-[500px] sm:max-w-[620px] md:max-w-[700px] flex justify-center">
            <Image
              src="/images/ideal_brand_logo.png"
              alt="IDEAL™"
              width={885}
              height={325}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Real Text Pill Badge: • Catalytic Convertor Exports • */}
          <div className="w-full max-w-[500px] sm:max-w-[620px] md:max-w-[700px] bg-black text-white rounded-full py-1.5 sm:py-2.5 md:py-3 px-3.5 sm:px-6 flex items-center justify-between shadow-xs mt-3 sm:mt-5 select-none">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-white shrink-0 ml-1 sm:ml-2"></span>
            <span className="text-[10px] sm:text-sm md:text-base lg:text-lg font-medium tracking-[0.14em] sm:tracking-[0.20em] uppercase font-poppins text-white whitespace-nowrap text-center">
              Catalytic Convertor Exports
            </span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-white shrink-0 mr-1 sm:mr-2"></span>
          </div>

          {/* Real Vector Export Flags */}
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 md:gap-4.5 mt-3 sm:mt-4 select-none">
            {EXPORT_FLAGS.map((flag) => (
              <div
                key={flag.name}
                className="w-7 h-4.5 sm:w-9.5 sm:h-6 md:w-11 md:h-7 rounded-[3px] sm:rounded overflow-hidden shadow-2xs border border-slate-200/90 hover:scale-110 hover:shadow-xs transition-transform duration-200"
                title={flag.name}
              >
                <Image
                  src={flag.src}
                  alt={flag.name}
                  width={64}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
