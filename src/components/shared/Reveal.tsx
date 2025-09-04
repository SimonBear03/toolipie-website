'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  group?: string; // optional group key to sync reveal start
};

// Group synchronization (module-level singletons)
const groupVisible = new Map<string, boolean>();
const groupSubscribers = new Map<string, Set<() => void>>();

function subscribeToGroup(group: string, cb: () => void) {
  if (!groupSubscribers.has(group)) groupSubscribers.set(group, new Set());
  groupSubscribers.get(group)!.add(cb);
  return () => {
    groupSubscribers.get(group)!.delete(cb);
  };
}

function triggerGroup(group: string) {
  if (groupVisible.get(group)) return;
  groupVisible.set(group, true);
  const subs = groupSubscribers.get(group);
  if (subs) subs.forEach(fn => fn());
}

export default function Reveal({ children, delay = 0, className, group }: RevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // If grouped and already visible, reveal immediately
    if (group && groupVisible.get(group)) {
      setIsVisible(true);
      return;
    }

    const unsub = group
      ? subscribeToGroup(group, () => setIsVisible(true))
      : undefined;

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const timer = window.setTimeout(() => {
            if (group) {
              triggerGroup(group);
            } else {
              setIsVisible(true);
            }
          }, delay);
          observer.unobserve(entry.target);
          return () => window.clearTimeout(timer);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (unsub) unsub();
    };
  }, [delay, group]);

  return (
    <div ref={containerRef} className={`${className ? className + ' ' : ''}reveal ${isVisible ? 'reveal-visible' : ''}`}>
      {children}
    </div>
  );
}
