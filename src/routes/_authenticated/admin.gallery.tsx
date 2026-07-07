import { createFileRoute } from "@tanstack/react-router";
import { CrudTable } from "@/components/admin/CrudTable";

export const Route = createFileRoute("/_authenticated/admin/gallery")({
  component: GalleryAdmin,
});

const CATEGORIES = ["leopard","safari","birds","village","jawai_dam","luxury_stay","wildlife","guests","photography"];

function GalleryAdmin() {
  return (
    <CrudTable
      table="gallery_images"
      title="Gallery"
      defaults={{ published: true, sort_order: 0, category: "safari" }}
      columns={[
        { key: "url", label: "Image" },
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
        { key: "sort_order", label: "Order" },
        { key: "published", label: "Published" },
      ]}
      render={(r, k) => {
        if (k === "url") return <img src={r.url} alt={r.alt_text} className="h-14 w-20 object-cover rounded" />;
        if (k === "published") return r.published ? "✓" : "—";
        return String(r[k] ?? "");
      }}
      fields={[
        { key: "url", label: "Image URL", type: "url" },
        { key: "title", label: "Title", type: "text" },
        { key: "alt_text", label: "Alt Text (for SEO & accessibility)", type: "text" },
        { key: "category", label: "Category", type: "select", options: CATEGORIES },
        { key: "sort_order", label: "Sort Order", type: "number" },
        { key: "published", label: "Published", type: "bool" },
      ]}
    />
  );
}
