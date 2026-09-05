import { ArrowUpRight, Check, CircleAlert, CircleDot, Code2, Radio } from 'lucide-react'
import { GetExtensionButton } from '@/components/get-extension-button'

const signals = [
  ['PageView', 'standard', 'sent', 'green'],
  ['ViewContent', 'standard', 'sent', 'green'],
  ['AddToCart', 'custom', 'sent', 'green'],
  ['Purchase', 'standard', 'missing value', 'amber'],
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Meta Pixel observability
          </div>
          <h1 className="mt-6 max-w-xl text-balance font-sans text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
            See what your pixel is really doing.
          </h1>
          <p className="mt-7 max-w-lg text-pretty text-lg leading-7 text-muted-foreground">
            Pixel Log keeps a precise, readable record of every Meta Pixel event
            as it fires. No network-tab archaeology. Just the signal you need.
          </p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <GetExtensionButton label="Catch every event" />
            <a href="#how-it-works" className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
              See how it works
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 font-mono text-[11px] text-muted-foreground">
            <span className="flex items-center gap-2"><Check className="size-3.5 text-primary" aria-hidden="true" /> local-only</span>
            <span className="flex items-center gap-2"><Check className="size-3.5 text-primary" aria-hidden="true" /> no account</span>
            <span className="flex items-center gap-2"><Check className="size-3.5 text-primary" aria-hidden="true" /> all frames</span>
          </div>
        </div>
        <InspectorPreview />
      </div>
    </section>
  )
}

function InspectorPreview() {
  return (
    <div id="how-it-works" className="relative border border-foreground/20 bg-foreground p-2 shadow-[12px_12px_0_var(--color-primary)]">
      <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 font-mono text-[10px] text-white/60">
        <span className="flex items-center gap-2"><Radio className="size-3 text-[#82c879]" aria-hidden="true" /> PIXEL LOG / LIVE SESSION</span>
        <span>01:24:08</span>
      </div>
      <div className="grid md:grid-cols-[0.8fr_1.4fr]">
        <div className="border-b border-white/15 p-5 md:border-b-0 md:border-r">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">Active page</div>
          <div className="mt-2 truncate font-mono text-sm text-white">shop.example.com/checkout</div>
          <div className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            <div className="bg-foreground p-3"><div className="font-mono text-[10px] text-white/45">PIXEL ID</div><div className="mt-1 font-mono text-xs text-white">834 921 670</div></div>
            <div className="bg-foreground p-3"><div className="font-mono text-[10px] text-white/45">EVENTS</div><div className="mt-1 font-mono text-xs text-white">04</div></div>
          </div>
          <div className="mt-5 flex items-center gap-2 font-mono text-[11px] text-[#82c879]"><CircleDot className="size-3.5" aria-hidden="true" /> collecting events</div>
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/45"><span>Event stream</span><span>payload</span></div>
          <div className="space-y-2">
            {signals.map(([name, type, state, tone], index) => (
              <div key={name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border border-white/10 px-3 py-3">
                <div><div className="font-mono text-xs text-white">{name}</div><div className="mt-1 font-mono text-[10px] text-white/40">{type} · 00:0{index + 2}</div></div>
                <Code2 className="size-3.5 text-white/30" aria-hidden="true" />
                <span className={`flex items-center gap-1.5 font-mono text-[10px] ${tone === 'green' ? 'text-[#82c879]' : 'text-[#e4ad52]'}`}>{tone === 'green' ? <Check className="size-3" aria-hidden="true" /> : <CircleAlert className="size-3" aria-hidden="true" />}{state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
