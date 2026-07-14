import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, MessageSquare, Mail, Clock, Send, 
  Instagram, Facebook, Map, CheckCircle2, ShieldAlert
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestType, setInterestType] = useState('Personal Purchase');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Direct WhatsApp Message generator from contact form
    const customMessage = `Hello Win Win Wireless,
*New Contact Inquiry:*
• Name: ${name}
• Email: ${email || 'N/A'}
• Phone: ${phone}
• Interest: ${interestType} ${selectedProduct ? `(Model: ${selectedProduct})` : ''}
• Message: ${message || 'Please contact me back.'}`;

    const encodedText = encodeURIComponent(customMessage);
    window.open(`https://wa.me/971567451002?text=${encodedText}`, '_blank');
    setFormSubmitted(true);
    
    // Clear states after submit
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const businessHours = [
    { day: 'Monday - Sunday', hours: '10:00 AM - 11:00 PM' }
  ];

  return (
    <div className="py-10">
      
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-left mb-12">
        <span className="text-xs font-mono font-bold text-brand-gold tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full uppercase">
          Connect with Us
        </span>
        <h2 className={`font-display text-3xl md:text-5xl font-black tracking-tight mt-4 mb-2 ${
          darkMode ? 'text-white' : 'text-zinc-950'
        }`}>
          Visit Deira Mall Showroom
        </h2>
        <p className={`text-sm md:text-base max-w-xl ${darkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
          Whether you want a single demo iPhone, a wholesale resale sheet, or a business discussion, our team is ready to serve you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
        
        {/* Left Column: Contact Cards, Business Hours, Maps */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Quick contact method cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Showroom card */}
            <div className={`p-5 rounded-2xl border ${
              darkMode ? 'bg-zinc-950/40 border-zinc-850' : 'bg-zinc-50 border-zinc-150'
            }`}>
              <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 shadow-md">
                <MapPin className="h-5 w-5 text-brand-gold" />
              </div>
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider text-zinc-500`}>Showroom Address</h4>
              <p className={`text-sm font-bold mt-1.5 leading-snug ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                Deira Mall, Gold Souk, Deira, Dubai, UAE
              </p>
            </div>

            {/* WhatsApp Call card */}
            <a 
              href="https://wa.me/971567451002"
              target="_blank"
              rel="noreferrer"
              className={`p-5 rounded-2xl border transition-all duration-200 block ${
                darkMode ? 'bg-zinc-950/40 border-zinc-850 hover:border-brand-gold/30' : 'bg-zinc-50 border-zinc-150 hover:bg-zinc-100'
              }`}
            >
              <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 shadow-md">
                <MessageSquare className="h-5 w-5 text-emerald-400" />
              </div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">WhatsApp Chat</h4>
              <p className={`text-sm font-bold mt-1.5 leading-snug ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                +971 56 745 1002
              </p>
            </a>

            {/* Email card */}
            <a 
              href="mailto:winwinwireless20w3@gmail.com"
              className={`p-5 rounded-2xl border transition-all duration-200 block ${
                darkMode ? 'bg-zinc-950/40 border-zinc-850 hover:border-brand-gold/30' : 'bg-zinc-50 border-zinc-150 hover:bg-zinc-100'
              }`}
            >
              <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 shadow-md">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">Corporate Email</h4>
              <p className={`text-sm font-bold mt-1.5 leading-snug ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
                winwinwireless20w3@gmail.com
              </p>
            </a>

          </div>

          {/* REAL GOOGLE MAP EMBED */}
          <div className={`rounded-3xl border overflow-hidden p-2 shadow-xl ${
            darkMode ? 'bg-zinc-950 border-zinc-850' : 'bg-white border-zinc-250'
          }`}>
            <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <iframe
                title="Win Win Wireless Shop Location Map"
                src="https://maps.google.com/maps?q=Deira%20Mall,%20Gold%20Souk,%20Deira,%20Dubai,%20UAE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`w-full h-full ${darkMode ? 'invert opacity-80' : ''}`}
              />
            </div>
          </div>

          {/* Business Hours Grid */}
          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-zinc-950/40 border-zinc-850' : 'bg-zinc-50 border-zinc-200'
          }`}>
            <h4 className={`text-sm font-display font-bold flex items-center gap-2 mb-4 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              <Clock className="h-4.5 w-4.5 text-brand-gold" /> Showroom Opening Hours
            </h4>
            <div className="space-y-2.5">
              {businessHours.map((bh, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs pb-2.5 border-b border-zinc-800/10 dark:border-zinc-800/40 last:border-0 last:pb-0 font-medium">
                  <span className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>{bh.day}</span>
                  <span className={`font-bold font-mono ${darkMode ? 'text-white' : 'text-zinc-950'}`}>{bh.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-5">
          <div className={`p-6 md:p-8 rounded-[24px] border shadow-2xl relative ${
            darkMode ? 'bg-zinc-950 border-zinc-850' : 'bg-white border-zinc-200'
          }`}>
            <h3 className={`font-display text-xl font-bold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Secure Digital Inquiry
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-6">
              Fill out the form below. Submitting will launch your message instantly directly to our head desk on WhatsApp for immediate priority pricing review.
            </p>

            {/* Submission feedback */}
            <AnimatePresence>
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3.5 mb-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                  <span>Success! Opened in WhatsApp. Connect with us there.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="text-left">
                <label className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar"
                  className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-950 focus:border-brand-gold'
                  }`}
                />
              </div>

              {/* Phone */}
              <div className="text-left">
                <label className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  WhatsApp Phone Number *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 9876543210"
                  className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-950 focus:border-brand-gold'
                  }`}
                />
              </div>

              {/* Email */}
              <div className="text-left">
                <label className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rajesh@gmail.com"
                  className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-950 focus:border-brand-gold'
                  }`}
                />
              </div>

              {/* Interest / Purpose */}
              <div className="text-left">
                <label className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  Nature of Inquiry
                </label>
                <select
                  id="contact-interest"
                  value={interestType}
                  onChange={(e) => setInterestType(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-950 focus:border-brand-gold'
                  }`}
                >
                  <option value="Personal Purchase">Personal Purchase</option>
                  <option value="Reseller / Wholesale Buying">Reseller / Wholesale Buying</option>
                  <option value="Business Investment Plan">Business Investment Plan</option>
                  <option value="Other Commercial Project">Other Commercial Project</option>
                </select>
              </div>

              {/* Model selection (only show if not investment) */}
              {interestType !== 'Business Investment Plan' && (
                <div className="text-left">
                  <label className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Select Target Model (Optional)
                  </label>
                  <select
                    id="contact-product"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                      darkMode 
                        ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                        : 'bg-zinc-50 border-zinc-200 text-zinc-950 focus:border-brand-gold'
                    }`}
                  >
                    <option value="">No Model Selected</option>
                    {PRODUCTS_DATA.slice(0, 10).map((p) => (
                      <option key={p.id} value={p.name + ' (' + p.storage + ')'}>
                        {p.name} {p.storage} ({p.condition})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Message */}
              <div className="text-left">
                <label className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  Custom Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can our Deira sales desk assist you?"
                  className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-950 focus:border-brand-gold'
                  }`}
                />
              </div>

              {/* Submit to WhatsApp */}
              <button
                id="contact-form-submit"
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-500 text-zinc-950 py-3.5 px-6 rounded-xl font-bold text-sm shadow-lg shadow-brand-gold/15 transition-all cursor-pointer"
              >
                <Send className="h-4.5 w-4.5" />
                <span>Submit Form to WhatsApp</span>
              </button>

            </form>

            {/* Social channels section */}
            <div className="mt-8 pt-6 border-t border-zinc-800/10 dark:border-zinc-800/40 text-center">
              <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
                Follow Win Win Wireless
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/winwinwireless_18"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode ? 'bg-zinc-900 border-zinc-850 hover:border-brand-gold text-white' : 'bg-zinc-100 border-zinc-200 hover:border-brand-gold text-zinc-900'
                  }`}
                >
                  <Instagram className="h-4.5 w-4.5 text-brand-gold" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode ? 'bg-zinc-900 border-zinc-850 hover:border-brand-gold text-white' : 'bg-zinc-100 border-zinc-200 hover:border-brand-gold text-zinc-900'
                  }`}
                >
                  <Facebook className="h-4.5 w-4.5 text-blue-500" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
