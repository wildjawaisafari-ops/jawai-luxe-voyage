import { createFileRoute } from "@tanstack/react-router";
import { CrudTable } from "@/components/admin/CrudTable";

export const Route = createFileRoute("/_authenticated/admin/pages")({
  component: PagesAdmin,
});

function PagesAdmin() {
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        Manage content pages (Privacy Policy, Terms, Refund Policy, Cancellation Policy, About, etc.).
        Each page is accessible at <code className="text-gold">/&lt;slug&gt;</code>.
      </p>
      <CrudTable
        table="content_pages"
        title="Content Pages"
        orderBy="slug"
        defaults={{ published: true }}
        columns={[
          { key: "title", label: "Title" },
          { key: "slug", label: "Slug (URL)" },
          { key: "published", label: "Published" },
        ]}
        render={(r, k) => k === "published" ? (r[k] ? "✓" : "—") : String(r[k] ?? "")}
        fields={[
          { key: "title", label: "Page Title", type: "text" },
          { key: "slug", label: "URL Slug (e.g. privacy-policy)", type: "text" },
          { key: "body_html", label: "Body (HTML — use <h2>, <p>, <ul>, <a>, etc.)", type: "textarea", rows: 20 },
          { key: "seo_title", label: "SEO Title (<60 chars)", type: "text" },
          { key: "seo_description", label: "SEO Description (<160 chars)", type: "textarea", rows: 2 },
          { key: "published", label: "Published", type: "bool" },
        ]}
      />
    </div>
  );
}
