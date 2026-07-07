import UseCasesPageContent from 'components/pages/UseCasesPageContent';
import SiteShell from 'components/shared/SiteShell';
import { defaultLang } from '@/lib/lang';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('en', 'useCases');

export default function UseCasesPage() {
  const lang = defaultLang();

  return (
    <SiteShell lang={lang}>
      <UseCasesPageContent lang={lang} />
    </SiteShell>
  );
}
