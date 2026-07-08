import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

export type GooglePlace = {
  rating: number | null;
  user_ratings_total: number | null;
  url: string | null;
  reviews: GoogleReview[];
};

let cache: { at: number; placeId: string; data: GooglePlace } | null = null;
const TTL_MS = 36 * 60 * 60 * 1000;

export const fetchGoogleReviews = createServerFn({ method: "GET" }).handler(async (): Promise<GooglePlace | null> => {
  const { createClient } = await import("@supabase/supabase-js");
  const supa = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
  });
  const { data: settings } = await supa.from("site_settings").select("google_place_id").limit(1).maybeSingle();
  const placeId = settings?.google_place_id;
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!placeId || !key) return null;

  if (cache && cache.placeId === placeId && Date.now() - cache.at < TTL_MS) return cache.data;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=rating,user_ratings_total,url,reviews&reviews_sort=newest&key=${key}`;
    const res = await fetch(url);
    const json: any = await res.json();
    if (json.status !== "OK") {
      console.error("Google Places error:", json.status, json.error_message);
      return null;
    }
    const data: GooglePlace = {
      rating: json.result?.rating ?? null,
      user_ratings_total: json.result?.user_ratings_total ?? null,
      url: json.result?.url ?? null,
      reviews: (json.result?.reviews ?? []).slice(0, 6).map((r: any) => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
      })),
    };
    cache = { at: Date.now(), placeId, data };
    return data;
  } catch (e) {
    console.error("Google reviews fetch failed", e);
    return null;
  }
});
