import { motion } from 'framer-motion'
import { SiteData } from '@/app/data'

interface ContactProps {
  data: SiteData['contact']
}

export function Contact({ data }: ContactProps) {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="bg-white px-8 md:px-16 lg:px-24 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-light mb-8 text-gray-900"
        >
          {data.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          {data.description}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-gray-900 px-8 py-3 text-sm hover:bg-gray-900 hover:text-white transition-colors text-gray-900"
        >
          {data.ctaText}
        </motion.button>
      </div>
    </section>
  )
}
