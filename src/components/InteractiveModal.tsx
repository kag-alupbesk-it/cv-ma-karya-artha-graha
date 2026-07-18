'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveModal({ isOpen, onClose }: InteractiveModalProps) {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    kategori: 'Kusen Aluminium',
    lokasi: '',
    deskripsi: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    'Kusen Aluminium',
    'Kaca Tempered',
    'Facade Gedung (Curtain Wall)',
    'Pintu & Jendela Aluminium',
    'Kanopi Kaca',
    'Lain-lain',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama || !formData.whatsapp) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleWhatsAppRedirect = () => {
    const phone = '6281390347775'; // CV. Ma Karya WhatsApp Number
    const message = `Halo CV. Ma Karya Artha Graha,\n\nSaya ingin berkonsultasi mengenai proyek konstruksi.\n\nBerikut rincian saya:\n- Nama: ${formData.nama}\n- WhatsApp: ${formData.whatsapp}\n- Kategori: ${formData.kategori}\n- Lokasi Proyek: ${formData.lokasi || '-'}\n- Deskripsi Kebutuhan: ${formData.deskripsi || '-'}\n\nMohon hubungi saya kembali untuk penawaran harga. Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const handleReset = () => {
    setFormData({
      nama: '',
      whatsapp: '',
      kategori: 'Kusen Aluminium',
      lokasi: '',
      deskripsi: '',
    });
    setIsSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          id="inquiry-modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative border border-gray-100"
            id="inquiry-modal-card"
          >
            {/* Header / Backdrop accent */}
            <div className="bg-charcoal-900 text-white px-6 py-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Konsultasi Gratis</span>
              </div>
              <h3 className="text-xl font-display font-bold">Rancang Proyek Anda</h3>
              <p className="text-gray-400 text-xs mt-1">
                Kirim detail kebutuhan Anda, dan tim estimasi kami akan menghitung perkiraan anggaran terbaik untuk Anda.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  {/* Nama */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:border-blue-500 focus:outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      No. WhatsApp / HP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:border-blue-500 focus:outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>

                  {/* Kategori Pekerjaan */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Kategori Kebutuhan
                    </label>
                    <select
                      value={formData.kategori}
                      onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                      className="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:border-blue-500 focus:outline-none transition-all bg-slate-50 focus:bg-white"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Lokasi Proyek */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Lokasi Proyek (Kecamatan / Kabupaten)
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Contoh: Depok, Sleman"
                        value={formData.lokasi}
                        onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                        className="w-full text-sm border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 focus:border-blue-500 focus:outline-none transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Deskripsi */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Deskripsi Singkat / Ukuran Proyek
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: Pemasangan 4 unit jendela geser aluminium ukuran 120x150cm dan 1 unit pintu kaca utama ruko..."
                      value={formData.deskripsi}
                      onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                      className="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:border-blue-500 focus:outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md hover:shadow-blue-600/35 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Formulir Estimasi</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 border border-green-200 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-gray-900 mb-2">
                    Formulir Berhasil Terkirim!
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm max-w-sm mb-8 leading-relaxed">
                    Terima kasih <strong>{formData.nama}</strong>. Kebutuhan proyek <strong>{formData.kategori}</strong> Anda telah tersimpan di sistem kami.
                  </p>

                  <div className="flex flex-col gap-3 w-full">
                    {/* Direct WhatsApp connect */}
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-sans font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg shadow-green-600/25 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Hubungi WhatsApp Fast Response</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-gray-600 font-sans font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all"
                    >
                      Kirim Inquiry Baru
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
