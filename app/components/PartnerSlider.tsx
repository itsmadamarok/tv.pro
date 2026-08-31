'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CONSTANTS } from '@/lib/seo';
import { useMemo } from 'react';

export default function PartnerSlider() {
  const partners = Array.from({ length: 10 }, (_, i) => {
    const partnerNumber = i + 1;
    const partnerNumberPad = String(partnerNumber).padStart(2, '0');
    return {
      name: `Partner Network ${partnerNumber}`,
      imagePath: `/img/partners/mariniosiptv-icons-${partnerNumberPad}`,
      altText: `${CONSTANTS.BRAND_NAME} Compatible App & Hardware Partner ${partnerNumber}`,
      width: 128,
      height: 128,
    };
  });

  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);

  return (
    <div className="w-full overflow-hidden relative py-10 md:py-14 bg-[#030712] border-y border-slate-850">
      {/* Blended Edge Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />

      {/* Header Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-[0.2em]">
          Supported Apps, Operating Systems & Player Ecosystems
        </p>
      </div>

      {/* Infinite Carousel */}
      <motion.div 
        className="flex gap-12 md:gap-16 items-center w-max"
        animate={{
          x: [0, '-50%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'linear',
          repeatDelay: 0,
        }}
        style={{ willChange: 'transform' }}
      >
        {sliderItems.map((partner, idx) => (
          <div 
            key={`${partner.name}-${idx}`} 
            className="flex items-center justify-center min-w-[100px] md:min-w-[140px] opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
          >
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <Image
                src={`${partner.imagePath}.png`}
                alt={partner.altText}
                title={`${CONSTANTS.BRAND_NAME} - ${partner.name}`}
                width={partner.width || 128}
                height={partner.height || 128}
                className="object-contain h-full w-full"
                sizes="(max-width: 768px) 64px, 96px"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}