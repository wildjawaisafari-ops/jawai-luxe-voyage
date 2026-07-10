import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type SiteSettings = {
  id: string;
  whatsapp_number: string;
  phone_number: string;
  email: string;
  address: string;
  business_hours: string | null;
  map_lat: number | null;
  map_lng: number | null;
  google_place_id: string | null;
  instagram_url: string | null;
  facebook_url: string | null;
  youtube_url: string | null;
  twitter_url: string | null;
  hero_title: string;
  hero_subtitle: string;
  hero_image_url: string | null;
  hero_video_url: string | null;
  hero_cta_primary_label: string | null;
  hero_cta_secondary_label: string | null;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  og_image_url: string | null;
  logo_url: string | null;
  favicon_url: string | null;
  homepage_banner_text: string | null;
  homepage_banner_url: string | null;
  homepage_banner_enabled: boolean | null;
};

export async function submitInquiry(input: {
  name: string; email?: string; phone?: string; travel_date?: string;
  guests?: number; package?: string; message?: string; source?: string;
}) {
  const { error } = await supabase.from("inquiries").insert(input);
  return { error };
}

export async function trackEvent(event: string, meta?: Record<string, any>) {
  try {
    await supabase.from("analytics_events").insert({
      event, path: typeof window !== "undefined" ? window.location.pathname : null, meta: meta ?? null,
    });
  } catch {}
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ["site_settings"],
    staleTime: 5 * 60_000,
    queryFn: async () => {
      const { data } = await supabase.from("site_settings").select("*").limit(1).maybeSingle();
      return data as SiteSettings | null;
    },
  });
}

export function usePackages(featuredOnly = false) {
  return useQuery({
    queryKey: ["packages", featuredOnly],
    staleTime: 60_000,
    queryFn: async () => {
      let q = supabase.from("safari_packages").select("*").eq("published", true).order("sort_order");
      if (featuredOnly) q = q.eq("featured", true);
      const { data } = await q;
      return data ?? [];
    },
  });
}

export function useFaqs() {
  return useQuery({
    queryKey: ["faqs"],
    staleTime: 60_000,
    queryFn: async () => {
      const { data } = await supabase.from("faqs").select("*").eq("published", true).order("sort_order");
      return data ?? [];
    },
  });
}

export function useReviews(source?: "manual" | "google") {
  return useQuery({
    queryKey: ["reviews", source],
    staleTime: 60_000,
    queryFn: async () => {
      let q = supabase.from("reviews").select("*").eq("published", true).order("sort_order");
      if (source) q = q.eq("source", source);
      const { data } = await q;
      return data ?? [];
    },
  });
}

export function useGallery() {
  return useQuery({
    queryKey: ["gallery"],
    staleTime: 60_000,
    queryFn: async () => {
      const { data } = await supabase.from("gallery_images").select("*").eq("published", true).order("sort_order");
      return data ?? [];
    },
  });
}

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    staleTime: 60_000,
    queryFn: async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id,slug,title,excerpt,cover_image,category,tags,published_at")
        .eq("status", "published")
        .order("published_at", { ascending: false });
      return data ?? [];
    },
  });
}

export function whatsappHref(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function displayPhone(raw: string) {
  // 919256928266 -> +91 92569 28266
  const s = raw.replace(/\D/g, "");
  if (s.length === 12) return `+${s.slice(0, 2)} ${s.slice(2, 7)} ${s.slice(7)}`;
  return raw.startsWith("+") ? raw : `+${raw}`;
}
