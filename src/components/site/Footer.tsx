import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle, Sunrise } from "lucide-react";
import { WHATSAPP_DISPLAY, CONTACT_EMAIL, whatsappUrl } from "../../lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Top luminous divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.78 0.13 85 / 0.10), transparent 60%), radial-gradient(ellipse 50% 50% at 10% 100%, oklch(0.78 0.13 85 / 0.06), transparent 70%)",
        }}
      />

      {/* CTA strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16">
        <div className="glass-gold rounded-3xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <div className="eyebrow">Plan Your Journey</div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl leading-tight">
              Ready to walk among <span className="italic text-gradient-gold">leopards</span>?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Talk to our journey designers on WhatsApp — we reply within minutes.
            </p>
          </div>
          <a
            href={whatsappUrl("Hello Wild Jawai Safari, I would like to plan a safari.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-gold-hover whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-12 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full glass-gold">
              <span className="font-display text-gold text-xl leading-none">W</span>
            </span>
            <div>
              <div className="font-display text-xl tracking-wide">Wild Jawai</div>
              <div className="eyebrow text-[0.55rem]">Luxury Safari · Rajasthan</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-foreground/75 leading-relaxed max-w-sm">
            Curated luxury safaris through the granite kingdoms of Jawai —
            home to wild leopards, sacred lakes and the proud Rabari people.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full glass hover:glass-gold transition-all"
            >
              <Instagram className="h-4 w-4 text-gold" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full glass hover:glass-gold transition-all"
            >
              <Facebook className="h-4 w-4 text-gold" />
            </a>
            <a
              href={whatsappUrl("Hello Wild Jawai Safari")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full glass hover:glass-gold transition-all"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="eyebrow mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/packages" className="text-foreground/80 hover:text-gold transition-colors">Safari Zones</Link></li>
            <li><Link to="/gallery" className="text-foreground/80 hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="text-foreground/80 hover:text-gold transition-colors">About Jawai</Link></li>
            <li><Link to="/faq" className="text-foreground/80 hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5">Reach Us</h4>
          <ul className="space-y-4 text-sm text-foreground/85">
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass-gold">
                <MapPin className="h-4 w-4 text-gold" />
              </span>
              <span className="leading-relaxed">Jawai Bandh, Pali district<br/>Rajasthan 306126</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass-gold">
                <Phone className="h-4 w-4 text-gold" />
              </span>
              <a href="tel:+919256928266" className="hover:text-gold transition-colors">{WHATSAPP_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass-gold">
                <Mail className="h-4 w-4 text-gold" />
              </span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold transition-colors break-all">{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5">Safari Hours</h4>
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full glass-gold">
                <Sunrise className="h-4 w-4 text-gold" />
              </span>
              <div>
                <div className="text-sm font-medium">Sunrise & Sunset Drives</div>
                <div className="text-xs text-muted-foreground mt-0.5">Season: October — April</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-muted-foreground leading-relaxed">
              Complimentary pickup & drop within 10 km. Additional charges apply beyond 10 km.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Wild Jawai Safari. All rights reserved.</p>
          <p className="font-display tracking-[0.3em] text-gold/80 text-sm">Tread softly · Travel wild</p>
        </div>
      </div>
    </footer>
  );
}
