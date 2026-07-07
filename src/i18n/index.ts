import { en } from './en';
import { zh } from './zh';
import type { Lang } from '@/lib/lang';

export type Catalog = typeof en;

const catalogs: Record<Lang, Catalog> = {
  en,
  zh,
};

function format(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = vars[key];
    return value === undefined || value === null ? '' : String(value);
  });
}

export function t(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  const parts = key.split('.');
  const catalog = catalogs[lang] ?? catalogs.en;
  const fallback = catalogs.en;

  const resolve = (cat: Catalog): unknown =>
    parts.reduce<unknown>((acc, part) => {
      if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, cat);

  const value = resolve(catalog) ?? resolve(fallback);
  return typeof value === 'string' ? format(value, vars) : key;
}

export function getCatalog(lang: Lang): Catalog {
  return catalogs[lang] ?? catalogs.en;
}
