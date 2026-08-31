import { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: `${CONSTANTS.FOCUS_KEYWORD} Easy Setup Guide 2026 | ${CONSTANTS.BRAND_NAME}`,
  description: `Step-by-step ${CONSTANTS.FOCUS_KEYWORD} installation tutorial for Firestick, Smart TVs (Samsung, LG), Android, iOS, Apple TV, PC & Mac. Start streaming in 5 minutes.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} setup`,
    `${CONSTANTS.FOCUS_KEYWORD} guide`,
    `${CONSTANTS.FOCUS_KEYWORD} installation`,
    'IPTV installation guide',
    'Firestick IPTV setup',
    'Smart TV IPTV tutorial',
    'Android IPTV setup',
    'iOS IPTV installation',
    'Apple TV IPTV guide',
    'PC IPTV setup',
    'best IPTV setup guide',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/setup`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} Easy Setup Guide 2026 | ${CONSTANTS.BRAND_NAME}`,
    description: `Install ${CONSTANTS.BRAND_NAME} on Firestick, Smart TV, Android, iOS, Apple TV, PC, and Mac in 5 minutes with our step-by-step guide.`,
    url: `https://${CONSTANTS.DOMAIN}/setup`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} - Easy Setup Guide`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} Easy Setup Guide 2026 | ${CONSTANTS.BRAND_NAME}`,
    description: `Step-by-step installation tutorial for all streaming devices. Quick 5-minute activation.`,
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

// JSON-LD HowTo Schema
const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="setup-howto-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Setup ${CONSTANTS.BRAND_NAME} ${CONSTANTS.FOCUS_KEYWORD} on Any Device`,
        "description": `Complete step-by-step installation and configuration guide for ${CONSTANTS.BRAND_NAME} on Firestick, Smart TVs, Android, Apple TV, and PC.`,
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "value": "10.00"
        },
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "step": [
          {
            "@type": "HowToStep",
            "name": "Activate Your Account & Get Credentials",
            "text": "Sign up on our pricing page and receive your instant M3U playlist URL and Xtream Codes API credentials via email.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Enable Unknown Sources (For Firestick/Android)",
            "text": "Go to Settings > My Fire TV > Developer Options and turn ON 'Install Unknown Apps' or 'Apps from Unknown Sources'.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Install Streaming Player App",
            "text": "Install Downloader on Firestick or download IPTV Smarters Pro / TiviMate directly from your device app store.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Download and Launch Player Application",
            "text": "Open Downloader, enter the player code, download the APK, and open the media application.",
            "position": 4
          },
          {
            "@type": "HowToStep",
            "name": "Authenticate via Xtream Codes API",
            "text": "Select 'Login with Xtream Codes API' and input your Server URL, Username, and Password as delivered in your welcome email.",
            "position": 5
          },
          {
            "@type": "HowToStep",
            "name": "Start 4K Streaming",
            "text": "Channels and VOD lists will synchronize automatically. Begin watching buffer-free live television and PPV sports.",
            "position": 6
          }
        ],
        "supply": [
          "Streaming device, Firestick, or Smart TV",
          "Broadband internet connection",
          `Active ${CONSTANTS.BRAND_NAME} subscription line`
        ],
        "tool": [
          "Downloader utility application",
          "IPTV Smarters Pro, TiviMate, or VLC media player"
        ]
      })
    }}
  />
);

// JSON-LD FAQ Schema
const SetupFAQSchema = () => (
  <script
    type="application/ld+json"
    id="setup-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What devices are compatible with ${CONSTANTS.BRAND_NAME}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.BRAND_NAME} is fully compatible with Amazon Firestick, Android TV boxes, Smart TVs (Samsung, LG, Sony), iOS devices (iPhone, iPad, Apple TV), Windows PC, Mac, and MAG devices.`
            }
          },
          {
            "@type": "Question",
            "name": "How long does device setup take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Installation and line authentication take approximately 3 to 5 minutes from start to finish."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a VPN to use this IPTV service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A VPN is optional. Our Anti-Freeze 9.0 servers feature built-in encryption and dynamic routing that bypasses standard broadband ISP throttling."
            }
          }
        ]
      })
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
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `https://${CONSTANTS.DOMAIN}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${CONSTANTS.FOCUS_KEYWORD} Setup Guide`,
            "item": `https://${CONSTANTS.DOMAIN}/setup`
          }
        ]
      })
    }}
  />
);

// JSON-LD Organization Schema
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
      })
    }}
  />
);

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}