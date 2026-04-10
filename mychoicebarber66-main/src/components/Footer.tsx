import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading text-sm font-bold tracking-wider">
          <span className="text-gold-gradient">MY CHOICE</span>{" "}
          <span className="text-foreground">BARBER</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/my_choice_barber/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@my.choice_uppsala66"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 004.77 1.52V7.24a4.85 4.85 0 01-1.01-.55z" />
            </svg>
          </a>
        </div>

        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} My Choice Barber. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
