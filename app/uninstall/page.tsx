'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, Send, RefreshCw } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { GetExtensionButton } from '@/components/get-extension-button'
import { siteConfig } from '@/lib/site'

const reasons = [
  "It didn't detect the pixels I expected",
  'The results were confusing or hard to read',
  'I only needed it for a one-time check',
  'I found a different tool',
  'It affected browser performance',
  'Something else',
]

const FEEDBACK_EMAIL = 'feedback@example.com'

export default function UninstallPage() {
  const [reason, setReason] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const uuid = params.get('uuid')
    if (!uuid) return
    fetch(`/api/uninstall?uuid=${encodeURIComponent(uuid)}`, { method: 'POST' }).catch(() => {})
  }, [])

  const mailtoHref = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(
    `${siteConfig.shortName} uninstall feedback`,
  )}&body=${encodeURIComponent(
    `Reason: ${reason || '(not specified)'}\n\nDetails:\n${comment || '(none)'}`,
  )}`

  return (
    <>
      <PageHero
        eyebrow="Uninstalled"
        title={`${siteConfig.shortName} has been removed`}
        description="Sorry to see you go. If you have a moment, tell us what went wrong — it genuinely helps us improve."
      />

      <section className="mx-auto w-full max-w-2xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 flex size-16 items-center justify-center rounded-2xl bg-accent/15">
          <Heart className="size-8 text-accent-foreground" aria-hidden="true" />
        </div>

        <form
          className="rounded-xl border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = mailtoHref
          }}
        >
          <fieldset>
            <legend className="text-base font-semibold text-foreground">
              Why did you uninstall?
            </legend>
            <p className="mt-1 text-sm text-muted-foreground">
              Optional, and nothing is sent automatically — submitting opens your
              own email app so you stay in control.
            </p>

            <div className="mt-5 space-y-2.5">
              {reasons.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:bg-secondary/60 has-[:checked]:border-primary/50 has-[:checked]:bg-primary/5"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={option}
                    checked={reason === option}
                    onChange={(e) => setReason(e.target.value)}
                    className="size-4 accent-[var(--color-primary)]"
                  />
                  <span className="text-foreground">{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-5">
            <label
              htmlFor="comment"
              className="text-sm font-medium text-foreground"
            >
              Anything else? (optional)
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              placeholder="What would have made Pixel Log more useful for you?"
              className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
          >
            <Send className="size-4" aria-hidden="true" />
            Send feedback
          </button>
        </form>

        {/* Reinstall */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="size-4" aria-hidden="true" />
            Changed your mind?
          </p>
          <GetExtensionButton label={`Reinstall ${siteConfig.shortName}`} />
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Back to home
          </Link>
        </div>
      </section>
    </>
  )
}
