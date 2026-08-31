// app/blog/page.tsx
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `${CONSTANTS.FOCUS_KEYWORD} Blog – Streaming Guides & Tips 2026`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Read the latest ${CONSTANTS.FOCUS_KEYWORD} articles, tutorials, and streaming news. Learn Firestick setup, channel configurations, and buffer optimization.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} blog`,
    `${CONSTANTS.FOCUS_KEYWORD} news`,
    `${CONSTANTS.FOCUS_KEYWORD} guide`,
    `${CONSTANTS.FOCUS_KEYWORD} tips`,
    'IPTV blog',
    'IPTV news',
    'IPTV guides',
    'streaming tips',
    'IPTV setup guide',
    'channel updates',
    'IPTV optimization',
    'best IPTV provider',
    'IPTV reviews',
    'streaming technology',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/blog`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} Blog – Streaming Guides & Tips 2026`,
    description: `Latest ${CONSTANTS.FOCUS_KEYWORD} news, setup guides, channel updates, and streaming tips from ${CONSTANTS.BRAND_NAME}.`,
    url: `https://${CONSTANTS.DOMAIN}/blog`,
    siteName: CONSTANTS.BRAND_NAME,
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips & Guides`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} Blog – Streaming Guides & Tips`,
    description: `Latest IPTV tips, guides, and news from ${CONSTANTS.BRAND_NAME}.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
    site: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Schema for Blog Listing Page
const BlogListingSchema = () => (
  <script
    type="application/ld+json"
    id="blog-listing-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${CONSTANTS.FOCUS_KEYWORD} Blog`,
        description: `Latest news, tutorials, and setup guides about ${CONSTANTS.FOCUS_KEYWORD} streaming and device configuration.`,
        url: `https://${CONSTANTS.DOMAIN}/blog`,
        publisher: {
          '@type': 'Organization',
          name: CONSTANTS.BRAND_NAME,
          logo: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description || post.excerpt,
          url: `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            '@type': 'Person',
            name: post.author,
          },
          image: post.image,
        })),
      }),
    }}
  />
);

// JSON-LD Breadcrumb Schema
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="breadcrumb-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `https://${CONSTANTS.DOMAIN}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${CONSTANTS.FOCUS_KEYWORD} Blog`,
            item: `https://${CONSTANTS.DOMAIN}/blog`,
          },
        ],
      }),
    }}
  />
);

// JSON-LD WebPage Schema
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${CONSTANTS.FOCUS_KEYWORD} Blog – IPTV Tips & Guides`,
        description: `Latest ${CONSTANTS.FOCUS_KEYWORD} articles, guides, and streaming news.`,
        url: `https://${CONSTANTS.DOMAIN}/blog`,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
          width: '1200',
          height: '630',
        },
      }),
    }}
  />
);

export default function BlogListing() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <WebPageSchema />
      <BlogListingSchema />
      <BreadcrumbSchema />

      <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300 px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb08_1px,transparent_1px),linear-gradient(to_bottom,#2563eb08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
              News & Tutorials
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight mb-6">
            {CONSTANTS.FOCUS_KEYWORD}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Blog
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Stay updated with expert setup tutorials, channel updates, and performance optimization guides for your streaming devices.
          </p>
        </div>

        {/* Fully Responsive Blog Post Grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id} 
              className="group rounded-3xl overflow-hidden transition-all duration-300 flex flex-col bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 shadow-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:-translate-y-1.5"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-slate-950">
                <Image
                  src={post.image}
                  alt={`${post.title} – ${CONSTANTS.FOCUS_KEYWORD} Article`}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                
                {/* Category Tags */}
                <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                  {post.keywords && post.keywords.slice(0, 2).map((kw: string) => (
                    <span 
                      key={kw} 
                      className="px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-slate-300 border border-slate-700/80 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section (Stacked Flex Flow) */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  {/* Author and Date Meta */}
                  <div className="flex items-center gap-2.5 text-xs text-slate-400 mb-3 font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-600/30 flex items-center justify-center border border-blue-500/40 text-sky-400 text-xs font-bold shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-slate-300 truncate">{post.author}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-500 whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-200 leading-snug line-clamp-2 mb-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {post.description || post.excerpt}
                  </p>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-sky-400 font-bold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {Math.max(3, Math.ceil((post.description?.length || 100) / 25))} min read
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}