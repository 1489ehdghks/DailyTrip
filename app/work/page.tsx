'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Work</h1>
        {/* 여기에 Work 관련 컨텐츠 */}
      </motion.div>
    </div>
  )
} 