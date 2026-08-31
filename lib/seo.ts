import { Metadata } from 'next';

const DOMAIN = 'iptvservicetv.pro';
const BASE_URL = `https://${DOMAIN}`;
const BRAND_NAME = 'IPTV Service';

// Primary & secondary search targets
const FOCUS_KEYWORD = 'best iptv service';
const SECONDARY_KEYWORDS = [
  'iptv service providers',
  'iptv provider',
  'iptv provider reddit',
  'iptv provider uk',
  'iptv provider canada',
  'iptv provider usa',
  'best iptv service providers',
  'iptv provider near me',
  'iptv provider list',
  'iptv provider best',
  'IPTV Service TV',
];

// Contact & Support Details (WhatsApp only)
export const CONTACT_INFO = {
  EMAIL: 'support@iptvservicetv.pro',
  PHONE: '+1 (800) 000-0000', // replace with your active phone number
  WHATSAPP: '+1 (800) 000-0000', // replace with your active WhatsApp number
  SUPPORT_HOURS: '24/7 Live Support',
};

interface SEOMetadataOptions {
  pageName: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export const generateSEOMetadata = ({
  pageName,
  description,
  path = '',
  keywords = [],
  noIndex = false,
}: SEOMetadataOptions): Metadata => {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const pageUrl = `${BASE_URL}${cleanPath}`;

  const combinedKeywords = Array.from(
    new Set([FOCUS_KEYWORD, ...keywords, ...SECONDARY_KEYWORDS])
  );

  const defaultDescription =
    description ||
    `Looking for the ${FOCUS_KEYWORD}? ${BRAND_NAME} delivers 25,000+ live 4K channels, buffer-free sports, and VOD for Firestick, Android, and Smart TVs across USA, UK, and Canada.`;

  return {
    title: `${pageName} | ${BRAND_NAME} - ${FOCUS_KEYWORD.toUpperCase()}`,
    description: defaultDescription,
    keywords: combinedKeywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: cleanPath || '/',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${pageName} | ${BRAND_NAME} - Top IPTV Service Providers`,
      description: defaultDescription,
      url: pageUrl,
      siteName: BRAND_NAME,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageName} | ${BRAND_NAME}`,
      description: defaultDescription,
    },
  };
};

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_INFO.PHONE,
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: ['US', 'CA', 'GB'],
  },
});

export const CONSTANTS = {
  DOMAIN,
  BASE_URL,
  BRAND_NAME,
  FOCUS_KEYWORD,
  SECONDARY_KEYWORDS,
  CONTACT_INFO,
};