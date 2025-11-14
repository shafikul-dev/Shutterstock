'use client';

import Image from 'next/image';
import { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedOption, setSelectedOption] = useState(product.selectedOption || product.options?.[0] || '');
  const [quantity, setQuantity] = useState(product.quantity || 1);

  return (
    <div className="group cursor-pointer bg-white w-[256px] h-[434px] flex flex-col">
      {/* Top Icons */}
      <div className="flex items-center justify-end gap-3 mb-2">
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
      </div>

      {/* Product Image */}
      <div className="relative mb-4 w-[253px] h-[253px] overflow-hidden bg-gray-100 flex-shrink-0 mx-auto">
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
      </div>
      
      {/* Product Details */}
      <div className="space-y-3 flex-grow flex flex-col">
        {/* Product Name */}
        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
        
        {/* Brand */}
        <p className="text-base text-gray-900">{product.brand}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <svg className="w-5 h-5 text-[#F33838]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-base text-gray-900 font-medium">{product.rating}</span>
        </div>

        {/* Options (for 2 Lens kit) */}
        {product.options && product.options.length > 0 && (
          <div className="flex gap-2">
            {product.options.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedOption === option
                    ? 'bg-[#F33838] text-white'
                    : 'border-2 border-[#F33838] text-[#F33838] bg-white'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Quantity Selector (for 2 Lens kit) */}
        {product.options && (
          <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#F33838] hover:opacity-80 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="text-base font-medium text-gray-900">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#F33838] hover:opacity-80 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        )}

        {/* Features (for EOS R5 and Mavic 3) */}
        {product.features && product.features.length > 0 && (
          <ul className="space-y-1.5 text-sm text-gray-900">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-gray-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Timer */}
        {product.countdown && (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#F33838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-base text-gray-900">{product.countdown}</span>
          </div>
        )}

        {/* Price */}
        <div className="pt-2">
          {product.originalPrice && (
            <div className="text-lg text-gray-500 line-through mb-1">
              $ {product.originalPrice.toLocaleString()}
            </div>
          )}
          <div className="text-3xl font-bold text-gray-900">
            $ {product.price.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
