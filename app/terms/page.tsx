import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  CreditCard, 
  UserCheck, 
  Ban, 
  RefreshCw, 
  Mail, 
  Scale, 
  ArrowLeft,
  Server,
  Zap,
  Globe2
} from 'lucide-react';

export const metadata = generateSEOMetadata('Terms of Service');

export default function TermsPage() {
  const brandName = CONSTANTS?.BRAND_NAME || 'Platform';
  const siteUrl = CONSTANTS?.SITE_URL || 'https://yourdomain.com';
  const domain = CONSTANTS?.DOMAIN || 'yourdomain.com';
  const legalEmail = CONSTANTS?.CONTACT_INFO?.EMAIL || `legal@${domain}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Terms of Service - ${brandName}`,
    url: `${siteUrl}/terms`,
    description: `Official Terms of Service, Acceptable Use Policy, and subscription governance terms for ${brandName}.`,
    mainEntity: {
      '@type': 'DigitalDocument',
      name: `${brandName} Terms of Service Agreement`,
      description: 'Terms governing digital stream access, subscription parameters, acceptable use, and intellectual property limits.',
      publisher: {
        '@type': 'Organization',
        name: brandName,
        url: siteUrl
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      {/* Structured Data for Legal & Search Verification */}
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
            <Scale className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
              Legal Framework & Governance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">Service</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Please review these terms and conditions thoroughly before activating subscriptions or accessing technical infrastructure on {brandName}.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-6 uppercase tracking-widest font-semibold">
            <span>Effective: August 2026</span>
            <span>•</span>
            <span>Version 4.1</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Acceptance Box */}
        <div className="bg-slate-900/80 border border-blue-500/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl relative overflow-hidden">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-1.5">
                Binding Acceptance of Agreement
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                By purchasing, activating, or utilizing {brandName} technical services, M3U links, or Xtream API portals, you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service, along with our <Link href="/privacy" className="text-sky-400 hover:underline">Privacy Policy</Link> and <Link href="/refund-policy" className="text-sky-400 hover:underline">Refund Policy</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Legal Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <CreditCard className="w-6 h-6 text-sky-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">Zero Hidden Fees</h3>
            <p className="text-slate-400 text-xs">Prepaid, fixed terms without auto-debt lock</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">Fair Bandwidth</h3>
            <p className="text-slate-400 text-xs">Dynamic load balancing on 10Gbps uplinks</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Ban className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">Strict Anti-Restream</h3>
            <p className="text-slate-400 text-xs">Personal household entertainment only</p>
          </div>
        </div>

        {/* Legal Text & Policy Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              1. Provision of Technical Services
            </h2>
            <p className="text-slate-400">
              {brandName} provides access to digital media playlist feeds, Xtream API portals, and indexing directory architectures intended exclusively for private, non-commercial home entertainment. All accounts are restricted to single-user or specified multi-connection configurations as determined during order checkout.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              2. User Eligibility & Account Security
            </h2>
            <p className="text-slate-400 mb-4">
              To create an account and access our network infrastructure, you represent and warrant that:
            </p>
            <ul className="space-y-2.5 pl-2 mb-6">
              {[
                "You are at least 18 years old or possess legal guardian authorization.",
                "You provide authentic payment and email parameters during checkout.",
                "You maintain total confidentiality over your playlist URLs, Xtream API keys, and passwords.",
                "You will not exceed the simultaneous connection cap allocated to your purchased plan tier."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-3.5">
              <UserCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                  Credential Security & Automated Auditing
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  You are solely responsible for activities originating from your credentials. Sharing playlist URLs on public forums or exceeding concurrent IP connection limits will trigger automated line locks by our firewall systems.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              3. Pricing, Billing, & Order Terms
            </h2>
            <p className="text-slate-400 mb-4">
              All plans operate on a strictly prepaid basis for the selected duration (e.g., 1 Month, 3 Months, 6 Months, or 12 Months). Payments are processed via TLS 1.3 encrypted third-party financial gateways (including PayPal, Visa, Mastercard, and Cryptocurrencies). We do not record or retain customer credit card details on our local database nodes.
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-3.5">
              <CreditCard className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                  Fixed Prepaid Pricing Structure
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Our subscriptions do not bind you to long-term contracts, unexpected balloon rates, or automatic termination penalties. Renewal is managed manually unless recurring billing is explicitly requested.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              4. Acceptable Use Policy & Prohibited Conduct
            </h2>
            <p className="text-slate-400 mb-4">
              Users must refrain from any misuse of our infrastructure, including:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Re-streaming, rebroadcasting, sub-licensing, or distributing network feeds to third parties or commercial entities.",
                "Deploying automated web scrapers, data harvesters, or crawlers against our API endpoints without express permission.",
                "Conducting penetration testing, stress tests, or Denial-of-Service attacks against our edge server nodes.",
                "Simultaneous line exploitation across divergent geographical IPs exceeding tier specifications."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <Ban className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mt-5">
              <div className="flex items-start gap-3.5">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-300 font-bold text-xs uppercase tracking-wider mb-1">
                    Enforcement & Account Revocation
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Any breach of our Acceptable Use Policy triggers immediate credential termination without prior warning or eligibility for financial compensation under our Refund Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              5. Service Availability & Maintenance SLAs
            </h2>
            <p className="text-slate-400">
              While {brandName} maintains a target 99.9% uptime across our global routing backbone, occasional scheduled maintenance windows, emergency server upgrades, or third-party broadcast signal dropouts may temporarily affect channel streams.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-slate-400">
              To the maximum extent permissible by law, {brandName} and its technical engineers shall not be liable for any indirect, special, incidental, or consequential damages resulting from local network connectivity drops, hardware incompatibilities, or local internet service provider packet throttling.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              7. Legal Notices & Communications
            </h2>
            <p className="text-slate-400 mb-4">
              For contractual notifications, compliance questions, or legal clarifications regarding these terms:
            </p>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-lg">
              <Mail className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Legal Department Desk</p>
              <a 
                href={`mailto:${legalEmail}`} 
                className="text-sky-400 font-black text-lg sm:text-xl hover:text-white transition-colors"
              >
                {legalEmail}
              </a>
              <p className="text-slate-500 text-xs mt-2">Official compliance inquiries are addressed within 1–2 business days</p>
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