'use client'

import Footer from '@/components/footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const packages = [
  {
    name: 'Starter',
    priceOriginal: 'Rp.2.000.000',
    priceDiscounted: 'Rp.980.000',
    features: [
      'Domain .com',
      'Hosting 2 GB',
      '5 Menu',
      '1 Halaman',
      'Desain Tema Standar',
      'Perpanjang Rp.500.000',
      'Optimasi SEO',
      'Desain Responsif (Mobile)',
      'Revisi 2x (Text/Gambar)',
      'Maintenance Garansi 6 bulan',
      'Akses Dashboard Admin',
      'Backup Data Tahunan',
      'Bisa Upload/Edit Data',
    ],
    unavailable: [11, 12],
  },
  {
    name: 'Professional',
    priceOriginal: 'Rp.3.500.000',
    priceDiscounted: 'Rp.1.980.000',
    features: [
      'Domain .com .id',
      'Hosting 1 GB',
      '6 Menu',
      '4 Halaman',
      'Desain Tema Standar',
      'Perpanjang Rp.800.000',
      'Optimasi SEO',
      'Desain Responsif (Mobile)',
      'Revisi 3x (Text/Gambar)',
      'Maintenance Garansi 1 Tahun',
      'Akses Dashboard Admin',
      'Backup Data Tahunan',
      'Bisa Upload/Edit Data',
    ],
    unavailable: [],
  },
  {
    name: 'Business',
    priceOriginal: 'Rp.5.500.000',
    priceDiscounted: 'Rp.3.980.000',
    features: [
      'Domain .com .id',
      'Hosting 2GB + 512MB RAM',
      '8 Menu',
      '7 Halaman',
      'Desain Tema Standar',
      'Perpanjang Rp.1.000.000',
      'Optimasi SEO',
      'Desain Responsif (Mobile)',
      'Revisi 5x (Text/Gambar)',
      'Maintenance Garansi 1 Tahun',
      'Akses Dashboard Admin',
      'Backup Data Bulanan',
      'Bisa Upload/Edit Data',
    ],
    unavailable: [],
  },
]

