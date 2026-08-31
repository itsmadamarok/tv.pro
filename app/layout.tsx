import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import SplashLoader from './components/SplashLoader';
import { CONSTANTS } from '@/lib/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const baseUrl = `https://${CONSTANTS.DOMAIN}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${CONSTANTS.FOCUS_KEYWORD.toUpperCase()} - Premium 4K Streaming & Live TV 2026`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Stream 25,000+ live channels, sports PPV & 65K+ 4K movies with ${CONSTANTS.FOCUS_KEYWORD}. Fast activation, anti-freeze servers & zero buffering. Start your trial today!`,
  authors: [{ name: `${CONSTANTS.BRAND_NAME} Team` }],
  creator: CONSTANTS.BRAND_NAME,
  publisher: CONSTANTS.BRAND_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD.toUpperCase()} - Premium 4K Streaming & Live TV 2026`,
    description: `Stream 25,000+ live channels, sports PPV & 65K+ 4K movies with ${CONSTANTS.FOCUS_KEYWORD}. Fast activation, anti-freeze servers & zero buffering. Start your trial today!`,
    url: `${baseUrl}/`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} - Premium 4K Streaming`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD.toUpperCase()} - Premium 4K Streaming & Live TV 2026`,
    description: `Stream 25,000+ live channels, sports PPV & 65K+ 4K movies with ${CONSTANTS.FOCUS_KEYWORD}. Fast activation, anti-freeze servers & zero buffering. Start your trial today!`,
    images: [`${baseUrl}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
    site: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
  },
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon.ico',
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/img/favicons/safari-pinned-tab.svg',
        color: '#2563EB',
      },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: CONSTANTS.BRAND_NAME,
    statusBarStyle: 'black-translucent',
  },
  other: {
    'msapplication-TileColor': '#030712',
    'msapplication-TileImage': '/img/favicons/mstile-144x144.png',
    'msapplication-config': '/img/favicons/browserconfig.xml',
  },
  verification: {
    google: 'G-6NR51QZXKL',
  },
  category: 'entertainment',
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'IPTV subscription',
    'premium IPTV',
    'international channels',
    'IPTV 2026',
    'streaming service',
    'cord cutting',
    'live channels',
    'movies on demand',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#030712',
};

// Organization Schema
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: CONSTANTS.BRAND_NAME,
        alternateName: CONSTANTS.FOCUS_KEYWORD,
        url: baseUrl,
        logo: `${baseUrl}/img/structer.png`,
        image: `${baseUrl}/img/structer.png`,
        description: `Stream 25,000+ live channels, sports PPV & 65K+ 4K movies with ${CONSTANTS.FOCUS_KEYWORD}. Fast activation, anti-freeze servers & zero buffering.`,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          availableLanguage: ['English'],
          contactOption: 'TollFree',
        },
      }),
    }}
  />
);

// Website Schema
const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: CONSTANTS.BRAND_NAME,
        alternateName: CONSTANTS.FOCUS_KEYWORD,
        url: baseUrl,
        description: `Stream 25,000+ live channels, sports PPV & 65K+ 4K movies with ${CONSTANTS.FOCUS_KEYWORD}. Fast activation, anti-freeze servers & zero buffering.`,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }),
    }}
  />
);

// Product Schema
const ProductSchema = () => (
  <script
    type="application/ld+json"
    id="product-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${CONSTANTS.BRAND_NAME} Premium Subscription`,
        image: `${baseUrl}/img/structer.png`,
        description: `Stream 25,000+ live channels, sports PPV & 65K+ 4K movies with ${CONSTANTS.FOCUS_KEYWORD}. Fast activation, anti-freeze servers & zero buffering.`,
        brand: {
          '@type': 'Brand',
          name: CONSTANTS.BRAND_NAME,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '5000',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter Plan - 3 Months',
            priceCurrency: 'EUR',
            price: '30.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
            url: `${baseUrl}/pricing`,
          },
          {
            '@type': 'Offer',
            name: 'Value Plan - 6 Months',
            priceCurrency: 'EUR',
            price: '50.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
            url: `${baseUrl}/pricing`,
          },
          {
            '@type': 'Offer',
            name: 'Ultimate Plan - 12 Months',
            priceCurrency: 'EUR',
            price: '80.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
            url: `${baseUrl}/pricing`,
          },
        ],
      }),
    }}
  />
);

