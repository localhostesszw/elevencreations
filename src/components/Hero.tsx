import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Ideas into Digital Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We craft digital experiences that elevate brands and drive business growth through innovative solutions and strategic thinking.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#1a365d] text-white rounded-md hover:bg-[#2a4365] transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}