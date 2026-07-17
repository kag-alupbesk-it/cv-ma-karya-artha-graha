/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import catalogImage1 from '../assets/images/interior_workspace_1784271729296.jpg';
import catalogImage2 from '../assets/images/modern_office_corridor_1784271767234.jpg';
import catalogImage3 from '../assets/images/office_facade_1784271712564.jpg';
import catalogImage4 from '../assets/images/hero_glass_aluminium_1784271695241.jpg';

export default function CatalogSection() {
  const catalogItems = [
    {
      title: 'Kusen Aluminium Premium',
      description: 'Solusi kusen aluminium presisi untuk hunian, kantor, dan bangunan komersial dengan finishing rapi dan tahan lama.',
      category: 'Best Seller',
      price: 'Mulai Rp 1,2 juta',
      image: catalogImage1,
    },
    {
      title: 'Pintu & Jendela Sliding',
      description: 'Desain modern dan sistem geser halus untuk pencahayaan alami maksimal serta tampilan estetis yang bersih.',
      category: 'Populer',
      price: 'Mulai Rp 2,4 juta',
      image: catalogImage2,
    },
    {
      title: 'Facade Kaca Curtain Wall',
      description: 'Konstruksi facade kaca premium yang elegan, kuat, dan cocok untuk hunian modern maupun gedung komersial.',
      category: 'Unggulan',
      price: 'Mulai Rp 3,8 juta',
      image: catalogImage3,
    },
    {
      title: 'Kanopi Kaca Tempered',
      description: 'Kanopi tempered anti bocor dan tahan cuaca untuk tampilan mewah dengan perlindungan terbaik sepanjang tahun.',
      category: 'Terbaru',
      price: 'Mulai Rp 4,5 juta',
      image: catalogImage4,
    },
  ];

  return (
    <section id="catalog" className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_45%)]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            KATALOG PENJUALAN
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Pilihan Produk Aluminium & Kaca Premium
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Temukan produk andalan kami yang cocok untuk kebutuhan rumah, kantor, showroom, dan bangunan komersial dengan kualitas pengerjaan unggul.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {catalogItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_40px_-22px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.28)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent"></div>
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-semibold text-blue-600">{item.price}</span>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600">
                    Pesan
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
