'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const travelSpots = [
  {
    title: "일본 여행",
    location: "도쿄, 오사카",
    date: "2024.03",
    image: "/images/banner-1.jpg",
    description: "벚꽃 시즌의 일본 여행",
    category: "해외여행"
  },
  // 더 많은 여행지 추가 가능
];

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Travel Stories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelSpots.map((spot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={spot.image}
                  alt={spot.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm bg-white/80 backdrop-blur-sm rounded-full">
                    {spot.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{spot.date}</div>
                <h3 className="text-xl font-semibold mb-2">{spot.title}</h3>
                <p className="text-gray-600">{spot.description}</p>
                <p className="text-sm text-primary mt-2">{spot.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 