import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import { FAQList } from "./index";
import { useFaqs } from "../lib/public-data";
import { faqs as fallbackFaqs } from "../lib/site-data";
import photoHero from "../assets/photo-hero.jpg";

const SITE_URL = "https://jawai-safari.lovable.app";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Jawai Safari FAQ — Booking, Pricing & Sightings | Wild Jawai Safari" },
      { name: "description", content: "Wild Jawai Safari FAQ — booking, pricing (₹3,500 with Hi-Tea / ₹3,000 without), best season, leopard sighting rates, pickup & drop, and hotel booking." },
      { property: "og:title", content: "Jawai Safari FAQ — Wild Jawai Safari" },
      { property: "og:description", content: "Everything you need to know before booking a leopard safari in Jawai, Rajasthan." },
      { property: "og:url", content: `${SITE_URL}/faq` },
      { property: "og:image", content: photoHero },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: fallbackFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const { data } = useFaqs();
  const items = data && data.length > 0
    ? data.map((f) => ({ q: f.question, a: f.answer }))
    : fallbackFaqs.map((f) => ({ q: f.q, a: f.a }));

  return (
    <>
      <PageHeader
        eyebrow="Before You Travel"
        title={<>The <span className="italic text-gradient-gold">essentials</span></>}
        subtitle="Common questions answered. If something else is on your mind, our concierge replies within 24 hours."
        image={photoHero}
      />
      <Section>
        <div className="max-w-3xl mx-auto">
          <FAQList items={items} />
        </div>
      </Section>
    </>
  );
}
