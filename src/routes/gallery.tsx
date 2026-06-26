import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import heroLeopard from "../assets/hero-leopard.jpg";
import leopardCub from "../assets/leopard-cub.jpg";
import landscape from "../assets/landscape.jpg";
import crocodile from "../assets/crocodile.jpg";
import rabari from "../assets/rabari.jpg";
import birds from "../assets/birds.jpg";
import camp from "../assets/camp.jpg";
import jeep from "../assets/safari-jeep.jpg";

const images = [
  { src: heroLeopard, alt: "Leopard at golden hour", w: "md:col-span-2 md:row-span-2" },
  { src: rabari, alt: "Rabari shepherd at sunset" },
  { src: camp, alt: "Luxury tent under starry sky" },
  { src: birds, alt: "Flamingos on Jawai lake" },
  { src: leopardCub, alt: "Leopard cub in granite caves", w: "md:row-span-2" },
  { src: crocodile, alt: "Mugger crocodile at dusk" },
  { src: jeep, alt: "Safari jeep at sunset" },
  { src: landscape, alt: "Jawai granite landscape", w: "md:col-span-2" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Jawai Leopard Safari Gallery — Photos of Wildlife & Landscape | Wild Jawai Safari" },
      { name: "description", content: "Photos from Wild Jawai Safari — wild leopards, flamingos, crocodiles, granite hills and the Rabari shepherds of Jawai, Rajasthan." },
      { property: "og:title", content: "Jawai Leopard Safari Gallery — Wild Jawai Safari" },
      { property: "og:description", content: "A visual journey through the wild leopards and granite hills of Jawai." },
      { property: "og:url", content: "https://jawai-luxe-voyage.lovable.app/gallery" },
      { property: "og:image", content: heroLeopard },
    ],
    links: [{ rel: "canonical", href: "https://jawai-luxe-voyage.lovable.app/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Gallery"
        title={<>Stories told in <span className="italic text-gradient-gold">light</span></>}
        subtitle="Photographs from our seasons in the field — leopards, landscapes, lakes and the gentle people who share them."
        image={leopardCub}
      />
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {images.map((g, i) => (
            <figure key={i} className={`relative overflow-hidden rounded-2xl group ${g.w ?? ""}`}>
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-gold-soft">{g.alt}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
