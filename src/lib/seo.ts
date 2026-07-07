import type { Metadata } from 'next';
import { getCatalog, type Catalog } from '@/i18n';
import { defaultLang, localizedPath, type Lang, type SiteRoute } from '@/lib/lang';

export const siteUrl = 'https://toolipie.com';

export type PageKey = keyof Catalog['pages'];

const pageRoutes: Record<PageKey, SiteRoute> = {
  home: '',
  useCases: 'use-cases',
  howItWorks: 'how-it-works',
  contribute: 'contribute',
  about: 'about',
};

export function routeForPage(pageKey: PageKey): SiteRoute {
  return pageRoutes[pageKey];
}

export function createPageMetadata(lang: Lang, pageKey: PageKey, canonical?: string): Metadata {
  const catalog = getCatalog(lang);
  const page = catalog.pages[pageKey];
  const route = routeForPage(pageKey);
  const canonicalPath = canonical ?? localizedPath(lang, route);

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: localizedPath('en', route),
        zh: localizedPath('zh', route),
        'x-default': localizedPath(defaultLang(), route),
      },
    },
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      url: canonicalPath,
      siteName: catalog.site.brand,
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: lang === 'zh' ? ['en_US'] : ['zh_CN'],
      type: 'website',
    },
  };
}
