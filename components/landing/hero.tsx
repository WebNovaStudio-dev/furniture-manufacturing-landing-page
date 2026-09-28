import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Furniture manufacturing since 1987
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-balance md:text-7xl">
            Built by hand. Made at scale.
          </h1>
        </div>
        <div className="lg:col-span-5">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            We design, engineer and manufacture solid-wood furniture for hospitality groups,
            retailers and design studios. One workshop, from the first sketch to the last
            thousand units.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={cn(buttonVariants(), 'h-11 px-5 text-sm')}>
                Start a project <ArrowRight className="size-4" />
              </a>
            <a href="#collections" className={cn(buttonVariants({ variant: 'outline', }), 'bg-transparent h-11 px-5 text-sm')}>View our work</a>
          </div>
        </div>
      </div>

      <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-lg md:mt-16 md:aspect-[21/9]">
        <Image
          src="/images/hero-workshop.png"
          alt="A craftsman hand-finishing a walnut dining table in the Hartwood workshop"
          fill
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 rounded-md bg-background/90 px-4 py-3 backdrop-blur md:bottom-6 md:left-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Now in production</p>
          <p className="font-serif text-lg">Aldren walnut dining series</p>
        </div>
      </div>
    </section>
  )
}
