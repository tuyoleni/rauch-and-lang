import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { SiteData } from '@/app/data'

interface FeaturesProps {
  data: SiteData['features']
}

export function Features({ data }: FeaturesProps) {
  const sectionRef = useRef<HTMLElement>(null)
  return (
    <section ref={sectionRef} id="features" className="py-24 max-w-7xl mx-auto bg-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-light mb-16 text-gray-900"
      >
        {data.title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
          >
            <Image
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            />
            <motion.div
              className="absolute inset-0 bg-white bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <motion.h3
                className="text-xl font-light mb-2 text-gray-900"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-600 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {feature.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
