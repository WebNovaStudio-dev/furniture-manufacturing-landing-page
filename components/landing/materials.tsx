import Image from 'next/image'
import { Check } from 'lucide-react'

const points = [
  'FSC-certified oak, walnut, ash and maple from North American mills',
  'Traditional mortise-and-tenon and dovetail joinery',
  'Low-VOC, water-based and hardwax oil finishes',
  'Upholstery in natural wool, linen and vegetable-tanned leather',
  'Ten-year structural warranty on every frame',
]

export function Materials() {
  return (
    <section id="materials" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="/images/materials.png"
            alt="Oak, walnut and ash wood samples alongside wool fabric, leather and brass hardware"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">Materials &amp; craft</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Honest materials, made to outlast trends
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            {"We pair modern CNC precision with hand joinery and hand finishing. The result is furniture that holds up to a hotel lobby and still looks right in twenty years."}
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
