import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const contacts = [
  { icon: Mail, label: 'Email', value: 'projects@hartwood.co', href: 'mailto:projects@hartwood.co' },
  { icon: Phone, label: 'Phone', value: '+1 (616) 555-0142', href: 'tel:+16165550142' },
  { icon: MapPin, label: 'Factory', value: '410 Mill Street, Grand Rapids, MI' },
]

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 rounded-lg border border-border bg-card p-8 md:p-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">Start a project</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
            {"Have a drawing, a sample or just an idea? Let's build it."}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            Send us your specs and quantities. A project lead will reply within one business day with
            next steps and an indicative timeline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:projects@hartwood.co?subject=Project%20inquiry" className={cn(buttonVariants(), 'h-11 px-5 text-sm')}>
                Request a quote <ArrowRight className="size-4" />
              </a>
            <a href="tel:+16165550142" className={cn(buttonVariants({ variant: 'outline', }), 'bg-transparent h-11 px-5 text-sm')}>Book a factory tour</a>
          </div>
        </div>

        <ul className="flex flex-col justify-end gap-6 lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Icon className="size-4 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} className="text-lg underline-offset-4 hover:underline">
                    {value}
                  </a>
                ) : (
                  <p className="text-lg">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
