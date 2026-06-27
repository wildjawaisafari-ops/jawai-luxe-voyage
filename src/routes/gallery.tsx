import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import photoHero from "../assets/photo-hero.jpg";
import photoSena from "../assets/photo-sena.jpg";
import photoJungle from "../assets/photo-jungle.jpg";
import photoBera from "../assets/photo-bera.jpg";
import photoJawaiDam from "../assets/photo-jawai-dam.jpg";
import photoCrocodile from "../assets/photo-crocodile.jpg";
import photoGypsy from "../assets/photo-gypsy.jpg";
import photoHiTea from "../assets/photo-hitea.jpg";
import photoHiTeaLake from "../assets/photo-hitea-lake.jpg";
import photoBoat from "../assets/photo-boat.jpg";
import photoKameshwar from "../assets/photo-kameshwar.jpg";
import photoDevgiri from "../assets/photo-devgiri.jpg";
import photoBhadreshvar from "../assets/photo-bhadreshvar.jpg";

const images = [
  { src: photoHero, alt: "Safari gypsy at Jawai dam shore", w: "md:col-span-2 md:row-span-2" },
  { src: photoJungle, alt: "Rabari shepherd with goats at sunset" },
  { src: photoHiTeaLake, alt: "Hi-Tea by Jawai lake with mountain view" },
  { src: photoBera, alt: "Flamingos on Jawai waters" },
  { src: photoSena, alt: "Open safari gypsy on Sena granite ridges", w: "md:row-span-2" },
  { src: photoCrocodile, alt: "Mugger crocodile in Jawai dam" },
  { src: photoGypsy, alt: "Guest in safari gypsy by Jawai lake" },
  { src: photoJawaiDam, alt: "Aerial view of Jawai dam and granite islands", w: "md:col-span-2" },
  { src: photoHiTea, alt: "Hi-Tea picnic table beside Jawai dam" },
  { src: photoKameshwar, alt: "Pilgrims at Kameshwar Mahadev cave temple" },
  { src: photoDevgiri, alt: "Devgiri hilltop temple with langur monkeys" },
  { src: photoBhadreshvar, alt: "Bhadreshvar Mahadev temple in green meadow" },
  { src: photoBoat, alt: "Boat ride on Jawai dam at dusk" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Jawai Leopard Safari Gallery — Photos of Wildlife & Landscape | Wild Jawai Safari" },
      { name: "description", content: "Real HD photos from Wild Jawai Safari — Jawai dam, flamingos, crocodiles, safari gypsies, Rabari shepherds and sacred temples of Jawai, Rajasthan." },
      { property: "og:title", content: "Jawai Leopard Safari Gallery — Wild Jawai Safari" },
      { property: "og:description", content: "A visual journey through Jawai's wildlife, granite hills and sacred temples." },
      { property: "og:url", content: "https://jawai-luxe-voyage.lovable.app/gallery" },
      { property: "og:image", content: photoHero },
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
        subtitle="Photographs from our seasons in the field — wildlife, landscapes, lakes and the gentle people who share them."
        image={photoJawaiDam}
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
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-gold-soft">{g.alt}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
