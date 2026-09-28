import Image from 'next/image'
import { SectionHeading } from './section-heading'

const pieces = [
  {
    src: '/images/product-lounge-chair.png',
    name: 'Mora Lounge Chair',
    detail: 'White oak, wool bouclé',
    tag: 'Seating',
  },
  {
    src: '/images/product-dining-table.png',
    name: 'Aldren Dining Table',
    detail: 'Black walnut, oil finish',
    tag: 'Tables',
  },
  {
    src: '/images/product-sideboard.png',
    name: 'Fenn Sideboard',
    detail: 'Ash, fluted fronts, brass',
    tag: 'Casegoods',
  },
]

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-20 bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Recent work"
          title="Pieces from the line"
          description="A selection of in-house designs and client programs currently in production. Every piece can be adapted in size, species and finish."
        />

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {pieces.map((piece) => (
            <li key={piece.name} className="group">
              <article>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={piece.src}
                    alt={`${piece.name} in ${piece.detail.toLowerCase()}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                    {piece.tag}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl">{piece.name}</h3>
                  <p className="text-sm text-muted-foreground">{piece.detail}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
