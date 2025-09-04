import 'styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="light">
      <body>{children}</body>
    </html>
  );
}
// TODO: implement root layout importing globals.css, Navbar, Footer
