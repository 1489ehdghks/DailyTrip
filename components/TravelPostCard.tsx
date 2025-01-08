import Link from 'next/link'
import { TravelPost } from '@/types/TravelPost'

export default function TravelPostCard({ post }: { post: TravelPost }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-2">{post.date}</p>
        <p className="text-gray-700 mb-4">{post.description.substring(0, 100)}...</p>
        <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
          더 읽기
        </Link>
      </div>
    </div>
  )
}

