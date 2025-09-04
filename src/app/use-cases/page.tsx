import Reveal from 'components/shared/Reveal';

export default function UseCasesPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl md:text-4xl text-primary leading-tight">Use cases</h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-3 text-sm md:text-base text-muted">
          Toolipie collects small, task‑focused tools you can run the same way every time. Here are a
          few examples that tend to recur across projects.
        </p>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Documents & text</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm md:text-base text-muted">
          Convert between formats, clean up text, or extract structured data. Keep the transformations
          deterministic so you can rely on the results later.
        </p>
      </Reveal>
      <Reveal delay={150}>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted">
          <li>markdown ↔ docx/pdf</li>
          <li>extract tables from PDF → CSV</li>
          <li>clean line breaks; normalize whitespace</li>
        </ul>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Images & OCR</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm md:text-base text-muted">
          Standardize images for analysis or recognition, then feed them to your OCR or AI steps.
        </p>
      </Reveal>
      <Reveal delay={150}>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted">
          <li>pdf → png with fixed DPI</li>
          <li>png prep (deskew/denoise) for OCR</li>
          <li>generate thumbnails or contact sheets</li>
        </ul>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <h2 className="text-xl text-primary">Utilities & data</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-2 text-sm md:text-base text-muted">
          Clean, combine, and prepare data for further steps. Keep jobs small and composable.
        </p>
      </Reveal>
      <Reveal delay={150}>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted">
          <li>split/merge large CSVs; dedupe rows</li>
          <li>batch rename/tag files</li>
          <li>AI‑assisted bulk processing with your own API keys</li>
        </ul>
      </Reveal>

      <div className="my-10 h-px bg-border" />

      <Reveal>
        <p className="text-sm text-muted">
          Currently ships with four tools, with more on the way.
        </p>
      </Reveal>
    </section>
  );
}
