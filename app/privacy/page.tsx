import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  Mail, 
  Server, 
  ArrowLeft, 
  CheckCircle2,
  FileText,
  UserCheck,
  Globe2,
  Cookie
} from 'lucide-react';

export const metadata = generateSEOMetadata('Privacy Policy');

export default function PrivacyPage() {
  const brandName = CONSTANTS?.BRAND_NAME || 'Platform';
  const siteUrl = CONSTANTS?.SITE_URL || 'https://yourdomain.com';
  const domain = CONSTANTS?.DOMAIN || 'yourdomain.com';
  const privacyEmail = CONSTANTS?.CONTACT_INFO?.EMAIL || `privacy@${domain}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Privacy Policy - ${brandName}`,
    url: `${siteUrl}/privacy`,
    description: `Official Privacy Policy and Data Protection declaration for ${brandName}. Learn how we handle account metadata, encryption, and zero-activity logging.`,
    mainEntity: {
      '@type': 'DigitalDocument',
      name: `${brandName} Data Privacy & Security Framework`,
      description: 'Zero activity-logging policy, GDPR compliance, and end-to-end data encryption protocols.',
      publisher: {
        '@type': 'Organization',
        name: brandName,
        url: siteUrl
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      {/* Structured Data for Google Compliance */}
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
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
              Data Protection & Privacy
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">Policy</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            At {brandName}, we prioritize user privacy, zero media tracking, and transparent data processing. Learn how your credentials and metadata are protected.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-6 uppercase tracking-widest font-semibold">
            <span>Effective: August 2026</span>
            <span>•</span>
            <span>GDPR & CCPA Compliant</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core Guarantee Card */}
        <div className="bg-slate-900/80 border border-blue-500/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl relative overflow-hidden">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-1.5">
                Our Zero Activity-Logging Policy
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We strictly enforce a policy that guarantees we do not monitor, log, or store your specific channel viewing history, streams watched, or media consumption patterns. Your browsing activity remains completely private and unrecorded.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Database className="w-6 h-6 text-sky-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">Minimal Collection</h3>
            <p className="text-slate-400 text-xs">Only essential service delivery parameters</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Server className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">Encrypted Transit</h3>
            <p className="text-slate-400 text-xs">TLS 1.3 cryptographic protection</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <UserCheck className="w-6 h-6 text-sky-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">Right to Erasure</h3>
            <p className="text-slate-400 text-xs">Full account deletion on request</p>
          </div>
        </div>

        {/* Legal Text & Policy Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              1. Information We Collect
            </h2>
            <p className="text-slate-400 mb-4">
              To provision and maintain your {CONSTANTS?.FOCUS_KEYWORD || 'streaming'} subscription, {brandName} collects only the minimum operational metadata:
            </p>
            <ul className="space-y-2.5 pl-2 mb-6">
              {[
                "Account email address (used strictly for dispatching your playlist link, Xtream API credentials, and billing receipts)",
                "Cryptographic payment transaction IDs (processed externally through PCI-DSS compliant providers like PayPal, Stripe, and Crypto Gateways)",
                "Active device connection counts (to prevent account sharing in violation of your selected tier limits)",
                "Customer support records (correspondence submitted voluntarily through tickets, emails, or official WhatsApp channels)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-3.5">
              <Eye className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                  What We Never Collect or Store
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  We do NOT store raw credit card numbers or banking secrets on our servers. Furthermore, we never sell, rent, monetize, or disclose your personal records to third-party ad networks or data brokers.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              2. How We Use Account Data
            </h2>
            <p className="text-slate-400 mb-3">
              We process technical account information exclusively for legitimate operational purposes:
            </p>
            <ul className="space-y-2 pl-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Generating and maintaining active M3U playlist lines and API access tokens.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Balancing traffic loads across regional edge CDN nodes during peak broadcast events.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Providing direct customer support, setup diagnostics, and connection troubleshooting.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Mitigating automated bot attacks, credential abuse, and DDoS disruptions.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              3. Data Security & Encryption Standards
            </h2>
            <p className="text-slate-400 mb-4">
              We apply enterprise security measures across our entire web and application delivery stack:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-sky-400 font-bold text-xs uppercase tracking-wider mb-1">TLS 1.3 Transport</p>
                <p className="text-slate-400 text-xs leading-relaxed">Full 256-bit SSL cryptographic encryption on all web endpoints and API communications.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-sky-400 font-bold text-xs uppercase tracking-wider mb-1">Isolated Databases</p>
                <p className="text-slate-400 text-xs leading-relaxed">Hardened database environments protected by Cloudflare firewall rules and role-based access.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              4. Cookies & Lightweight Telemetry
            </h2>
            <p className="text-slate-400 mb-3">
              Our website uses strictly necessary session cookies and privacy-friendly telemetry solely to:
            </p>
            <ul className="space-y-2 pl-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Preserve active user dashboard and shopping cart session states.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Analyze anonymized site performance, Core Web Vitals, and server uptime.</span>
              </li>
            </ul>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              We do not utilize invasive cross-site tracking pixels or behavioral profiling cookies. You can disable all non-essential cookies directly within your web browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              5. User Rights (GDPR & CCPA Compliance)
            </h2>
            <p className="text-slate-400 mb-3">
              Under international data protection regulations, you hold full authority over your personal information:
            </p>
            <ul className="space-y-2 pl-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>Right of Access:</strong> Request an export of all account metadata associated with your email.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>Right to Erasure:</strong> Request the complete purging of your customer profile from our records.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>Right to Rectification:</strong> Update or correct inaccurate billing or delivery email addresses.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              6. Privacy Officer Contact
            </h2>
            <p className="text-slate-400 mb-4">
              For any privacy inquiries, data deletion requests, or compliance verifications, reach out directly to our Data Protection Desk:
            </p>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-lg">
              <Mail className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Direct Privacy Desk</p>
              <a 
                href={`mailto:${privacyEmail}`} 
                className="text-sky-400 font-black text-lg sm:text-xl hover:text-white transition-colors"
              >
                {privacyEmail}
              </a>
              <p className="text-slate-500 text-xs mt-2">Requests are reviewed and processed within 24–48 business hours</p>
            </div>
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