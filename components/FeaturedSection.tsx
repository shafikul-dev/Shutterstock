import { PromotionalBanner } from '@/types';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  products?: typeof products;
  type?: 'banner' | 'products' | 'used-gear';
}

export default function FeaturedSection({
  title,
  subtitle,
  description,
  products: sectionProducts,
  type = 'banner',
}: FeaturedSectionProps) {
  if (type === 'banner') {
    return (
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 md:p-12 text-center border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 mb-4">{subtitle}</p>
            )}
            {description && (
              <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (type === 'used-gear') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            {subtitle && (
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{subtitle}</h3>
            )}
            {description && (
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>
        {sectionProducts && sectionProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

