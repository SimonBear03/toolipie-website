import 'styles/globals.css';
import Navbar from 'components/shared/Navbar';
import Footer from 'components/shared/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="light">
      <body className="min-h-screen bg-bg text-fg flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// TODO: implement root layout importing globals.css, Navbar, Footer
