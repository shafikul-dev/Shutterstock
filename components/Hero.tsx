import { categories } from '@/lib/data';

export default function Hero() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {category.name}
              </h2>
              <ul className="space-y-3">
                {category.subcategories.map((subcategory) => (
                  <li
                    key={subcategory}
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                  >
                    {subcategory}
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

