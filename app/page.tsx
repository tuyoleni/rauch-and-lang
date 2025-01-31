"use client"

import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Engineering } from "@/components/Engineering"
import { Process } from "@/components/Process"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Trailer } from "@/components/Trailer"
import { ActiveSectionIndicator } from "@/components/ActiveSectionIndicator"
import { siteData } from "./data"
import { useActiveSection } from "./hooks/useActiveSection"

export default function Home() {
  const activeSection = useActiveSection(["home", "features", "engineering", "process", "trailer", "contact"])

  return (
    <div className="bg-white text-gray-900 min-h-screen scroll-smooth">
      <Header activeSection={activeSection} />
      <ActiveSectionIndicator activeSection={activeSection} />
      <main>
        <section id="home">
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
        <section id="trailer" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16">
          <Trailer data={siteData.trailer} />
        </section>
        <section id="contact" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16">
          <Contact data={siteData.contact} />
        </section>
      </main>
      <Footer data={siteData.footer} />
    </div>
  )
}
