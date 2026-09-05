import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, BookOpen, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { GetExtensionButton } from '@/components/get-extension-button'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Thanks for Installing',
  description: `Thank you for installing ${siteConfig.shortName}. Here's how to start inspecting Meta Pixels in seconds.`,
}

const steps = [
  {
    title: 'Pin the extension',
    description: `Click the puzzle-piece icon in Chrome's toolbar and pin ${siteConfig.shortName} so it's always one click away.`,
  },
  {
    title: 'Open the side panel',
    description: `Visit any website, then click the ${siteConfig.shortName} icon to open the inspector side panel.`,
  },
  {
    title: 'Read your pixels',
    description:
      'Every Meta Pixel on the page and the events it fires appear instantly, with plain-language checks on the data.',
  },
]

export default function ThanksPage() {
  return (
    <>
      <PageHero
        eyebrow="Installed"
        title={`Thanks for installing ${siteConfig.shortName}`}
        description="You're all set. Here's how to get your first pixel readout in under a minute."
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto mb-12 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
          <CheckCircle2 className="size-8 text-primary" aria-hidden="true" />
        </div>

        {/* Getting-started steps */}
        <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-card p-6">
              <span className="font-mono text-sm font-medium text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-3 font-semibold text-foreground">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Next actions */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <GetExtensionButton label={`Open the ${siteConfig.shortName} listing`} />
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link
              href="/what-is-new"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <BookOpen className="size-4" aria-hidden="true" />
              How it works
            </Link>
            <Link
              href="/whats-new"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              See what&apos;s new
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
