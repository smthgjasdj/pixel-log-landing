import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Newsreader, JetBrains_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-newsreader',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pixel Log — Meta Pixel Event Logger',
    template: '%s | Pixel Log',
  },
  description:
    'Pixel Log is a Chrome extension that records Meta Pixel events in real time, shows exactly what fired, and helps you debug tracking without guesswork.',
  keywords: [
    'Meta Pixel',
    'Facebook Pixel',
    'Pixel Inspector',
    'Meta Pixel debugger',
    'event tracking',
    'conversion tracking',
    'Chrome extension',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-128.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: '/icon-128.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#0f9488' },
      { media: '(prefers-color-scheme: dark)', color: '#10161c' },
    ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <CookieConsent />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
