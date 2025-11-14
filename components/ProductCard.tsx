import Image from 'next/image';
import { Product } from '@/types';
import CountdownTimer from './CountdownTimer';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            <span>No Image</span>
          </div>
        )}
        {product.countdown && (
          <div className="absolute top-4 right-4">
            <CountdownTimer time={product.countdown} />
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">{product.brand}</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
        
        {product.features && product.features.length > 0 && (
          <ul className="space-y-1.5 text-sm text-gray-600">
            {product.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-gray-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="text-2xl font-bold text-gray-900">
            $ {product.price.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

