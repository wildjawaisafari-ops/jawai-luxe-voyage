import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import { SafariZoneCard } from "../components/site/PackageCard";
import { safariZones } from "../lib/site-data";
import heroLeopard from "../assets/hero-leopard.jpg";
import leopardCub from "../assets/leopard-cub.jpg";
import landscape from "../assets/landscape.jpg";
import crocodile from "../assets/crocodile.jpg";
import birds from "../assets/birds.jpg";
import jeep from "../assets/safari-jeep.jpg";

const imageMap: Record<string, string> = {
  "hero-leopard": heroLeopard,
  "leopard-cub": leopardCub,
  landscape,
  crocodile,
  birds,
  "safari-jeep": jeep,
};

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Explore Jawai Safari Zones — Wild Jawai Safari" },
      { name: "description", content: "Private gypsy safaris across six Jawai zones. Sunrise and sunset drives with expert local trackers, all with Hi-Tea included." },
      { property: "og:title", content: "Explore Jawai Safari Zones — Wild Jawai Safari" },
      { property: "og:description", content: "Private gypsy safaris across six Jawai zones with expert local trackers." },
      { property: "og:image", content: heroLeopard },
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
        image={heroLeopard}
      />
      <Section>
        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {safariZones.map((z) => (
            <SafariZoneCard key={z.slug} {...z} image={imageMap[z.image] ?? heroLeopard} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 text-sm text-gold-soft">
            <span className="grid h-2 w-2 rounded-full bg-gold" />
            All safaris are conducted in Private Gypsy. Every safari includes Hi-Tea (Tea + Light Snacks).
          </p>
        </div>
      </Section>
    </>
  );
}
