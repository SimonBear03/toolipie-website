'use client';

import { useEffect, useRef } from 'react';

type HeroTitleProps = {
  text?: string;
  maxShiftPx?: number; // how far up to shift at full scroll progress
  maxScale?: number;   // scroll scale at full progress (>= 1)
  initialScale?: number; // starting scale on mount (> 1)
  initialShiftPx?: number; // starting downward shift on mount (px)
  introDurationMs?: number; // mount animation duration
};

export default function HeroTitle({
  text = 'Toolipie',
  maxShiftPx = 64,
  maxScale = 1.18,
  initialScale = 2.0,
  initialShiftPx = 80,
  introDurationMs = 2000,
}: HeroTitleProps) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const thresholdPx = 240; // scroll distance to reach full effect
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const p = Math.max(0, Math.min(1, y / thresholdPx));
        const translateY = -(p * maxShiftPx);
        const scrollScale = 1 + p * (maxScale - 1);
        if (innerRef.current) {
          innerRef.current.style.transform = `translateY(${translateY}px) scale(${scrollScale})`;
        }
        tickingRef.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [maxShiftPx, maxScale]);

  return (
    <div
      className="relative z-0 select-none pointer-events-none hero-intro"
      style={{
        ['--hero-initial-scale' as any]: initialScale,
        ['--hero-initial-shift' as any]: `${initialShiftPx}px`,
        ['--hero-intro-duration' as any]: `${introDurationMs}ms`,
      }}
    >
      <div
        ref={innerRef}
        className="text-7xl md:text-9xl font-bold text-primary text-center hero-scroll"
        style={{ transformOrigin: '50% 65%' }}
      >
        {text}
      </div>
    </div>
  );
}
