import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: Dashboard,
});

function Dashboard() {
  const [stats, setStats] = useState({ packages: 0, blogs: 0, gallery: 0, faqs: 0, reviews: 0, inquiries: 0, newInquiries: 0, whatsappClicks: 0, callClicks: 0 });

  useEffect(() => {
    (async () => {
      const [p, b, g, f, r, i, iNew, wa, call] = await Promise.all([
        supabase.from("safari_packages").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("gallery_images").select("id", { count: "exact", head: true }),
        supabase.from("faqs").select("id", { count: "exact", head: true }),
        supabase.from("reviews").select("id", { count: "exact", head: true }),
        supabase.from("inquiries").select("id", { count: "exact", head: true }),
        supabase.from("inquiries").select("id", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("analytics_events").select("id", { count: "exact", head: true }).eq("event", "whatsapp_click"),
        supabase.from("analytics_events").select("id", { count: "exact", head: true }).eq("event", "call_click"),
      ]);
      setStats({
        packages: p.count ?? 0, blogs: b.count ?? 0, gallery: g.count ?? 0,
        faqs: f.count ?? 0, reviews: r.count ?? 0,
        inquiries: i.count ?? 0, newInquiries: iNew.count ?? 0,
        whatsappClicks: wa.count ?? 0, callClicks: call.count ?? 0,
      });
    })();
  }, []);

  const cards = [
    { label: "New Inquiries", value: stats.newInquiries, highlight: true },
    { label: "Total Inquiries", value: stats.inquiries },
    { label: "WhatsApp Clicks", value: stats.whatsappClicks },
    { label: "Call Clicks", value: stats.callClicks },
    { label: "Safari Packages", value: stats.packages },
    { label: "Blog Posts", value: stats.blogs },
    { label: "Gallery Images", value: stats.gallery },
    { label: "FAQs", value: stats.faqs },
    { label: "Reviews", value: stats.reviews },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl mb-2">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Manage your entire Wild Jawai Safari website from here.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((c) => (
          <div key={c.label} className={`rounded-2xl p-6 border shadow-soft ${c.highlight ? "bg-gold/10 border-gold/40" : "bg-white border-black/5"}`}>
            <div className="text-3xl font-display text-gold">{c.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
