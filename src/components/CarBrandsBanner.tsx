"use client";

import React from "react";
import Image from "next/image";

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

// Quadrupled brand items for 100% seamless, uninterrupted infinite loop across any display width
const LOOPING_BRANDS = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export default function CarBrandsBanner() {
  return (
    <div className="w-full mb-8 sm:mb-12 md:mb-14 overflow-hidden">
      {/* Title & Green Accent Bar */}
      <div className="text-center mb-5 sm:mb-8">
        <h2 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-slate-800 font-poppins">
          Our Authorised Clients
        </h2>
        <div className="w-12 h-0.5 sm:h-1 bg-emerald-600 mx-auto mt-2 rounded-full" />
      </div>

      {/* Seamless Continuous Looping Marquee */}
      <div className="relative w-full overflow-hidden py-3 select-none group">
        {/* Left & Right Soft Edge Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 md:gap-16">
          {LOOPING_BRANDS.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center justify-center p-1.5 shrink-0 hover:scale-110 transition-transform duration-200"
              title={brand.name}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                priority={idx < 8}
                className={`w-auto object-contain drop-shadow-2xs ${brand.imgClass || "h-9 sm:h-11 md:h-12"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
