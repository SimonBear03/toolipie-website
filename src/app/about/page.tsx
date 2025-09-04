import Reveal from 'components/shared/Reveal';

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl md:text-4xl text-primary leading-tight">About Toolipie</h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          Toolipie began as a way to stop rewriting the same tiny scripts for repeatable tasks. It’s
          a task‑focused CLI where small, reusable tools live in a simple, predictable format.
        </p>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Why it exists</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm md:text-base text-muted">
          Keeping trustworthy solutions in one place means you can run them again—across projects and
          across time—without hunting for old snippets. Reuse beats rewriting.
        </p>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Pragmatic by design</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm md:text-base text-muted">
          Use whatever completes the task best. If an API—or AI—improves quality, use it. If local
          code is fastest, use that. The tools are modular; the wrapper makes them predictable.
        </p>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <p className="text-sm md:text-base text-muted">
          Open source and community‑friendly—anyone can contribute a small tool that does one job
          well. If it worked for me, it can work for you.
        </p>
      </Reveal>
    </section>
  );
}
