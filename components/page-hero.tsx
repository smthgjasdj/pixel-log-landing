interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_50%_0%,color-mix(in_oklch,var(--color-primary)_10%,transparent),transparent)]" />
      <div className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="flex size-2 rounded-full bg-accent" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
