"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Scale, 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle,
  TrendingUp
} from "lucide-react";
import { STATS_DATA } from "@/data/stats";

function CounterItem({ 
  value, 
  suffix, 
  label, 
  description, 
  idx 
}: { 
  value: number; 
  suffix: string; 
  label: string; 
  description: string; 
  idx: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const increment = Math.ceil(value / (duration / 25));
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-xl"
    >
      <div>
        <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-300 font-poppins mb-2 tracking-tight">
          {count.toLocaleString()}
          <span className="text-emerald-400">{suffix}</span>
        </div>
        <div className="text-base font-bold text-white font-poppins mb-1.5">
          {label}
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section id="stats" className="py-24 bg-slate-950 text-white relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Demonstrated Operational Scale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-poppins tracking-tight">
            Key Performance Metrics
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            A decade of reliable transactions, industrial refining partnerships, and transparent business conduct nationwide.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS_DATA.map((item, idx) => (
            <CounterItem
              key={item.id}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              description={item.description}
              idx={idx}
            />
          ))}
        </div>

        {/* Bottom Credibility Strip */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Direct LPPM Index Benchmarked</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>ISO 9001 & Environmental Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Zero Payment Defaults in 10+ Years</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Pan-India e-Way Transit Covered</span>
          </div>
        </div>

      </div>
    </section>
  );
}
