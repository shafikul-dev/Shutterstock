import Image from 'next/image';
import type { Seller } from '@/types';

interface UsedGearSectionProps {
  sellers: Seller[];
}

export default function UsedGearSection({ sellers }: UsedGearSectionProps) {
  const topSellers = sellers.slice(0, 3);

  return (
    <section className="bg-white mx-auto">
      <div className=" mx-auto px-4 py-12 lg:py-16 h-full">
        {/* Heading */}
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-6">
          Featured savings
        </h2>

        <div className="grid gap-10 items-start lg:grid-cols-[35%_60%]">
          {/* Left image */}
          <div className="relative w-full  h-full aspect-[4/3]">
            <Image
              src="/pixel/12.webp"
              alt="Used gear layout"
              fill
              className="object"
              priority
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col ">
            <h3 className="text-[28px] md:text-[36px] font-bold leading-tight">
              Turn used gear into new possibilities
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-800 max-w-xl">
              We offer a reliable platform for buying and selling used photography gear.
              Whether you&apos;re a beginner looking for affordable equipment or a
              professional photographer in search of high-end gear at a discounted price,
              we&apos;ve got you covered.
            </p>

            <h4 className="mt-6 text-lg font-semibold">
              Top sellers this month
            </h4>

            {/* Sellers row */}
            <div className="mt-4 grid gap-4 md:grid-cols-3 ">
              {topSellers.map((seller) => (
                <div
                  key={seller.id}
                  className="flex flex-col rounded-lg   bg-white px-4 py-3 "
                >
                  <div className="flex gap-3 items-start">
                    {seller.image && (
                      <div className="relative w-[72px] h-[72px] rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={seller.image}
                          alt={seller.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {seller.name}
                      </p>
                      <p className="text-xs text-gray-800">{seller.title}</p>
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-gray-800">
                        <span className="text-[#F33838] text-base">✓</span>
                        <span>{seller.description}</span>
                      </p>
                    </div>
                  </div>

                  <ul className="mt-2 space-y-0.5 text-[11px] text-gray-800 leading-snug">
                    {seller.specialties.map((item) => (
                      <li key={item} className="flex items-start gap-1">
                        <span className="mt-[2px] text-[#F33838]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center px-10 py-2.5 text-sm font-semibold tracking-wide text-white bg-[#F33838] hover:bg-[#e02c2c] transition-colors"
              >
                BUY
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center px-10 py-2.5 text-sm font-semibold tracking-wide border border-gray-900 text-gray-900 bg-white hover:bg-gray-50 transition-colors"
              >
                SELL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


