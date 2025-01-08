import { notFound } from 'next/navigation'
import Header from '../../../components/Header'
import { TravelPost } from '@/types/TravelPost'

// 임시 데이터
const posts: TravelPost[] = [
  {
    id: '1',
    title: '아름다운 제주도 여행',
    date: '2025-03-15',
    description: '제주도의 푸른 바다와 오름을 탐험한 3일간의 여행',
    imageUrl: '/placeholder.svg?height=300&width=400',
    content: '제주도 여행 상세 내용...',
    category: 'rest',
    subCategory: 'travel',
    price: 1000000,
    rating: 4.5,
    location: 'international',
  }
]

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <div className="prose max-w-none">
              <p>{post.content}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

