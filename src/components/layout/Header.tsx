import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { navigationItems } from '../../constants/navigation';

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="w-8 h-8 text-[#8BC34A]" />
            <span className="text-xl font-bold text-[#0D47A1]">
              The Good Food Company
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-600 hover:text-[#8BC34A] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          <button className="bg-[#FFB300] text-white px-6 py-2 rounded-full hover:bg-[#FFA000] transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}