import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full glass-gold">
              <span className="font-display text-gold leading-none">W</span>
            </span>
            <div>
              <div className="font-display text-lg">Wild Jawai</div>
              <div className="eyebrow text-[0.55rem]">Safari</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Curated luxury safaris through the granite kingdoms of Jawai —
            home to wild leopards, sacred lakes and the proud Rabari people.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/packages" className="text-foreground/80 hover:text-gold">Safari Packages</Link></li>
            <li><Link to="/gallery" className="text-foreground/80 hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="text-foreground/80 hover:text-gold">About Jawai</Link></li>
            <li><Link to="/faq" className="text-foreground/80 hover:text-gold">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Jawai Bandh, Pali, Rajasthan 306126</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> +91 98765 43210</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /> hello@wildjawaisafari.com</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full glass hover:glass-gold transition-all">
              <Instagram className="h-4 w-4 text-gold" />
            </a>
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full glass hover:glass-gold transition-all">
              <Facebook className="h-4 w-4 text-gold" />
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Operating Oct – April<br/>Sunrise & sunset drives</p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Wild Jawai Safari. All rights reserved.</p>
          <p className="font-display tracking-widest text-gold/70">Tread softly. Travel wild.</p>
        </div>
      </div>
    </footer>
  );
}
