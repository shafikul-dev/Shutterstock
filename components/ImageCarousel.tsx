'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CarouselSlide } from '@/types';

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageCarousel({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides Container */}
      <div
        className="relative w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Text Overlay - Lower Left Quadrant */}
            <div className="absolute bottom-8 md:bottom-12 left-6 md:left-40 lg:left-40 max-w-xl md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 uppercase tracking-tight leading-tight whitespace-nowrap">
                {slide.title}
              </h2>
              <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                <p className="text-base md:text-lg lg:text-xl text-white">
                  {slide.subtitle}
                </p>
                {/* Red Arrow - Inline with subtitle */}
                <button
                  onClick={goToNext}
                  className="shrink-0 hover:opacity-80 transition-opacity"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[30px] h-[30px] md:w-[45px] md:h-[45px]"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <path
                      d="M22.5 37.5L19.8281 34.875L30.3281 24.375H7.5V20.625H30.3281L19.8281 10.125L22.5 7.5L37.5 22.5L22.5 37.5Z"
                      fill="#F33838"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots - Centered */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? 'w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full'
                : 'w-2.5 h-2.5 md:w-3 md:h-3 bg-white/60 rounded-full hover:bg-white/80 border border-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

