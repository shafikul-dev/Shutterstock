import Image from 'next/image';
import { GuideCard } from '@/types';

interface HelpSectionProps {
  mainImage: string;
  guideCards: GuideCard[];
}

export default function HelpSection({ mainImage, guideCards }: HelpSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Main Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src={mainImage}
              alt="Photography guide"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Section - Content */}
          <div className="flex flex-col">
            {/* Top Content */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                New to photography? Let us help!
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                We offer a variety of written & recorded guides for all aspects of photography,
                ranging from equipment handling to artistic theory.
              </p>
              
              {/* Search Guide */}
              <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Search Guide</span>
              </div>
            </div>

            {/* Guide Cards */}
            <div className="space-y-6 flex-1">
              {guideCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card Image */}
                    <div className="relative h-[200px] md:h-full md:min-h-[150px]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {card.description}
                        </p>
                      </div>
                      <a
                        href={card.link || '#'}
                        className="text-red-500 hover:text-red-600 font-medium inline-flex items-center gap-1 group"
                      >
                        <span className="underline">Read More</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

