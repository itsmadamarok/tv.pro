import { blogPosts } from '@/lib/blog';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SocialShareBar from '@/app/components/SocialShareBar';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Headphones,
  CheckCircle2,
  Tv,
  Flame,
  BookOpen
} from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return generateSEOMetadata({
      pageName: 'Article Not Found',
      path: '/blog',
      noIndex: true,
    });
  }
  
  const shortTitle = post.title.length > 55 ? post.title.substring(0, 52) + '...' : post.title;
  const rawDesc = post.description || post.excerpt || `Read the complete guide about ${post.title}.`;
  const cleanDescription = rawDesc.length > 155 ? rawDesc.substring(0, 152) + '...' : rawDesc;
  const canonicalUrl = `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`;
  const articleImage = post.image.startsWith('http') ? post.image : `https://${CONSTANTS.DOMAIN}${post.image}`;
  
  return {
    title: shortTitle,
    description: cleanDescription,
    keywords: post.keywords?.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${shortTitle} | ${CONSTANTS.BRAND_NAME}`,
      description: cleanDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: articleImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${shortTitle} | ${CONSTANTS.BRAND_NAME}`,
      description: cleanDescription,
      images: [articleImage],
      creator: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
      site: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // Filter out current post to display related / trending articles
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);
  const relatedPosts = otherPosts.slice(0, 4);

  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));
  const displayCategory = post.keywords && post.keywords.length > 0 ? post.keywords[0] : 'Streaming Guide';
  const articleImage = post.image.startsWith('http') ? post.image : `https://${CONSTANTS.DOMAIN}${post.image}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.excerpt,
    keywords: post.keywords?.join(', '),
    image: [articleImage],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: CONSTANTS.BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`,
    },
  };

  return (
    <article className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="w-full h-full object-cover scale-105 opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/40" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32 sm:pt-36 md:pt-40 pb-12 md:pb-16">
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-3.5 py-1.5 bg-blue-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-500/20 shadow-inner">
              {displayCategory}
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 md:mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed mb-6">
            {post.description || post.excerpt}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-400 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 md:gap-2">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <User className="w-4 h-4 text-sky-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-10">
        <Link 
          href="/blog" 
          aria-label="Return to Blog List"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-semibold text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to all articles
        </Link>
      </div>

      {/* Main Container: 2-Column Grid (Article + Sticky Sidebar) */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Article Body (8 cols) */}
          <main className="lg:col-span-8 w-full min-w-0">

            {/* Takeaways & Highlights Box */}
            <div className="mb-10 p-6 rounded-2xl border border-blue-500/30 bg-slate-900/80 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span className="text-white font-black text-lg tracking-wide uppercase">Key Takeaways & Summary</span>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                In this guide, our technical team breaks down essential steps regarding <strong>{CONSTANTS.FOCUS_KEYWORD}</strong> optimization, network troubleshooting, and device setup.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified 2026 troubleshooting steps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Recommended network & player settings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Anti-freeze streaming compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Optimized for Smart TVs, Firestick & Android</span>
                </div>
              </div>
            </div>

            {/* Article HTML Content Body */}
            <div 
              className="prose prose-invert prose-base md:prose-lg max-w-none text-slate-300
                [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:lg:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mb-4 [&>h2]:md:mb-5 [&>h2]:mt-8 [&>h2]:md:mt-12 [&>h2]:tracking-tight
                [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:lg:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-3 [&>h3]:md:mb-4 [&>h3]:mt-6 [&>h3]:md:mt-8
                [&>h4]:text-base [&>h4]:md:text-lg [&>h4]:lg:text-xl [&>h4]:font-bold [&>h4]:text-sky-400 [&>h4]:mb-2 [&>h4]:md:mb-3 [&>h4]:mt-4 [&>h4]:md:mt-6
                [&>p]:text-slate-300 [&>p]:text-sm [&>p]:md:text-base [&>p]:lg:text-lg [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:md:mb-6
                [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:md:pl-6 [&>ul]:mb-4 [&>ul]:md:mb-6 [&>ul]:text-slate-300
                [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:md:pl-6 [&>ol]:mb-4 [&>ol]:md:mb-6 [&>ol]:text-slate-300
                [&>li]:mb-1.5 [&>li]:md:mb-2 [&>li]:text-slate-300
                [&>a]:text-sky-400 [&>a]:hover:text-sky-300 [&>a]:transition-colors [&>a]:font-medium
                [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:md:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-4 [&>blockquote]:md:my-6 [&>blockquote]:text-slate-400 [&>blockquote]:italic
                [&>img]:rounded-2xl [&>img]:my-6 [&>img]:md:my-8 [&>img]:border [&>img]:border-slate-800 [&>img]:w-full [&>img]:h-auto
                [&>hr]:border-slate-800 [&>hr]:my-8 [&>hr]:md:my-12
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Share Bar */}
            <div className="my-10">
              <SocialShareBar />
            </div>

            {/* Tags Section */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Tag className="w-4 h-4 md:w-5 md:h-5 text-sky-400" />
                <span className="text-white font-bold text-base md:text-lg">Related Topics</span>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {post.keywords?.slice(0, 8).map((keyword) => (
                  <span 
                    key={keyword} 
                    className="px-3.5 py-1.5 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium rounded-full border border-slate-800"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio Section */}
            <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 font-black text-2xl md:text-3xl uppercase shrink-0 shadow-lg">
                  {post.author[0]}
                </div>
                <div>
                  <p className="text-white font-black text-xl md:text-2xl mb-1">{post.author}</p>
                  <p className="text-sky-400 text-xs md:text-sm uppercase tracking-widest font-bold mb-2 md:mb-3">
                    Streaming Technology Specialist
                  </p>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    Specialized in IPTV infrastructure, codec optimizations, and low-latency broadcast configurations for home entertainment setups.
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 w-full space-y-6 lg:sticky lg:top-24">
            
            {/* Sidebar Widget 1: Related / Latest Articles */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-800">
                <Flame className="w-5 h-5 text-sky-400" />
                <h3 className="text-white font-bold text-base uppercase tracking-wider">
                  Trending Articles
                </h3>
              </div>

              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link 
                    key={related.id} 
                    href={`/blog/${related.slug}`}
                    className="group flex gap-3.5 items-start p-2.5 rounded-xl hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60"
                  >
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-700/50 bg-slate-800">
                      <Image 
                        src={related.image} 
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-400 line-clamp-2 transition-colors leading-snug">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-sky-400" />
                          {related.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 text-center">
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-bold uppercase tracking-wider group"
                >
                  <span>View All Guides</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Sidebar Widget 2: Premium Subscription Promo Box */}
            <div className="p-6 rounded-2xl border border-blue-500/40 bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-900 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-sky-400 mb-4 shadow-inner">
                <Tv className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-black text-white mb-2 leading-snug">
                Unlock 25,000+ 4K Channels
              </h3>

              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Stream live sports, PPVs, and 65,000+ movies on all devices with zero buffering.
              </p>

              <div className="space-y-2 text-left text-xs text-slate-200 mb-6 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Instant Activation in 2 Mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Anti-Freeze 9.0 Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>7-Day Money-Back Guarantee</span>
                </div>
              </div>

              <Link 
                href="/pricing"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 border border-blue-400/30 hover:scale-[1.02]"
              >
                <span>Get Instant Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sidebar Widget 3: Quick Setup / Support Card */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 text-center">
              <div className="flex items-center justify-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Headphones className="w-4 h-4" />
                <span>Need Setup Help?</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Our team is available 24/7 on WhatsApp & Live Chat for instant configuration help.
              </p>
              <Link 
                href="/contact" 
                className="text-xs font-bold text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                Contact 24/7 Support →
              </Link>
            </div>

          </aside>
        </div>
      </div>

      {/* Trust Footer Strip */}
      <div className="border-t border-slate-800/80 mt-8 md:mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-slate-500 text-xs uppercase tracking-widest font-semibold">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /> 4K Ultra HD</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sky-400" /> 99.9% Uptime SLA</span>
            <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-sky-400" /> 24/7 Support</span>
          </div>
          <p className="text-center text-slate-600 text-xs mt-4">
            © 2026 {CONSTANTS.BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </article>
  );
}