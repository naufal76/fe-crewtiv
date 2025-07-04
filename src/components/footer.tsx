'use client'

import Image from 'next/image'
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 ">
      <div className="max-w-7xl mx-auto sm:mb-100 flex flex-col md:flex-row justify-between gap-16 md:gap-0 items-start">

      
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/logo.png"
              alt="Crewtiv Logo"
              width={150}
              height={150}
            />
            <h1 className="text-7xl font-bold text-[#f22a98]">Crewtiv</h1>
          </div>
          <p className="text-white max-w-sm">
            Solusi kreatif untuk kehadiran digital Anda. Mari bangun sesuatu yang luar biasa bersama.
          </p>
        </div>

       
        <div className="flex flex-col gap-3 text-white/80">
          <h4 className="text-lg font-semibold text-white">Navigasi</h4>
          <a href="/" className="hover:text-[#f22a98] transition">Home</a>
          <a href="#pricing" className="hover:text-[#f22a98] transition">Layanan</a>
          <a href="#testimonials" className="hover:text-[#f22a98] transition">Project</a>
          <a href="#blog" className="hover:text-[#f22a98] transition">Blog</a>
        </div>

        {/* Kontak & Sosial */}
        <div className="flex flex-col gap-3 text-white/80">
          <h4 className="text-lg font-semibold text-white">Kontak</h4>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl" />
            <a href="mailto:crewtivdesign@gmail.com" className="hover:text-[#f22a98] transition">
              crewtivdesign@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaInstagram className="text-xl" />
            <a
              href="https://instagram.com/crewtiv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f22a98] transition"
            >
              @crewtiv
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-xl" />
            <a
              href="https://wa.me/6287793942392"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f22a98] transition"
            >
              +62 877-9394-2392
            </a>
          </div>
        </div>
      </div>

      <hr className="border-white/20 my-12" />

      <p className="text-center text-sm text-white/50">
        © {new Date().getFullYear()} Crewtiv Media. All rights reserved.
      </p>
    </footer>
  )
}
