import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import { PackageCard } from "../components/site/PackageCard";
import { packages } from "../lib/site-data";
import heroLeopard from "../assets/hero-leopard.jpg";
import leopardCub from "../assets/leopard-cub.jpg";
import landscape from "../assets/landscape.jpg";

const imageMap: Record<string, string> = {
  "hero-leopard": heroLeopard,
  "leopard-cub": leopardCub,
  landscape,
};

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Safari Packages — Wild Jawai Safari" },
      { name: "description", content: "Private luxury safari itineraries in Jawai. From two-night leopard trails to seven-night photographer's residencies." },
      { property: "og:title", content: "Safari Packages — Wild Jawai Safari" },
      { property: "og:description", content: "Curated luxury safari itineraries through the granite hills of Jawai." },
      { property: "og:image", content: heroLeopard },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curated Safari Journeys"
        title={<>The <span className="italic text-gradient-gold">Collection</span></>}
        subtitle="Three signature journeys. Each privately guided, capped to intimate groups, and woven around the rhythms of the wild."
        image={leopardCub}
      />
      <Section>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.slug} {...p} image={imageMap[p.image] ?? heroLeopard} />
          ))}
        </div>
        <div className="mt-20 glass rounded-3xl p-10 sm:p-14 text-center">
          <span className="eyebrow">Bespoke</span>
          <h3 className="mt-4 font-display text-3xl sm:text-4xl">
            Something more <span className="italic text-gradient-gold">tailored</span>?
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Honeymoons, milestone birthdays, conservation expeditions, family reunions —
            we craft every detail privately. Speak with our journey designer.
          </p>
          <a href="/contact" className="btn-gold btn-gold-hover mt-7">Design my safari</a>
        </div>
      </Section>
    </>
  );
}
