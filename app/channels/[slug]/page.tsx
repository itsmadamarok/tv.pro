// app/channels/[slug]/page.tsx
import { channelCategories, getCategoryBySlug } from '@/lib/channels';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Tv, 
  Trophy, 
  Film, 
  Globe, 
  Radio, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Headphones,
  MonitorSmartphone
} from 'lucide-react';
import ChannelCatalogClient from './ChannelCatalogClient';
import SocialShareBar from '@/app/components/SocialShareBar';

type Props = {
  params: Promise<{ slug: string }>;
};

const iconMap: Record<string, any> = {
  Trophy,
  Tv,
  Globe,
  Film,
  Radio,
};

export function generateStaticParams() {
  return channelCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams?.slug);

  if (!category) return generateSEOMetadata('Category Not Found');

  const pageTitle = `${category.name} Channel Lineup – 4K Live Streams | ${CONSTANTS.BRAND_NAME}`;
  const pageDescription = `Explore ${category.count} in the ${category.title} catalog. Stream uncompressed 4K sports, cinema & live TV with ${CONSTANTS.BRAND_NAME}.`;
  const canonicalUrl = `https://${CONSTANTS.DOMAIN}/channels/${category.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${category.name} IPTV channels`,
      `${CONSTANTS.FOCUS_KEYWORD} channel list`,
      `${category.slug} stream lineup`,
      '4K sports feeds',
      'IPTV m3u playlist 2026',
      'low latency live TV',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: 'website',
      siteName: CONSTANTS.BRAND_NAME,
      images: [
        {
          url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
          width: 1200,
          height: 630,
          alt: `${category.name} - ${CONSTANTS.BRAND_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
      creator: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
      site: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
    },
  };
}

export default async function ChannelCategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams?.slug);

  if (!category || !category.channels) {
    notFound();
  }

  const CategoryIcon = iconMap[category.iconName] || Tv;
  const canonicalUrl = `https://${CONSTANTS.DOMAIN}/channels/${category.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} Channel Lineup`,
    description: category.description,
    url: canonicalUrl,
    numberOfItems: category.channels?.length || 0,
    itemListElement: (category.channels || []).map((channel, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: channel.name,
      description: `${channel.genre} (${channel.quality}) - ${channel.bitrate}`,
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb08_1px,transparent_1px),linear-gradient(to_bottom,#2563eb08_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-blue-500/20 mb-4 sm:mb-6 shadow-inner">
            <CategoryIcon className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest truncate">
              {category.badge} • {category.count}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-3 sm:mb-4 leading-tight sm:leading-tight">
            {category.title}
          </h1>

          <p className="text-sky-400 font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-3 sm:mb-4 px-2">
            {category.tagline}
          </p>

          <p className="text-xs sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            {category.description}
          </p>

          {/* Responsive Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-600/40 border border-blue-400/30 text-center"
            >
              Get Full Playlist Access <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              href="/setup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 hover:border-blue-500 active:scale-95 transition-all text-center"
            >
              <MonitorSmartphone className="w-4 h-4 text-sky-400 shrink-0" /> Setup On Device
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Responsive Sub-Navigation */}
      <section className="py-3 sm:py-4 border-b border-slate-800/80 bg-slate-950/80 sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max">
            {channelCategories.map((cat) => {
              const isActive = cat.slug === category.slug;
              const TabIcon = iconMap[cat.iconName] || Tv;

              return (
                <Link
                  key={cat.slug}
                  href={`/channels/${cat.slug}`}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs font-bold transition-all shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Main Catalog Body */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <ChannelCatalogClient category={category} />

        {/* Responsive Features Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-slate-800 my-12 sm:my-16 shadow-2xl">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-2 sm:p-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">Anti-Freeze 9.0</p>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Dynamic load balanced streaming routing</p>
            </div>
          </div>
          
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-2 sm:p-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">Encrypted CDN</p>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Total protection from ISP throttling</p>
            </div>
          </div>
          
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-2 sm:p-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">Auto EPG Sync</p>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Electronic guide synced in real-time</p>
            </div>
          </div>
        </div>

        {/* Social Share Bar */}
        <div className="mb-12 sm:mb-16">
          <SocialShareBar />
        </div>

        {/* Back Link */}
        <div className="text-center pt-6 sm:pt-8 border-t border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition-colors text-xs sm:text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}