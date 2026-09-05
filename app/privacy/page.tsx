import type { Metadata } from "next"
import { Check } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles your data. Pixel event data is processed on your device, and nothing you inspect is sold or shared.`,
}

const summaryPoints = [
  "Pixel event data is processed and kept locally on your device",
  "The extension only watches pixel events — it never alters or blocks them",
  "Your personal details, browsing history, and pixel data are never sold or shared",
  "Nothing is shared with Meta/Facebook, ad networks, analytics services, or data brokers",
  "No usage tracking, no analytics, no telemetry, and no crash reporting",
  "The extension sends no outbound network requests of its own — nothing leaves your device because of us",
]

const permissions: { name: string; reason: string }[] = [
  {
    name: "storage",
    reason: "Keep your preferences and short-term event logs on your device using chrome.storage.local.",
  },
  {
    name: "alarms",
    reason: "Run periodic housekeeping, such as trimming old event log entries, in the background.",
  },
  {
    name: "sidePanel",
    reason: "Show the extension inside a browser side panel rather than a cramped toolbar popup.",
  },
  {
    name: "host access (all sites)",
    reason:
      "Meta Pixels can live on any domain, so the detector has to be able to run on whatever page you are inspecting. This access is used purely to find and read pixel activity on the page in front of you.",
  },
  {
    name: "content scripts (all frames)",
    reason:
      "A pair of small scripts runs on the pages you browse — one watches pixel activity from within the page, the other relays what it sees to the side panel in an isolated context. They also run inside iframes so embedded pixels are caught. The scripts only observe pixel traffic — your page content is not read out or transmitted anywhere.",
  },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`${siteConfig.name} — Chrome Extension. Last updated: September 5, 2026`}
      />

      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Summary card */}
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">Summary</h2>
          <ul className="mt-4 space-y-3">
            {summaryPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-10 leading-relaxed text-muted-foreground">
          <Section title="1. Data Collection">
            <p>
              Everything the Extension collects and processes stays local to your device:
            </p>
            <p className="font-medium text-foreground">Data you provide:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Extension settings (filter choices, auto-clear timing, appearance preferences)</li>
            </ul>
            <p className="font-medium text-foreground">Data picked up automatically (for inspection only):</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Names of Meta Pixel events seen on pages you visit (such as PageView, Purchase, AddToCart)</li>
              <li>Parameters attached to those events (such as value, currency, content_ids)</li>
              <li>Pixel IDs found on the page</li>
              <li>The page URL and timestamp for each recorded event</li>
              <li>Per-domain counts of detected pixels</li>
            </ul>
            <p className="font-medium text-foreground">Data that is never collected:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>No names, emails, addresses, or other identifying details</li>
              <li>No payment or financial information</li>
              <li>No browsing history, cookie contents, or cache</li>
              <li>No device identifiers</li>
              <li>No usage analytics or crash reports</li>
            </ul>
          </Section>

          <Section title="2. Data Handling">
            <p>All inspection happens locally on your device:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                A small detector script on each page listens for the Meta Pixel activity the page itself generates — the
                same approach used by standard pixel debugging tools
              </li>
              <li>Recorded events sit in memory and appear in the side panel for you to review</li>
              <li>Event logs are kept locally according to the retention setting you choose</li>
              <li>Exports (JSON/CSV) are produced on your device when you press Export</li>
              <li>Your pixel event data is never sent to us, to Meta/Facebook, or to anyone else</li>
              <li>The Extension watches pixel events — it does not change, block, or otherwise interfere with them</li>
            </ul>
          </Section>

          <Section title="3. Data Storage">
            <p>Everything the Extension stores lives on your local device:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-medium text-foreground">Storage mechanism:</span> chrome.storage.local — built
                into the browser and sandboxed per extension
              </li>
              <li>
                <span className="font-medium text-foreground">Location:</span> your own browser profile, on your own
                machine
              </li>
              <li>
                <span className="font-medium text-foreground">Event logs:</span> kept temporarily and cleared based on
                your settings or manually
              </li>
              <li>
                <span className="font-medium text-foreground">Settings:</span> kept until you reset them or remove the
                Extension
              </li>
              <li>No cloud storage and no server-side copy of any pixel or browsing data</li>
            </ul>
            <p>To wipe everything at any time:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Hit &quot;Clear&quot; in the side panel to erase all event logs</li>
              <li>Remove the Extension — all locally stored data goes with it</li>
            </ul>
          </Section>

          <Section title="4. Network Requests">
            <p>
              The Extension works fully offline. It does not send data anywhere — not to us, not to Meta/Facebook, not
              to any third party.
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>No install, update, or uninstall pings are sent</li>
              <li>No anonymous identifiers or version signals are transmitted</li>
              <li>No analytics, telemetry, or crash-report calls of any kind</li>
              <li>
                The only network activity you will notice is the Meta Pixel traffic the pages you visit already produce —
                the Extension simply watches it; it does not create or forward it
              </li>
            </ul>
          </Section>

          <Section title="5. Data Sharing">
            <p>
              We never sell, rent, or trade your data. Your pixel event data and browsing activity remain on your device.
            </p>
            <p>Your data is never shared with:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Meta / Facebook</li>
              <li>Advertising networks</li>
              <li>Analytics providers</li>
              <li>Data brokers or anyone else</li>
            </ul>
          </Section>

          <Section title="6. Permissions and Why They Are Needed">
            <p>The Extension asks only for the permissions its features require:</p>
            <ul className="space-y-3">
              {permissions.map((perm) => (
                <li key={perm.name} className="rounded-lg border border-border bg-card/50 p-4">
                  <code className="text-sm font-semibold text-foreground">{perm.name}</code>
                  <p className="mt-1 text-sm leading-relaxed">{perm.reason}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="7. No Tracking or Analytics">
            <p>
              No usage analytics, no crash reporting, no telemetry of any kind. How you use the Extension, which sites
              you inspect, and how many events you look at are not tracked. None of your data is gathered, sent, kept
              on our servers, or given to anyone.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              This policy may be revised occasionally. Notable updates will be announced on the Extension&apos;s Chrome
              Web Store listing along with a new &quot;Last updated&quot; date here. If you keep using the Extension
              after a change, you accept the revised policy.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              Questions about privacy or data requests? Reach us via the{" "}
              <a
                href={siteConfig.chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Chrome Web Store listing page
              </a>{" "}
              for {siteConfig.name}.
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}
