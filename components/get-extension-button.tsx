import { ArrowDownToLine, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site'

interface GetExtensionButtonProps {
  className?: string
  label?: string
  size?: 'default' | 'lg'
}

export function GetExtensionButton({
  className,
  label = 'Bring Pixel Log to Chrome',
  size = 'lg',
}: GetExtensionButtonProps) {
  return (
    <a
      href={siteConfig.chromeStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary font-medium text-primary-foreground shadow-sm',
        'transition-all duration-200 ease-out',
        'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'active:translate-y-0 active:scale-[0.98]',
        size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-5 py-2.5 text-sm',
        className,
      )}
    >
      <ArrowDownToLine
        className={cn(
          'shrink-0 transition-transform duration-200 ease-out group-hover:translate-y-0.5',
          size === 'lg' ? 'size-5' : 'size-4',
        )}
        aria-hidden="true"
      />
      <span>{label}</span>
      <ArrowRight
        className={cn(
          'shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1',
          size === 'lg' ? 'size-5' : 'size-4',
        )}
        aria-hidden="true"
      />
    </a>
  )
}
