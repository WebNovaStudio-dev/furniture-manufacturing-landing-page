import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  inverted?: boolean
}

export function SectionHeading({ eyebrow, title, description, className, inverted }: SectionHeadingProps) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-12 md:items-end', className)}>
      <div className="md:col-span-7">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">{title}</h2>
      </div>
      {description && (
        <p
          className={cn(
            'leading-relaxed text-pretty md:col-span-5',
            inverted ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
