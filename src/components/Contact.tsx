import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Let's Create Something Amazing</h2>
          <p className="text-gray-600">
            Ready to transform your business? Get in touch with us to discuss your project.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a365d] focus:ring-[#1a365d]"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a365d] focus:ring-[#1a365d]"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a365d] focus:ring-[#1a365d]"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#1a365d] text-white py-3 px-6 rounded-md hover:bg-[#2a4365] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}