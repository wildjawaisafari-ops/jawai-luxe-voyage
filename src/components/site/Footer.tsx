import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle, Sunrise } from "lucide-react";
import { WHATSAPP_DISPLAY, CONTACT_EMAIL, whatsappUrl } from "../../lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-28 surface-forest overflow-hidden">
      {/* Top luminous divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 0%, oklch(0.72 0.115 78 / 0.16), transparent 65%)",
        }}
      />

      {/* CTA strip */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16">
        <div className="rounded-3xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
             style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(0.72 0.115 78 / 0.28)" }}>
          <div className="max-w-xl">
            <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Plan Your Journey</div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl leading-tight hero-fg">
              Ready to walk among <span className="italic text-gradient-gold">leopards</span>?
            </h3>
            <p className="mt-2 text-sm hero-fg-muted">
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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-12 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full"
                  style={{ background: "oklch(0.72 0.115 78 / 0.18)", border: "1px solid oklch(0.72 0.115 78 / 0.45)" }}>
              <span className="font-display text-xl leading-none" style={{ color: "var(--gold-soft)" }}>W</span>
            </span>
            <div>
              <div className="font-display text-xl tracking-wide hero-fg">Wild Jawai</div>
              <div className="eyebrow text-[0.55rem]" style={{ color: "var(--gold-soft)" }}>Luxury Safari · Rajasthan</div>
            </div>
          </div>
          <p className="mt-6 text-sm hero-fg-muted leading-relaxed max-w-sm">
            Curated luxury safaris through the granite kingdoms of Jawai —
            home to wild leopards, sacred lakes and the proud Rabari people.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
              { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
              { href: whatsappUrl("Hello Wild Jawai Safari"), label: "WhatsApp", Icon: MessageCircle },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full transition-all hover:scale-110"
                style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(0.72 0.115 78 / 0.35)" }}
              >
                <Icon className="h-4 w-4" style={{ color: "var(--gold-soft)" }} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="eyebrow mb-5" style={{ color: "var(--gold-soft)" }}>Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/packages", label: "Safari Zones" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About Jawai" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hero-fg-muted hover:text-[color:var(--gold-soft)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5" style={{ color: "var(--gold-soft)" }}>Reach Us</h4>
          <ul className="space-y-4 text-sm hero-fg-muted">
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
                    style={{ background: "oklch(0.72 0.115 78 / 0.16)", border: "1px solid oklch(0.72 0.115 78 / 0.32)" }}>
                <MapPin className="h-4 w-4" style={{ color: "var(--gold-soft)" }} />
              </span>
              <span className="leading-relaxed">Jawai Bandh, Pali district<br/>Rajasthan 306126</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
                    style={{ background: "oklch(0.72 0.115 78 / 0.16)", border: "1px solid oklch(0.72 0.115 78 / 0.32)" }}>
                <Phone className="h-4 w-4" style={{ color: "var(--gold-soft)" }} />
              </span>
              <a href="tel:+919256928266" className="hover:text-[color:var(--gold-soft)] transition-colors">{WHATSAPP_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
                    style={{ background: "oklch(0.72 0.115 78 / 0.16)", border: "1px solid oklch(0.72 0.115 78 / 0.32)" }}>
                <Mail className="h-4 w-4" style={{ color: "var(--gold-soft)" }} />
              </span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[color:var(--gold-soft)] transition-colors break-all">{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5" style={{ color: "var(--gold-soft)" }}>Safari Hours</h4>
          <div className="rounded-2xl p-5"
               style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.08)" }}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full"
                    style={{ background: "oklch(0.72 0.115 78 / 0.18)", border: "1px solid oklch(0.72 0.115 78 / 0.35)" }}>
                <Sunrise className="h-4 w-4" style={{ color: "var(--gold-soft)" }} />
              </span>
              <div>
                <div className="text-sm font-medium hero-fg">Sunrise & Sunset Drives</div>
                <div className="text-xs hero-fg-muted mt-0.5">Season: October — April</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t text-xs hero-fg-muted leading-relaxed"
                 style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
              Complimentary pickup & drop within 10 km. Additional charges apply beyond 10 km.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs hero-fg-muted">
          <p>© {new Date().getFullYear()} Wild Jawai Safari. All rights reserved.</p>
          <p className="font-display tracking-[0.3em] text-sm" style={{ color: "var(--gold-soft)" }}>
            Tread softly · Travel wild
          </p>
        </div>
      </div>
    </footer>
  );
}
