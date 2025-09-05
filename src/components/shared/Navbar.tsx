"use client";

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const setHeightVar = () => {
      const h = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--nav-height', `${h}px`);
    };
    setHeightVar();
    window.addEventListener('resize', setHeightVar);
    return () => window.removeEventListener('resize', setHeightVar);
  }, []);

  // Close mobile menu on Escape and when switching to desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const mq = window.matchMedia('(min-width: 640px)');
    const onMedia = () => { if (mq.matches) setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    mq.addEventListener?.('change', onMedia);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener?.('change', onMedia);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 border-b border-border ui-divider bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80 shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-primary">Toolipie</Link>
          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-4 text-sm text-muted">
            <Link href="/use-cases" className="hover:text-primary">Use cases</Link>
            <Link href="/how-it-works" className="hover:text-primary">How it works</Link>
            <Link href="/contribute" className="hover:text-primary">Contribute</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Desktop GitHub + Theme */}
          <a
            href="https://github.com/simonbear03/toolipie-public"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-8 items-center gap-2 rounded-md border ui-outline px-2 text-muted hover:text-primary"
            aria-label="GitHub repository"
          >
            {/* GitHub icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.14-.02-2.07-3.05.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.68 2.56 1.2 3.18.92.1-.71.38-1.2.69-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.17 1.12-2.94-.11-.27-.49-1.37.11-2.86 0 0 .92-.29 3.01 1.12a10.4 10.4 0 0 1 2.74-.37c.93 0 1.87.13 2.74.37 2.09-1.41 3.01-1.12 3.01-1.12.6 1.49.22 2.59.11 2.86.69.77 1.12 1.74 1.12 2.94 0 4.23-2.58 5.16-5.03 5.43.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.94 0 .29.2.64.76.53A10.53 10.53 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z"/></svg>
            <span className="text-sm">GitHub</span>
          </a>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(v => !v)}
            className="inline-flex sm:hidden h-8 w-8 items-center justify-center rounded-md border ui-outline text-muted hover:text-primary"
          >
            {menuOpen ? (
              // X icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={[
          'sm:hidden absolute left-0 right-0 top-full border-b border-border ui-divider bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80',
          'transition-all duration-200 ease-out origin-top',
          menuOpen ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-1',
        ].join(' ')}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
          <Link href="/use-cases" onClick={() => setMenuOpen(false)} className="text-sm text-muted hover:text-primary">Use cases</Link>
          <Link href="/how-it-works" onClick={() => setMenuOpen(false)} className="text-sm text-muted hover:text-primary">How it works</Link>
          <Link href="/contribute" onClick={() => setMenuOpen(false)} className="text-sm text-muted hover:text-primary">Contribute</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-muted hover:text-primary">About</Link>
          <div className="flex items-center justify-between pt-2">
            <a
              href="https://github.com/simonbear03/toolipie-public"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border ui-outline px-2 py-1 text-muted hover:text-primary"
              aria-label="GitHub repository"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.14-.02-2.07-3.05.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.68 2.56 1.2 3.18.92.1-.71.38-1.2.69-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.17 1.12-2.94-.11-.27-.49-1.37.11-2.86 0 0 .92-.29 3.01 1.12a10.4 10.4 0 0 1 2.74-.37c.93 0 1.87.13 2.74.37 2.09-1.41 3.01-1.12 3.01-1.12.6 1.49.22 2.59.11 2.86.69.77 1.12 1.74 1.12 2.94 0 4.23-2.58 5.16-5.03 5.43.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.94 0 .29.2.64.76.53A10.53 10.53 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z"/></svg>
              <span className="text-sm">GitHub</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
 
