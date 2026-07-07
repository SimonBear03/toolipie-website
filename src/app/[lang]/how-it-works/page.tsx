import HowItWorksPageContent from 'components/pages/HowItWorksPageContent';
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
  return createPageMetadata(normalizeLang(lang), 'howItWorks');
}

export default async function LocalizedHowItWorksPage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return <HowItWorksPageContent lang={lang} />;
}
