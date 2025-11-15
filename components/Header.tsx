'use client';

import { useState } from 'react';
import Image from 'next/image';
import { navigationItems, categories } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className='bg-[#1a1a1b]'>
 <div className="relative z-50 bg-[#1a1a1b] h-auto mx-auto container">
      <div className="w-full">
        {/* Top bar with logo and icons */}
        <div className="flex items-center justify-between p-4 md:p-6 lg:p-[26px]">
          {/* Logo */}
          <div className="relative h-[24px] w-[90px] md:h-[30px] md:w-[116px]">
            <Image
              src="/pixel/logo.svg"
              alt="PIXEL"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Icons on the right */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-[31px]">
            {/* User/Login Icon */}
            <button className="hover:opacity-80 transition-opacity" aria-label="Login">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px]"
              >
                <path
                  id="Vector"
                  d="M23 31.2H23.2V31V25.6429C23.2 23.599 22.3664 21.6399 20.8843 20.1963C19.4024 18.7529 17.3935 17.9429 15.3 17.9429H8.7C6.60646 17.9429 4.59765 18.7529 3.11573 20.1963C1.63363 21.6399 0.8 23.599 0.8 25.6429V31V31.2H1H3.2H3.4V31V25.6429C3.4 24.2768 3.95708 22.9656 4.95046 21.9981C5.94402 21.0303 7.29268 20.4857 8.7 20.4857H15.3C15.9967 20.4857 16.6865 20.6194 17.3299 20.879C17.9733 21.1386 18.5576 21.5189 19.0495 21.9981C19.5415 22.4772 19.9314 23.0457 20.1973 23.671C20.4632 24.2963 20.6 24.9664 20.6 25.6429V31V31.2H20.8H23ZM12 3.34286C13.0494 3.34286 14.0748 3.64598 14.9465 4.21332C15.8182 4.78063 16.4968 5.58642 16.8973 6.52818C17.2978 7.46987 17.4024 8.50577 17.1984 9.50511C16.9943 10.5045 16.4904 11.4232 15.7495 12.1448C15.0086 12.8665 14.0641 13.3585 13.035 13.5579C12.0058 13.7572 10.9392 13.6549 9.97007 13.2639C9.00101 12.8729 8.17359 12.2112 7.59184 11.3631C7.01014 10.5152 6.7 9.5188 6.7 8.5C6.7 7.13396 7.25708 5.82278 8.25046 4.8552C9.24403 3.88744 10.5927 3.34286 12 3.34286ZM12 0.8C10.4387 0.8 8.91201 1.25094 7.61302 2.09635C6.31396 2.94181 5.30066 4.14403 4.70208 5.55161C4.10347 6.95925 3.94675 8.50849 4.252 10.0032C4.55723 11.4979 5.31052 12.8701 6.41573 13.9466C7.52089 15.023 8.92831 15.7555 10.4598 16.0522C11.9912 16.3489 13.5786 16.1967 15.0215 15.6146C16.4644 15.0324 17.6986 14.0462 18.5672 12.7799C19.436 11.5135 19.9 10.0241 19.9 8.5C19.9 6.45611 19.0664 4.49703 17.5843 3.05343C16.1024 1.61 14.0935 0.8 12 0.8Z"
                  fill="#F33838"
                  stroke="#F33838"
                  strokeWidth="0.4"
                />
              </svg>
            </button>

            {/* Shopping Cart Icon */}
            <button className="text-red-500 hover:text-red-400 transition-colors" aria-label="Shopping Cart">
              <svg
                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
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
            <button className="hover:opacity-80 transition-opacity hidden lg:flex" aria-label="Search">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
              >
                <path
                  id="search"
                  d="M17.6276 19.9009L17.5642 19.8375L17.4943 19.8935C16.6513 20.5689 15.681 21.1042 14.5826 21.4991C13.4862 21.8932 12.3187 22.0906 11.0795 22.0906C8.00889 22.0906 5.41408 21.0271 3.28894 18.8989C1.16265 16.7696 0.1 14.1704 0.1 11.0953C0.1 8.02017 1.16265 5.42103 3.28894 3.29171C5.41408 1.16355 8.00889 0.1 11.0795 0.1C14.1502 0.1 16.7456 1.16354 18.8718 3.29169C20.997 5.421 22.0591 8.02016 22.0591 11.0953C22.0591 12.3363 21.862 13.5055 21.4684 14.6035C21.0741 15.7035 20.5395 16.6752 19.865 17.5194L19.8093 17.5892L19.8724 17.6525L29.4605 27.2542C29.7537 27.5477 29.9 27.9061 29.9 28.3357C29.9 28.7627 29.7413 29.136 29.4179 29.4599C29.1259 29.7523 28.7546 29.9 28.2955 29.9C27.8364 29.9 27.465 29.7523 27.173 29.4599L17.6276 19.9009ZM16.5844 16.6078L16.5844 16.6078C18.0943 15.0946 18.85 13.2552 18.85 11.0953C18.85 8.93543 18.0943 7.09599 16.5844 5.58285L16.5844 5.5828C15.0734 4.0708 13.2365 3.31394 11.0795 3.31394C8.92261 3.31394 7.08572 4.0708 5.57472 5.5828L5.57467 5.58285C4.06482 7.09599 3.30909 8.93543 3.30909 11.0953C3.30909 13.2552 4.06482 15.0946 5.57467 16.6078L5.57472 16.6078C7.08572 18.1198 8.92261 18.8767 11.0795 18.8767C13.2365 18.8767 15.0734 18.1198 16.5844 16.6078Z"
                  fill="#F33838"
                  stroke="#1A1A1B"
                  strokeWidth="0.2"
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
                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
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
        <nav 
          className="hidden md:flex w-full relative"
          onMouseLeave={() => setHoveredItem(null)}
        >
          <ul className="relative largemenu flex items-center w-full justify-between">
            {navigationItems.map((item) => (
              <li key={item} className="duration-400 ease-in-out flex-1">
                <a
                  href="/"
                  className={`menu text-[20px] font-medium uppercase tracking-wide transition-colors py-[27px] block text-center ${
                    hoveredItem === item
                      ? 'text-white bg-red-500'
                      : 'text-white hover:text-red-500'
                  }`}
                  onMouseEnter={() => setHoveredItem(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Dropdown Menu - Shows for any hovered item */}
          {hoveredItem && (
            <div
              className="absolute top-full left-0 w-full bg-[#fcf6f6] border-t border-gray-200 shadow-lg z-50 animate-[scaleDescale_0.4s_ease-in-out] origin-top transition-opacity duration-[0.4s] ease-in-out"
              onMouseEnter={() => setHoveredItem(hoveredItem)}
            >
              <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <h3 className="text-[20px] font-bold text-gray-900 mb-4 pb-2  underline">
                        {category.name}
                      </h3>
                      <ul className="space-y-2">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory}>
                            <a
                              href="#"
                              className="text-gray-900 hover:text-gray-700 transition-colors text-[20px]"
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
          <nav className="md:hidden bg-gray-800 pb-4 px-4 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-3 text-sm font-medium text-white uppercase hover:text-gray-300 hover:bg-gray-700 px-3 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>

    </header>
   
  );
}

