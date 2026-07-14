import { motion } from 'motion/react';
import { ShoppingBag, ArrowUpRight, Shield, Award, MapPin } from 'lucide-react';
import LogoIcon from './LogoIcon';

interface HeroProps {
  onShopClick: () => void;
  onContactClick: () => void;
  darkMode: boolean;
}

export default function Hero({ onShopClick, onContactClick, darkMode }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 md:px-8">
      {/* 1. Immersive Luxury Glowing Gradients */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 mix-blend-screen transition-all duration-700 ${darkMode ? 'bg-brand-gold/30' : 'bg-amber-100'}`} />
        <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10 mix-blend-screen transition-all duration-700 ${darkMode ? 'bg-brand-gold/20' : 'bg-amber-50'}`} />
        
        {/* Apple Store style clean grid */}
        <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] ${darkMode ? 'opacity-30' : 'opacity-[0.05]'}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Brand & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider mb-6 border uppercase ${
              darkMode 
                ? 'bg-zinc-900/60 border-zinc-800 text-brand-gold' 
                : 'bg-zinc-100 border-zinc-200 text-brand-gold'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Dubai's Premium iPhone Supplier</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 ${
              darkMode ? 'text-white' : 'text-zinc-950'
            }`}
          >
            Premium iPhone Store <br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-brand-gold bg-clip-text text-transparent">
              in Dubai, Gold Souk
            </span>
          </motion.h1>

          {/* Subtitle / Bullet Points */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl mb-8 leading-relaxed max-w-xl ${
              darkMode ? 'text-zinc-300' : 'text-zinc-650'
            }`}
          >
            Explore brand new sealed and certified demo iPhones at unbeatable wholesale rates. Serving retail resellers and global buyers across UAE & India for over 4 successful years.
          </motion.p>

          {/* Bullet points of Trust */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10 max-w-lg"
          >
            {[
              { text: 'Brand New & Demo iPhones', desc: '100% Genuine Certified' },
              { text: 'Wholesale Bulk pricing', desc: 'Reseller margin structures' },
              { text: 'India Delivery Available', desc: 'Insured door-to-door transit' },
              { text: 'Trusted for 4+ Years', desc: 'Registered showroom in Dubai' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{item.text}</h4>
                  <p className="text-xs text-zinc-500 font-mono">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Actions CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-shop-cta"
              onClick={onShopClick}
              className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-500 text-zinc-950 font-bold py-4 px-8 rounded-full text-base transition-all duration-300 shadow-xl shadow-brand-gold/10 hover:shadow-brand-gold/25 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop Current Price List</span>
            </button>
            
            <a
              id="hero-whatsapp-cta"
              href="https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%20am%20interested%2520in%20your%20iPhones%20stock.%20Please%20share%20today's%20price%20list."
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-full text-base transition-all duration-300 border hover:scale-[1.02] active:scale-95 ${
                darkMode 
                  ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-850 hover:border-zinc-700' 
                  : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50 hover:shadow-lg'
              }`}
            >
              <span>Order on WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-500" />
            </a>
          </motion.div>

          {/* Fast trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 mt-12 pt-8 border-t border-zinc-850 w-full"
          >
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-brand-gold" />
              <span className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                Dubai Registered Trading LLC
              </span>
            </div>
            <div className="h-3 w-[1px] bg-zinc-800" />
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-500" />
              <span className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                100% Insured Delivery Guarantee
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium High-Fidelity Flyer Representation */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Animated luxury background halo */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-brand-gold/10 animate-[spin_20s_linear_infinite] z-0" />
          <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-brand-gold/5 animate-[spin_40s_linear_infinite] z-0" />

          {/* Interactive Flyer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative w-full max-w-[380px] rounded-[24px] overflow-hidden bg-black border border-zinc-800 p-6 shadow-2xl shadow-black/80 text-white z-10"
          >
            {/* Header: Brand Logo */}
            <div className="flex justify-between items-center mb-6">
              <LogoIcon size={32} showText={true} darkMode={true} />
              <div className="flex items-center gap-1 bg-brand-gold/10 border border-brand-gold/30 px-2 py-0.5 rounded text-[9px] font-bold text-brand-gold uppercase tracking-wider font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
                Live Rates
              </div>
            </div>

            {/* Flyer Subtext */}
            <div className="text-center mt-2 mb-4">
              <h3 className="font-display text-2xl font-black tracking-tight leading-none text-white">
                iPhone <span className="text-brand-gold">17 Pro</span> Series
              </h3>
              <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-[0.25em] mt-1">
                Now Available in Stock
              </p>
            </div>

            {/* Simulated Gold Metallic phone rendering */}
            <div className="relative h-24 mb-5 flex justify-center items-center overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-850 p-3">
              <div className="absolute right-3 top-2 h-16 w-16 rounded-full bg-brand-gold/15 blur-lg" />
              <div className="flex items-center gap-4 relative z-10 w-full justify-between">
                <div>
                  <span className="text-xs bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded font-mono font-bold uppercase">
                    New Design
                  </span>
                  <p className="text-[11px] text-zinc-400 mt-1.5">Metallic Titanium Gold Accent</p>
                  <p className="text-xs font-bold text-white mt-0.5">Dual Sim / eSIM</p>
                </div>
                {/* Simulated iPhone Camera Lens layout */}
                <div className="h-16 w-16 rounded-2xl bg-zinc-900 border border-zinc-800 p-2 flex flex-col justify-between shadow-inner">
                  <div className="flex justify-between items-center">
                    <div className="h-3.5 w-3.5 rounded-full bg-black border border-zinc-800 flex items-center justify-center p-0.5"><div className="h-1.5 w-1.5 rounded-full bg-zinc-900 border border-brand-gold/40" /></div>
                    <div className="h-3.5 w-3.5 rounded-full bg-black border border-zinc-800 flex items-center justify-center p-0.5"><div className="h-1.5 w-1.5 rounded-full bg-zinc-900 border border-brand-gold/40" /></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-3.5 w-3.5 rounded-full bg-black border border-zinc-800 flex items-center justify-center p-0.5"><div className="h-1.5 w-1.5 rounded-full bg-zinc-900 border border-brand-gold/40" /></div>
                    <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" /> {/* flash */}
                  </div>
                </div>
              </div>
            </div>

            {/* Price Table reflecting Flyer Prices */}
            <div className="space-y-2 text-xs">
              {[
                { name: 'iPhone 17 Pro 256GB', priceAED: '3,950', priceINR: '1,05,000' },
                { name: 'iPhone 17 Pro Max 256GB', priceAED: '4,350', priceINR: '1,15,000' },
                { name: 'iPhone 17 Pro 512GB', priceAED: '4,750', priceINR: '1,30,000' },
                { name: 'iPhone 17 Pro Max 512GB', priceAED: '5,250', priceINR: '1,40,000' },
              ].map((row, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between py-2 border-b border-zinc-900 hover:bg-zinc-900/30 px-1 rounded transition-colors duration-150"
                >
                  <div className="text-left">
                    <p className="font-semibold text-white text-[11px]">{row.name}</p>
                    <p className="text-[9px] text-zinc-500 font-mono">100% Original Sealed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-brand-gold font-bold text-xs">{row.priceAED} <span className="text-[9px] font-mono font-medium text-zinc-400">AED</span></p>
                    <p className="text-[9px] text-zinc-400 font-mono font-semibold">({row.priceINR} RS)</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Flyer Footer Details */}
            <div className="mt-4 pt-3 flex items-center justify-between text-[9px] text-zinc-500 border-t border-zinc-900 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="h-2.5 w-2.5 text-brand-gold" /> Deira Mall, Dubai
              </span>
              <span>4+ Years Success</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
