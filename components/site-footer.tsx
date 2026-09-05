import Link from 'next/link'
import { Logo } from '@/components/logo'
import { siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              The readable event log for Meta Pixel debugging — right inside your browser.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Product
              </h2>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Legal
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>
            Not affiliated with or endorsed by Meta Platforms, Inc. Meta and the
            Meta Pixel are trademarks of Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
