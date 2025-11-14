'use client';

import { useState } from 'react';
import Image from 'next/image';
import { navigationItems, categories } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900">
      <div className="w-full">
        {/* Top bar with logo and icons */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          {/* Logo */}
          <div className="relative h-10 w-32">
            <Image
              src="/pixel/logo.svg"
              alt="PIXEL"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Icons on the right */}
          <div className="flex items-center gap-6">
            {/* User/Login Icon */}
            <button className="text-red-500 hover:text-red-400 transition-colors" aria-label="Login">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Shopping Cart Icon */}
            <button className="text-red-500 hover:text-red-400 transition-colors" aria-label="Shopping Cart">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

            {/* Search Icon */}
            <button className="text-red-500 hover:text-red-400 transition-colors" aria-label="Search">
              <svg
                className="w-6 h-6"
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
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden md:flex items-center justify-center gap-8 px-6 py-4 relative">
          {navigationItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                item === 'EXTREME'
                  ? 'text-white bg-red-500 px-3 py-1'
                  : 'text-white hover:text-gray-300'
              }`}
              onMouseEnter={() => {
                if (item === 'CAMERAS') {
                  setIsDropdownOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item === 'CAMERAS') {
                  setIsDropdownOpen(false);
                }
              }}
            >
              {item}
            </a>
          ))}

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute top-full left-0 w-full bg-stone-50 border-t border-gray-200 shadow-lg z-50"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 underline">
                        {category.name}
                      </h3>
                      <ul className="space-y-2">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory}>
                            <a
                              href="#"
                              className="text-gray-900 hover:text-gray-700 transition-colors text-sm"
                            >
                              {subcategory}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-800 pb-4 px-6 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-sm font-medium text-white uppercase hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

