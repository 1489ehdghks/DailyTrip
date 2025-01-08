'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SPECIAL_NUMBER = '12345' // This should be stored securely in a real application

export default function HiddenLogin() {
  const [isVisible, setIsVisible] = useState(false)
  const [specialNumber, setSpecialNumber] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (specialNumber === SPECIAL_NUMBER) {
      setIsLoggedIn(true)
      sessionStorage.setItem('isLoggedIn', 'true')
    } else {
      alert('Incorrect special number')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    sessionStorage.removeItem('isLoggedIn')
  }

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-secondary text-text p-2 rounded-full shadow-md"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? '✕' : '?'}
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg"
          >
            {isLoggedIn ? (
              <div>
                <p className="mb-2">You are logged in!</p>
                <button
                  className="bg-accent text-white px-4 py-2 rounded-full"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin}>
                <input
                  type="password"
                  value={specialNumber}
                  onChange={(e) => setSpecialNumber(e.target.value)}
                  placeholder="Enter special number"
                  className="border p-2 rounded-full mb-2 w-full"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-full w-full"
                >
                  Login
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

