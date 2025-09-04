'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Scene = 'docx' | 'pdfpng';

type ProgressLine = {
  label: string; // full label including counts, e.g., "DOCX 1/3 notes.md" or "PDF→PNG annual 2/5" or "TOTAL 3/8"
  current: number;
  total: number;
};

const BAR_WIDTH = 24;

function makeBar(current: number, total: number): string {
  const fraction = total > 0 ? Math.min(1, Math.max(0, current / total)) : 0;
  const blocks = Math.round(fraction * BAR_WIDTH);
  const filled = '█'.repeat(blocks);
  const empty = '░'.repeat(BAR_WIDTH - blocks);
  return `|${filled}${empty}|`;
}

export default function TerminalDemo() {
  // Script-like configs derived from real tools
  const docxFiles = useMemo(() => ['notes.md', 'meeting.md', 'summary.md'], []);
  const pdfJobs = useMemo(
    () => [
      { name: 'annual', pages: 5 },
      { name: 'report', pages: 3 },
      { name: 'budget', pages: 4 }, // ensure 3 per-PDF rows + TOTAL = 4 rows
    ],
    []
  );

  const [scene, setScene] = useState<Scene>('docx');
  const [lines, setLines] = useState<React.ReactNode[]>([]);
  const [progress, setProgress] = useState<ProgressLine[]>([]);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const rafRef = useRef<number | null>(null);
  const timers = useRef<number[]>([]);
  const [labelWidthCh, setLabelWidthCh] = useState<number>(28);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');
  const [visibleRowCount, setVisibleRowCount] = useState<number>(0);
  const pdfProcessedEmittedRef = useRef<Set<number>>(new Set());
  const [showTypingLine, setShowTypingLine] = useState<boolean>(false);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      timers.current.forEach(t => window.clearTimeout(t));
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Helper to push a new text line
  const pushLine = (node: React.ReactNode) => {
    setLines(prev => [...prev, node]);
  };

  // Recompute label width (in "ch") to align bar starts/ends
  useEffect(() => {
    if (!progress || progress.length === 0) return;
    const maxLen = progress.reduce((m, p) => Math.max(m, (p.label || '').length), 0);
    const clamped = Math.max(20, Math.min(40, maxLen + 2));
    setLabelWidthCh(clamped);
  }, [progress]);

  const formatCount = (p: ProgressLine): string => {
    if (p.label.startsWith('MD → DOCX ')) {
      return `${p.current >= p.total ? 1 : 0}/1`;
    }
    return `${p.current}/${p.total}`;
  };

  const typeCommand = (
    full: string,
    onDone: () => void,
    pauseAfter?: string,
    pauseMs: number = 2000,
    preDelayMs: number = 1000
  ) => {
    setIsTyping(true);
    setShowTypingLine(true);
    setTypedText('');
    let i = 0;
    const pauseIndex = pauseAfter ? full.indexOf(pauseAfter) + pauseAfter.length : -1;
    let hasPaused = false;
    const step = () => {
      i += 1;
      setTypedText(full.slice(0, i));
      if (i < full.length) {
        if (!hasPaused && pauseIndex > 0 && i === pauseIndex) {
          hasPaused = true;
          setIsWaiting(true);
          rafRef.current = window.setTimeout(() => {
            setIsWaiting(false);
            step();
          }, pauseMs) as unknown as number;
        } else {
          rafRef.current = window.setTimeout(step, 26) as unknown as number;
        }
      } else {
        // finalize: add full line and proceed
        setIsTyping(false);
        pushLine(
          <div key={`cmd-${full}`}>
            <span className="text-muted">$ </span>
            <span className="text-fg">{full}</span>
          </div>
        );
        // Hide the typing prompt and clear its text to avoid duplicate lines
        setShowTypingLine(false);
        setTypedText('');
        const t = window.setTimeout(onDone, 180);
        timers.current.push(t);
      }
    };
    const t0 = window.setTimeout(() => {
      setIsWaiting(false);
      step();
    }, preDelayMs);
    setIsWaiting(true);
    timers.current.push(t0);
  };

  const scheduleRowReveal = (rows: number) => {
    setVisibleRowCount(0);
    for (let i = 0; i < rows; i += 1) {
      const t = window.setTimeout(() => {
        setVisibleRowCount(prev => (prev < i + 1 ? i + 1 : prev));
      }, 100 + i * 70);
      timers.current.push(t);
    }
  };

  // Scene transition with smooth fade
  const transitionTo = (next: Scene, delayBefore = 300) => {
    setFade('out');
    const t = window.setTimeout(() => {
      setLines([]);
      setProgress([]);
      setScene(next);
      setFade('in');
    }, delayBefore);
    timers.current.push(t);
  };

  // DOCX scene: sequential per-file progress matching md_to_docx pattern
  const runDocxScene = () => {
    setLines([]);
    setProgress([]);
    const cmd = 'toolipie md-to-docx --input ./input/md-to-docx --output ./output/md-to-docx';

    const startProgress = () => {
      // Initialize tasks to mirror PDF style: per-file lines + TOTAL
      const totalFiles = docxFiles.length;
      const taskStates: ProgressLine[] = docxFiles.map(name => ({
        label: `MD → DOCX ${name}`,
        current: 0,
        total: 10, // smooth visual steps; count column shows 0/1 → 1/1
      }));
      const overall: ProgressLine = { label: `TOTAL`, current: 0, total: totalFiles };
      setProgress([...taskStates, overall]);
      scheduleRowReveal(taskStates.length + 1);

      // Animate each task one by one
      const animateTask = (index: number) => {
        if (index >= taskStates.length) {
          // end scene → transition
          const t = window.setTimeout(() => transitionTo('pdfpng', 350), 600);
          timers.current.push(t);
          return;
        }
        let step = 0;
        const tick = () => {
          step += 1;
          setProgress(prev => {
            const next = [...prev];
            // Update this file's bar only; keep label constant to avoid width shifts
            const per = next[index];
            const perNewCurrent = Math.min(per.total, step);
            next[index] = {
              ...per,
              current: perNewCurrent,
            };
            return next;
          });
          if (step < taskStates[index].total) {
            rafRef.current = window.setTimeout(tick, 140) as unknown as number;
          } else {
            // Completed → output a write line similar to real run and bump TOTAL
            pushLine(
              <div key={`ok-docx-${index}`}>
                <span className="text-fg">✓ Processed </span>
                <span className="text-muted">./output/md-to-docx/{docxFiles[index].replace('.md', '.docx')}</span>
              </div>
            );
            setProgress(prev => {
              const next = [...prev];
              const last = next.length - 1;
              const newCount = Math.min(next[last].total, next[last].current + 1);
              next[last] = { ...next[last], current: newCount };
              return next;
            });
            const t = window.setTimeout(() => animateTask(index + 1), 260);
            timers.current.push(t);
          }
        };
        tick();
      };
      const t = window.setTimeout(() => animateTask(0), 200);
      timers.current.push(t);
    };

    typeCommand(cmd, startProgress, 'toolipie ', 2100, 2100);
  };

  // PDF→PNG scene: per-PDF progress plus TOTAL
  const runPdfPngScene = () => {
    setLines([]);
    setProgress([]);
    const cmd = 'toolipie pdf-to-png --input ./input/pdf-to-png --output ./output/pdf-to-png';

    const startProgress = () => {
      const totals = pdfJobs.map(j => j.pages);
      const totalAll = totals.reduce((a, b) => a + b, 0);
      let overallDone = 0;
      pdfProcessedEmittedRef.current = new Set();

      // Initialize per-PDF lines with counts in a separate column and a TOTAL line
      const perPdf: ProgressLine[] = pdfJobs.map(j => ({
        label: `PDF → PNG ${j.name}`,
        current: 0,
        total: j.pages,
      }));
      const overall: ProgressLine = { label: `TOTAL`, current: 0, total: totalAll };
      setProgress([...perPdf, overall]);
      scheduleRowReveal(perPdf.length + 1);

      // Animate pages across PDFs
      const updates: Array<{ pdfIdx: number } & { page: number }> = [];
      pdfJobs.forEach((j, idx) => {
        for (let p = 1; p <= j.pages; p += 1) updates.push({ pdfIdx: idx, page: p });
      });

      let i = 0;
      const tick = () => {
        if (i >= updates.length) {
          const t = window.setTimeout(() => transitionTo('docx', 350), 500);
          timers.current.push(t);
          return;
        }
        const { pdfIdx } = updates[i];
        overallDone += 1;
        let didComplete = false;
        setProgress(prev => {
          const next = [...prev];
          // per-PDF line at index pdfIdx
          const per = next[pdfIdx];
          const perNewCurrent = Math.min(per.total, per.current + 1);
          if (perNewCurrent >= per.total && per.current < per.total) {
            didComplete = true;
          }
          next[pdfIdx] = {
            ...per,
            current: perNewCurrent,
          };
          // overall is last entry
          const last = next.length - 1;
          const overallNewCurrent = Math.min(totalAll, overallDone);
          next[last] = { ...next[last], current: overallNewCurrent };
          return next;
        });
        // If this PDF just completed and we haven't emitted its processed line, do it now
        if (didComplete && !pdfProcessedEmittedRef.current.has(pdfIdx)) {
          pdfProcessedEmittedRef.current.add(pdfIdx);
          pushLine(
            <div key={`ok-pdf-${pdfJobs[pdfIdx].name}`}>
              <span className="text-fg">✓ Processed </span>
              <span className="text-muted">./output/pdf-to-png/{pdfJobs[pdfIdx].name}/</span>
            </div>
          );
        }
        i += 1;
        rafRef.current = window.setTimeout(tick, 240) as unknown as number;
      };
      const t = window.setTimeout(tick, 450);
      timers.current.push(t);
    };

    typeCommand(cmd, startProgress, 'toolipie ', 2100, 2100);
  };

  // Drive scenes
  useEffect(() => {
    if (scene === 'docx') runDocxScene();
    if (scene === 'pdfpng') runPdfPngScene();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene]);

  return (
    <div className="rounded-md border border-border terminal-frame bg-bg shadow-sm overflow-hidden flex flex-col">
      {/* Terminal header */}
      <div className="border-b border-border terminal-divider px-3 py-1 text-base text-muted whitespace-nowrap flex items-center gap-2">
        <div className="flex items-center gap-1 mr-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#ef4444' }} />
          <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
          <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#10b981' }} />
        </div>
        <span className="text-primary font-semibold">toolipie</span>
        <span> — terminal</span>
      </div>

      {/* Content: fixed height to prevent page layout shift */}
      <div
        className={
          `p-3 font-mono text-sm text-muted whitespace-pre h-44 overflow-hidden terminal-transition ${
            fade === 'out' ? 'terminal-fade-out' : 'terminal-fade-in'
          }`
        }
      >
        {/* printed lines */}
        {lines.map((node, idx) => (
          <div key={idx}>{node}</div>
        ))}
        {/* typing line (only during typing) */}
        {showTypingLine && (
          <div>
            <span className="text-muted">$ </span>
            <span className="text-fg">{typedText}</span>
            <span className={`caret ${isWaiting ? 'caret-blink' : ''}`} />
          </div>
        )}
      </div>

      {/* Footer: stationary progress bars area with fixed height for 4 rows */}
      <div className={`border-t border-border terminal-divider px-4 pb-2 pt-1 font-mono text-sm text-muted h-24 overflow-hidden terminal-transition ${fade === 'out' ? 'terminal-fade-out' : 'terminal-fade-in'}`}>
        {progress.length > 0 && (
          <div className="mt-0.5 space-y-1 leading-4">
            {progress.map((p, idx) => (
              <div
                key={`p-${idx}`}
                className={`grid items-baseline transform-gpu transition-all duration-300 ${
                  idx < visibleRowCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                }`}
                style={{ gridTemplateColumns: `${labelWidthCh}ch 7ch 1fr` }}
              >
                <span className="text-fg truncate">{p.label}</span>
                <span className="text-muted text-right pr-2">{formatCount(p)}</span>
                <span className="text-muted whitespace-pre">{makeBar(p.current, p.total)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
