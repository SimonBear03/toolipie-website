import UseCasesPageContent from 'components/pages/UseCasesPageContent';
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
  return createPageMetadata(normalizeLang(lang), 'useCases');
}

export default async function LocalizedUseCasesPage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return <UseCasesPageContent lang={lang} />;
}
