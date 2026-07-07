import Reveal from 'components/shared/Reveal';
import { getCatalog } from '@/i18n';
import type { Lang } from '@/lib/lang';

function Divider() {
  return <div className="my-10 h-px bg-border" />;
}

export default function UseCasesPageContent({ lang }: { lang: Lang }) {
  const copy = getCatalog(lang).pages.useCases;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl leading-tight text-primary md:text-4xl">{copy.heading}</h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm text-muted md:text-base">{copy.intro}</p>
      </Reveal>

      {copy.sections.map((section) => (
        <div key={section.heading}>
          <Divider />
          <Reveal>
            <h2 className="text-xl text-primary">{section.heading}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-2 text-sm text-muted md:text-base">{section.body}</p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      ))}

      <Divider />

      <Reveal>
        <p className="text-sm text-muted">{copy.closing}</p>
      </Reveal>
    </section>
  );
}
