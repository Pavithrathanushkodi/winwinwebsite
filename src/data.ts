import { Product, InvestmentTier, NewsUpdate, CustomerReview, FAQItem } from './types';

// @ts-ignore
import fifnatural from './assets/images/15promaxnaturaltitanium.jpg';
// @ts-ignore
import fifwhite from './assets/images/15promaxwhite.jpg';
// @ts-ignore
import showroomImg from './assets/images/win_win_showroom_1783949127599.jpg';
// @ts-ignore
import iphone14PurpleImg from './assets/images/iphone_14_purple_1784017441232.jpg';

import iphone17series from './assets/images/17proseries.jpg';

import orange17 from './assets/images/orange17pro.jpg';

import blue17 from './assets/images/deepblue17pro.jpg';
import white17 from './assets/images/white17pro.jpg';
import iphone16series from './assets/images/16proseries.jpg';
import graphite16 from './assets/images/16prographite.jpg';
import dessert16 from './assets/images/16prodessert.jpg';
import natural16 from './assets/images/natural16.jpg';
import white16 from './assets/images/16prowhite.jpg';
import iphone15series from './assets/images/15proseries.jpg';
import iphone15problue from './assets/images/15problue.jpg';
import iphone15prographite from './assets/images/15prographite.jpg';
import iphone15pronatural from './assets/images/15pronatural.jpg';
import iphone15prowhite from './assets/images/15prowhite.jpg';

export const GLOBAL_IMAGES = {
  // Showroom display inside Deira Mall, Dubai
  showroomDubai: showroomImg,

  // Product Specific Images (Apple high quality aesthetics)
 
  iphone15seriesnaturaltitanium: fifnatural,
  iphone15serieswhite: fifwhite,

  iphone17SeriesDetails: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=600',
  iphone16SeriesDesertTitanium: 'https://images.unsplash.com/photo-1727371727827-0245604b9044?auto=format&fit=crop&q=80&w=600',
  iphone16SeriesAngle: 'https://images.unsplash.com/photo-1727371727653-ff587db3cc75?auto=format&fit=crop&q=80&w=600',
  iphone15SeriesAngle: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600',
  iphone14SeriesPurpleCloseUp: iphone14PurpleImg,
  iphone14SeriesGeneric: iphone14PurpleImg,
  iphone17seriesall : iphone17series,
  iphone17orange : orange17,
  iphone17blue : blue17,
  iphone17white : white17,
  iphone16proall : iphone16series,
  iphone16graphite:graphite16,
  iphone16dessert : dessert16,
  iphone16natural : natural16,
  iphone16white : white16,
iphone15seriesall : iphone15series,
iphone15blue : iphone15problue,
iphone15graphite : iphone15prographite,
iphone15white : iphone15prowhite,
iphone15natural: iphone15pronatural,
};

/**
 * Easily editable JSON-like objects for prices, catalog and configurations.
 * Update prices or details here to immediately reflect changes on the entire website.
 */
