import { motion } from 'framer-motion'
import { SiteData } from '@/app/data'

interface FooterProps {
  data: SiteData['footer']
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="py-12 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 border-t border-[#222222]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.p
          className="text-sm text-[#a19b8c] mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {data.copyright}
        </motion.p>
        <div className="flex space-x-8">
          {data.links.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-sm hover:text-[#e0d5c1] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-[#a19b8c]">
        <p>This vintage car showcase website was designed to capture the elegance and innovation. Emphasizesing the luxury aspect, while the smooth transitions and animations provide a modern touch to the historical content.</p>
        <p className="mt-2">Built with passion by <a href="https://www.moodbod.design" target="_blank" rel="noopener noreferrer">moodbod.design</a> and brought to you by <a href="https://www.fessynam.com" target="_blank" rel="noopener noreferrer">fessynam.com</a>.</p>
      </div>
    </footer>
  )
}

