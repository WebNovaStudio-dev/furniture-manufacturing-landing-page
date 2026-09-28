const clients = ['Maison Ardent', 'Northline Hotels', 'Oda Studio', 'Keller & Vane', 'Parcel Home', 'Ostra Group']

export function Testimonial() {
  return (
    <section aria-label="Client testimonial" className="border-t border-border bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <figure>
          <blockquote className="font-serif text-3xl leading-snug tracking-tight text-balance md:text-4xl">
            {
              '“Hartwood delivered 1,400 guest-room pieces across six properties, on schedule and without a single structural claim. They feel like an extension of our design team.”'
            }
          </blockquote>
          <figcaption className="mt-8 text-sm">
            <span className="font-medium">Elena Marsh</span>
            <span className="text-muted-foreground"> — VP Design, Northline Hotels</span>
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by brands and studios
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((client) => (
            <li key={client} className="font-serif text-xl text-muted-foreground">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
