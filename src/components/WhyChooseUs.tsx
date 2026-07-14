import { motion } from 'motion/react';
import { Award, ShieldCheck, Tag, Globe2, PhoneCall, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  darkMode: boolean;
}

export default function WhyChooseUs({ darkMode }: WhyChooseUsProps) {
  const highlights = [
    {
      icon: <Award className="h-6 w-6 text-brand-gold" />,
      title: '4+ Years UAE Experience',
      desc: 'Over 8 years of global business excellence and 4+ years of highly successful physical trading in Dubai, UAE.',
      tag: 'TRUSTED'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      title: '100% Genuine Devices',
      desc: 'Zero exceptions. Every single phone undergoes triple certified diagnostics and contains 100% original Apple hardware.',
      tag: 'AUTHENTIC'
    },
    {
      icon: <Tag className="h-6 w-6 text-brand-gold" />,
      title: 'Wholesale Pricing',
      desc: 'We operate at high scale with low margins, transferring the direct benefit of competitive wholesale pricing directly to you.',
      tag: 'COMPETITIVE'
    },
    {
      icon: <Globe2 className="h-6 w-6 text-blue-400" />,
      title: 'India Delivery Active',
      desc: 'Pioneers of safe, insured door-to-door logistics directly from Dubai to any PIN code across India.',
      tag: 'GLOBAL REACH'
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-brand-accent" />,
      title: 'Fast WhatsApp Support',
      desc: 'Direct, clear communication on WhatsApp with instant photo verification, live video calls, and instant replies.',
      tag: 'RESPONSIVE'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-gold" />,
      title: 'Trusted Dubai Seller',
      desc: 'Fully licensed and verified showroom situated inside Deira Mall, Dubai’s historical and commercial heart.',
      tag: 'VERIFIED LLC'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.03] pointer-events-none ${darkMode ? 'bg-brand-gold' : 'bg-zinc-200'}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-xs font-mono font-bold text-brand-gold tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full uppercase">
            Why Win Win Wireless
          </span>
          <h2 className={`font-display text-3xl md:text-5xl font-black tracking-tight mt-4 mb-6 ${
            darkMode ? 'text-white' : 'text-zinc-950'
          }`}>
            Gold Standard iPhone Trading
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-650'
          }`}>
            We bridge the gap between premium Apple quality and competitive wholesale pricing. See why thousands of retail customers and reseller shops depend on us.
          </p>
        </div>

        {/* Bento/Grid Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {highlights.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-6 md:p-8 rounded-[20px] border flex flex-col justify-between ${
                  darkMode 
                    ? 'bg-zinc-950/40 border-zinc-850 hover:bg-zinc-900/40 hover:border-brand-gold/30' 
                    : 'bg-white border-zinc-200 hover:bg-zinc-50 hover:border-brand-gold/20 shadow-xs hover:shadow-lg'
                } transition-all duration-300 relative group`}
              >
                {/* Background micro hover glow */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-zinc-500 uppercase bg-zinc-900/30 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`font-display text-lg font-bold tracking-tight mb-3 ${
                    darkMode ? 'text-white' : 'text-zinc-950'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs md:text-sm leading-relaxed ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-650'
                  }`}>
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                    Verified Guarantee
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
