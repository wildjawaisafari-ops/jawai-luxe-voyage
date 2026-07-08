import { createFileRoute } from "@tanstack/react-router";
import { CrudTable } from "@/components/admin/CrudTable";

export const Route = createFileRoute("/_authenticated/admin/blogs")({
  component: BlogsAdmin,
});

function BlogsAdmin() {
  return (
    <CrudTable
      table="blog_posts"
      title="Blog Posts"
      orderBy="created_at"
      defaults={{ status: "draft", tags: [] }}
      columns={[
        { key: "title", label: "Title" },
        { key: "slug", label: "Slug" },
        { key: "category", label: "Category" },
        { key: "status", label: "Status" },
        { key: "published_at", label: "Published" },
      ]}
      fields={[
        { key: "title", label: "Title", type: "text" },
        { key: "slug", label: "URL Slug (e.g. best-time-jawai-safari)", type: "text" },
        { key: "excerpt", label: "Excerpt (shown on blog list)", type: "textarea", rows: 2 },
        { key: "cover_image", label: "Cover Image URL", type: "url" },
        { key: "body_html", label: "Body (HTML — use <h2>, <p>, <img src=...>, <ul>, <a>, etc.)", type: "textarea", rows: 16 },
        { key: "category", label: "Category (e.g. Guides, Wildlife, Photography)", type: "text" },
        { key: "tags", label: "Tags (comma separated)", type: "tags" },
        { key: "status", label: "Status", type: "select", options: ["draft", "scheduled", "published"] },
        { key: "published_at", label: "Publish Date (YYYY-MM-DD HH:MM+00, blank = now on publish)", type: "text" },
        { key: "seo_title", label: "SEO Title (<60 chars, overrides post title)", type: "text" },
        { key: "seo_description", label: "SEO Description (<160 chars)", type: "textarea", rows: 2 },
        { key: "seo_og_image", label: "OG Image URL (social share, overrides cover)", type: "url" },
      ]}
    />
  );
}
