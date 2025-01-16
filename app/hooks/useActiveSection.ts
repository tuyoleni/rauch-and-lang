import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const element = document.getElementById(id)
      if (!element) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { threshold: 0.3 } // Lowered threshold for earlier detection
      )

      observer.observe(element)
      return observer
    }).filter(Boolean)

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [sectionIds])

  return activeSection
}

