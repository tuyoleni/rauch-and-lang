"use client";
import { motion } from 'framer-motion';

interface ActiveSectionIndicatorProps {
  activeSection: string;
}

export function ActiveSectionIndicator({ activeSection }: ActiveSectionIndicatorProps) {
  return (
    <motion.div
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-4">
        {['home', 'features', 'engineering', 'process', 'contact'].map((section) => (
          <motion.div
            key={section}
            className={`w-1 h-1 rounded-full ${activeSection === section ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            initial={{ scale: 1 }}
            animate={{ scale: activeSection === section ? 1.5 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  )
}
