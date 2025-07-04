'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: '8 Creative Ways to Repurpose Your Webinar Content',
    category: 'Inspiration',
    image: '/blogs/blog1.jpg',
  },
  {
    id: 2,
    title: 'Why Webinars Are the #1 Lead Generation Marketing Strategy',
    category: 'Inspiration',
    image: '/blogs/blog2.jpg',
  },
  {
    id: 3,
    title: 'How to Drive Qualified Pipeline After Your Webinar',
    category: 'Inspiration',
    image: '/blogs/blog3.jpg',
  },
  {
    id: 4,
    title: '5 Webinar Promotion Tips You Should Know',
    category: 'Marketing',
    image: '/blogs/blog4.jpg',
  },
  {
    id: 5,
    title: 'How to Create High-Conversion Webinar Funnels',
    category: 'Strategy',
    image: '/blogs/blog5.jpg',
  },
  {
    id: 6,
    title: 'Best Webinar Tools for 2025 You Should Try',
    category: 'Tools',
    image: '/blogs/blog6.jpg',
  },
]

export default function RecentBlog() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 > blogPosts.length - 3 ? 0 : prev + 1
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-3">
        Temukan tips dan trik <strong className="text-black">digital marketing</strong>
      </h2>

      <div className="relative max-w-7xl mx-auto overflow-hidden px-4 mt-10">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
        >
          {blogPosts.map((post, i) => (
            <div key={i} className="w-full md:w-1/3 px-4 flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-md bg-white">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={240}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-left">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <span className="text-[#f22a98] font-medium text-sm cursor-pointer">Read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-10 bg-[#f22a98] text-white px-6 py-2 rounded-full font-medium hover:bg-black hover:text-[#f22a98] transition">
        Lebih lanjut
      </button>
    </section>
  )
}
