import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

export function PackageCard({
  name,
  duration,
  price,
  tagline,
  description,
  includes,
  image,
}: {
  name: string;
  duration: string;
  price: string;
  tagline: string;
  description: string;
  includes: readonly string[];
  image: string;
}) {
  return (
    <article className="group glass rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-gold/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-4 left-4 eyebrow glass-gold px-3 py-1.5 rounded-full text-[0.6rem]">
          {duration}
        </div>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-display text-2xl sm:text-3xl">{name}</h3>
        <p className="mt-2 text-sm text-gold-soft italic">{tagline}</p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>

        <ul className="mt-6 grid grid-cols-2 gap-2">
          {includes.map((i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
              <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
              <span>{i}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 pt-6 border-t border-white/5 flex items-end justify-between">
          <div>
            <div className="eyebrow text-[0.55rem]">From</div>
            <div className="font-display text-2xl text-gradient-gold">{price}</div>
            <div className="text-[0.65rem] text-muted-foreground mt-0.5">per person · twin share</div>
          </div>
          <Link
            to="/contact"
            className="grid h-12 w-12 place-items-center rounded-full glass-gold text-gold transition-all hover:rotate-45"
            aria-label={`Enquire about ${name}`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
