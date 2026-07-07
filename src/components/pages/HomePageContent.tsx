import Link from 'next/link';
import HeroTitle from 'components/home/HeroTitle';
import TerminalDemo from 'components/home/TerminalDemo';
import Reveal from 'components/shared/Reveal';
import { getCatalog } from '@/i18n';
import { localizedPath, type Lang } from '@/lib/lang';

function Divider({ className = 'my-10' }: { className?: string }) {
  return <div className={`${className} h-px bg-border`} />;
}

export default function HomePageContent({ lang }: { lang: Lang }) {
  const catalog = getCatalog(lang);
  const copy = catalog.pages.home;

  return (
    <section className="mx-auto max-w-3xl px-4 pt-6 pb-16 md:pt-8 md:pb-24">
      <HeroTitle text={catalog.site.brand} />

      <Reveal className="reveal-slow" group="hero-intro">
        <div className="relative z-10 mt-6 mb-12 md:mt-10">
          <TerminalDemo key={lang} terminal={catalog.terminal} />
        </div>
      </Reveal>

      <Reveal className="reveal-slow" group="hero-intro">
        <h1 className="text-4xl leading-tight text-primary md:text-5xl">
          {copy.hero.headlineLine1}
          <br />
          {copy.hero.headlineLine2}
        </h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-4 text-base text-muted md:text-lg">{copy.hero.intro}</p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={localizedPath(lang, 'how-it-works')}
            className="rounded-md border px-3 py-2 text-primary ui-outline"
          >
            {copy.hero.primaryCta}
          </Link>
          <Link
            href={localizedPath(lang, 'use-cases')}
            className="rounded-md border px-3 py-2 text-muted ui-outline hover:text-primary"
          >
            {copy.hero.secondaryCta}
          </Link>
        </div>
      </Reveal>

      <Divider className="my-12" />

      <Reveal>
        <h2 id="story" className="text-2xl text-primary">
          {copy.story.heading}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm text-muted md:text-base">{copy.story.body}</p>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 id="vision" className="text-2xl text-primary">
          {copy.vision.heading}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm text-muted md:text-base">{copy.vision.body}</p>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 id="principles" className="text-2xl text-primary">
          {copy.principles.heading}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm text-muted md:text-base">{copy.principles.body}</p>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 id="example" className="text-2xl text-primary">
          {copy.example.heading}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm text-muted md:text-base">{copy.example.body}</p>
      </Reveal>
      <Reveal delay={200}>
        <pre className="mt-4 overflow-x-auto rounded-md border p-3 text-sm text-muted ui-outline">
          {copy.example.code}
        </pre>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 id="who" className="text-2xl text-primary">
          {copy.who.heading}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm text-muted md:text-base">{copy.who.body}</p>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={localizedPath(lang, 'contribute')}
            className="rounded-md border px-3 py-2 text-primary ui-outline"
          >
            {copy.cta.contribute}
          </Link>
          <Link
            href={localizedPath(lang, 'about')}
            className="rounded-md border px-3 py-2 text-muted ui-outline hover:text-primary"
          >
            {copy.cta.about}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
