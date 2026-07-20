import type { StaticImageData } from 'next/image';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  year: string;
  location: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Partner {
  id: string;
  name: string;
  logoText: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
}

export interface CatalogVariant {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  priceValue: number;
}

export interface CatalogItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string | StaticImageData;
  variants: CatalogVariant[];
}
