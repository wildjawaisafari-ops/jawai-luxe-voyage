ALTER TABLE public.site_settings 
  ADD COLUMN IF NOT EXISTS logo_url text,
  ADD COLUMN IF NOT EXISTS favicon_url text,
  ADD COLUMN IF NOT EXISTS homepage_banner_text text,
  ADD COLUMN IF NOT EXISTS homepage_banner_url text,
  ADD COLUMN IF NOT EXISTS homepage_banner_enabled boolean NOT NULL DEFAULT false;

ALTER TABLE public.faqs ADD COLUMN IF NOT EXISTS category text;
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS featured boolean NOT NULL DEFAULT false;
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS photo_url text;
ALTER TABLE public.gallery_images ADD COLUMN IF NOT EXISTS caption text;