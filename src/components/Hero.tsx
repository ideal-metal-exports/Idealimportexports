"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import CarBrandsBanner from "./CarBrandsBanner";

export default function Hero() {
  return (
    <section id="home" className="relative bg-white text-slate-900 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden border-b border-slate-100 flex flex-col items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center w-full">
        {/* Purchase Prices By Car Models And Brands */}
        <CarBrandsBanner />

        {/* Full Clear Hero Brand Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center"
        >
          <Image
            src="/images/hero_full_bg.png"
            alt="Ideal Catalytic Convertor Exports"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto max-h-[480px] sm:max-h-[600px] md:max-h-[720px] lg:max-h-[800px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
