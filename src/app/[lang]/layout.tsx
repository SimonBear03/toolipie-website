import type { ReactNode } from 'react';
import SiteShell from 'components/shared/SiteShell';
import { normalizeLang } from '@/lib/lang';
import { generateLangStaticParams } from '@/lib/staticParams';

export const dynamicParams = false;

export const generateStaticParams = generateLangStaticParams;

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return (
    <div lang={lang} className="flex min-h-screen flex-col">
      <SiteShell lang={lang}>{children}</SiteShell>
    </div>
  );
}
