import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/inquiries")({
  component: InquiriesPage,
});

type Inquiry = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  travel_date: string | null;
  guests: number | null;
  package: string | null;
  message: string | null;
  source: string | null;
  status: string;
  created_at: string;
};

function InquiriesPage() {
  const [rows, setRows] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState<string>("all");

  async function load() {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setRows(data ?? []);
  }
  useEffect(() => { load(); }, []);

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase.from("inquiries").update({ status }).eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Updated"); load(); }
  }
  async function del(id: string) {
    if (!confirm("Delete this inquiry?")) return;
    const { error } = await supabase.from("inquiries").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted"); load(); }
  }

  function exportCsv() {
    const header = ["Date","Name","Email","Phone","Travel Date","Guests","Package","Status","Message","Source"];
    const csv = [header.join(",")].concat(
      rows.map(r => [r.created_at, r.name, r.email ?? "", r.phone ?? "", r.travel_date ?? "", r.guests ?? "", r.package ?? "", r.status, (r.message ?? "").replace(/\n/g, " "), r.source ?? ""]
        .map(v => `"${String(v).replace(/"/g, '""')}"`).join(","))
    ).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `inquiries-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  }

  const filtered = filter === "all" ? rows : rows.filter(r => r.status === filter);
  const statuses = ["all", "new", "contacted", "booked", "closed"];

  return (
    <div>
      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <h1 className="font-display text-3xl">Inquiries ({rows.length})</h1>
        <div className="flex gap-2 flex-wrap">
          {statuses.map(s => (
            <Button key={s} size="sm" variant={filter === s ? "default" : "outline"} onClick={() => setFilter(s)}>
              {s} {s !== "all" && `(${rows.filter(r => r.status === s).length})`}
            </Button>
          ))}
          <Button size="sm" variant="outline" onClick={exportCsv}>Export CSV</Button>
        </div>
      </div>
      <div className="space-y-3">
        {filtered.length === 0 && <div className="text-muted-foreground text-sm">No inquiries.</div>}
        {filtered.map(r => (
          <div key={r.id} className="bg-white rounded-2xl p-5 border border-black/5 shadow-soft">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{r.name}</h3>
                  <Badge variant={r.status === "new" ? "default" : "secondary"}>{r.status}</Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{new Date(r.created_at).toLocaleString()}</div>
                <div className="mt-3 text-sm grid gap-1 sm:grid-cols-2">
                  {r.phone && <div>📞 <a href={`tel:${r.phone}`} className="hover:text-gold">{r.phone}</a></div>}
                  {r.email && <div>✉️ <a href={`mailto:${r.email}`} className="hover:text-gold">{r.email}</a></div>}
                  {r.travel_date && <div>📅 {r.travel_date}</div>}
                  {r.guests && <div>👥 {r.guests} guests</div>}
                  {r.package && <div>🎒 {r.package}</div>}
                </div>
                {r.message && <p className="mt-3 text-sm whitespace-pre-wrap bg-muted/50 rounded-lg p-3">{r.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <select value={r.status} onChange={(e) => updateStatus(r.id, e.target.value)}
                  className="text-xs rounded border border-black/10 px-2 py-1">
                  <option value="new">new</option>
                  <option value="contacted">contacted</option>
                  <option value="booked">booked</option>
                  <option value="closed">closed</option>
                </select>
                <Button size="sm" variant="ghost" onClick={() => del(r.id)}>Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
