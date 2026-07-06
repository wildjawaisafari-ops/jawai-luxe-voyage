export const WHATSAPP_NUMBER = "919256928266";
export const WHATSAPP_DISPLAY = "+91 92569 28266";
export const PHONE_TEL = "+919256928266";
export const CONTACT_EMAIL = "wildjawaisafari@gmail.com";
export const SITE_URL = "https://jawai-luxe-voyage.lovable.app";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SAFARI_PRICE_WITH_HITEA = "₹3,500 per Gypsy";
export const SAFARI_PRICE_WITHOUT_HITEA = "₹3,000 per Gypsy";

/** Reusable trust badges shown across the site */
export const trustBadges = [
  "Local Expert Guides",
  "Best Leopard Sighting Experience",
  "Private Safari",
  "Instant WhatsApp Booking",
  "Secure Booking",
] as const;

/** Curated safari experiences — shown on the Packages page as tour options */
export const safariPackageTypes = [
  {
    slug: "morning-leopard-safari",
    name: "Morning Leopard Safari",
    tagline: "Sunrise Gypsy Drive",
    desc: "The best time to spot leopards in Jawai — active cats on granite ridges as the first light hits the hills.",
    duration: "3 hours",
  },
  {
    slug: "evening-leopard-safari",
    name: "Evening Leopard Safari",
    tagline: "Sunset Gypsy Drive",
    desc: "Golden-hour drives when leopards emerge from caves to hunt — silhouettes against a saffron sky.",
    duration: "3 hours",
  },
  {
    slug: "private-leopard-safari",
    name: "Private Leopard Safari",
    tagline: "Exclusive Gypsy · Just Your Group",
    desc: "Every safari is already private — one gypsy, your family or friends only, no sharing with strangers.",
    duration: "3 hours",
  },
  {
    slug: "full-day-leopard-safari",
    name: "Full Day Leopard Safari",
    tagline: "Morning + Evening Combo",
    desc: "Both sunrise and sunset drives in a single day — the highest possible leopard sighting probability.",
    duration: "Full day",
  },
  {
    slug: "jawai-dam-safari",
    name: "Jawai Dam Safari",
    tagline: "Crocodiles · Flamingos · Sunset",
    desc: "Explore the reservoir — mugger crocodiles at the shoreline, flamingos in season and dramatic dam-side sunsets.",
    duration: "3 hours",
  },
  {
    slug: "village-safari-jawai",
    name: "Village Safari",
    tagline: "Rabari Culture Tour",
    desc: "Meet the saffron-turbaned Rabari shepherds who have shared these hills with leopards for 150 years.",
    duration: "2–3 hours",
  },
  {
    slug: "bird-watching-jawai",
    name: "Bird Watching Tour",
    tagline: "Migratory & Resident Birds",
    desc: "Flamingos, bar-headed geese, painted storks, sarus cranes, kingfishers and raptors around the Jawai wetlands.",
    duration: "3 hours",
  },
  {
    slug: "wildlife-photography-jawai",
    name: "Wildlife Photography Tour",
    tagline: "Guided Photo Safari",
    desc: "Positioned by trackers who know each leopard's habits — the best light, angles and sight-lines for serious photographers.",
    duration: "Custom",
  },
] as const;

/** Wildlife of Jawai — species information shown on the homepage */
export const wildlife = [
  {
    name: "Indian Leopard",
    latin: "Panthera pardus fusca",
    desc: "Jawai is home to India's densest wild leopard population outside a reserve — over 70 cats living peacefully among granite caves.",
    image: "sena",
  },
  {
    name: "Sloth Bear",
    latin: "Melursus ursinus",
    desc: "Shy and rarely seen — the Jungle Safari Zone offers the best chance to spot these shaggy termite hunters at dawn.",
    image: "jungle",
  },
  {
    name: "Striped Hyena",
    latin: "Hyaena hyaena",
    desc: "Nocturnal and elusive scavengers of the Aravalli foothills, occasionally caught in headlights on early sunrise drives.",
    image: "bera",
  },
  {
    name: "Marsh Crocodile",
    latin: "Crocodylus palustris",
    desc: "Muggers sun themselves along Jawai Dam — a signature sighting on every dam-side safari and boat outing.",
    image: "crocodile",
  },
  {
    name: "Blue Bull (Nilgai)",
    latin: "Boselaphus tragocamelus",
    desc: "Asia's largest antelope — herds graze the open scrubland and are commonly sighted across every safari zone.",
    image: "jawai-dam",
  },
  {
    name: "Indian Fox & Golden Jackal",
    latin: "Vulpes bengalensis · Canis aureus",
    desc: "Dawn and dusk are prime hours to spot these agile canids trotting the ridge lines and dry riverbeds.",
    image: "jungle",
  },
  {
    name: "Indian Peafowl",
    latin: "Pavo cristatus",
    desc: "India's national bird — flashing turquoise-and-emerald tails against the granite, especially spectacular in monsoon.",
    image: "sena",
  },
  {
    name: "Migratory Birds",
    latin: "Flamingos · Bar-headed Geese · Painted Storks",
    desc: "Jawai's wetlands host thousands of migratory birds from November to March — a birder's paradise.",
    image: "bera",
  },
] as const;

/** How to book — displayed as the Booking Process section */
export const bookingProcess = [
  { step: "01", title: "Message on WhatsApp", desc: "Send us your travel dates, group size and preferred safari zone." },
  { step: "02", title: "Get Custom Quote", desc: "We share the best gypsy availability, timings and Hi-Tea options within minutes." },
  { step: "03", title: "Confirm & Pay Advance", desc: "Secure booking with a simple UPI or bank advance — instant confirmation." },
  { step: "04", title: "Drive Into the Wild", desc: "Meet our tracker at pickup, board the gypsy, and begin your Jawai Safari adventure." },
] as const;

/** Placeholder Google-style reviews shown until Place ID is wired */
export const googleReviews = [
  {
    name: "Rohan S.",
    location: "Bengaluru",
    stars: 5,
    quote: "Best Jawai Safari experience! Spotted three leopards on the sunrise drive. The tracker knew exactly where to go.",
    time: "2 weeks ago",
  },
  {
    name: "Emma T.",
    location: "United Kingdom",
    stars: 5,
    quote: "Truly world-class. Private gypsy, expert local guide, and unforgettable sunset over Jawai Dam. Booked entirely on WhatsApp — super smooth.",
    time: "1 month ago",
  },
  {
    name: "Priya M.",
    location: "Mumbai",
    stars: 5,
    quote: "Wild Jawai Safari made our anniversary special. Hi-Tea by the lake, leopard sighting, warm hospitality. Highly recommend for luxury wildlife lovers.",
    time: "1 month ago",
  },
  {
    name: "Karan V.",
    location: "Delhi",
    stars: 5,
    quote: "Excellent booking process and honest pricing. The evening leopard safari in Bera was magical. Will return with friends.",
    time: "3 months ago",
  },
] as const;

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
    image: "sena",
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
    image: "jungle",
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
    image: "bera",
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
    image: "jawai-dam",
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
