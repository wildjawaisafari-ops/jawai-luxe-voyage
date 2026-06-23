import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin, Phone, Check } from "lucide-react";
import { PageHeader, Section } from "../components/site/Section";
import jeep from "../assets/safari-jeep.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wild Jawai Safari" },
      { name: "description", content: "Plan your private luxury safari in Jawai. Our concierge replies within 24 hours." },
      { property: "og:title", content: "Contact — Wild Jawai Safari" },
      { property: "og:description", content: "Plan your private luxury safari in Jawai." },
      { property: "og:image", content: jeep },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <>
      <PageHeader
        eyebrow="Begin Your Journey"
        title={<>Plan your <span className="italic text-gradient-gold">safari</span></>}
        subtitle="Tell us a little about your dream journey. Our journey designers will personally craft a private itinerary for you."
        image={jeep}
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
                    <div className="eyebrow text-[0.55rem]">Phone</div>
                    <div className="mt-1">+91 98765 43210</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full glass-gold"><Mail className="h-4 w-4 text-gold" /></span>
                  <div>
                    <div className="eyebrow text-[0.55rem]">Email</div>
                    <div className="mt-1">hello@wildjawaisafari.com</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-gold rounded-3xl p-7">
              <div className="eyebrow">Our Season</div>
              <p className="mt-3 font-display text-2xl leading-tight">October — April</p>
              <p className="mt-3 text-sm text-muted-foreground">Best leopard sightings: November to February. We close in monsoon to let the land rest.</p>
            </div>
          </aside>

          <div className="lg:col-span-3 glass rounded-3xl p-7 sm:p-10">
            {sent ? (
              <div className="text-center py-10">
                <span className="grid h-16 w-16 mx-auto place-items-center rounded-full glass-gold">
                  <Check className="h-7 w-7 text-gold" />
                </span>
                <h3 className="mt-6 font-display text-3xl">Thank you.</h3>
                <p className="mt-3 text-muted-foreground">Your enquiry has reached our journey designers. We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h3 className="font-display text-2xl sm:text-3xl">Send an enquiry</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Preferred dates" name="dates" placeholder="e.g. Nov 12 – 16" />
                  <div className="sm:col-span-2">
                    <Field label="Number of guests" name="guests" placeholder="2 adults" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block">
                      <span className="eyebrow">Tell us about your dream safari</span>
                      <textarea
                        name="message"
                        rows={5}
                        className="mt-3 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
                        placeholder="Honeymoon, family, photography focus, anything you'd love to include..."
                      />
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn-gold btn-gold-hover">
                  Send enquiry <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
      />
    </label>
  );
}
