import { ArrowUpRight, BriefcaseBusiness, Code2, Megaphone, ShoppingBag } from 'lucide-react'

const audiences = [
  [Megaphone, 'For media buyers', 'Know the conversion signal is real before you scale spend.'],
  [BriefcaseBusiness, 'For agencies', 'Turn pixel audits into a clean, repeatable handoff.'],
  [ShoppingBag, 'For commerce teams', 'Make sure the checkout path sends the data your store needs.'],
  [Code2, 'For developers', 'Trace the payload, find the edge case, ship with confidence.'],
] as const

export function Audience() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Built for the work</div>
          <h2 className="mt-4 max-w-md font-sans text-4xl font-medium leading-none tracking-[-0.04em] text-foreground sm:text-5xl">Less guessing. More signal.</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {audiences.map(([Icon, title, description]) => (
            <div key={title} className="group flex items-center gap-5 py-6 first:pt-5 last:pb-5">
              <div className="flex size-11 shrink-0 items-center justify-center border border-border bg-card text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-5" aria-hidden="true" /></div>
              <div className="min-w-0 flex-1"><h3 className="font-sans text-2xl text-foreground">{title}</h3><p className="mt-1 text-sm leading-5 text-muted-foreground">{description}</p></div>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
