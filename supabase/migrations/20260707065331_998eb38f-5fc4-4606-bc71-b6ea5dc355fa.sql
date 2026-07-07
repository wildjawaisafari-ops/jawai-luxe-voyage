
-- ============ ENUMS ============
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');
CREATE TYPE public.post_status AS ENUM ('draft', 'scheduled', 'published');
CREATE TYPE public.gallery_category AS ENUM ('leopard','safari','birds','village','jawai_dam','luxury_stay','wildlife','guests','photography');
CREATE TYPE public.review_source AS ENUM ('manual','google');

-- ============ UPDATED_AT HELPER ============
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

-- ============ USER ROLES ============
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id=_user_id AND role=_role);
$$;

CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins read all roles" ON public.user_roles FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));

-- Auto-promote hard-coded admin email on signup
CREATE OR REPLACE FUNCTION public.handle_new_user_role()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.email = 'wildjawaisafari@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin')
    ON CONFLICT DO NOTHING;
  END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_role();

-- ============ SITE SETTINGS (single row) ============
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  whatsapp_number TEXT NOT NULL DEFAULT '919256928266',
  phone_number TEXT NOT NULL DEFAULT '+919256928266',
  email TEXT NOT NULL DEFAULT 'wildjawaisafari@gmail.com',
  address TEXT NOT NULL DEFAULT 'Jawai Bandh, Bera, Pali District, Rajasthan 306126, India',
  map_lat NUMERIC DEFAULT 25.1000,
  map_lng NUMERIC DEFAULT 73.1500,
  google_place_id TEXT DEFAULT 'ChIJRZU3VxS_QjkRUprBx-E30jI',
  instagram_url TEXT,
  facebook_url TEXT,
  youtube_url TEXT,
  twitter_url TEXT,
  hero_title TEXT NOT NULL DEFAULT 'Best Jawai Leopard Safari in Rajasthan',
  hero_subtitle TEXT NOT NULL DEFAULT 'Private sunrise & sunset gypsy drives with expert local trackers.',
  seo_title TEXT NOT NULL DEFAULT 'Jawai Safari — Best Jawai Leopard Safari Booking in Rajasthan | Wild Jawai Safari',
  seo_description TEXT NOT NULL DEFAULT 'Wild Jawai Safari — book private Jawai Leopard Safari with expert trackers. Morning & evening gypsy drives, Jawai Dam, village & bird watching tours.',
  seo_keywords TEXT NOT NULL DEFAULT 'Jawai Safari, Jawai Leopard Safari, Jawai Safari Booking, Leopard Safari Rajasthan, Best Jawai Safari, Wild Jawai Safari, Morning Leopard Safari, Evening Leopard Safari, Jawai Dam Safari, Village Safari Jawai, Bird Watching Jawai, Sena Safari Zone, Kothar Safari Zone, Private Safari Jawai',
  og_image_url TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.site_settings TO anon, authenticated;
GRANT ALL ON public.site_settings TO service_role;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read site settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Admins update site settings" ON public.site_settings FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins insert site settings" ON public.site_settings FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER site_settings_updated BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
INSERT INTO public.site_settings DEFAULT VALUES;

-- ============ SAFARI PACKAGES ============
CREATE TABLE public.safari_packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  price_with_hitea TEXT,
  price_without_hitea TEXT,
  duration TEXT,
  image_url TEXT,
  highlights TEXT[] NOT NULL DEFAULT '{}',
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT true,
  sort_order INT NOT NULL DEFAULT 0,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.safari_packages TO anon, authenticated;
GRANT ALL ON public.safari_packages TO service_role;
GRANT INSERT, UPDATE, DELETE ON public.safari_packages TO authenticated;
ALTER TABLE public.safari_packages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published packages" ON public.safari_packages FOR SELECT USING (published = true);
CREATE POLICY "Admins read all packages" ON public.safari_packages FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins write packages" ON public.safari_packages FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER packages_updated BEFORE UPDATE ON public.safari_packages FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ BLOG POSTS ============
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  body_html TEXT NOT NULL DEFAULT '',
  cover_image TEXT,
  category TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  status public.post_status NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  seo_title TEXT,
  seo_description TEXT,
  seo_og_image TEXT,
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.blog_posts TO anon, authenticated;
GRANT ALL ON public.blog_posts TO service_role;
GRANT INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published posts" ON public.blog_posts FOR SELECT USING (status='published' AND (published_at IS NULL OR published_at <= now()));
CREATE POLICY "Admins read all posts" ON public.blog_posts FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins write posts" ON public.blog_posts FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER posts_updated BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX ON public.blog_posts (status, published_at DESC);

-- ============ GALLERY ============
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  title TEXT,
  alt_text TEXT NOT NULL DEFAULT '',
  category public.gallery_category NOT NULL DEFAULT 'safari',
  sort_order INT NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.gallery_images TO anon, authenticated;
GRANT ALL ON public.gallery_images TO service_role;
GRANT INSERT, UPDATE, DELETE ON public.gallery_images TO authenticated;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published gallery" ON public.gallery_images FOR SELECT USING (published = true);
CREATE POLICY "Admins read all gallery" ON public.gallery_images FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins write gallery" ON public.gallery_images FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER gallery_updated BEFORE UPDATE ON public.gallery_images FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ FAQs ============
CREATE TABLE public.faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.faqs TO anon, authenticated;
GRANT ALL ON public.faqs TO service_role;
GRANT INSERT, UPDATE, DELETE ON public.faqs TO authenticated;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published faqs" ON public.faqs FOR SELECT USING (published = true);
CREATE POLICY "Admins write faqs" ON public.faqs FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER faqs_updated BEFORE UPDATE ON public.faqs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ REVIEWS ============
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  rating INT NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  quote TEXT NOT NULL,
  source public.review_source NOT NULL DEFAULT 'manual',
  published BOOLEAN NOT NULL DEFAULT true,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.reviews TO anon, authenticated;
GRANT ALL ON public.reviews TO service_role;
GRANT INSERT, UPDATE, DELETE ON public.reviews TO authenticated;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published reviews" ON public.reviews FOR SELECT USING (published = true);
CREATE POLICY "Admins write reviews" ON public.reviews FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER reviews_updated BEFORE UPDATE ON public.reviews FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
