// components/SplashLoader.tsx
'use client';

import { useState, useEffect } from 'react';

export default function SplashLoader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after initial client mount
    const fadeTimer = setTimeout(() => setFadeOut(true), 400);
    // Remove completely from DOM
    const removeTimer = setTimeout(() => setShow(false), 750);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] pointer-events-none transition-opacity duration-300 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Cyber Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.18)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Custom Radial Keyframe Loader */}
        <div className="brand-custom-loader" />

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
          Content Loading...
        </p>
      </div>

      <style jsx>{`
        .brand-custom-loader {
          width: 48px;
          aspect-ratio: 1.154;
          --_g: no-repeat radial-gradient(farthest-side, #38bdf8 90%, #0000);
          background: 
            var(--_g) 50% 0,
            var(--_g) 0 100%,
            var(--_g) 100% 100%;
          background-size: 35% calc(35% * 1.154);
          animation: l16 1s infinite;
          filter: drop-shadow(0 0 14px rgba(37, 99, 235, 0.7));
        }

        @keyframes l16 {
          50%,
          100% {
            background-position: 100% 100%, 50% 0, 0 100%;
          }
        }
      `}</style>
    </div>
  );
}