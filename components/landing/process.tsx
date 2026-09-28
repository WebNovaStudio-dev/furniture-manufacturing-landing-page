import { SectionHeading } from './section-heading'

const steps = [
  {
    title: 'Brief & design',
    body: 'We review drawings, targets and budgets, then return shop drawings and a costed proposal within ten business days.',
  },
  {
    title: 'Prototype',
    body: 'A full-size sample is built, tested for load and wear, and refined with you until it is signed off.',
  },
  {
    title: 'Production',
    body: 'Tooling is set, timber is sourced and the run is scheduled with weekly progress reports and QC photos.',
  },
  {
    title: 'Delivery',
    body: 'Pieces are inspected, blanket-wrapped or boxed and shipped direct to site, warehouse or customer.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          inverted
          eyebrow="How we work"
          title="From drawing to delivery in four steps"
          description="Typical programs move from brief to first shipment in 10 to 14 weeks, depending on volume and material lead times."
        />

        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-primary-foreground/25 pt-6">
              <span className="font-serif text-5xl text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
