'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'pixellog-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  function respond(choice: 'accepted' | 'declined') {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // ignore storage errors (e.g. private mode)
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and site terms notice"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-border bg-popover p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <Cookie className="size-5" aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We use cookies to analyze traffic and improve your experience. By
            using this site you agree to our{' '}
            <Link
              href="/privacy"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>{' '}
            and site terms.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => respond('declined')}
            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => respond('accepted')}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
