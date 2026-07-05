import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  center = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {(eyebrow || title || subtitle) && (
          <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
                <span className="gold-divider" />
                <span className="eyebrow">{eyebrow}</span>
                <span className="gold-divider" />
              </div>
            )}
            {title && (
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={(eyebrow || title || subtitle) ? "mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
}) {
  return (
    <header className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.16 0.008 60 / 0.55) 0%, oklch(0.16 0.008 60 / 0.35) 55%, var(--background) 100%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 animate-fade-up">
          <span className="gold-divider" />
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>{eyebrow}</span>
          <span className="gold-divider" />
        </div>
        <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] animate-fade-up delay-1 hero-fg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-base sm:text-lg hero-fg-muted max-w-2xl mx-auto animate-fade-up delay-2">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
