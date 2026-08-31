'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { CONSTANTS, generateOrganizationSchema } from '@/lib/seo';
import { 
  PlayCircle, 
  ShieldCheck, 
  MonitorPlay, 
  Zap, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  Star, 
  MonitorSmartphone, 
  Tv2, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Headphones, 
  Award, 
  Lock, 
  ThumbsUp, 
  Users, 
  Server, 
  Film, 
  Trophy, 
  Calendar, 
  Database, 
  Tv, 
  Volume2, 
  Activity, 
  BarChart, 
  Medal, 
  Settings, 
  LifeBuoy,
  Shield,
  Radio,
  Check
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import SocialShareBar from './components/SocialShareBar';
import { blogPosts } from '@/lib/blog';

// SSR-compatible dynamic imports with stable layout wrappers
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-slate-900 rounded-xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-slate-900 rounded-2xl animate-pulse max-w-7xl mx-auto" />,
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300 overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Organization Schema for Google Rich Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-25 pb-24 md:pt-35 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt={`${CONSTANTS.BRAND_NAME} - Rated Among Best IPTV Service Providers in 2026`}
            fill
            priority
            fetchPriority="high"
            className="object-cover opacity-25"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#030712]/10 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-[#030712]/50 to-[#030712]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        </div>
        
        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
            <Award className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
              Top Rated IPTV Service Provider 2026
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white mb-6 drop-shadow-2xl">
            {CONSTANTS.FOCUS_KEYWORD.toUpperCase()} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              4K LIVE TV & SPORTS
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mb-8 font-medium drop-shadow-md leading-relaxed">
            Welcome to <strong className="text-white font-bold">{CONSTANTS.BRAND_NAME}</strong> - Ranked among the <strong>best IPTV service providers</strong> worldwide. Enjoy 25,000+ live HD/4K channels, 65,000+ VODs, zero buffering, and instant setup across USA, UK, Canada, and Europe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <Link 
              href="/pricing" 
              aria-label={`Get Started with ${CONSTANTS.BRAND_NAME} Subscription Plans`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-black text-lg hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.45)] border border-blue-400/30"
            >
              Get Started Now
            </Link>
            <Link 
              href="#channels" 
              aria-label="View Available Live IPTV Channels"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 font-bold text-lg hover:bg-slate-800 hover:border-blue-500 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5 text-sky-400" /> View Channels
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-xs text-sky-300 font-bold uppercase tracking-widest backdrop-blur-md bg-slate-900/60 px-8 py-4 rounded-3xl border border-slate-800 shadow-xl">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /> 4K Ultra HD</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sky-400" /> 99.9% Server SLA</span>
            <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-sky-400" /> Anti-Freeze 9.0</span>
            <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-sky-400" /> 24/7 Live Support</span>
          </div>
        </FadeIn>
      </section>

      {/* Partner Slider Section */}
      <div className="min-h-[128px]">
        <PartnerSlider />
      </div>

      {/* 3-Step Setup Section */}
      <section className="py-32 bg-gradient-to-b from-[#030712] via-[#0b1120] to-[#030712] border-y border-slate-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <span className="text-sky-400 font-bold uppercase tracking-widest text-xs mb-3">Quick Start Guide</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
                START STREAMING IN <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">3 EASY STEPS</span>
              </h2>
              <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
                Setting up your premium IPTV provider subscription takes less than 3 minutes. Instant activation credentials sent straight to your device.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[40%] left-[16%] right-[16%] h-1 border-t-2 border-dashed border-slate-700 -translate-y-1/2" />
            
            <FadeInItem className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-24 h-24 rounded-[2rem] bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-8 group-hover:border-blue-500 group-hover:-translate-y-2 transition-all duration-300 shadow-xl relative backdrop-blur-sm">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-lg">1</span>
                <CreditCard className="w-10 h-10 text-slate-500 group-hover:text-sky-400 transition-colors" />
              </div>
              <p className="text-2xl font-black text-white mb-4 tracking-wide uppercase">Select Your Plan</p>
              <p className="text-slate-400 text-base leading-relaxed max-w-xs">
                Pick an IPTV service plan that suits your streaming needs. All packages include complete live channels and updated VOD access.
              </p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group">
              <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-[3rem] group-hover:bg-blue-600/20 transition-all duration-500" />
              <div className="w-28 h-28 rounded-[2.5rem] bg-slate-900 border-2 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-lg">2</span>
                <Download className="w-12 h-12 text-sky-400 relative z-10" />
              </div>
              <p className="text-2xl font-black text-white mb-4 tracking-wide uppercase">Install on Any Device</p>
              <p className="text-slate-400 text-base leading-relaxed max-w-xs">
                Works seamlessly with Amazon Firestick, Smart TV, TiviMate, IPTV Smarters, Android, MAG, iOS, and PC.
              </p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-24 h-24 rounded-[2rem] bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-8 group-hover:border-blue-500 group-hover:-translate-y-2 transition-all duration-300 shadow-xl relative backdrop-blur-sm">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-lg">3</span>
                <Tv2 className="w-10 h-10 text-slate-500 group-hover:text-sky-400 transition-colors" />
              </div>
              <p className="text-2xl font-black text-white mb-4 tracking-wide uppercase">Watch Instantly</p>
              <p className="text-slate-400 text-base leading-relaxed max-w-xs">
                Log in with your M3U / Xtream codes and enjoy buffer-free live sports, PPV events, news, and 4K cinema.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-slate-900/60 rounded-[3rem] mx-4 sm:mx-8 mb-24 border border-slate-800 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-sky-400">{CONSTANTS.BRAND_NAME}</span> By The Numbers
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base">
              Real metrics proving why we rank as the community-favorite IPTV provider on Reddit and streaming forums.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <AnimatedCounter value={25} suffix="K+" />
              </span>
              <span className="text-xs text-sky-400 font-bold uppercase tracking-widest mt-2">Active Subscribers</span>
              <p className="text-slate-500 text-xs mt-1">USA, UK & Global Users</p>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-xs text-sky-400 font-bold uppercase tracking-widest mt-2">Live Channels</span>
              <p className="text-slate-500 text-xs mt-1">4K & FHD Streams</p>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <AnimatedCounter value={65} suffix="K+" />
              </span>
              <span className="text-xs text-sky-400 font-bold uppercase tracking-widest mt-2">VOD Movies & Series</span>
              <p className="text-slate-500 text-xs mt-1">Updated Weekly</p>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-sky-400 font-bold uppercase tracking-widest mt-2">Server Uptime</span>
              <p className="text-slate-500 text-xs mt-1">Anti-Buffer Guarantee</p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Media Grid Section */}
      <section id="channels" className="py-24 max-w-[100vw] overflow-hidden relative min-h-[400px]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-sky-400">PREMIUM</span> CONTENT LIBRARY
            </h2>
            <p className="text-slate-400 text-lg">
              Explore thousands of live sports events, news channels, PPV specials, and cinematic releases with {CONSTANTS.BRAND_NAME}.
            </p>
          </div>
        </FadeIn>
        <MovieSlider />
      </section>

      {/* Pricing Section */}
      <div className="min-h-[600px]">
        <PricingSection />
      </div>

      {/* Trust Badges */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <FadeInStagger className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Lock className="w-8 h-8 text-sky-400" />
              </div>
              <div>
                <span className="font-black text-white text-xl block">Secure Checkout</span>
                <p className="text-slate-400 text-sm">100% encrypted & private transactions</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-8 h-8 text-sky-400" />
              </div>
              <div>
                <span className="font-black text-white text-xl block">Money-Back Guarantee</span>
                <p className="text-slate-400 text-sm">Risk-free trial period</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-8 h-8 text-sky-400" />
              </div>
              <div>
                <span className="font-black text-white text-xl block">24/7 WhatsApp Support</span>
                <p className="text-slate-400 text-sm">Instant setup & technical help</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Medal className="w-8 h-8 text-sky-400" />
              </div>
              <div>
                <span className="font-black text-white text-xl block">Top-Tier Servers</span>
                <p className="text-slate-400 text-sm">Zero lag anti-freeze backbone</p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Global Server Map */}
      <div className="min-h-[400px]">
        <GlobalServerMap />
      </div>

      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Why We Are Considered The <span className="text-sky-400">Best IPTV Service Provider</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Discover why thousands switch from costly cable packages to our high-speed IPTV streaming network.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: Database, title: "Massive 20K+ Channels", desc: "Access high-definition local channels, international packages (USA, UK, Canada, Europe), news, and full VOD libraries." },
            { icon: Activity, title: "Anti-Freeze Technology", desc: "Proprietary server routing minimizes buffering and packet loss during peak sports and live events." },
            { icon: Server, title: "High Bandwidth Backbone", desc: "Dedicated 10Gbps European & North American servers ensuring smooth stream delivery with low ping." },
            { icon: Trophy, title: "PPV & Live Sports", desc: "Watch Champions League, Premier League, NFL, NBA, UFC, Formula 1, and Box Office events without extra fees." },
            { icon: Calendar, title: "Electronic Program Guide", desc: "Real-time TV guides (EPG) keep your channels organized so you never miss your favorite scheduled shows." },
            { icon: Users, title: "Multi-Device Compatibility", desc: "Stream seamlessly across Android, iOS, Windows, Mac, Firestick, Apple TV, and MAG setup boxes." }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={idx} className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-900 transition-all group shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                  <Icon className="w-7 h-7 text-sky-400" />
                </div>
                <p className="text-xl font-bold text-white mb-3">{item.title}</p>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Channel Categories */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Channel <span className="text-sky-400">Categories</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Comprehensive channel lineups covering top broadcast networks across USA, UK, Canada, and around the world.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { cat: "Sports Packages", channels: "ESPN, Sky Sports, TNT Sports, BeIN, DAZN, NFL RedZone, NBA League Pass", icon: Trophy },
            { cat: "Live 24/7 News", channels: "CNN, BBC News, Fox News, Sky News, CNBC, Bloomberg, Al Jazeera", icon: Globe },
            { cat: "Premium Entertainment", channels: "HBO, Showtime, Starz, Cinemax, FX, AMC, Comedy Central", icon: Tv },
            { cat: "Kids & Family", channels: "Nickelodeon, Disney Channel, Cartoon Network, Disney Junior, Boomerang", icon: Shield },
            { cat: "International Networks", channels: "USA, UK, Canada, France, Germany, Spain, Italy, Arabic, Turkey, India", icon: Globe },
            { cat: "Music Channels", channels: "MTV, VH1, Club MTV, Stingray Music, Trace Urban", icon: Volume2 },
            { cat: "24/7 Cinema & VOD", channels: "Paramount+, HBO Max, Netflix originals, Peacock & Apple TV series", icon: Film },
            { cat: "Major PPV Events", channels: "UFC Main Card, WWE, Top Rank Boxing, Matchroom, MMA", icon: Radio }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={idx} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-4 hover:border-blue-500/40 hover:bg-slate-900 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-sky-400" />
                  <span className="font-bold text-white text-sm sm:text-base block">{item.cat}</span>
                </div>
                <p className="text-slate-400 text-xs">{item.channels}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Feature Block 1 */}
      <section className="relative overflow-hidden bg-slate-950/80 py-20 sm:py-24 lg:py-32 border-y border-slate-850">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:space-y-32 lg:px-8">
          
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-3 shadow-2xl lg:rounded-[2.5rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt={`${CONSTANTS.BRAND_NAME} 4K IPTV streaming quality with movies and live channels`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//Z"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-blue-500/30 bg-slate-900/80 px-4 py-2 text-xs font-black uppercase tracking-widest text-sky-300 backdrop-blur-md">
                  Ultra HD 4K
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[320px]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shrink-0 shadow-lg shadow-blue-600/40">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-white">4K UHD Quality</p>
                      <p className="text-xs font-medium text-slate-400">
                        High bitrate 60FPS streams for live television and cinema.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FadeIn className="order-2">
              <span className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-sky-400">
                High-Performance Servers
              </span>
              <p className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Experience Reliable <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Buffer-Free IPTV</span>
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                With {CONSTANTS.BRAND_NAME}, you get an advanced IPTV solution built for high-speed performance. Stream your favorite sports matches, movies, and worldwide broadcast channels without annoying freezes.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {['4K, FHD & 60FPS streams', 'Anti-buffering server routing', 'Over 65,000 VOD selections', 'Firestick, TiviMate & Smart TV ready'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-200">
                    <Check className="w-4 h-4 text-sky-400 shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <Link 
                href="/pricing" 
                aria-label="Start Your IPTV Trial"
                className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] transition hover:scale-105 hover:bg-blue-500"
              >
                Start 4K Streaming Trial
              </Link>
            </FadeIn>
          </div>

          {/* Feature Block 2 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-sky-400">
                Live Sports & PPV Pass
              </span>
              <p className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Never Miss The <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Biggest Sports Moments</span>
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                Watch live soccer, NBA, NFL, UFC Fight Nights, Boxing PPVs, and Formula 1 Grand Prix. Dedicated backup channels guarantee you never miss a decisive play.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {['Live Premier League & Champions League', 'UFC, WWE & Boxing PPVs included', 'Dedicated 60 FPS sports channels', 'Low-latency server connections'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-200">
                    <Check className="w-4 h-4 text-sky-400 shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <Link 
                href="/pricing" 
                aria-label="Explore Sports IPTV Packages"
                className="mt-8 inline-flex rounded-full border-2 border-blue-500 bg-blue-600/10 px-8 py-4 text-sm font-black uppercase tracking-widest text-sky-300 transition hover:scale-105 hover:bg-blue-600 hover:text-white"
              >
                View Sports Packages
              </Link>
            </FadeIn>
            <div className="relative order-1 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-3 shadow-2xl lg:order-2 lg:rounded-[2.5rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt={`${CONSTANTS.BRAND_NAME} live sports IPTV streaming and PPV events`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//Z"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-red-500/40 bg-red-600/20 px-4 py-2 text-xs font-black uppercase tracking-widest text-red-300 backdrop-blur-md">
                  Live PPV Included
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/50">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-white sm:text-2xl">Live Sports Pass</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-sky-400">All Major Sports Networks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-blue-600/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
              <BarChart className="w-4 h-4 text-sky-400" />
              <span className="text-sky-400 font-bold text-xs uppercase tracking-wider">Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              {CONSTANTS.BRAND_NAME} vs Traditional Cable
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Compare why thousands of users choose our IPTV service over expensive cable packages.
            </p>
          </FadeIn>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-slate-800 bg-slate-950/40"><span className="text-xl font-bold text-white block">Feature</span></div>
                <div className="p-6 border-b border-r border-slate-800 bg-blue-600/10"><span className="text-xl font-bold text-sky-400 block">{CONSTANTS.BRAND_NAME}</span></div>
                <div className="p-6 border-b border-slate-800 bg-slate-950/40"><span className="text-xl font-bold text-slate-500 block">Traditional Cable</span></div>
                
                {[
                  { feature: "Monthly Cost", us: "From €6.67 / month", cable: "€80 - €150 / month", highlight: true },
                  { feature: "Contract Terms", us: "No Contracts - Cancel Anytime", cable: "12 - 24 Month Lock-in", usIcon: true },
                  { feature: "Live Channels", us: "20,000+ Worldwide Channels", cable: "80 - 200 Limited Channels", highlight: true },
                  { feature: "VOD & Movie Library", us: "65,000+ Titles Updated Daily", cable: "Extra Pay-Per-View Fees" },
                  { feature: "4K & 60FPS Streaming", us: "Yes, Full HD & 4K Ready", cable: "Rare or Extra Cost", usIcon: true },
                  { feature: "Multi-Device Support", us: "Firestick, Smart TV, iOS, Android, PC", cable: "Extra Box Rental Fees", usIcon: true },
                  { feature: "PPV Sports Events", us: "All Major PPVs Included", cable: "€50 - €80 Per Event", usIcon: true },
                  { feature: "Anti-Freeze Server", us: "Anti-Freeze 9.0 SLA Guaranteed", cable: "Frequent Weather Outages", highlight: true }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-slate-800/60 ${idx % 2 === 0 ? 'bg-slate-950/30' : ''}`}>
                      <span className="text-slate-300 font-medium">{row.feature}</span>
                    </div>
                    <div className={`p-6 border-r border-slate-800/60 ${idx % 2 === 0 ? 'bg-blue-950/20' : ''}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-sky-400" />
                          <span className="text-white font-semibold">{row.us}</span>
                        </div>
                      ) : (
                        <span className={row.highlight ? 'text-sky-300 font-bold' : 'text-slate-200'}>{row.us}</span>
                      )}
                    </div>
                    <div className={`p-6 ${idx % 2 === 0 ? 'bg-slate-950/30' : ''}`}><span className="text-slate-500">{row.cable}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {[
              { feature: "Monthly Cost", us: "From €6.67/mo", cable: "€80-€150/mo" },
              { feature: "Contract Terms", us: "No Contract", cable: "1-2 Year Lock" },
              { feature: "Live Channels", us: "20,000+", cable: "100-250" },
              { feature: "VOD Library", us: "65,000+ VODs", cable: "Limited" },
              { feature: "4K Streaming", us: "Included", cable: "Extra fees" },
              { feature: "Multi-Device", us: "All Devices", cable: "Hardware lock" },
              { feature: "Sports PPV", us: "100% Free", cable: "Extra €60+" }
            ].map((row, idx) => (
              <div key={idx} className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-lg">
                <div className="text-center mb-4"><span className="text-slate-400 text-xs uppercase tracking-wider">{row.feature}</span></div>
                <div className="flex justify-between items-center">
                  <div className="text-left"><div className="text-sky-300 font-bold text-lg">{row.us}</div><div className="text-sky-400/60 text-xs">{CONSTANTS.BRAND_NAME}</div></div>
                  <div className="text-right"><div className="text-slate-500 line-through text-lg">{row.cable}</div><div className="text-slate-600 text-xs">Cable</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialShareBar/>

      {/* Testimonials Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Trusted by <span className="text-sky-400">25,000+</span> Worldwide Customers
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See what verified subscribers across Reddit and streaming communities say about {CONSTANTS.BRAND_NAME}.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Mark D.", rating: 5, text: `Found ${CONSTANTS.BRAND_NAME} on a Reddit IPTV recommendation thread. The 4K sports channels load instantly with zero buffering on my Firestick.`, role: "Reddit User (USA)" },
            { name: "David L.", rating: 5, text: `Cancelled my £95/month UK TV package. Everything from Premier League to PPV boxing runs cleanly in Full HD without any ISP throttling.`, role: "UK Subscriber" },
            { name: "Alex P.", rating: 5, text: `The channel list and VOD selection is top tier. Customer support assisted me over WhatsApp in under 5 minutes during initial setup.`, role: "Canada Subscriber" }
          ].map((testimonial, idx) => (
            <FadeInItem key={idx} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sky-400 text-sky-400" />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-slate-800 pt-4">
                <span className="font-bold text-white block">{testimonial.name}</span>
                <p className="text-sky-400 text-sm font-medium">{testimonial.role}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Device Support */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full relative">
        <FadeIn className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Works On All Your Devices</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-16">
            Compatible with TiviMate, IPTV Smarters, XCIPTV, Smart IPTV, and all major media player applications.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {[
            { tag: "Smart TVs", icon: Tv2 },
            { tag: "Android TV / Box", icon: Cpu },
            { tag: "Apple TV & iOS", icon: MonitorSmartphone },
            { tag: "Amazon Firestick", icon: Zap },
            { tag: "Windows / Mac PC", icon: MonitorPlay },
            { tag: "MAG & Formuler", icon: ShieldCheck },
          ].map((device) => {
            const Icon = device.icon;
            return (
              <FadeInItem key={device.tag} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:border-blue-500 hover:bg-slate-900 hover:-translate-y-2 transition-all cursor-pointer group shadow-lg">
                <Icon className="w-12 h-12 text-slate-500 group-hover:text-sky-400 group-hover:scale-110 transition-all" />
                <span className="text-sm font-bold text-slate-300 group-hover:text-white text-center">{device.tag}</span>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* FAQ Wrapper */}
      <div className="min-h-[400px]">
        <FAQ />
      </div>

      {/* Blog Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Latest <span className="text-sky-400">News & IPTV Guides</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Tutorials, setup guides, and updates on the {CONSTANTS.FOCUS_KEYWORD} market.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/blog" 
              aria-label="Browse All Articles"
              className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 font-bold hover:bg-slate-800 hover:border-blue-500 transition-colors flex items-center gap-2 group"
            >
              <span>View All Posts</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-400" />
            </Link>
          </div>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.slice(0, 3).map((post) => {
            const primaryKeyword = post.keywords?.[0] || 'IPTV';

            return (
              <FadeInItem key={post.id} className="group flex flex-col">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-slate-900 border border-slate-800 shadow-xl group-hover:border-blue-500/50 transition-colors duration-300">
                  <Image 
                    src={post.image} 
                    alt={`Illustration for ${primaryKeyword}`} 
                    width={800} 
                    height={450} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg inline-block">
                      {post.author}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors tracking-tight line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed flex-grow">
                  {post.description || post.excerpt}
                </p>
                
                <div className="pt-2 mt-auto">
                  <Link 
                    href={`/blog/${post.slug}`} 
                    aria-label={`Read ${primaryKeyword} Guide`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 uppercase tracking-widest group-hover:gap-3 transition-all"
                  >
                    <span>Read {primaryKeyword} Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15),_transparent_45%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/30 bg-slate-950 shadow-[0_0_80px_rgba(37,99,235,0.2)] lg:rounded-[3rem]">
            <Image
              src="/img/bg-2.webp"
              alt={`${CONSTANTS.BRAND_NAME} IPTV Service`}
              width={1400}
              height={600}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//Z"
            />
            <div className="absolute inset-0 bg-[#030712]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-[#030712]/95" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40" />
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[110px]" />

            <FadeIn className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-2 backdrop-blur-md">
                <svg className="h-4 w-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L13 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7 7L10 2Z" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-sky-300">Instant Activation</span>
              </div>
              <h2 className="mx-auto max-w-5xl text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Ready For The <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Best IPTV Experience?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                Unlock 20,000+ live TV channels, premium sports networks, and unlimited movies on all your devices with {CONSTANTS.BRAND_NAME}.
              </p>
              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Channels'],
                  ['4K', 'Ultra HD Quality'],
                  ['99.9%', 'Server Uptime'],
                  ['24/7', 'WhatsApp Support'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur-md shadow-lg">
                    <div className="text-2xl font-black text-sky-400 sm:text-3xl">{value}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link 
                  href="/pricing" 
                  aria-label={`View All ${CONSTANTS.BRAND_NAME} Plans`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-500 sm:w-auto border border-blue-400/30"
                >
                  Choose Subscription Plan
                </Link>
                <Link 
                  href="/setup" 
                  aria-label="Device Setup Guide"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-bold text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:border-blue-500 sm:w-auto"
                >
                  <Settings className="h-5 w-5 text-sky-400" /> Device Setup Guide
                </Link>
              </div>
              <p className="mt-8 text-xs font-medium text-slate-400">Instant M3U & Xtream Delivery • Fast WhatsApp Support • Zero Hidden Fees</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}