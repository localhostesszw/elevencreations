import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-semibold text-xl text-blue-900">
            Eleven Creations
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-800 hover:text-blue-900">Services</a>
            <a href="#about" className="text-gray-800 hover:text-blue-900">About</a>
            <a href="#work" className="text-gray-800 hover:text-blue-900">Work</a>
            <a href="#testimonials" className="text-gray-800 hover:text-blue-900">Testimonials</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-900">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}