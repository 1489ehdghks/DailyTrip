'use client';

import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const frequentSites = [
    {
      title: "Skyscanner",
      image: "/images/skyscanner.png",
      description: "최저가 항공권 검색",
      url: "https://www.skyscanner.co.kr/",
      category: "항공권",

    },
    {
      title: "Airbnb",
      image: "/images/airbnb.png",
      description: "전 세계 숙소 예약",
      url: "https://www.airbnb.co.kr/",
      category: "숙소",

    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 히어로 섹션 */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/banner-1.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-7xl font-bold mb-6">
            Travel & Life
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            여행과 일상의 특별한 순간들
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/rest/travel" 
              className="px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full
                        border border-white/30 hover:bg-white/30 transition-all
                        duration-300 inline-block"
            >
              여행 이야기 보기
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      <main className="container mx-auto px-4 py-16">
{/* 자주 가는 사이트 섹션 */}
<motion.section 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-20"
>
  <h2 className="text-3xl font-bold mb-12 text-center">Sites</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {frequentSites.map((site, index) => (
      <motion.a
        key={index}
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group glass-card overflow-hidden"
      >
        <div className="relative h-48">
          <Image
            src={site.image}
            alt={site.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/20 transition-all duration-300" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4"
          >
            <span className="px-3 py-1 text-sm bg-white/80 backdrop-blur-sm rounded-full">
              {site.category}
            </span>
          </motion.div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{site.title}</h3>
                <p className="text-white/80 text-sm">{site.description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.a>
    ))}
  </div>
</motion.section>

        {/* 소셜 연결 섹션 */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-medium mb-8 text-center">Connect With Me</h2>
            <div className="flex justify-center items-center space-x-12">
              {[
                { icon: <Instagram size={32} className="text-pink-500" />, href: "https://instagram.com" },
                { icon: <FontAwesomeIcon icon={faDiscord} size="2x" className="text-[#5865F2]" />, href: "discord-url" },
                { icon: <FontAwesomeIcon icon={faSteam} size="2x" className="text-[#171a21]" />, href: "steam-url" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}