// Service Schema
const ServiceSchema = () => (
  <script
    type="application/ld+json"
    id="service-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${CONSTANTS.BRAND_NAME} IPTV Subscription`,
        alternateName: CONSTANTS.FOCUS_KEYWORD,
        serviceType: 'IPTV Subscription',
        provider: {
          '@type': 'Organization',
          name: CONSTANTS.BRAND_NAME,
        },
        description: `Stream 25,000+ live channels, sports PPV & 65K+ 4K movies with ${CONSTANTS.FOCUS_KEYWORD}. Fast activation, anti-freeze servers & zero buffering.`,
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Subscription Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Starter Plan - 3 Months',
              },
              price: '30.00',
              priceCurrency: 'EUR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Value Plan - 6 Months',
              },
              price: '50.00',
              priceCurrency: 'EUR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ultimate Plan - 12 Months',
              },
              price: '80.00',
              priceCurrency: 'EUR',
            },
          ],
        },
      }),
    }}
  />
);

// FAQ Schema
const FAQSchema = () => (
  <script
    type="application/ld+json"
    id="faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is ${CONSTANTS.BRAND_NAME}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${CONSTANTS.BRAND_NAME} is a premium ${CONSTANTS.FOCUS_KEYWORD} provider offering 25,000+ live channels and 65,000+ VODs in 4K quality with anti-freeze server routing.`,
            },
          },
          {
            '@type': 'Question',
            name: `Is ${CONSTANTS.BRAND_NAME} the best IPTV service?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Based on verified customer reviews, ${CONSTANTS.BRAND_NAME} is rated among the top IPTV providers with 4.9/5 stars from 5000+ active subscribers.`,
            },
          },
          {
            '@type': 'Question',
            name: `What devices support ${CONSTANTS.BRAND_NAME}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${CONSTANTS.BRAND_NAME} works on all major devices including Smart TVs, Android TV, iOS, Firestick, MAG boxes, TiviMate, and Windows/Mac.`,
            },
          },
          {
            '@type': 'Question',
            name: `Does ${CONSTANTS.BRAND_NAME} offer risk-free trials?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${CONSTANTS.BRAND_NAME} offers guaranteed money-back protection, allowing you to test 4K streaming quality risk-free.`,
            },
          },
        ],
      }),
    }}
  />
);

// WebPage Schema
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${CONSTANTS.FOCUS_KEYWORD.toUpperCase()} - 4K Live TV & Sports Streaming`,
        description: `Stream 25,000+ Live Channels & 65,000+ VODs in 4K. Fast activation, anti-freeze tech, 24/7 support.`,
        url: `${baseUrl}/`,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${baseUrl}/img/structer.png`,
          width: 1200,
          height: 630,
        },
      }),
    }}
  />
);

// Article Schema
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${CONSTANTS.FOCUS_KEYWORD.toUpperCase()} - 4K Live TV & Sports Streaming`,
        image: [`${baseUrl}/img/structer.png`],
        datePublished: '2026-01-01T00:00:00+00:00',
        dateModified: '2026-08-30T00:00:00+00:00',
        author: {
          '@type': 'Person',
          name: `${CONSTANTS.BRAND_NAME} Team`,
        },
        publisher: {
          '@type': 'Organization',
          name: CONSTANTS.BRAND_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/img/structer.png`,
          },
        },
      }),
    }}
  />
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#030712" />
        <meta name="thumbnail" content={`${baseUrl}/img/structer.png`} />
      </head>
      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-600 selection:text-white`}
        suppressHydrationWarning
      >
        {/* NextTopLoader: High-contrast Electric Blue progress bar */}
        <NextTopLoader
          color="#2563EB"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 12px #2563EB, 0 0 6px #38BDF8"
        />

        {/* Brand Splash Loader */}
        <SplashLoader />

        {/* JSON-LD Structured Data */}
        <OrganizationSchema />
        <WebsiteSchema />
        <ProductSchema />
        <ServiceSchema />
        <FAQSchema />
        <WebPageSchema />
        <ArticleSchema />

        <Header />
        {children}
        <Footer />

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-6NR51QZXKL" />

        <FloatingWhatsApp />
      </body>
    </html>
  );
}