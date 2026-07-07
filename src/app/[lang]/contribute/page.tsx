import ContributePageContent from 'components/pages/ContributePageContent';
import type { Metadata } from 'next';
import { normalizeLang } from '@/lib/lang';
import { createPageMetadata } from '@/lib/seo';
import { generateLangStaticParams } from '@/lib/staticParams';

type LangPageProps = {
  params: Promise<{ lang: string }>;
};

export const generateStaticParams = generateLangStaticParams;

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const { lang } = await params;
  return createPageMetadata(normalizeLang(lang), 'contribute');
}

export default async function LocalizedContributePage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return <ContributePageContent lang={lang} />;
}
