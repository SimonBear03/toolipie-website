import { SUPPORTED_LANGS } from '@/lib/lang';

export function generateLangStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}
