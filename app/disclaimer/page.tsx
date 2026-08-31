import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Copyright, 
  FileText, 
  ExternalLink, 
  Mail, 
  ArrowLeft, 
  CheckCircle2,
  Server,
  Globe2
} from 'lucide-react';

export const metadata = generateSEOMetadata('Legal Disclaimer & DMCA Notice');

export default function DisclaimerPage() {
  const brandName = CONSTANTS?.BRAND_NAME || 'Platform';
  const siteUrl = CONSTANTS?.SITE_URL || 'https://yourdomain.com';
  const domain = CONSTANTS?.DOMAIN || 'yourdomain.com';
  const dmcaEmail = CONSTANTS?.CONTACT_INFO?.EMAIL || `dmca@${domain}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Legal Disclaimer & DMCA Notice - ${brandName}`,
    url: `${siteUrl}/disclaimer`,
    description: `Official Legal Disclaimer, Trademark notices, and DMCA Copyright compliance guidelines for ${brandName}.`,
    mainEntity: {
      '@type': 'DigitalDocument',
      name: `${brandName} Legal Disclaimer and DMCA Policy`,
      description: 'Declarations on third-party streams, trademark non-affiliation, and copyright notification procedures.',
      publisher: {
        '@type': 'Organization',
        name: brandName,
        url: siteUrl
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      {/* Structured Data for Search Engine & Legal Verification */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb08_1px,transparent_1px),linear-gradient(to_bottom,#2563eb08_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
            <AlertTriangle className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
              Legal Disclosures & DMCA
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">Disclaimer</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Please read these legal notices, third-party content disclaimers, and copyright policies regarding the operation of {brandName}.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-6 uppercase tracking-widest font-semibold">
            <span>Effective: August 2026</span>
            <span>•</span>
            <span>DMCA Compliant</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core Notice Card */}
        <div className="bg-slate-900/80 border border-blue-500/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl relative overflow-hidden">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-1.5">
                Content Indexing & Hosting Clarification
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {brandName} operates exclusively as a technical routing and indexing service provider. We do not host, broadcast, archive, or upload any video files, media streams, or digital broadcasts directly on our local servers. All streams indexed are publicly available via third-party transmission protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Scannable Notice Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Server className="w-6 h-6 text-sky-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">No Local Hosting</h3>
            <p className="text-slate-400 text-xs">Zero video files stored on proprietary drives</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Copyright className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">DMCA Respect</h3>
            <p className="text-slate-400 text-xs">Prompt takedown upon verified notice</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Globe2 className="w-6 h-6 text-sky-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">Non-Affiliation</h3>
            <p className="text-slate-400 text-xs">Independent media directory service</p>
          </div>
        </div>

        {/* Detailed Disclaimer Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              1. General Information & Technical Nature
            </h2>
            <p className="text-slate-400">
              The services and documentation provided on {brandName} are intended for personal media organization and technical streaming connectivity. Users are solely responsible for ensuring their use of playlist URLs and media players complies with local telecommunication regulations and copyright laws within their jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              2. Third-Party Links & Transmission Feeds
            </h2>
            <p className="text-slate-400 mb-3">
              Our website and server configurations may point to external servers, M3U playlists, or APIs maintained by independent third parties:
            </p>
            <ul className="space-y-2 pl-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>We do not exercise editorial or technical control over third-party transmission feeds.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>The inclusion of any stream directory does not imply endorsement or sponsorship by {brandName}.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>We cannot guarantee uninterrupted signal availability from external broadcast sources.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              3. Trademark & Brand Non-Affiliation
            </h2>
            <p className="text-slate-400">
              All channel names, logos, sports leagues, television networks, and software applications (including Apple, Android, Firestick, Roku, TiviMate, and IPTV Smarters) referenced on this site are the registered trademarks and copyrights of their respective owners. Their mention is strictly for descriptive, educational, and hardware compatibility purposes under fair use doctrine.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              4. DMCA & Copyright Compliance Policy
            </h2>
            <p className="text-slate-400 mb-4">
              {brandName} complies fully with the Digital Millennium Copyright Act (DMCA) and international intellectual property statutes. If you are a verified copyright holder or legal representative and believe indexed content infringes upon your copyright, you may submit a formal takedown notice.
            </p>
            
            <p className="text-slate-400 mb-2 font-medium">Your DMCA notice must include:</p>
            <ul className="space-y-2 pl-2 text-sm text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Identification of the copyrighted work claimed to have been infringed.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Exact URL, stream parameter, or directory reference to locate the material.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Contact details including full legal name, physical address, phone number, and email.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>A statement of good-faith belief and an authorized digital or physical signature.</span>
              </li>
            </ul>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-lg">
              <Mail className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Designated DMCA Agent Email</p>
              <a 
                href={`mailto:${dmcaEmail}`} 
                className="text-sky-400 font-black text-lg sm:text-xl hover:text-white transition-colors"
              >
                {dmcaEmail}
              </a>
              <p className="text-slate-500 text-xs mt-2">Verified notices are reviewed and processed within 24–48 business hours</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              5. Service Warranty Disclaimer
            </h2>
            <p className="text-slate-400">
              The services provided by {brandName} are offered on an "as is" and "as available" basis without express or implied warranties of any kind. We do not warrant that transmission streams will be error-free, completely uninterrupted, or compatible with obsolete hardware firmware.
            </p>
          </div>

        </div>

        {/* Back Link */}
        <div className="mt-14 pt-8 border-t border-slate-800 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}