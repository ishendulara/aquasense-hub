import { useEffect, useState } from "react";
import { Menu, X, Waves } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#domain", label: "Domain" },
  { href: "#milestones", label: "Milestones" },
  { href: "#documents", label: "Documents" },
  { href: "#presentations", label: "Presentations" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "glass-strong py-3 shadow-elegant" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 text-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow">
            <Waves className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            SeaweedAI
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105 lg:inline-block"
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong mx-4 mt-3 rounded-2xl p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}