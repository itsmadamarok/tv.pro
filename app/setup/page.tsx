'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import { 
  MonitorSmartphone, Tv, Apple, Laptop, Sparkles, Lock, Zap,
  CheckCircle2, PlayCircle, ArrowRight, MessageCircle, Clock, Headphones, 
  Shield, Star, UserPlus, ShoppingBag, Download, Mail, Cpu, Search,
  Smartphone as SmartphoneIcon, AlertCircle, X
} from 'lucide-react';
import { FadeIn } from '../components/AnimatedSection';
import Link from 'next/link';
import FAQ from '../components/FAQ';
import SocialShareBar from '../components/SocialShareBar';

// Device Navigation Tabs
const devices = [
  { id: 'firestick', name: 'Firestick / Android', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TVs', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple Devices', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

const stepData = {
  firestick: {
    title: 'Firestick & Android Box Setup',
    icon: MonitorSmartphone,
    steps: [
      { 
        number: 1, 
        title: 'Activate Your Credentials', 
        description: 'Choose your preferred subscription plan from our pricing page and complete secure checkout. Your unique login credentials (Username, Password, and Server Portal URL) will arrive in your email inbox within 1 to 2 minutes.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Check your spam or promotions folder if the email does not appear immediately. Save your credentials for future device setups.' 
      },
      { 
        number: 2, 
        title: 'Enable Unknown Sources', 
        description: 'From your Firestick home screen, go to Settings (gear icon) > My Fire TV > Developer Options. Turn ON "Install Unknown Apps" or "Apps from Unknown Sources". (If Developer Options is hidden, go to About and click your device name 7 times).', 
        duration: '2 min', 
        icon: Shield, 
        tip: 'This standard setting allows your device to install verified third-party media players like TiviMate or IPTV Smarters.' 
      },
      { 
        number: 3, 
        title: 'Install the Downloader App', 
        description: 'Navigate to the Search bar on your Fire TV home screen and type "Downloader". Select the orange Downloader icon by AFTVnews, click Get/Download, and grant storage permissions upon launch.', 
        duration: '2 min', 
        icon: Download, 
        tip: 'Downloader is the official trusted utility used by millions to install streaming media players.' 
      },
      { 
        number: 4, 
        title: 'Enter Installation Code', 
        description: 'Launch Downloader, enter your player code into the URL field, and click Go. The media player APK will download and prompt you to click Install.', 
        duration: '2 min', 
        icon: SmartphoneIcon, 
        tip: 'Ensure your WiFi or Ethernet connection is active and stable before starting the download.' 
      },
      { 
        number: 5, 
        title: 'Log in with Xtream Codes API', 
        description: 'Open the installed streaming application, choose "Login with Xtream Codes API", and input your Server URL, Username, and Password as delivered in your confirmation email.', 
        duration: '2 min', 
        icon: Mail, 
        tip: 'Credentials are case-sensitive. Avoid leading or trailing spaces when entering details.' 
      },
      { 
        number: 6, 
        title: 'Start 4K Streaming!', 
        description: 'Configuration complete! Instant access to 25,000+ live channels, sports PPV events, and 65,000+ VOD movies is now unlocked on your device.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Use the built-in EPG guide to organize your favorite live sports and movie channels.' 
      },
    ]
  },
  smarttv: {
    title: 'Smart TV Setup (Samsung, LG, Sony)',
    icon: Tv,
    steps: [
      { 
        number: 1, 
        title: 'Activate Your Subscription', 
        description: 'Sign up on our pricing page and receive your instant M3U playlist link and Xtream API credentials via email.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Keep your login details ready to input on your Smart TV screen.' 
      },
      { 
        number: 2, 
        title: 'Open Your TV App Store', 
        description: 'Navigate to the LG Content Store, Samsung Smart Hub, or Google Play Store directly from your TV menu.', 
        duration: '1 min', 
        icon: ShoppingBag, 
        tip: 'Ensure your Smart TV firmware is updated to the latest available software version.' 
      },
      { 
        number: 3, 
        title: 'Search for a Compatible Player', 
        description: 'Search for "IPTV Smarters Pro", "IBO Player", or "Smart IPTV" in the search box.', 
        duration: '2 min', 
        icon: Search, 
        tip: 'We recommend IPTV Smarters Pro or IBO Player for smooth UI navigation and 4K playback.' 
      },
      { 
        number: 4, 
        title: 'Install & Launch Player', 
        description: 'Click Download / Install on your TV screen. Once installation finishes, open the application.', 
        duration: '2 min', 
        icon: Download, 
        tip: 'If your TV storage is low, clear unused apps to ensure smooth video buffering.' 
      },
      { 
        number: 5, 
        title: 'Authenticate Your Line', 
        description: 'Select "Login with Xtream Codes API" and enter your Server URL, Username, and Password.', 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Use your TV remote or a connected mobile keyboard to input credentials quickly.' 
      },
      { 
        number: 6, 
        title: 'Enjoy Live TV & VOD', 
        description: 'Your channels will synchronize automatically. Enjoy live international broadcasts, cinema releases, and PPV sports in crystal-clear Ultra HD.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Connect your TV via Ethernet cable for optimal 4K high-bitrate streaming.' 
      },
    ]
  },
  apple: {
    title: 'Apple Devices (iPhone, iPad, Apple TV)',
    icon: Apple,
    steps: [
      { 
        number: 1, 
        title: 'Order Subscription Plan', 
        description: 'Select your preferred subscription duration to generate your M3U and Xtream login codes instantly.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'A single account can be configured across your iPhone, iPad, and Apple TV.' 
      },
      { 
        number: 2, 
        title: 'Open the App Store', 
        description: 'Launch the official Apple App Store on your iOS device or Apple TV 4K box.', 
        duration: '1 min', 
        icon: ShoppingBag, 
        tip: 'Make sure your Apple ID has active App Store download permissions.' 
      },
      { 
        number: 3, 
        title: 'Search for Streaming App', 
        description: 'Search for "IPTV Smarters Pro", "GSE Smart IPTV", or "Smarters Player Lite" in the search bar.', 
        duration: '1 min', 
        icon: Search, 
        tip: 'These apps support hardware decoding and full AirPlay compatibility.' 
      },
      { 
        number: 4, 
        title: 'Download the App', 
        description: 'Tap Get to download and install the application directly onto your Apple device.', 
        duration: '2 min', 
        icon: Download, 
        tip: 'Authenticate with Face ID, Touch ID, or your Apple account password.' 
      },
      { 
        number: 5, 
        title: 'Enter API Login Details', 
        description: 'Open the app, select "Xtream Codes API", and paste your Portal URL, Username, and Password.', 
        duration: '2 min', 
        icon: Mail, 
        tip: 'Use universal iOS copy/paste between your iPhone and Apple TV for instant setup.' 
      },
      { 
        number: 6, 
        title: 'Start Streaming', 
        description: 'Your playlist is loaded! Stream with Picture-in-Picture mode, background audio, and AirPlay casting.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Enable Picture-in-Picture to watch matches while browsing other apps.' 
      },
    ]
  },
  pc: {
    title: 'PC & Mac Desktop Setup',
    icon: Laptop,
    steps: [
      { 
        number: 1, 
        title: 'Select Subscription', 
        description: 'Complete order checkout to receive your dedicated M3U link and Xtream API credentials in your email.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Keep your M3U link copied for fast loading in your media player.' 
      },
      { 
        number: 2, 
        title: 'Download Media Player', 
        description: 'Download VLC Media Player from videolan.org or IPTV Smarters Pro desktop application for Windows / macOS.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'VLC is open-source, ultra-lightweight, and supports all international video codecs.' 
      },
      { 
        number: 3, 
        title: 'Install Software', 
        description: 'Run the setup file and follow the standard on-screen installation wizard.', 
        duration: '2 min', 
        icon: Cpu, 
        tip: 'Default installation options provide full streaming hardware acceleration.' 
      },
      { 
        number: 4, 
        title: 'Copy Playlist Link', 
        description: 'Copy your M3U playlist URL from your welcome email.', 
        duration: '1 min', 
        icon: Mail, 
        tip: 'Do not share your personal M3U URL with unauthorized users.' 
      },
      { 
        number: 5, 
        title: 'Load Network Stream', 
        description: 'In VLC, navigate to Media > Open Network Stream (Ctrl+N or Cmd+N), paste your M3U URL, and press Play.', 
        duration: '2 min', 
        icon: PlayCircle, 
        tip: 'Press Ctrl+L (Cmd+L on Mac) to view your categorized channels and playlist groups.' 
      },
      { 
        number: 6, 
        title: 'Stream in Full HD / 4K', 
        description: 'Setup finished! Enjoy buffer-free live television, global news feeds, and movies right from your desktop or laptop.', 
        duration: 'Done!', 
        icon: Zap, 
        tip: 'Press F in VLC for fullscreen playback with keyboard channel navigation.' 
      },
    ]
  }
};

function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-4 sm:gap-6">
        
        {/* Step Number & Line Connector */}
        <div className="flex flex-col items-center">
          <motion.div 
            className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center z-10 transition-all duration-500 border ${
              isInView 
                ? 'bg-blue-600 border-sky-400 shadow-[0_0_25px_rgba(37,99,235,0.4)] scale-105' 
                : 'bg-slate-900 border-slate-800'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.1 }}
          >
            <span className={`text-xl sm:text-2xl font-black ${
              isInView ? 'text-white' : 'text-slate-500'
            }`}>
              {step.number}
            </span>
          </motion.div>
          
          {!isLast && (
            <div className="relative w-0.5 flex-1 min-h-[90px] my-3 bg-slate-800">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-sky-400"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
              />
            </div>
          )}
        </div>
        
        {/* Step Content Card */}
        <motion.div 
          className="flex-1 pb-12 sm:pb-16"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`bg-slate-900/80 backdrop-blur-md border rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl ${
            isInView 
              ? 'border-blue-500/40 shadow-[0_0_30px_rgba(37,99,235,0.15)]' 
              : 'border-slate-800'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
                  isInView ? 'bg-blue-600/20 text-sky-400 border border-blue-500/30' : 'bg-slate-800 text-slate-500'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                  isInView ? 'text-white' : 'text-slate-300'
                }`}>
                  {step.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-xs">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{step.duration}</span>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {step.description}
            </p>
            
            {/* Pro Tip Box */}
            {step.tip && (
              <div className="mt-5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sky-400 font-bold text-xs uppercase tracking-wider block mb-0.5">Configuration Tip</span>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{step.tip}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const whatsappNumber = CONSTANTS?.CONTACT_INFO?.WHATSAPP?.replace(/[^0-9]/g, '') || '447549589503';

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-300">
      
      {/* Hero Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt={`${CONSTANTS.BRAND_NAME} easy setup tutorial`}
            fill
            priority
            className="w-full h-full object-cover opacity-25"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/40" />
        </div>
        
        {/* Subtle Cyber Grid */}
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
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 pt-32 pb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">
                5-Minute Quick Activation Guide
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
              Easy Setup Guide:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                Start Streaming
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              Follow our step-by-step <strong>easy setup guide</strong> to configure your {CONSTANTS.BRAND_NAME} subscription on Firestick, Smart TV, Android, Apple TV, and PC in minutes.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-400 text-xs uppercase tracking-widest font-semibold">
              <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-sky-400" /> Secure Setup</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /> Instant Activation</span>
              <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-sky-400" /> 24/7 Live Support</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Device Selection Bar */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Streaming Device
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Select your platform below for tailored installation instructions
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                type="button"
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-6 rounded-3xl text-center transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-slate-900 border-2 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.25)] scale-[1.02]' 
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold uppercase text-[9px] px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1 shadow-md border border-blue-400/40">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all ${
                  isActive ? 'bg-blue-600/20 text-sky-400 border border-blue-500/30' : 'bg-slate-800 text-slate-400'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>
                <p className={`text-base sm:text-lg font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {device.name}
                </p>
                <p className="text-slate-500 text-xs font-semibold">{device.steps} easy steps</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Step Process Timeline */}
      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <currentData.icon className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">{currentData.title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
            6-Step Visual Walkthrough
          </h2>
          <p className="text-slate-400 text-sm">
            Follow each milestone to complete your device configuration in 5 minutes
          </p>
        </div>

        {/* Dynamic Step Items */}
        <div className="relative">
          {currentData.steps.map((step, index) => (
            <StepItem 
              key={step.number}
              step={step}
              index={index}
              isLast={index === currentData.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Confirmation Box */}
        <motion.div 
          className="text-center mt-6 p-8 sm:p-10 rounded-3xl bg-slate-900 border border-blue-500/30 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Configuration Complete!</h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Your streaming line is ready. Browse 25,000+ live channels, PPV sport networks, and 65,000+ VOD blockbusters in buffer-free 4K.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              aria-label="Return to Main Home"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-600/40 border border-blue-400/30"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              aria-label="Check Available Packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 hover:border-blue-500 transition-all"
            >
              <span>View Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Video Tutorial & WhatsApp Support Cards */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500/40 transition-all group shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/20 text-sky-400 transition-colors">
              <PlayCircle className="w-7 h-7" />
            </div>
            <p className="text-xl font-bold text-white mb-1.5">Video Walkthrough</p>
            <p className="text-slate-400 text-sm mb-5">Watch our visual installation guide on YouTube</p>
            <button 
              type="button"
              onClick={openVideo}
              className="inline-flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all cursor-pointer"
            >
              Watch Video <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 text-center hover:border-emerald-500/40 transition-all group shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 text-emerald-400 transition-colors">
              <MessageCircle className="w-7 h-7" />
            </div>
            <p className="text-xl font-bold text-white mb-1.5">24/7 Live Agent Chat</p>
            <p className="text-slate-400 text-sm mb-5">Need assistance? Chat directly with an engineer</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hello%20${encodeURIComponent(CONSTANTS.BRAND_NAME)}%20Support%2C%20I%20need%20help%20with%20setup`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all cursor-pointer"
            >
              Chat on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Sharing Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <SocialShareBar />
      </div>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideo();
            }
          }}
        >
          <div className="relative w-full max-w-4xl">
            <button 
              type="button"
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold z-10"
            >
              <X className="w-4 h-4" /> Close Video
            </button>
            
            <div className="relative pb-[56.25%] h-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title={`${CONSTANTS.BRAND_NAME} Setup Guide`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Embedded FAQ */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-20">
        <FAQ />
      </div>
    </div>
  );
}