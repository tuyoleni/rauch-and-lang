'use client'

import { useEffect } from 'react'
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
      <main className="pt-16">
        <section id="home" className="min-h-screen">
          <Hero data={siteData.hero} />
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
        <section id="contact" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16">
          <Contact data={siteData.contact} />
        </section>
      </main>
      <Footer data={siteData.footer} />
    </div>
  )
}

