import Reveal from 'components/shared/Reveal';
import { getCatalog } from '@/i18n';
import type { Lang } from '@/lib/lang';

function Divider() {
  return <div className="my-10 h-px bg-border" />;
}

export default function ContributePageContent({ lang }: { lang: Lang }) {
  const copy = getCatalog(lang).pages.contribute;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl leading-tight text-primary md:text-4xl">{copy.heading}</h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm text-muted md:text-base">{copy.intro}</p>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 className="text-xl text-primary">{copy.goodTool.heading}</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm text-muted md:text-base">{copy.goodTool.body}</p>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 className="text-xl text-primary">{copy.structure.heading}</h2>
      </Reveal>
      <Reveal delay={100}>
        <pre className="mt-3 overflow-x-auto rounded-md border p-3 text-sm text-muted ui-outline">
          {copy.structure.code}
        </pre>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 className="text-xl text-primary">{copy.tips.heading}</h2>
      </Reveal>
      <Reveal delay={100}>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted">
          {copy.tips.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </Reveal>

      <Divider />

      <Reveal>
        <p className="text-sm text-muted">{copy.closing}</p>
      </Reveal>
    </section>
  );
}
