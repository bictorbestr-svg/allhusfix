import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Tjänster", href: "#tjanster" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-lg font-bold tracking-wider">
          <span className="text-gold-gradient">MY CHOICE</span>{" "}
          <span className="text-foreground">BARBER</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-primary text-sm tracking-wider uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0729165697"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-sm text-xs tracking-wider uppercase font-medium hover:brightness-110 transition-all"
          >
            Boka Nu
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Meny"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary text-sm tracking-wider uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0729165697"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-sm text-xs tracking-wider uppercase font-medium text-center"
          >
            Boka Nu
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
