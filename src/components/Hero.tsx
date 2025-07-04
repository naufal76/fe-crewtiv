'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative bg-[url('/hero-bg.png')] bg-cover bg-center bg-fixed text-white overflow-hidden min-h-screen flex items-center">
      <div className="mx-auto px-6 py-7 lg:px-14 flex flex-col md:flex-row items-center justify-around w-full">
        {/* Text Section */}
        <div className="max-w-9xl ">
          <h2 className="text-7xl ml-5 sm:text-9xl sm:ml-30 font-bold leading-tight">
            Make <br />
            Your Brand <br />
            <span className="text-[#f22a98]">Visible</span>
          </h2>
          <p className="max-w-xl mt-6 ml-5 sm:ml-30 sm:text-xl text-white text-lg">
            Solusi kreatif untuk kehadiran digital kamu, Yuk bangun sesuatu yang luar biasa bersama!
          </p>

          <button className="mt-8 ml-5 px-6 py-3 sm:ml-30 rounded-full text-white font-semibold bg-[#f22a98] hover:bg-white hover:text-[#f22a98] transition duration-300 shadow-lg">
            EXPLORE NOW →
          </button>
        </div>

      
        <div
          className="mt-1 md:mt-0 md:w-1/2 relative"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src="/hero.png"
            alt="Character"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
