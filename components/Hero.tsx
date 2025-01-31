import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SiteData } from '@/app/data';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface HeroProps {
  data: SiteData['hero'];
}

export function Hero({ data }: HeroProps) {
  const slider = useRef<Slider>(null);

  const next = () => {
    slider.current?.slickNext();
  };

  const previous = () => {
    slider.current?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
  };

  return (
    <section className="relative h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
        <h1 className="text-4xl md:text-6xl font-light mb-6 drop-shadow-lg [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
          {data.title}
        </h1>
        <p className="text-base md:text-lg font-light max-w-xl drop-shadow-lg [text-shadow:_1px_1px_2px_rgba(0,0,0,0.5)]">
          {data.subtitle}
        </p>
      </div>

      <div className="relative h-full">
        <button
          onClick={previous}
          className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 p-2  m-4 rounded-full bg-white/50 hover:bg-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 p-2 m-4 rounded-full bg-white/50 hover:bg-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>

        <Slider ref={slider} {...settings} className="h-full">
          {data.images.map((image, index) => (
            <div key={index} className="relative h-screen">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
