import { getCatalog } from '@/i18n';
import type { Lang } from '@/lib/lang';

export default function Footer({ lang }: { lang: Lang }) {
  const catalog = getCatalog(lang);

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted">
        {catalog.footer.copyrightPrefix} {new Date().getFullYear()} {catalog.site.brand}
      </div>
    </footer>
  );
}
 
