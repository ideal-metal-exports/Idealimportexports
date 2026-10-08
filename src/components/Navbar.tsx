"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUpRight 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "What We Buy", href: "#materials" },
    { label: "Valuation Tool", href: "#calculator" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 ${
        isScrolled ? "shadow-xs py-3" : "py-4"
      }`}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs border border-slate-200 overflow-hidden p-1 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/favicon.png"
                  alt="Ideal Favicon"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-slate-950 font-poppins leading-none flex items-center gap-1.5">
                  IDEAL IMPORT <span className="text-emerald-700 font-extrabold">EXPORTS</span>
                </span>
                <span className="text-[10px] tracking-wider text-slate-500 uppercase font-medium mt-1">
                  Catalytic Converter Scrap
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-xs xl:text-sm font-medium text-slate-600 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Call Button */}
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Call Desk</span>
              </a>

              {/* Get Quote on WhatsApp Button */}
              <a
                href={COMPANY.getWhatsAppQuoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-xs hover:shadow-sm transition-all duration-200 group"
              >
                <FaWhatsapp className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Get Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-emerald-600 rounded-lg shadow-xs sm:hidden"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <div className="pb-3 border-b border-slate-100 mb-2">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
                    Pan-India Buying Active
                  </span>
                  <span className="font-semibold text-emerald-700">Response &lt; 15 mins</span>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 space-y-2.5 mt-2">
                <a
                  href={COMPANY.getWhatsAppQuoteUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-xs"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Get Quote on WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-slate-100 text-slate-900 font-medium text-sm rounded-xl border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call {COMPANY.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
  );
}
