import Image from 'next/image'
import { Factory, Hammer, Hotel, Tags } from 'lucide-react'
import { SectionHeading } from './section-heading'

const capabilities = [
  {
    icon: Factory,
    title: 'Contract manufacturing',
    body: 'Production runs from 50 to 50,000 units with repeatable tolerances and dedicated line capacity.',
  },
  {
    icon: Hotel,
    title: 'Hospitality & commercial',
    body: 'Durable, code-compliant seating, casegoods and millwork for hotels, restaurants and workplaces.',
  },
  {
    icon: Tags,
    title: 'Private label',
    body: 'Your designs, our engineering. Prototyping, packaging and drop-ship logistics included.',
  },
  {
    icon: Hammer,
    title: 'Bespoke builds',
    body: 'One-off statement pieces and small batches made entirely by hand by our senior makers.',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Capabilities"
        title="Everything under one roof"
        description="Design, engineering, joinery, upholstery and finishing all happen in the same building, so nothing is lost between hand-offs."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-4 bg-card p-6 md:p-8">
              <Icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
        <div className="relative min-h-80 overflow-hidden rounded-lg">
          <Image
            src="/images/cnc-production.png"
            alt="CNC router cutting oak panels on the Hartwood factory floor"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
