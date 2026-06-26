export const WHATSAPP_NUMBER = "919256928266";
export const WHATSAPP_DISPLAY = "+91 92569 28266";
export const CONTACT_EMAIL = "wildjawaisafari@gmail.com";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SAFARI_PRICE_WITH_HITEA = "₹3,500 per Gypsy";
export const SAFARI_PRICE_WITHOUT_HITEA = "₹3,000 per Gypsy";

export const safariZones = [
  {
    slug: "sena",
    name: "Sena Safari Zone",
    availability: "Sunrise Safari & Sunset Safari",
    highlights: [
      "High Leopard Sightings",
      "Granite Hills & Caves",
      "Bird Watching",
      "Seasonal Flamingos",
      "Wildlife Photography",
    ],
    buttonLabel: "Book Sena Safari",
    bookingUrl: whatsappUrl("I want to book Sena Safari Zone"),
    image: "hero-leopard",
  },
  {
    slug: "jungle",
    name: "Jungle Safari Zone",
    availability: "Sunrise Safari Only",
    highlights: [
      "Best Zone for Sloth Bear Sightings",
      "Leopard Sightings",
      "Sunrise Safari Experience",
      "Wildlife Photography",
    ],
    buttonLabel: "Book Jungle Safari",
    bookingUrl: whatsappUrl("I want to book Jungle Safari Zone"),
    image: "leopard-cub",
  },
  {
    slug: "bera-kothar-bisalpur",
    name: "Bera, Kothar & Bisalpur Safari",
    availability: "Sunrise Safari & Sunset Safari",
    highlights: [
      "Leopard Sightings across three zones",
      "Scenic Rocky Landscape",
      "Seasonal Flamingos",
      "Bird Watching",
      "Sunset Safari Experience",
    ],
    buttonLabel: "Book Bera, Kothar & Bisalpur Safari",
    bookingUrl: whatsappUrl("I want to book Bera, Kothar & Bisalpur Safari"),
    image: "hero-leopard",
  },
  {
    slug: "jawai-dam",
    name: "Jawai Dam Safari Zone",
    availability: "Sunrise Safari & Sunset Safari",
    highlights: [
      "Leopard Sightings",
      "Jawai Dam Views",
      "Crocodiles",
      "Flamingos & Migratory Birds",
      "Sunset Safari Experience",
    ],
    buttonLabel: "Book Jawai Dam Safari",
    bookingUrl: whatsappUrl("I want to book Jawai Dam Safari"),
    image: "crocodile",
  },
] as const;

export const famousLeopards = [
  { name: "Gabbar", title: "The Patriarch", desc: "A powerful dominant male who rules the Sena hills with quiet authority.", image: "gabbar" },
  { name: "Laxmi", title: "The Mother", desc: "A graceful matriarch, mother to many of Jawai's celebrated cubs.", image: "laxmi" },
  { name: "Chot Kaan", title: "The Scarred Wanderer", desc: "Recognised by a distinctive torn ear — one of the most photographed cats in Bera.", image: "chotkaan" },
  { name: "Nilam", title: "The Watcher", desc: "A young, alert female often seen at dawn on the granite ridges of Jawai Dam.", image: "nilam" },
  { name: "Padama", title: "The Silhouette", desc: "Famed for her sunset walks along the ridgelines above Jawai Bandh.", image: "padama" },
  { name: "Sultan", title: "The King of Caves", desc: "A regal male who guards the ancient Shiva caves of the Sena range.", image: "sultan" },
] as const;

export const sacredPlaces = [
  {
    name: "Kameshwar Mahadev Temple",
    desc: "A revered Shiva temple nestled within Jawai's ancient granite caves — a sacred site where pilgrims and leopards share the same hills.",
    image: "kameshwar",
  },
  {
    name: "Devgiri Temple",
    desc: "A hilltop temple offering sweeping views over the Aravalli range, especially magical at sunrise and sunset.",
    image: "devagiri",
  },
  {
    name: "Ranakpur Jain Temple",
    desc: "A 15th-century marvel of marble — 1,444 intricately carved pillars, no two alike. Among India's most exquisite temples.",
    image: "ranakpur",
  },
] as const;

export const reviews = [
  {
    quote:
      "The most cinematic 72 hours of our lives. We watched a mother leopard nurse her cubs from 40 metres away — and slept under more stars than we knew existed.",
    name: "Aarav & Maya",
    location: "Mumbai, India",
  },
  {
    quote:
      "Service that rivals the finest African camps, in a landscape unlike anything else on earth. The Rabari evening was unforgettable.",
    name: "Eleanor Whitcombe",
    location: "London, UK",
  },
  {
    quote:
      "As a wildlife photographer, this is now my favourite leopard destination in India. The trackers knew the cats by name.",
    name: "Hiroshi Tanaka",
    location: "Tokyo, Japan",
  },
] as const;

export const faqs = [
  {
    q: "When is the best time to visit Jawai for a leopard safari?",
    a: "Our season runs October through April. Leopard sightings peak in the cooler months from November to February when cats spend more time on exposed rocks at sunrise and sunset.",
  },
  {
    q: "How likely are we to see a leopard on a Jawai safari?",
    a: "Jawai is home to one of India's densest leopard populations outside protected reserves — over 70 individuals across roughly 19 sq km. On a 2-night stay, sighting rates are above 95%.",
  },
  {
    q: "Do you provide pickup and drop for the safari?",
    a: "Yes. We provide complimentary pickup and drop within 10 km from your hotel or location. Additional charges apply for distances beyond 10 km.",
  },
  {
    q: "How much does a Jawai safari cost?",
    a: "Every safari is conducted in a Private Gypsy. ₹3,500 per Gypsy with Hi-Tea (tea + light snacks) included, or ₹3,000 per Gypsy without Hi-Tea.",
  },
  {
    q: "Is Jawai suitable for families and children?",
    a: "Absolutely. We welcome children aged 6 and above on game drives. Family-friendly activities include Rabari village walks, stargazing and short hikes.",
  },
  {
    q: "How do we reach Jawai?",
    a: "The nearest airport is Udaipur (3 hours by road). Jawai Bandh railway station is on the property's doorstep, with direct trains from Delhi, Mumbai and Ahmedabad.",
  },
  {
    q: "Do you help with hotel and resort bookings in Jawai?",
    a: "Yes. We arrange the best hotels and luxury resorts in Jawai at the most preferential available rates — from intimate tented camps to heritage estates.",
  },
] as const;

export const whyUs = [
  {
    title: "Local Trackers, Lifelong Knowledge",
    desc: "Our naturalists were born in the hills they guide. Every leopard, every cave, every shortcut — known by heart.",
  },
  {
    title: "Private Gypsy, Always",
    desc: "Every safari is in a private gypsy — your jeep, your sundowner spot, your evening — uninterrupted.",
  },
  {
    title: "Ethical, Low-Impact Safaris",
    desc: "Strict distance protocols, no off-roading, no baiting. We protect what we love so you can witness it untouched.",
  },
  {
    title: "Beyond the Big Cats",
    desc: "Crocodile lakes, migratory birds, Rabari villages and 1,000-year-old Shiva caves — Jawai's full story, expertly told.",
  },
];
