'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CONSTANTS } from '@/lib/seo';
import { Home, ArrowLeft, Search, Tv, Film, PlayCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030712] relative overflow-hidden text-slate-300">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/error-404.webp"
          alt={`${CONSTANTS.FOCUS_KEYWORD} - Page Not Found Background`}
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/70 to-[#030712]" />
      </div>

      {/* Cyber Blue Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* 404 Number with Cyber Blue Gradient */}
          <div className="mb-6">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter select-none">
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.3)]">
                4
              </span>
              <span className="text-slate-600">0</span>
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.3)]">
                4
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Stream Signal Lost
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mb-6 rounded-full" />
          
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for has been moved or does not exist. Browse our active channels or return home.
          </p>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-2xl mx-auto mb-10">
            <Link
              href="/"
              className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg"
            >
              <Home className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider group-hover:text-white">Home</span>
            </Link>
            
            <Link
              href="/pricing"
              className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg"
            >
              <Tv className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider group-hover:text-white">Pricing</span>
            </Link>
            
            <Link
              href="/setup"
              className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg"
            >
              <Film className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider group-hover:text-white">Setup</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg"
            >
              <Search className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider group-hover:text-white">Blog</span>
            </Link>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] border border-blue-400/30"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 hover:border-blue-500 transition-all"
            >
              <PlayCircle className="w-4 h-4 text-sky-400" />
              View Subscriptions
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}