import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import landscape from "../assets/landscape.jpg";
import rabari from "../assets/rabari.jpg";
import birds from "../assets/birds.jpg";
import crocodile from "../assets/crocodile.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jawai Wildlife Safari — Leopard Hills of Rajasthan | Wild Jawai Safari" },
      { name: "description", content: "About Jawai Wildlife Safari — 2,500-million-year-old granite hills, free-roaming leopards, and the Rabari people of Jawai, Rajasthan." },
      { property: "og:title", content: "About Jawai Wildlife Safari — Wild Jawai Safari" },
      { property: "og:description", content: "Ancient granite hills, wild leopards and the Rabari people of Jawai." },
      { property: "og:url", content: "https://jawai-luxe-voyage.lovable.app/about" },
      { property: "og:image", content: landscape },
    ],
    links: [{ rel: "canonical", href: "https://jawai-luxe-voyage.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Land · The People · The Cats"
        title={<>A place where <span className="italic text-gradient-gold">myth</span> still walks</>}
        subtitle="Jawai is no reserve, no park. It is a living landscape — wild leopards, sacred caves, and herders whose ancestors blessed these cats centuries ago."
        image={landscape}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
              The oldest <span className="italic text-gradient-gold">stones</span> on Earth.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The boulder hills of Jawai are part of the Aravalli range — geological elders
              of some 2,500 million years. Their caves and crevices form a natural fortress
              for one of India's densest leopard populations outside a protected reserve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At their feet lies Jawai Bandh, Rajasthan's largest dam, a critical wintering
              ground for migratory flamingos, bar-headed geese, and one of India's most
              significant mugger crocodile sanctuaries.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <img src={rabari} alt="Rabari elder" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover" />
            <img src={birds} alt="Flamingos on the lake" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover mt-10" />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The Rabari"
        title={<>A <span className="italic text-gradient-gold">pact</span> with the leopard.</>}
      >
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <img src={rabari} alt="Rabari herder" loading="lazy" className="rounded-3xl aspect-[4/5] object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              The Rabari are a pastoral tribe who have grazed these hills for over 700 years.
              Distinguished by their crimson turbans and silver jewellery, they believe their
              guardian deity, Lord Shiva, rides upon a leopard.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When the rare livestock loss does occur, the Rabari neither retaliate nor mourn —
              they accept it as offering. The result is one of the planet's most remarkable
              examples of human-predator coexistence, with virtually no recorded conflict in
              over 150 years.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Stat v="70+" l="Leopards" />
              <Stat v="150yr" l="Of coexistence" />
              <Stat v="0" l="Conflict deaths" />
              <Stat v="19 km²" l="Core habitat" />
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Beyond the Leopard"
        title={<>An <span className="italic text-gradient-gold">ecosystem</span>, not a single species.</>}
        center
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { img: crocodile, t: "Mugger crocodiles", d: "One of India's largest populations of marsh crocodiles, sunning the rocky shores of Jawai Bandh." },
            { img: birds, t: "Migratory birdlife", d: "Over 100 species — flamingos, bar-headed geese, sarus cranes — winter on these waters." },
            { img: landscape, t: "Sacred caves", d: "1,000-year-old Shiva shrines inside the boulder caves, still venerated by Rabari pilgrims." },
          ].map((c) => (
            <article key={c.t} className="glass rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="font-display text-3xl text-gradient-gold">{v}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
    </div>
  );
}
