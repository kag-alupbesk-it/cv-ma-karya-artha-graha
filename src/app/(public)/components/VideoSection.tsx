'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, Star, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import workshopBackground from '../assets/images/interior_workspace_1784271729296.jpg';
import modalPreview from '../assets/images/hero_glass_aluminium_1784271695241.jpg';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative h-[480px] bg-charcoal-900 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={workshopBackground}
            alt="Interior Glass & Aluminium Showcase"
            fill
            className="w-full h-full object-cover opacity-70"
          />
          {/* Dark Overlay with some cyan tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-charcoal-900/90"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center px-6">
          {/* Pulsing Play Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6 hover:scale-110 transition-transform duration-300 relative group"
            id="play-video-btn"
          >
            {/* Pulsing effect */}
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
            <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1 group-hover:scale-110 transition-transform" />
          </button>

          <span className="text-white text-xs font-mono font-bold tracking-[0.3em] uppercase block mb-2">
            PROFIL WORKSHOP & INSTALASI
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white max-w-xl mx-auto leading-tight">
            Lihat Bagaimana Kami Merakit & Memasang Kusen dengan Presisi Sempurna
          </h3>
        </div>
      </section>

      {/* Gallery / Detail Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            id="video-modal"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-charcoal-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                {/* Video / Large Image Preview Area */}
                <div className="md:col-span-8 bg-black h-[250px] md:h-[450px] relative">
                  <Image
                    src={modalPreview}
                    alt="Ma Karya Workshop Showcase"
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-1">
                      CV. MA KARYA ARTHA GRAHA
                    </span>
                    <h4 className="text-lg md:text-xl font-display font-bold text-white">
                      Workshop Produksi Bantul, Yogyakarta
                    </h4>
                  </div>
                </div>

                {/* Info Area */}
                <div className="md:col-span-4 p-8 flex flex-col justify-between text-white bg-charcoal-900">
                  <div>
                    <h4 className="text-base font-display font-bold text-blue-400 mb-4 uppercase tracking-wider">
                      Standar Workshop Kami
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed mb-6">
                      Setiap produk kusen aluminium dipotong menggunakan mesin cutting presisi tinggi dengan sudut potong 45 atau 90 derajat sempurna untuk memastikan sambungan kedap air dan estetik.
                    </p>

                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-2 text-xs text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0" />
                        <span>Karet Seal EPDM Kualitas Ekstra</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0" />
                        <span>Pilihan Merk Terlengkap</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0" />
                        <span>Aplikator Sertifikasi Industri</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-6">
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold py-3 px-4 rounded-xl transition-all text-center block"
                    >
                      Kunjungi Workshop Kami
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
