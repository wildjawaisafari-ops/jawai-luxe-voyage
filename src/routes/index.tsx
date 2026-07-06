import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Star, Plus, Minus, MapPin, Phone, Mail, Sparkles, Eye, Users, Leaf, MessageCircle, Truck, Hotel, Landmark, Cat, ShieldCheck, Award, Camera, Bird, MessageSquare, FileCheck, CreditCard, Compass, Sunrise, Sunset } from "lucide-react";
import { Section } from "../components/site/Section";
import { SafariZoneCard } from "../components/site/PackageCard";
import {
  safariZones,
  reviews,
  faqs,
  whyUs,
  famousLeopards,
  sacredPlaces,
  whatsappUrl,
  WHATSAPP_DISPLAY,
  PHONE_TEL,
  CONTACT_EMAIL,
  SITE_URL,
  trustBadges,
  wildlife,
  bookingProcess,
  googleReviews,
} from "../lib/site-data";

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

const imageMap: Record<string, string> = {
  sena: photoSena,
  jungle: photoJungle,
  bera: photoBera,
  "jawai-dam": photoJawaiDam,
  crocodile: photoCrocodile,
};

const templeImageMap: Record<string, string> = {
  kameshwar: photoKameshwar,
  devagiri: photoDevgiri,
  ranakpur: photoBhadreshvar,
};

const galleryImages = [
  { src: photoHero, alt: "Jawai Leopard Safari gypsy at sunrise on the granite shore of Jawai Dam", span: "md:col-span-2 md:row-span-2" },
  { src: photoHiTeaLake, alt: "Luxury Hi-Tea served lakeside on a Jawai Safari" },
  { src: photoJungle, alt: "Rabari shepherd herding goats through Jawai hills at sunset" },
  { src: photoBera, alt: "Flamingos on Jawai Dam — bird watching Jawai Safari" },
  { src: photoCrocodile, alt: "Mugger crocodile at Jawai Dam wildlife safari" },
];

