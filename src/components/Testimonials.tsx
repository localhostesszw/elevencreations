import React from 'react';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Eleven Creations transformed our digital presence completely. Their strategic approach and attention to detail exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthBox",
    content: "Working with Eleven Creations was a game-changer for our business. Their dropshipping expertise helped us scale rapidly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Emma Williams",
    role: "Marketing Director, StyleCo",
    content: "The product photography and content strategy services have significantly improved our brand image and customer engagement.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MessageSquare className="h-12 w-12 text-[#1a365d] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Client Testimonials</h2>
          <p className="text-gray-600">Hear what our clients have to say about working with us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}