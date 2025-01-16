import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { SiteData } from '@/app/data'

interface EngineeringProps {
  data: SiteData['engineering']
}

export function Engineering({ data }: EngineeringProps) {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="bg-[#111111] px-8 md:px-16 lg:px-24 py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-light mb-16"
        >
          {data.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light">{data.subtitle}</h3>
            <p className="text-[#a19b8c] leading-relaxed">
              {data.description}
            </p>
            <motion.button
              className="flex items-center text-sm group"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {data.ctaText}
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative aspect-square"
          >
            <Image
              src={data.image || "/placeholder.svg"}
              alt="Engineering Excellence"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

