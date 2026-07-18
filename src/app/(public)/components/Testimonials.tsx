'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../../../types';
import testimonialBackground from '../assets/images/hero_glass_aluminium_1784271695241.jpg';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      quote: 'CV. Ma Karya Artha Graha selalu menjadi pilihan utama saya untuk pemasangan kusen aluminium dan kaca tempered pada proyek ruko maupun perumahan elit di DIY. Kerapian sudut pemotongan dan ketepatan waktu mereka luar biasa.',
      author: 'Ir. H. Budi Santoso',
      role: 'Arsitek Utama & Kontraktor Developer Yogyakarta',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'test-2',
      quote: 'Sangat puas dengan pemasangan pintu slide aluminium hitam dan jendela kaca besar untuk rumah konsep minimalis modern saya di Sleman. Hasilnya sangat kedap suara, presisi tinggi, dan sealant-nya rapi tidak bocor meskipun diterpa hujan badai.',
      author: 'Ibu Dian Wijaya',
      role: 'Pemilik Rumah Tinggal Minimalis - Sleman',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'test-3',
      quote: 'Pengerjaan sekat kaca tempered 12mm dan folding door aluminium untuk cafe kami dikerjakan sangat cepat, rapi, dan sesuai deadline. Tim aplikatornya sangat ahli, bersertifikat, komunikatif, dan harganya sangat bersahabat.',
      author: 'Bpk. Roni Gunawan',
      role: 'Pemilik & Operasional Cafe - Bantul, Yogyakarta',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 bg-charcoal-900 overflow-hidden">
      {/* Background image with glass blur */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={testimonialBackground}
          alt="Architectural Backdrop"
          fill
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-charcoal-900/90"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Quote symbol */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/20 mb-8 text-blue-400">
          <Quote className="w-8 h-8 fill-blue-400/20" />
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <blockquote className="text-lg md:text-xl font-display font-medium text-white italic leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-3">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md"
                />
                <div>
                  <div className="font-display font-bold text-white text-base">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-xs text-blue-400 font-medium font-sans">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls matching design (arrows on sides) */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-all"
            aria-label="Previous testimonial"
            id="testimonial-prev-btn"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-blue-500 w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-all"
            aria-label="Next testimonial"
            id="testimonial-next-btn"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
