import 'styles/globals.css';
import Navbar from 'components/shared/Navbar';
import Footer from 'components/shared/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toolipie — Task-focused micro-tools CLI',
  description:
    'Toolipie is a task-focused CLI that runs small, reusable tools. Simple, reliable, and extensible—use local code or bring your own APIs when it helps.',
  metadataBase: new URL('https://toolipie.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="dark" lang="en">
      <body className="min-h-screen bg-bg text-fg flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// TODO: implement root layout importing globals.css, Navbar, Footer
