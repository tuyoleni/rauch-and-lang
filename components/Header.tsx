import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { siteData } from '@/app/data'

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowBackground(scrollPosition > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const activeSectionIndex = siteData.header.sections.findIndex(section => section.href.slice(1) === activeSection);
    if (activeSectionIndex !== -1) {
      setCurrentBackgroundIndex(activeSectionIndex);
    }
  }, [activeSection]);

  const handleMouseEnter = (index: number) => {
    setIsTransitioning(true);
    setCurrentBackgroundIndex(index);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 transition-colors duration-300 ${showBackground ? 'bg-white' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center w-full">
        <a href="#home" className={`sm:text-xl font-medium ${showBackground ? 'text-gray-900' : 'text-white'}`}>
          ev classic world
        </a>
        <div className="flex items-center space-x-4">
          <span className={`text-sm font-light hidden sm:inline-block ${showBackground ? 'text-gray-700' : 'text-white'}`}>
            {activeSection !== 'home' ? activeSection.toUpperCase() : ''}
          </span>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={showBackground ? 'text-gray-900' : 'text-white'}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden"
            style={{ height: '100vh', width: '100vw' }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {siteData.header.backgroundImages.map((src, index) => (
                <motion.div
                  key={src}
                  className="absolute inset-0 w-full h-full"
                  initial={{ scale: 1, opacity: index === 0 ? 1 : 0 }}
                  animate={{
                    scale: currentBackgroundIndex === index ? (isTransitioning ? 1.05 : 1) : 1.1,
                    opacity: currentBackgroundIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Menu background ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 opacity-5"
                  />
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-gray-700 hover:text-gray-900 transition-colors z-10"
              aria-label="Close menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <X size={24} />
            </motion.button>
            <nav className="relative z-10 w-full max-w-4xl">
              <ul className="space-y-4 sm:space-y-6 text-center">
                {siteData.header.sections.map((section, index) => (
                  <motion.li
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={section.href}
                      className={`text-xl sm:text-2xl lg:text-3xl font-light transition-colors ${activeSection === section.href.slice(1)
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      {section.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
