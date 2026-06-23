import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Safari Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Jawai" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent border border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-full glass-gold">
              <span className="font-display text-gold text-lg leading-none">W</span>
            </span>
            <div className="leading-tight">
              <div className="font-display text-base sm:text-lg tracking-wide">Wild Jawai</div>
              <div className="eyebrow text-[0.55rem] tracking-[0.3em]">Safari</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/80 hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-gold btn-gold-hover text-sm">
              Book Safari
            </Link>
          </div>

          <button
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5 text-gold" /> : <Menu className="h-5 w-5 text-gold" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-5 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm hover:bg-white/5 hover:text-gold transition-colors"
                  activeProps={{ className: "text-gold bg-white/5" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-gold btn-gold-hover text-sm mt-3"
              >
                Book Safari
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
