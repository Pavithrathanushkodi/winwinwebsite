/**
 * Types for Win Win Wireless Premium E-Commerce Platform
 */

export interface ProductColor {
  name: string;
  value: string; // hex color or tailwind name
  priceAED?: number; // optional price overrides for this color
  priceINR?: number;
  wholesalePriceAED?: number;
  imageIndex: number; // index of the image in product's images array
}

export interface ProductVariant {
  color: string;
  storage: string; // e.g. '128GB', '256GB', '512GB', '1TB'
  simSpec?: string; // e.g. '2 eSIM', '1 Physical + 1 eSIM', 'Japan Spec'
  condition?: string; // e.g. 'Brand New', 'Demo'
  priceAED: number;
  priceINR: number;
  wholesalePriceAED?: number;
  imageIndex: number; // index of the image in product's images array
}

export interface Product {
  id: string;
  name: string;
  series: string;
  storage: string;
  priceAED: number;
  priceINR: number;
  condition: string;
  wholesaleAvailable: boolean;
  indiaDelivery: boolean;
  images: string[];
  colors?: ProductColor[]; // optional color variations
  variants?: ProductVariant[]; // optional specific combinations of color + storage
  specs: {
    display: string;
    chip: string;
    camera: string;
    battery: string;
    weight: string;
    [key: string]: string;
  };
  wholesalePriceAED?: number;
}

export interface InvestmentTier {
  amountAED: number;
  returnsAED: number;
  returnPercentage: number;
  termMonths: number;
  features: string[];
}

export interface NewsUpdate {
  id: string;
  title: string;
  tag: string;
  description: string;
  date: string;
  badge?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'products' | 'investment' | 'delivery';
}
