"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CarBrandsBanner() {
  return (
    <div className="w-full mb-8 sm:mb-12 md:mb-14">
      {/* Title & Green Accent Bar */}
      <div className="text-center mb-5 sm:mb-8">
        <h2 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-slate-800 font-poppins">
          PURCHASE PRICES BY CAR MODELS AND BRANDS
        </h2>
        <div className="w-12 h-0.5 sm:h-1 bg-emerald-600 mx-auto mt-2 rounded-full" />
      </div>

      {/* Brand Logos Strip */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center items-center px-4"
      >
        <div className="w-full max-w-4xl sm:max-w-5xl flex justify-center items-center overflow-x-auto py-2 scrollbar-none">
          <Image
            src="/images/car_brands_strip_trans.png"
            alt="Car Models and Brands: Toyota, BMW, Volkswagen, Audi, Suzuki, Kia, Renault, Fiat, Alfa Romeo, Ford, Honda"
            width={1024}
            height={65}
            priority
            className="w-full min-w-[580px] sm:min-w-0 max-w-4xl sm:max-w-5xl h-auto object-contain drop-shadow-2xs"
          />
        </div>
      </motion.div>
    </div>
  );
}