export default function WebDevPage() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-[url('/hero-bg.png')] bg-cover bg-center bg-black text-white pt-30 lg:pt-10">

      {/* HERO */}
      <div className="mx-auto h-screen px-6 py-10 lg:px-14 flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl">

        {/* TEXT */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="flex items-center"
        >
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#f22a98] mb-6 leading-tight">
              Website <br /> Development
            </h1>

            <p className="text-white/80 text-lg">
              Crewtiv menyediakan layanan <strong>jasa pembuatan website profesional</strong>
              untuk bisnis, UMKM, personal branding, hingga perusahaan. Website yang kami
              bangun responsif, cepat, SEO friendly, dan siap membantu bisnis Anda
              berkembang di era digital.
            </p>
            <a href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ">
                <button className="mt-8 px-6 py-3 rounded-full text-white font-semibold bg-[#f22a98] hover:bg-white hover:text-[#f22a98] transition duration-300 shadow-lg">
              Konsultasi Sekarang
            </button>
              </a>
             
            
          </div>
        </motion.section>

        {/* IMAGE */}
        <div
          className="flex justify-center items-center md:w-1/2 relative"
          style={{
            transform: `translateY(${offsetY * 0.1}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src="/website-mockup.png"
            alt="Website Mockup"
            width={800}
            height={800}
            className="w-full max-w-md md:max-w-xl h-auto object-contain"
          />
        </div>
      </div>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto mt-20 px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#f22a98] mb-6">
          Kenapa Bisnis Membutuhkan Website?
        </h2>

        <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
          Website adalah identitas digital yang membuat bisnis Anda lebih dipercaya oleh pelanggan di era digital saat ini. Dengan memiliki website profesional, bisnis Anda dapat menampilkan informasi produk atau layanan secara lengkap, membangun kredibilitas brand, serta memberikan kesan profesional kepada calon pelanggan.
        </p>

        <p className="text-white/80 leading-relaxed max-w-3xl mx-auto mt-4">
          Selain itu, website yang dirancang dengan baik dan dioptimasi dengan teknik SEO akan lebih mudah ditemukan di mesin pencari seperti Google. Hal ini membantu bisnis Anda menjangkau lebih banyak pelanggan potensial dan meningkatkan peluang penjualan.
        </p>
      </section>

      {/* PRICE LIST */}
      <section className="text-center mt-30 max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-[#f22a98] text-4xl md:text-5xl font-bold mb-8">
          Website Price List
        </h2>

        <p className="text-white/80 max-w-3xl mx-auto mb-16">
          Pilih paket pembuatan website yang sesuai dengan kebutuhan bisnis Anda.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">

          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-8 pb-10 bg-black shadow-[0_0_10px_#f22a98] hover:shadow-[0_0_30px_#f22a98] transition duration-300 flex flex-col items-center w-full max-w-sm"
            >
              <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>

              <p className="text-gray-400 line-through">{pkg.priceOriginal}</p>

              <p className="text-3xl font-bold mt-1 mb-6 text-[#f22a98]">
                {pkg.priceDiscounted}
              </p>

              <ul className="space-y-3 text-sm">
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

              <a
                href={`https://wa.me/6287793942392?text=Halo%20saya%20ingin%20membuat%20website%20paket%20${pkg.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 bg-[#f22a98] hover:bg-white hover:text-[#f22a98] text-white font-semibold py-2 px-6 rounded-full transition">
                  Build Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto mt-10 px-6 py-50 text-center">
        <h2 className="text-4xl font-bold text-[#f22a98] mb-10">
          Proses Pembuatan Website
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

          <div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
            <h3 className="font-semibold text-xl mb-2">1. Konsultasi</h3>
            <p className="text-white/70 text-sm">
              Kami memahami kebutuhan bisnis Anda dan menentukan konsep website yang tepat.
            </p>
          </div>

          <div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
            <h3 className="font-semibold text-xl mb-2">2. Desain</h3>
            <p className="text-white/70 text-sm">
              Tim kami membuat desain website modern yang sesuai dengan brand Anda.
            </p>
          </div>

          <div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
            <h3 className="font-semibold text-xl mb-2">3. Development</h3>
            <p className="text-white/70 text-sm">
              Website dikembangkan dengan teknologi modern agar cepat dan stabil.
            </p>
          </div>

          <div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
            <h3 className="font-semibold text-xl mb-2">4. Launch</h3>
            <p className="text-white/70 text-sm">
              Website siap digunakan dan dapat langsung ditemukan di Google.
            </p>
          </div>

        </div>
        <a
          href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20layanan%20website%20development"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-20 inline-block bg-[#f22a98] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#f22a98] border border-[#f22a98] transition"
          >
          Konsultasi Gratis
          </a>
      </section>
      

      <div className='bg-white'>
        <section className="max-w-4xl mx-auto px-6 py-20 pt-40">
          <h2 className="text-4xl font-bold text-[#f22a98] text-center mb-10">
            FAQ Jasa Pembuatan Website
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-black text-lg">
                Berapa lama proses pembuatan website?
              </h3>
              <p className="text-black/70 text-sm">
                Proses pembuatan website biasanya membutuhkan waktu sekitar
                3–14 hari tergantung kompleksitas desain, jumlah halaman,
                serta fitur yang dibutuhkan pada website tersebut.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black text-lg">
                Apakah website bisa diakses melalui smartphone?
              </h3>
              <p className="text-black/70 text-sm">
                Ya, semua website yang kami buat sudah menggunakan desain
                responsif sehingga dapat diakses dengan baik melalui
                smartphone, tablet, maupun desktop.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black text-lg">
                Apakah website bisa muncul di Google?
              </h3>
              <p className="text-black/70 text-sm">
                Website akan dioptimasi menggunakan teknik SEO dasar agar
                lebih mudah ditemukan di mesin pencari seperti Google dan
                memiliki peluang lebih besar untuk muncul di hasil pencarian.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black text-lg">
                Apakah saya bisa mengedit konten website sendiri?
              </h3>
              <p className="text-black/70 text-sm">
                Ya. Website yang kami buat menyediakan akses dashboard admin
                sehingga Anda dapat mengubah teks, gambar, atau menambahkan
                konten baru secara mandiri.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black text-lg">
                Apakah tersedia maintenance setelah website selesai?
              </h3>
              <p className="text-black/70 text-sm">
                Kami menyediakan layanan maintenance sesuai paket yang dipilih
                untuk memastikan website tetap berjalan dengan baik dan aman
                setelah proses pembuatan selesai.
              </p>
            </div>

          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-white">
        <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/contact-us.jpg"
              alt="Customer Service"
              width={1000}
              height={800}
              className="w-full max-w-md md:max-w-xl h-auto object-contain"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl text-[#f22a98] sm:text-4xl font-bold mb-6">
              Siap Membuat Website untuk Bisnismu?
            </h3>

            <p className="text-black/80 mb-6 max-w-xl">
              Konsultasikan kebutuhan website Anda sekarang juga untuk mewujudkan platform digital yang tidak hanya menarik secara visual, tetapi juga fungsional, responsif, dan mampu meningkatkan kepercayaan serta interaksi dengan audiens Anda.
            </p>

            <a
              href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f22a98] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#f22a98] border border-[#f22a98] transition"
            >
              Konsultasi Gratis
            </a>
          </div>

        </section>
      </div>

      <Footer />

    </main>
  )
}