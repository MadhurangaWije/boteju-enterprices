'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-primary-700 via-primary-teal to-primary-700 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
              <span className="text-white font-bold text-xl">BE</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Boteju Enterprises</span>
              <span className="text-sm text-primary-100 font-medium">Clear Prices. Clean Deals. Quality Rides.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary-100 hover:text-white hover:bg-primary-800/30 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              Home
            </Link>
            <Link href="/vehicles" className="text-primary-100 hover:text-white hover:bg-primary-800/30 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              Available Vehicles
            </Link>
            <Link href="/import-flow" className="text-primary-100 hover:text-white hover:bg-primary-800/30 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              Import Process
            </Link>
            <Link href="/about" className="text-primary-100 hover:text-white hover:bg-primary-800/30 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-highlight-yellow to-accent-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-highlight-yellow/90 hover:to-accent-600 transition-all duration-300 shadow-lg">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2 rounded-lg hover:bg-primary-800/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-600/30">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-primary-100 hover:text-white hover:bg-primary-800/30 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
                Home
              </Link>
              <Link href="/vehicles" className="text-primary-100 hover:text-white hover:bg-primary-800/30 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
                Available Vehicles
              </Link>
              <Link href="/import-flow" className="text-primary-100 hover:text-white hover:bg-primary-800/30 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
                Import Process
              </Link>
              <Link href="/about" className="text-primary-100 hover:text-white hover:bg-primary-800/30 px-3 py-2 rounded-lg transition-all duration-300 font-medium">
                About Us
              </Link>
              <Link href="/contact" className="bg-gradient-to-r from-highlight-yellow to-accent-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-highlight-yellow/90 hover:to-accent-600 transition-all duration-300 shadow-lg text-center">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}