import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { Stats } from '@/components/landing/stats'
import { Capabilities } from '@/components/landing/capabilities'
import { Collections } from '@/components/landing/collections'
import { Process } from '@/components/landing/process'
import { Materials } from '@/components/landing/materials'
import { Testimonial } from '@/components/landing/testimonial'
import { ContactCta } from '@/components/landing/contact-cta'
import { SiteFooter } from '@/components/landing/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Capabilities />
        <Collections />
        <Process />
        <Materials />
        <Testimonial />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
