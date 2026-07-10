import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/settings")({
  component: SettingsPage,
});

type Settings = Record<string, any>;

function SettingsPage() {
  const [s, setS] = useState<Settings | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from("site_settings").select("*").limit(1).maybeSingle().then(({ data }) => setS(data));
  }, []);

  async function save() {
    if (!s) return;
    setSaving(true);
    const { id, created_at, updated_at, ...payload } = s;
    void created_at; void updated_at;
    const { error } = await (supabase.from("site_settings") as any).update(payload).eq("id", id);
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Settings saved");
  }

  if (!s) return <div>Loading…</div>;
  const bind = (k: string) => ({ value: s[k] ?? "", onChange: (e: any) => setS({ ...s, [k]: e.target.value }) });

  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-3xl mb-6">Site Settings</h1>
      <div className="bg-white rounded-2xl p-6 border border-black/5 space-y-6">
        <Section title="Branding">
          <Field label="Logo URL (shown in header)"><Input {...bind("logo_url")} placeholder="https://…/logo.png" /></Field>
          <Field label="Favicon URL (browser tab icon, .png or .ico)"><Input {...bind("favicon_url")} /></Field>
        </Section>

        <Section title="Homepage Banner (announcement strip)">
          <div className="flex items-center gap-3">
            <input type="checkbox" checked={!!s.homepage_banner_enabled} onChange={(e) => setS({ ...s, homepage_banner_enabled: e.target.checked })} />
            <span className="text-sm">Show banner at top of site</span>
          </div>
          <Field label="Banner Text"><Input {...bind("homepage_banner_text")} placeholder="Season 2026 bookings open — WhatsApp for early-bird rates" /></Field>
          <Field label="Banner Link (optional)"><Input {...bind("homepage_banner_url")} placeholder="/packages" /></Field>
        </Section>

        <Section title="Contact & Booking">
          <Field label="WhatsApp Number (with country code, no +)" ><Input {...bind("whatsapp_number")} placeholder="919256928266" /></Field>
          <Field label="Phone Number"><Input {...bind("phone_number")} /></Field>
          <Field label="Email"><Input {...bind("email")} /></Field>
          <Field label="Address"><Textarea {...bind("address")} rows={2} /></Field>
          <Field label="Business Hours"><Textarea {...bind("business_hours")} rows={2} placeholder="Season: October — April · Sunrise & Sunset drives" /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Map Latitude"><Input {...bind("map_lat")} type="number" step="any" /></Field>
            <Field label="Map Longitude"><Input {...bind("map_lng")} type="number" step="any" /></Field>
          </div>
          <Field label="Google Place ID"><Input {...bind("google_place_id")} /></Field>
        </Section>

        <Section title="Social Media">
          <Field label="Instagram URL"><Input {...bind("instagram_url")} /></Field>
          <Field label="Facebook URL"><Input {...bind("facebook_url")} /></Field>
          <Field label="YouTube URL"><Input {...bind("youtube_url")} /></Field>
          <Field label="Twitter / X URL"><Input {...bind("twitter_url")} /></Field>
        </Section>

        <Section title="Homepage Hero">
          <Field label="Hero Title"><Input {...bind("hero_title")} /></Field>
          <Field label="Hero Subtitle"><Textarea {...bind("hero_subtitle")} rows={2} /></Field>
          <Field label="Hero Background Image URL (optional — overrides default)"><Input {...bind("hero_image_url")} /></Field>
          <Field label="Hero Background Video URL (optional — mp4)"><Input {...bind("hero_video_url")} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Primary CTA Label"><Input {...bind("hero_cta_primary_label")} placeholder="Book Now" /></Field>
            <Field label="Secondary CTA Label"><Input {...bind("hero_cta_secondary_label")} placeholder="WhatsApp" /></Field>
          </div>
        </Section>

        <Section title="SEO Defaults">
          <Field label="SEO Title (under 60 chars)"><Input {...bind("seo_title")} /></Field>
          <Field label="SEO Description (under 160 chars)"><Textarea {...bind("seo_description")} rows={3} /></Field>
          <Field label="SEO Keywords (comma separated)"><Textarea {...bind("seo_keywords")} rows={3} /></Field>
          <Field label="OG Image URL (social share preview)"><Input {...bind("og_image_url")} /></Field>
        </Section>

        <Button onClick={save} disabled={saving}>{saving ? "Saving…" : "Save Changes"}</Button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl mb-3 text-gold">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><Label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>{children}</div>;
}
