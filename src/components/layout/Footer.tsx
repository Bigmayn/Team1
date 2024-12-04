import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Truck className="w-6 h-6 text-[#8BC34A]" />
              <span className="text-lg font-bold text-[#0D47A1]">
                The Good Food Company
              </span>
            </Link>
            <p className="text-gray-600">
              AI-driven food truck bringing healthy, delicious meals to your city.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#8BC34A]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-[#8BC34A]">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#8BC34A]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@goodfoodco.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>City Center, Your City</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Monday - Friday: 11am - 8pm</li>
              <li>Saturday: 12pm - 8pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} The Good Food Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}