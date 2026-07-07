import Reveal from 'components/shared/Reveal';
import { getCatalog } from '@/i18n';
import type { Lang } from '@/lib/lang';

function Divider() {
  return <div className="my-10 h-px bg-border" />;
}

export default function HowItWorksPageContent({ lang }: { lang: Lang }) {
  const copy = getCatalog(lang).pages.howItWorks;

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
        <h2 className="text-xl text-primary">{copy.anatomy.heading}</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm text-muted md:text-base">{copy.anatomy.body}</p>
      </Reveal>
      <Reveal delay={150}>
        <pre className="mt-3 overflow-x-auto rounded-md border p-3 text-sm text-muted ui-outline">
          {copy.anatomy.code}
        </pre>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 className="text-xl text-primary">{copy.flow.heading}</h2>
      </Reveal>
      <Reveal delay={100}>
        <ol className="mt-2 list-decimal pl-5 text-sm text-muted">
          {copy.flow.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 className="text-xl text-primary">{copy.services.heading}</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm text-muted md:text-base">{copy.services.body}</p>
      </Reveal>

      <Divider />

      <Reveal>
        <p className="text-sm text-muted">{copy.closing}</p>
      </Reveal>
    </section>
  );
}
