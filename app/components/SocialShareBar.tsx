'use client';

import { Share2, MessageSquare, Twitter, Facebook, Send, Bookmark } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import { FadeIn } from './AnimatedSection';

export default function SocialShareBar() {
  const shareUrl = `https://${CONSTANTS.DOMAIN}`;
  const shareText = encodeURIComponent(
    `${CONSTANTS.FOCUS_KEYWORD.toUpperCase()} - Official 4K Live TV & Sports 2026`
  );
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      url: `https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`,
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40',
    },
    {
      name: 'X / Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`,
      badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20 hover:bg-sky-500/20 hover:border-sky-500/40',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`,
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40',
    },
    {
      name: 'Reddit',
      icon: Bookmark,
      url: `https://reddit.com/submit?url=${encodedUrl}&title=${shareText}`,
      badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 col-span-2 sm:col-span-1',
    },
  ];

  return (
    <section 
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10" 
      aria-label="Social media sharing options"
    >
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl">
          {/* Subtle Cyber Blue Ambient Glow */}
          <div className="absolute top-0 right-1/4 h-32 w-48 bg-blue-600/10 blur-[60px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            {/* Left Info Column */}
            <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5 text-sky-400" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-black uppercase tracking-wider text-white block">
                  Share {CONSTANTS.FOCUS_KEYWORD}
                </span>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5 leading-relaxed">
                  Spread the word with fellow cord-cutters on social networks.
                </p>
              </div>
            </div>

            {/* Right Buttons Container: Grid on Mobile, Flex on Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-2 sm:gap-2.5 md:gap-3 w-full lg:w-auto">
              {shareLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share ${CONSTANTS.FOCUS_KEYWORD} on ${item.name}`}
                    className={`inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${item.badge}`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}