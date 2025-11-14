import Image from 'next/image';
import { CategoryCard } from '@/types';

interface CategoryCardsProps {
  cards: CategoryCard[];
}

export default function CategoryCards({ cards }: CategoryCardsProps) {
  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-center my-[73px]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div key={card.id} className="relative w-[400px] h-[400px]" id="card">
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
              
              {/* Desktop Content */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                <div className="hidden md:block">
                  <p className="text-[32px] font-[600] uppercase mb-2">{card.title}</p>
                  <div className="flex justify-between gap-3 items-center">
                    <p className="font-[400] text-[16px]">{card.description}</p>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                      >
                        <path
                          d="M22.5 37.5L19.8281 34.875L30.3281 24.375H7.5V20.625H30.3281L19.8281 10.125L22.5 7.5L37.5 22.5L22.5 37.5Z"
                          fill="#F33838"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Content */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white block md:hidden">
                <div className="flex justify-between gap-3 items-center">
                  <p className="text-[20px] font-[500] uppercase">{card.title}</p>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 45 45"
                      fill="none"
                    >
                      <path
                        d="M22.5 37.5L19.8281 34.875L30.3281 24.375H7.5V20.625H30.3281L19.8281 10.125L22.5 7.5L37.5 22.5L22.5 37.5Z"
                        fill="#F33838"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
