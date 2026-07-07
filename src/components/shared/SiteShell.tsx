import type { ReactNode } from 'react';
import DocumentLang from 'components/shared/DocumentLang';
import Footer from 'components/shared/Footer';
import Navbar from 'components/shared/Navbar';
import { getCatalog } from '@/i18n';
import type { Lang } from '@/lib/lang';

export default function SiteShell({ children, lang }: { children: ReactNode; lang: Lang }) {
  const catalog = getCatalog(lang);

  return (
    <>
      <DocumentLang lang={lang} />
      <Navbar copy={{ site: catalog.site, nav: catalog.nav, theme: catalog.theme }} lang={lang} />
      <main className="flex-1 pt-[var(--nav-height)]">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
