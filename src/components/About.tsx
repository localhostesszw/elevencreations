import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Crafting Digital Success Stories</h2>
            <p className="text-gray-300 mb-8">
              At Eleven Creations, we believe in the power of digital transformation to revolutionize businesses. Our team of experts brings together creativity, technology, and strategy to deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold mb-2">200+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-2">98%</h4>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}