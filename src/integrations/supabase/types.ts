export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      analytics_events: {
        Row: {
          created_at: string
          event: string
          id: string
          meta: Json | null
          path: string | null
        }
        Insert: {
          created_at?: string
          event: string
          id?: string
          meta?: Json | null
          path?: string | null
        }
        Update: {
          created_at?: string
          event?: string
          id?: string
          meta?: Json | null
          path?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string | null
          body_html: string
          category: string | null
          cover_image: string | null
          created_at: string
          excerpt: string | null
          id: string
          published_at: string | null
          seo_description: string | null
          seo_og_image: string | null
          seo_title: string | null
          slug: string
          status: Database["public"]["Enums"]["post_status"]
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          body_html?: string
          category?: string | null
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_og_image?: string | null
          seo_title?: string | null
          slug: string
          status?: Database["public"]["Enums"]["post_status"]
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          body_html?: string
          category?: string | null
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_og_image?: string | null
          seo_title?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["post_status"]
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      content_pages: {
        Row: {
          body_html: string | null
          created_at: string
          id: string
          published: boolean
          seo_description: string | null
          seo_title: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          body_html?: string | null
          created_at?: string
          id?: string
          published?: boolean
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          body_html?: string | null
          created_at?: string
          id?: string
          published?: boolean
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: string
          published: boolean
          question: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: string
          published?: boolean
          question: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: string
          published?: boolean
          question?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          alt_text: string
          caption: string | null
          category: Database["public"]["Enums"]["gallery_category"]
          created_at: string
          id: string
          published: boolean
          sort_order: number
          title: string | null
          updated_at: string
          url: string
        }
        Insert: {
          alt_text?: string
          caption?: string | null
          category?: Database["public"]["Enums"]["gallery_category"]
          created_at?: string
          id?: string
          published?: boolean
          sort_order?: number
          title?: string | null
          updated_at?: string
          url: string
        }
        Update: {
          alt_text?: string
          caption?: string | null
          category?: Database["public"]["Enums"]["gallery_category"]
          created_at?: string
          id?: string
          published?: boolean
          sort_order?: number
          title?: string | null
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      inquiries: {
        Row: {
          created_at: string
          email: string | null
          guests: number | null
          id: string
          message: string | null
          name: string
          package: string | null
          phone: string | null
          source: string | null
          status: string
          travel_date: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          guests?: number | null
          id?: string
          message?: string | null
          name: string
          package?: string | null
          phone?: string | null
          source?: string | null
          status?: string
          travel_date?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          guests?: number | null
          id?: string
          message?: string | null
          name?: string
          package?: string | null
          phone?: string | null
          source?: string | null
          status?: string
          travel_date?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          created_at: string
          featured: boolean
          id: string
          location: string | null
          name: string
          photo_url: string | null
          published: boolean
          quote: string
          rating: number
          sort_order: number
          source: Database["public"]["Enums"]["review_source"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          featured?: boolean
          id?: string
          location?: string | null
          name: string
          photo_url?: string | null
          published?: boolean
          quote: string
          rating?: number
          sort_order?: number
          source?: Database["public"]["Enums"]["review_source"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          featured?: boolean
          id?: string
          location?: string | null
          name?: string
          photo_url?: string | null
          published?: boolean
          quote?: string
          rating?: number
          sort_order?: number
          source?: Database["public"]["Enums"]["review_source"]
          updated_at?: string
        }
        Relationships: []
      }
      safari_packages: {
        Row: {
          created_at: string
          description: string | null
          duration: string | null
          featured: boolean
          highlights: string[]
          id: string
          image_url: string | null
          name: string
          price_with_hitea: string | null
          price_without_hitea: string | null
          published: boolean
          seo_description: string | null
          seo_title: string | null
          slug: string
          sort_order: number
          tagline: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration?: string | null
          featured?: boolean
          highlights?: string[]
          id?: string
          image_url?: string | null
          name: string
          price_with_hitea?: string | null
          price_without_hitea?: string | null
          published?: boolean
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          sort_order?: number
          tagline?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration?: string | null
          featured?: boolean
          highlights?: string[]
          id?: string
          image_url?: string | null
          name?: string
          price_with_hitea?: string | null
          price_without_hitea?: string | null
          published?: boolean
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          sort_order?: number
          tagline?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          address: string
          business_hours: string | null
          email: string
          facebook_url: string | null
          favicon_url: string | null
          google_place_id: string | null
          hero_cta_primary_label: string | null
          hero_cta_secondary_label: string | null
          hero_image_url: string | null
          hero_subtitle: string
          hero_title: string
          hero_video_url: string | null
          homepage_banner_enabled: boolean
          homepage_banner_text: string | null
          homepage_banner_url: string | null
          id: string
          instagram_url: string | null
          logo_url: string | null
          map_lat: number | null
          map_lng: number | null
          og_image_url: string | null
          phone_number: string
          seo_description: string
          seo_keywords: string
          seo_title: string
          twitter_url: string | null
          updated_at: string
          whatsapp_number: string
          youtube_url: string | null
        }
        Insert: {
          address?: string
          business_hours?: string | null
          email?: string
          facebook_url?: string | null
          favicon_url?: string | null
          google_place_id?: string | null
          hero_cta_primary_label?: string | null
          hero_cta_secondary_label?: string | null
          hero_image_url?: string | null
          hero_subtitle?: string
          hero_title?: string
          hero_video_url?: string | null
          homepage_banner_enabled?: boolean
          homepage_banner_text?: string | null
          homepage_banner_url?: string | null
          id?: string
          instagram_url?: string | null
          logo_url?: string | null
          map_lat?: number | null
          map_lng?: number | null
          og_image_url?: string | null
          phone_number?: string
          seo_description?: string
          seo_keywords?: string
          seo_title?: string
          twitter_url?: string | null
          updated_at?: string
          whatsapp_number?: string
          youtube_url?: string | null
        }
        Update: {
          address?: string
          business_hours?: string | null
          email?: string
          facebook_url?: string | null
          favicon_url?: string | null
          google_place_id?: string | null
          hero_cta_primary_label?: string | null
          hero_cta_secondary_label?: string | null
          hero_image_url?: string | null
          hero_subtitle?: string
          hero_title?: string
          hero_video_url?: string | null
          homepage_banner_enabled?: boolean
          homepage_banner_text?: string | null
          homepage_banner_url?: string | null
          id?: string
          instagram_url?: string | null
          logo_url?: string | null
          map_lat?: number | null
          map_lng?: number | null
          og_image_url?: string | null
          phone_number?: string
          seo_description?: string
          seo_keywords?: string
          seo_title?: string
          twitter_url?: string | null
          updated_at?: string
          whatsapp_number?: string
          youtube_url?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor"
      gallery_category:
        | "leopard"
        | "safari"
        | "birds"
        | "village"
        | "jawai_dam"
        | "luxury_stay"
        | "wildlife"
        | "guests"
        | "photography"
      post_status: "draft" | "scheduled" | "published"
      review_source: "manual" | "google"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
      gallery_category: [
        "leopard",
        "safari",
        "birds",
        "village",
        "jawai_dam",
        "luxury_stay",
        "wildlife",
        "guests",
        "photography",
      ],
      post_status: ["draft", "scheduled", "published"],
      review_source: ["manual", "google"],
    },
  },
} as const
