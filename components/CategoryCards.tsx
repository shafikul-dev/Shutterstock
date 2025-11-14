import Image from 'next/image';
import { CategoryCard } from '@/types';

interface CategoryCardsProps {
  cards: CategoryCard[];
}

export default function CategoryCards({ cards }: CategoryCardsProps) {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link || '#'}
              className="group relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
              
              {/* Content - Bottom Left */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3">
                  {card.title}
                </h3>
                <p className="text-white text-sm md:text-base mb-4 md:mb-6 max-w-md">
                  {card.description}
                </p>
              </div>
              
              {/* Red Arrow - Bottom Right */}
              <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8">
                <div className="text-red-500 group-hover:text-red-400 transition-colors">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

