'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
    {title: 'HOME', items: [{name: '홈', href: '/'}]},
  {
    title: 'WORK',
    items: [
      { name: '회사', href: '/work/company' },
      { name: '프로젝트', href: '/work/projects' },
      { name: '스터디', href: '/work/study' },
    ]
  },
  {
    title: 'REST',
    items: [
      { name: '여행', href: '/rest/travel' },
      { name: '애니', href: '/rest/anime' },
      { name: '게임', href: '/rest/games' },
    ]
  }
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center
                   shadow-lg border border-white/20 hover:bg-white/80 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="absolute top-16 right-0 w-64 bg-white/80 backdrop-blur-md rounded-2xl 
                       shadow-xl border border-white/20 overflow-hidden"
          >
            {menuItems.map((section, idx) => (
              <div key={section.title} className={`p-4 ${idx !== 0 ? 'border-t border-gray-200' : ''}`}>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 