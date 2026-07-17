/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900 pt-20"
    >
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_glass_aluminium_1784271695241.jpg"
          alt="CV Ma Karya Artha Graha - Aluminium & Kaca Yogyakarta"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tag */}
          

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-6"
          >
            Spesialis Kusen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Aluminium & Kaca
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-sans"
          >
            CV. Ma Karya Artha Graha menghadirkan solusi konstruksi kaca tempered, kusen, pintu, jendela, dan facade gedung modern dengan presisi tinggi, material premium, dan pengerjaan bergaransi di Yogyakarta.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#catalog"
              className="bg-primary-600 hover:bg-primary-700 text-white font-sans text-sm font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-[1.02] flex items-center gap-2 shadow-lg shadow-blue-600/30 group"
            >
              <span>Lihat Katalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm border border-white/10 text-center"
            >
              Lihat Proyek
            </a>
          </motion.div>

          {/* Key Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 w-full max-w-lg"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-white">100+</span>
              <span className="text-xs text-gray-400 mt-1 font-medium">Proyek Selesai</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-white">100%</span>
              <span className="text-xs text-gray-400 mt-1 font-medium">Kepuasan Klien</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-white">Bantul</span>
              <span className="text-xs text-gray-400 mt-1 font-medium">Pusat Workshop</span>
            </div>
          </motion.div>
        </div>

        {/* Right Preview Column (Floating Card Highlights mirroring design) */}
        <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-end h-[480px]">
          {/* Main Overlay Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
