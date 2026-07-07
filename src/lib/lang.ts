export const SUPPORTED_LANGS = ['en', 'zh'] as const;

export type Lang = (typeof SUPPORTED_LANGS)[number];

export const SITE_ROUTES = ['', 'use-cases', 'how-it-works', 'contribute', 'about'] as const;

export type SiteRoute = (typeof SITE_ROUTES)[number];

export function isSupportedLang(value: string | undefined): value is Lang {
  return value === 'en' || value === 'zh';
}

export function normalizeLang(value: string | undefined): Lang {
  return isSupportedLang(value) ? value : defaultLang();
}

export function defaultLang(): Lang {
  return 'en';
}

export function langFromPath(pathname: string): Lang {
  const segment = pathname.split('/')[1];
  return normalizeLang(segment);
}

export function localizedPath(lang: Lang, route: SiteRoute = ''): string {
  return route ? `/${lang}/${route}` : `/${lang}`;
}

export function stripLangFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const rest = isSupportedLang(segments[0]) ? segments.slice(1) : segments;
  return rest.length > 0 ? `/${rest.join('/')}` : '/';
}

export function switchLangPath(pathname: string, targetLang: Lang): string {
  const stripped = stripLangFromPath(pathname);
  return stripped === '/' ? `/${targetLang}` : `/${targetLang}${stripped}`;
}
