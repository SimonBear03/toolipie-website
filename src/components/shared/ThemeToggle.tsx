'use client';

import { useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const mediaRef = useRef<MediaQueryList | null>(null);
  const mediaListenerRef = useRef<((e: MediaQueryListEvent) => void) | null>(null);
  const [theme, setTheme] = useState<Theme>('dark');
  const [override, setOverride] = useState<Theme | null>(null);

  const applyTheme = (next: Theme, crossfade: boolean) => {
    const html = document.documentElement as HTMLElement & { style: any };
    if (crossfade) {
      const prevBg = getComputedStyle(html).getPropertyValue('--bg-color').trim();
      html.style.setProperty('--prev-bg', prevBg);
      html.style.setProperty('--crossfade-opacity', '1');
      html.classList.add('theme-crossfade');
    }
    html.setAttribute('data-theme', next);
    if (crossfade) {
      requestAnimationFrame(() => {
        html.style.setProperty('--crossfade-opacity', '0');
        window.setTimeout(() => {
          html.classList.remove('theme-crossfade');
          html.style.removeProperty('--prev-bg');
          html.style.removeProperty('--crossfade-opacity');
        }, 1000);
      });
    }
    setTheme(next);
  };

  useEffect(() => {
    // Load override if any
    const stored = window.localStorage.getItem('themeOverride');
    const storedOverride: Theme | null = stored === 'light' || stored === 'dark' ? (stored as Theme) : null;
    setOverride(storedOverride);

    const m = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    mediaRef.current = m;

    const systemTheme = m ? (m.matches ? 'dark' : 'light') : 'dark';
    applyTheme(storedOverride ?? systemTheme, false);

    const onChange = (e: MediaQueryListEvent) => {
      if (override) return; // stick to override
      applyTheme(e.matches ? 'dark' : 'light', true);
    };

    m?.addEventListener?.('change', onChange);
    mediaListenerRef.current = onChange;

    return () => m?.removeEventListener?.('change', onChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If system changes to match override, clear override and resume following system
  useEffect(() => {
    if (!override || !mediaRef.current) return;
    const systemTheme: Theme = mediaRef.current.matches ? 'dark' : 'light';
    if (systemTheme === override) {
      setOverride(null);
      window.localStorage.removeItem('themeOverride');
    }
  }, [override, theme]);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    applyTheme(next, true);
    setOverride(next);
    window.localStorage.setItem('themeOverride', next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-md border border-border px-2 py-1 text-muted hover:text-primary"
    >
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  );
}
// TODO: implement theme toggle (set data-theme, persist)
