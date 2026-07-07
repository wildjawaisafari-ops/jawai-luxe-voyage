import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Pencil, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

export type FieldSpec =
  | { key: string; label: string; type: "text" | "number" | "url" }
  | { key: string; label: string; type: "textarea"; rows?: number }
  | { key: string; label: string; type: "bool" }
  | { key: string; label: string; type: "tags" }
  | { key: string; label: string; type: "select"; options: string[] };

export function CrudTable({
  table,
  title,
  orderBy = "sort_order",
  columns,
  fields,
  defaults = {},
  render,
}: {
  table: string;
  title: string;
  orderBy?: string;
  columns: { key: string; label: string }[];
  fields: FieldSpec[];
  defaults?: Record<string, any>;
  render?: (row: any, key: string) => React.ReactNode;
}) {
  const [rows, setRows] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [open, setOpen] = useState(false);

  async function load() {
    const { data, error } = await supabase.from(table as any).select("*").order(orderBy, { ascending: true });
    if (error) toast.error(error.message);
    else setRows(data ?? []);
  }
  useEffect(() => { load(); }, []); // eslint-disable-line

  function openNew() { setEditing({ ...defaults }); setOpen(true); }
  function openEdit(row: any) { setEditing({ ...row }); setOpen(true); }

  async function save() {
    if (!editing) return;
    const payload = { ...editing };
    delete payload.created_at;
    delete payload.updated_at;
    let error;
    if (payload.id) {
      ({ error } = await supabase.from(table as any).update(payload).eq("id", payload.id));
    } else {
      delete payload.id;
      ({ error } = await supabase.from(table as any).insert(payload));
    }
    if (error) return toast.error(error.message);
    toast.success("Saved");
    setOpen(false);
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this item?")) return;
    const { error } = await supabase.from(table as any).delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted"); load(); }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl">{title}</h1>
        <Button onClick={openNew}><Plus className="h-4 w-4 mr-1" /> New</Button>
      </div>

      <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/5">
            <tr>
              {columns.map((c) => <th key={c.key} className="text-left p-3 font-medium">{c.label}</th>)}
              <th className="p-3 w-24"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-black/5">
                {columns.map((c) => (
                  <td key={c.key} className="p-3 align-top">
                    {render ? render(r, c.key) : String(r[c.key] ?? "")}
                  </td>
                ))}
                <td className="p-3 flex gap-1 justify-end">
                  <Button size="icon" variant="ghost" onClick={() => openEdit(r)}><Pencil className="h-4 w-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => remove(r.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={columns.length + 1} className="p-8 text-center text-muted-foreground">No items yet.</td></tr>}
          </tbody>
        </table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing?.id ? "Edit" : "New"} {title.replace(/s$/, "")}</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              {fields.map((f) => (
                <div key={f.key}>
                  <Label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">{f.label}</Label>
                  {f.type === "textarea" ? (
                    <Textarea rows={f.rows ?? 4} value={editing[f.key] ?? ""} onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })} />
                  ) : f.type === "bool" ? (
                    <div className="flex items-center gap-2"><Switch checked={!!editing[f.key]} onCheckedChange={(v) => setEditing({ ...editing, [f.key]: v })} /><span className="text-sm text-muted-foreground">{editing[f.key] ? "Yes" : "No"}</span></div>
                  ) : f.type === "tags" ? (
                    <Input value={(editing[f.key] ?? []).join(", ")} onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} placeholder="Comma separated" />
                  ) : f.type === "select" ? (
                    <select className="w-full border rounded-md h-10 px-3 text-sm bg-white" value={editing[f.key] ?? f.options[0]} onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })}>
                      {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <Input type={f.type === "number" ? "number" : "text"} value={editing[f.key] ?? ""} onChange={(e) => setEditing({ ...editing, [f.key]: f.type === "number" ? (e.target.value === "" ? null : Number(e.target.value)) : e.target.value })} />
                  )}
                </div>
              ))}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={save}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
