export const WHATSAPP_NUMBER = "918690122405";
export const WHATSAPP_DISPLAY = "+91 86901 22405";
export const CONTACT_EMAIL = "wildjawaisafari@gmail.com";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const safariZones = [
  {
    slug: "sena",
    name: "Sena Safari Zone",
    availability: "Sunrise Safari & Sunset Safari",
    price: "₹3,000 Per Gypsy",
    highlights: [
      "High Leopard Sightings",
      "Granite Hills & Caves",
      "Bird Watching",
      "Seasonal Flamingos",
      "Wildlife Photography",
      "Hi-Tea Included",
    ],
    buttonLabel: "Book Sena Safari",
    bookingUrl: "https://wa.me/919256928266?text=I%20want%20to%20book%20Sena%20Safari%20Zone",
    image: "hero-leopard",
  },
  {
    slug: "maad",
    name: "Maad Safari Zone",
    availability: "Sunrise Safari Only",
    price: "₹3,500 Per Gypsy",
    highlights: [
      "Best Zone for Sloth Bear Sightings",
      "Leopard Sightings",
      "Sunrise Safari Experience",
      "Wildlife Photography",
      "Hi-Tea Included",
    ],
    buttonLabel: "Book Maad Safari",
    bookingUrl: "https://wa.me/919256928266?text=I%20want%20to%20book%20Maad%20Safari%20Zone",
    image: "leopard-cub",
  },
  {
    slug: "bera",
    name: "Bera Safari Zone",
    availability: "Sunrise Safari & Sunset Safari",
    price: "₹3,000 Per Gypsy",
    highlights: [
      "Leopard Sightings",
      "Rocky Landscape",
      "Bird Watching",
      "Sunset Safari Experience",
      "Hi-Tea Included",
    ],
    buttonLabel: "Book Bera Safari",
    bookingUrl: "https://wa.me/919256928266?text=I%20want%20to%20book%20Bera%20Safari%20Zone",
    image: "landscape",
  },
  {
    slug: "kothar-disalpur",
    name: "Kothar Disalpur Safari Zone",
    availability: "Sunrise Safari & Sunset Safari",
    price: "₹3,000 Per Gypsy",
    highlights: [
      "Leopard Sightings",
      "Seasonal Flamingos",
      "Bird Watching",
      "Scenic Rock Formations",
      "Hi-Tea Included",
    ],
    buttonLabel: "Book Kothar Disalpur Safari",
    bookingUrl: "https://wa.me/919256928266?text=I%20want%20to%20book%20Kothar%20Disalpur%20Safari",
    image: "birds",
  },
  {
    slug: "jawai-dam",
    name: "Jawai Dam Safari Zone",
    availability: "Sunrise Safari & Sunset Safari",
    price: "₹2,500 Per Gypsy",
    highlights: [
      "Leopard Sightings",
      "Jawai Dam Views",
      "Crocodiles",
      "Flamingos & Migratory Birds",
      "Sunset Safari Experience",
      "Hi-Tea Included",
    ],
    buttonLabel: "Book Jawai Dam Safari",
    bookingUrl: "https://wa.me/919256928266?text=I%20want%20to%20book%20Jawai%20Dam%20Safari",
    image: "crocodile",
  },
  {
    slug: "jivda",
    name: "Jivda Safari Zone",
    availability: "Sunrise Safari & Sunset Safari",
    price: "₹3,000 Per Gypsy",
    highlights: [
      "Leopard Sightings",
      "Bird Watching",
      "Scenic Wildlife Trails",
      "Nature Photography",
      "Hi-Tea Included",
    ],
    buttonLabel: "Book Jivda Safari",
    bookingUrl: "https://wa.me/919256928266?text=I%20want%20to%20book%20Jivda%20Safari",
    image: "safari-jeep",
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
    name: "Devagiri Temple",
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
    q: "When is the best time to visit Jawai?",
    a: "Our season runs October through April. Leopard sightings peak in the cooler months from November to February when cats spend more time on exposed rocks at sunrise and sunset.",
  },
  {
    q: "How likely are we to see a leopard?",
    a: "Jawai is home to one of India's densest leopard populations outside protected reserves — over 70 individuals across roughly 19 sq km. On a 2-night stay, sighting rates are above 95%.",
  },
  {
    q: "Do you provide pickup and drop?",
    a: "Yes. We provide complimentary pickup and drop within 10 km from your hotel or location. Additional charges apply for distances beyond 10 km.",
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
    q: "Do you offer custom itineraries?",
    a: "Yes. Every safari is privately guided. We can extend journeys into Udaipur, Jodhpur, Ranakpur and Kumbhalgarh, and include nearby sacred sites in your itinerary.",
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
