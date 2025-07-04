'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const clientLogos = [
  { src: '/clients/pertamina.png', alt: 'Pertamina' },
  { src: '/clients/bi-logo.png', alt: 'Bank Indonesia' },
  { src: '/clients/kopi-kenangan.png', alt: 'Kopi Kenangan' },
  { src: '/clients/standard.png', alt: 'Standard Chartered' },
  { src: '/clients/binance.png', alt: 'Binance' },
  { src: '/clients/sela.svg', alt: 'Sela' },
  { src: '/clients/opensea.svg', alt: 'OpenSea' },
  { src: '/clients/polygon.png', alt: 'Polygon' },
]

export default function OurClient() {
  const [index, setIndex] = useState(0)
  const [logosPerPage, setLogosPerPage] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      setLogosPerPage(window.innerWidth < 640 ? 3 : 5)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 > clientLogos.length - logosPerPage ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [logosPerPage])

  return (
    <section className="bg-white py-16 text-center overflow-hidden">
      <h2 className="text-3xl font-semibold text-[#f22a98] mb-12">Our Clients</h2>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-6">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / logosPerPage)}%)` }}
        >
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 flex justify-center items-center px-4 ${
                logosPerPage === 3 ? 'w-1/3' : 'w-1/5'
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
