import { createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { PageHeader, Section } from "../components/site/Section";
import photoHero from "../assets/photo-hero.jpg";

const SITE_URL = "https://jawai-safari.lovable.app";

const getContentPage = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const supa = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
      auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    });
    const { data: page } = await supa
      .from("content_pages")
      .select("title,body_html,seo_title,seo_description,slug,updated_at")
      .eq("slug", data.slug)
      .eq("published", true)
      .maybeSingle();
    return page;
  });

export const Route = createFileRoute("/$slug")({
  loader: async ({ params }) => {
    const page = await getContentPage({ data: { slug: params.slug } });
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.page;
    return {
      meta: [
        { title: p.seo_title ?? p.title },
        { name: "description", content: p.seo_description ?? p.title },
        { property: "og:title", content: p.seo_title ?? p.title },
        { property: "og:description", content: p.seo_description ?? p.title },
        { property: "og:url", content: `${SITE_URL}/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/${params.slug}` }],
    };
  },
  component: ContentPageView,
  notFoundComponent: () => (
    <Section>
      <div className="text-center py-20">
        <h1 className="font-display text-4xl">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you're looking for doesn't exist.</p>
      </div>
    </Section>
  ),
  errorComponent: () => (
    <Section><div className="text-center py-20"><h1 className="font-display text-4xl">Something went wrong</h1></div></Section>
  ),
});

function ContentPageView() {
  const { page } = Route.useLoaderData();
  return (
    <>
      <PageHeader eyebrow="Wild Jawai Safari" title={page.title} image={photoHero} />
      <Section>
        <article
          className="prose prose-lg max-w-3xl mx-auto prose-headings:font-display prose-a:text-gold"
          dangerouslySetInnerHTML={{ __html: page.body_html ?? "" }}
        />
      </Section>
    </>
  );
}
