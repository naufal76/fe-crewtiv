"use client"

import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Cara Meningkatkan Brand Awareness di Era Digital',
    slug: 'brand-awareness-digital',
    date: '2025-07-01',
    excerpt: 'Brand awareness menjadi kunci penting dalam memenangkan persaingan digital. Pelajari strategi efektif membangun merek yang kuat di internet.',
    image: '/blog/brand-awareness.jpg',
  },
  {
    title: 'Panduan Lengkap Social Media Marketing untuk Pemula',
    slug: 'social-media-marketing',
    date: '2025-06-28',
    excerpt: 'Ingin mulai promosi lewat media sosial? Ini panduan praktis untuk memahami dasar-dasar SMM dan cara membangun audiens.',
    image: '/blog/social-media.jpg',
  },
 
]

export default function BlogListPage() {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-[#f22a98] mb-4">Blog</h1>
        <p className="text-white/70 max-w-xl mx-auto">
          Dapatkan insight, tips, dan tren terbaru seputar branding, desain, dan digital marketing.
        </p>
      </div>

      {/* Hero Post */}
      {blogPosts[0] && (
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <Image
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            width={800}
            height={500}
            className="rounded-xl object-cover w-full h-full"
          />
          <div>
            <p className="text-sm text-white/50 mb-2">{blogPosts[0].date}</p>
            <h2 className="text-3xl font-bold text-[#f22a98] mb-3">
              {blogPosts[0].title}
            </h2>
            <p className="text-white/80 mb-6">{blogPosts[0].excerpt}</p>
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="text-white font-semibold underline hover:text-[#f22a98]"
            >
              Baca Selengkapnya →
            </Link>
          </div>
        </div>
      )}

   
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {blogPosts.slice(1).map((post, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-4 rounded-xl shadow hover:shadow-[0_0_10px_#f22a98] transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="rounded-md object-cover mb-4"
            />
            <p className="text-sm text-white/50 mb-1">{post.date}</p>
            <h3 className="text-lg font-bold mb-2 text-[#f22a98]">{post.title}</h3>
            <p className="text-sm text-white/70 mb-3 line-clamp-3">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm text-white hover:text-[#f22a98]"
            >
              Baca Selengkapnya →
            </Link>
          </div>
        ))}
      </div>

    
      <div className="flex justify-center gap-3">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className="px-4 py-2 rounded-full bg-[#f22a98] text-white hover:bg-white hover:text-[#f22a98] transition"
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  )
}
