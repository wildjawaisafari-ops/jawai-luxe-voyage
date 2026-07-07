import { createFileRoute } from "@tanstack/react-router";
import { CrudTable } from "@/components/admin/CrudTable";

export const Route = createFileRoute("/_authenticated/admin/faqs")({
  component: FaqsAdmin,
});

function FaqsAdmin() {
  return (
    <CrudTable
      table="faqs"
      title="FAQs"
      defaults={{ published: true, sort_order: 0 }}
      columns={[
        { key: "question", label: "Question" },
        { key: "sort_order", label: "Order" },
        { key: "published", label: "Published" },
      ]}
      render={(r, k) => k === "published" ? (r[k] ? "✓" : "—") : String(r[k] ?? "")}
      fields={[
        { key: "question", label: "Question", type: "text" },
        { key: "answer", label: "Answer", type: "textarea", rows: 5 },
        { key: "sort_order", label: "Sort Order", type: "number" },
        { key: "published", label: "Published", type: "bool" },
      ]}
    />
  );
}
