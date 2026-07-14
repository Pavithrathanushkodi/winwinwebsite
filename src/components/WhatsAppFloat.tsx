import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp, X, Send, ShieldCheck, Landmark } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenChat = () => {
    window.open('https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%20am%20interested%20in%20checking%20today\'s%20iPhone%20stock.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      
      {/* 1. WHATSAPP EXPANDABLE CHAT BOX */}
      <AnimatePresence>
        {showChatBox && (
          <motion.div
            id="whatsapp-micro-chat"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="w-80 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 text-white flex flex-col mb-2 text-left"
          >
            {/* Box Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 flex justify-between items-center relative">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-zinc-900 border border-emerald-400">
                  {/* Simulated headshot or gold logo */}
                  <div className="h-full w-full flex items-center justify-center font-bold text-xs text-brand-gold bg-zinc-950">
                    WW
                  </div>
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-zinc-950 animate-ping" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">Deira Sales Desk</h4>
                  <p className="text-[10px] text-emerald-100 font-mono mt-0.5">Typically replies in 3 mins</p>
                </div>
              </div>
              <button 
                onClick={() => setShowChatBox(false)}
                className="p-1 hover:bg-emerald-700/50 rounded-lg text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Box Content (Simulated messages) */}
            <div className="p-4 bg-zinc-900/60 space-y-3 max-h-60 overflow-y-auto">
              <div className="bg-zinc-900 p-3 rounded-2xl rounded-tl-none border border-zinc-850">
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Hello! Welcome to <strong>Win Win Wireless</strong>. 
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed mt-1">
                  We are currently inside our Deira Mall showroom, updating today's pricing lists. Are you looking to order a Brand New iPhone, Demo iPhone, or check wholesale stocks?
                </p>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono text-center flex items-center justify-center gap-1">
                <ShieldCheck className="h-3 w-3 text-emerald-500" /> Secure encrypted Dubai supply line
              </div>
            </div>

            {/* Box Action */}
            <div className="p-3 bg-zinc-950 border-t border-zinc-900">
              <button
                onClick={handleOpenChat}
                className="w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Start Showroom Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. DUAL INTERACTIVE TRIGGER BUTTONS */}
      <div className="flex gap-3">
        
        {/* Back To Top Trigger */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              id="back-to-top-btn"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-brand-gold hover:text-white shadow-xl hover:bg-zinc-850 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Icon Float Trigger */}
        <button
          id="floating-whatsapp-bubble"
          onClick={() => setShowChatBox(!showChatBox)}
          className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl relative cursor-pointer group transition-transform duration-300 hover:scale-105 active:scale-95"
          title="Direct WhatsApp Support"
        >
          {/* Radial Pulse Effect */}
          <span className="absolute inset-0 rounded-full border border-emerald-400/40 animate-[ping_2s_infinite] pointer-events-none" />
          <MessageCircle className="h-6 w-6" />
        </button>

      </div>

    </div>
  );
}
