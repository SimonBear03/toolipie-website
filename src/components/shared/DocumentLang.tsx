'use client';

import { useEffect } from 'react';
import type { Lang } from '@/lib/lang';

export default function DocumentLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
