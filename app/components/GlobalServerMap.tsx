'use client';

import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { Wifi, MapPin, Zap, ShieldCheck, Activity } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps';
import { useState, useEffect } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json';

const serverMarkers: {
  name: string;
  coordinates: [number, number];
  servers: number;
}[] = [
  { name: 'USA (East & West)', coordinates: [-98, 38], servers: 36 },
  { name: 'Canada', coordinates: [-95, 55], servers: 20 },
  { name: 'United Kingdom', coordinates: [-2, 54], servers: 28 },
  { name: 'Germany / Central EU', coordinates: [10, 51], servers: 24 },
  { name: 'France', coordinates: [2, 46], servers: 18 },
  { name: 'Spain & Portugal', coordinates: [-4, 40], servers: 16 },
  { name: 'Netherlands', coordinates: [5.5, 52.3], servers: 30 },
  { name: 'Brazil & LATAM', coordinates: [-52, -14], servers: 14 },
  { name: 'UAE & MENA', coordinates: [54, 24], servers: 16 },
  { name: 'India', coordinates: [78, 22], servers: 14 },
  { name: 'Australia', coordinates: [134, -25], servers: 16 },
];

const mainHub: [number, number] = [5.5, 52.3]; // Amsterdam European High-Speed Backbone

export default function GlobalServerMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative w-full overflow-hidden bg-[#030712] py-16 sm:py-20 lg:py-24 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-[400px] bg-slate-900/60 rounded-3xl animate-pulse flex items-center justify-center text-slate-500 text-sm">
            Loading Server Network Map...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#030712] py-20 sm:py-24 lg:py-28 border-y border-slate-800"
      aria-label="Global server network and coverage map"
    >
      {/* Subtle Background Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.12),_transparent_55%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <FadeIn className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-400">
            <Wifi className="h-4 w-4" />
            Global 10Gbps Streaming Backbone
          </div>

          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Buffer-Free Streaming In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              100+ Countries
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Our high-speed dedicated servers automatically route your connection to the nearest low-latency node, eliminating freezing during live events.
          </p>
        </div>

        {/* Map Card */}
        <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-2 shadow-2xl backdrop-blur-xl sm:p-4">
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl bg-slate-950 sm:h-[460px] lg:h-[520px]" suppressHydrationWarning>
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{
                scale: 185,
                center: [10, 10],
              }}
              width={1000}
              height={500}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
              }}
            >
              <defs>
                <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="cyberLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* World Geographies */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#0f172a"
                      stroke="#1e293b"
                      strokeWidth={0.5}
                      onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      style={{
                        default: { outline: 'none' },
                        hover: {
                          fill: '#1e293b',
                          stroke: '#38bdf8',
                          strokeWidth: 0.8,
                          outline: 'none',
                        },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Animated Connection Lines */}
              {serverMarkers.map((marker, idx) => (
                <Line
                  key={`line-${marker.name}`}
                  from={mainHub}
                  to={marker.coordinates}
                  stroke="url(#cyberLine)"
                  strokeWidth={1}
                  strokeDasharray="4 6"
                  style={{
                    filter: 'url(#cyanGlow)',
                    animation: `streamFlow 3s linear infinite`,
                    animationDelay: `${idx * 0.15}s`,
                  }}
                  suppressHydrationWarning
                />
              ))}

              {/* Main Core Backbone Marker (Amsterdam Hub) */}
              <Marker coordinates={mainHub}>
                <circle r={12} fill="#38bdf8" fillOpacity={0.15}>
                  <animate attributeName="r" values="8;18;8" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="fillOpacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle r={5} fill="#38bdf8" stroke="#ffffff" strokeWidth={1.5} filter="url(#cyanGlow)" />
              </Marker>

              {/* Regional Server Nodes */}
              {serverMarkers.map((marker, idx) => (
                <Marker key={marker.name} coordinates={marker.coordinates}>
                  <g
                    onMouseEnter={() => setHoveredMarker(marker.name)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulse Ring */}
                    <circle
                      r={7}
                      fill="#2563eb"
                      fillOpacity={0.25}
                      stroke="#38bdf8"
                      strokeWidth={0.8}
                    >
                      <animate
                        attributeName="r"
                        values="4;12;4"
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${idx * 0.15}s`}
                      />
                      <animate
                        attributeName="fillOpacity"
                        values="0.35;0;0.35"
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${idx * 0.15}s`}
                      />
                    </circle>

                    {/* Center Dot */}
                    <circle
                      r={3.5}
                      fill="#38bdf8"
                      stroke="#020617"
                      strokeWidth={1}
                      filter="url(#cyanGlow)"
                    />

                    {/* Hover Info Tooltip */}
                    {hoveredMarker === marker.name && (
                      <g transform="translate(-50 -36)">
                        <rect
                          width="100"
                          height="28"
                          rx="8"
                          fill="#020617"
                          stroke="#38bdf8"
                          strokeWidth="1"
                        />
                        <text
                          x="50"
                          y="12"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="8"
                          fontWeight="700"
                        >
                          {marker.name}
                        </text>
                        <text
                          x="50"
                          y="22"
                          textAnchor="middle"
                          fill="#38bdf8"
                          fontSize="7"
                          fontWeight="600"
                        >
                          {marker.servers} Load-Balanced Nodes
                        </text>
                      </g>
                    )}
                  </g>
                </Marker>
              ))}
            </ComposableMap>

            {/* Gradient Overlays */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>

          {/* Real-time Location Indicator */}
          <div className="mt-3 flex min-h-[36px] justify-center items-center">
            {(hoveredCountry || hoveredMarker) ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-sky-300 backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-sky-400" />
                Active Zone: {hoveredMarker || hoveredCountry}
              </div>
            ) : (
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Hover over server nodes to view active load balancing
              </span>
            )}
          </div>
        </div>

        {/* 3 Value Pillars for Customers Under the Map */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <FadeInItem className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-start gap-4 shadow-lg">
            <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Ultra-Low Latency</h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Connects to the closest server cluster automatically for instant channel switching (&lt;0.5s).
              </p>
            </div>
          </FadeInItem>

          <FadeInItem className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-start gap-4 shadow-lg">
            <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Anti-Freeze 9.0 SLA</h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Dynamic traffic load-balancing prevents peak-time buffering during major sports and PPV matches.
              </p>
            </div>
          </FadeInItem>

          <FadeInItem className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-start gap-4 shadow-lg">
            <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">No ISP Throttling</h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Encrypted M3U / Xtream streaming protocols bypass local broadband throttling with ease.
              </p>
            </div>
          </FadeInItem>
        </FadeInStagger>

      </FadeIn>

      <style jsx global>{`
        @keyframes streamFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </section>
  );
}