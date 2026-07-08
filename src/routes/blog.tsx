import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "../components/site/Section";
import { useBlogs } from "../lib/public-data";
import photoHero from "../assets/photo-hero.jpg";

const SITE_URL = "https://jawai-safari.lovable.app";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Jawai Safari Blog — Guides, Stories & Wildlife Journal | Wild Jawai Safari" },
      { name: "description", content: "Read expert Jawai Safari guides: leopard behaviour, best season to visit Jawai, photography tips, Rabari culture, birding, and travel stories from Rajasthan." },
      { property: "og:title", content: "Jawai Safari Blog — Wild Jawai Safari" },
      { property: "og:description", content: "Guides and stories from India's densest leopard landscape." },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { property: "og:image", content: photoHero },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { data: posts, isLoading } = useBlogs();

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title={<>The Jawai <span className="italic text-gradient-gold">Safari</span> Blog</>}
        subtitle="Stories, guides and wildlife journals from the granite hills of Jawai."
        image={photoHero}
      />
      <Section>
        {isLoading ? (
          <p className="text-center text-muted-foreground">Loading…</p>
        ) : !posts || posts.length === 0 ? (
          <div className="text-center max-w-lg mx-auto">
            <p className="text-muted-foreground">
              New articles are being written. Check back soon for expert guides on Jawai leopards,
              photography, birding and Rabari culture.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.id}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group glass card-lift rounded-3xl overflow-hidden flex flex-col"
              >
                {p.cover_image && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.cover_image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {p.category && (
                    <span className="eyebrow text-[0.6rem] text-gold-deep">{p.category}</span>
                  )}
                  <h2 className="mt-2 font-display text-2xl leading-tight group-hover:text-gold transition-colors">
                    {p.title}
                  </h2>
                  {p.excerpt && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                  )}
                  {p.published_at && (
                    <time className="mt-4 text-xs text-muted-foreground">
                      {new Date(p.published_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    </time>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
