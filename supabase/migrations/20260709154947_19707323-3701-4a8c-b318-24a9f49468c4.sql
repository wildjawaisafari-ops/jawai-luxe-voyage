
-- Inquiries
CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  phone text,
  travel_date date,
  guests int,
  package text,
  message text,
  source text DEFAULT 'website',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.inquiries TO authenticated;
GRANT INSERT ON public.inquiries TO anon;
GRANT ALL ON public.inquiries TO service_role;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit inquiries" ON public.inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins manage inquiries" ON public.inquiries FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_inquiries_updated BEFORE UPDATE ON public.inquiries
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Content pages
CREATE TABLE public.content_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  body_html text,
  seo_title text,
  seo_description text,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.content_pages TO authenticated;
GRANT SELECT ON public.content_pages TO anon;
GRANT ALL ON public.content_pages TO service_role;
ALTER TABLE public.content_pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published pages" ON public.content_pages FOR SELECT TO anon, authenticated USING (published = true);
CREATE POLICY "Admins manage pages" ON public.content_pages FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_content_pages_updated BEFORE UPDATE ON public.content_pages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed standard policy pages
INSERT INTO public.content_pages (slug, title, body_html, seo_title, seo_description) VALUES
('privacy-policy','Privacy Policy','<p>We respect your privacy. This page explains what data we collect when you book a Jawai Safari with us and how we use it. Edit this from the Admin Panel.</p>','Privacy Policy — Wild Jawai Safari','How Wild Jawai Safari collects and uses your data.'),
('terms-and-conditions','Terms & Conditions','<p>By booking a Jawai Safari with Wild Jawai Safari you agree to the following terms. Edit this from the Admin Panel.</p>','Terms & Conditions — Wild Jawai Safari','Booking terms for Wild Jawai Safari.'),
('refund-policy','Refund Policy','<p>Our refund policy for Jawai Safari bookings. Edit this from the Admin Panel.</p>','Refund Policy — Wild Jawai Safari','Refund terms for Jawai Safari bookings.'),
('cancellation-policy','Cancellation Policy','<p>Cancellation terms for Jawai Safari bookings. Edit this from the Admin Panel.</p>','Cancellation Policy — Wild Jawai Safari','Cancellation terms for Jawai Safari bookings.')
ON CONFLICT (slug) DO NOTHING;

-- Analytics events
CREATE TABLE public.analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event text NOT NULL,
  path text,
  meta jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.analytics_events TO anon, authenticated;
GRANT SELECT ON public.analytics_events TO authenticated;
GRANT ALL ON public.analytics_events TO service_role;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can log events" ON public.analytics_events FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins read events" ON public.analytics_events FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Extend site_settings
ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS business_hours text,
  ADD COLUMN IF NOT EXISTS hero_image_url text,
  ADD COLUMN IF NOT EXISTS hero_video_url text,
  ADD COLUMN IF NOT EXISTS hero_cta_primary_label text,
  ADD COLUMN IF NOT EXISTS hero_cta_secondary_label text;
