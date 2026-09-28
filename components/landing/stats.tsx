const stats = [
  { value: '38', label: 'Years of production' },
  { value: '120k', label: 'Pieces shipped yearly' },
  { value: '9,000 m²', label: 'Factory floor' },
  { value: '100%', label: 'FSC-certified timber' },
]

export function Stats() {
  return (
    <section aria-label="Company at a glance" className="border-y border-border">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-2 px-5 py-8 md:px-8 md:py-10 ${
              i % 2 === 1 ? 'border-l border-border' : ''
            } ${i >= 2 ? 'border-t border-border md:border-t-0' : ''} ${
              i === 2 ? 'md:border-l' : ''
            }`}
          >
            <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 font-serif text-4xl tracking-tight md:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
