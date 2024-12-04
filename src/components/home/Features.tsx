import React from 'react';
import { Sparkles, Leaf, Clock } from 'lucide-react';
import Image2 from '../../Assets/Image2.webp'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Menu',
    description: 'Our smart system creates personalized menus based on your preferences and dietary needs.',
  },
  {
    icon: Leaf,
    title: 'Fresh & Healthy',
    description: 'We use only the freshest ingredients to create nutritious and delicious meals.',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'No more waiting in long lines. Order ahead and pick up your meal in minutes.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Add the Image2 banner */}
        <img
          src={Image2}
          alt="Features Section"
          className="w-full h-64 object-cover mb-12 rounded-lg"
        />
        
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}