import Reveal from 'components/shared/Reveal';

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl md:text-4xl text-primary leading-tight">How it works</h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          Toolipie is a wrapper around small, task‑focused tools. Each tool lives in a simple
          folder, follows a tiny contract, and runs the same way every time.
        </p>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Plugin anatomy</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm md:text-base text-muted">
          A tool is a folder with a manifest describing inputs/outputs/params and an entry file that
          does the work. Keep it focused, deterministic, and easy to reuse.
        </p>
      </Reveal>
      <Reveal delay={150}>
        <pre className="mt-3 overflow-x-auto rounded-md border border-border p-3 text-sm text-muted">
{`my-tool/
  manifest.json     # name, version, inputs, outputs, params
  run.py            # or run.js — entry point
  assets/           # optional templates/styles
  README.md         # short usage notes
`}
        </pre>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Run flow</h2>
      </Reveal>
      <Reveal delay={100}>
        <ol className="mt-2 list-decimal pl-5 text-sm text-muted">
          <li>Place inputs in the expected path</li>
          <li>Run the tool via the CLI with clear parameters</li>
          <li>Get deterministic outputs you can reuse across projects</li>
        </ol>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Bring your own services</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm md:text-base text-muted">
          If using an API—like AI—gives you a better result, bring your own keys and call it from the
          tool. You keep control; the format keeps it predictable.
        </p>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <p className="text-sm text-muted">
          Prefer small pieces that do one job well. Reuse beats rewriting.
        </p>
      </Reveal>
    </section>
  );
}
