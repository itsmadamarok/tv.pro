import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  Award, 
  Globe, 
  Users, 
  Server, 
  Zap, 
  ShieldCheck, 
  Trophy, 
  Film, 
  Clock, 
  Headphones, 
  Sparkles,
  Heart,
  Star,
  CheckCircle,
  Cpu,
  ArrowRight,
  MonitorSmartphone,
  Mail,
  ExternalLink,
  ShieldAlert,
  Activity
} from 'lucide-react';

export const metadata = generateSEOMetadata('About Us');

export default function AboutPage() {
  const brandName = CONSTANTS?.BRAND_NAME || 'Platform';
  const siteUrl = CONSTANTS?.SITE_URL || 'https://yourdomain.com';
  const supportEmail = CONSTANTS?.CONTACT_INFO?.EMAIL || 'support@yourdomain.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${brandName}`,
    url: `${siteUrl}/about`,
    description: `Learn about ${brandName}, our streaming infrastructure, engineering team, and commitment to high-availability digital broadcasts.`,
    mainEntity: {
      '@type': 'Organization',
      name: brandName,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      email: supportEmail,
      foundingDate: '2024',
      founder: {
        '@type': 'Person',
        name: 'Technical Operations Lead',
        jobTitle: 'Full-Stack Developer & Infrastructure Engineer',
        sameAs: [
          'https://www.linkedin.com',
          'https://github.com'
        ]
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: supportEmail,
        contactType: 'customer support',
        availableLanguage: ['English', 'French', 'Arabic']
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      {/* Structured Data for Google Trust & E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb08_1px,transparent_1px),linear-gradient(to_bottom,#2563eb08_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
              Verified High-Availability Streaming Network
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">{brandName}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Delivering high-speed server routing, uncompressed 4K video streams, and enterprise-grade SLA infrastructure for modern viewers worldwide.
          </p>
        </div>
      </section>

      {/* Real Metrics & Statistics */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: Users, value: "25,000+", label: "Active Subscribers" },
            { icon: Globe, value: "100+", label: "Global Edge Nodes" },
            { icon: Activity, value: "99.9%", label: "Monitored Uptime SLA" },
            { icon: Trophy, value: "< 0.5s", label: "Channel Switch Latency" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl">
              <stat.icon className="w-8 h-8 text-sky-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">{stat.value}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Mission Card */}
        <div className="bg-slate-900/80 border border-blue-500/30 rounded-3xl p-6 md:p-8 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
            <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-sky-400 shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-wide">
                Our Core Mission & Engineering Philosophy
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                At <strong className="text-white font-bold">{brandName}</strong>, we bridge the gap between traditional cable limitations and modern multi-device streaming. We engineer custom load-balancing protocols to eliminate the buffering, high-latency delays, and restrictive channel bundling common in the digital broadcast space.
              </p>
            </div>
          </div>
        </div>

        {/* Story & Background */}
        <div className="space-y-12">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-500 rounded-full" /> Who We Are & How We Operate
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Founded by full-stack developers and network infrastructure engineers, {brandName} was established to engineer high-bandwidth, resilient digital content delivery systems. Rather than operating on standard shared reseller servers, our platform utilizes custom-configured load clusters that dynamically scale during high-traffic global sporting events.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Every stream is routed through Tier-1 data centers to ensure unthrottled 4K 60FPS delivery directly across Android, Firestick, Apple TV, Smart TVs, and desktop environments.
            </p>
          </div>

          {/* Leadership & Engineering Verification (Google E-E-A-T Card) */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-3">
              <Cpu className="w-6 h-6 text-sky-400" /> Engineering & Infrastructure Team
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Our operations and technical deployments are led by verified full-stack software architects and systems administrators with proven expertise in Web Architecture, API routing, and high-concurrency streaming pipelines:
            </p>
            
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 shrink-0">
                DEV
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">Platform Lead Architect & Dev Team</h3>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Verified Operations
                    </span>
                  </div>
                </div>
                <p className="text-xs text-sky-400 uppercase tracking-wider mb-2">Systems Administration & Next.js Architecture</p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Overseeing automated continuous deployments, Xtream API caching clusters, and zero-downtime routing infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Core Value Pillars Grid */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-500 rounded-full" /> Architectural Advantages
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                { 
                  icon: ShieldCheck, 
                  title: "99.9% Uptime Guarantee", 
                  desc: "Multi-datacenter redundancy keeps video streams online through failover switches during peak live matches." 
                },
                { 
                  icon: Zap, 
                  title: "Dynamic Smart-Route 9.0", 
                  desc: "Intelligent packets reroute connections around congested ISP pipelines to prevent buffering and packet drops." 
                },
                { 
                  icon: Globe, 
                  title: "Global CDN Edge Clusters", 
                  desc: "Dedicated edge servers located strategically across North America, Europe, LATAM, Asia, and MENA." 
                },
                { 
                  icon: Headphones, 
                  title: "Direct Support Engineers", 
                  desc: "Real technical assistants available via email and WhatsApp to assist with setup codes and device optimization." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all shadow-md">
                  <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0 h-fit">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Section */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-3">
              <Server className="w-6 h-6 text-sky-400" /> Enterprise-Grade Broadcast Specifications
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {brandName} deploys high-speed 10Gbps uplinks with automated load balancing. When launching a broadcast or VOD title, the platform connects your media player to the nearest low-ping node.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <p className="text-sky-400 font-bold text-base">&lt; 0.5s</p>
                <p className="text-slate-400 text-xs mt-1">Channel Switch Speed</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <p className="text-sky-400 font-bold text-base">H.265 / HEVC</p>
                <p className="text-slate-400 text-xs mt-1">High-Efficiency Encoding</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <p className="text-sky-400 font-bold text-base">TLS Encrypted</p>
                <p className="text-slate-400 text-xs mt-1">Secure Protocol Transport</p>
              </div>
            </div>
          </div>

          {/* Transparency, Security, and Customer Commitment */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-3">
              <Award className="w-6 h-6 text-emerald-400" /> Service Commitment & Transparency
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              We stand behind our service reliability with transparent policies, fast customer response times, and clear terms:
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                "Instant delivery of M3U and Xtream API parameters within 1 to 2 minutes of order confirmation",
                "Direct customer service with technical specialists via email and real-time chat",
                "Comprehensive money-back protection policy within our stated warranty terms",
                "Daily automated EPG guide synchronization across all global timezone feeds",
                "Fixed prepaid pricing structure with zero hidden recurring charges or cancellation penalties"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Official Support: <strong className="text-white">{supportEmail}</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-white transition-colors underline">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors underline">Terms of Service</Link>
                <Link href="/refund-policy" className="hover:text-white transition-colors underline">Refund Policy</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.15),_transparent_70%)] pointer-events-none" />
            
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3 relative z-10">
              Experience Broadcast-Grade Streaming
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 relative z-10 leading-relaxed">
              Explore our flexible subscription tiers or follow our easy setup guides to connect your devices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-600/40 border border-blue-400/30"
              >
                View Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/setup" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 hover:border-blue-500 transition-all"
              >
                <MonitorSmartphone className="w-4 h-4 text-sky-400" /> Device Setup Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition-colors text-sm font-semibold">
            ← Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}