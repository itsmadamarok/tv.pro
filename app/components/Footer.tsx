import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { Facebook, Instagram, Twitter, Tv, Trophy, Film, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030712] text-slate-400 py-16 px-6 lg:px-12 border-t border-slate-800/80 overflow-hidden min-h-[380px]">
      {/* Cyber Blue top decorative divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* 1. Brand & Description (2 cols on large screens) */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group inline-flex"
              aria-label={`${CONSTANTS.BRAND_NAME} Back to Top`}
            >
              <div className="w-auto h-11 flex items-center group-hover:scale-105 transition-transform">
                <Image
                  src="/img/iptv-logo.webp"
                  alt={`${CONSTANTS.BRAND_NAME} Official Footer Logo`}
                  width={180}
                  height={44}
                  className="object-contain h-full w-auto"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-6">
              Experience uncompressed 4K streaming with the{" "}
              <span className="font-semibold text-slate-200">{CONSTANTS.FOCUS_KEYWORD}</span>. 
              Over 25,000 live channels, 65,000+ VODs, dedicated sports PPV networks, and 99.9% server uptime.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label={`Follow ${CONSTANTS.BRAND_NAME} on Twitter X`}
                className="group w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-md"
              >
                <Twitter className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="#"
                aria-label={`Follow ${CONSTANTS.BRAND_NAME} on Instagram Official`}
                className="group w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-md"
              >
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="#"
                aria-label={`Follow ${CONSTANTS.BRAND_NAME} on Facebook Page`}
                className="group w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-md"
              >
                <Facebook className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* 2. Main Site Pages */}
          <div>
            <p className="text-white font-bold mb-5 tracking-wider uppercase text-xs">
              Pages
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/setup" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Device Setup Tutorial
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-sky-400 transition-colors">
                  IPTV News & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        {/* 3. Channels & Media Coverage */}
          <div>
            <p className="text-white font-bold mb-5 tracking-wider uppercase text-xs">
              Channels
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/channels/sports-ppv" 
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span>Live Sports & PPV</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/channels/usa-canada" 
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span>USA & Canada Feeds</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/channels/uk-ireland" 
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span>UK & Ireland Lineup</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/channels/movies-vod" 
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span>Movies & VOD Series</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/channels/international" 
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                >
                  <span>24/7 Premium Networks</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. The 5 Legal & Policy Pages */}
          <div>
            <p className="text-white font-bold mb-5 tracking-wider uppercase text-xs">
              Legal & Policy
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
                <li>
                <Link href="/dmca" className="text-slate-400 hover:text-sky-400 transition-colors">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright and Payment Badges */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 text-center md:text-left">
          © {currentYear} {CONSTANTS.BRAND_NAME}. All rights reserved. Providing uncompressed {CONSTANTS.FOCUS_KEYWORD} streams worldwide.
        </p>

        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          {[
            { src: "/img/payment/1.png", alt: "PayPal Payment Processing", width: 45, height: 28 },
            { src: "/img/payment/2.png", alt: "Crypto & Bitcoin Secure Checkout", width: 45, height: 28 },
            { src: "/img/payment/3.png", alt: "Visa Card Processing", width: 45, height: 28 },
            { src: "/img/payment/4.png", alt: "Mastercard Encrypted Payment", width: 45, height: 28 },
          ].map((item) => (
            <div
              key={item.alt}
              className="relative h-8 w-13 px-2 rounded-lg border border-slate-800 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center hover:border-blue-500/40 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}