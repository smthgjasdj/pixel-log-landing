import type { Metadata } from "next"
import { Check } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles your data. Event data stays on your device, and we never sell or share your information.`,
}

const summaryPoints = [
  "All pixel event data is stored locally on your device only",
  "The extension observes pixel events only — it does not modify or block them",
  "No personal data, browsing history, or pixel data is ever sold or shared",
  "We do not share data with Meta/Facebook, ad networks, analytics providers, or data brokers",
  "No usage tracking, no analytics, no telemetry, no crash reporting",
  "The extension makes no outbound network requests — nothing is sent to us or anyone else",
]

const permissions: { name: string; reason: string }[] = [
  {
    name: "storage",
    reason: "Save your settings and temporary event logs locally on your device using chrome.storage.local.",
  },
  {
    name: "activeTab",
    reason:
      "Read the active tab's context when you open the panel, so events are shown for the page you are currently viewing.",
  },
  {
    name: "scripting",
    reason: "Inject the pixel detector script into pages so Meta Pixels can be found and monitored on the page.",
  },
  {
    name: "sidePanel",
    reason: "Display the extension as a browser side panel instead of a small popup.",
  },
  {
    name: "alarms",
    reason: "Schedule automatic event log cleanup and lightweight background housekeeping tasks.",
  },
  {
    name: "host access (all sites)",
    reason:
      "A Meta Pixel can appear on any domain, so the detector must be able to run on any page you choose to inspect. Access is used only to detect and read pixel activity on the page in front of you.",
  },
  {
    name: "content scripts (all frames)",
    reason:
      "Two small scripts run on the pages you visit — one in the page context to detect pixel activity and one in an isolated context to relay it to the panel. They run in subframes too, so pixels inside iframes are not missed. The scripts only observe pixel activity — they do not read or transmit your page content.",
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
        description={`${siteConfig.name} — Chrome Extension. Last updated: July 24, 2026`}
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
              The Extension collects and processes the following data locally on your device only:
            </p>
            <p className="font-medium text-foreground">User-provided data:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Extension settings and preferences (filter preferences, auto-clear interval, display options)</li>
            </ul>
            <p className="font-medium text-foreground">Automatically collected data (for debugging purposes only):</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Meta Pixel event names observed on pages you visit (e.g., PageView, Purchase, AddToCart)</li>
              <li>Event parameters included in those pixel fires (e.g., value, currency, content_ids)</li>
              <li>Pixel IDs present on the page</li>
              <li>Page URL and timestamp at the time of each pixel event</li>
              <li>Domain statistics (which domains have pixels detected)</li>
            </ul>
            <p className="font-medium text-foreground">Data NOT collected — ever:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>No personal identification information (name, email, address)</li>
              <li>No payment or financial data</li>
              <li>No browsing history, cookie values, or cached content</li>
              <li>No device identifiers</li>
              <li>No usage analytics or crash reports</li>
            </ul>
          </Section>

          <Section title="2. Data Handling">
            <p>All debugging data handling occurs locally on your device:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Pixel events are captured on-page by a lightweight detector script that watches the Meta Pixel activity
                the page itself produces — the standard technique used by pixel debugging tools
              </li>
              <li>Captured event data is held in memory and displayed in the Extension side panel for your review</li>
              <li>Event logs are stored locally per your configured retention setting</li>
              <li>Event exports (JSON/CSV) are generated locally and saved to your device when you click Export</li>
              <li>Your pixel event data is never sent to us, to Meta/Facebook, or to any third party</li>
              <li>The Extension observes pixel events — it does not modify, block, or interfere with them</li>
            </ul>
          </Section>

          <Section title="3. Data Storage">
            <p>All debugging data is stored exclusively on your local device:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-medium text-foreground">Storage mechanism:</span> chrome.storage.local —
                browser-native, sandboxed per extension
              </li>
              <li>
                <span className="font-medium text-foreground">Location:</span> your local browser profile on your device
              </li>
              <li>
                <span className="font-medium text-foreground">Event logs:</span> stored temporarily; auto-cleared based
                on your settings or on manual clear
              </li>
              <li>
                <span className="font-medium text-foreground">Settings:</span> persist until you reset them or uninstall
                the Extension
              </li>
              <li>No cloud storage and no server-side storage of your pixel or browsing data of any kind</li>
            </ul>
            <p>You can delete all stored data at any time by:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Clicking &quot;Clear&quot; in the Extension panel to clear all event logs</li>
              <li>Uninstalling the Extension — this automatically removes all locally stored data</li>
            </ul>
          </Section>

          <Section title="4. No Network Requests">
            <p>
              The Extension operates entirely offline. It makes no outbound network requests of its own — no data is
              transmitted to us, to Meta/Facebook, or to any third party at any time.
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>No install, update, or uninstall pings are sent</li>
              <li>No anonymous identifiers or version signals are transmitted</li>
              <li>No analytics, telemetry, or crash-reporting requests are made</li>
              <li>
                The only network traffic your browser sees is the Meta Pixel requests that the pages you visit send on
                their own — the Extension merely observes these; it does not generate or forward them
              </li>
            </ul>
          </Section>

          <Section title="5. Data Sharing">
            <p>
              We do not sell, rent, or trade your data with any third parties. Your pixel event data and browsing
              activity stay on your device.
            </p>
            <p>We do NOT share data with:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Meta / Facebook</li>
              <li>Advertising networks</li>
              <li>Analytics providers</li>
              <li>Data brokers or any other third parties</li>
            </ul>
          </Section>

          <Section title="6. Permissions and Why They Are Needed">
            <p>The Extension requests only the permissions required for core functionality:</p>
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
              Zero usage analytics, zero crash reporting, zero telemetry. We do not track how you use the Extension,
              which websites you visit, or how many events you inspect. None of your data is collected, transmitted,
              stored on our servers, or shared with anyone.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Significant changes will be communicated via the
              Extension&apos;s Chrome Web Store listing and by updating the &quot;Last updated&quot; date on this page.
              Continued use after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              For privacy questions or data-related requests, contact us through the{" "}
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
