import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

async function publicClient() {
  const { createClient } = await import("@supabase/supabase-js");
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
  });
}

export const getPublishedBlog = createServerFn({ method: "GET" })
  .inputValidator((input) => z.object({ slug: z.string() }).parse(input))
  .handler(async ({ data }) => {
    const supa = await publicClient();
    const { data: post } = await supa
      .from("blog_posts")
      .select("id,slug,title,excerpt,body_html,cover_image,category,tags,published_at,seo_title,seo_description,seo_og_image")
      .eq("slug", data.slug)
      .eq("status", "published")
      .maybeSingle();
    return post;
  });

export const listPublishedBlogs = createServerFn({ method: "GET" }).handler(async () => {
  const supa = await publicClient();
  const { data } = await supa
    .from("blog_posts")
    .select("slug,published_at,updated_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  return data ?? [];
});
