import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  RotateCcw, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Mail, 
  ArrowLeft,
  DollarSign,
  HelpCircle,
  CreditCard,
  Zap
} from 'lucide-react';

export const metadata = generateSEOMetadata('Refund & Cancellation Policy');

export default function RefundPolicyPage() {
  const brandName = CONSTANTS?.BRAND_NAME || 'Platform';
  const siteUrl = CONSTANTS?.SITE_URL || 'https://yourdomain.com';
  const domain = CONSTANTS?.DOMAIN || 'yourdomain.com';
  const supportEmail = CONSTANTS?.CONTACT_INFO?.EMAIL || `support@${domain}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Refund & Cancellation Policy - ${brandName}`,
    url: `${siteUrl}/refund-policy`,
    description: `Learn about ${brandName}'s 7-day money-back satisfaction guarantee, refund eligibility, and cancellation procedures.`,
    mainEntity: {
      '@type': 'MerchantReturnPolicy',
      name: `${brandName} Standard Refund Policy`,
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 7,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
      refundType: 'https://schema.org/FullRefund',
      customerRemedy: 'https://schema.org/Refund',
      returnPolicyCountry: 'US'
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      {/* Structured Data for Google E-E-A-T & Merchant Verification */}
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
            <RotateCcw className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
              Risk-Free Guarantee
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Refund & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">Cancellation</span> Policy
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            At {brandName}, we stand behind our high-speed routing infrastructure. Review our transparent 7-day money-back guarantee, eligibility terms, and cancellation procedures.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-6 uppercase tracking-widest font-semibold">
            <span>Effective Date: August 2026</span>
            <span>•</span>
            <span>Version: 3.2</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Highlight Guarantee Card */}
        <div className="bg-slate-900/80 border border-blue-500/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl relative overflow-hidden">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-1.5">
                7-Day Money-Back Guarantee
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We provide a risk-free 7-day satisfaction window on all initial {CONSTANTS?.FOCUS_KEYWORD || 'subscription'} packages. If our technical engineering desk cannot resolve an active streaming fault, channel authorization error, or playback disruption on your verified devices, you are entitled to a full 100% refund.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Clock className="w-6 h-6 text-sky-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">7-Day Window</h3>
            <p className="text-slate-400 text-xs">From time of payment confirmation</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <DollarSign className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">100% Full Refund</h3>
            <p className="text-slate-400 text-xs">Zero deduction or processing fees</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Zap className="w-6 h-6 text-sky-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-sm mb-1">Fast Turnaround</h3>
            <p className="text-slate-400 text-xs">Reviewed within 24 business hours</p>
          </div>
        </div>

        {/* Policy Terms */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              1. Technical Assessment First
            </h2>
            <p className="text-slate-400">
              Our priority is ensuring you receive stable, high-bitrate 4K playback. Many common streaming issues stem from local ISP DNS throttling, stale device cache, or suboptimal hardware acceleration configs in media players (such as TiviMate, IPTV Smarters, or VLC). Our support desk is available 24/7 to resolve these configuration bottlenecks before proceeding to cancellation.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              2. Refund Eligibility Criteria
            </h2>
            <p className="text-slate-400 mb-4">
              You are entitled to a full reimbursement if your claim satisfies any of the following criteria:
            </p>
            <ul className="space-y-3 pl-2 mb-6">
              {[
                "Your refund claim is initiated within 7 calendar days of your initial checkout date.",
                "Our technical specialists are unable to resolve verifiable node outages or Xtream API credential failures.",
                "Duplicate charges occurred due to an automated billing system or gateway communication error.",
                "The platform experienced prolonged, unscheduled backbone maintenance that prevented service access."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                  Strict 7-Day Window
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Claims submitted after 7 days from purchase are strictly non-refundable. Please ensure you configure and test your playlist parameters on your streaming devices upon activation.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              3. Non-Refundable Scenarios
            </h2>
            <p className="text-slate-400 mb-4">
              Reimbursements will not be issued under the following conditions:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Requests submitted after the 7-day guarantee window has expired.",
                "Issues caused by local network bandwidth limitations, unstable Wi-Fi connections, or local ISP bandwidth caps (< 15 Mbps).",
                "Buyer remorse, change of mind, or accidental purchase once login parameters have been issued and utilized.",
                "Account termination resulting from violations of our Terms of Service (e.g., unauthorized restreaming, multi-IP connection abuse).",
                "Third-party application crashes where our underlying server playlist operates normally on standard test players."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              4. Subscription Cancellation & Renewals
            </h2>
            <p className="text-slate-400 mb-3">
              All plans operate on a fixed, prepaid billing structure with no hidden fees:
            </p>
            <ul className="space-y-2 pl-2 text-sm text-slate-300 mb-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Prepaid plans do not automatically charge your card upon expiration unless recurring billing was explicitly selected.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>You can cancel renewal reminders at any time by contacting our support desk.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              5. Dispute & Chargeback Protocol
            </h2>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                  Contact Support Before Filing External Disputes
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  We resolve all eligible claims promptly. Initiating an unauthorized chargeback or payment gateway dispute without prior consultation with our help desk will result in permanent suspension of your user credentials and exclusion from future access.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              6. How to Submit a Refund Claim
            </h2>
            <p className="text-slate-400 mb-4">
              To submit a claim, email our billing department directly:
            </p>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-lg my-6">
              <Mail className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Direct Billing Support</p>
              <a 
                href={`mailto:${supportEmail}`} 
                className="text-sky-400 font-black text-lg sm:text-xl hover:text-white transition-colors"
              >
                {supportEmail}
              </a>
              <p className="text-slate-500 text-xs mt-2">Typical review response within 12–24 business hours</p>
            </div>

            <p className="text-slate-400 mb-2 font-medium">Please include the following details in your email:</p>
            <ul className="space-y-2 pl-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Your full name and Order ID / Invoice number.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Your registered account email and configured device type (Firestick, Smart TV, Android Box, etc.).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>A brief description of the technical malfunction encountered.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              7. Settlement Timelines
            </h2>
            <p className="text-slate-400">
              Once approved by our billing team, the reversal is initiated immediately. Depending on your payment provider or banking institution, funds will reflect in your account within <strong>3 to 7 business days</strong> (instant for eligible Crypto and PayPal transactions).
            </p>
          </div>

        </div>

        {/* Back to Home Link */}
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