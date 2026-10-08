"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  ZoomIn, 
  X, 
  Layers, 
  Tag, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { COMPANY } from "@/data/company";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: "all", label: "All Facilities" },
    { key: "converters", label: "Catalytic Converters" },
    { key: "processing", label: "Warehouse & Processing" },
    { key: "testing", label: "Lab Testing & Assay" },
    { key: "packaging", label: "Bulk Packaging" },
  ];

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>Industrial Facility Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
            Our Operations & Scrap Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Take a visual tour of our sorting warehouse, high-yield de-canning lines, laboratory assay equipment, and international export logistics.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-slate-950 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-poppins text-white leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="relative h-[360px] sm:h-[460px] w-full bg-black">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-contain object-center"
                  />
                </div>

                {/* Modal Footer Description */}
                <div className="p-6 sm:p-8 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 font-mono">
                        {selectedItem.tag}
                      </span>
                      <span className="text-xs text-slate-400">
                        {selectedItem.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-poppins">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  <a
                    href={COMPANY.getWhatsAppQuoteUrl(`Hello Ideal Import Exports, I am inquiring regarding the scrap material category: ${selectedItem.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-2 shrink-0 transition-colors shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Inquire About This Material</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
