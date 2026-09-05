import { GetExtensionButton } from '@/components/get-extension-button'

export function CtaBanner() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklch,white_18%,transparent),transparent)]" />
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Put your pixel under the microscope
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Add Pixel Log to Chrome and get a precise record of every event across the
          web.
        </p>
        <div className="mt-8 flex justify-center">
          <GetExtensionButton className="bg-background text-foreground hover:shadow-black/10" />
        </div>
      </div>
    </section>
  )
}
