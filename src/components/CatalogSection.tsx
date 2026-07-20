'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, X } from 'lucide-react';
import catalogImage1 from '../assets/images/interior_workspace_1784271729296.jpg';
import catalogImage2 from '../assets/images/modern_office_corridor_1784271767234.jpg';
import catalogImage3 from '../assets/images/office_facade_1784271712564.jpg';
import catalogImage4 from '../assets/images/hero_glass_aluminium_1784271695241.jpg';
import type { CatalogItem } from '../types';

type CartItem = {
  id: string;
  title: string;
  category: string;
  variantName: string;
  priceLabel: string;
  priceValue: number;
  quantity: number;
};

const catalogItems: CatalogItem[] = [
  {
    id: 'kusen-premium',
    title: 'Kusen Aluminium Premium',
    description: 'Solusi kusen aluminium presisi untuk hunian, kantor, dan bangunan komersial dengan finishing rapi dan tahan lama.',
    category: 'Aluminium',
    image: catalogImage1,
    variants: [
      { id: 'standar', name: 'Standar', description: 'Finishing powder coating standar', priceLabel: 'Mulai Rp 1,2 juta', priceValue: 1200000 },
    ],
  },
  {
    id: 'sliding',
    title: 'Pintu & Jendela Sliding',
    description: 'Desain modern dan sistem geser halus untuk pencahayaan alami maksimal serta tampilan estetis yang bersih.',
    category: 'Aluminium',
    image: catalogImage2,
    variants: [
      { id: 'single', name: 'Single Panel', description: 'Sederhana, hemat space', priceLabel: 'Mulai Rp 2,4 juta', priceValue: 2400000 },
    ],
  },
  {
    id: 'facade-curtain',
    title: 'Facade Kaca Curtain Wall',
    description: 'Konstruksi facade kaca premium yang elegan, kuat, dan cocok untuk hunian modern maupun gedung komersial.',
    category: 'Kaca',
    image: catalogImage3,
    variants: [
      { id: 'clear', name: 'Clear', description: 'Transparan dan elegan', priceLabel: 'Mulai Rp 3,8 juta', priceValue: 3800000 },
    ],
  },
  {
    id: 'kanopi-tempered',
    title: 'Kanopi Kaca Tempered',
    description: 'Kanopi tempered anti bocor dan tahan cuaca untuk tampilan mewah dengan perlindungan terbaik sepanjang tahun.',
    category: 'Kaca',
    image: catalogImage4,
    variants: [
      { id: 'standard', name: 'Standard', description: 'Kuat untuk hunian', priceLabel: 'Mulai Rp 4,5 juta', priceValue: 4500000 },
    ],
  },
  {
    id: 'partisi-kaca',
    title: 'Partisi Kaca Interior',
    description: 'Partisi kaca tempered untuk kantor, showroom, dan ruang meeting agar terasa lebih luas dan modern.',
    category: 'Kaca',
    image: catalogImage2,
    variants: [
      { id: 'single-glass', name: 'Single Glass', description: 'Ideal untuk ruang kantor kecil', priceLabel: 'Mulai Rp 1,8 juta', priceValue: 1800000 },
    ],
  },
  {
    id: 'railing-balkon',
    title: 'Railing Balkon Aluminium',
    description: 'Railing balkon dengan frame aluminium dan kaca tempered untuk keamanan, estetika, dan kenyamanan visual.',
    category: 'Aluminium',
    image: catalogImage1,
    variants: [
      { id: 'standard', name: 'Standard', description: 'Pilihan hemat untuk balkon', priceLabel: 'Mulai Rp 2,1 juta', priceValue: 2100000 },
    ],
  },
  {
    id: 'accessory',
    title: 'Door Closer & Accessory',
    description: 'Aksesoris aluminium dan kaca lengkap seperti handle, closer, dan fitting berkualitas untuk hasil instalasi sempurna.',
    category: 'Aksesoris',
    image: catalogImage3,
    variants: [
      { id: 'basic', name: 'Basic', description: 'Paket aksesori standar', priceLabel: 'Mulai Rp 350 ribu', priceValue: 350000 },
    ],
  },
  {
    id: 'tempered-laminated',
    title: 'Kaca Tempered & Laminated',
    description: 'Pilihan kaca tempered dan laminated untuk keamanan tinggi, ketahanan cuaca, serta desain yang elegan.',
    category: 'Kaca',
    image: catalogImage4,
    variants: [
      { id: 'tempered', name: 'Tempered', description: 'Ketahanan tinggi untuk area umum', priceLabel: 'Mulai Rp 900 ribu', priceValue: 900000 },
    ],
  },
  {
    id: 'aplus-profile',
    title: 'APLUS Accessory & Profile System',
    description: 'Produk profil dan aksesoris APLUS yang relevan untuk sistem aluminium, kaca, dan instalasi bangunan modern.',
    category: 'APLUS',
    image: catalogImage1,
    variants: [
      { id: 'starter', name: 'Starter', description: 'Paket dasar untuk instalasi ringan', priceLabel: 'Konsultasi harga', priceValue: 0 },
    ],
  },
];

