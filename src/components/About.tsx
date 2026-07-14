import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Gem, Users, Star, ArrowRight, Building, CheckCircle } from 'lucide-react';
import { GLOBAL_IMAGES } from '../data';

interface AboutProps {
  onExploreProducts: () => void;
  darkMode: boolean;
}

export default function About({ onExploreProducts, darkMode }: AboutProps) {
  const [readMore, setReadMore] = useState(false);

  const stats = [
    { value: '4+', label: 'Years in Dubai' },
    { value: '8+', label: 'Years Global Experience' },
    { value: '10K+', label: 'Customers Served' },
    { value: '100%', label: 'Genuine Hardware' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase & Stats */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Showroom visual grid */}
            <div className="relative rounded-[28px] overflow-hidden border border-zinc-850 bg-black p-4 shadow-2xl max-w-sm w-full">
              {/* Overlay with glass look */}
              <div className="absolute top-4 right-4 z-10 bg-black/60 border border-zinc-800 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider">
                Deira Showroom
              </div>
              
              <div className="relative h-64 rounded-2xl overflow-hidden bg-zinc-950 flex items-center justify-center border border-zinc-900">
                <img 
                  src={GLOBAL_IMAGES.showroomDubai} 
                  alt="Win Win Wireless Showroom Dubai" 
                  className="object-cover h-full w-full opacity-60 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Simulated store banner */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">WIN WIN WIRELESS</p>
                  <p className="text-sm font-bold text-white mt-0.5">One Deira Mall, Gold Souk, Dubai</p>
                </div>
              </div>

              {/* Stats bento layout */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {stats.map((st, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3.5 rounded-xl border text-center ${
                      darkMode ? 'bg-zinc-900/40 border-zinc-850' : 'bg-zinc-50 border-zinc-150'
                    }`}
                  >
                    <p className="text-xl md:text-2xl font-black text-brand-gold font-mono leading-none">
                      {st.value}
                    </p>
                    <p className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider mt-1">
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <span className="text-xs font-mono font-bold text-brand-gold tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full uppercase w-fit">
              Corporate Dossier
            </span>
            
            <h2 className={`font-display text-3xl md:text-5xl font-black tracking-tight mt-4 mb-6 ${
              darkMode ? 'text-white' : 'text-zinc-950'
            }`}>
              Connecting Dubai's Wholesale Value to Global Customers
            </h2>

            <div className={`space-y-4 text-sm md:text-base leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-650'}`}>
              <p>
                Win Win Wireless has been one of Dubai's highly trusted iPhone trading companies for more than four successful years. We specialize in sourcing and distributing top-tier Brand New Sealed and certified pristine Demo iPhones at highly competitive wholesale rates.
              </p>
              <p>
                Whether you are a retail buyer looking for a premium personal device, an independent reseller looking for solid wholesale inventory, or a bulk importer based in the UAE or India, our dedicated procurement networks guarantee absolute device authenticity, transparent market pricing, and top-tier direct support.
              </p>
            </div>

            {/* Read More Accordion */}
            <AnimatePresence>
              {readMore && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`mt-4 pt-4 border-t border-zinc-850 space-y-4 text-xs md:text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <p>
                      <strong>Strategic Supply Chain:</strong> By operating directly within the historical Gold Souk trading corridor in Deira, we leverage deep shipping and custom clearance networks. Every single batch of demo phones is imported from verified global store networks and undergoes strict 40-point diagnostics checks before display.
                    </p>
                    <p>
                      <strong>Reseller Benefits:</strong> We maintain a daily liquid spreadsheet containing ready stocks in Dubai. Resellers in major Indian cities (Delhi, Mumbai, Chennai, Bengaluru) benefit from fully insured domestic door-to-door shipping, clearing all regional tax declarations safely so your devices arrive in mint condition.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More Trigger and Shop redirect */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                id="toggle-read-more-btn"
                onClick={() => setReadMore(!readMore)}
                className={`py-3 px-6 rounded-full text-xs font-bold border transition-all cursor-pointer text-center ${
                  darkMode 
                    ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-850 hover:border-zinc-700' 
                    : 'bg-zinc-100 border-zinc-200 text-zinc-950 hover:bg-zinc-200'
                }`}
              >
                <span>{readMore ? 'Show Less Info' : 'Read More About Us'}</span>
              </button>

              <button
                id="explore-stock-about-btn"
                onClick={onExploreProducts}
                className="flex items-center justify-center gap-1.5 bg-brand-gold hover:bg-amber-500 text-zinc-950 font-bold py-3 px-6 rounded-full text-xs transition-all hover:scale-105 shadow-md shadow-brand-gold/15 cursor-pointer"
              >
                <span>Explore Live Inventory</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Trust pillars footer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-800/10 dark:border-zinc-800/40">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                  100% Original
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="h-5 w-5 text-brand-gold" />
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                  Luxury Service
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-gold" />
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                  Retail & B2B
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
