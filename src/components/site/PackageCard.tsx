import { Clock, Check, MessageCircle, Sparkles } from "lucide-react";
import { SAFARI_PRICE_WITH_HITEA, SAFARI_PRICE_WITHOUT_HITEA } from "../../lib/site-data";

export function SafariZoneCard({
  name,
  availability,
  highlights,
  buttonLabel,
  bookingUrl,
  image,
}: {
  name: string;
  availability: string;
  highlights: readonly string[];
  buttonLabel: string;
  bookingUrl: string;
  image: string;
}) {
  return (
    <article className="group glass card-lift rounded-3xl overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${name} — private gypsy leopard safari in Jawai`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute top-4 left-4 glass-gold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-gold" />
          <span className="text-[0.7rem] text-gold-soft">{availability}</span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="font-display text-2xl sm:text-[1.7rem] leading-tight">{name}</h3>

        {/* Pricing */}
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] px-3.5 py-3">
            <div className="flex items-center gap-1.5 text-[0.6rem] tracking-[0.22em] uppercase text-gold-soft">
              <Sparkles className="h-3 w-3" /> Hi-Tea Included
            </div>
            <div className="mt-1 font-display text-lg text-gradient-gold leading-tight">
              {SAFARI_PRICE_WITH_HITEA}
            </div>
          </div>
          <div className="rounded-2xl border border-[color:var(--forest)]/25 bg-[color:var(--forest)]/[0.04] px-3.5 py-3">
            <div className="text-[0.6rem] tracking-[0.22em] uppercase" style={{ color: "var(--forest-deep)" }}>
              Without Hi-Tea
            </div>
            <div className="mt-1 font-display text-lg leading-tight text-foreground">
              {SAFARI_PRICE_WITHOUT_HITEA}
            </div>
          </div>
        </div>

        <ul className="mt-6 space-y-2.5 flex-1">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
              <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold btn-gold-hover mt-7 w-full"
        >
          <MessageCircle className="h-4 w-4" /> {buttonLabel}
        </a>
      </div>
    </article>
  );
}
