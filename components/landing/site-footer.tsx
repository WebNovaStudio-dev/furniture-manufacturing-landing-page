const columns = [
  {
    title: 'Company',
    links: [
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Process', href: '#process' },
      { label: 'Materials', href: '#materials' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Collections', href: '#collections' },
      { label: 'Hospitality', href: '#capabilities' },
      { label: 'Private label', href: '#capabilities' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Request a quote', href: '#contact' },
      { label: 'projects@hartwood.co', href: 'mailto:projects@hartwood.co' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl">
            Hartwood <span className="text-accent">&amp;</span> Co.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Solid-wood furniture, designed and manufactured in Grand Rapids, Michigan since 1987.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground md:px-8">
          {'© 2026 Hartwood & Co. Furniture Manufacturing. All rights reserved.'}
        </p>
      </div>
    </footer>
  )
}
