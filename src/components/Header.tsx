/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoMakarya from '../assets/images/logomakarya.png';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Mengapa Kami', href: '#why-choose-us' },
    { name: 'Katalog', href: '#catalog' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-900/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
            : 'bg-gradient-to-b from-black/60 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" id="logo-link">
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
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+628123456789"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+62 813-9034-7775</span>
            </a>
            <button
              onClick={onOpenInquiry}
              className="bg-primary-600 hover:bg-primary-700 text-white font-sans text-xs font-bold px-5 py-2.5 rounded-lg transition-all transform hover:scale-[1.02] shadow-md hover:shadow-blue-500/20"
              id="btn-book-project"
            >
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] bg-charcoal-900 border-b border-white/10 shadow-2xl z-40 md:hidden"
            id="mobile-nav-panel"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans font-medium text-lg text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="tel:+6281390347775"
                  className="flex items-center gap-3 text-gray-300 hover:text-white font-medium"
                >
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>+62 813-9034-7775</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-sans text-sm font-bold py-3 rounded-xl transition-all shadow-lg"
                >
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
