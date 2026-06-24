import { IndianRupee, Clock, Check } from "lucide-react";

export function SafariZoneCard({
  name,
  availability,
  price,
  highlights,
  buttonLabel,
  bookingUrl,
  image,
}: {
  name: string;
  availability: string;
  price: string;
  highlights: readonly string[];
  buttonLabel: string;
  bookingUrl: string;
  image: string;
}) {
  return (
    <article className="group glass rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[var(--shadow-gold)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute top-4 right-4 glass-gold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <IndianRupee className="h-3 w-3 text-foreground" />
          <span className="text-xs font-semibold text-foreground">{price}</span>
        </div>
      </div>
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="font-display text-2xl sm:text-3xl leading-tight">{name}</h3>
        <div className="mt-3 inline-flex items-center gap-2 self-start glass-gold rounded-full px-3 py-1.5">
          <Clock className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs text-gold-soft">{availability}</span>
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
          {buttonLabel}
        </a>
      </div>
    </article>
  );
}
