import { motion } from 'motion/react';
import { NEWS_UPDATES_DATA } from '../data';
import { ArrowRight, BellRing, Sparkles, CheckCircle } from 'lucide-react';

interface UpdatesProps {
  onLearnMore: (tabId: string) => void;
  darkMode: boolean;
}

export default function Updates({ onLearnMore, darkMode }: UpdatesProps) {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 border-t border-b border-zinc-900/10 dark:border-zinc-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title with premium badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4.5 w-4.5 text-brand-gold" />
              <span className={`text-xs font-mono font-bold tracking-[0.2em] uppercase ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                Win Win Dispatch
              </span>
            </div>
            <h2 className={`font-display text-2xl md:text-4xl font-black tracking-tight flex items-center gap-2 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              <BellRing className="h-6 w-6 text-brand-gold animate-bounce" />
              <span>Latest Updates & Live News</span>
            </h2>
          </div>
          <p className={`text-sm mt-2 md:mt-0 max-w-md ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
            Stay up to date with daily developments, new custom shipments, and B2B announcements directly from Deira, Dubai.
          </p>
        </div>

        {/* Updates Card Slider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_UPDATES_DATA.map((update, index) => {
            return (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl p-6 flex flex-col justify-between h-full border ${
                  darkMode 
                    ? 'bg-zinc-900/40 border-zinc-850 hover:bg-zinc-900/70 hover:border-brand-gold/40' 
                    : 'bg-white border-zinc-150 hover:bg-zinc-50 hover:border-brand-gold/30 shadow-sm hover:shadow-md'
                } transition-all duration-300`}
              >
                {/* Glow Element */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-brand-gold/5 blur-2xl group-hover:bg-brand-gold/15 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Category Tag & Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-brand-gold bg-brand-gold/5 px-2 py-0.5 rounded border border-brand-gold/10">
                      {update.tag}
                    </span>
                    {update.badge && (
                      <span className="text-[9px] font-bold bg-brand-gold text-black px-1.5 py-0.5 rounded-full font-mono shadow-xs animate-pulse">
                        {update.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Check Icon */}
                  <h3 className={`font-display text-lg font-bold tracking-tight mb-2 flex items-start gap-2 leading-snug group-hover:text-brand-gold transition-colors duration-200 ${
                    darkMode ? 'text-white' : 'text-zinc-950'
                  }`}>
                    <CheckCircle className="h-4 w-4 text-brand-gold shrink-0 mt-1" />
                    <span>{update.title}</span>
                  </h3>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed mb-6 ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-650'
                  }`}>
                    {update.description}
                  </p>
                </div>

                {/* Date & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/10 dark:border-zinc-800/40 text-xs font-mono">
                  <span className={`${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    {update.date}
                  </span>
                  
                  <button
                    onClick={() => {
                      if (update.id === 'upd-1' || update.id === 'upd-4') {
                        onLearnMore('products');
                      } else if (update.id === 'upd-3') {
                        onLearnMore('products'); // Wholesale badges
                      } else {
                        onLearnMore('contact');
                      }
                    }}
                    className={`flex items-center gap-1 font-bold text-[11px] group-hover:gap-2 transition-all duration-200 cursor-pointer ${
                      darkMode ? 'text-zinc-300 group-hover:text-brand-gold' : 'text-zinc-700 group-hover:text-brand-gold'
                    }`}
                  >
                    <span>Action</span>
                    <ArrowRight className="h-3 w-3 text-brand-gold" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global CTA banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-950 to-zinc-900 border border-zinc-850 flex flex-col md:flex-row justify-between items-center gap-4 text-left shadow-lg shadow-black/20"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20">
              B2B CHANNEL
            </span>
            <h3 className="font-display text-lg font-bold text-white mt-2">
              Are you a Retailer or Indian Reseller?
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl">
              Get added to our wholesale distribution list to receive daily pricing files and real-time stock listings before everyone else.
            </p>
          </div>
          <a
            href="https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%2520am%20a%20reseller.%20Please%20add%20me%20to%20your%20wholesale%20bulk%20list."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-brand-gold hover:bg-amber-500 text-zinc-950 py-2.5 px-6 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105"
          >
            <span>Request Wholesale Rate Sheet</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
