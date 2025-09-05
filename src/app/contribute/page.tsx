import Reveal from 'components/shared/Reveal';

export default function ContributePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl md:text-4xl text-primary leading-tight">Contribute</h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          Toolipie grows through tiny, useful tools. If you have a small task you repeatedly solve,
          consider turning it into a plugin so others can reuse it—reuse beats rewriting.
        </p>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">What makes a good tool</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm md:text-base text-muted">
          Keep it focused with clear inputs, outputs, and parameters. Make it deterministic so it
          runs the same way every time.
        </p>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Plugin structure</h2>
      </Reveal>
      <Reveal delay={100}>
        <pre className="mt-3 overflow-x-auto rounded-md border ui-outline p-3 text-sm text-muted">
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
        <h2 className="text-xl text-primary">Contribution tips</h2>
      </Reveal>
      <Reveal delay={100}>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted">
          <li>Follow the plugin folder format and keep inputs/outputs clear</li>
          <li>Prefer deterministic outputs; include simple fixtures</li>
          <li>Open an issue or PR to discuss ideas and improvements</li>
        </ul>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <p className="text-sm text-muted">Thank you for helping keep useful tools in one place.</p>
      </Reveal>
    </section>
  );
}
