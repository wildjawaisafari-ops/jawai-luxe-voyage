import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MessageCircle, Phone, ArrowRight, Star } from "lucide-react";
import { PageHeader, Section } from "../components/site/Section";
import { SafariZoneCard } from "../components/site/PackageCard";
import {
  safariZones,
  safariPackageTypes,
  SAFARI_PRICE_WITH_HITEA,
  SAFARI_PRICE_WITHOUT_HITEA,
  whatsappUrl,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  SITE_URL,
} from "../lib/site-data";
import photoHero from "../assets/photo-hero.jpg";
import photoSena from "../assets/photo-sena.jpg";
import photoJungle from "../assets/photo-jungle.jpg";
import photoBera from "../assets/photo-bera.jpg";
import photoJawaiDam from "../assets/photo-jawai-dam.jpg";

const imageMap: Record<string, string> = {
  sena: photoSena,
  jungle: photoJungle,
  bera: photoBera,
  "jawai-dam": photoJawaiDam,
};

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Jawai Safari Booking — Leopard Safari Packages, Prices & Zones | Wild Jawai Safari" },
      { name: "description", content: "Book a Jawai Safari online: morning & evening leopard safaris, private gypsy, Jawai Dam safari, village tour, bird watching & photography packages. ₹3,500 with Hi-Tea, ₹3,000 without." },
      { name: "keywords", content: "Jawai Safari Booking, Book Jawai Safari, Jawai Safari Packages, Jawai Safari Cost, Morning Leopard Safari, Evening Leopard Safari, Private Safari Jawai, Jawai Dam Safari, Village Safari Jawai, Bird Watching Jawai, Sena Safari Zone, Kothar Safari Zone, Wildlife Photography Jawai" },
      { property: "og:title", content: "Jawai Safari Booking — Packages & Prices | Wild Jawai Safari" },
      { property: "og:description", content: "Private gypsy Jawai leopard safaris across every zone. Instant WhatsApp booking, honest pricing, expert local guides." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/packages` },
      { property: "og:image", content: photoHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jawai Safari Booking — Packages & Prices" },
      { name: "twitter:description", content: "Book your Jawai Leopard Safari with expert local trackers. WhatsApp booking." },
      { name: "twitter:image", content: photoHero },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/packages` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Safari Packages", item: `${SITE_URL}/packages` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Jawai Safari Packages",
          itemListElement: [
            ...safariZones.map((z, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "TouristTrip",
                name: z.name,
                description: `${z.availability}. ${z.highlights.join(", ")}.`,
                offers: [
                  { "@type": "Offer", name: "With Hi-Tea", price: "3500", priceCurrency: "INR", description: SAFARI_PRICE_WITH_HITEA },
                  { "@type": "Offer", name: "Without Hi-Tea", price: "3000", priceCurrency: "INR", description: SAFARI_PRICE_WITHOUT_HITEA },
                ],
              },
            })),
            ...safariPackageTypes.map((p, i) => ({
              "@type": "ListItem",
              position: safariZones.length + i + 1,
              item: {
                "@type": "Service",
                serviceType: "Jawai Safari",
                name: p.name,
                description: p.desc,
                provider: { "@type": "TravelAgency", name: "Wild Jawai Safari", url: SITE_URL },
              },
            })),
          ],
        }),
      },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jawai Safari Booking"
        title={<>Jawai Safari <span className="italic text-gradient-gold">Packages</span></>}
        subtitle="Choose a Jawai safari zone or a curated tour experience. Every drive is a private gypsy with an expert local tracker — booking on WhatsApp takes under a minute."
        image={photoHero}
      />

      {/* Safari Zones */}
      <Section
        eyebrow="Safari Zones"
        title={<>Jawai Safari <span className="italic text-gradient-gold">Zones</span></>}
        subtitle="Sena, Jungle, Bera–Kothar–Bisalpur and Jawai Dam — pick the zone that suits your morning or evening drive."
        center
      >
        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {safariZones.map((z) => (
            <SafariZoneCard key={z.slug} {...z} image={imageMap[z.image] ?? photoHero} />
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 text-sm text-gold-soft">
            <span className="grid h-2 w-2 rounded-full bg-gold" />
            All safaris in Private Gypsy · ₹3,500 with Hi-Tea · ₹3,000 without Hi-Tea
          </p>
          <p className="text-xs text-muted-foreground max-w-xl">
            Complimentary pickup &amp; drop within 10 km from your hotel. Additional charges apply beyond 10 km.
          </p>
        </div>
      </Section>

      {/* Safari Tour Types */}
      <Section
        eyebrow="Safari Experiences"
        title={<>Curated Jawai Safari <span className="italic text-gradient-gold">Tours</span>.</>}
        subtitle="Morning drives, sunset safaris, full-day combos, village visits, birding and photography tours — designed around your interests."
        center
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {safariPackageTypes.map((p) => (
            <article key={p.slug} className="glass card-lift rounded-3xl p-6 flex flex-col">
              <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-gold-deep">
                <Clock className="h-3.5 w-3.5" />
                <span>{p.duration}</span>
              </div>
              <h3 className="mt-4 font-display text-xl leading-tight">{p.name}</h3>
              <p className="mt-1 text-[0.75rem] tracking-[0.14em] uppercase" style={{ color: "var(--forest-deep)" }}>{p.tagline}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={whatsappUrl(`Hello Wild Jawai Safari, I would like to book the ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold btn-gold-hover w-full text-sm"
                >
                  <MessageCircle className="h-4 w-4" /> Book Now
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="btn-ghost-gold btn-ghost-gold-hover w-full text-sm"
                >
                  <Phone className="h-4 w-4" /> Call {WHATSAPP_DISPLAY}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Booking CTA band */}
      <Section>
        <div className="glass rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-tight">
            Ready to book your <span className="italic text-gradient-gold">Jawai Safari</span>?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Instant WhatsApp confirmation. Honest pricing. Private gypsy every time.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={whatsappUrl("Hello Wild Jawai Safari, I would like to book a Jawai Safari.")} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover">
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn-ghost-gold btn-ghost-gold-hover">
              <Phone className="h-4 w-4" /> Call {WHATSAPP_DISPLAY}
            </a>
            <Link to="/faq" className="btn-ghost-gold btn-ghost-gold-hover">
              Pricing FAQ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
