import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { SiteData } from '@/app/data';

interface HeroProps {
  data: SiteData['hero'];
}

export function Hero({ data }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useViewportScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Transformations based on scroll position
  const yRange = useTransform(scrollY, [0, 1600], [0, 1]);
  const opacity = useTransform(yRange, [0, 2, 1], [1, 1, 0]);

  // Scale down (zoom out) only at the end of the scroll
  const scale = useTransform(yRange, [0.8, 1], [1, 0.8]);

  // Smooth transition for yRange
  const smoothYRange = useSpring(yRange, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Image index and text opacity transformations
  const imageIndex = useTransform(smoothYRange, [0, 1], [0, data.images.length - 1]);


  // Effect to update current image index
  useEffect(() => {
    const unsubscribeImage = imageIndex.onChange(v => {
      setCurrentImageIndex(Math.round(v));
    });

    return () => {
      unsubscribeImage();
    };
  }, [imageIndex]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <motion.div className="sticky top-0 h-screen overflow-hidden" style={{ scale }}>
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
              }}
              transition={{ duration: currentImageIndex === index ? 1 : undefined }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Vintage Car Hero ${index + 1}`}
                fill
                className="object-cover opacity-40"
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

        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-4 sm:px-8 md:px-16 lg:px-24">
          <h1 className="text-6xl md:text-8xl font-light mb-6">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl font-light max-w-xl">
            {data.subtitle}
          </p>
        </div>
      </motion.div>
    </section >
  );
}
