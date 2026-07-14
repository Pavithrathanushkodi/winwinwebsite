import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Updates from './components/Updates';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Investment from './components/Investment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LogoIcon from './components/LogoIcon';
import { 
  ChevronLeft, ChevronRight, Star, Send, PhoneCall, CheckCircle2,
  MapPin, X, Briefcase, Sparkles, ArrowRight
} from 'lucide-react';
import { 
  CUSTOMER_REVIEWS_DATA, FAQS_DATA 
} from './data';
// @ts-ignore
import goldBannerImg from './assets/images/iphone_gold_banner_1783948174425.jpg';
// @ts-ignore
import showroomImg from './assets/images/win_win_showroom_1783949127599.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [activeFaqCategory, setActiveFaqCategory] = useState<'all' | 'products' | 'delivery' | 'general'>('all');
  const [selectedProductIdFromHero, setSelectedProductIdFromHero] = useState<string | null>(null);
  const [showInvestmentPopup, setShowInvestmentPopup] = useState(false);

  // Trigger investment popup automatically after 1.5 seconds on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeTab === 'home') {
        setShowInvestmentPopup(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Sync theme with system classlist
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    setOpenFaqIdx(null); // Reset FAQ states
  }, [activeTab]);

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % CUSTOMER_REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + CUSTOMER_REVIEWS_DATA.length) % CUSTOMER_REVIEWS_DATA.length);
  };

  // Filter FAQs
  const filteredFaqs = FAQS_DATA.filter(faq => {
    if (activeFaqCategory === 'all') return true;
    return faq.category === activeFaqCategory;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const handleFeaturedProductClick = (productId: string) => {
    setSelectedProductIdFromHero(productId);
    setActiveTab('products');
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 relative overflow-x-hidden ${
      darkMode ? 'bg-zinc-950 text-zinc-100 selection:bg-brand-gold selection:text-zinc-950' : 'bg-[#fbfbfd] text-[#1d1d1f] selection:bg-brand-gold selection:text-zinc-950'
    }`}>
      
      {/* Brand Watermark Elements (Extremely subtle, elegant and non-interfering) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top Right large background watermark */}
        <div className="absolute top-[120px] -right-24 w-[380px] h-[380px] opacity-[0.015] dark:opacity-[0.028] rotate-[15deg] transition-opacity duration-500">
          <LogoIcon size="100%" darkMode={darkMode} />
        </div>
        
        {/* Mid Left background watermark */}
        <div className="absolute top-[35%] -left-20 w-[280px] h-[280px] opacity-[0.01] dark:opacity-[0.02] rotate-[-20deg] transition-opacity duration-500">
          <LogoIcon size="100%" darkMode={darkMode} />
        </div>

        {/* Lower Right background watermark */}
        <div className="absolute bottom-[20%] -right-16 w-[340px] h-[340px] opacity-[0.012] dark:opacity-[0.025] rotate-[25deg] transition-opacity duration-500">
          <LogoIcon size="100%" darkMode={darkMode} />
        </div>

        {/* Bottom Left background watermark */}
        <div className="absolute bottom-[5%] -left-20 w-[400px] h-[400px] opacity-[0.008] dark:opacity-[0.018] rotate-[45deg] transition-opacity duration-500">
          <LogoIcon size="100%" darkMode={darkMode} />
        </div>
      </div>
      
      {/* 1. HEADER (Includes daily price updates & navigation) */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* 2. DYNAMIC MAIN ROUTER WRAPPER */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* VIEW A: HOME PAGE */}
            {activeTab === 'home' && (
              <div id="home-view">
                {/* Hero Section */}
                <Hero 
                  onShopClick={() => setActiveTab('products')} 
                  onContactClick={() => setActiveTab('contact')} 
                  darkMode={darkMode} 
                />

                {/* Centerpiece Cinema Brand Showcase Banner (Gold Edition) */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative rounded-[32px] overflow-hidden border ${
                      darkMode ? 'border-zinc-800 bg-black' : 'border-zinc-250 bg-white'
                    } shadow-2xl shadow-black/30 group`}
                  >
                    {/* Dark gradient overlay for modern look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent z-10 pointer-events-none" />
                    
                    {/* Refined golden glow overlay */}
                    <div className="absolute -top-12 -left-12 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Highly polished image responsive wrap */}
                    <div className="aspect-[21/9] md:aspect-[16/7] lg:aspect-[21/9] w-full overflow-hidden flex items-center justify-center">
                      <img 
                        src={goldBannerImg}
                        alt="Win Win Wireless - Premium iPhone 17 Lineup Desert Gold Edition"
                        className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-1000 ease-out"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Bottom overlay with luxury copy details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 z-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-brand-gold bg-brand-gold/15 border border-brand-gold/30 px-2.5 py-1 rounded-full uppercase">
                            Premium Showcase
                          </span>
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] font-mono text-zinc-400">Available in Showroom</span>
                        </div>
                        <h3 className="font-display text-lg md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                          iPhone 17 & 16 Pro Max • Dubai Gold Souk Edition
                        </h3>
                        <p className="text-xs text-zinc-300 mt-2 max-w-xl leading-relaxed">
                          Sleek titanium builds and advanced camera setups. Direct B2B shipments of sealed European physical Dual-SIM and eSIM stock ready for immediate delivery.
                        </p>
                      </div>

                      <button 
                        onClick={() => setActiveTab('products')}
                        className="shrink-0 bg-brand-gold hover:bg-amber-500 text-zinc-950 font-bold py-3 px-6 rounded-full text-xs transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-gold/10 flex items-center gap-2 cursor-pointer self-start md:self-end"
                      >
                        <span>Request Custom Batch Rate</span>
                      </button>
                    </div>
                  </motion.div>
                </section>

                {/* Latest Updates Card Slider */}
                <Updates 
                  onLearnMore={(tabId) => setActiveTab(tabId)} 
                  darkMode={darkMode} 
                />

                {/* Featured Products Collection (Displays only four models) */}
                <Products 
                  darkMode={darkMode} 
                  featuredOnly={true} 
                  onSeeAllClick={() => setActiveTab('products')}
                  selectedProductIdFromHero={selectedProductIdFromHero}
                  setSelectedProductIdFromHero={setSelectedProductIdFromHero}
                />

                 {/* Why Choose Us */}
                <WhyChooseUs darkMode={darkMode} />

                {/* OUR OUTLETS & REGISTERED SHOWROOMS SECTION */}
                <section className="py-16 px-4 sm:px-6 md:px-8 border-t border-zinc-800/15 dark:border-zinc-800/40">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      {/* Left: Outlet image */}
                      <div className="lg:col-span-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-[32px] blur-2xl pointer-events-none" />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className={`relative rounded-[32px] overflow-hidden border ${
                            darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
                          } shadow-2xl`}
                        >
                          <img 
                            src={showroomImg} 
                            alt="Win Win Wireless Physical Luxury Showroom, Dubai"
                            className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl flex justify-between items-center text-left">
                            <div>
                              <p className="text-xs font-mono text-brand-gold font-bold">PHYSICAL OUTLET</p>
                              <h4 className="text-sm font-bold text-white">Deira Mall Showroom</h4>
                            </div>
                            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                              OPEN DAILY
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right: Outlets Description & Details */}
                      <div className="lg:col-span-6 text-left">
                        <span className="text-xs font-mono font-bold text-brand-gold tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full uppercase">
                          Visit Our Outlets
                        </span>
                        <h3 className={`font-display text-2xl md:text-4xl font-black tracking-tight mt-4 mb-6 leading-tight ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                          Our Physical Showrooms in Dubai Gold Souk
                        </h3>
                        <p className={`text-sm md:text-base leading-relaxed mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                          Unlike online-only vendors, Win Win Wireless is a fully registered LLC with an established premium showroom in Deira, Dubai's legendary Gold Souk area. Walk in to verify serial numbers, test demo handsets under warm luxury lounge conditions, and settle payments securely with local bank details or cash options.
                        </p>

                        <div className="space-y-4 font-sans">
                          <div className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                            darkMode ? 'bg-zinc-900/30 border-zinc-850' : 'bg-white border-zinc-200 shadow-sm'
                          }`}>
                            <div className="h-10 w-10 shrink-0 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Primary Dubai Showroom</h4>
                              <p className="text-xs text-zinc-500 mt-1">Shop No. 12, Ground Floor, Deira Mall, Near Gold Souk Metro Station, Deira, Dubai, UAE</p>
                              <p className="text-xs text-brand-gold font-mono font-bold mt-1">🕒 Monday - Sunday: 10:00 AM - 11:00 PM</p>
                            </div>
                          </div>

                          <div className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                            darkMode ? 'bg-zinc-900/30 border-zinc-850' : 'bg-white border-zinc-200 shadow-sm'
                          }`}>
                            <div className="h-10 w-10 shrink-0 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                              <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Reseller Verification Desk</h4>
                              <p className="text-xs text-zinc-500 mt-1">Bulk batch collection point and real-time inventory inspection counter.</p>
                              <a 
                                href="https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%20want%2520to%20visit%20your%20Deira%20showroom."
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-brand-gold hover:underline font-bold mt-1 inline-block"
                              >
                                Schedule Showroom Appointment &rarr;
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Home Page About Us Section */}
                <About 
                  onExploreProducts={() => setActiveTab('products')} 
                  darkMode={darkMode} 
                />

                {/* CUSTOMER REVIEWS CAROUSEL */}
                <section className="py-16 px-4 sm:px-6 md:px-8 border-t border-zinc-800/15 dark:border-zinc-800/40">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                      <span className="text-xs font-mono font-bold text-brand-gold tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full uppercase">
                        Client Testimonials
                      </span>
                      <h3 className={`font-display text-2xl md:text-4xl font-black tracking-tight mt-4 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                        What Our Customers Say
                      </h3>
                    </div>

                    <div className={`relative p-8 md:p-12 rounded-[28px] border text-left overflow-hidden ${
                      darkMode ? 'bg-zinc-900/30 border-zinc-850' : 'bg-white border-zinc-200 shadow-md'
                    }`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 blur-2xl rounded-full" />
                      
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-6 text-brand-gold">
                        {[...Array(CUSTOMER_REVIEWS_DATA[activeReviewIdx].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>

                      {/* Comment Quote */}
                      <blockquote className={`text-base md:text-lg leading-relaxed font-medium mb-6 ${
                        darkMode ? 'text-zinc-200' : 'text-zinc-850 font-medium'
                      }`}>
                        "{CUSTOMER_REVIEWS_DATA[activeReviewIdx].comment}"
                      </blockquote>

                      {/* Author Details */}
                      <div className="flex items-center justify-between pt-6 border-t border-zinc-800/10 dark:border-zinc-800/40">
                        <div>
                          <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                            {CUSTOMER_REVIEWS_DATA[activeReviewIdx].name}
                          </p>
                          <p className="text-xs text-zinc-500 font-mono mt-0.5">
                            📍 {CUSTOMER_REVIEWS_DATA[activeReviewIdx].location} • {CUSTOMER_REVIEWS_DATA[activeReviewIdx].date}
                          </p>
                        </div>
                        {CUSTOMER_REVIEWS_DATA[activeReviewIdx].verified && (
                          <span className="text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full uppercase">
                            Verified Buyer
                          </span>
                        )}
                      </div>

                      {/* Manual slide controllers */}
                      <div className="flex gap-2.5 justify-end mt-6">
                        <button
                          onClick={prevReview}
                          className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                            darkMode ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800' : 'bg-zinc-100 border-zinc-200 text-zinc-900 hover:bg-zinc-200'
                          }`}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={nextReview}
                          className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                            darkMode ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800' : 'bg-zinc-100 border-zinc-200 text-zinc-900 hover:bg-zinc-200'
                          }`}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* GLOBAL FAQ ACCORDION AT HOME */}
                <section className="py-16 px-4 sm:px-6 md:px-8 border-t border-zinc-800/15 dark:border-zinc-800/40">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10 text-left md:text-center">
                      <span className="text-xs font-mono font-bold text-brand-gold tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full uppercase">
                        Product Support
                      </span>
                      <h3 className={`font-display text-2xl md:text-4xl font-black tracking-tight mt-4 mb-4 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                        Frequently Answered Questions
                      </h3>
                      
                      {/* Filter tabs */}
                      <div className="flex flex-wrap justify-start md:justify-center gap-2 mt-6">
                        {(['all', 'products', 'delivery', 'general'] as const).map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                              setActiveFaqCategory(cat);
                              setOpenFaqIdx(null);
                            }}
                            className={`py-1.5 px-3.5 rounded-full text-xs font-bold border transition-all cursor-pointer capitalize ${
                              activeFaqCategory === cat 
                                ? 'bg-brand-gold text-zinc-950 border-brand-gold' 
                                : darkMode ? 'bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white' : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                            }`}
                          >
                            {cat === 'all' ? 'All Questions' : cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {filteredFaqs.map((faq, idx) => {
                        const isOpen = openFaqIdx === idx;
                        return (
                          <div
                            key={idx}
                            className={`rounded-2xl border overflow-hidden ${
                              darkMode ? 'bg-zinc-900/20 border-zinc-850' : 'bg-white border-zinc-200'
                            }`}
                          >
                            <button
                              onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                              className="w-full p-5 flex justify-between items-center text-left font-bold text-sm md:text-base outline-none cursor-pointer"
                            >
                              <span className={darkMode ? 'text-white' : 'text-zinc-900'}>{faq.question}</span>
                              <ChevronRight className={`h-4.5 w-4.5 text-brand-gold transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className={`px-5 pb-5 text-xs md:text-sm leading-relaxed border-t ${
                                    darkMode ? 'border-zinc-850 text-zinc-400' : 'border-zinc-100 text-zinc-650'
                                  }`}
                                >
                                  {faq.answer}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>

                {/* EXCLUSIVE LIMITED OFFER BANNER */}
                <section className="py-8 px-4 sm:px-6 md:px-8 mx-4 sm:mx-6 md:mx-8 mb-16 rounded-[24px] bg-zinc-900/40 border border-brand-gold/20 text-white relative overflow-hidden shadow-xl shadow-brand-gold/5">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px] opacity-10" />
                  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10 text-center lg:text-left">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-full uppercase tracking-wider">
                        Transit Promotion
                      </span>
                      <h4 className="font-display text-lg md:text-2xl font-black mt-2">
                        Free Insured Door-To-Door Shipping to India
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                        Purchase any iPhone 17 or 16 Pro Max model this week and receive complimentary fully insured shipping directly to your Indian address.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%2520would%20like%20to%20take%20advantage%20of%20the%20Free%20India%20Delivery%20offer."
                      target="_blank"
                      rel="noreferrer"
                      className="bg-brand-gold hover:bg-amber-500 text-zinc-950 font-bold py-3 px-6 rounded-full text-xs transition-transform hover:scale-105 shadow-md flex items-center gap-2"
                    >
                      <PhoneCall className="h-4 w-4 text-zinc-950" />
                      <span>Claim Free Shipping Desk</span>
                    </a>
                  </div>
                </section>

                {/* PREMIUM NEWSLETTER PORTAL */}
                <section className={`py-16 px-4 sm:px-6 md:px-8 border-t ${
                  darkMode ? 'bg-zinc-950/80 border-zinc-900' : 'bg-zinc-100 border-zinc-200'
                }`}>
                  <div className="max-w-xl mx-auto text-center">
                    <span className="text-xs font-mono font-bold text-brand-gold tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full uppercase">
                      Direct Dispatch
                    </span>
                    <h3 className={`font-display text-2xl md:text-3xl font-black tracking-tight mt-4 mb-2 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                      Subscribe to Daily Wholesale Stock sheets
                    </h3>
                    <p className={`text-xs md:text-sm mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                      Get daily automated spreadsheets containing ready inventory quantities, live AED pricing, and special reseller package rates.
                    </p>

                    <AnimatePresence>
                      {newsletterSubmitted ? (
                        <motion.div
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center justify-center gap-2 font-semibold"
                        >
                          <CheckCircle2 className="h-4.5 w-4.5" />
                          <span>Subscription active! Check your inbox for today's catalog.</span>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                          <input
                            id="newsletter-email-input"
                            type="email"
                            required
                            placeholder="Enter your reseller/personal email..."
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            className={`flex-grow p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                              darkMode 
                                ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                                : 'bg-white border-zinc-200 text-zinc-950 focus:border-brand-gold'
                            }`}
                          />
                          <button
                            id="newsletter-submit-btn"
                            type="submit"
                            className="bg-brand-gold hover:bg-amber-500 text-zinc-950 p-3 rounded-xl transition-all shadow-md flex items-center justify-center cursor-pointer"
                          >
                            <Send className="h-4 w-4" />
                          </button>
                        </form>
                      )}
                    </AnimatePresence>
                  </div>
                </section>
              </div>
            )}

            {/* VIEW B: PRODUCTS PAGE */}
            {activeTab === 'products' && (
              <div id="products-view">
                <Products 
                  darkMode={darkMode} 
                  featuredOnly={false} 
                  selectedProductIdFromHero={selectedProductIdFromHero}
                  setSelectedProductIdFromHero={setSelectedProductIdFromHero}
                />
              </div>
            )}

            {/* VIEW C: INVESTMENT PORTAL */}
            {activeTab === 'investment' && (
              <div id="investment-view">
                <Investment darkMode={darkMode} />
              </div>
            )}

            {/* VIEW D: ABOUT PORTAL */}
            {activeTab === 'about' && (
              <div id="about-view">
                <About 
                  onExploreProducts={() => setActiveTab('products')} 
                  darkMode={darkMode} 
                />
              </div>
            )}

            {/* VIEW E: CONTACT PORTAL */}
            {activeTab === 'contact' && (
              <div id="contact-view">
                <Contact darkMode={darkMode} />
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. FOOTER (Multi-column map list layouts) */}
      <Footer 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
      />

      {/* 4. FLOATING UTILITIES (WhatsApp direct helper & Back To Top desk) */}
      <WhatsAppFloat />

      {/* INVESTMENT POPUP MODAL (New Plan to Grow Together) */}
      <AnimatePresence>
        {showInvestmentPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInvestmentPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className={`relative w-full max-w-lg rounded-[32px] overflow-hidden border p-8 text-left z-10 ${
                darkMode ? 'bg-zinc-950 border-zinc-850 text-white' : 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
              }`}
            >
              {/* Top corner gradient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                id="close-investment-popup"
                onClick={() => setShowInvestmentPopup(false)}
                className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
                  darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-brand-gold" />
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-gold uppercase">
                  Active Capital Slot 2026
                </span>
              </div>

              {/* Title & Slogan */}
              <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight leading-tight mb-2">
                New Plan to <span className="text-brand-gold">Grow Together</span> 🤝
              </h3>
              <p className={`text-xs md:text-sm mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                Become a silent partner in Dubai's premier high-volume iPhone trading desk. We handle the direct bulk container logistics; you reap fixed annualized returns with legal coverage.
              </p>

              {/* Core Offer Highlights */}
              <div className="space-y-4 mb-6">
                {[
                  {
                    title: 'High Liquid Yields',
                    desc: 'Get contracted returns from 30% up to 40% per annum, paid in fixed quarterly increments.',
                    icon: <Briefcase className="h-4 w-4 text-brand-gold" />
                  },
                  {
                    title: '100% Legal Safeguards',
                    desc: 'Notarized LLC agreements alongside signed post-dated bank cheques representing all quarterly payouts.',
                    icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-mono tracking-wide uppercase">{item.title}</h4>
                      <p className={`text-xs mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-550'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini calculator / fast call out */}
              <div className={`p-4 rounded-2xl mb-6 border text-center ${
                darkMode ? 'bg-zinc-900/40 border-zinc-850' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <p className={`text-[10px] font-mono tracking-wider ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  ESTIMATED RETURN SAMPLE
                </p>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className={`text-xl font-black ${darkMode ? 'text-white' : 'text-zinc-950'}`}>13,000 AED</span>
                  <span className="text-xs text-zinc-400 font-mono">Return on 10k principal</span>
                </div>
              </div>

              {/* Action button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%20saw%20your%20Grow%20Together%20Investment%20Plan%20popup%20and%2520would%20like%20to%20receive%20the%20details."
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-500 text-zinc-950 font-bold py-3 px-6 rounded-full text-xs transition-transform hover:scale-105 shadow-md shadow-brand-gold/15"
                >
                  <span>Request Plan Proposal</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <button
                  onClick={() => {
                    setShowInvestmentPopup(false);
                    setActiveTab('investment');
                  }}
                  className={`py-3 px-6 rounded-full text-xs font-bold transition-all ${
                    darkMode ? 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300' : 'bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700'
                  }`}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
