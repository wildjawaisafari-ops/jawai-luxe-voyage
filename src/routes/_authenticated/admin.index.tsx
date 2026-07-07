import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: Dashboard,
});

function Dashboard() {
  const [stats, setStats] = useState({ packages: 0, blogs: 0, gallery: 0, faqs: 0, reviews: 0 });

  useEffect(() => {
    (async () => {
      const [p, b, g, f, r] = await Promise.all([
        supabase.from("safari_packages").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("gallery_images").select("id", { count: "exact", head: true }),
        supabase.from("faqs").select("id", { count: "exact", head: true }),
        supabase.from("reviews").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        packages: p.count ?? 0,
        blogs: b.count ?? 0,
        gallery: g.count ?? 0,
        faqs: f.count ?? 0,
        reviews: r.count ?? 0,
      });
    })();
  }, []);

  const cards = [
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-2xl p-6 border border-black/5 shadow-soft">
            <div className="text-3xl font-display text-gold">{c.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
