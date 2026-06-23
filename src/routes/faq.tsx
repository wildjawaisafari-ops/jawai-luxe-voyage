import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import { FAQList } from "./index";
import { faqs } from "../lib/site-data";
import camp from "../assets/camp.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Wild Jawai Safari" },
      { name: "description", content: "Everything you need to know about safaris in Jawai — season, sightings, accommodation, travel and more." },
      { property: "og:title", content: "FAQ — Wild Jawai Safari" },
      { property: "og:description", content: "Everything you need to know before your safari in Jawai." },
      { property: "og:image", content: camp },
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
