'use client';

import { useState } from 'react';
import Image from 'next/image';
import PricingSection from '../components/PricingSection';
import SocialShareBar from '../components/SocialShareBar';
import { 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  CreditCard, 
  Award, 
  Globe, 
  Server, 
  Trophy, 
  Tv, 
  Film, 
  MonitorPlay, 
  Wifi, 
  Calendar, 
  Lock, 
  ThumbsUp, 
  Headphones, 
  Sparkles, 
  LifeBuoy 
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';

// FAQ Item Component (Semantic Button + Region)
function FAQItem({ question, answer, id }: { question: string; answer: string; id: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`w-full bg-slate-900/80 border ${isOpen ? 'border-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.2)]' : 'border-slate-800 hover:border-slate-700'} rounded-2xl p-6 transition-all duration-300`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center gap-4 group focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
      >
        <p className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-sky-300' : 'text-white group-hover:text-sky-300'} flex items-center gap-3`}>
          <span className={`${isOpen ? 'text-sky-400' : 'text-slate-500'} font-black text-2xl`}>Q.</span> 
          {question}
        </p>
        <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-400' : 'text-slate-500 group-hover:text-sky-400'}`} />
      </button>

      <div 
        id={`faq-answer-${id}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
      >
        <p className="text-slate-300 leading-relaxed pl-10 md:pl-12 border-l-2 border-blue-500 ml-2 py-2 text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 flex flex-col">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt={`${CONSTANTS.FOCUS_KEYWORD} premium subscription pricing`}
            fill
            priority
            className="w-full h-full object-cover opacity-20"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/40" />
        </div>
        
        {/* Subtle Cyber Grid Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #2563eb 1px, transparent 1px),
              linear-gradient(to bottom, #2563eb 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 pt-32 pb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">Best Value Plans 2026</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
              {CONSTANTS.FOCUS_KEYWORD} Pricing Plans{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                Best Deals
              </span>
            </h1>

            {/* Keyword Matched Intro Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              Explore our verified <strong>{CONSTANTS.FOCUS_KEYWORD} pricing plans</strong> and get the <strong>best deals</strong> for ultra HD 4K live TV, sports, and movies with fast instant activation.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-400 text-xs uppercase tracking-widest font-semibold">
              <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-sky-400" /> Cancel Anytime</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /> Instant Activation</span>
              <span className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-sky-400" /> 7-Day Money-Back</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Pricing Cards Component */}
      <div id="pricing-section" className="-mt-16 w-full relative z-20">
        <PricingSection />
      </div>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Everything Included In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Every Plan
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            All {CONSTANTS.BRAND_NAME} subscriptions come standard with these enterprise features
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Tv, title: "25,000+ Live Channels", desc: `Sports, news, entertainment, and international channels from 100+ countries with ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Film, title: "65,000+ VOD Library", desc: `Movies, TV series, and documentaries updated daily on ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: MonitorPlay, title: "4K Ultra HD Quality", desc: `Crystal clear streaming on compatible channels and devices with ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Wifi, title: "Anti-Freeze Technology", desc: `Buffer-free playback with advanced Anti-Freeze 9.0 routing from ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Calendar, title: "Full EPG Guide", desc: `7-day electronic program guide for all major live channels.` },
            { icon: Trophy, title: "PPV Events Included", desc: `All major sports PPV events at no extra cost with ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Globe, title: "Global CDN Nodes", desc: `150+ dedicated servers worldwide for low-latency streaming.` },
            { icon: Server, title: "99.9% Server SLA", desc: `Enterprise-grade infrastructure with load-balanced caching clusters.` },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeInItem key={idx} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/20 text-sky-400 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-950/60 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Compare{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                Subscription Tiers
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Find the perfect plan for your personal entertainment and multi-device needs
            </p>
          </FadeIn>

          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/80 p-2 shadow-2xl backdrop-blur-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left p-4 sm:p-5 text-white font-bold text-sm sm:text-base">Feature Spec</th>
                  <th className="text-center p-4 sm:p-5 text-sky-400 font-bold text-sm sm:text-base">3 Months</th>
                  <th className="text-center p-4 sm:p-5 text-sky-300 font-bold text-sm sm:text-base bg-blue-600/10 border-x border-blue-500/20">12 Months (Best Value)</th>
                  <th className="text-center p-4 sm:p-5 text-sky-400 font-bold text-sm sm:text-base">6 Months</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {[
                  { feature: "Live Channels", basic: "25,000+", pro: "25,000+ (VIP Priority)", premium: "25,000+" },
                  { feature: "VOD Library", basic: "65,000+", pro: "65,000+ (Daily Updates)", premium: "65,000+" },
                  { feature: "4K & FHD Quality", basic: "Yes", pro: "Yes (Uncompressed)", premium: "Yes" },
                  { feature: "Live Sports & PPV", basic: "Included", pro: "All PPV Channels Included", premium: "Included" },
                  { feature: "Electronic Program Guide", basic: "Standard", pro: "Full 7-Day Auto EPG", premium: "Full EPG" },
                  { feature: "Anti-Freeze Technology", basic: "Version 9.0", pro: "VIP Dynamic Route SLA", premium: "Version 9.0" },
                  { feature: "VPN & Proxy Support", basic: "Supported", pro: "Fully Supported", premium: "Supported" },
                  { feature: "Simultaneous Streams", basic: "1 Connection", pro: "Up to 3 Devices", premium: "2 Devices" },
                  { feature: "Support SLA", basic: "24/7 Standard", pro: "24/7 Priority VIP Chat", premium: "24/7 Priority" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="p-4 sm:p-5 text-slate-200 font-medium">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-center text-slate-400">{row.basic}</td>
                    <td className="p-4 sm:p-5 text-center text-sky-300 font-semibold bg-blue-600/5 border-x border-blue-500/20">{row.pro}</td>
                    <td className="p-4 sm:p-5 text-center text-slate-400">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              {CONSTANTS.BRAND_NAME}
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by active subscribers across 100+ countries
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 text-sky-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Secure Payments</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Encrypted checkout via Visa, Mastercard, PayPal, and Cryptocurrency.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 text-sky-400">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Instant Setup</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Receive M3U and Xtream codes in your email and WhatsApp in 1-2 minutes.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 text-sky-400">
              <CreditCard className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Money Back</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Risk-free 7-day money-back satisfaction guarantee on all plans.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 text-sky-400">
              <Headphones className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">24/7 VIP Support</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Direct WhatsApp and ticket assistance from real streaming engineers.</p>
          </FadeInItem>
        </FadeInStagger>
      </section>

      {/* Social Sharing Bar */}
      <div className="max-w-4xl mx-auto px-4 w-full mb-12">
        <SocialShareBar />
      </div>

      {/* Money Back Guarantee Banner */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/30 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.12),_transparent_70%)] pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-4 relative z-10">
            <Award className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">Risk-Free Guarantee</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 relative z-10 uppercase tracking-tight">
            7-Day Money-Back Guarantee
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed relative z-10">
            Test {CONSTANTS.BRAND_NAME} risk-free for 7 days. If you experience technical errors that our team cannot resolve, receive a full refund with zero hassle.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <FadeIn className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-base">Everything you need to know about our packages and billing.</p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          <FAQItem 
            id={1}
            question={`What payment methods does ${CONSTANTS.BRAND_NAME} accept?`} 
            answer={`${CONSTANTS.BRAND_NAME} accepts Visa, Mastercard, American Express, PayPal, and major Cryptocurrencies through secure, SSL-encrypted checkout gateways.`}
          />
          <FAQItem 
            id={2}
            question="Can I upgrade or add extra device connections later?" 
            answer="Yes. You can upgrade your plan or add simultaneous device connections at any time by contacting our 24/7 technical support team."
          />
          <FAQItem 
            id={3}
            question="Are there any contracts or recurring hidden fees?" 
            answer="No. All subscriptions are 100% prepaid. We do not lock you into automatic recurring charges or unexpected cancellation fees."
          />
          <FAQItem 
            id={4}
            question="What happens when my subscription term expires?" 
            answer="You will receive renewal reminders before your period ends. You can choose to renew your current line or allow it to expire naturally without penalty."
          />
          <FAQItem 
            id={5}
            question="How quickly do I get my activation credentials?" 
            answer="Line activation is automatic. Your M3U link and Xtream Codes API details are delivered via email and WhatsApp within 1 to 2 minutes after order completion."
          />
        </FadeInStagger>
      </div>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#020617] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Ready to Start Streaming with {CONSTANTS.FOCUS_KEYWORD}?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of cord-cutters streaming live sports, 4K movies, and premium channels today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#pricing-section"
                aria-label="Select Your Subscription Plan"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-600/40 border border-blue-400/30"
              >
                Choose Subscription Plan
              </Link>
              <Link
                href="/setup"
                aria-label="Device Setup Tutorial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 hover:border-blue-500 transition-all"
              >
                <LifeBuoy className="w-4 h-4 text-sky-400" />
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-500 text-xs uppercase tracking-widest font-semibold">
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-sky-400" /> Instant Activation</span>
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-sky-400" /> Secure Checkout</span>
              <span className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 text-sky-400" /> Major Payment Methods</span>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}