import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiteData } from '@/app/data'

interface ProcessProps {
  data: SiteData['process']
}

export function Process({ data }: ProcessProps) {
  return (
    <section id="process" className="max-w-7xl mx-auto bg-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-light mb-16 text-center text-gray-900"
      >
        {data.title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.processes.map((process, index) => (
          <motion.div
            key={process.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={process.image || "/placeholder.svg?height=900&width=1200"}
              alt={process.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <motion.h3
                className="text-2xl font-light mb-2 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {process.name}
              </motion.h3>
              <motion.p
                className="text-lg text-white opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {process.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
