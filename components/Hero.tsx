import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { SiteData } from '@/app/data'

interface HeroProps {
  data: SiteData['hero'];
}

export function Hero({ data }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { scrollY } = useViewportScroll()
  const containerRef = useRef<HTMLDivElement>(null)

  const yRange = useTransform(scrollY, [0, 2000], [0, 1])
  const opacity = useTransform(yRange, [0, 0.9, 1], [1, 1, 0])
  const scale = useTransform(yRange, [0, 1], [1, 1.1])  // Increased max scale to ensure coverage

  const smoothYRange = useSpring(yRange, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const imageIndex = useTransform(smoothYRange, [0, 1], [0, data.images.length - 1])

  useEffect(() => {
    const unsubscribeImage = imageIndex.onChange(v => {
      setCurrentImageIndex(Math.round(v))
    })

    return () => {
      unsubscribeImage()
    }
  }, [imageIndex])

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        >
          {data.images.map((src, index) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              style={{
                opacity: useTransform(
                  imageIndex,
                  [index - 0.5, index, index + 0.5],
                  [0, 1, 0]
                ),
                scale,
              }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Vintage Car Hero ${index + 1}`}
                fill
                className="object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="relative z-10 h-full flex flex-col justify-center px-24">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-light mb-6"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl font-light max-w-xl"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

