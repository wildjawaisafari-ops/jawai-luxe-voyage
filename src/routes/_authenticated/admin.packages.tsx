import { createFileRoute } from "@tanstack/react-router";
import { CrudTable } from "@/components/admin/CrudTable";

export const Route = createFileRoute("/_authenticated/admin/packages")({
  component: PackagesAdmin,
});

function PackagesAdmin() {
  return (
    <CrudTable
      table="safari_packages"
      title="Safari Packages"
      defaults={{ published: true, featured: false, sort_order: 0, highlights: [] }}
      columns={[
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug" },
        { key: "price_with_hitea", label: "Price (Hi-Tea)" },
        { key: "published", label: "Published" },
        { key: "featured", label: "Featured" },
        { key: "sort_order", label: "Order" },
      ]}
      render={(r, k) => (k === "published" || k === "featured") ? (r[k] ? "✓" : "—") : String(r[k] ?? "")}
      fields={[
        { key: "name", label: "Name", type: "text" },
        { key: "slug", label: "URL Slug", type: "text" },
        { key: "tagline", label: "Tagline", type: "text" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "price_with_hitea", label: "Price with Hi-Tea", type: "text" },
        { key: "price_without_hitea", label: "Price without Hi-Tea", type: "text" },
        { key: "duration", label: "Duration", type: "text" },
        { key: "image_url", label: "Image URL", type: "url" },
        { key: "highlights", label: "Highlights", type: "tags" },
        { key: "seo_title", label: "SEO Title", type: "text" },
        { key: "seo_description", label: "SEO Description", type: "textarea" },
        { key: "sort_order", label: "Sort Order", type: "number" },
        { key: "featured", label: "Featured", type: "bool" },
        { key: "published", label: "Published", type: "bool" },
      ]}
    />
  );
}
