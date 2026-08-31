'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CONSTANTS } from '@/lib/seo';
import { useState, useMemo } from 'react';
import { Play } from 'lucide-react';

const movies = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/mariniosiptv-movies-${number}`,
    altText: `4K Movie VOD ${i + 1}`,
    width: 192,
    height: 288,
  };
});

const series = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/mariniosiptv-serie-${number}`,
    altText: `HD TV Series Episode ${i + 1}`,
    width: 192,
    height: 288,
  };
});

const sports = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/mariniosiptv-sports-${number}`,
    altText: `Live Sports PPV Match ${i + 1}`,
    width: 192,
    height: 288,
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section') || document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const InfiniteSlider = ({ 
  items, 
  direction = 'left', 
  speed = 50, 
  category 
}: { 
  items: any[]; 
  direction?: 'left' | 'right'; 
  speed?: number;
  category: string;
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;
  
  const handleImageError = (id: string, imagePath: string, e: any) => {
    const img = e.target;
    if (!img.src.includes('.jpg') && !img.src.includes('.jpeg')) {
      img.src = `${imagePath}.jpg`;
    } else {
      setFailedImages(prev => ({ ...prev, [id]: true }));
    }
  };
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Blended Edge Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-36 bg-gradient-to-r from-[#030712] via-[#030712]/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-36 bg-gradient-to-l from-[#030712] via-[#030712]/70 to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex w-max gap-3 md:gap-4"
        animate={{ 
          x: direction === 'left' ? [0, '-50%'] : ['-50%', 0]
        }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "loop", 
          duration: duration,
          ease: "linear",
          repeatDelay: 0
        }}
        style={{ willChange: 'transform' }}
      >
        {infiniteItems.map((item, idx) => {
          const isLoop = idx >= items.length;
          const label = `Watch ${category} stream on ${CONSTANTS.BRAND_NAME}${isLoop ? ' (Loop)' : ''}`;

          return (
            <button
              key={`${item.id}-${idx}`}
              onClick={scrollToPricing}
              type="button"
              className="flex-shrink-0 w-28 sm:w-32 md:w-44 lg:w-48 block cursor-pointer group focus:outline-none"
              aria-label={label}
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-lg transition-all duration-300 group-hover:border-blue-500/60 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]">
                {!failedImages[`${item.id}-${idx}`] ? (
                  <>
                    <Image
                      src={`${item.imagePath}.webp`}
                      alt={`${CONSTANTS.BRAND_NAME} ${category} showcase ${idx + 1}`}
                      width={item.width || 192}
                      height={item.height || 288}
                      sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 176px, 192px"
                      className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => handleImageError(`${item.id}-${idx}`, item.imagePath, e)}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Badge Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600/90 text-white backdrop-blur-md flex items-center justify-center border border-blue-400/50 shadow-lg shadow-blue-600/50 transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-500">
                    <Play className="w-6 h-6 text-slate-600 mb-1" />
                    <span className="text-xs font-semibold">{category}</span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default function MovieSlider() {
  return (
    <section className="w-full py-8 md:py-12 bg-[#030712]" aria-label="Content showcase slider">
      
      {/* Movies Row */}
      <div className="mb-10 md:mb-14">
        <div className="w-[85%] max-w-7xl mx-auto px-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-sky-400 rounded-full" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Latest 4K Movies & Blockbusters
            </h3>
          </div>
          <p className="text-slate-400 text-sm mt-1.5 hidden md:block">
            Stream thousands of cinema releases in uncompressed 4K and Full HD on any device.
          </p>
        </div>
        <InfiniteSlider items={movies} direction="left" speed={45} category="Movie" />
      </div>

      {/* Series Row */}
      <div className="mb-10 md:mb-14">
        <div className="w-[85%] max-w-7xl mx-auto px-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-sky-400 rounded-full" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Trending TV Series & Complete Seasons
            </h3>
          </div>
          <p className="text-slate-400 text-sm mt-1.5 hidden md:block">
            Binge-watch full seasons from Netflix, HBO Max, Paramount+, and Apple TV updated daily.
          </p>
        </div>
        <InfiniteSlider items={series} direction="right" speed={40} category="Series" />
      </div>

      {/* Sports Row */}
      <div>
        <div className="w-[85%] max-w-7xl mx-auto px-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-sky-400 rounded-full" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Live Sports Networks & PPV Events
            </h3>
          </div>
          <p className="text-slate-400 text-sm mt-1.5 hidden md:block">
            Access Premier League, UEFA Champions League, NFL, NBA, UFC, and Boxing PPVs with zero latency.
          </p>
        </div>
        <InfiniteSlider items={sports} direction="left" speed={50} category="Sports" />
      </div>
    </section>
  );
}