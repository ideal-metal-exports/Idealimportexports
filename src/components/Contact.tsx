"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Globe
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/data/company";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    material: "Catalytic Converter Scrap",
    quantity: "6 - 20 Units",
    city: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateWhatsAppMessage = () => {
    let text = `*New Scrap Valuation Inquiry - Ideal Import Exports*\n\n`;
    text += `• *Name:* ${formData.name || "Interested Seller"}\n`;
    text += `• *Phone / WhatsApp:* ${formData.phone || "Not provided"}\n`;
    text += `• *Material Type:* ${formData.material}\n`;
    text += `• *Estimated Quantity:* ${formData.quantity}\n`;
    if (formData.city) text += `• *City / State:* ${formData.city}\n`;
    if (formData.message) text += `• *Additional Details:* ${formData.message}\n`;
    text += `\nPlease reply with current buying rates and pickup options.`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/919164531341?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
    setFormSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Scrap Inquiry: ${formData.material} - ${formData.quantity}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nMaterial: ${formData.material}\nQuantity: ${formData.quantity}\nCity: ${formData.city}\nDetails: ${formData.message}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-poppins tracking-tight">
            Contact Ideal Import Exports
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Whether you have individual sample pieces or shipping containers of catalytic scrap, our team is ready to evaluate and purchase immediately.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Card 1: Phone */}
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <Phone className="w-6 h-6 text-emerald-700" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Direct Hotline
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-poppins mb-1">
                Phone Call
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Speak directly with an experienced metallurgist & buyer.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 font-bold text-sm text-slate-900 flex items-center justify-between">
              <span>+91 91645 31341</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${COMPANY.email}`}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <Mail className="w-6 h-6 text-emerald-700" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Official Inquiries
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-poppins mb-1">
                Email Address
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send assay certificates, manifests, or formal RFQs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 font-bold text-xs text-slate-900 truncate flex items-center justify-between">
              <span className="truncate">{COMPANY.email}</span>
              <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 4: Hours & Service */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-emerald-700" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Operating Schedule
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-poppins mb-1">
                Business Hours
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mon – Sat: 9:00 AM – 8:00 PM IST
              </p>
              <p className="text-xs text-emerald-700 font-semibold mt-1">
                WhatsApp Quotes: Active 24/7
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>Pan-India Logistics & Export</span>
            </div>
          </div>

        </div>

        {/* 2-Column: Inquiry Form & Logistics Hub Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Fast Quote Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-poppins">
                    Request an Official Valuation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Fill the details to dispatch your inquiry instantly.
                  </p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Instant Dispatch
                </span>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Inquiry formatted! Opening your communication channel...</span>
                </div>
              )}

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Scrap Material Category
                    </label>
                    <select
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                    >
                      <option value="Catalytic Converter Scrap">Catalytic Converter Scrap</option>
                      <option value="Ceramic Catalysts Monolith">Ceramic Catalysts Monolith</option>
                      <option value="Metal Catalysts Foil">Metal Catalysts Foil</option>
                      <option value="Industrial Catalysts">Industrial Catalysts</option>
                      <option value="Commercial DPF / SCR Filters">Commercial DPF / SCR Filters</option>
                      <option value="Precious Metal Components">Precious Metal Components</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Quantity
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                    >
                      <option value="1 - 5 Units (Sample Lot)">1 - 5 Units (Sample Lot)</option>
                      <option value="6 - 20 Units (Workshop Lot)">6 - 20 Units (Workshop Lot)</option>
                      <option value="21 - 50 Units (Aggregator Batch)">21 - 50 Units (Aggregator Batch)</option>
                      <option value="50+ Units / Bulk Kilograms">50+ Units / Bulk Kilograms</option>
                      <option value="1+ Metric Ton (Container Load)">1+ Metric Ton (Container Load)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your City / State (for pickup logistics)
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Bengaluru, Mumbai, Delhi, Chennai"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Serial Numbers or Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="List converter part numbers or mention honeycomb condition..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none shadow-2xs"
                  ></textarea>
                </div>

                {/* 2 Dispatch Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-xs transition-all cursor-pointer"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white" />
                    <span>Send via WhatsApp (Fastest)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Logistics Hub & Network Representation */}
          <div className="lg:col-span-5 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base font-poppins">Logistics & Hub Network</h4>
                    <p className="text-xs text-slate-500">Pan-India Industrial Coverage</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800 font-mono">
                  All 28 States
                </span>
              </div>

              {/* Styled India Region List */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-2xs">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">Doorstep Pickup Available In:</span>
                  <span className="text-emerald-700 font-mono font-medium">Insured Transit</span>
                </div>

                <div className="grid grid-cols-2 gap-3 py-3.5 text-xs">
                  <div className="flex items-center space-x-2 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Delhi NCR & Punjab</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Mumbai & Maharashtra</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Bengaluru & Karnataka</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Chennai & Tamil Nadu</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Gujarat & Rajasthan</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Kolkata & Eastern Hubs</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                  Direct logistics coordination with tracking, certified weight confirmation, and secure handover.
                </div>
              </div>

              {/* Verified Export Channel Badge */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start space-x-3 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-slate-900 block">Official Export Compliance</span>
                  <span>Registered Indian exporter adhering to the Ministry of Environment and hazardous scrap export guidelines.</span>
                </div>
              </div>
            </div>

            {/* Direct Calling Bar */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 block">Direct Procurement Desk:</span>
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
