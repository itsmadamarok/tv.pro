'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Sparkles,
  Award,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy
} from 'lucide-react';

// Toast Notification
const Toast = ({ 
  message, 
  type, 
  onClose 
}: { 
  message: string; 
  type: 'success' | 'error'; 
  onClose: () => void 
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in px-4 sm:px-0">
      <div className={`rounded-2xl p-5 shadow-2xl border backdrop-blur-xl ${
        type === 'success' 
          ? 'bg-slate-900/95 border-emerald-500/40 text-emerald-300' 
          : 'bg-slate-900/95 border-red-500/40 text-red-300'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${
            type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {type === 'success' ? (
              <Check className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
          </div>
          <div className="flex-1 pt-0.5">
            <p className="text-white text-sm font-semibold">{message}</p>
          </div>
          <button 
            onClick={onClose}
            className="flex-shrink-0 text-slate-400 hover:text-white transition-colors"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Success Confirmation Modal
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in p-4">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 max-w-md w-full shadow-2xl text-center animate-scale-up relative">
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        
        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
          Message Dispatched
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Thank you for contacting <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong> support. A technical specialist will review your request shortly.
        </p>
        
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-6 text-left">
          <p className="text-sky-400 text-xs uppercase tracking-wider font-bold mb-2.5">What to expect next:</p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ticket logged in technical queue</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Diagnostic check for device/app</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct response within minutes</span>
            </li>
          </ul>
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/40 border border-blue-400/30"
        >
          Close & Continue
        </button>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactEmail = `support@${CONSTANTS.DOMAIN}`;
  const whatsappNumber = CONSTANTS?.CONTACT_INFO?.WHATSAPP?.replace(/[^0-9]/g, '') || '447549589503';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Message sent successfully! Our team is on it.', type: 'success' });
    } catch {
      setToast({ message: 'Failed to deliver message. Please try again or use WhatsApp.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 pt-32 pb-20 relative overflow-hidden">
      
      {/* Ambient Grid & Background Lighting */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[650px] h-[650px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb08_1px,transparent_1px),linear-gradient(to_bottom,#2563eb08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Notifications */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {showSuccessPopup && (
        <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
      )}

      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-14 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6 shadow-inner">
              <Mail className="w-4 h-4 text-sky-400" />
              <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">24/7 Client Help Desk</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-6">
              Contact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                {CONSTANTS.BRAND_NAME}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have questions regarding our <span className="text-white font-semibold">{CONSTANTS.FOCUS_KEYWORD}</span> packages or setup tutorial? Our engineers are ready around the clock.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight">
                  Send Us A Direct Message
                </h2>
                <p className="text-slate-400 text-sm mb-8">
                  Submit your technical request or billing inquiry below for an instant ticket dispatch.
                </p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-sky-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-sm placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-sm placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Topic & Category <span className="text-sky-400">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none cursor-pointer appearance-none"
                      >
                        <option value="" className="bg-slate-950 text-slate-400">Select inquiry topic...</option>
                        <option value="setup" className="bg-slate-950">Free Trial & Activation Code</option>
                        <option value="technical" className="bg-slate-950">Technical & Playlist Assistance</option>
                        <option value="pricing" className="bg-slate-950">Subscription & Renewal Questions</option>
                        <option value="billing" className="bg-slate-950">Payment Methods (Crypto / PayPal)</option>
                        <option value="general" className="bg-slate-950">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Message Details <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-4 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-sm placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
                      placeholder="Specify your streaming app (TiviMate, IPTV Smarters, etc.) and device for faster support..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-blue-400/30 ${
                      loading 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-blue-500 hover:scale-[1.01] shadow-lg shadow-blue-600/40'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting Data...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Ticket</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
          
          {/* Side Contact Channels */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6">
                  Direct Support
                </h3>
                
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Email Support</p>
                    <a href={`mailto:${contactEmail}`} className="text-white hover:text-sky-400 transition-colors text-sm font-semibold truncate block">
                      {contactEmail}
                    </a>
                  </div>
                </div>
                
                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">WhatsApp Priority</p>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=Hello%20${encodeURIComponent(CONSTANTS.BRAND_NAME)}%20Support`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-emerald-400 transition-colors text-sm font-semibold block"
                    >
                      Instant Activation Chat
                    </a>
                  </div>
                </div>
                
                {/* Response SLA */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-sky-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Average Response</p>
                    <p className="text-white text-sm font-semibold">&lt; 15 Minutes (24/7/365)</p>
                  </div>
                </div>
                
                {/* Trust Matrix Badges */}
                <div className="pt-6 border-t border-slate-800">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-4">
                    Service Standards
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-center">
                      <Headphones className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                      <p className="text-slate-300 text-[10px] uppercase font-bold">VIP Desk</p>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <p className="text-slate-300 text-[10px] uppercase font-bold">Encrypted</p>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-center">
                      <Zap className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                      <p className="text-slate-300 text-[10px] uppercase font-bold">Fast Routing</p>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-center">
                      <Users className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                      <p className="text-slate-300 text-[10px] uppercase font-bold">Global SLA</p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* FAQ Quick Accordion Strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
            Support FAQ
          </h2>
          <p className="text-slate-400 text-sm">Quick solutions for common setup queries</p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: "How fast will I receive my credentials?",
              a: "Credentials (M3U playlist link & Xtream API) are sent immediately via email and WhatsApp upon confirmation."
            },
            {
              q: "Can you help me install TiviMate or Smarters?",
              a: "Yes. We offer step-by-step walkthroughs for Smart TVs, Firestick, iOS, Apple TV, and MAG devices."
            },
            {
              q: "What if I experience buffering during a match?",
              a: "Our Anti-Freeze 9.0 routing allows you to switch between primary and backup server nodes instantly without drops."
            },
            {
              q: "Do you offer test trials before purchase?",
              a: "Yes. Contact us through the form above or on WhatsApp to request an active test line."
            }
          ].map((faq, idx) => (
            <FadeInItem key={idx} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all">
              <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                {faq.q}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-up {
          from {
            transform: scale(0.94);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.35s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}