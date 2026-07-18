'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './app/(public)/components/Header';
import Hero from './app/(public)/components/Hero';
import About from './app/(public)/components/About';
import WhyChooseUs from './app/(public)/components/WhyChooseUs';
import CatalogSection from './app/(public)/components/CatalogSection';
import Projects from './app/(public)/components/Projects';
import Partners from './app/(public)/components/Partners';
import CTA from './app/(public)/components/CTA';
import Footer from './app/(public)/components/Footer';
import InteractiveModal from './app/(public)/components/InteractiveModal';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => setIsInquiryOpen(false);

  return (
    <div className="relative min-h-screen font-jakarta text-slate-800 bg-slate-50 selection:bg-blue-600 selection:text-white" id="main-app-container">
      {/* Navigation Header */}
      <Header onOpenInquiry={openInquiry} />

      {/* Main Page Layout Sections mirroring the design */}
      <main>
        {/* Hero Banner Section */}
        <Hero onOpenInquiry={openInquiry} />

        {/* About Company Section (Dark Charcoal Theme) */}
        <About />

        {/* Why Choose Us Section (Clean Light Theme) */}
        <WhyChooseUs />

        {/* Catalog Sales Section */}
        <CatalogSection />

        {/* Portofolio Projects Section (Light Theme with black cards) */}
        <Projects />

        {/* Brands Partnerships (Dark) */}
        <Partners />

       

        {/* Call to Action (Vibrant Blue) */}
        <CTA onOpenInquiry={openInquiry} />
      </main>

      {/* Detailed Multi-Column Footer */}
      <Footer />

      {/* Booking and Contact Interactive Modal Overlay */}
      <InteractiveModal isOpen={isInquiryOpen} onClose={closeInquiry} />
    </div>
  );
}
