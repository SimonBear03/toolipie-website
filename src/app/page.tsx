import HomePageContent from 'components/pages/HomePageContent';
import SiteShell from 'components/shared/SiteShell';
import { defaultLang } from '@/lib/lang';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('en', 'home');

export default function Page() {
  const lang = defaultLang();

  return (
    <SiteShell lang={lang}>
      <HomePageContent lang={lang} />
    </SiteShell>
  );
}
 
