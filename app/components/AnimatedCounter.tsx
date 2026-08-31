'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(value);
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  
  // Triggers once when 40px inside the viewport
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  // Pre-calculated target display value for SSR and screen readers
  const finalDisplayValue = useMemo(() => {
    const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
    return `${prefix}${formatted}${suffix}`;
  }, [value, decimals, prefix, suffix]);

  useEffect(() => {
    setMounted(true);
    setCount(0); // Reset count on client mount so animation starts from 0
  }, []);

  useEffect(() => {
    if (!isInView || !mounted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / (duration * 1000);
      const progress = Math.min(Math.max(elapsed, 0), 1);

      // Cubic ease-out curve: fast start, smooth landing
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const nextCount = value * easeOutProgress;

      if (progress < 1) {
        setCount(nextCount);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, isInView, mounted]);

  const currentDisplayValue = useMemo(() => {
    if (!mounted) return finalDisplayValue;
    const formatted = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
    return `${prefix}${formatted}${suffix}`;
  }, [mounted, finalDisplayValue, decimals, count, prefix, suffix]);

  return (
    <span
      ref={ref}
      aria-label={finalDisplayValue}
      className={className}
      suppressHydrationWarning
    >
      {currentDisplayValue}
    </span>
  );
}