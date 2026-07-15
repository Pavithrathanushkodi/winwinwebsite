import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import LogoIcon from './LogoIcon';

interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
}

export default function Footer({ activeTab, setActiveTab, darkMode }: FooterProps) {
  const quickLinks = [
    { label: 'Featured Products', tabId: 'products' },
    { label: 'Investment Portfolio', tabId: 'investment' },
    { label: 'About Win Win', tabId: 'about' },
    { label: 'Secure Contact Desks', tabId: 'contact' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', tabId: 'home' },
    { label: 'Terms & Conditions', tabId: 'home' },
    { label: 'Wholesale B2B Policy', tabId: 'products' }
  ];

  return (
    <footer className={`border-t transition-colors duration-300 ${
      darkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-650'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand Summary Column */}
          <div className="md:col-span-5 space-y-6">
            <button 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 text-left outline-none cursor-pointer group"
            >
              <LogoIcon size={36} showText={true} darkMode={darkMode} />
            </button>

            <p className="text-xs leading-relaxed max-w-sm">
              Established inside the gold trading hub of Deira, Dubai, Win Win Wireless is a trusted provider of certified brand new and pristine demo iPhones. Sourcing genuine technology at scale for resellers and consumers since 2023.
            </p>

            {/* Micro social icons */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com/winwinwireless_18" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-all ${
                  darkMode ? 'bg-zinc-900 border-zinc-850 text-brand-gold hover:border-brand-gold' : 'bg-white border-zinc-200 text-zinc-700 hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-all ${
                  darkMode ? 'bg-zinc-900 border-zinc-850 text-zinc-400 hover:border-brand-gold hover:text-brand-gold' : 'bg-white border-zinc-200 text-zinc-700 hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => setActiveTab(link.tabId)}
                    className="hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Legal Framework
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => setActiveTab(link.tabId)}
                    className="hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location details summary column */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Corporate Registry
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-snug font-medium">Deira Mall, Gold Souk, Deira, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-mono font-bold">+971 56 745 1002</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span className="font-semibold text-zinc-500">winwinwireless20w3@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Brand visual golden separator */}
        <div className="h-[1px] bg-gradient-to-r from-zinc-800/20 via-brand-gold/20 to-zinc-800/20 my-10" />

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono font-medium text-zinc-500">
          <p>© 2026 Win Win Wireless LLC. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>Showroom Registry #LLC-987451002</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
