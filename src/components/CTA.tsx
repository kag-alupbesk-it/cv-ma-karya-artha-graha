/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenInquiry: () => void;
}

export default function CTA({ onOpenInquiry }: CTAProps) {
  return (
    <section className="bg-primary-600 py-16 md:py-24 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating abstract decorative shape */}
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3 text-white" />
            <span>KONSULTASI GRATIS & BERGARANSI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Mari Bangun Sesuatu yang Luar Biasa Bersama Kami
          </h2>
          <p className="text-blue-100 text-xs md:text-sm mt-4 leading-relaxed font-sans max-w-xl">
            Dari rincian ukuran kusen rumah tinggal hingga perhitungan struktur facade kaca tempered bertingkat, tim ahli kami siap memberikan rancangan terbaik yang aman, estetis, dan hemat biaya.
          </p>
        </div>

        {/* CTA Button matching the clean white box in design */}
        <button
          onClick={onOpenInquiry}
          className="bg-white text-blue-600 hover:bg-slate-50 font-sans font-bold text-sm px-8 py-4.5 rounded-xl transition-all shadow-xl hover:shadow-black/10 flex items-center gap-2 shrink-0 group self-start lg:self-center"
          id="cta-contact-btn"
        >
          <span>Mulai Diskusi Proyek</span>
          <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
