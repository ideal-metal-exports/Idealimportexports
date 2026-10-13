"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BrandItem {
  name: string;
  src: string;
  width: number;
  height: number;
}

const BRANDS: BrandItem[] = [
  { name: "Toyota", src: "/images/brands/toyota.png", width: 120, height: 115 },
  { name: "BMW", src: "/images/brands/bmw.png", width: 100, height: 115 },
  { name: "Volkswagen", src: "/images/brands/volkswagen.png", width: 200, height: 200 },
  { name: "Audi", src: "/images/brands/audi.png", width: 100, height: 115 },
  { name: "Suzuki", src: "/images/brands/suzuki.png", width: 200, height: 89 },
  { name: "Kia", src: "/images/brands/kia.png", width: 200, height: 47 },
  { name: "Renault", src: "/images/brands/renault.png", width: 165, height: 200 },
  { name: "Fiat", src: "/images/brands/fiat.png", width: 90, height: 115 },
  { name: "Alfa Romeo", src: "/images/brands/alfa-romeo.png", width: 105, height: 115 },
  { name: "Ford", src: "/images/brands/ford.png", width: 100, height: 115 },
  { name: "Honda", src: "/images/brands/honda.png", width: 115, height: 115 },
];

export default function CarBrandsBanner() {
  return (
    <div className="w-full mb-8 sm:mb-12 md:mb-14">
      {/* Title & Green Accent Bar */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-slate-800 font-poppins">
          PURCHASE PRICES BY CAR MODELS AND BRANDS
        </h2>
        <div className="w-12 h-0.5 sm:h-1 bg-emerald-600 mx-auto mt-2 rounded-full" />
      </div>

      {/* Brand Logos Row */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-4"
      >
        {BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="flex items-center justify-center p-1 hover:scale-105 transition-transform duration-200 select-none"
            title={brand.name}
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className="h-8 sm:h-10 md:h-11 w-auto max-w-[70px] sm:max-w-[85px] md:max-w-[95px] object-contain drop-shadow-2xs"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
