"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  ChevronRight, 
  CheckCircle2 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "What We Buy", href: "#materials" },
    { label: "Valuation Calculator", href: "#calculator" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ];

  const materialLinks = [
    "Catalytic Converter Scrap",
    "Ceramic Monolith Honeycomb",
    "Metallic Matrix Foil Converters",
    "Industrial Petrochemical Catalysts",
    "Commercial Truck DPF / SCR Bricks",
    "Precious Metal Oxygen Sensors",
    "Crushed Biscuit & Milled Dust",
    "High-Purity Platinum / Rhodium Scrap",
  ];

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 relative overflow-hidden">
      

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#home" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-2xs overflow-hidden p-1 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/favicon.png"
                  alt="Ideal Favicon"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-slate-950 font-montserrat uppercase leading-none tracking-wide">
                  IDEAL IMPORT <span className="text-[#e62526] font-black">EXPORTS</span>
                </span>
                <span className="text-[10px] tracking-wider text-slate-500 uppercase font-semibold mt-1">
                  Catalytic Converter Scrap
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Ideal Import Exports is South India&apos;s leading high-volume buyer and exporter of automotive catalytic converter scrap, ceramic honeycomb monoliths, and industrial precious metal catalysts.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center gap-1.5 font-medium shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                GST Registered Entity
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center gap-1.5 font-medium shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Pan-India Logistics
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-emerald-700 transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Materials Purchased (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              What We Buy
            </h4>
            <ul className="space-y-2 text-xs">
              {materialLinks.map((mat, i) => (
                <li key={i}>
                  <a
                    href="#materials"
                    className="text-slate-600 hover:text-emerald-700 transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>{mat}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Procurement Desk
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2.5 text-slate-600">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Phone:</span>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="text-slate-900 hover:text-emerald-700 font-bold">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 text-slate-600">
                <FaWhatsapp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">WhatsApp:</span>
                  <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-emerald-700 font-bold">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 text-slate-600">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Email:</span>
                  <a href={`mailto:${COMPANY.email}`} className="text-slate-900 hover:text-emerald-700 font-bold break-all">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Coverage:</span>
                  <span className="text-slate-700 font-medium">
                    Pan-India Logistics & Scrap Export
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 {COMPANY.name}. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-500">South India&apos;s Trusted Catalyst Buyer & Exporter</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all cursor-pointer shadow-2xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
