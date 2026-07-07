import AboutPageContent from 'components/pages/AboutPageContent';
import SiteShell from 'components/shared/SiteShell';
import { defaultLang } from '@/lib/lang';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('en', 'about');

export default function AboutPage() {
  const lang = defaultLang();

  return (
    <SiteShell lang={lang}>
      <AboutPageContent lang={lang} />
    </SiteShell>
  );
}