const heroBookMsg = "Hello Wild Jawai Safari, I would like to book a Jawai Leopard Safari.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jawai Safari — Best Jawai Leopard Safari Booking in Rajasthan | Wild Jawai Safari" },
      { name: "description", content: "Book the best Jawai Leopard Safari in Rajasthan with Wild Jawai Safari. Private morning & evening gypsy safaris, expert local guides, Jawai Dam wildlife tours, bird watching & luxury resort booking." },
      { name: "keywords", content: "Jawai Safari, Jawai Leopard Safari, Jawai Safari Booking, Leopard Safari Rajasthan, Best Jawai Safari, Wild Jawai Safari, Morning Leopard Safari, Evening Leopard Safari, Jawai Dam Safari, Village Safari Jawai, Bird Watching Jawai, Sena Safari Zone, Kothar Safari Zone, Private Safari Jawai, Jawai Wildlife Safari, Book Jawai Safari, Luxury Jawai Safari, Jawai Safari Packages, Jawai Safari Cost" },
      { property: "og:title", content: "Jawai Safari — Best Jawai Leopard Safari in Rajasthan | Wild Jawai Safari" },
      { property: "og:description", content: "Private Jawai Leopard Safari in Rajasthan. Sunrise & sunset gypsy drives, expert local trackers, instant WhatsApp booking." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: photoHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jawai Safari — Best Jawai Leopard Safari in Rajasthan" },
      { name: "twitter:description", content: "Private Jawai Safari with expert local trackers. Book instantly on WhatsApp." },
      { name: "twitter:image", content: photoHero },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Jawai Leopard Safari",
          name: "Jawai Leopard Safari — Private Gypsy Wildlife Tours",
          provider: { "@type": "TravelAgency", name: "Wild Jawai Safari", url: SITE_URL, telephone: "+91 92569 28266" },
          areaServed: [
            { "@type": "Place", name: "Jawai, Rajasthan, India" },
            { "@type": "Place", name: "Bera, Rajasthan, India" },
            { "@type": "Place", name: "Pali, Rajasthan, India" },
          ],
          description: "Private morning and evening leopard safaris in Jawai, Rajasthan — expert local trackers, Hi-Tea included, instant WhatsApp booking.",
          offers: [
            { "@type": "Offer", name: "Jawai Safari with Hi-Tea", price: "3500", priceCurrency: "INR", availability: "https://schema.org/InStock" },
            { "@type": "Offer", name: "Jawai Safari without Hi-Tea", price: "3000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <PackagesPreview />
      <WildlifeSection />
      <PickupDrop />
      <WhyChooseUs />
      <BookingProcessSection />
      <FamousLeopards />
      <SacredPlaces />
      <HotelBooking />
      <GalleryPreview />
      <AboutPreview />
      <GoogleReviews />
      <Reviews />
      <FAQPreview />
      <ContactPreview />
    </>
  );
}


function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={photoHero}
          alt="Safari gypsy parked on granite shore of Jawai lake at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover scale-105 animate-fade-in-slow"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 animate-fade-up">
            <span className="gold-divider" />
            <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>Jawai · Rajasthan · India</span>
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] animate-fade-up delay-1 hero-fg">
            Where leopards
            <br />
            walk among <span className="text-gradient-gold italic">gods</span>.
          </h1>
          <p className="mt-7 text-base sm:text-lg hero-fg-muted max-w-xl leading-relaxed animate-fade-up delay-2">
            Private, low-impact safaris through the granite kingdoms of Jawai —
            home to India's most photographed wild leopards, sacred lakes and
            the saffron-robed Rabari people.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up delay-3">
            <Link to="/packages" className="btn-gold btn-gold-hover">
              Explore Safaris <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl("Hello Wild Jawai Safari, I would like to plan a journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "oklch(1 0 0 / 0.10)",
                border: "1px solid oklch(1 0 0 / 0.35)",
                color: "oklch(0.985 0.006 85)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MessageCircle className="h-4 w-4" /> Plan on WhatsApp
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-lg animate-fade-up delay-4">
            {[
              { v: "70+", l: "Wild Leopards" },
              { v: "95%", l: "Sighting Rate" },
              { v: "12yr", l: "Local Expertise" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-4xl text-gradient-gold">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] hero-fg-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 hero-fg-muted animate-float-slow">
        <span className="eyebrow text-[0.55rem]" style={{ color: "var(--gold-soft)" }}>Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}

function PackagesPreview() {
  return (
    <Section
      id="packages"
      eyebrow="Safari Zones"
      title={<>Explore Jawai Safari <span className="italic text-gradient-gold">Zones</span></>}
      subtitle="Choose your preferred safari zone and enjoy a private gypsy wildlife experience with local expert drivers and trackers."
      center
    >
      <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
        {safariZones.map((z) => (
          <SafariZoneCard key={z.slug} {...z} image={imageMap[z.image] ?? photoHero} />
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <p className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 text-sm text-gold-soft">
          <span className="grid h-2 w-2 rounded-full bg-gold" />
          All safaris in Private Gypsy · ₹3,500 with Hi-Tea · ₹3,000 without Hi-Tea
        </p>
      </div>
      <div className="mt-12 text-center">
        <Link to="/packages" className="btn-ghost-gold btn-ghost-gold-hover">
          View all zones <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

function PickupDrop() {
  return (
    <Section>
      <div className="glass rounded-3xl p-7 sm:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl glass-gold">
          <Truck className="h-6 w-6 text-gold" />
        </span>
        <div className="flex-1 text-center md:text-left">
          <div className="eyebrow">Pickup & Drop</div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl leading-tight">
            Complimentary within <span className="italic text-gradient-gold">10 km</span>.
          </h3>
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed max-w-2xl">
            We provide complimentary pickup and drop within 10 km from your hotel or location.
            Additional charges apply for distances beyond 10 km.
          </p>
        </div>
        <a
          href={whatsappUrl("Hello Wild Jawai Safari, I have a question about pickup and drop.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-gold btn-ghost-gold-hover whitespace-nowrap"
        >
          <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
        </a>
      </div>
    </Section>
  );
}

function WhyChooseUs() {
  const icons = [Eye, Users, Leaf, Sparkles];
  return (
    <Section
      eyebrow="Why Wild Jawai"
      title={<>An experience held to the <span className="italic text-gradient-gold">highest standard</span>.</>}
      center
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((w, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={w.title}
              className="glass rounded-3xl p-7 hover:-translate-y-1 hover:border-gold/30 transition-all duration-500"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl glass-gold">
                <Icon className="h-5 w-5 text-gold" />
              </span>
              <h3 className="mt-5 font-display text-xl leading-tight">{w.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function FamousLeopards() {
  return (
    <Section
      eyebrow="The Cats of Jawai"
      title={<>Meet Jawai's Famous <span className="italic text-gradient-gold">Leopards</span>.</>}
      subtitle="Every leopard in Jawai has a name, a story and a territory passed down through generations. Here are some of the most beloved."
      center
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {famousLeopards.map((l) => (
          <article
            key={l.name}
            className="group relative overflow-hidden rounded-3xl glass-earth p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[var(--shadow-gold)]"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl glass-gold">
                <Cat className="h-5 w-5 text-gold" />
              </span>
              <span className="eyebrow text-[0.55rem] text-right">{l.title}</span>
            </div>
            <h3 className="mt-6 font-display text-3xl sm:text-4xl text-gradient-gold">{l.name}</h3>
            <div className="mt-3 h-px w-12 bg-gradient-to-r from-gold/70 to-transparent" />
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{l.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function SacredPlaces() {
  return (
    <Section
      eyebrow="Nearby Sacred Places"
      title={<>Temples among the <span className="italic text-gradient-gold">granite gods</span>.</>}
      subtitle="Guests can also include these sacred places in their tour itinerary — a soulful counterpoint to the wildlife of Jawai."
      center
    >
      <div className="grid gap-6 md:grid-cols-3">
        {sacredPlaces.map((p) => (
          <article key={p.name} className="group glass rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={templeImageMap[p.image]}
                alt={p.name}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-full glass-gold">
                <Landmark className="h-4 w-4 text-gold" />
              </span>
            </div>
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={whatsappUrl("Hello, I would like to include nearby temples in my Jawai itinerary.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-gold btn-ghost-gold-hover"
        >
          <MessageCircle className="h-4 w-4" /> Add temples to my itinerary
        </a>
      </div>
    </Section>
  );
}

function HotelBooking() {
  return (
    <Section eyebrow="Hospitality">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[5/4] rounded-3xl overflow-hidden glass p-2">
            <img
              src={photoHiTeaLake}
              alt="Luxury Hi-Tea experience by Jawai dam"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 glass-gold rounded-full px-3 py-1.5">
            <Hotel className="h-4 w-4 text-gold" />
            <span className="eyebrow text-[0.6rem]">Hotel & Resort Booking</span>
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.05]">
            Stay in Jawai's <span className="italic text-gradient-gold">finest resorts</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We help guests book the best hotels and luxury resorts in Jawai at the most
            preferential available rates — from intimate tented camps to heritage estates.
            Share your dates and we'll handle the rest.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {["Curated portfolio of vetted properties", "Best available rates & priority availability", "Concierge for transfers, dining & private experiences"].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-foreground/85">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href={whatsappUrl("Hello Wild Jawai Safari, I would like help booking a hotel or resort in Jawai.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-gold-hover"
            >
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function GalleryPreview() {
  return (
    <Section
      eyebrow="The Gallery"
      title={<>Moments from the <span className="italic text-gradient-gold">granite kingdom</span>.</>}
      center
    >
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
        {galleryImages.map((g, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl group ${g.span ?? ""}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/gallery" className="btn-ghost-gold btn-ghost-gold-hover">
          Open full gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

function AboutPreview() {
  return (
    <Section eyebrow="About Jawai">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={photoJawaiDam} alt="Aerial view of Jawai dam and granite hills" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-square rounded-3xl overflow-hidden glass p-2 hidden md:block">
            <img src={photoJungle} alt="Rabari shepherd with herd at sunset" loading="lazy" className="h-full w-full object-cover rounded-2xl" />
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
            A landscape <span className="italic text-gradient-gold">2,500 million</span> years in the making.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Jawai's haunting granite hills are among the oldest exposed rocks on Earth.
            Their caves shelter one of India's largest leopard populations — cats who share
            their territory peacefully with the saffron-clad Rabari shepherds and their herds.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            For over 150 years, leopard and human have lived without conflict here. No fences,
            no parks, no boundaries. Just respect, ritual and quiet coexistence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="btn-gold btn-gold-hover">
              Discover Jawai <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Reviews() {
  return (
    <Section
      eyebrow="Guest Stories"
      title={<>Whispered around <span className="italic text-gradient-gold">campfires</span>.</>}
      center
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="glass rounded-3xl p-8 flex flex-col">
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 text-foreground/90 leading-relaxed font-display text-lg italic">
              "{r.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-black/5">
              <div className="text-sm font-medium">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.location}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function FAQPreview() {
  return (
    <Section
      eyebrow="Frequently Asked"
      title={<>Questions before the <span className="italic text-gradient-gold">first dawn drive</span>.</>}
      center
    >
      <div className="max-w-3xl mx-auto">
        <FAQList items={faqs.slice(0, 4)} />
        <div className="mt-10 text-center">
          <Link to="/faq" className="btn-ghost-gold btn-ghost-gold-hover">
            All questions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function FAQList({ items }: { items: ReadonlyArray<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="glass rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className="font-display text-lg sm:text-xl">{f.q}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass-gold text-gold">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContactPreview() {
  return (
    <Section
      eyebrow="Begin Your Journey"
      title={<>Let's plan something <span className="italic text-gradient-gold">unforgettable</span>.</>}
      center
    >
      <div className="relative overflow-hidden rounded-3xl glass p-1">
        <div className="absolute inset-0 -z-10 opacity-30">
          <img src={photoGypsy} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        <div className="p-8 sm:p-14 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl leading-tight">
              Your private safari, designed in conversation.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Share your dates and we'll craft an itinerary around the lives of the leopards,
              the season, and what stirs you most.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" /> Jawai Bandh, Pali, Rajasthan 306126</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> {WHATSAPP_DISPLAY}</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> {CONTACT_EMAIL}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={whatsappUrl("Hello Wild Jawai Safari, I would like to plan a safari.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-gold-hover w-full sm:w-auto lg:w-full"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn-ghost-gold btn-ghost-gold-hover w-full sm:w-auto lg:w-full">
              Send detailed enquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-1 text-xs text-muted-foreground">We reply within minutes on WhatsApp.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// suppress unused warnings for images reserved for future sections
void photoHiTea; void photoBoat;
