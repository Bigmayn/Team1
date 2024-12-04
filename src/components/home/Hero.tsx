import React from 'react';
import { motion } from 'framer-motion';
import Image1 from '../../Assets/Image1.webp';

export function Hero() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        {/* Use Image1 as the hero background image */}
        <img
          src={Image1}
          alt="AI Food Truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl font-bold mb-6">
            The Future of Food Delivery
          </h1>
          <p className="text-xl mb-8">
            Experience AI-driven food trucks bringing healthy, delicious meals directly to your neighborhood.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
            Find a Truck Near You
          </button>
        </motion.div>
      </div>
    </div>
  );
}