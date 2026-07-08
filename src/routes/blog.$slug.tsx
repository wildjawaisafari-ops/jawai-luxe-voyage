import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "../components/site/Section";
import { getPublishedBlog } from "../lib/blog.functions";

const SITE_URL = "https://jawai-safari.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPublishedBlog({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    const title = post?.seo_title || post?.title || "Jawai Safari Blog";
    const description = post?.seo_description || post?.excerpt || "Jawai Safari story.";
    const image = post?.seo_og_image || post?.cover_image;
    const url = `${SITE_URL}/blog/${params.slug}`;
    return {
      meta: [
        { title: `${title} | Wild Jawai Safari` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(image ? [{ property: "og:image", content: image }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: post ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description,
          image: image ? [image] : undefined,
          datePublished: post.published_at,
          author: { "@type": "Organization", name: "Wild Jawai Safari" },
          publisher: { "@type": "Organization", name: "Wild Jawai Safari" },
          mainEntityOfPage: url,
        }),
      }] : [],
    };
  },
  component: BlogPost,
  errorComponent: () => (
    <div className="min-h-[60vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="font-display text-3xl">Article unavailable</h1>
        <p className="mt-2 text-muted-foreground">Please try again in a moment.</p>
        <Link to="/blog" className="btn-gold btn-gold-hover mt-6">Back to blog</Link>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="font-display text-3xl">Article not found</h1>
        <Link to="/blog" className="btn-gold btn-gold-hover mt-6">Browse all articles</Link>
      </div>
    </div>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <article className="pt-32">
      {post.cover_image && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden">
            <img src={post.cover_image} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>
      )}
      <Section>
        <div className="max-w-3xl mx-auto">
          {post.category && <span className="eyebrow text-gold-deep">{post.category}</span>}
          <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">{post.title}</h1>
          {post.published_at && (
            <time className="mt-4 block text-sm text-muted-foreground">
              {new Date(post.published_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          )}
          <div
            className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-a:text-gold"
            dangerouslySetInnerHTML={{ __html: post.body_html }}
          />
          <div className="mt-12 pt-8 border-t">
            <Link to="/blog" className="btn-ghost-gold btn-ghost-gold-hover">← All articles</Link>
          </div>
        </div>
      </Section>
    </article>
  );
}
