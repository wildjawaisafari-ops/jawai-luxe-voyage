import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://jawai-safari.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { createClient } = await import("@supabase/supabase-js");
        const supa = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
          auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
        });

        const staticEntries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/packages", changefreq: "weekly", priority: "0.9" },
          { path: "/gallery", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
        ];

        const [{ data: posts }, { data: packages }] = await Promise.all([
          supa.from("blog_posts").select("slug,updated_at,published_at").eq("status", "published"),
          supa.from("safari_packages").select("slug,updated_at").eq("published", true),
        ]);

        const rows = [
          ...staticEntries.map((e) => ({ loc: `${BASE_URL}${e.path}`, changefreq: e.changefreq, priority: e.priority })),
          ...(posts ?? []).map((p) => ({
            loc: `${BASE_URL}/blog/${p.slug}`,
            lastmod: (p.updated_at ?? p.published_at) ?? undefined,
            changefreq: "monthly",
            priority: "0.7",
          })),
          ...(packages ?? []).map((p) => ({
            loc: `${BASE_URL}/packages#${p.slug}`,
            lastmod: p.updated_at ?? undefined,
            changefreq: "monthly",
            priority: "0.7",
          })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...rows.map((r) => [
            "  <url>",
            `    <loc>${r.loc}</loc>`,
            r.lastmod ? `    <lastmod>${new Date(r.lastmod).toISOString()}</lastmod>` : null,
            r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : null,
            r.priority ? `    <priority>${r.priority}</priority>` : null,
            "  </url>",
          ].filter(Boolean).join("\n")),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=1800" },
        });
      },
    },
  },
});
