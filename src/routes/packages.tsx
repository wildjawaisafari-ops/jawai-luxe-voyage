import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import { SafariZoneCard } from "../components/site/PackageCard";
import { safariZones, SAFARI_PRICE_WITH_HITEA, SAFARI_PRICE_WITHOUT_HITEA } from "../lib/site-data";
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
      { title: "Jawai Safari Booking — Leopard Safari Packages & Prices | Wild Jawai Safari" },
      { name: "description", content: "Book a Jawai leopard safari: private gypsy across Sena, Jungle, Bera-Kothar-Bisalpur & Jawai Dam zones. ₹3,500 per Gypsy with Hi-Tea or ₹3,000 without." },
      { property: "og:title", content: "Jawai Safari Booking — Leopard Safari Packages" },
      { property: "og:description", content: "Private gypsy leopard safaris across Jawai's premier zones with expert local trackers." },
      { property: "og:url", content: "https://jawai-luxe-voyage.lovable.app/packages" },
      { property: "og:image", content: photoHero },
    ],
    links: [{ rel: "canonical", href: "https://jawai-luxe-voyage.lovable.app/packages" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: safariZones.map((z, i) => ({
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
        eyebrow="Jawai Safari Zones"
        title={<>Explore Jawai Safari <span className="italic text-gradient-gold">Zones</span></>}
        subtitle="Choose your preferred safari zone and enjoy a private gypsy wildlife experience with local expert drivers and trackers."
        image={photoHero}
      />
      <Section>
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
    </>
  );
}
