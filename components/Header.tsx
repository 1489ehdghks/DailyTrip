'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isRestOpen, setIsRestOpen] = useState(false)

  const restCategories = [
    { title: '여행', href: '/rest/travel' },
    { title: '애니', href: '/rest/anime' },
    { title: '게임', href: '/rest/games' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 h-16">
          {/* 왼쪽 WORK */}
          <Link 
            href="/work" 
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            WORK
          </Link>

          {/* 중앙 홈 아이콘 */}
          <Link 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Home className="w-6 h-6" />
          </Link>

          {/* 오른쪽 REST 드롭다운 */}
          <div className="relative">
            <button
              onClick={() => setIsRestOpen(!isRestOpen)}
              className="flex items-center gap-1 text-lg font-medium hover:text-primary transition-colors"
            >
              REST
              <ChevronDown className={`w-4 h-4 transition-transform ${isRestOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isRestOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2"
                >
                  {restCategories.map((category) => (
                    <Link
                      key={category.title}
                      href={category.href}
                      onClick={() => setIsRestOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      {category.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header