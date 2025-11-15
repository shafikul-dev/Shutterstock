'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#2a2a2a] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section: Map + Visit Info | Logo | Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 mb-12 items-start">
          {/* Left: Map + Visit Info */}
          <div className="flex gap-4">
            <div className="shrink-0 w-48 h-32 bg-gray-800 rounded overflow-hidden">
              <Image
                src="/pixel/map.webp"
                alt="Location Map"
                width={192}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-start pt-2">
              <h3 className="text-lg font-normal mb-3">Come visit us!</h3>
              <div className="flex items-start gap-2 mb-1">
                <svg className="w-4 h-4 text-[#ff0055] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">71 Park Lane, London</p>
                  <p className="text-gray-400 text-sm">SW43 2LW</p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <svg className="w-4 h-4 text-[#ff0055] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">Sunday to Friday</p>
                  <p className="text-gray-400 text-sm">8:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: PIXEL Logo */}
          <div className="flex items-start justify-center pt-8">
            <h2 className="text-5xl font-bold text-white tracking-[0.2em]">PIXEL</h2>
          </div>

          {/* Right: Newsletter */}
          <div>
            <h3 className="text-lg font-normal mb-4">
              Join our newsletter for exclusive offers!
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle newsletter signup
              }}
              className="space-y-3"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="flex-1 px-4 py-2 bg-white border-0 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-4 py-2 bg-white border-0 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                />
              </div>
            </form>
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 border-2 border-[#ff0055] rounded flex items-center justify-center hover:bg-[#ff0055] transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-[#ff0055] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border-2 border-[#ff0055] rounded flex items-center justify-center hover:bg-[#ff0055] transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-[#ff0055] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border-2 border-[#ff0055] rounded flex items-center justify-center hover:bg-[#ff0055] transition-colors group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-[#ff0055] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Shop, Used, About, Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Shop - 3 columns */}
            <div>
              <h3 className="text-base font-bold mb-3">Shop</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cameras
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:-ml-8">
              <h3 className="text-base font-bold mb-3 invisible">Shop</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cameras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Lenses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:-ml-8">
              <h3 className="text-base font-bold mb-3 invisible">Shop</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Lenses
                  </a>
                </li>
              </ul>
            </div>

            {/* Used Links */}
            <div>
              <h3 className="text-base font-bold mb-3">Used</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Buy & Sell
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Report Fraud
                  </a>
                </li>
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-base font-bold mb-3">About</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-base font-bold mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-[#ff0055]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>+972 123-456-78</span>
                </div>
                <div className="flex items-center gap-2 text-[#ff0055]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>name@camera.com</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <button className="px-4 py-1 bg-[#ff0055] text-white text-xs font-medium rounded hover:bg-[#e6004d] transition-colors">
                    USD $
                  </button>
                  <button className="px-4 py-1 bg-transparent text-gray-400 text-xs font-medium rounded hover:text-white transition-colors border border-gray-600">
                    EUR €
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright, Payment Icons, Links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2023 PIXEL. All Rights Reserved
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[10px] font-bold text-blue-600">AMEX</span>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <div className="flex">
                  <div className="w-3 h-3 rounded-full bg-red-500 -mr-1"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                </div>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[10px] font-bold text-blue-600">PayPal</span>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[10px] font-bold text-blue-800">VISA</span>
              </div>
              <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">Pay</span>
              </div>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400 flex-wrap justify-center">
              <a href="#" className="hover:text-white transition-colors">
                Return Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

