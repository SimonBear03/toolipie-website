import ContributePageContent from 'components/pages/ContributePageContent';
import SiteShell from 'components/shared/SiteShell';
import { defaultLang } from '@/lib/lang';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('en', 'contribute');

export default function ContributePage() {
  const lang = defaultLang();

  return (
    <SiteShell lang={lang}>
      <ContributePageContent lang={lang} />
    </SiteShell>
  );
}
