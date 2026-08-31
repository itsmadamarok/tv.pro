'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const faqs = [
  { 
    q: `What devices are supported by ${CONSTANTS.BRAND_NAME}?`, 
    a: `Our ${CONSTANTS.BRAND_NAME} service is fully compatible with Smart TVs (Samsung, LG, Sony), Amazon Firestick, Android TV boxes, Apple TV, iOS, Android smartphones, MAG devices, and Windows/Mac media players via TiviMate and IPTV Smarters.` 
  },
  { 
    q: `Can I use my ${CONSTANTS.BRAND_NAME} subscription on multiple devices?`, 
    a: `Yes. You can choose a multi-connection plan supporting up to 3 simultaneous devices streaming at the same time. Check our pricing table above to select 1, 2, or 3 device connections.` 
  },
  { 
    q: `What internet speed is required for buffer-free 4K streaming?`, 
    a: `We recommend a minimum connection speed of 15 Mbps for Full HD and 30 Mbps for 4K streaming. Our Anti-Freeze 9.0 servers adapt bitrate automatically to maintain smooth playback even during peak traffic.` 
  },
  { 
    q: `Is there any contract or cancellation fee with ${CONSTANTS.BRAND_NAME}?`, 
    a: `No. All our IPTV subscriptions are 100% prepaid with zero commitments, automatic renewals, or hidden cancellation fees. You pay only for the duration you choose.` 
  },
  { 
    q: `How quickly will I receive my IPTV credentials after ordering?`, 
    a: `Account activation is virtually instant. Once your order is confirmed via WhatsApp or email, you will receive your M3U playlist link, Xtream API codes, and complete setup instructions within minutes.` 
  },
  { 
    q: `Do you provide worldwide sports and international channels?`, 
    a: `Yes. We provide 25,000+ live channels and 65,000+ VODs from over 100 countries, including USA, UK, Canada, Europe, Latin America, and Arab regions, alongside live sports packages and PPV events.` 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Schema.org FAQPage structured data for Google rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section 
      className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-slate-800/80 mt-16 relative text-slate-300" 
      aria-label={`Frequently Asked Questions about ${CONSTANTS.BRAND_NAME}`}
    >
      {/* JSON-LD Schema for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      
      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
          <HelpCircle className="w-4 h-4 text-sky-400" />
          <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">FAQ Help Center</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">Questions</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Everything you need to know about our <span className="text-white font-bold">{CONSTANTS.FOCUS_KEYWORD}</span> packages, setup, and device compatibility.
        </p>
      </FadeIn>
      
      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <FadeInItem key={i}>
              <div 
                className={`w-full bg-slate-900/80 backdrop-blur-md border ${
                  isOpen ? 'border-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.2)]' : 'border-slate-800 hover:border-slate-700'
                } rounded-2xl p-6 transition-all duration-300`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left flex justify-between items-center gap-4 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <p className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-sky-300' : 'text-white group-hover:text-sky-300'} flex items-center gap-3`}>
                    <span className={`${isOpen ? 'text-sky-400' : 'text-slate-500'} font-black text-2xl`}>Q.</span> 
                    {faq.q}
                  </p>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-400' : 'text-slate-500 group-hover:text-sky-400'}`} />
                </button>

                <div 
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                >
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed pl-10 md:pl-12 border-l-2 border-blue-500 ml-2 py-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </section>
  );
}