import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="border-b border-border bg-bg">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="text-primary">Toolipie</div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
// TODO: implement shared navbar
