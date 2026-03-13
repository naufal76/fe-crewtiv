'use client'
import Image from 'next/image'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },}

const packages = [
  {
    name: 'Basic Logo',
    priceOriginal: 'Rp.800.000',
    priceDiscounted: 'Rp.450.000',
    features: [
      '2 Konsep Logo',
      '2x Revisi',
      'Waktu pengerjaan 3 hari',
      'Format PNG & JPG',
      'Mockup Presentasi',
      'Brief via WhatsApp',
      'File Source Adobe Illustrator',
      'Brand Guidelines',
      'Brand Equipment (Packaging, Apron, T-sirt, Name Card, Co-Card)',
    ],
    unavailable: [6,7,8],
  },
  {
    name: 'Professional Logo',
    priceOriginal: 'Rp.1.500.000',
    priceDiscounted: 'Rp.980.000',
    features: [
      '3 Konsep Logo',
      '4x Revisi',
      'Waktu pengerjaan 4 hari',
      'Format PNG, JPG & PDF',
      'Mockup Presentasi',
      'Brief via WhatsApp / Zoom',
      'File Source Adobe Illustrator',
      'Brand Guidelines',
      '2 Brand Equipment (Packaging, Apron, T-sirt, Name Card, Co-Card)',
    ],
    unavailable: [7],
  },
  {
    name: 'Business Identity',
    priceOriginal: 'Rp.2.800.000',
    priceDiscounted: 'Rp.1.980.000',
    features: [
      '3 Konsep Logo',
      'Unlimited Revisi',
      'Waktu pengerjaan 7-10 hari',
      'Format (PNG, JPG, PDF, SVG)',
      'Mockup Presentasi',
      'Brief via WhatsApp / Zoom',
      'File Source Adobe Illustrator',
      'Brand Guidelines',
      '4 Brand Equipment (Packaging, Apron, T-sirt, Name Card, Co-Card)',
    ],
    unavailable: [],
  },
]

export default function LogoDesignPage() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="relative bg-[url('/hero-bg.png')] bg-cover bg-center bg-black text-white">
      <div className='mx-auto px-6 py-2 lg:px-14 flex flex-col md:flex-row justify-around w-full'>
        <div className="mt-4 md:mt-0 md:w-1/2 relative" style={{
            transform: `translateY(${offsetY * 0.1}px)`,
            transition: 'transform 0.1s ease-out',
          }}>
                  <Image
                    src="/hero-logo.png"
                    alt="Character"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
        <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
        className="flex items-center justify-center md:min-h-[70vh] md:h-screen py-10"
      >
        <div>
          <h1 className="text-8xl sm:text-9xl font-bold text-[#f22a98] mb-6">
            Logo <br /> Design
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Bangun identitas visual brand kamu mulai dari logo yang kuat,
            berkesan, dan profesional. Cocok untuk UMKM, startup, maupun brand
            yang ingin rebranding.
          </p>
           <button className="mt-8 px-6 py-3 rounded-full text-white font-semibold bg-[#f22a98] hover:bg-white hover:text-[#f22a98] transition duration-300 shadow-lg">
            Konsultasi Sekarang
          </button>
        </div>
      </motion.section>
      </div>
     
      

      {/* SECTION 2 - PRICE LIST */}
      <section className="text-center max-w-6xl mx-auto px-6 py-10 mb-9">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
        >
          <h2 className="text-[#f22a98] text-6xl font-bold mb-10">Price List</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-16">
            Kami menyediakan layanan desain logo sesuai kebutuhanmu. Mulai dari
            yang simpel hingga paket lengkap identitas brand.
          </p>
        </motion.div>

        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center gap-10 max-w-7xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              variants={fadeUp}
              className="rounded-2xl p-8 bg-black shadow-[0_0_10px_#f22a98] hover:shadow-[0_0_30px_#f22a98] transition duration-300 flex flex-col items-center w-full max-w-sm"
            >
              <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-lg text-gray-300 line-through">
                {pkg.priceOriginal}
              </p>
              <p className="text-3xl font-bold shadow-[0_0_10px_#f22a98] px-4 py-2 rounded-xl mt-1 mb-6">
                {pkg.priceDiscounted}
              </p>

              <ul className="text-center space-y-3 text-md">
                {pkg.features.map((feat, i) => (
                  <li
                    key={i}
                    className={
                      pkg.unavailable.includes(i)
                        ? 'text-gray-500 line-through'
                        : 'text-white'
                    }
                  >
                    {feat}
                  </li>
                ))}
              </ul>

              <button className="mt-6 bg-[#f22a98] hover:bg-white hover:text-[#f22a98] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition">
                Build Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

   
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        variants={fadeUp}
        className="py-60 sm:py-90 text-center px-6 h-screen"
      >
        <h3 className="text-5xl sm:text-7xl font-bold text-white mb-6">
          Siap Bangun Logo Kerenmu?
        </h3>
        <p className="text-lg text-white/80 mb-6 max-w-xl mx-auto">
          Konsultasikan kebutuhan desain logomu dengan tim Crewtiv dan
          wujudkan logo profesional yang mewakili brand kamu secara maksimal.
        </p>
        <a
          href="https://wa.me/6287793942392"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f22a98] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#f22a98] transition"
        >
          Konsultasi Gratis Sekarang
        </a>
      </motion.section>

      <Footer />
    </div>
  )
}