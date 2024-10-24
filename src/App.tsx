import React from 'react';
import { Briefcase, Lightbulb, Globe, Camera, ShoppingBag, FileText, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Create<br />Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Transform your business with cutting-edge digital solutions that drive growth and innovation.
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              Icon={Briefcase}
              title="Business Development"
              description="Strategic planning and execution to grow your business sustainably."
            />
            <ServiceCard
              Icon={Lightbulb}
              title="Product R&D"
              description="Innovative research and development to bring your ideas to life."
            />
            <ServiceCard
              Icon={Globe}
              title="Web Development"
              description="Custom websites and applications built with cutting-edge technology."
            />
            <ServiceCard
              Icon={ShoppingBag}
              title="Dropshipping Services"
              description="End-to-end solutions for your e-commerce business needs."
            />
            <ServiceCard
              Icon={Camera}
              title="Product Photography"
              description="Professional photography that makes your products stand out."
            />
            <ServiceCard
              Icon={FileText}
              title="Content Strategy"
              description="Engaging content that tells your brand's story and drives results."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-blue-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="CEO"
              company="TechStart Inc"
              content="Eleven Creations transformed our digital presence completely. Their strategic approach and attention to detail exceeded our expectations."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
            />
            <TestimonialCard
              name="Michael Chen"
              role="Founder"
              company="GrowthBox"
              content="Working with Eleven Creations was a game-changer for our business. Their expertise in digital strategy helped us achieve remarkable growth."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150"
            />
            <TestimonialCard
              name="Emma Davis"
              role="Marketing Director"
              company="StyleHub"
              content="The team's creativity and professional approach made our product launch a huge success. They're truly experts in their field."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Let's Create Together</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Eleven Creations</h3>
              <p className="text-gray-400">Creating digital excellence since 2024</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">hello@elevencreations.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Eleven Creations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;