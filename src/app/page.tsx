import Link from 'next/link';
import Reveal from 'components/shared/Reveal';
import TerminalDemo from 'components/home/TerminalDemo';
import HeroTitle from 'components/home/HeroTitle';

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-6 md:pt-8 pb-16 md:pb-24">
      {/* Big title with scroll transform */}
      <HeroTitle />

      {/* Hero: terminal demo */}
      <Reveal className="reveal-slow" group="hero-intro">
        <div className="relative z-10 mt-6 md:mt-10 mb-12">
          <TerminalDemo />
        </div>
      </Reveal>

      {/* Narrative headline moved lower */}
      <Reveal className="reveal-slow" group="hero-intro">
        <h1 className="text-4xl md:text-5xl text-primary leading-tight">
          Stop rewriting tiny scripts.
          <br />
          Make task‑focused work repeatable.
        </h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-4 text-base md:text-lg text-muted">
          Toolipie is a small, open‑source CLI for running simple, reusable tools. It helps you keep
          the code that works in one place, then run it the same way every time. Use local code—or
          bring your own APIs (including AI)—whenever that’s the simplest path to a higher‑quality result.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-8 flex gap-3">
          <Link href="/how-it-works" className="rounded-md border border-border px-3 py-2 text-primary">
            How it works
          </Link>
          <Link href="/use-cases" className="rounded-md border border-border px-3 py-2 text-muted hover:text-primary">
            Explore use cases
          </Link>
        </div>
      </Reveal>

      {/* Divider */}
      <div className="my-12 h-px bg-border" />

      {/* Story */}
      <Reveal>
        <h2 id="story" className="text-2xl text-primary">The story</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          This began with a habit: tiny scripts for tiny jobs, scattered across projects, rewritten
          from memory. Toolipie is the place to keep those tasks tidy. Each tool is a small, modular
          plugin with clear inputs and outputs. The CLI standardizes how they run so you can depend on
          them—today, next month, and on the next project.
        </p>
      </Reveal>

      {/* Divider */}
      <div className="my-10 h-px bg-border" />

      {/* Vision */}
      <Reveal>
        <h2 id="vision" className="text-2xl text-primary">Vision</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          Toolipie focuses on results: small tools, one job, done well. If an API—or AI—produces the
          best output, use it. If local code is fastest, use that. The tools are modular; the wrapper
          makes them predictable.
        </p>
      </Reveal>

      {/* Divider */}
      <div className="my-10 h-px bg-border" />

      {/* Principles */}
      <Reveal>
        <h2 id="principles" className="text-2xl text-primary">Principles</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          Keep it simple. Prefer predictable inputs and outputs. Make repeatable workflows easy to run
          and easy to share. Let people bring their own services when it improves quality.
        </p>
      </Reveal>

      {/* Divider */}
      <div className="my-10 h-px bg-border" />

      {/* Quick example */}
      <Reveal>
        <h2 id="example" className="text-2xl text-primary">A tiny example</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          Convert markdown to PDF with a known‑good tool. Inputs go in, outputs come out—every time.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <pre className="mt-4 overflow-x-auto rounded-md border border-border p-3 text-sm text-muted">
{`# place files in ./input/md-to-pdf
# run the tool via the CLI
# outputs written to ./output/md-to-pdf

toolipie run md-to-pdf --input ./input/md-to-pdf --output ./output/md-to-pdf`}
        </pre>
      </Reveal>

      {/* Divider */}
      <div className="my-10 h-px bg-border" />

      {/* Who it's for */}
      <Reveal>
        <h2 id="who" className="text-2xl text-primary">Who it’s for</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          Anyone who finds themselves rewriting little scripts for repeatable tasks—engineers,
          researchers, indie builders. If the code worked for me, it should work for you too. That’s
          why tools are modular and contributions are welcome.
        </p>
      </Reveal>

      {/* CTA */}
      <Reveal delay={150}>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contribute" className="rounded-md border border-border px-3 py-2 text-primary">
            Contribute a tool
          </Link>
          <Link href="/about" className="rounded-md border border-border px-3 py-2 text-muted hover:text-primary">
            About the project
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
// TODO: implement landing page
