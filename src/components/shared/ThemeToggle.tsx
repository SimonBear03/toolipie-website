'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
    const initial = stored === 'dark' ? 'dark' : 'light';
    setTheme(initial);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-md border border-border px-2 py-1 text-muted hover:text-primary"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}
// TODO: implement theme toggle (set data-theme, persist)
