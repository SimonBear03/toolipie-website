import 'styles/globals.css';
import type { Metadata } from 'next';
import { en } from '@/i18n/en';

export const metadata: Metadata = {
  title: en.site.metadata.title,
  description: en.site.metadata.description,
  metadataBase: new URL('https://toolipie.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning data-theme="dark" lang="en">
      <body suppressHydrationWarning className="min-h-screen bg-bg text-fg flex flex-col">
        {children}
      </body>
    </html>
  );
}
 
