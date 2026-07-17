/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, HeartHandshake, Eye, ShieldCheck, Ruler } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Kualitas Pengerjaan Unggul',
      desc: 'Kami berkomitmen menghadirkan hasil pengerjaan berkualitas tinggi yang memenuhi dan melampaui standar industri konstruksi aluminium nasional.',
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Presisi Tinggi & Bebas Kebocoran',
      desc: 'Proses pemotongan, instalasi karet seal, dan sealent dilakukan dengan akurasi milimeter untuk mencegah kebocoran air saat hujan badai.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Kemitraan & Layanan Terpercaya',
      desc: 'Kami menyediakan konsultasi gratis, transparansi anggaran, estimasi waktu yang akurat, serta garansi pemeliharaan pasca proyek.',
    },
  ];

  return (
    <section id="why-choose-us" className="bg-white py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Upper Grid Layout matching design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-6">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
              MENGAPA MEMILIH KAMI
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 leading-tight">
              Menghadirkan Keunggulan, <br />
              Membangun Kepercayaan Klien!
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-12">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Di CV. Ma Karya Artha Graha, kami berkomitmen penuh untuk menjadi mitra konstruksi aluminium dan kaca terbaik Anda di Yogyakarta. Dedikasi kami terhadap kerapian, kualitas material, dan kepuasan klien memastikan bahwa setiap instalasi terpasang kokoh, estetis, dan tahan lama.
            </p>
          </div>
        </div>

        {/* 3 Columns Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50/70 hover:shadow-[0_18px_45px_-20px_rgba(15,23,42,0.2)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-300 via-blue-400 to-slate-300 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
              <div>
                {/* Icon box */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-inner transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {point.icon}
                  </div>
                </div>

                <h3 className="mb-4 font-display text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-slate-800">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {point.desc}
                </p>
              </div>

              {/* Minimalist bottom line accent */}
              <div className="mt-8 flex items-center">
                <div className="h-[2px] w-8 bg-slate-300 transition-all duration-300 group-hover:w-full group-hover:bg-blue-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