export const PRODUCTS_DATA: Product[] = [
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    series: 'iPhone 17 Series',
    storage: '256GB',
    priceAED: 4350,
    priceINR: 115000,
    condition: 'Brand New',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone17seriesall,   // Orange
      GLOBAL_IMAGES.iphone17orange,     // Blue
      GLOBAL_IMAGES.iphone17blue,
      GLOBAL_IMAGES.iphone17white,
            // White
    ],
    colors: [
      { name: 'Orange', value: '#FF6F00', imageIndex: 1 },
      { name: 'Blue', value: '#0D47A1', imageIndex: 2},
      { name: 'White', value: '#ECEFF1', imageIndex: 3 }
    ],
    variants: [
      // 2 eSIM Brand New
      { color: 'Orange', storage: '256GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 4350, priceINR: 115000, wholesalePriceAED: 4100, imageIndex: 1 },
      { color: 'Orange', storage: '512GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 5250, priceINR: 140000, wholesalePriceAED: 4980, imageIndex: 1 },
      { color: 'Orange', storage: '1TB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 6150, priceINR: 165000, wholesalePriceAED: 5850, imageIndex: 1},
      { color: 'Blue', storage: '256GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 4390, priceINR: 116000, wholesalePriceAED: 4120, imageIndex: 2 },
      { color: 'Blue', storage: '512GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 5290, priceINR: 141000, wholesalePriceAED: 5000, imageIndex: 2 },
      { color: 'Blue', storage: '1TB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 6190, priceINR: 166000, wholesalePriceAED: 5880, imageIndex: 2},
      { color: 'White', storage: '256GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 4420, priceINR: 117000, wholesalePriceAED: 4150, imageIndex: 3 },
      { color: 'White', storage: '512GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 5320, priceINR: 142500, wholesalePriceAED: 5030, imageIndex: 3 },
      { color: 'White', storage: '1TB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 6220, priceINR: 167500, wholesalePriceAED: 5910, imageIndex: 3 },

      // 1 Physical + 1 eSIM Brand New
      { color: 'Orange', storage: '256GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 4450, priceINR: 117500, wholesalePriceAED: 4200, imageIndex: 1 },
      { color: 'Orange', storage: '512GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 5350, priceINR: 142500, wholesalePriceAED: 5080, imageIndex: 1 },
      { color: 'Orange', storage: '1TB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 6250, priceINR: 167500, wholesalePriceAED: 5950, imageIndex: 1 },
      { color: 'Blue', storage: '256GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 4490, priceINR: 118500, wholesalePriceAED: 4220, imageIndex: 2 },
      { color: 'Blue', storage: '512GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 5390, priceINR: 143500, wholesalePriceAED: 5100, imageIndex: 2 },
      { color: 'Blue', storage: '1TB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 6290, priceINR: 168500, wholesalePriceAED: 5980, imageIndex: 2 },
      { color: 'White', storage: '256GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 4520, priceINR: 119500, wholesalePriceAED: 4250, imageIndex: 3 },
      { color: 'White', storage: '512GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 5420, priceINR: 144500, wholesalePriceAED: 5130, imageIndex: 3 },
      { color: 'White', storage: '1TB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 6320, priceINR: 169500, wholesalePriceAED: 6010, imageIndex: 3},

      // Japan Spec Brand New
      { color: 'Orange', storage: '256GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 4200, priceINR: 111000, wholesalePriceAED: 3950, imageIndex: 1},
      { color: 'Orange', storage: '512GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 5100, priceINR: 136000, wholesalePriceAED: 4830, imageIndex:1 },
      { color: 'Orange', storage: '1TB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 6000, priceINR: 161000, wholesalePriceAED: 5700, imageIndex: 1 },
      { color: 'Blue', storage: '256GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 4240, priceINR: 112000, wholesalePriceAED: 3970, imageIndex: 2 },
      { color: 'Blue', storage: '512GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 5140, priceINR: 137000, wholesalePriceAED: 4850, imageIndex: 2},
      { color: 'Blue', storage: '1TB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 6040, priceINR: 162000, wholesalePriceAED: 5720, imageIndex: 2},
      { color: 'White', storage: '256GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 4270, priceINR: 113000, wholesalePriceAED: 4000, imageIndex: 3 },
      { color: 'White', storage: '512GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 5170, priceINR: 138500, wholesalePriceAED: 4880, imageIndex: 3 },
      { color: 'White', storage: '1TB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 6070, priceINR: 163500, wholesalePriceAED: 5750, imageIndex: 3 }
    ],
    specs: {
      display: '6.9-inch Super Retina XDR OLED with ProMotion',
      chip: 'A19 Pro Chip (3nm) with Next-Gen Neural Engine',
      camera: '50MP Fusion, 50MP Ultra Wide, and 50MP 5x Telephoto Camera System',
      battery: 'Up to 33 hours video playback, 45W Fast Wired Charging',
      weight: '223 grams'
    },
    wholesalePriceAED: 4100
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    series: 'iPhone 17 Series',
    storage: '256GB',
    priceAED: 3950,
    priceINR: 105000,
    condition: 'Brand New',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone17seriesall,  
        GLOBAL_IMAGES.iphone17blue,
      GLOBAL_IMAGES.iphone17white,      // White
  ,      // White
    ],
    colors: [
      { name: 'Blue', value: '#0D47A1', imageIndex: 1 },
      { name: 'White', value: '#ECEFF1', imageIndex: 2 }
    ],
    variants: [
      // 2 eSIM
      { color: 'Blue', storage: '256GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 3950, priceINR: 105000, wholesalePriceAED: 3720, imageIndex: 1 },
      { color: 'Blue', storage: '512GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 4750, priceINR: 130000, wholesalePriceAED: 4500, imageIndex: 1 },
      { color: 'White', storage: '256GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 3995, priceINR: 106000, wholesalePriceAED: 3750, imageIndex: 2 },
      { color: 'White', storage: '512GB', simSpec: '2 eSIM', condition: 'Brand New', priceAED: 4795, priceINR: 131000, wholesalePriceAED: 4530, imageIndex: 2 },
      
      // 1 Physical + 1 eSIM
      { color: 'Blue', storage: '256GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 4050, priceINR: 107500, wholesalePriceAED: 3820, imageIndex: 1 },
      { color: 'Blue', storage: '512GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 4850, priceINR: 132500, wholesalePriceAED: 4600, imageIndex: 1 },
      { color: 'White', storage: '256GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 4095, priceINR: 108500, wholesalePriceAED: 3850, imageIndex: 2 },
      { color: 'White', storage: '512GB', simSpec: '1 Physical + 1 eSIM', condition: 'Brand New', priceAED: 4895, priceINR: 133500, wholesalePriceAED: 4630, imageIndex: 2 },

      // Japan Spec
      { color: 'Blue', storage: '256GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 3800, priceINR: 101000, wholesalePriceAED: 3570, imageIndex: 1 },
      { color: 'Blue', storage: '512GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 4600, priceINR: 126000, wholesalePriceAED: 4350, imageIndex: 1 },
      { color: 'White', storage: '256GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 3845, priceINR: 102000, wholesalePriceAED: 3600, imageIndex: 2 },
      { color: 'White', storage: '512GB', simSpec: 'Japan Spec', condition: 'Brand New', priceAED: 4645, priceINR: 127000, wholesalePriceAED: 4380, imageIndex: 2 }
    ],
    specs: {
      display: '6.3-inch Super Retina XDR OLED with ProMotion',
      chip: 'A19 Pro Chip (3nm) with Next-Gen Neural Engine',
      camera: '50MP Fusion, 50MP Ultra Wide, and 50MP 5x Telephoto',
      battery: 'Up to 29 hours video playback, 45W Fast Charging',
      weight: '189 grams'
    },
    wholesalePriceAED: 3720
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    series: 'iPhone 16 Series',
    storage: '256GB',
    priceAED: 3350,
    priceINR: 88500,
    condition: 'Demo',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone16proall,
      GLOBAL_IMAGES.iphone16graphite,
      GLOBAL_IMAGES.iphone16natural,
      GLOBAL_IMAGES.iphone16dessert,
      GLOBAL_IMAGES.iphone16white,
    ],
    colors: [
      { name: 'Obsidian Graphite', value: '#4A4A4A', imageIndex: 1},
      { name: 'naturalTitanium', value: '#AD9D86', imageIndex: 2 },
      { name: 'Desert Titanium', value: '#BFA48', imageIndex: 3 },

    { name: 'white Titanium', value: '#F5F5F2', imageIndex: 4 },
    ],
    variants: [
      // Demo Condition
      { color: 'Obsidian Graphite', storage: '128GB', condition: 'Demo', priceAED: 3150, priceINR: 82500, wholesalePriceAED: 2950, imageIndex: 1 },
      { color: 'Obsidian Graphite', storage: '256GB', condition: 'Demo', priceAED: 3350, priceINR: 88500, wholesalePriceAED: 3120, imageIndex: 1 },
      { color: 'Obsidian Graphite', storage: '512GB', condition: 'Demo', priceAED: 3850, priceINR: 102500, wholesalePriceAED: 3600, imageIndex: 1 },
      { color: 'naturalTitanium', storage: '128GB', condition: 'Demo', priceAED: 3170, priceINR: 83000, wholesalePriceAED: 2970, imageIndex: 2 },
      { color: 'naturalTitanium', storage: '256GB', condition: 'Demo', priceAED: 3370, priceINR: 89000, wholesalePriceAED: 3140, imageIndex: 2 },
      { color: 'naturalTitanium', storage: '512GB', condition: 'Demo', priceAED: 3870, priceINR: 103000, wholesalePriceAED: 3620, imageIndex: 2 },
      // { color: 'White', storage: '128GB', condition: 'Demo', priceAED: 3190, priceINR: 83500, wholesalePriceAED: 2990, imageIndex: 2 },
      // { color: 'White', storage: '256GB', condition: 'Demo', priceAED: 3390, priceINR: 89500, wholesalePriceAED: 3160, imageIndex: 2 },
      // { color: 'White', storage: '512GB', condition: 'Demo', priceAED: 3890, priceINR: 103500, wholesalePriceAED: 3640, imageIndex: 2 },
      { color: 'Desert Titanium', storage: '128GB', condition: 'Demo', priceAED: 3210, priceINR: 84000, wholesalePriceAED: 3010, imageIndex: 3 },
      { color: 'Desert Titanium', storage: '256GB', condition: 'Demo', priceAED: 3410, priceINR: 90000, wholesalePriceAED: 3180, imageIndex: 3 },
      { color: 'Desert Titanium', storage: '512GB', condition: 'Demo', priceAED: 3910, priceINR: 104000, wholesalePriceAED: 3660, imageIndex: 3 },

      // Brand New Condition
      { color: 'Obsidian Graphite', storage: '128GB', condition: 'Brand New', priceAED: 3450, priceINR: 91500, wholesalePriceAED: 3250, imageIndex: 0 },
      { color: 'Obsidian Graphite', storage: '256GB', condition: 'Brand New', priceAED: 3650, priceINR: 97500, wholesalePriceAED: 3420, imageIndex: 0 },
      { color: 'Obsidian Graphite', storage: '512GB', condition: 'Brand New', priceAED: 4150, priceINR: 111500, wholesalePriceAED: 3900, imageIndex: 0 },
      // { color: 'Royal Violet', storage: '128GB', condition: 'Brand New', priceAED: 3470, priceINR: 92000, wholesalePriceAED: 3270, imageIndex: 1 },
      // { color: 'Royal Violet', storage: '256GB', condition: 'Brand New', priceAED: 3670, priceINR: 98000, wholesalePriceAED: 3440, imageIndex: 1 },
      // { color: 'Royal Violet', storage: '512GB', condition: 'Brand New', priceAED: 4170, priceINR: 112000, wholesalePriceAED: 3920, imageIndex: 1 },
      // { color: 'Arctic White', storage: '128GB', condition: 'Brand New', priceAED: 3490, priceINR: 92500, wholesalePriceAED: 3290, imageIndex: 2 },
      // { color: 'Arctic White', storage: '256GB', condition: 'Brand New', priceAED: 3690, priceINR: 98500, wholesalePriceAED: 3460, imageIndex: 2 },
      // { color: 'Arctic White', storage: '512GB', condition: 'Brand New', priceAED: 4190, priceINR: 112500, wholesalePriceAED: 3940, imageIndex: 2 },
      // { color: 'Desert Titanium', storage: '128GB', condition: 'Brand New', priceAED: 3510, priceINR: 93000, wholesalePriceAED: 3310, imageIndex: 3 },
      { color: 'Desert Titanium', storage: '256GB', condition: 'Brand New', priceAED: 3710, priceINR: 99000, wholesalePriceAED: 3480, imageIndex: 3 },
      { color: 'Desert Titanium', storage: '512GB', condition: 'Brand New', priceAED: 4210, priceINR: 113000, wholesalePriceAED: 3960, imageIndex: 3 },
       { color: 'White', storage: '128GB', condition: 'Demo', priceAED: 3190, priceINR: 83500, wholesalePriceAED: 2990, imageIndex: 4 },
    { color: 'White', storage: '256GB', condition: 'Demo', priceAED: 3390, priceINR: 89500, wholesalePriceAED: 3160, imageIndex: 4 },
    { color: 'White', storage: '512GB', condition: 'Demo', priceAED: 3890, priceINR: 103500, wholesalePriceAED: 3640, imageIndex: 4 },
    ],
    specs: {
      display: '6.9-inch Super Retina XDR OLED with ProMotion',
      chip: 'A18 Pro Chip with 6-core GPU',
      camera: '48MP Fusion, 48MP Ultra Wide, and 12MP 5x Telephoto',
      battery: 'Up to 33 hours video playback, 30W Fast Charging',
      weight: '227 grams'
    },
    wholesalePriceAED: 3120
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    series: 'iPhone 16 Series',
    storage: '128GB',
    priceAED: 2950,
    priceINR: 77500,
    condition: 'Demo',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone16proall,
       GLOBAL_IMAGES.iphone16dessert,
      GLOBAL_IMAGES.iphone16graphite,
      GLOBAL_IMAGES.iphone16natural,
     
      GLOBAL_IMAGES.iphone16white,
    ],
    colors: [
      { name: 'Desert Titanium', value: '#C2B29F', imageIndex: 1 },
      { name: 'Obsidian Graphite', value: '#2C2C2C', imageIndex: 2 },
        { name: 'natural Titanium', value: '#F5F5F2', imageIndex: 3},
      { name: 'Arctic White', value: '#ECEFF1', imageIndex: 4 }
    
    ],
    variants: [
      // Demo Condition
      { color: 'Desert Titanium', storage: '128GB', condition: 'Demo', priceAED: 2950, priceINR: 77500, wholesalePriceAED: 2750, imageIndex: 1 },
      { color: 'Desert Titanium', storage: '256GB', condition: 'Demo', priceAED: 3150, priceINR: 83500, wholesalePriceAED: 2950, imageIndex: 1 },
      { color: 'Desert Titanium', storage: '512GB', condition: 'Demo', priceAED: 3650, priceINR: 97500, wholesalePriceAED: 3450, imageIndex: 1 },
      { color: 'Obsidian Graphite', storage: '128GB', condition: 'Demo', priceAED: 2970, priceINR: 78000, wholesalePriceAED: 2770, imageIndex: 2 },
      { color: 'Obsidian Graphite', storage: '256GB', condition: 'Demo', priceAED: 3170, priceINR: 84000, wholesalePriceAED: 2970, imageIndex: 2 },
      { color: 'Obsidian Graphite', storage: '512GB', condition: 'Demo', priceAED: 3670, priceINR: 98000, wholesalePriceAED: 3470, imageIndex: 2 },
      { color: 'natural Titanium', storage: '128GB', condition: 'Demo', priceAED: 2990, priceINR: 78500, wholesalePriceAED: 2790, imageIndex: 3},
      { color: 'natural Titanium', storage: '256GB', condition: 'Demo', priceAED: 3190, priceINR: 84500, wholesalePriceAED: 2990, imageIndex: 3 },
      { color: 'natural Titanium', storage: '512GB', condition: 'Demo', priceAED: 3690, priceINR: 98500, wholesalePriceAED: 3490, imageIndex: 3 },
      { color: 'Arctic White', storage: '128GB', condition: 'Demo', priceAED: 3010, priceINR: 79000, wholesalePriceAED: 2810, imageIndex: 4 },
      { color: 'Arctic White', storage: '256GB', condition: 'Demo', priceAED: 3210, priceINR: 85000, wholesalePriceAED: 3010, imageIndex: 4 },
      { color: 'Arctic White', storage: '512GB', condition: 'Demo', priceAED: 3710, priceINR: 99000, wholesalePriceAED: 3510, imageIndex: 4 },

      // Brand New Condition
      { color: 'Desert Titanium', storage: '128GB', condition: 'Brand New', priceAED: 3250, priceINR: 86500, wholesalePriceAED: 3050, imageIndex: 0 },
      { color: 'Desert Titanium', storage: '256GB', condition: 'Brand New', priceAED: 3450, priceINR: 92500, wholesalePriceAED: 3250, imageIndex: 0 },
      { color: 'Desert Titanium', storage: '512GB', condition: 'Brand New', priceAED: 3950, priceINR: 106500, wholesalePriceAED: 3750, imageIndex: 0 },
      { color: 'Obsidian Graphite', storage: '128GB', condition: 'Brand New', priceAED: 3270, priceINR: 87000, wholesalePriceAED: 3070, imageIndex: 1 },
      { color: 'Obsidian Graphite', storage: '256GB', condition: 'Brand New', priceAED: 3470, priceINR: 93000, wholesalePriceAED: 3270, imageIndex: 1 },
      { color: 'Obsidian Graphite', storage: '512GB', condition: 'Brand New', priceAED: 3970, priceINR: 107000, wholesalePriceAED: 3770, imageIndex: 1 },
      { color: 'Royal Violet', storage: '128GB', condition: 'Brand New', priceAED: 3290, priceINR: 87500, wholesalePriceAED: 3090, imageIndex: 2 },
      { color: 'Royal Violet', storage: '256GB', condition: 'Brand New', priceAED: 3490, priceINR: 93500, wholesalePriceAED: 3290, imageIndex: 2 },
      { color: 'Royal Violet', storage: '512GB', condition: 'Brand New', priceAED: 3990, priceINR: 107500, wholesalePriceAED: 3790, imageIndex: 2 },
      { color: 'Arctic White', storage: '128GB', condition: 'Brand New', priceAED: 3310, priceINR: 88000, wholesalePriceAED: 3110, imageIndex: 3 },
      { color: 'Arctic White', storage: '256GB', condition: 'Brand New', priceAED: 3510, priceINR: 94000, wholesalePriceAED: 3310, imageIndex: 3 },
      { color: 'Arctic White', storage: '512GB', condition: 'Brand New', priceAED: 4010, priceINR: 108000, wholesalePriceAED: 3810, imageIndex: 3 }
    ],
    specs: {
      display: '6.3-inch Super Retina XDR OLED with ProMotion',
      chip: 'A18 Pro Chip with 6-core GPU',
      camera: '48MP Fusion, 48MP Ultra Wide, and 12MP 5x Telephoto',
      battery: 'Up to 29 hours video playback, 30W Fast Charging',
      weight: '199 grams'
    },
    wholesalePriceAED: 2750
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    series: 'iPhone 15 Series',
    storage: '256GB',
    priceAED: 2650,
    priceINR: 69500,
    condition: 'Demo',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone15seriesall,
            GLOBAL_IMAGES.iphone15white,
                  GLOBAL_IMAGES.iphone15graphite,


      GLOBAL_IMAGES.iphone15natural
    ],
    colors: [
      { name: 'Titanium White', value: '#ECEFF1', imageIndex: 1},
      { name: 'Natural Titanium', value: '#8E8C87', imageIndex: 3}
    ],
    variants: [
      // Demo
      { color: 'Titanium White', storage: '256GB', condition: 'Demo', priceAED: 2650, priceINR: 69500, wholesalePriceAED: 2480, imageIndex: 1 },
      { color: 'Titanium White', storage: '512GB', condition: 'Demo', priceAED: 3150, priceINR: 83500, wholesalePriceAED: 2950, imageIndex: 1 },
      { color: 'Natural Titanium', storage: '256GB', condition: 'Demo', priceAED: 2690, priceINR: 70500, wholesalePriceAED: 2510, imageIndex: 3 },
      { color: 'Natural Titanium', storage: '512GB', condition: 'Demo', priceAED: 3190, priceINR: 84500, wholesalePriceAED: 2980, imageIndex: 3 },

      // Brand New
      { color: 'Titanium White', storage: '256GB', condition: 'Brand New', priceAED: 2950, priceINR: 77500, wholesalePriceAED: 2780, imageIndex: 0 },
      { color: 'Titanium White', storage: '512GB', condition: 'Brand New', priceAED: 3450, priceINR: 91500, wholesalePriceAED: 3250, imageIndex: 0 },
      { color: 'Natural Titanium', storage: '256GB', condition: 'Brand New', priceAED: 2990, priceINR: 78500, wholesalePriceAED: 2810, imageIndex: 1 },
      { color: 'Natural Titanium', storage: '512GB', condition: 'Brand New', priceAED: 3490, priceINR: 92500, wholesalePriceAED: 3280, imageIndex: 1 }
    ],
    specs: {
      display: '6.7-inch Super Retina XDR OLED with ProMotion',
      chip: 'A17 Pro Chip with 6-core GPU',
      camera: '48MP Main, 12MP Ultra Wide, and 12MP 5x Telephoto',
      battery: 'Up to 29 hours video playback, Type-C charging',
      weight: '221 grams'
    },
    wholesalePriceAED: 2480
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    series: 'iPhone 15 Series',
    storage: '128GB',
    priceAED: 2250,
    priceINR: 59500,
    condition: 'Demo',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone15seriesall,
      GLOBAL_IMAGES.iphone15blue,
      GLOBAL_IMAGES.iphone15graphite,
      GLOBAL_IMAGES.iphone15white,
      GLOBAL_IMAGES.iphone15natural,
    ],
    colors: [
      { name: 'Blue', value: '#5C6F8F', imageIndex: 1 },
      { name: 'Graphite', value: '#4A4A4A', imageIndex: 2 },
      { name: 'Natural Titanium', value: '#B0A18B', imageIndex: 3 },
      { name: 'Titanium White', value: '#F5F5F2', imageIndex: 4 },
    ],
    variants: [
      // Demo
      { color: 'Natural Titanium', storage: '128GB', condition: 'Demo', priceAED: 2250, priceINR: 59500, wholesalePriceAED: 2090, imageIndex: 3 },
      { color: 'Natural Titanium', storage: '256GB', condition: 'Demo', priceAED: 2450, priceINR: 64500, wholesalePriceAED: 2280, imageIndex: 3 },
      { color: 'Natural Titanium', storage: '512GB', condition: 'Demo', priceAED: 2950, priceINR: 78500, wholesalePriceAED: 2750, imageIndex: 3 },
      { color: 'Titanium White', storage: '128GB', condition: 'Demo', priceAED: 2290, priceINR: 60500, wholesalePriceAED: 2120, imageIndex: 4},
      { color: 'Titanium White', storage: '256GB', condition: 'Demo', priceAED: 2490, priceINR: 65500, wholesalePriceAED: 2315, imageIndex: 4 },
      { color: 'Titanium White', storage: '512GB', condition: 'Demo', priceAED: 2990, priceINR: 79500, wholesalePriceAED: 2780, imageIndex: 4 },

      // Brand New
      { color: 'Blue', storage: '128GB', condition: 'Brand New', priceAED: 2550, priceINR: 67500, wholesalePriceAED: 2390, imageIndex: 0 },
      { color: 'Blue', storage: '256GB', condition: 'Brand New', priceAED: 2750, priceINR: 72500, wholesalePriceAED: 2580, imageIndex: 0 },
      { color: 'Blue', storage: '512GB', condition: 'Brand New', priceAED: 3250, priceINR: 86500, wholesalePriceAED: 3050, imageIndex: 0 },
      { color: 'Graphite', storage: '128GB', condition: 'Brand New', priceAED: 2590, priceINR: 68500, wholesalePriceAED: 2420, imageIndex: 1 },
      { color: 'Graphite', storage: '256GB', condition: 'Brand New', priceAED: 2790, priceINR: 73500, wholesalePriceAED: 2615, imageIndex: 1 },
      { color: 'Graphite', storage: '512GB', condition: 'Brand New', priceAED: 3290, priceINR: 87500, wholesalePriceAED: 3080, imageIndex: 1 }
    ],
    specs: {
      display: '6.1-inch Super Retina XDR OLED with ProMotion',
      chip: 'A17 Pro Chip with 6-core GPU',
      camera: '48MP Main, 12MP Ultra Wide, and 12MP 3x Telephoto',
      battery: 'Up to 23 hours video playback, Type-C charging',
      weight: '187 grams'
    },
    wholesalePriceAED: 2090
  },
  {
    id: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    series: 'iPhone 14 Series',
    storage: '256GB',
    priceAED: 2150,
    priceINR: 56500,
    condition: 'Demo',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone14SeriesPurpleCloseUp,
      GLOBAL_IMAGES.iphone14SeriesGeneric
    ],
    colors: [
      { name: 'Deep Purple', value: '#5F4B66', imageIndex: 0 },
      { name: 'Space Black', value: '#2F2F2F', imageIndex: 1 }
    ],
    variants: [
      // Demo
      { color: 'Deep Purple', storage: '128GB', condition: 'Demo', priceAED: 1950, priceINR: 51500, wholesalePriceAED: 1800, imageIndex: 0 },
      { color: 'Deep Purple', storage: '256GB', condition: 'Demo', priceAED: 2150, priceINR: 56500, wholesalePriceAED: 1980, imageIndex: 0 },
      { color: 'Deep Purple', storage: '512GB', condition: 'Demo', priceAED: 2650, priceINR: 69500, wholesalePriceAED: 2450, imageIndex: 0 },
      { color: 'Space Black', storage: '128GB', condition: 'Demo', priceAED: 1990, priceINR: 52500, wholesalePriceAED: 1830, imageIndex: 1 },
      { color: 'Space Black', storage: '256GB', condition: 'Demo', priceAED: 2190, priceINR: 57500, wholesalePriceAED: 2010, imageIndex: 1 },
      { color: 'Space Black', storage: '512GB', condition: 'Demo', priceAED: 2690, priceINR: 70500, wholesalePriceAED: 2480, imageIndex: 1 },

      // Brand New
      { color: 'Deep Purple', storage: '128GB', condition: 'Brand New', priceAED: 2250, priceINR: 59500, wholesalePriceAED: 2080, imageIndex: 0 },
      { color: 'Deep Purple', storage: '256GB', condition: 'Brand New', priceAED: 2450, priceINR: 64500, wholesalePriceAED: 2260, imageIndex: 0 },
      { color: 'Deep Purple', storage: '512GB', condition: 'Brand New', priceAED: 2950, priceINR: 78500, wholesalePriceAED: 2720, imageIndex: 0 },
      { color: 'Space Black', storage: '128GB', condition: 'Brand New', priceAED: 2290, priceINR: 60550, wholesalePriceAED: 2110, imageIndex: 1 },
      { color: 'Space Black', storage: '256GB', condition: 'Brand New', priceAED: 2490, priceINR: 65500, wholesalePriceAED: 2290, imageIndex: 1 },
      { color: 'Space Black', storage: '512GB', condition: 'Brand New', priceAED: 2990, priceINR: 79500, wholesalePriceAED: 2750, imageIndex: 1 }
    ],
    specs: {
      display: '6.7-inch Super Retina XDR OLED with Dynamic Island',
      chip: 'A16 Bionic Chip',
      camera: '48MP Main, 12MP Ultra Wide, and 12MP 3x Telephoto',
      battery: 'Up to 29 hours video playback, Lightning charging',
      weight: '240 grams'
    },
    wholesalePriceAED: 1980
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    series: 'iPhone 14 Series',
    storage: '256GB',
    priceAED: 1950,
    priceINR: 51500,
    condition: 'Demo',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone14SeriesPurpleCloseUp,
      GLOBAL_IMAGES.iphone14SeriesGeneric
    ],
    colors: [
      { name: 'Deep Purple', value: '#5F4B66', imageIndex: 0 },
      { name: 'Space Black', value: '#2F2F2F', imageIndex: 1 }
    ],
    variants: [
      // Demo
      { color: 'Deep Purple', storage: '128GB', condition: 'Demo', priceAED: 1750, priceINR: 46500, wholesalePriceAED: 1610, imageIndex: 0 },
      { color: 'Deep Purple', storage: '256GB', condition: 'Demo', priceAED: 1950, priceINR: 51500, wholesalePriceAED: 1800, imageIndex: 0 },
      { color: 'Deep Purple', storage: '512GB', condition: 'Demo', priceAED: 2450, priceINR: 64500, wholesalePriceAED: 2250, imageIndex: 0 },
      { color: 'Space Black', storage: '128GB', condition: 'Demo', priceAED: 1790, priceINR: 47500, wholesalePriceAED: 1640, imageIndex: 1 },
      { color: 'Space Black', storage: '256GB', condition: 'Demo', priceAED: 1990, priceINR: 52500, wholesalePriceAED: 1830, imageIndex: 1 },
      { color: 'Space Black', storage: '512GB', condition: 'Demo', priceAED: 2490, priceINR: 65500, wholesalePriceAED: 2280, imageIndex: 1 },

      // Brand New
      { color: 'Deep Purple', storage: '128GB', condition: 'Brand New', priceAED: 2050, priceINR: 54500, wholesalePriceAED: 1890, imageIndex: 0 },
      { color: 'Deep Purple', storage: '256GB', condition: 'Brand New', priceAED: 2250, priceINR: 59500, wholesalePriceAED: 2080, imageIndex: 0 },
      { color: 'Deep Purple', storage: '512GB', condition: 'Brand New', priceAED: 2750, priceINR: 72500, wholesalePriceAED: 2530, imageIndex: 0 },
      { color: 'Space Black', storage: '128GB', condition: 'Brand New', priceAED: 2090, priceINR: 55500, wholesalePriceAED: 1920, imageIndex: 1 },
      { color: 'Space Black', storage: '256GB', condition: 'Brand New', priceAED: 2290, priceINR: 60500, wholesalePriceAED: 2110, imageIndex: 1 },
      { color: 'Space Black', storage: '512GB', condition: 'Brand New', priceAED: 2790, priceINR: 73500, wholesalePriceAED: 2560, imageIndex: 1 }
    ],
    specs: {
      display: '6.1-inch Super Retina XDR OLED with Dynamic Island',
      chip: 'A16 Bionic Chip',
      camera: '48MP Main, 12MP Ultra Wide, and 12MP 3x Telephoto',
      battery: 'Up to 23 hours video playback',
      weight: '206 grams'
    },
    wholesalePriceAED: 1800
  },
  {
    id: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max',
    series: 'iPhone 13 Series',
    storage: '256GB',
    priceAED: 1750,
    priceINR: 46500,
    condition: 'Demo',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone17SeriesAngle,
      GLOBAL_IMAGES.iphone17SeriesDetails
    ],
    colors: [
      { name: 'Sierra Blue', value: '#9EB2C0', imageIndex: 0 },
      { name: 'Graphite', value: '#3C3D3A', imageIndex: 1 }
    ],
    variants: [
      // Demo
      { color: 'Sierra Blue', storage: '128GB', condition: 'Demo', priceAED: 1550, priceINR: 41500, wholesalePriceAED: 1420, imageIndex: 0 },
      { color: 'Sierra Blue', storage: '256GB', condition: 'Demo', priceAED: 1750, priceINR: 46500, wholesalePriceAED: 1610, imageIndex: 0 },
      { color: 'Sierra Blue', storage: '512GB', condition: 'Demo', priceAED: 2250, priceINR: 59500, wholesalePriceAED: 2080, imageIndex: 0 },
      { color: 'Graphite', storage: '128GB', condition: 'Demo', priceAED: 1590, priceINR: 42500, wholesalePriceAED: 1450, imageIndex: 1 },
      { color: 'Graphite', storage: '256GB', condition: 'Demo', priceAED: 1790, priceINR: 47500, wholesalePriceAED: 1640, imageIndex: 1 },
      { color: 'Graphite', storage: '512GB', condition: 'Demo', priceAED: 2290, priceINR: 60500, wholesalePriceAED: 2110, imageIndex: 1 }
    ],
    specs: {
      display: '6.7-inch Super Retina XDR OLED with ProMotion',
      chip: 'A15 Bionic Chip',
      camera: '12MP Pro Camera system (Telephoto, Wide, and Ultra Wide)',
      battery: 'Up to 28 hours video playback',
      weight: '240 grams'
    },
    wholesalePriceAED: 1610
  },
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    series: 'iPhone 13 Series',
    storage: '256GB',
    priceAED: 1550,
    priceINR: 41500,
    condition: 'Demo',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      GLOBAL_IMAGES.iphone17SeriesAngle,
      GLOBAL_IMAGES.iphone17SeriesDetails
    ],
    colors: [
      { name: 'Sierra Blue', value: '#9EB2C0', imageIndex: 0 },
      { name: 'Graphite', value: '#3C3D3A', imageIndex: 1 }
    ],
    variants: [
      // Demo
      { color: 'Sierra Blue', storage: '128GB', condition: 'Demo', priceAED: 1350, priceINR: 36500, wholesalePriceAED: 1220, imageIndex: 0 },
      { color: 'Sierra Blue', storage: '256GB', condition: 'Demo', priceAED: 1550, priceINR: 41500, wholesalePriceAED: 1420, imageIndex: 0 },
      { color: 'Sierra Blue', storage: '512GB', condition: 'Demo', priceAED: 1950, priceINR: 51500, wholesalePriceAED: 1780, imageIndex: 0 },
      { color: 'Graphite', storage: '128GB', condition: 'Demo', priceAED: 1390, priceINR: 37500, wholesalePriceAED: 1250, imageIndex: 1 },
      { color: 'Graphite', storage: '256GB', condition: 'Demo', priceAED: 1590, priceINR: 42500, wholesalePriceAED: 1450, imageIndex: 1 },
      { color: 'Graphite', storage: '512GB', condition: 'Demo', priceAED: 1995, priceINR: 52500, wholesalePriceAED: 1810, imageIndex: 1 }
    ],
    specs: {
      display: '6.1-inch Super Retina XDR OLED with ProMotion',
      chip: 'A15 Bionic Chip',
      camera: '12MP Pro Camera system (Telephoto, Wide, and Ultra Wide)',
      battery: 'Up to 22 hours video playback',
      weight: '204 grams'
    },
    wholesalePriceAED: 1420
  },
  {
    id: 'samsung-z-flip-fold',
    name: 'Samsung Galaxy Z Flip & Fold',
    series: 'Samsung Galaxy Z Series',
    storage: '256GB',
    priceAED: 2850,
    priceINR: 75000,
    condition: 'Brand New',
    wholesaleAvailable: true,
    indiaDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=600'
    ],
    colors: [
      { name: 'Phantom Black', value: '#1C1D21', imageIndex: 0 },
      { name: 'Cream', value: '#F5F5DC', imageIndex: 1 }
    ],
    variants: [
      // Brand New
      { color: 'Phantom Black', storage: '256GB', condition: 'Brand New', priceAED: 2850, priceINR: 75000, wholesalePriceAED: 2650, imageIndex: 0 },
      { color: 'Phantom Black', storage: '512GB', condition: 'Brand New', priceAED: 3350, priceINR: 88500, wholesalePriceAED: 3100, imageIndex: 0 },
      { color: 'Cream', storage: '256GB', condition: 'Brand New', priceAED: 2890, priceINR: 76000, wholesalePriceAED: 2680, imageIndex: 1 },
      { color: 'Cream', storage: '512GB', condition: 'Brand New', priceAED: 3390, priceINR: 89500, wholesalePriceAED: 3130, imageIndex: 1 },

      // Demo Unit
      { color: 'Phantom Black', storage: '256GB', condition: 'Demo', priceAED: 2450, priceINR: 64500, wholesalePriceAED: 2250, imageIndex: 0 },
      { color: 'Phantom Black', storage: '512GB', condition: 'Demo', priceAED: 2950, priceINR: 78500, wholesalePriceAED: 2750, imageIndex: 0 },
      { color: 'Cream', storage: '256GB', condition: 'Demo', priceAED: 2490, priceINR: 65500, wholesalePriceAED: 2280, imageIndex: 1 },
      { color: 'Cream', storage: '512GB', condition: 'Demo', priceAED: 2990, priceINR: 79500, wholesalePriceAED: 2780, imageIndex: 1 }
    ],
    specs: {
      display: '7.6-inch Foldable Dynamic AMOLED 2X + 6.2-inch Cover Display',
      chip: 'Snapdragon 8 Gen 3 for Galaxy',
      camera: '50MP Wide, 12MP Ultra Wide, and 10MP Telephoto Camera System',
      battery: '4400mAh with 25W Super Fast Charging',
      weight: '239 grams'
    },
    wholesalePriceAED: 2650
  }
];

export const INVESTMENT_TIERS_DATA: InvestmentTier[] = [
  {
    amountAED: 3000,
    returnsAED: 3750,
    returnPercentage: 25,
    termMonths: 12,
    features: [
      'Quarterly guaranteed payouts',
      'Post-dated cheques security',
      'Low entry investment',
      'Transparent trading backing',
      '100% legal compliance'
    ]
  },
  {
    amountAED: 10000,
    returnsAED: 13000,
    returnPercentage: 30,
    termMonths: 12,
    features: [
      'Quarterly guaranteed payouts',
      'Post-dated cheques security',
      'Higher yielding return class',
      'DED licensed backing',
      'Ijari & Rental contract collateral'
    ]
  },
  {
    amountAED: 15000,
    returnsAED: 20250,
    returnPercentage: 35,
    termMonths: 12,
    features: [
      'Quarterly guaranteed payouts',
      'Full legal agreement backing',
      'Corporate Tax registry alignment',
      'Priority support access',
      'Excellent growth margin leverage'
    ]
  },
  {
    amountAED: 25000,
    returnsAED: 35000,
    returnPercentage: 40,
    termMonths: 12,
    features: [
      'Quarterly guaranteed payouts',
      'Maximum returns tier (40%)',
      'Direct investor dashboard review',
      'Strategic branch expansion partner',
      'Post-dated cheques fully assured'
    ]
  }
];

export const NEWS_UPDATES_DATA: NewsUpdate[] = [
  {
    id: 'upd-1',
    title: 'New iPhone 17 Series Available',
    tag: 'NEW ARRIVAL',
    description: 'We are first to introduce the highly awaited iPhone 17 Pro and 17 Pro Max models in Dubai. Ready stock in multiple colors.',
   
    badge: 'Trending'
  },
  {
    id: 'upd-2',
    title: 'India Delivery Fully Active',
    tag: 'GLOBAL LOGISTICS',
    description: 'Safe, fully insured door-to-door shipping of premium Apple iPhones directly from Dubai to all major cities in India.',
    
    badge: 'Popular'
  },
  {
    id: 'upd-3',
    title: 'Wholesale Bulk Orders Open',
    tag: 'B2B WHOLESALE',
    description: 'Custom quotations and inventory access for retailers, resellers and volume importers. Best margins guaranteed.',
  },
  {
    id: 'upd-4',
    title: 'Demo Phones with Full Warranty',
    tag: 'VERIFIED DEMO',
    description: 'Pristine, tested 100% genuine demo devices at up to 40% discount with a physical shop warranty.',
    
  }
];

export const CUSTOMER_REVIEWS_DATA: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Mohammad Al Maktoum',
    location: 'Dubai, UAE',
    rating: 5,
    comment: 'Exceptional service! Bought 5 demo iPhones for my corporate team. The quality is practically brand new and pricing is the best in Deira Gold Souk area.',
   
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Rajesh Sharma',
    location: 'Mumbai, India',
    rating: 5,
    comment: 'I was skeptical about delivery to India, but Win Win Wireless delivered my custom-packaged iPhone 16 Pro Max safely within 4 days. Absolutely genuine!',
  
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Sarah Jenkins',
    location: 'Abu Dhabi, UAE',
    rating: 5,
    comment: 'Transparent trading, beautiful clean shop in Deira Mall, and amazing WhatsApp customer support. They answer in minutes and give the best live market rates.',
   
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Amit Patel',
    location: 'Delhi, India',
    rating: 5,
    comment: 'Great wholesale price for iPhone 15 Pro stock. Best wholesale partner in Dubai. Visited their showroom in Deira Mall, highly professional team.',
   
    verified: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Are your devices 100% genuine?',
    answer: 'Yes, every single iPhone sold by Win Win Wireless is 100% genuine, original, and certified. We strictly do not deal in duplicate, refurbished, or modified devices. All serial and IMEI numbers are clean and open for activation check.',
    category: 'products'
  },
  {
    question: 'What is the difference between Brand New and Demo devices?',
    answer: 'Brand New devices are factory-sealed in their original retail packaging with official Apple global warranty. Demo devices are pristine, store-exhibition models that have been meticulously inspected and certified by our technicians. They are physically flawless (9.9/10 condition) and carry our exclusive physical shop warranty at significant savings.',
    category: 'products'
  },
  {
    question: 'How does India delivery work and is it safe?',
    answer: 'We have a fully insured, reliable shipping corridor to major Indian cities. We handle custom declarations, professional packaging, and provide tracking numbers. Your device is guaranteed to reach your doorstep safely, otherwise we offer a full refund.',
    category: 'delivery'
  },
  {
    question: 'Can I purchase iPhones at wholesale rates?',
    answer: 'Absolutely. We are premier wholesale supply partners. Resellers, shop owners, and bulk buyers from the UAE, India, and other countries can connect with us directly on WhatsApp for daily spreadsheet bulk sheets and special volume pricing.',
    category: 'general'
  },
  {
    question: 'How secure is the Business Investment program?',
    answer: 'Our investment program is fully secured and backed by our established corporate presence in Dubai for over 4 years. All investments are bound by solid legal agreements (Ijari and Rental Contracts), backed by official Dubai Economic Department (DED) licenses, and protected by post-dated quarterly bank cheques to guarantee peace of mind.',
    category: 'investment'
  },
  {
    question: 'What are the return payout intervals for investments?',
    answer: 'Returns are paid out quarterly (every 3 months) directly into your bank account or via Dubai cheque clearances. For example, a 10,000 AED investment yields a total of 13,000 AED (30% net return) returned smoothly across 4 quarterly payments of 3,250 AED.',
    category: 'investment'
  }
];
