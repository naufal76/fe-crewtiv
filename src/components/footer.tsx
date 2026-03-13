'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 sm:mt-0 md:pt-30 lg:pt-40">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo + Deskripsi */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Crewtiv Logo"
              width={70}
              height={70}
            />
            <h1 className="text-4xl font-bold text-[#f22a98]">
              Crewtiv
            </h1>
          </div>

          <p className="text-white/70 text-sm leading-relaxed">
            Solusi kreatif untuk kehadiran digital Anda. 
            Mari bangun sesuatu yang luar biasa bersama.
          </p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-semibold text-white">
            Navigasi
          </h4>

          <Link href="/" className="text-white/70 hover:text-[#f22a98] transition">
            Home
          </Link>

          <Link href="/#layanan" className="text-white/70 hover:text-[#f22a98] transition">
            Layanan
          </Link>

          <Link href="/#projects" className="text-white/70 hover:text-[#f22a98] transition">
            Project
          </Link>

          <Link href="/blog" className="text-white/70 hover:text-[#f22a98] transition">
            Blog
          </Link>
        </div>

        {/* Layanan */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-semibold text-white">
            Layanan
          </h4>

          <Link href="/layanan/website-development" className="text-white/70 hover:text-[#f22a98] transition">
            Website Development
          </Link>

          <Link href="/layanan/ui-ux-design" className="text-white/70 hover:text-[#f22a98] transition">
            UI UX Design
          </Link>

          <Link href="/layanan/graphic-design" className="text-white/70 hover:text-[#f22a98] transition">
            Graphic Design
          </Link>

          <Link href="/layanan/social-media" className="text-white/70 hover:text-[#f22a98] transition">
            Social Media Management
          </Link>

          <Link href="/layanan/brand-identity" className="text-white/70 hover:text-[#f22a98] transition">
            Brand Identity
          </Link>
        </div>

        {/* Kontak */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-semibold text-white">
            Kontak
          </h4>

          <Link
            href="mailto:crewtivdesign@gmail.com"
            className="flex items-center gap-3 text-white/70 hover:text-[#f22a98] transition"
          >
            <FaEnvelope />
            crewtivdesign@gmail.com
          </Link>

          <Link
            href="https://instagram.com/crewtiv"
            target="_blank"
            className="flex items-center gap-3 text-white/70 hover:text-[#f22a98] transition"
          >
            <FaInstagram />
            @crewtiv
          </Link>

          <Link
            href="https://wa.me/6287793942392"
            target="_blank"
            className="flex items-center gap-3 text-white/70 hover:text-[#f22a98] transition"
          >
            <FaWhatsapp />
            +62 877 9394 2392
          </Link>
        </div>

      </div>

      {/* Divider */}
      <hr className="border-white/10 my-10 max-w-7xl mx-auto" />

      {/* Kota (Inline seperti paragraf) */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-3 gap-y-2 text-white/60 text-sm leading-relaxed">

        <Link href="/kota/brebes" className="hover:text-[#f22a98] transition">
          Brebes
        </Link>

        <span>•</span>

        <Link href="/kota/tegal" className="hover:text-[#f22a98] transition">
          Tegal
        </Link>

        <span>•</span>

        <Link href="/kota/pemalang" className="hover:text-[#f22a98] transition">
          Pemalang
        </Link>

        <span>•</span>

        <Link href="/kota/pekalongan" className="hover:text-[#f22a98] transition">
          Pekalongan
        </Link>

        <span>•</span>

        <Link href="/kota/batang" className="hover:text-[#f22a98] transition">
          Batang
        </Link>

        <span>•</span>

        <Link href="/kota/cirebon" className="hover:text-[#f22a98] transition">
          Cirebon
        </Link>

        <span>•</span>

        <Link href="/kota/semarang" className="hover:text-[#f22a98] transition">
          Semarang
        </Link>

        <span>•</span>

        <Link href="/kota/jakarta" className="hover:text-[#f22a98] transition">
          Jakarta
        </Link>

        <span>•</span>

        <Link href="/kota/bandung" className="hover:text-[#f22a98] transition">
          Bandung
        </Link>

        <span>•</span>

        <Link href="/kota/surabaya" className="hover:text-[#f22a98] transition">
          Surabaya
        </Link>

      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-white/40 mt-8">
        © {new Date().getFullYear()} Crewtiv Media. All rights reserved.
      </p>

    </footer>
  )
};