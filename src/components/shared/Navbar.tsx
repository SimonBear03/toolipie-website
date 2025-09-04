import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="border-b border-border ui-divider bg-bg">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-primary">Toolipie</Link>
          <div className="hidden sm:flex items-center gap-4 text-sm text-muted">
            <Link href="/use-cases" className="hover:text-primary">Use cases</Link>
            <Link href="/how-it-works" className="hover:text-primary">How it works</Link>
            <Link href="/contribute" className="hover:text-primary">Contribute</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
          </div>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
// TODO: implement shared navbar
