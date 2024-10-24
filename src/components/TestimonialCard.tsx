import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export default function TestimonialCard({ name, role, company, content, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{content}</p>
    </div>
  );
}