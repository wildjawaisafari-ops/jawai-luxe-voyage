import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { useSiteSettings as useSiteSettingsSafe } from "../lib/public-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Lost in the wild</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This trail doesn't exist. Let's head back to camp.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold btn-gold-hover">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something startled us</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page didn't load. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold btn-gold-hover"
          >Try again</button>
          <a href="/" className="btn-ghost-gold btn-ghost-gold-hover">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jawai Safari — Best Jawai Leopard Safari Booking in Rajasthan | Wild Jawai Safari" },
      { name: "description", content: "Book the best Jawai Leopard Safari in Rajasthan with Wild Jawai Safari. Private morning & evening gypsy safaris, expert local guides, Jawai Dam wildlife tours, bird watching & luxury resort booking." },
      { name: "keywords", content: "Jawai Safari, Jawai Leopard Safari, Jawai Safari Booking, Leopard Safari Rajasthan, Best Jawai Safari, Wild Jawai Safari, Morning Leopard Safari, Evening Leopard Safari, Jawai Dam Safari, Village Safari Jawai, Bird Watching Jawai, Sena Safari Zone, Kothar Safari Zone, Private Safari Jawai, Jawai Wildlife Safari, Jawai Safari Rajasthan, Book Jawai Safari, Luxury Jawai Safari, Jawai Safari Packages, Jawai Safari Cost, Jawai Leopard Tour, Bera Safari, Jawai Bandh Safari, Pali Rajasthan" },
      { name: "author", content: "Wild Jawai Safari" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: "Wild Jawai Safari" },
      { property: "og:title", content: "Jawai Safari — Best Jawai Leopard Safari Booking in Rajasthan | Wild Jawai Safari" },
      { property: "og:description", content: "Book the best Jawai Leopard Safari in Rajasthan with Wild Jawai Safari. Private morning & evening gypsy safaris, expert local guides, Jawai Dam wildlife tours, bird watching & luxury resort booking." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jawai Safari — Best Jawai Leopard Safari Booking in Rajasthan | Wild Jawai Safari" },
      { name: "twitter:description", content: "Book the best Jawai Leopard Safari in Rajasthan with Wild Jawai Safari. Private morning & evening gypsy safaris, expert local guides, Jawai Dam wildlife tours, bird watching & luxury resort booking." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/96de680c-8ac1-419a-89fc-53e62fc1d6b3" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/96de680c-8ac1-419a-89fc-53e62fc1d6b3" },
      { name: "theme-color", content: "#F8F5EF" },
      { name: "geo.region", content: "IN-RJ" },
      { name: "geo.placename", content: "Jawai Bandh, Pali, Rajasthan" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LocalBusiness", "TouristAttraction", "TravelAgency"],
              "@id": "https://jawai-luxe-voyage.lovable.app/#business",
              name: "Wild Jawai Safari",
              description:
                "Luxury private gypsy leopard safaris in Jawai, Rajasthan. Expert local trackers, sunrise & sunset drives, and hotel & resort bookings.",
              url: "https://jawai-luxe-voyage.lovable.app",
              telephone: "+91 92569 28266",
              email: "wildjawaisafari@gmail.com",
              priceRange: "₹₹₹",
              image:
                "https://storage.googleapis.com/gpt-engineer-file-uploads/T6Kv3FD9qyMWd32aoBfSAkvjNv32/social-images/social-1782317848847-ChatGPT_Image_Jun_24,_2026,_07_06_44_PM.webp",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jawai Bandh",
                addressLocality: "Jawai Bandh",
                addressRegion: "Rajasthan",
                postalCode: "306126",
                addressCountry: "IN",
              },
              areaServed: ["Jawai", "Bera", "Pali", "Rajasthan"],
              sameAs: ["https://wa.me/919256928266"],
            },
            {
              "@type": "WebSite",
              "@id": "https://jawai-luxe-voyage.lovable.app/#website",
              url: "https://jawai-luxe-voyage.lovable.app",
              name: "Wild Jawai Safari",
              inLanguage: "en-IN",
              publisher: { "@id": "https://jawai-luxe-voyage.lovable.app/#business" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome />
    </QueryClientProvider>
  );
}

function SiteChrome() {
  const { data: settings } = useSiteSettingsSafe();

  useEffect(() => {
    if (!settings?.favicon_url) return;
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
    link.href = settings.favicon_url;
  }, [settings?.favicon_url]);

  return (
    <div className="min-h-screen flex flex-col">
      {settings?.homepage_banner_enabled && settings?.homepage_banner_text && (
        <a
          href={settings.homepage_banner_url || "#"}
          className="block bg-[color:var(--gold)] text-black text-center text-xs sm:text-sm py-2 px-4 font-medium tracking-wide hover:opacity-90 transition"
        >
          {settings.homepage_banner_text}
        </a>
      )}
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