export default function CatalogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(catalogItems.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return catalogItems.slice(start, start + itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddToCart = (item: CatalogItem) => {
    const selectedVariant = item.variants[0];

    if (!selectedVariant) {
      return;
    }

    const cartId = `${item.id}-${selectedVariant.id}`;

    setCartItems((prev) => {
      const existingItem = prev.find((entry) => entry.id === cartId);

      if (existingItem) {
        return prev.map((entry) =>
          entry.id === cartId ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }

      return [
        ...prev,
        {
          id: cartId,
          title: item.title,
          category: item.category,
          variantName: selectedVariant.name,
          priceLabel: selectedVariant.priceLabel,
          priceValue: selectedVariant.priceValue,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) =>
      prev.flatMap((entry) => {
        if (entry.id !== cartId) {
          return [entry];
        }

        const nextQuantity = entry.quantity + delta;
        return nextQuantity > 0 ? [{ ...entry, quantity: nextQuantity }] : [];
      })
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + item.priceValue * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const productLines = cartItems
      .map((entry) => `- ${entry.title} (${entry.variantName}) x${entry.quantity} = ${formatCurrency(entry.priceValue * entry.quantity)}`)
      .join('\n');

    const message = `Halo CV. Ma Karya Artha Graha, saya ingin memesan:\n\n${productLines}\n\nTotal: ${formatCurrency(subtotal)}\n\nMohon konfirmasi. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6283847105847?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="catalog" className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_45%)]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            KATALOG PENJUALAN
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Pilihan Produk Aluminium & Kaca Premium
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Pilih variasi produk favorit, tambahkan ke keranjang, dan lanjutkan ke pemesanan dengan informasi yang lebih lengkap.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((item, index) => {
              const selectedVariant = item.variants[0];

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_40px_-22px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.28)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={224}
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

                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Pilihan produk</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{selectedVariant?.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{selectedVariant?.description}</p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Estimasi</p>
                        <p className="text-sm font-semibold text-blue-600">{selectedVariant?.priceLabel ?? 'Konsultasi harga'}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(item)}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Tambah
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  currentPage === page
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-blue-600/30"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold tabular-nums">{totalItems}</span>
      </button>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          >
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              className="flex max-h-[80vh] w-full max-w-lg flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Keranjang produk</p>
                  <p className="text-sm text-slate-600">{totalItems} item</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-full border border-slate-200 p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cartItems.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
                    Belum ada produk yang ditambahkan.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((entry) => (
                      <div key={entry.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{entry.title}</p>
                            <p className="mt-1 text-xs text-slate-500">{entry.category}</p>
                          </div>
                          <p className="text-sm font-semibold text-blue-700">{entry.priceLabel}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(entry.id, -1)}
                              className="rounded-full p-1 text-slate-600 transition-colors hover:bg-slate-100"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-6 text-center text-sm font-semibold text-slate-900">{entry.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(entry.id, 1)}
                              className="rounded-full p-1 text-slate-600 transition-colors hover:bg-slate-100"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-slate-900">
                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(entry.priceValue * entry.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">Subtotal</span>
                  <span className="text-sm font-semibold text-blue-700">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(subtotal)}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Kirim ke WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
