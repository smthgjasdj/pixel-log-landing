import { Activity, Bug, Clock3, FileJson2, Layers3, ScanSearch } from 'lucide-react'

const features = [
  ['01', ScanSearch, 'Detect the source', 'Find every pixel and identify exactly where it was initialized.'],
  ['02', Activity, 'Log every event', 'Keep a readable timeline of PageView, Purchase, and custom events as they happen.'],
  ['03', FileJson2, 'Read the payload', 'Inspect parameters, values, currencies, and content IDs without leaving the page.'],
  ['04', Bug, 'Flag the gaps', 'Surface missing values, malformed payloads, and duplicate signals before launch.'],
  ['05', Layers3, 'Catch every frame', 'Monitor embedded checkout flows and iframe activity across the page.'],
  ['06', Clock3, 'Replay the moment', 'Pause the stream, scan the log, and share a precise record with your team.'],
] as const

export function Features() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">The logbook</div>
            <h2 className="mt-4 max-w-lg text-balance font-sans text-4xl font-medium leading-none tracking-[-0.04em] text-foreground sm:text-5xl">A clearer view of the signal.</h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-6 text-muted-foreground">Built for the five minutes before a campaign goes live, when certainty matters most.</p>
        </div>
        <div className="grid border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([number, Icon, title, description]) => (
            <article key={number} className="group min-h-56 border-b border-r border-border p-6 transition-colors hover:bg-background lg:p-8">
              <div className="flex items-start justify-between"><span className="font-mono text-[11px] text-primary">{number}</span><Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" /></div>
              <h3 className="mt-12 font-sans text-2xl text-foreground">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-5 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
