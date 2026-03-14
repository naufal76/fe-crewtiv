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
    priceOriginal: 'Rp.1.200.000',
    priceDiscounted: 'Rp.750.000',
    features: [
      'Desain 8 Konten Feed',
      '2 Konten Video (Reels)',
      'Copywriting Caption',
      'Riset Hashtag & Trending',
      'Kalender Konten',
      '1x Revisi Per Konten',
      'Jadwal Upload Mandiri',
      'Free Template Story',
    ],
    unavailable: [6],
  },
  {
    name: 'Professional',
    priceOriginal: 'Rp.2.000.000',
    priceDiscounted: 'Rp.1.450.000',
    features: [
      'Desain 12 Konten Feed',
      '4 Konten Video (Reels)',
      'Copywriting Caption',
      'Riset Hashtag & Trending',
      'Kalender Konten',
      '2x Revisi Per Konten',
      'Jadwal Upload oleh Tim',
      'Free Template Story',
    ],
    unavailable: [],
  },
  {
    name: 'Business',
    priceOriginal: 'Rp.3.500.000',
    priceDiscounted: 'Rp.2.500.000',
    features: [
      'Desain 20 Konten Feed',
      '6 Konten Video (Reels)',
      'Copywriting Caption',
      'Riset Hashtag & Trending',
      'Kalender Konten Lengkap',
      'Unlimited Revisi',
      'Jadwal Upload oleh Tim',
      'Analisis & Laporan Bulanan',
    ],
    unavailable: [],
  },
]

export default function SocialMediaPage() {

  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (

<main className="bg-[url('/hero-bg.png')] bg-cover bg-center bg-black text-white pt-3 lg:pt-5">

{/* HERO */}
<div className="mx-auto h-screen px-6 py-10 lg:px-14 flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl">

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
Social Media <br /> Management
</h1>

<p className="text-white/80 text-lg">
Crewtiv menyediakan layanan pengelolaan media sosial profesional
untuk membantu brand Anda lebih aktif, konsisten, dan menarik di
platform digital seperti Instagram dan TikTok.
</p>

<a
href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20social%20media%20management"
target="_blank"
rel="noopener noreferrer"
className="mt-8 inline-block px-6 py-3 rounded-full text-white font-semibold bg-[#f22a98] hover:bg-white hover:text-[#f22a98] transition duration-300 shadow-lg"
>
Konsultasi Sekarang
</a>

</div>
</motion.section>

<div
className="flex justify-center items-center md:w-1/2 relative"
style={{
transform: `translateY(${offsetY * 0.1}px)`,
transition: 'transform 0.1s ease-out',
}}
>

<Image
src="/social-media.png"
alt="Social Media Management"
width={1000}
height={1000}
className="w-full max-w-xl md:max-w-4xl h-auto object-contain"
/>

</div>
</div>

{/* ABOUT */}
<section className="max-w-6xl mx-auto mt-20 px-6 py-20 text-center">

<h2 className="text-4xl md:text-5xl font-bold text-[#f22a98] mb-6">
Kenapa Bisnis Membutuhkan Social Media Management?
</h2>

<p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
Media sosial adalah salah satu channel marketing paling efektif
untuk membangun brand awareness, menjangkau lebih banyak audiens,
dan meningkatkan interaksi dengan pelanggan.
</p>

<p className="text-white/80 leading-relaxed max-w-3xl mx-auto mt-4">
Dengan strategi konten yang tepat, bisnis Anda dapat membangun
kepercayaan pelanggan serta meningkatkan peluang penjualan melalui
platform digital.
</p>

</section>

{/* PRICE LIST */}
<section className="text-center mt-30 max-w-7xl mx-auto px-6 py-10">

<h2 className="text-[#f22a98] text-4xl md:text-5xl font-bold mb-8">
Social Media Price List
</h2>

<p className="text-white/80 max-w-3xl mx-auto mb-16">
Pilih paket pengelolaan media sosial yang sesuai dengan kebutuhan brand Anda.
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
href={`https://wa.me/6287793942392?text=Halo%20saya%20ingin%20menggunakan%20paket%20Social%20Media%20${pkg.name}`}
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
Proses Social Media Management
</h2>

<p className="text-white/80 leading-relaxed max-w-4xl mx-auto mb-10">
Kami mengelola media sosial secara terstruktur mulai dari strategi
konten hingga analisis performa untuk memastikan akun Anda berkembang
secara konsisten.
</p>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

<div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-2">1. Strategy</h3>
<p className="text-white/70 text-sm">
Kami menganalisis brand, target audiens, dan membuat strategi konten.
</p>
</div>

<div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-2">2. Content Creation</h3>
<p className="text-white/70 text-sm">
Tim kami membuat desain dan video konten yang menarik.
</p>
</div>

<div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-2">3. Publishing</h3>
<p className="text-white/70 text-sm">
Konten dipublikasikan sesuai kalender konten yang telah dibuat.
</p>
</div>

<div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-2">4. Analytics</h3>
<p className="text-white/70 text-sm">
Kami menganalisis performa konten untuk meningkatkan hasil.
</p>
</div>
</div>
<a
          href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20layanan%20social%20media%20management"
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
              FAQ Social Media Management
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-black text-lg">
                  Platform media sosial apa saja yang bisa dikelola?
                </h3>
                <p className="text-black/70 text-sm">
                  Kami dapat membantu mengelola berbagai platform media sosial seperti
                  Instagram, TikTok, Facebook, dan platform lainnya sesuai dengan
                  kebutuhan bisnis atau personal branding Anda.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black text-lg">
                  Apakah saya perlu menyediakan konten sendiri?
                </h3>
                <p className="text-black/70 text-sm">
                  Tidak selalu. Tim kami dapat membantu membuat desain konten,
                  video reels, serta copywriting caption. Namun jika Anda sudah
                  memiliki materi sendiri, kami juga dapat mengolahnya menjadi
                  konten yang lebih menarik.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black text-lg">
                  Apakah termasuk strategi konten dan riset hashtag?
                </h3>
                <p className="text-black/70 text-sm">
                  Ya, setiap paket sudah termasuk perencanaan konten, riset hashtag,
                  serta kalender konten agar postingan lebih terarah dan memiliki
                  peluang menjangkau audiens yang lebih luas.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black text-lg">
                  Apakah konten akan diposting oleh tim Crewtiv?
                </h3>
                <p className="text-black/70 text-sm">
                  Tergantung paket yang dipilih. Beberapa paket sudah termasuk
                  layanan penjadwalan dan upload konten oleh tim kami agar akun
                  media sosial Anda tetap aktif secara konsisten.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black text-lg">
                  Apakah saya akan mendapatkan laporan performa?
                </h3>
                <p className="text-black/70 text-sm">
                  Ya. Pada paket tertentu kami menyediakan laporan analisis performa
                  konten setiap bulan sehingga Anda dapat melihat perkembangan akun
                  media sosial secara lebih jelas.
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
Siap Membuat Social Media Brandmu Lebih Aktif?
</h3>

<p className="text-black/80 mb-6 max-w-xl">
Diskusikan strategi konten terbaik untuk bisnis Anda bersama tim Crewtiv, dan temukan pendekatan kreatif yang mampu meningkatkan visibilitas brand, memperkuat komunikasi dengan audiens, serta menghadirkan hasil yang relevan dan berkelanjutan bagi perkembangan bisnis Anda.
</p>

<a
href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20social%20media%20management"
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