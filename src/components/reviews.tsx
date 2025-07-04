'use client'
import { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  { name: 'K Oiwake', message: 'Fantastic customer service. I shifted from a traditional bank to Sable and Sable’s customer service helped me answer all the questions that I needed to switch.' },
  { name: 'E Berhe', message: 'The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!' },
  { name: 'A Yusuf', message: 'Great design and excellent support. They exceeded expectations on all fronts.' },
  { name: 'L Tanaka', message: 'A truly professional and creative team. Highly recommended for web design and branding.' },
  { name: 'R Putri', message: 'Pelayanan sangat cepat dan hasil desainnya memuaskan. Akan bekerja sama lagi!' },
  { name: 'B Santoso', message: 'Crewtiv membawa ide saya jadi kenyataan. Desainnya rapi dan komunikasinya enak banget!' },
  { name: 'M Clara', message: 'Tim yang responsif dan penuh ide-ide segar. Kreasi branding saya jadi makin solid.' },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : 3)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 > testimonials.length - itemsPerSlide ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [itemsPerSlide])

  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="text-5xl sm:text-7xl font-bold text-[#f22a98]">Kata Orang</h2>
        <p className="text-xl mt-4 text-white/80">Ini yang orang bilang tentang Crewtiv Media</p>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`w-full ${itemsPerSlide === 3 ? 'sm:w-1/3' : 'w-full'} flex-shrink-0 px-4`}
            >
              <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg transition hover:scale-[1.02] h-full">
                <FaQuoteLeft className="text-[#f22a98] text-3xl mb-4" />
                <p className="text-lg leading-relaxed mb-6">{item.message}</p>
                <hr className="border-gray-600 mb-2" />
                <p className="text-sm font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
