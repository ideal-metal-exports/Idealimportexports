"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BrandItem {
  name: string;
  src: string;
  width: number;
  height: number;
  imgClass?: string;
}

const BRANDS: BrandItem[] = [
  { name: "Renault", src: "/images/brands/renault.png", width: 165, height: 200, imgClass: "h-9 sm:h-11 md:h-12" },
  { name: "Maruti Suzuki", src: "/images/brands/maruti_suzuki.png", width: 74, height: 95, imgClass: "h-9 sm:h-11 md:h-12" },
  { name: "Jeep", src: "/images/brands/jeep.png", width: 200, height: 81, imgClass: "h-6 sm:h-7.5 md:h-8.5" },
  { name: "Hyundai", src: "/images/brands/hyundai.png", width: 200, height: 125, imgClass: "h-8 sm:h-10 md:h-11" },
  { name: "Mercedes-Benz", src: "/images/brands/mercedes.png", width: 200, height: 200, imgClass: "h-9 sm:h-11 md:h-12" },
  { name: "Suzuki", src: "/images/brands/suzuki.png", width: 200, height: 89, imgClass: "h-8 sm:h-10 md:h-11" },
  { name: "Volkswagen", src: "/images/brands/volkswagen.png", width: 200, height: 200, imgClass: "h-9 sm:h-11 md:h-12" },
  { name: "Kia", src: "/images/brands/kia.png", width: 200, height: 47, imgClass: "h-5 sm:h-6.5 md:h-7.5" },
];

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

      {/* Brand Logos */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center items-center px-4"
      >
        <div className="flex items-center justify-center flex-wrap gap-5 sm:gap-8 md:gap-11 lg:gap-13 py-2">
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
                priority
                className={`w-auto object-contain drop-shadow-2xs ${brand.imgClass || "h-9 sm:h-11 md:h-12"}`}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
