/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Building2, Eye, Award } from 'lucide-react';

export default function About() {
  const points = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      title: 'Material Premium Berstandar SNI',
      desc: 'Kami menggunakan profil aluminium ternama (Alexindo, YKK, dsb) serta kaca bersertifikat kualitas terbaik.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-blue-400" />,
      title: 'Solusi Kustom Desain',
      desc: 'Mulai dari konsep minimalis hunian pribadi, ruko, gedung perkantoran, hingga kaca tempered komersial.',
    },
    {
      icon: <Award className="w-5 h-5 text-blue-400" />,
      title: 'Tenaga Ahli Berpengalaman',
      desc: 'Dikerjakan oleh tim aplikator profesional yang sangat presisi, menjamin kerapian sudut dan ketahanan kebocoran.',
    },
  ];

  return (
    <section id="about" className="bg-charcoal-900 text-white py-24 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Upper Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400 mb-3"
          >
            TENTANG KAMI
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6"
          >
            Membangun Era Baru Konstruksi Aluminium & Kaca di Yogyakarta
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            CV. Ma Karya Artha Graha, yang berbasis di Bantul-Yogyakarta, dengan bangga diakui sebagai Kontraktor Aluminium & Kaca terbaik di wilayah ini. Menonjol sebagai pemimpin industri konstruksi, perusahaan ini membawa dedikasi tinggi dalam menyediakan solusi konstruksi berkualitas tinggi dengan fokus khusus pada Kusen Aluminium dan Kaca.
          </motion.p>
        </div>

        {/* Dynamic Grid: Text Left, Staggered Images Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Detail */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Dedikasi, Presisi & Kualitas Tanpa Kompromi
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Sebagai kontraktor yang handal, CV. Ma Karya Artha Graha telah mendapatkan reputasi yang kokoh berkat layanan unggul dalam pemasangan dan desain berbagai jenis Kusen Aluminium dan Kaca. Keahlian kami mencakup beragam proyek, mulai dari rumah tinggal hingga proyek komersial skala besar.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <span className="block text-2xl font-bold text-white">Bantul</span>
                  <span className="text-xs text-gray-400 font-medium">Workshop Pusat</span>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <span className="block text-2xl font-bold text-white">Yogyakarta</span>
                  <span className="text-xs text-gray-400 font-medium">Fokus Layanan</span>
                </div>
              </div>
            </motion.div>

            {/* List of points */}
            <div className="flex flex-col gap-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 font-display">{point.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Stunning Staggered Architectural Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 items-center">
            {/* Image 1 - shifted down */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 20 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group border border-white/10"
            >
              <img
                src="/src/assets/images/office_facade_1784271712564.jpg"
                alt="CV Ma Karya Artha Graha - Office Facade Project"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block">EKSTERIOR</span>
                  <span className="text-sm font-display font-bold text-white">Facade Modern</span>
                </div>
              </div>
            </motion.div>

            {/* Image 2 - shifted up */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: -20 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group border border-white/10"
            >
              <img
                src="/src/assets/images/interior_workspace_1784271729296.jpg"
                alt="CV Ma Karya Artha Graha - Interior Workspace Project"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block">INTERIOR</span>
                  <span className="text-sm font-display font-bold text-white">Partisi & Kusen Aluminium</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
