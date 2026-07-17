/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Sparkles, ShieldCheck } from 'lucide-react';

export default function Partners() {
  const brands = [
    { name: 'YKK AP', desc: 'Profil Aluminium Jepang Premium' },
    { name: 'ALEXINDO', desc: 'Standar Aluminium Konstruksi Utama' },
    { name: 'ASAHIMAS', desc: 'Produsen Kaca Tempered & Laminated Terbesar' },
    { name: 'MULIA GLASS', desc: 'Kaca Float & Reflektif Kualitas Ekstra' },
    { name: 'ALCOA', desc: 'Kusen Struktur Kokoh & Tahan Lama' },
    { name: 'DOW CORNING', desc: 'Sealant Struktural Kedap Cuaca Maksimal' },
  ];

  return (
    <section className="bg-charcoal-900 py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
          REKANAN MATERIAL & PROFIL
        </p>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
          Hanya Menggunakan Material Resmi Berkualitas Tinggi
        </h2>
        <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto mb-12">
          Kami bangga bermitra dengan produsen profil aluminium dan industri kaca terkemuka di Indonesia untuk memastikan hasil pemasangan yang tahan banting dan estetis.
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 hover:border-blue-500/30 p-6 rounded-2xl flex flex-col justify-center items-center transition-all hover:bg-white/[0.08] group"
              id={`partner-brand-${index}`}
            >
              <div className="text-white font-display font-black text-lg tracking-wider mb-2 group-hover:text-blue-400 transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] text-gray-400 leading-snug font-medium text-center">
                {brand.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Badge */}
        <div className="mt-12 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-xs text-blue-300 font-medium">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>Semua material bersertifikasi SNI dan dijamin keasliannya</span>
        </div>
      </div>
    </section>
  );
}
