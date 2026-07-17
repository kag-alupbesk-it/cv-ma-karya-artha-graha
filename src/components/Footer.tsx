/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import logoMakarya from '../assets/images/logomakarya.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Mengapa Memilih Kami', href: '#why-choose-us' },
    { name: 'Portofolio Proyek', href: '#projects' },
    { name: 'Kontak Utama', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Kusen Aluminium Premium' },
    { name: 'Pintu & Jendela Swing/Sliding' },
    { name: 'Facade Kaca (Curtain Wall)' },
    { name: 'Kaca Tempered & Laminated' },
    { name: 'Kanopi Kaca Tempered' },
  ];

  const helpLinks = [
    { name: 'Syarat & Ketentuan' },
    { name: 'Kebijakan Privasi' },
    { name: 'Pertanyaan Umum (FAQ)' },
    { name: 'Lokasi Workshop' },
  ];

  return (
    <footer id="contact" className="bg-charcoal-900 border-t border-white/10 pt-20 pb-10 text-gray-400 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Bio */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-6 group">
              <img
                src={logoMakarya}
                alt="MA Karya Artha Graha"
                className="h-10 w-auto object-contain rounded-md shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl text-white tracking-wide leading-none">
                  MA KARYA
                </span>
                <span className="text-[9px] font-mono tracking-[0.15em] text-blue-400 font-medium">
                  ARTHA GRAHA
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-gray-400 mb-6 max-w-sm">
              CV. Ma Karya Artha Graha adalah Kontraktor Aluminium & Kaca terbaik dan terpercaya di Yogyakarta. Kami menghadirkan pengerjaan kusen aluminium, kaca tempered, dan facade gedung modern berstandar tinggi dan bergaransi resmi.
            </p>

            {/* Contact Quick Details */}
            <div className="flex flex-col gap-3 w-full border-t border-white/5 pt-6 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Bantul, Daerah Istimewa Yogyakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+62 813-9034-7775</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>info@makaryaarthagraha.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Senin - Sabtu: 08.00 - 16.00 WIB</span>
              </div>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6">
              Menu
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-sm">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6">
              Layanan Spesialis
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name} className="hover:text-white transition-colors">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6">
              Informasi Bantuan
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-sm">
              {helpLinks.map((link) => (
                <li key={link.name} className="hover:text-white transition-colors">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching design exactly */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
          <div>
            &copy; {currentYear} CV. Ma Karya Artha Graha. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Syarat Ketentuan</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
