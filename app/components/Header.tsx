'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CONSTANTS } from '@/lib/seo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Setup', href: '/setup' },
    { name: 'Blog', href: '/blog' },
  ];

  const mobileNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing Plans', href: '/pricing' },
    { name: 'Device Setup Guide', href: '/setup' },
    { name: 'IPTV Blog & News', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800/80 py-2.5 shadow-2xl shadow-black/80' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Header Brand Logo */}
            <div className="flex items-center">
              <Link 
                href="/" 
                aria-label={`${CONSTANTS.BRAND_NAME} Official Website Header Logo`}
                className="flex items-center group"
              >
                <div className="h-10 flex items-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/img/iptv-logo.webp"
                    alt={`${CONSTANTS.BRAND_NAME} Header Navigation Logo`}
                    width={160}
                    height={40}
                    className="object-contain h-full w-auto"
                    priority
                  />
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Main desktop navigation">
              <ul className="flex items-center gap-8 bg-slate-900/80 backdrop-blur-md px-8 py-2.5 rounded-full border border-slate-800 shadow-xl">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className={`font-bold uppercase tracking-widest text-xs transition-colors ${
                        isActive(link.href) 
                          ? 'text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex">
              <Link 
                href="/pricing" 
                aria-label={`View ${CONSTANTS.BRAND_NAME} Subscription Plans`}
                className="px-6 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 font-bold tracking-widest uppercase text-xs transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/30"
              >
                View Plans
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-slate-300 p-2 focus:outline-none z-50 relative hover:text-white transition-colors"
                aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-[#030712]/98 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation drawer"
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-6">
          <div className="space-y-4 w-full max-w-sm mx-auto">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-center px-6 py-4 rounded-2xl text-base font-bold tracking-wider uppercase transition-all ${
                  isActive(link.href) 
                    ? 'text-white bg-blue-600 shadow-lg shadow-blue-600/40 border border-blue-400/40' 
                    : 'text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Drawer CTA Button */}
            <Link 
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="block mt-6 text-center px-6 py-4.5 rounded-2xl bg-blue-600 text-white font-black text-base tracking-widest uppercase shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all border border-blue-400/30"
            >
              Start Streaming Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}