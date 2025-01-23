import { motion } from "framer-motion"
import { Shield, Truck } from "lucide-react"
import { SiteData } from '@/app/data'

interface TrailerProps {
    data: SiteData["trailer"]
}

export function Trailer({ data }: TrailerProps) {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="bg-[#111111] px-8 md:px-16 lg:px-24 py-24">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <Truck className="w-16 h-16 mb-6 text-[#e0d5c1]" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-4xl font-light mb-6"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-[#a19b8c] max-w-2xl"
                    >
                        {data.description}
                    </motion.p>
                </div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {data.features.map((feature, index) => (
                        <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-black/50 p-6 rounded-lg backdrop-blur-sm"
                        >
                            <div className="flex items-center space-x-4">
                                <Shield className="w-5 h-5 text-[#e0d5c1]" />
                                <p className="text-sm font-light">{feature}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

