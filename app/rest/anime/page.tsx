'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const animeList = [
  {
    title: "귀멸의 칼날",
    genre: "액션/판타지",
    image: "/images/banner-1.jpg",
    rating: "⭐️ 9.5",
    status: "시청중"
  },
  // 더 많은 애니 추가 가능
];

export default function AnimePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Anime Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animeList.map((anime, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-56">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-sm bg-white/80 backdrop-blur-sm rounded-full">
                    {anime.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{anime.title}</h3>
                <p className="text-gray-600 mb-2">{anime.genre}</p>
                <p className="text-amber-500">{anime.rating}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 