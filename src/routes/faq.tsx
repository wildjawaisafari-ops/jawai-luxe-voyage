import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import { FAQList } from "./index";
import { faqs } from "../lib/site-data";
import camp from "../assets/camp.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Jawai Safari FAQ — Booking, Pricing & Sightings | Wild Jawai Safari" },
      { name: "description", content: "Wild Jawai Safari FAQ — booking, pricing (₹3,500 with Hi-Tea / ₹3,000 without), best season, leopard sighting rates, pickup & drop, and hotel booking." },
      { property: "og:title", content: "Jawai Safari FAQ — Wild Jawai Safari" },
      { property: "og:description", content: "Everything you need to know before booking a leopard safari in Jawai, Rajasthan." },
      { property: "og:url", content: "https://jawai-luxe-voyage.lovable.app/faq" },
      { property: "og:image", content: camp },
    ],
    links: [{ rel: "canonical", href: "https://jawai-luxe-voyage.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
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
  return (
    <>
      <PageHeader
        eyebrow="Before You Travel"
        title={<>The <span className="italic text-gradient-gold">essentials</span></>}
        subtitle="Common questions answered. If something else is on your mind, our concierge replies within 24 hours."
        image={camp}
      />
      <Section>
        <div className="max-w-3xl mx-auto">
          <FAQList items={faqs} />
        </div>
      </Section>
    </>
  );
}
