import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, MapPin, Phone, Truck } from "lucide-react";
import { PageHeader, Section } from "../components/site/Section";
import photoGypsy from "../assets/photo-gypsy.jpg";
import { WHATSAPP_DISPLAY, CONTACT_EMAIL, whatsappUrl } from "../lib/site-data";
import { useSiteSettings, whatsappHref, displayPhone } from "../lib/public-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Jawai Safari on WhatsApp | Wild Jawai Safari" },
      { name: "description", content: "Contact Wild Jawai Safari to book a private leopard safari in Jawai. WhatsApp +91 92569 28266 · wildjawaisafari@gmail.com." },
      { property: "og:title", content: "Contact — Wild Jawai Safari" },
      { property: "og:description", content: "Plan your private luxury leopard safari in Jawai, Rajasthan." },
      { property: "og:url", content: "https://jawai-luxe-voyage.lovable.app/contact" },
      { property: "og:image", content: photoGypsy },
    ],
    links: [{ rel: "canonical", href: "https://jawai-luxe-voyage.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      "Hello Wild Jawai Safari, I would like to plan a safari.",
      "",
      form.name && `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.dates && `Preferred dates: ${form.dates}`,
      form.guests && `Guests: ${form.guests}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean).join("\n");
    window.open(whatsappUrl(lines), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHeader
        eyebrow="Begin Your Journey"
        title={<>Plan your <span className="italic text-gradient-gold">safari</span></>}
        subtitle="Tell us about your dream journey. Submitting the form opens WhatsApp so we can reply instantly."
        image={photoGypsy}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="lg:col-span-2 space-y-6">
            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-2xl">Reach out</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full glass-gold"><MapPin className="h-4 w-4 text-gold" /></span>
                  <div>
                    <div className="eyebrow text-[0.55rem]">Camp</div>
                    <div className="mt-1">Jawai Bandh, Pali district<br/>Rajasthan 306126, India</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full glass-gold"><Phone className="h-4 w-4 text-gold" /></span>
                  <div>
                    <div className="eyebrow text-[0.55rem]">Phone / WhatsApp</div>
                    <a href={whatsappUrl("Hello Wild Jawai Safari")} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:text-gold transition-colors">{WHATSAPP_DISPLAY}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full glass-gold"><Mail className="h-4 w-4 text-gold" /></span>
                  <div>
                    <div className="eyebrow text-[0.55rem]">Email</div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block hover:text-gold transition-colors break-all">{CONTACT_EMAIL}</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-gold rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full glass"><Truck className="h-4 w-4 text-gold" /></span>
                <div className="eyebrow">Pickup & Drop</div>
              </div>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">
                Complimentary pickup and drop within 10 km from your hotel or location.
                Additional charges apply for distances beyond 10 km.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-3 glass rounded-3xl p-7 sm:p-10">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">Send an enquiry</h3>
                <p className="mt-2 text-sm text-muted-foreground">Opens WhatsApp with your details pre-filled.</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required value={form.name} onChange={(v) => update("name", v)} />
                <Field label="Email" name="email" type="email" value={form.email} onChange={(v) => update("email", v)} />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
                <Field label="Preferred dates" name="dates" placeholder="e.g. Nov 12 – 16" value={form.dates} onChange={(v) => update("dates", v)} />
                <div className="sm:col-span-2">
                  <Field label="Number of guests" name="guests" placeholder="2 adults" value={form.guests} onChange={(v) => update("guests", v)} />
                </div>
                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="eyebrow">Tell us about your dream safari</span>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="mt-3 w-full rounded-2xl bg-white border border-black/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30 transition"
                      placeholder="Honeymoon, family, photography focus, temple visits, anything you'd love to include..."
                    />
                  </label>
                </div>
              </div>
              <button type="submit" className="btn-gold btn-gold-hover">
                Send Enquiry on WhatsApp <MessageCircle className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder, value, onChange,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
  value: string; onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full rounded-2xl bg-white border border-black/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30 transition"
      />
    </label>
  );
}
