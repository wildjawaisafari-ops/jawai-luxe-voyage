import { createFileRoute } from "@tanstack/react-router";
import { CrudTable } from "@/components/admin/CrudTable";

export const Route = createFileRoute("/_authenticated/admin/reviews")({
  component: ReviewsAdmin,
});

function ReviewsAdmin() {
  return (
    <CrudTable
      table="reviews"
      title="Reviews"
      defaults={{ published: true, source: "manual", rating: 5, sort_order: 0 }}
      columns={[
        { key: "name", label: "Name" },
        { key: "location", label: "Location" },
        { key: "rating", label: "★" },
        { key: "source", label: "Source" },
        { key: "published", label: "Published" },
      ]}
      render={(r, k) => k === "published" ? (r[k] ? "✓" : "—") : String(r[k] ?? "")}
      fields={[
        { key: "name", label: "Name", type: "text" },
        { key: "location", label: "Location", type: "text" },
        { key: "rating", label: "Rating (1-5)", type: "number" },
        { key: "quote", label: "Quote", type: "textarea" },
        { key: "source", label: "Source", type: "select", options: ["manual", "google"] },
        { key: "sort_order", label: "Sort Order", type: "number" },
        { key: "published", label: "Published", type: "bool" },
      ]}
    />
  );
}
