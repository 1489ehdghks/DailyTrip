'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Book, Clock, Target } from 'lucide-react';

const studyItems = [
  {
    title: "알고리즘 스터디",
    schedule: "매주 화요일 20:00",
    progress: 75,
    image: "/images/algorithm.jpg",
    goals: ["문제 해결 능력 향상", "코딩 테스트 준비"],
    members: 4
  },
  // 더 많은 스터디 항목 추가 가능
];

export default function StudyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Study Groups</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studyItems.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-40">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock size={16} />
                  <span>{study.schedule}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>진행률</span>
                    <span>{study.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${study.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Target size={16} className="text-gray-600 mt-1" />
                    <div>
                      <div className="text-sm font-medium mb-1">목표</div>
                      <ul className="text-sm text-gray-600 list-disc list-inside">
                        {study.goals.map((goal, idx) => (
                          <li key={idx}>{goal}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <Book size={16} />
                    <span>{study.members}명 참여중</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 