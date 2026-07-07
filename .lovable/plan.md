
## Phase A — Admin CMS Foundation

Enable Lovable Cloud, build a full admin panel, wire the existing public site to read from the database.

### 1. Backend (Lovable Cloud)

Enable Cloud, then create these tables with RLS + `has_role` pattern:

- `user_roles` (admin/editor enum) + `has_role()` security-definer fn — auto-grant `admin` to `wildjawaisafari@gmail.com` on signup via trigger.
- `site_settings` (single-row: whatsapp, phone, email, address, map lat/lng, social links, google_place_id, hero title/subtitle, SEO defaults).
- `safari_packages` (name, slug, tagline, description, price_with_hitea, price_without_hitea, duration, image_url, highlights[], featured, published, sort_order, seo_title, seo_description).
- `blog_posts` (title, slug, excerpt, body_html, cover_image, category, tags[], status: draft/scheduled/published, published_at, seo_title, seo_description, seo_og_image).
- `gallery_images` (url, alt_text, title, category enum, sort_order, published).
- `faqs` (question, answer, sort_order, published).
- `reviews` (name, location, rating, quote, source: manual/google, published, sort_order).
- Storage buckets: `blog-images`, `gallery`, `package-images` (public read, admin write).

### 2. Auth

- `/auth` route — email+password sign-in/up (public).
- `_authenticated/route.tsx` gate (integration-managed).
- Signup trigger auto-inserts `admin` role for `wildjawaisafari@gmail.com`; everyone else gets no role and can't reach admin.

### 3. Admin Panel (`/admin/*`)

Sidebar layout under `_authenticated`, gated by `has_role('admin')`:

- **Dashboard** — quick stats.
- **Site Settings** — WhatsApp/phone/email/address/map/socials/Place ID/hero.
- **Packages** — table + create/edit form (image upload, highlights, pricing, publish toggle, featured toggle, drag-reorder).
- **Blogs** — list + rich-text editor (TipTap), cover upload, slug, category/tags, draft/schedule/publish, SEO fields.
- **Gallery** — grid with drag-drop reorder, category filter, bulk upload, alt-text/title editing, delete/replace.
- **FAQs** — sortable list, inline edit.
- **Reviews** — manual reviews list + toggle to prefer live Google reviews.
- **SEO Settings** — global title/description/keywords/OG image.

### 4. Google Reviews (live)

Server function fetches Google Places Details API using `ChIJRZU3VxS_QjkRUprBx-E30jI` via Google Maps connector. Cached 6h. Falls back to manual reviews if API fails. Homepage shows live rating + reviews with "View on Google" button.

### 5. Public Site — rewire to DB

- `site-data.ts` constants → replaced by server-fn loaders reading `site_settings`, `safari_packages`, `faqs`, `reviews`, `gallery_images`.
- Homepage, packages, gallery, FAQ, contact, footer all read from DB.
- Contact page: Google Map iframe using address from settings.
- WhatsApp/phone buttons everywhere read from `site_settings`.

### 6. Blog frontend

- `/blog` index (list, category filter, search).
- `/blog/$slug` post page (SEO head, JSON-LD Article, related posts).
- Sitemap includes published blog posts.

### 7. SEO polish

- Per-page `head()` with keyword-optimized titles/descriptions for all 4 zone-based landing pages already present.
- BreadcrumbList schema on all deep routes.
- Sitemap.xml server route lists dynamic blogs + packages + gallery.
- Robots.txt keeps `/admin` and `/auth` disallowed.

### Out of scope for Phase A (Phase B)

- 18 individual zone/tour landing pages (Morning, Evening, Sena, Kothar, etc.) — after CMS is stable.
- Blog auto-writing 10 seed articles — I'll seed 2 sample posts; you or I add more via admin.
- Advanced analytics dashboard.

### Technical notes

- Stack: TanStack Start + Supabase (Cloud) + TipTap (rich text) + @dnd-kit (drag-drop) + shadcn.
- Google Maps connector required for live Reviews (I'll prompt to link).
- Existing luxury design tokens preserved; admin uses shadcn defaults.

### Delivery order (multiple turns)

1. Enable Cloud + migrations + roles + storage buckets + seed from current `site-data.ts`.
2. Auth pages + admin shell + Site Settings + Packages CRUD.
3. Blog CRUD + editor + public blog pages.
4. Gallery CRUD + FAQ CRUD + Reviews CRUD.
5. Google Places live reviews + Contact map + rewire all public pages to DB.
6. SEO sweep + sitemap update.

Ready to start with step 1?
