import React from 'react';
import { Code, Lightbulb, Camera, ShoppingBag, BarChart3, Palette } from 'lucide-react';

const services = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Business Development",
    description: "Strategic growth planning and market expansion strategies tailored to your business goals."
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Business Strategy",
    description: "Data-driven approaches to optimize operations and maximize market opportunities."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom website solutions that combine stunning design with powerful functionality."
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Dropshipping Services",
    description: "End-to-end dropshipping solutions including supplier sourcing and automation."
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Product Photography",
    description: "Professional product photography that showcases your items in their best light."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Content Strategy",
    description: "Comprehensive content planning and creation to engage your target audience."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:border-[#1a365d] transition-colors group"
            >
              <div className="text-[#1a365d] mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}