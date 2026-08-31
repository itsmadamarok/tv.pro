// app/pricing/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: `${CONSTANTS.FOCUS_KEYWORD} Pricing & Plans 2026 | ${CONSTANTS.BRAND_NAME}`,
  description: `Compare ${CONSTANTS.FOCUS_KEYWORD} subscription plans. Stream 25,000+ live 4K channels, movies & sports. Instant setup with 7-day money-back guarantee.`,
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
    canonical: `https://${CONSTANTS.DOMAIN}/pricing`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} Pricing & Plans 2026 | ${CONSTANTS.BRAND_NAME}`,
    description: `Subscribe to ${CONSTANTS.BRAND_NAME} and access 25,000+ live channels, 65,000+ VODs, and live sports in 4K quality with Anti-Freeze 9.0 servers.`,
    url: `https://${CONSTANTS.DOMAIN}/pricing`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} - Subscription Pricing`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} Pricing & Plans 2026 | ${CONSTANTS.BRAND_NAME}`,
    description: `Explore 25,000+ live channels, 4K sports & 65,000+ movies with instant setup and 7-day guarantee.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
    site: `@${CONSTANTS.BRAND_NAME.toLowerCase().replace(/\s+/g, '')}`,
  },
  category: 'entertainment',
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} pricing`,
    `${CONSTANTS.FOCUS_KEYWORD} subscription`,
    `${CONSTANTS.FOCUS_KEYWORD} plans 2026`,
    `${CONSTANTS.FOCUS_KEYWORD} deals`,
    'best IPTV subscription plans',
    'cheap IPTV subscription',
    'buy 4K IPTV service',
    'reliable sports streaming package',
    'anti freeze live TV provider',
    'premium live TV streaming',
  ],
};

// Pricing Page Product & Offer JSON-LD Schema
const PricingPageSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-page-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${CONSTANTS.BRAND_NAME} ${CONSTANTS.FOCUS_KEYWORD}`,
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "description": `Premium 4K live streaming service with flexible prepaid plans. Access 25,000+ live channels and 65,000+ VODs in Ultra HD with Anti-Freeze 9.0 server technology.`,
        "brand": {
          "@type": "Brand",
          "name": CONSTANTS.BRAND_NAME
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5420",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Starter Plan - 3 Months",
            "price": "30.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": `3 months access to 25,000+ live channels and 65,000+ VODs in Ultra HD 4K with instant activation`,
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "Value Plan - 6 Months",
            "price": "50.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": `6 months access to 25,000+ live channels and 65,000+ VODs with dual-device support and anti-freeze routing`,
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "Ultimate Plan - 12 Months",
            "price": "80.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": `12 months full access to 25,000+ channels, 65,000+ VODs, multi-connection streaming, and 24/7 VIP priority support`,
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          }
        ]
      })
    }}
  />
);

// FAQ Schema
const PricingFAQSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What payment methods does ${CONSTANTS.BRAND_NAME} accept?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.BRAND_NAME} accepts Visa, Mastercard, American Express, PayPal, and major Cryptocurrencies through secure, SSL-encrypted checkout gateways.`
            }
          },
          {
            "@type": "Question",
            "name": `Is there a contract or cancellation fee with ${CONSTANTS.BRAND_NAME}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `No, all ${CONSTANTS.BRAND_NAME} packages are 100% prepaid with zero contracts, recurring billing traps, or cancellation fees.`
            }
          },
          {
            "@type": "Question",
            "name": `Does ${CONSTANTS.BRAND_NAME} provide a money-back guarantee?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, we offer an unconditional 7-day money-back guarantee on all subscription tiers.`
            }
          }
        ]
      })
    }}
  />
);

// Organization Schema
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": CONSTANTS.BRAND_NAME,
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "url": `https://${CONSTANTS.DOMAIN}`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree",
        },
      }),
    }}
  />
);

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrganizationSchema />
      <PricingPageSchema />
      <PricingFAQSchema />
      {children}
    </>
  );
}