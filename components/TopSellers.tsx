import Image from 'next/image';
import { sellers } from '@/lib/data';

export default function TopSellers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Top sellers this month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  {seller.image && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={seller.image}
                        alt={seller.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {seller.name}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">{seller.title}</p>
                  </div>
                </div>
                {seller.verified && (
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 whitespace-nowrap">
                    {seller.description}
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {seller.specialties.map((specialty, index) => (
                  <li key={index} className="text-gray-600 flex items-start text-sm">
                    <span className="mr-2">•</span>
                    <span>{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

