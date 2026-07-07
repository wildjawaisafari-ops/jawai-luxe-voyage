import { createFileRoute, Outlet, Link, useNavigate } from "@tanstack/react-router";
import { useIsAdmin } from "@/lib/admin-hooks";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Wild Jawai Safari" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLayout,
});

const tabs = [
  { to: "/admin", label: "Dashboard", exact: true },
  { to: "/admin/settings", label: "Site Settings" },
  { to: "/admin/packages", label: "Packages" },
  { to: "/admin/blogs", label: "Blogs" },
  { to: "/admin/gallery", label: "Gallery" },
  { to: "/admin/faqs", label: "FAQs" },
  { to: "/admin/reviews", label: "Reviews" },
] as const;

function AdminLayout() {
  const { loading, isAdmin } = useIsAdmin();
  const navigate = useNavigate();

  if (loading) return <div className="min-h-screen grid place-items-center">Loading…</div>;
  if (!isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center px-4 text-center">
        <div>
          <h1 className="font-display text-3xl">Access denied</h1>
          <p className="mt-2 text-muted-foreground">You are signed in but do not have admin access.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Button variant="outline" onClick={async () => { await supabase.auth.signOut(); navigate({ to: "/auth" }); }}>
              Sign out
            </Button>
            <Link to="/" className="btn-gold btn-gold-hover">Back to site</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-black/5 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="font-display text-lg">Wild Jawai <span className="text-gold">Admin</span></Link>
          <div className="flex items-center gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">View Site</Link>
            <Button variant="ghost" size="sm" onClick={async () => { await supabase.auth.signOut(); navigate({ to: "/auth" }); }}>
              <LogOut className="h-4 w-4 mr-1" /> Sign out
            </Button>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              activeOptions={{ exact: !!t.exact }}
              activeProps={{ className: "text-gold border-gold" }}
              className="px-3 py-3 text-sm border-b-2 border-transparent whitespace-nowrap hover:text-gold transition-colors"
            >
              {t.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
