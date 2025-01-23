'use client'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Engineering } from '@/components/Engineering'
import { Process } from '@/components/Process'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ActiveSectionIndicator } from '@/components/ActiveSectionIndicator'
import { siteData } from '@/app/data'
import { useActiveSection } from '@/app/hooks/useActiveSection'


export default function Home() {
  const activeSection = useActiveSection(['home', 'features', 'engineering', 'process', 'contact'])

  return (
    <div className="bg-[#0a0a0a] text-[#e0d5c1] min-h-screen">
      <Header activeSection={activeSection} />
      <ActiveSectionIndicator activeSection={activeSection} />
      <main className="">
        <section id="home" className="min-h-screen">
          <Hero data={siteData.hero} />
        </section>

        <section className="min-h-96 px-4 sm:px-8 md:px-16 lg:px-24 py-16 justify-center">
          <p>It was our aim to convert the 100 year old precious historical car, original electric built in 1912 to a long distance Hydrogen Hybrid.  Without any physical damage to its historical inheritance. The car has still the first 106 year old paint.
            Hydrogen Hybrid will be beside Lithium Battery powered cars the future of mobility.
            It combines the torque an agility of the electric engine while charging the battery pack with the fuel cell powered by Solar PV produced Hydrogen.​</p>
        </section>

        <section id="features" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16">
          <Features data={siteData.features} />
        </section>
        <section id="engineering" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16">
          <Engineering data={siteData.engineering} />
        </section>
        <section id="process" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16">
          <Process data={siteData.process} />
        </section>

        <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
          <p>A Dual Control car, this Rauch & Lang can be operated from the left side of either the rear seat or the front. There are controls in both locations, as well as two steering tillers that fold up out of the way when not in use. The interior has been newly upholstered in burgundy edge-trimmed cloth with pleated, buttoned seats. Instrumentation includes an ampere-hour meter in addition to the usual ammeter and voltmeter, as well as a Warner Auto Meter speedometer. A stem-wind Waltham eight-day watch is mounted on the front bulkhead. The body is painted to match the interior, complementing the black fenders. Lighting is electric throughout.​</p>
        </section>

        <section id="contact" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16">
          <Contact data={siteData.contact} />
        </section>
      </main>
      <Footer data={siteData.footer} />
    </div>
  )
}

