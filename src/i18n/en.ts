export const en = {
  site: {
    brand: 'Toolipie',
    githubRepository: 'GitHub',
    githubAria: 'GitHub repository',
    metadata: {
      title: 'Toolipie - Task-focused micro-tools CLI',
      description:
        'Toolipie is a task-focused CLI that runs small, reusable tools. Simple, reliable, and extensible. Use local code or bring your own APIs when it helps.',
    },
  },
  nav: {
    links: {
      useCases: 'Use cases',
      howItWorks: 'How it works',
      contribute: 'Contribute',
      about: 'About',
    },
    switcher: {
      en: 'EN',
      zh: '中文',
      toEn: 'Switch to English',
      toZh: 'Switch to Chinese',
    },
    menu: {
      open: 'Open menu',
      close: 'Close menu',
    },
  },
  theme: {
    toggle: 'Toggle theme',
    light: 'Light',
    dark: 'Dark',
  },
  footer: {
    copyrightPrefix: '©',
  },
  terminal: {
    titleSuffix: 'terminal',
    processed: 'Processed',
    labels: {
      docx: 'MD -> DOCX',
      pdfPng: 'PDF -> PNG',
      total: 'TOTAL',
    },
  },
  pages: {
    home: {
      metadata: {
        title: 'Toolipie - Task-focused micro-tools CLI',
        description:
          'Toolipie is a small, open-source CLI for running simple, reusable tools and making task-focused work repeatable.',
      },
      hero: {
        headlineLine1: 'Stop rewriting tiny scripts.',
        headlineLine2: 'Make task-focused work repeatable.',
        intro:
          'Toolipie is a small, open-source CLI for running simple, reusable tools. It helps you keep the code that works in one place, then run it the same way every time. Use local code or bring your own APIs (including AI) whenever that is the simplest path to a higher-quality result.',
        primaryCta: 'How it works',
        secondaryCta: 'Explore use cases',
      },
      story: {
        heading: 'The story',
        body:
          'This began with a habit: tiny scripts for tiny jobs, scattered across projects, rewritten from memory. Toolipie is the place to keep those tasks tidy. Each tool is a small, modular plugin with clear inputs and outputs. The CLI standardizes how they run so you can depend on them today, next month, and on the next project.',
      },
      vision: {
        heading: 'Vision',
        body:
          'Toolipie focuses on results: small tools, one job, done well. If an API or AI produces the best output, use it. If local code is fastest, use that. The tools are modular; the wrapper makes them predictable.',
      },
      principles: {
        heading: 'Principles',
        body:
          'Keep it simple. Prefer predictable inputs and outputs. Make repeatable workflows easy to run and easy to share. Let people bring their own services when it improves quality.',
      },
      example: {
        heading: 'A tiny example',
        body: 'Convert markdown to PDF with a known-good tool. Inputs go in, outputs come out every time.',
        code: `# place files in ./input/md-to-pdf
# run the tool via the CLI
# outputs written to ./output/md-to-pdf

toolipie run md-to-pdf --input ./input/md-to-pdf --output ./output/md-to-pdf`,
      },
      who: {
        heading: "Who it's for",
        body:
          'Anyone who finds themselves rewriting little scripts for repeatable tasks: engineers, researchers, indie builders. If the code worked for me, it should work for you too. That is why tools are modular and contributions are welcome.',
      },
      cta: {
        contribute: 'Contribute a tool',
        about: 'About the project',
      },
    },
    useCases: {
      metadata: {
        title: 'Use cases - Toolipie',
        description:
          'Explore common Toolipie use cases for documents, text, images, OCR, utilities, and data workflows.',
      },
      heading: 'Use cases',
      intro:
        'Toolipie collects small, task-focused tools you can run the same way every time. Here are a few examples that tend to recur across projects.',
      sections: [
        {
          heading: 'Documents & text',
          body:
            'Convert between formats, clean up text, or extract structured data. Keep the transformations deterministic so you can rely on the results later.',
          bullets: [
            'markdown <-> docx/pdf',
            'extract tables from PDF -> CSV',
            'clean line breaks; normalize whitespace',
          ],
        },
        {
          heading: 'Images & OCR',
          body:
            'Standardize images for analysis or recognition, then feed them to your OCR or AI steps.',
          bullets: [
            'pdf -> png with fixed DPI',
            'png prep (deskew/denoise) for OCR',
            'generate thumbnails or contact sheets',
          ],
        },
        {
          heading: 'Utilities & data',
          body:
            'Clean, combine, and prepare data for further steps. Keep jobs small and composable.',
          bullets: [
            'split/merge large CSVs; dedupe rows',
            'batch rename/tag files',
            'AI-assisted bulk processing with your own API keys',
          ],
        },
      ],
      closing: 'Currently ships with four tools, with more on the way.',
    },
    howItWorks: {
      metadata: {
        title: 'How it works - Toolipie',
        description:
          'Learn how Toolipie wraps small task-focused tools with simple manifests, clear inputs, and repeatable outputs.',
      },
      heading: 'How it works',
      intro:
        'Toolipie is a wrapper around small, task-focused tools. Each tool lives in a simple folder, follows a tiny contract, and runs the same way every time.',
      anatomy: {
        heading: 'Plugin anatomy',
        body:
          'A tool is a folder with a manifest describing inputs/outputs/params and an entry file that does the work. Keep it focused, deterministic, and easy to reuse.',
        code: `my-tool/
  manifest.json     # name, version, inputs, outputs, params
  run.py            # or run.js - entry point
  assets/           # optional templates/styles
  README.md         # short usage notes
`,
      },
      flow: {
        heading: 'Run flow',
        steps: [
          'Place inputs in the expected path',
          'Run the tool via the CLI with clear parameters',
          'Get deterministic outputs you can reuse across projects',
        ],
      },
      services: {
        heading: 'Bring your own services',
        body:
          'If using an API, like AI, gives you a better result, bring your own keys and call it from the tool. You keep control; the format keeps it predictable.',
      },
      closing: 'Prefer small pieces that do one job well. Reuse beats rewriting.',
    },
    contribute: {
      metadata: {
        title: 'Contribute - Toolipie',
        description:
          'Contribute small, reusable Toolipie plugins with clear inputs, outputs, and deterministic behavior.',
      },
      heading: 'Contribute',
      intro:
        'Toolipie grows through tiny, useful tools. If you have a small task you repeatedly solve, consider turning it into a plugin so others can reuse it. Reuse beats rewriting.',
      goodTool: {
        heading: 'What makes a good tool',
        body:
          'Keep it focused with clear inputs, outputs, and parameters. Make it deterministic so it runs the same way every time.',
      },
      structure: {
        heading: 'Plugin structure',
        code: `my-tool/
  manifest.json     # name, version, inputs, outputs, params
  run.py            # or run.js - entry point
  assets/           # optional templates/styles
  README.md         # short usage notes
`,
      },
      tips: {
        heading: 'Contribution tips',
        bullets: [
          'Follow the plugin folder format and keep inputs/outputs clear',
          'Prefer deterministic outputs; include simple fixtures',
          'Open an issue or PR to discuss ideas and improvements',
        ],
      },
      closing: 'Thank you for helping keep useful tools in one place.',
    },
    about: {
      metadata: {
        title: 'About Toolipie',
        description:
          'Toolipie is a task-focused CLI for turning repeatable tiny scripts into reusable, predictable tools.',
      },
      heading: 'About Toolipie',
      intro:
        'Toolipie began as a way to stop rewriting the same tiny scripts for repeatable tasks. It is a task-focused CLI where small, reusable tools live in a simple, predictable format.',
      why: {
        heading: 'Why it exists',
        body:
          'Keeping trustworthy solutions in one place means you can run them again across projects and across time without hunting for old snippets. Reuse beats rewriting.',
      },
      design: {
        heading: 'Pragmatic by design',
        body:
          'Use whatever completes the task best. If an API or AI improves quality, use it. If local code is fastest, use that. The tools are modular; the wrapper makes them predictable.',
      },
      closing:
        'Open source and community-friendly. Anyone can contribute a small tool that does one job well. If it worked for me, it can work for you.',
    },
  },
};
