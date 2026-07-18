'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';
import { Project } from '../../../types';
import projectImage1 from '../assets/images/modern_classroom_glass_1784271749947.jpg';
import projectImage2 from '../assets/images/office_facade_1784271712564.jpg';
import projectImage3 from '../assets/images/modern_office_corridor_1784271767234.jpg';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filters = ['Semua', 'Kusen Aluminium', 'Kaca Tempered', 'Facade Gedung'];

  const projectsData: Project[] = [
    {
      id: 'proj-1',
      year: '2024',
      location: 'Depok, Sleman, Yogyakarta',
      title: 'Gedung Sekolah Swasta Modern',
      description: 'Pemasangan menyeluruh kusen aluminium powder coating hitam dikombinasikan dengan kaca double-glazed tebal untuk mereduksi kebisingan luar dan menjaga suhu ruangan ber-AC agar tetap hemat energi.',
      image: projectImage1,
      category: 'Kusen Aluminium',
    },
    {
      id: 'proj-2',
      year: '2024',
      location: 'Kasihan, Bantul, Yogyakarta',
      title: 'Facade Kaca & Kanopi Tempered Kantor IT',
      description: 'Pengerjaan curtain wall kaca tempered 12mm yang memberikan tampilan futuristik, bersih, dan mewah pada gedung komersial tiga lantai, lengkap dengan bracket spider fitting stainless steel berkualitas tinggi.',
      image: projectImage2,
      category: 'Facade Gedung',
    },
    {
      id: 'proj-3',
      year: '2025',
      location: 'Kotagede, Yogyakarta',
      title: 'Partisi Kaca Minimalis Creative Space',
      description: 'Instalasi partisi sekat kaca tempered internal kantor dengan kusen aluminium tipis (slim frame profile) untuk memaksimalkan pencahayaan alami di area koridor dan ruang rapat.',
      image: projectImage3,
      category: 'Kaca Tempered',
    },
  ];

  const filteredProjects = activeFilter === 'Semua'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="bg-slate-50 py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block matching design */}
        <div className="text-center max-w-3xl mx-auto mb-12">
         
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Proyek Yang Telah Kami Selesaikan
          </h2>
          <p className="text-gray-600 text-sm">
            Tinjau portofolio hasil pengerjaan pemasangan kusen aluminium dan kaca tempered CV. Ma Karya Artha Graha di berbagai wilayah Yogyakarta.
          </p>
        </div>

        {/* Filter Tabs Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold font-sans tracking-wide transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Vertical List mirroring the design image */}
        <div className="flex flex-col gap-12" id="projects-list-container">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                key={project.id}
                className="bg-charcoal-900 text-white rounded-3xl overflow-hidden border border-white/5 shadow-xl grid grid-cols-1 lg:grid-cols-12 group items-stretch"
              >
                {/* Text Content Column */}
                <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between items-start text-left">
                  <div>
                    {/* Project Tagline */}
                    <div className="text-xs font-mono font-semibold text-blue-400 tracking-wider mb-3">
                      {project.year} &bull; {project.location}
                    </div>

                    {/* Category pill */}
                    <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4">
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* View details link */}
                  <div className="flex items-center gap-1 text-xs md:text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/link">
                    <span>Detail Proyek</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Image Column */}
                <div className="lg:col-span-6 min-h-[300px] lg:min-h-full relative overflow-hidden bg-charcoal-900 border-t lg:border-t-0 lg:border-l border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Glass subtle tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all projects bottom block */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              setActiveFilter('Semua');
              const el = document.getElementById('projects-list-container');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-blue-600/30"
          >
            Tampilkan Semua Proyek
          </button>
        </div>
      </div>
    </section>
  );
}
