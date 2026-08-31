import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Mail, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata = generateSEOMetadata('DMCA Copyright Policy');

export default function DMCAPage() {
  const dmcaEmail = `dmca@${CONSTANTS.DOMAIN}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb08_1px,transparent_1px),linear-gradient(to_bottom,#2563eb08_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
              Intellectual Property Compliance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            DMCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">Policy</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {CONSTANTS.BRAND_NAME} respects intellectual property rights and adheres strictly to the Digital Millennium Copyright Act (17 U.S.C. § 512).
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core Notice Box */}
        <div className="bg-slate-900/80 border border-blue-500/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl relative overflow-hidden">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-1.5">
                Hosting & Transmission Disclaimer
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong> does not host, upload, store, archive, or broadcast any video files, media streams, or digital content directly on our servers. Our platform operates strictly as an index and streaming directory referencing media links publicly distributed on third-party networks.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text & Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              1. Commitment to Copyright Protection
            </h2>
            <p className="text-slate-400">
              {CONSTANTS.BRAND_NAME} respects the intellectual property rights of content creators, broadcasting organizations, and media producers. It is our strict policy to respond promptly to clear, formal notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (DMCA).
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              2. Third-Party Content & External Feeds
            </h2>
            <p className="text-slate-400">
              All channel streams, feeds, and video playlists referenced through our {CONSTANTS.FOCUS_KEYWORD} directory are provided by independent third-party server networks. We do not exercise editorial control over, nor do we host, modify, or retain media streams published by outside servers.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              3. Filing a DMCA Takedown Notice
            </h2>
            <p className="text-slate-400 mb-4">
              If you are a copyright owner or an authorized representative acting on behalf of an exclusive right, you may request the removal of any indexing link by submitting a formal DMCA notice to our designated copyright contact:
            </p>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-6 text-center shadow-lg">
              <Mail className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Designated DMCA Agent Email</p>
              <a 
                href={`mailto:${dmcaEmail}`} 
                className="text-sky-400 font-black text-lg sm:text-xl hover:text-white transition-colors"
              >
                {dmcaEmail}
              </a>
            </div>

            <p className="text-slate-400 mb-3">
              To be considered valid under 17 U.S.C. § 512(c)(3), your notice MUST include:
            </p>

            <ul className="space-y-3 pl-2">
              {[
                "A physical or electronic signature of a person authorized to act on behalf of the copyright owner.",
                "Precise identification of the copyrighted work claimed to have been infringed.",
                "Specific identification of the link, URL, or indexed feed claimed to be infringing so that we may locate and disable it.",
                "Your full legal name, company name, physical mailing address, telephone number, and contact email.",
                "A statement affirming your good-faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.",
                "A statement, made under penalty of perjury, that the information in the notification is accurate and that you are authorized to enforce the rights claimed."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Warning */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
            <div className="flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-red-300 font-bold text-xs uppercase tracking-wider mb-1">
                  17 U.S.C. § 512(f) Misrepresentation Warning
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Any person who knowingly materially misrepresents that digital material or activity is infringing may be subjected to statutory liability for damages, including court costs and legal fees incurred by the alleged infringer or service provider.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              4. Counter-Notification Procedure
            </h2>
            <p className="text-slate-400 mb-3">
              If an indexing link or content reference has been removed pursuant to a DMCA notice and you believe this occurred due to mistake or misidentification, you may submit a written counter-notice to our agent containing:
            </p>
            <ul className="space-y-2.5 pl-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Your physical or electronic signature.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Identification of the material that was disabled and its prior location.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>A statement under penalty of perjury asserting your good-faith belief of error.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>Your name, address, telephone number, and consent to local jurisdiction.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              5. Repeat Infringer Policy
            </h2>
            <p className="text-slate-400">
              In accordance with relevant statutory guidelines, {CONSTANTS.BRAND_NAME} maintains a policy to terminate access or directory indexing for users, providers, or affiliates who are determined to be repeat infringers.
            </p>
          </div>

        </div>

        {/* Back Link */}
        <div className="mt-14 pt-8 border-t border-slate-800 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}