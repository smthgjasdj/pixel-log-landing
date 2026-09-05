import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="flex size-9 items-center justify-center overflow-hidden rounded-lg bg-card shadow-sm transition-transform group-hover:scale-105">
        <img src="/pixel-log-icon.png" alt="" className="size-full object-cover" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Pixel Log
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          Meta Pixel Event Logger
        </span>
      </span>
    </Link>
  )
}
