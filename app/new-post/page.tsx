'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'

export default function NewPostPage() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState<'work' | 'hobby'>('work')
  const [subCategory, setSubCategory] = useState<'travel' | 'anime' | 'games' | 'music' | ''>('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')
  const [location, setLocation] = useState<'domestic' | 'international'>('domestic')
  
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 새 게시물 제출 로직 구현
    console.log({ title, date, description, content, category, subCategory, price, rating, location })
    // 제출 후 홈페이지로 리다이렉트
    router.push('/')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">새 게시물 작성</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-2 font-semibold">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2 font-semibold">날짜</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 font-semibold">카테고리</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value as 'work' | 'hobby')}
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="work">일</option>
              <option value="hobby">취미</option>
            </select>
          </div>
          {category === 'hobby' && (
            <div>
              <label htmlFor="subCategory" className="block mb-2 font-semibold">서브 카테고리</label>
              <select
                id="subCategory"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value as 'travel' | 'anime' | 'games' | 'music')}
                className="w-full px-3 py-2 border rounded-md"
                required
              >
                <option value="">선택해주세요</option>
                <option value="travel">여행</option>
                <option value="anime">애니</option>
                <option value="games">게임</option>
                <option value="music">음악</option>
              </select>
            </div>
          )}
          {subCategory === 'travel' && (
            <>
              <div>
                <label htmlFor="price" className="block mb-2 font-semibold">가격</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="rating" className="block mb-2 font-semibold">평점 (1-5)</label>
                <input
                  type="number"
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  min="1"
                  max="5"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="location" className="block mb-2 font-semibold">위치</label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value as 'domestic' | 'international')}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="domestic">국내</option>
                  <option value="international">해외</option>
                </select>
              </div>
            </>
          )}
          <div>
            <label htmlFor="description" className="block mb-2 font-semibold">설명</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              rows={3}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="content" className="block mb-2 font-semibold">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              rows={10}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            게시물 작성
          </button>
        </form>
      </main>
    </div>
  )
}

