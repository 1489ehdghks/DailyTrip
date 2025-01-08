'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const gameList = [
  {
    title: "League of Legends",
    platform: "PC",
    image: "/images/banner-1.jpg",
    playTime: "100+ 시간",
    status: "진행중"
  },
  // 더 많은 게임 추가 가능
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Gaming Library</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameList.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm bg-white/80 backdrop-blur-sm rounded-full">
                    {game.platform}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-gray-600 mb-2">플레이 시간: {game.playTime}</p>
                <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {game.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 