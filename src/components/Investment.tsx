import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INVESTMENT_TIERS_DATA } from '../data';
import { 
  Briefcase, TrendingUp, ShieldCheck, Scale, Award, HelpCircle, 
  MapPin, CheckCircle, ChevronDown, Calculator, Calendar, ArrowRight,
  Sparkles, FileText, Landmark, Clock, FileCheck, Send
} from 'lucide-react';

interface InvestmentProps {
  darkMode: boolean;
}

export default function Investment({ darkMode }: InvestmentProps) {
  const [calcAmount, setCalcAmount] = useState<number>(10000);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Return calculation logic matching Tiers
  const calculatedResult = useMemo(() => {
    let pct = 25;
    if (calcAmount >= 25000) pct = 40;
    else if (calcAmount >= 15000) pct = 35;
    else if (calcAmount >= 10000) pct = 30;

    const totalReturn = calcAmount * (1 + pct / 100);
    const profit = totalReturn - calcAmount;
    const quarterlyPayout = totalReturn / 4;

    return {
      pct,
      totalReturn,
      profit,
      quarterlyPayout
    };
  }, [calcAmount]);

  // Formatter helpers
  const formatAED = (val: number) => {
    return new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(val);
  };

  const investmentFaqs = [
    {
      q: 'How is my investment principal secured?',
      a: 'Your principal is legally backed by solid company assets. We provide official Dubai-registered notarized contracts (Rental Agreements and Ijari collateral) alongside four signed post-dated bank cheques representing each quarterly payout to ensure absolute compliance and capital protection.'
    },
    {
      q: 'Is there a minimum term for the investment?',
      a: 'Yes, the standard investment term is exactly 12 months (1 year). This allows us to allocate capital into active iPhone container trading cycles and yield the high-margin returns efficiently.'
    },
    {
      q: 'What licenses does Win Win Wireless operate under?',
      a: 'We operate under a full Commercial Brokerage & Devices Trading License issued by the Dubai Department of Economy and Tourism (DET / DED). We are fully compliant with corporate tax registrations and certified customs imports.'
    },
    {
      q: 'Are the returns fixed or subject to market fluctuations?',
      a: 'Our returns are strictly contracted and fixed. Because we trade high-demand liquid Apple stock with pre-negotiated wholesale corridors in UAE and India, we guarantee the exact percentage return selected under your chosen investment tier.'
    }
  ];


  return (
    <div className="py-10">
      
      {/* 1. HERO BANNER */}
      <section className="relative rounded-[32px] overflow-hidden bg-black text-white p-8 md:p-16 mb-16 mx-4 sm:mx-6 md:mx-8 border border-zinc-800 shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Subtle tech blueprint background */}
          <div className="absolute inset-0 bg-[radial-gradient(#E5A93B_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-gold/20 blur-[130px]" />
        </div>

        <div className="max-w-4xl relative z-10 text-left">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-full uppercase">
            Win Win Capital Growth
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mt-6 mb-4 leading-tight">
            Invest in a <span className="text-brand-gold">Proven High-Growth</span> Retail Business
          </h1>
          <p className="text-sm md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
            Leverage Dubai’s booming mobile supply chain. Backed by 8 years of global operational excellence and 4+ years of solid commercial performance in Deira, we offer secure legal channels to expand your capital with peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%20am%20interested%20in%20your%20Business%20Investment%20program.%20Please%20share%20the%20details."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-500 text-zinc-950 font-bold py-3.5 px-6 rounded-full text-sm transition-all shadow-lg shadow-brand-gold/20"
            >
              <span>Request Investment Details</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%20would%20like%20to%20book%20a%20one-on-one%20meeting%20to%20discuss%20the%20investment%20opportunities."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-850 text-white font-bold py-3.5 px-6 rounded-full text-sm hover:bg-zinc-800 transition-all"
            >
              <Calendar className="h-4.5 w-4.5 text-brand-gold" />
              <span>Book a Meeting (Deira Mall)</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left column: Business Case & Returns */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* SECTION: Business Overview */}
          <div>
            <h2 className={`font-display text-2xl md:text-3xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Business Overview & Company Growth
            </h2>
            <p className={`text-sm md:text-base leading-relaxed mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
              The secondary mobile devices market is one of the highest liquidity commerce channels in the Middle East. Win Win Wireless operates a high-frequency trading pipeline, importing directly from secure certified supply chains and serving thousands of resellers, retail consumers, and wholesale partners globally. Over our 4+ years of dedicated operation in Deira Mall, Dubai, we have generated consistent multi-million dirham turnovers with highly secure risk-managed margins.
            </p>

            {/* Custom SVG Performance Chart: Growth comparison */}
            <div className={`p-6 rounded-2xl border mb-6 ${darkMode ? 'bg-zinc-950/40 border-zinc-850' : 'bg-zinc-50 border-zinc-200'}`}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Performance Index</h4>
                  <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Win Win Return vs Traditional Asset Classes</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Annualized</span>
              </div>

              {/* Chart simulation using beautiful interactive SVGs */}
              <div className="h-64 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 500 240">
                  {/* Grid lines */}
                  <line x1="40" y1="40" x2="480" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                  <line x1="40" y1="100" x2="480" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                  <line x1="40" y1="160" x2="480" y2="160" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                  <line x1="40" y1="210" x2="480" y2="210" stroke="rgba(255,255,255,0.1)" />

                  {/* Bars representing yields */}
                  {/* Gold (7%) */}
                  <rect x="70" y="190" width="40" height="20" fill="#9ca3af" rx="4" />
                  <text x="90" y="180" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">7% (Gold)</text>

                  {/* Real Estate Dubai (11%) */}
                  <rect x="180" y="170" width="40" height="40" fill="#a1a1aa" rx="4" />
                  <text x="200" y="160" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontWeight="bold">11% (Property)</text>

                  {/* Win Win Tier 1 (30%) */}
                  <rect x="290" y="110" width="40" height="100" fill="#e4e4e7" rx="4" />
                  <text x="310" y="100" textAnchor="middle" fill="#e4e4e7" fontSize="10" fontWeight="bold">30% (Silver)</text>

                  {/* Win Win Tier 2 (40%) */}
                  <rect x="400" y="70" width="40" height="140" fill="url(#chartGoldGrad)" rx="4" />
                  <text x="420" y="60" textAnchor="middle" fill="#E5A93B" fontSize="10" fontWeight="bold">40% (Platinum)</text>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="chartGoldGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#E5A93B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* SECTION: Investment Process Roadmap */}
          <div>
            <h2 className={`font-display text-2xl md:text-3xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Seamless Investment Process
            </h2>
            <p className={`text-sm md:text-base leading-relaxed mb-8 ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
              Our investment onboarding is highly professional, secure, and completed transparently in three straightforward stages.
            </p>

            <div className="relative border-l-2 border-brand-gold/30 pl-6 ml-4 space-y-8 text-left">
              {[
                { step: '01', title: 'Consultation & KYC', desc: 'Visit our Deira Mall showroom or join a private video call to review our commercial books, verified DED licenses, and stock operations.' },
                { step: '02', title: 'Legal Agreement Drafting', desc: 'Execute solid legal trading agreements backed by official physical rental agreements and collateral specifications.' },
                { step: '03', title: 'Security Collateral Delivery', desc: 'Receive your 4 signed post-dated cheques matching your quarterly principal and profit return schedules precisely.' },
                { step: '04', title: 'Quarterly Payout Realization', desc: 'Your payouts clear automatically every three months. Realize up to 40% absolute net returns on full term completion.' }
              ].map((p, idx) => (
                <div key={idx} className="relative">
                  {/* Point */}
                  <div className="absolute -left-[35px] top-1 h-6 w-6 rounded-full bg-black border-2 border-brand-gold flex items-center justify-center text-[10px] font-bold text-brand-gold font-mono">
                    {p.step}
                  </div>
                  <div>
                    <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-zinc-950'}`}>{p.title}</h4>
                    <p className={`text-xs md:text-sm leading-relaxed mt-1.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: Corporate Expansion Plans */}
          <div className={`p-6 md:p-8 rounded-[24px] border ${
            darkMode ? 'bg-zinc-950/40 border-zinc-850' : 'bg-zinc-50 border-zinc-200'
          }`}>
            <h3 className={`font-display text-xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Corporate Expansion Plans
            </h3>
            <p className={`text-xs md:text-sm leading-relaxed mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
              Our primary goal for this investment round is the scaling of our physical distribution infrastructure. In 2026, we are acquiring larger physical showroom spaces inside Deira Mall and launching a secondary dedicated wholesale holding warehouse in Dubai. By consolidating high-volume container inventory directly from suppliers, we will expand our logistics capability to support daily high-frequency shipping to minor and major reseller hubs across India and GCC countries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 text-zinc-400">
                <CheckCircle className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Showroom floor size expansion (Deira Mall)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <CheckCircle className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Bulk shipping logistics integration to India</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <CheckCircle className="h-4 w-4 text-brand-gold shrink-0" />
                <span>B2B merchant portal development for resellers</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <CheckCircle className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Pre-owned certified grading line automation</span>
              </div>
            </div>
          </div>

          {/* SECTION: Legal Collateral & Assured Compliance */}
          <div>
            <h2 className={`font-display text-2xl md:text-3xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Assured Compliance & Security Assets
            </h2>
            <p className={`text-sm md:text-base leading-relaxed mb-8 ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
              Every single investment is fully backed by certified Dubai operational entities with absolute transparency:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { icon: <Landmark className="h-6 w-6 text-brand-gold" />, label: 'DED License Copy', code: 'Registered LLC' },
                { icon: <FileText className="h-6 w-6 text-brand-gold" />, label: 'Ijari Agreement', code: 'Government Attested' },
                { icon: <FileCheck className="h-6 w-6 text-emerald-400" />, label: 'Rental Agreement', code: 'Showroom Backed' },
                { icon: <Clock className="h-6 w-6 text-blue-400" />, label: 'Customs Import Registry', code: 'Registered Importer' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 rounded-2xl border ${
                    darkMode ? 'bg-zinc-900/40 border-zinc-850' : 'bg-white border-zinc-200'
                  }`}
                >
                  <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-3 shadow-md">
                    {item.icon}
                  </div>
                  <h4 className={`text-xs font-bold leading-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                    {item.label}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-500 mt-1 uppercase font-bold tracking-wider">
                    {item.code}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: Frequently Asked Questions */}
          <div>
            <h2 className={`font-display text-2xl md:text-3xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Investment Security FAQ
            </h2>
            <div className="space-y-4">
              {investmentFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className={`rounded-2xl border overflow-hidden ${
                      darkMode ? 'bg-zinc-900/30 border-zinc-850' : 'bg-white border-zinc-150'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 flex justify-between items-center text-left font-bold text-sm md:text-base outline-none cursor-pointer"
                    >
                      <span className={darkMode ? 'text-white' : 'text-zinc-950'}>{faq.q}</span>
                      <ChevronDown className={`h-4 w-4 text-brand-gold transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
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
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION: Risk Transparency */}
          <div className="p-5 md:p-6 border border-amber-500/20 bg-amber-500/[0.02] rounded-2xl">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5 mb-2.5">
              <Scale className="h-4 w-4" /> Risk & Operational Transparency
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Business investments in commercial trading carry inherent inventory liquidity risks, customs regulatory changes, and local pricing fluctuations. Win Win Wireless mitigates these risks comprehensively by securing 100% full-insurance policies on all cross-border shipping corridors to India, maintaining direct credit corridors with manufacturers to handle cost adjustments, and holding liquid collateral structures (attested rental assets) to guarantee absolute protection of capital under Dubai law.
            </p>
          </div>

        </div>

        {/* Right column: Interactive ROI Calculator */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
          
          <div className={`p-6 rounded-[24px] border shadow-xl relative overflow-hidden ${
            darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
          }`}>
            {/* Background glowing gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold to-zinc-500" />

            <div className="flex items-center gap-2 mb-4 text-left">
              <Calculator className="h-5 w-5 text-brand-gold" />
              <h3 className={`font-display text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                Interactive ROI Calculator
              </h3>
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed mb-6 text-left">
              Select or slide your custom investment capital below to see instant legally assured quarterly profit breakdowns and net yields.
            </p>

            {/* Slider and inputs */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-xs font-bold font-mono">
                <span className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>Investment (AED)</span>
                <span className="text-brand-gold font-bold text-sm">
                  {formatAED(calcAmount)}
                </span>
              </div>
              <input
                id="calculator-amt-slider"
                type="range"
                min="3000"
                max="50000"
                step="500"
                value={calcAmount}
                onChange={(e) => setCalcAmount(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />

              {/* Tiers short selector */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                {[3000, 10000, 15000, 25000].map((t) => (
                  <button
                    key={t}
                    onClick={() => setCalcAmount(t)}
                    className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                      calcAmount === t 
                        ? 'bg-brand-gold/15 border-brand-gold text-brand-gold' 
                        : darkMode ? 'bg-zinc-900 border-zinc-850 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                    }`}
                  >
                    {formatAED(t).replace('AED', '').trim()}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculations breakdown */}
            <div className={`p-4 rounded-xl space-y-3.5 border text-left text-xs mb-6 ${
              darkMode ? 'bg-zinc-900/50 border-zinc-850' : 'bg-zinc-50 border-zinc-150'
            }`}>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">Annual Return Rate:</span>
                <span className="font-bold text-emerald-400 font-mono text-sm">
                  {calculatedResult.pct}% Return
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">Net Profit (1 Yr):</span>
                <span className="font-bold text-white font-mono text-sm">
                  {formatAED(calculatedResult.profit)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">Total Contract Return:</span>
                <span className="font-bold text-brand-gold font-mono text-sm">
                  {formatAED(calculatedResult.totalReturn)}
                </span>
              </div>
              <div className="h-[1px] bg-zinc-800/10 dark:bg-zinc-800/40 my-1" />
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">4x Quarterly Payouts:</span>
                <span className="font-bold text-brand-gold font-mono text-sm">
                  {formatAED(calculatedResult.quarterlyPayout)} <span className="text-[10px] text-zinc-500">/ cheque</span>
                </span>
              </div>
            </div>

            {/* Collateral Assurances inside calculator */}
            <div className="space-y-2 mb-6 text-xs text-left">
              <p className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Legally Backed Collateral
              </p>
              <div className="flex items-center gap-2 text-zinc-400 font-medium">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>4x Post-dated Bank Cheques Assured</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 font-medium">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Attested Corporate Rental Agreement</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 font-medium">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>DET Licensed LLC Agreement</span>
              </div>
            </div>

            {/* CTA action inside calculator */}
            <a
              href={`https://wa.me/971567451002?text=Hello%20Win%20Win%20Wireless,%20I%20would%2520like%20to%20invest%20AED%20${calcAmount}.%20Please%20send%20me%20the%20onboarding%20details.`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-500 text-zinc-950 py-3 px-4 rounded-xl font-bold text-sm transition-all shadow-md shadow-brand-gold/15"
            >
              <Send className="h-4 w-4" />
              <span>Apply for this Tier</span>
            </a>
          </div>

          {/* Quick contact card */}
          <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-950 text-left text-xs">
            <h4 className="font-bold text-white mb-2">Need a Custom Investment Structure?</h4>
            <p className="text-zinc-500 leading-relaxed mb-4">
              We accommodate custom volume placements above 100,000 AED with dedicated legal provisions, direct equity arrangements, or container trading rights.
            </p>
            <a
              href="https://wa.me/971567451002"
              target="_blank"
              rel="noreferrer"
              className="text-brand-gold font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Speak to Chief Officer</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
