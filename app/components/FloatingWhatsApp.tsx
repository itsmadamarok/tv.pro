'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Send, X, MessageSquare } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showBubble, setShowBubble] = useState(true);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'support',
      text: `Hi there! Looking for the best IPTV service or a free test? How can we help you today?`,
      time: getCurrentTime(),
    },
  ]);

  const bubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nextCycleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const phoneNumber =
    CONSTANTS?.CONTACT_INFO?.WHATSAPP?.replace(/[^0-9]/g, '') || '447549589503';

  // Handle automatic show/hide bubble intervals
  useEffect(() => {
    if (open) {
      setShowBubble(false);
      return;
    }

    const showBubbleCycle = () => {
      setShowBubble(true);

      bubbleTimeoutRef.current = setTimeout(() => {
        setShowBubble(false);

        nextCycleTimeoutRef.current = setTimeout(() => {
          showBubbleCycle();
        }, 8000);
      }, 4500);
    };

    showBubbleCycle();

    return () => {
      if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
      if (nextCycleTimeoutRef.current) clearTimeout(nextCycleTimeoutRef.current);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open, chatHistory]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const sendToWhatsapp = () => {
    if (!message.trim()) return;

    const userMessage = { sender: 'user', text: message, time: getCurrentTime() };
    setChatHistory((prev) => [...prev, userMessage]);

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank', 'noopener,noreferrer');

    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendToWhatsapp();
    }
  };

  const WhatsAppIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-7 h-7 md:w-8 md:h-8 text-white fill-current"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.448 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  const SupportAvatar = () => (
    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-emerald-500/40 relative">
      <Image
        src="/img/profile.webp"
        alt={`${CONSTANTS.BRAND_NAME} 24/7 Live Support`}
        width={40}
        height={40}
        className="w-full h-full object-cover"
        priority
      />
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
    </div>
  );

  return (
    <div className="whatsapp-global-wrapper">
      {/* Auto Help Bubble */}
      {!open && showBubble && (
        <div className="fixed bottom-28 right-6 z-[30] animate-fade-in whatsapp-element">
          <div className="bg-green-500 border border-slate-700 shadow-2xl rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-white relative max-w-[240px] whitespace-nowrap flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 bg-green-100 animate-pulse" />
            Chat with us!
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-r border-b border-slate-700 rotate-45" />
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowBubble(false);
        }}
        className="fixed bottom-6 right-6 z-[35] group whatsapp-element focus:outline-none"
        aria-label="Open 24/7 WhatsApp IPTV Support"
      >
        <div className="relative">
          {!open && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
          )}
          <div className="relative bg-[#25D366] hover:bg-[#20ba59] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-105 group-hover:shadow-2xl border border-white/20">
            <WhatsAppIcon />
          </div>
        </div>
      </button>

      {/* Chat Window Drawer */}
      {open && (
        <div className="fixed bottom-24 right-4 md:right-6 w-[340px] sm:w-[380px] max-w-[calc(100vw-32px)] rounded-3xl overflow-hidden shadow-2xl z-[34] bg-slate-950 border border-slate-800 flex flex-col max-h-[80vh] md:max-h-[500px] whatsapp-element backdrop-blur-2xl">
          
          {/* Header */}
          <div className="bg-slate-900/95 border-b border-slate-800 p-4 flex items-center justify-between text-white flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <SupportAvatar />
              <div className="min-w-0">
                <h3 className="font-bold text-sm sm:text-base truncate flex items-center gap-2">
                  {CONSTANTS.BRAND_NAME} Support
                </h3>
                <p className="text-[10px] sm:text-xs text-emerald-400 font-medium truncate">
                  ⚡ Online • Replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full p-1.5 transition flex-shrink-0"
              aria-label="Close chat window"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto bg-[#030712]/95 min-h-[200px] max-h-[300px] md:max-h-[350px]">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-message-in`}
              >
                {msg.sender === 'support' && (
                  <div className="flex-shrink-0 mr-2 self-end">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-700">
                      <Image
                        src="/img/profile.webp"
                        alt="Agent"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl shadow-md text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="break-words">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right font-medium ${
                      msg.sender === 'user' ? 'text-blue-200' : 'text-slate-500'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-850 flex gap-2 items-center flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about trials, plans, setup..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 rounded-full px-4 py-2.5 border border-slate-700 outline-none bg-slate-950 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition min-w-0"
            />
            <button
              onClick={sendToWhatsapp}
              disabled={!message.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white p-2.5 rounded-full shadow-lg shadow-blue-600/30 transition-transform hover:scale-105 disabled:hover:scale-100 flex-shrink-0"
              aria-label="Send WhatsApp message"
            >
              <Send size={16} className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* CSS Override: Hide on mobile drawer open */}
      <style jsx global>{`
        body.mobile-menu-open .whatsapp-element {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes message-in {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
        .animate-message-in {
          animation: message-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}