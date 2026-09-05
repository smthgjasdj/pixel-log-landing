import type { Metadata } from 'next'
import {
  Radar,
  ShieldCheck,
  Activity,
  Fingerprint,
  AlertTriangle,
  ListTree,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { GetExtensionButton } from '@/components/get-extension-button'

export const metadata: Metadata = {
  title: 'What Is Pixel Log',
  description:
    'Learn what Pixel Log is, how it works, and why marketers, agencies, ecommerce teams, and developers use it to inspect and validate Meta Pixel implementations.',
}

const capabilities = [
  { icon: Radar, text: 'Detect Meta Pixel installations instantly' },
  { icon: ShieldCheck, text: 'Validate implementation and event tracking' },
  { icon: Activity, text: 'Monitor standard and custom events in real time' },
  { icon: Fingerprint, text: 'Identify Pixel IDs and tracking configuration' },
  { icon: AlertTriangle, text: 'Detect implementation issues and missing events' },
  { icon: ListTree, text: 'View event parameters and debugging details' },
]

const benefits = [
  {
    audience: 'Advertisers',
    text: 'Make sure conversions are tracked accurately so ad budgets are optimized against clean, trustworthy data.',
  },
  {
    audience: 'Agencies',
    text: 'Audit and validate client pixels fast, and demonstrate that implementations are correct across accounts.',
  },
  {
    audience: 'Ecommerce businesses',
    text: 'Confirm key events like Purchase and AddToCart fire with the right parameters on every product and checkout page.',
  },
  {
    audience: 'Developers',
    text: 'Troubleshoot tracking with parameter-level visibility and ship pixel changes with confidence.',
  },
]

const steps = [
  {
    title: 'Install the extension',
    text: 'Add Pixel Log to Chrome from the Chrome Web Store in a single click.',
  },
  {
    title: 'Open any website',
    text: 'Navigate to the page you want to inspect. The extension automatically scans for Meta Pixel activity.',
  },
  {
    title: 'Review detected pixels & events',
    text: 'See detected Pixel IDs, configuration, and every standard or custom event as it fires in real time.',
  },
  {
    title: 'Troubleshoot & fix',
    text: 'Inspect event parameters, spot missing events or issues, and validate your fixes instantly.',
  },
]

export default function WhatIsNewPage() {
  return (
    <>
      <PageHero
        eyebrow="Overview"
        title="What is Pixel Log?"
        description="A browser extension that helps you inspect, validate, and debug Meta Pixel implementations — without guesswork."
      />

      <div className="mx-auto w-full max-w-4xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* What it does */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What it does
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Pixel Log is a Chrome extension that inspects any website you visit
            and reveals exactly how the Meta Pixel is set up.
            It detects installations, reads the connected tracking
            configuration, and monitors the events being sent to Meta — all in
            real time and presented in a clear, readable panel.
          </p>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Instead of digging through page source or the network tab, you get
            an at-a-glance view of what is firing, what is missing, and where
            implementation problems may be hurting your data quality.
          </p>
        </section>

        {/* Key features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Key features and capabilities
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <li
                key={cap.text}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <cap.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {cap.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* How it helps validate */}
        <section className="space-y-4 rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How it helps validate Meta Pixel installations
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            The extension cross-checks the pixel it finds against the events it
            observes, so you can confirm the right Pixel ID is present, the
            expected events are firing, and each event carries the parameters
            Meta needs. When something looks off — a duplicate pixel, a missing
            Purchase event, or an incomplete parameter set — it is flagged so
            you can fix it before it affects reporting or optimization.
          </p>
        </section>

        {/* Benefits by audience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Who it is for
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.audience}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {benefit.audience}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* How to use */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How to use it
          </h2>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-8 text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground">
            Ready to inspect your first pixel?
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Install Pixel Log and start validating Meta Pixel implementations in
            seconds.
          </p>
          <GetExtensionButton />
        </section>
      </div>
    </>
  )
}
