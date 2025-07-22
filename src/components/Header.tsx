'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Menu, X, Car } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-brand-primary-700 via-brand-primary-teal to-brand-primary-700 shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-accent-400 to-brand-accent-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Boteju Enterprises</span>
              <span className="text-sm text-brand-primary-100 font-medium">Clear Prices. Clean Deals. Quality Rides.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" className="text-brand-primary-100 hover:text-white hover:bg-brand-primary-800/30" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" className="text-brand-primary-100 hover:text-white hover:bg-brand-primary-800/30" asChild>
              <Link href="/vehicles">Available Vehicles</Link>
            </Button>
            <Button variant="ghost" className="text-brand-primary-100 hover:text-white hover:bg-brand-primary-800/30" asChild>
              <Link href="/import-flow">Import Process</Link>
            </Button>
            <Button variant="ghost" className="text-brand-primary-100 hover:text-white hover:bg-brand-primary-800/30" asChild>
              <Link href="/about">About Us</Link>
            </Button>
            <Separator orientation="vertical" className="h-6 mx-2 bg-brand-primary-600/30" />
            <Button variant="accent" size="default" className="shadow-lg" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-white hover:bg-brand-primary-800/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-primary-600/30">
            <nav className="flex flex-col space-y-2">
              <Button variant="ghost" className="text-brand-primary-100 hover:text-white hover:bg-brand-primary-800/30 justify-start" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" className="text-brand-primary-100 hover:text-white hover:bg-brand-primary-800/30 justify-start" asChild>
                <Link href="/vehicles">Available Vehicles</Link>
              </Button>
              <Button variant="ghost" className="text-brand-primary-100 hover:text-white hover:bg-brand-primary-800/30 justify-start" asChild>
                <Link href="/import-flow">Import Process</Link>
              </Button>
              <Button variant="ghost" className="text-brand-primary-100 hover:text-white hover:bg-brand-primary-800/30 justify-start" asChild>
                <Link href="/about">About Us</Link>
              </Button>
              <div className="pt-2">
                <Button variant="accent" size="default" className="w-full shadow-lg" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}