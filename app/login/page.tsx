'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'

const SPECIAL_NUMBER = '12345' // 실제 구현시 이 값은 서버에서 관리해야 합니다.

export default function LoginPage() {
  const [specialNumber, setSpecialNumber] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (specialNumber === SPECIAL_NUMBER) {
      // 로그인 성공 시 세션 저장 (실제 구현시 더 안전한 방법 사용 필요)
      sessionStorage.setItem('isLoggedIn', 'true')
      router.push('/')
    } else {
      setError('잘못된 번호입니다. 다시 시도해주세요.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">로그인</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="specialNumber" className="block mb-2 font-semibold">특수 번호</label>
            <input
              type="text"
              id="specialNumber"
              value={specialNumber}
              onChange={(e) => setSpecialNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            로그인
          </button>
        </form>
      </main>
    </div>
  )
}

