import HowItWorksPageContent from 'components/pages/HowItWorksPageContent';
import SiteShell from 'components/shared/SiteShell';
import { defaultLang } from '@/lib/lang';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('en', 'howItWorks');

export default function HowItWorksPage() {
  const lang = defaultLang();

  return (
    <SiteShell lang={lang}>
      <HowItWorksPageContent lang={lang} />
    </SiteShell>
  );
}
