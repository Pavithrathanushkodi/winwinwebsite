import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LogoIcon from './LogoIcon';
import { 
  Menu, X, PhoneCall, Globe, ShieldCheck, TrendingUp, Sun, Moon 
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ 
  darkMode, 
  setDarkMode, 
  activeTab, 
  setActiveTab 
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'investment', label: 'Our Investment Plan' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Daily Ticker Bar */}
      <div className="w-full bg-black border-b border-zinc-800 text-white py-2 overflow-hidden text-xs md:text-sm">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          <span className="mx-4 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-ping" />
            <span className="font-bold text-brand-gold">DAILY UPDATE:</span> iPhone 17 Series Ready Stock in Dubai!
          </span>
          <span className="mx-4 text-zinc-400 font-medium">|</span>
          <span className="mx-4 flex items-center gap-1 text-zinc-300">
            <Globe className="h-3 w-3 text-brand-gold" /> India & UAE Insured Doorstep Delivery Active
          </span>
          <span className="mx-4 text-zinc-400 font-medium">|</span>
          <span className="mx-4 flex items-center gap-1 text-zinc-300">
            <ShieldCheck className="h-3 w-3 text-emerald-400" /> 100% Genuine Brand New & Pristine Demo Phones with Shop Warranty
          </span>
          <span className="mx-4 text-zinc-400 font-medium">|</span>
          <span className="mx-4 flex items-center gap-1 text-zinc-300">
            <TrendingUp className="h-3 w-3 text-brand-gold" /> Real-time Wholesale pricing online
          </span>
          <span className="mx-4 text-zinc-400 font-medium">|</span>
          
          {/* Repeat for seamless loop */}
          <span className="mx-4 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-ping" />
            <span className="font-bold text-brand-gold">DAILY UPDATE:</span> iPhone 17 Series Ready Stock in Dubai!
          </span>
          <span className="mx-4 text-zinc-400 font-medium">|</span>
          <span className="mx-4 flex items-center gap-1 text-zinc-300">
            <Globe className="h-3 w-3 text-brand-gold" /> India & UAE Insured Doorstep Delivery Active
          </span>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div 
        className={`w-full py-3 px-4 md:px-8 transition-all duration-300 ${
          scrolled 
            ? darkMode 
              ? 'bg-zinc-950/90 shadow-lg shadow-black/30 border-b border-zinc-800/80 backdrop-blur-md' 
              : 'bg-white/90 shadow-md shadow-zinc-200/50 border-b border-zinc-200 backdrop-blur-md'
            : darkMode
              ? 'bg-transparent border-b border-transparent'
              : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button 
            id="header-logo-btn"
            onClick={() => { setActiveTab('home'); setIsOpen(false); }}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <LogoIcon size={100} showText={true} darkMode={darkMode} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative py-2 px-4 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-brand-gold font-semibold' 
                      : darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className={`absolute inset-0 rounded-full ${darkMode ? 'bg-zinc-900/80 border border-zinc-800' : 'bg-zinc-100 border border-zinc-200'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Actions (WhatsApp Call) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Direct Instant Contact Button */}
            <a
              id="header-cta-btn"
              href="https://wa.me/971567451002"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-brand-gold hover:bg-amber-500 text-zinc-950 py-2 px-5 rounded-full text-sm font-semibold tracking-wide shadow-md shadow-brand-gold/25 transition-all duration-200"
            >
              <PhoneCall className="h-4 w-4" />
              <span>WhatsApp Live</span>
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={toggleMenu}
              className={`p-2 rounded-lg border ${
                darkMode 
                  ? 'bg-zinc-900/80 border-zinc-850 text-white' 
                  : 'bg-zinc-100 border-zinc-200 text-zinc-900'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Animations Ticker Style inside CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden w-full border-b overflow-hidden shadow-2xl ${
              darkMode 
                ? 'bg-zinc-950 border-zinc-800 text-white' 
                : 'bg-white border-zinc-200 text-zinc-900'
            }`}
          >
            <div className="p-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const isActive = activeTab === item.id;
                  return (
                    <motion.button
                      id={`mobile-nav-${item.id}`}
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsOpen(false);
                      }}
                      className={`w-full py-3 px-4 rounded-xl text-left font-medium transition-all duration-150 ${
                        isActive
                          ? 'bg-brand-gold/10 text-brand-gold font-bold border-l-4 border-brand-gold'
                          : darkMode 
                            ? 'hover:bg-zinc-900 text-zinc-300 hover:text-white' 
                            : 'hover:bg-zinc-50 text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>

              <div className="h-[1px] bg-zinc-800/20 my-2" />

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/971567451002"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-500 text-zinc-950 py-3 px-6 rounded-xl font-bold shadow-lg shadow-brand-gold/20"
                >
                  <PhoneCall className="h-4.5 w-4.5" />
                  <span>Order on WhatsApp</span>
                </a>
                <div className="text-center text-xs text-zinc-500 font-mono mt-1">
                  📍 Deira Mall, Gold Souk, Dubai, UAE
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
