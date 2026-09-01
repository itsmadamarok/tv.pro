'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CheckCircle2, Zap, Crown, Star } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  const pricing = {
    1: {
      3: { total: 30, mo: (30 / 3).toFixed(2) },
      6: { total: 50, mo: (50 / 6).toFixed(2) },
      12: { total: 80, mo: (80 / 12).toFixed(2) },
    },
    2: {
      3: { total: 50, mo: (50 / 3).toFixed(2) },
      6: { total: 80, mo: (80 / 6).toFixed(2) },
      12: { total: 120, mo: (120 / 12).toFixed(2) },
    },
    3: {
      3: { total: 70, mo: (70 / 3).toFixed(2) },
      6: { total: 105, mo: (105 / 6).toFixed(2) },
      12: { total: 150, mo: (150 / 12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices];
  const WHATSAPP_NUMBER = CONSTANTS?.CONTACT_INFO?.WHATSAPP?.replace(/[^0-9]/g, '') || '447549589503';

  const handleWhatsAppRedirect = (months: number, total: number) => {
    const message = `Hello, I want to order the ${months}-Month Plan for €${total} (${devices} Device${devices > 1 ? 's' : ''} Connection).`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Schema.org Product & Offer structured data for search engine rich snippets
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${CONSTANTS.BRAND_NAME} Subscription Plans`,
    description: `Compare 3, 6, and 12-month subscriptions from ${CONSTANTS.BRAND_NAME}. Access 25,000+ 4K live channels and VOD with 99.9% server uptime.`,
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
    offers: [
      {
        '@type': 'Offer',
        name: '3 Months Starter IPTV Plan',
        price: currentPricing[3].total,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `https://${CONSTANTS.DOMAIN}/pricing`,
      },
      {
        '@type': 'Offer',
        name: '6 Months Value IPTV Plan',
        price: currentPricing[6].total,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `https://${CONSTANTS.DOMAIN}/pricing`,
      },
      {
        '@type': 'Offer',
        name: '12 Months Ultimate IPTV Plan',
        price: currentPricing[12].total,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `https://${CONSTANTS.DOMAIN}/pricing`,
      },
    ],
  };

  return (
    <section 
      id="pricing-section" 
      className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20 text-slate-300"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb0a_1px,transparent_1px),linear-gradient(to_bottom,#2563eb0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none md:bg-[size:48px_48px]"></div>
      
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6">
          <Crown className="w-4 h-4 text-sky-400" />
          <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
            Verified Best IPTV Service Providers
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
          CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">SUBSCRIPTION PLAN</span>
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Select your subscription package for Firestick, Smart TV, and Android. Save up to 45% on annual packages with zero commitments and instant activation.
        </p>

        {/* Device Switcher */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs text-sky-300 font-bold uppercase tracking-widest">Select Simultaneous Connections</span>
          </div>
          <div className="inline-flex bg-slate-900/90 border border-slate-800 rounded-full p-1.5 relative shadow-xl shadow-black/60 backdrop-blur-md">
            {[1, 2, 3].map((d) => (
              <button 
                key={d}
                type="button"
                aria-label={`Select ${d} Device Connection${d > 1 ? 's' : ''}`}
                onClick={() => setDevices(d as 1 | 2 | 3)}
                className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-black tracking-wider uppercase transition-all duration-300 ${
                  devices === d 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 transform scale-105' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {d} Device{d > 1 ? 's' : ''}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-16 relative">
        {/* Ambient Glow behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

        {/* 3 Months Plan */}
        <FadeInItem className="bg-slate-900/75 backdrop-blur-xl border border-slate-800 hover:border-slate-700 transition-all duration-500 rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Starter Package</span>
              <Star className="w-4 h-4 text-slate-600" />
            </div>
            <div className="text-2xl font-black text-white mb-2 tracking-tight">3 Months Access</div>
            
            <div className="flex items-baseline gap-1 mb-2 mt-4">
              <span className="text-5xl font-black text-white tracking-tighter">€{currentPricing[3].total}</span>
            </div>
            <div className="text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest border border-slate-800 self-start px-3 py-1.5 rounded-full inline-block bg-slate-950/60">
              Just €{currentPricing[3].mo} / month
            </div>
            
            <ul className="w-full space-y-3.5 flex-grow relative mb-8">
              {[
                `${devices} Connection${devices > 1 ? 's' : ''} (Firestick, TV, Mobile)`,
                '4K & Ultra HD 60FPS Bitrate',
                '20,000+ Global Channels (USA, UK, CA)',
                '60,000+ VODs & Series Updated Daily',
                'Live Sports Pass (UFC, EPL, NFL, NBA)',
                '7-Day Catch-up & Electronic Program Guide',
                'Anti-Freeze 9.0 Fast Streaming Routing',
                'VPN Allowed & Zero ISP Throttling'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              type="button"
              aria-label="Order 3 Months Starter IPTV Plan"
              onClick={() => handleWhatsAppRedirect(3, currentPricing[3].total)}
              className="w-full py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white font-bold hover:bg-blue-600 hover:border-blue-500 transition-all text-center uppercase tracking-widest text-xs cursor-pointer shadow-md"
            >
              Order 3-Month Plan
            </button>
          </div>
        </FadeInItem>

        {/* 12 Months Plan (Most Popular) */}
        <FadeInItem className="relative bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-blue-500 rounded-3xl p-6 md:p-10 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(37,99,235,0.25)] z-20 group overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <div className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg shadow-blue-600/50 flex items-center gap-1 border border-blue-400">
              <Crown className="w-3 h-3 text-sky-200" />
              Best Value
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-[0.2em]">Ultimate VIP</span>
            </div>
            <div className="text-2xl font-black text-white mb-2 tracking-tight">12 Months Access</div>
            
            <div className="flex items-baseline gap-1 mb-2 mt-4">
              <span className="text-6xl font-black text-white tracking-tighter drop-shadow-md">€{currentPricing[12].total}</span>
            </div>
            <div className="text-xs font-bold text-sky-300 mb-8 uppercase tracking-widest border border-blue-500/40 self-start px-4 py-2 rounded-full inline-block bg-blue-950/60 shadow-inner">
              Just €{currentPricing[12].mo} / month (Save 45%)
            </div>

            <ul className="w-full space-y-3.5 flex-grow relative mb-8">
              {[
                `${devices} Connection${devices > 1 ? 's' : ''} (Firestick, TV, Mobile)`,
                'Uncompressed 4K & UHD 60FPS Channels',
                '25,000+ Global Channels (USA, UK, CA)',
                '70,000+ Movies & Series (Daily Updates)',
                'All Live Sports & PPV Events Included',
                'Real-Time EPG & 7-Day Catch-up',
                'Anti-Freeze 9.0 SLA Guaranteed Uptime',
                'VPN Friendly with Auto Routing',
                'Priority 24/7 WhatsApp VIP Activation'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              type="button"
              aria-label="Order 12 Months Ultimate IPTV Plan"
              onClick={() => handleWhatsAppRedirect(12, currentPricing[12].total)}
              className="w-full py-4 rounded-xl bg-blue-600 text-white font-black hover:bg-blue-500 hover:scale-[1.02] transition-all text-center uppercase tracking-widest text-sm shadow-xl shadow-blue-600/40 cursor-pointer border border-blue-400/50"
            >
              Order 12-Month Plan
            </button>
          </div>
        </FadeInItem>

        {/* 6 Months Plan */}
        <FadeInItem className="bg-slate-900/75 backdrop-blur-xl border border-slate-800 hover:border-slate-700 transition-all duration-500 rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Popular Choice</span>
              <Star className="w-4 h-4 text-slate-600" />
            </div>
            <div className="text-2xl font-black text-white mb-2 tracking-tight">6 Months Access</div>
            
            <div className="flex items-baseline gap-1 mb-2 mt-4">
              <span className="text-5xl font-black text-white tracking-tighter">€{currentPricing[6].total}</span>
            </div>
            <div className="text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest border border-slate-800 self-start px-3 py-1.5 rounded-full inline-block bg-slate-950/60">
              Just €{currentPricing[6].mo} / month
            </div>
            
            <ul className="w-full space-y-3.5 flex-grow relative mb-8">
              {[
                `${devices} Connection${devices > 1 ? 's' : ''} (Firestick, TV, Mobile)`,
                '4K & Ultra HD 60FPS Bitrate',
                '20,000+ Global Channels (USA, UK, CA)',
                '60,000+ VODs & Series Updated Daily',
                'Live Sports Pass (UFC, EPL, NFL, NBA)',
                '7-Day Catch-up & Electronic Program Guide',
                'Anti-Freeze 9.0 Fast Streaming Routing',
                'VPN Allowed & Zero ISP Throttling'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              type="button"
              aria-label="Order 6 Months Value IPTV Plan"
              onClick={() => handleWhatsAppRedirect(6, currentPricing[6].total)}
              className="w-full py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white font-bold hover:bg-blue-600 hover:border-blue-500 transition-all text-center uppercase tracking-widest text-xs cursor-pointer shadow-md"
            >
              Order 6-Month Plan
            </button>
          </div>
        </FadeInItem>
      </FadeInStagger>
    </section>
  );
}