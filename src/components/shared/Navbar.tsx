"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Languages, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useEffect, useRef, useState } from 'react';
import type { Catalog } from '@/i18n';
import { navActionClass, navActionIconClass, navActionIconWrapClass } from './navActionClasses';
import {
  langFromPath,
  localizedPath,
  stripLangFromPath,
  switchLangPath,
  type Lang,
} from '@/lib/lang';

type NavLink = {
  href: string;
  label: string;
};

type NavbarCopy = Pick<Catalog, 'site' | 'nav' | 'theme'>;

function GitHubMark({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.14-.02-2.07-3.05.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.68 2.56 1.2 3.18.92.1-.71.38-1.2.69-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.17 1.12-2.94-.11-.27-.49-1.37.11-2.86 0 0 .92-.29 3.01 1.12a10.4 10.4 0 0 1 2.74-.37c.93 0 1.87.13 2.74.37 2.09-1.41 3.01-1.12 3.01-1.12.6 1.49.22 2.59.11 2.86.69.77 1.12 1.74 1.12 2.94 0 4.23-2.58 5.16-5.03 5.43.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.94 0 .29.2.64.76.53A10.53 10.53 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function Navbar({ copy, lang }: { copy: NavbarCopy; lang: Lang }) {
  const pathname = usePathname();
  const effectiveLang = langFromPath(pathname) || lang;
  const headerRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentRoute = stripLangFromPath(pathname);
  const alternateLang: Lang = effectiveLang === 'en' ? 'zh' : 'en';
  const languageAria = alternateLang === 'en' ? copy.nav.switcher.toEn : copy.nav.switcher.toZh;
  const navLinks: NavLink[] = [
    { href: localizedPath(effectiveLang, 'use-cases'), label: copy.nav.links.useCases },
    { href: localizedPath(effectiveLang, 'how-it-works'), label: copy.nav.links.howItWorks },
    { href: localizedPath(effectiveLang, 'contribute'), label: copy.nav.links.contribute },
    { href: localizedPath(effectiveLang, 'about'), label: copy.nav.links.about },
  ];

  const isActive = (href: string) => {
    const route = stripLangFromPath(href);
    return currentRoute === route || (route !== '/' && currentRoute.startsWith(`${route}/`));
  };

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
          <Link href={localizedPath(effectiveLang)} className="text-primary">
            {copy.site.brand}
          </Link>
          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-4 text-sm text-muted">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? 'text-primary' : 'hover:text-primary'}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Desktop controls */}
          <Link
            href={switchLangPath(pathname, alternateLang)}
            className={`hidden sm:inline-flex ${navActionClass}`}
            aria-label={languageAria}
            title={languageAria}
          >
            <span className={navActionIconWrapClass}>
              <Languages className={navActionIconClass} strokeWidth={1.8} aria-hidden="true" />
            </span>
          </Link>
          <div className="hidden sm:block">
            <ThemeToggle copy={copy.theme} />
          </div>
          <a
            href="https://github.com/simonbear03/toolipie-public"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex ${navActionClass}`}
            aria-label={copy.site.githubAria}
            title={copy.site.githubAria}
          >
            <span className={navActionIconWrapClass}>
              <GitHubMark className={navActionIconClass} />
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? copy.nav.menu.close : copy.nav.menu.open}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(v => !v)}
            className="inline-flex sm:hidden h-8 w-8 items-center justify-center rounded-md border ui-outline text-muted hover:text-primary"
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={isActive(link.href) ? 'text-sm text-primary' : 'text-sm text-muted hover:text-primary'}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-wrap items-center justify-end gap-4 pt-2">
            <Link
              href={switchLangPath(pathname, alternateLang)}
              onClick={() => setMenuOpen(false)}
              className={`inline-flex ${navActionClass}`}
              aria-label={languageAria}
              title={languageAria}
            >
              <span className={navActionIconWrapClass}>
                <Languages className={navActionIconClass} strokeWidth={1.8} aria-hidden="true" />
              </span>
            </Link>
            <ThemeToggle copy={copy.theme} />
            <a
              href="https://github.com/simonbear03/toolipie-public"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex ${navActionClass}`}
              aria-label={copy.site.githubAria}
              title={copy.site.githubAria}
            >
              <span className={navActionIconWrapClass}>
                <GitHubMark className={navActionIconClass} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
 
