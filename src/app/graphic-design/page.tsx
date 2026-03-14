'use client'

import Image from 'next/image'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

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
      'Brand Equipment',
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
      '2 Brand Equipment',
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
      'Format PNG JPG PDF SVG',
      'Mockup Presentasi',
      'Brief via WhatsApp / Zoom',
      'File Source Adobe Illustrator',
      'Brand Guidelines',
      '4 Brand Equipment',
    ],
    unavailable: [],
  },
]

export default function DesignPage() {

  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (

<main className="bg-[url('/hero-bg.png')] bg-cover bg-center bg-black text-white pt-30 lg:pt-10">

{/* HERO */}
<div className="mx-auto h-screen px-6 py-10 lg:px-10 flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl">

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
Graphic <br /> Design
</h1>

<p className="text-white/80 text-lg">
Crewtiv menyediakan layanan <strong>jasa desain grafis profesional </strong>
untuk UMKM, startup, hingga perusahaan. Desain yang kami buat dirancang
unik, mudah diingat, dan mampu merepresentasikan identitas brand Anda
secara kuat dan profesional.
</p>

<a
href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20desain%20grafis"
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
src="/hero-logo.png"
alt="Logo Design"
width={800}
height={800}
className="w-full max-w-md md:max-w-xl h-auto object-contain"
/>

</div>
</div>
{/* GRAPHIC DESIGN SERVICES */}
<section className="max-w-6xl mx-auto mt-10 px-6 py-40 text-center">

<h2 className="text-4xl md:text-5xl font-bold text-[#f22a98] mb-10">
Layanan Desain Grafis
</h2>

<p className="text-white/80 leading-relaxed max-w-4xl mx-auto mb-14">
Crewtiv menyediakan berbagai layanan desain grafis untuk membantu
membangun identitas visual brand Anda. Mulai dari pembuatan logo,
materi promosi, hingga kebutuhan desain untuk bisnis dan merchandise.
</p>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

{/* Brand Identity */}
<div className="bg-white/5 py-10 px-6 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-4 text-[#f22a98]">
Brand Identity
</h3>

<ul className="space-y-2 text-white/80 text-sm">
<li>Logo Design</li>
<li>Brand Guidelines</li>
<li>Visual Identity System</li>
<li>Color & Typography Setup</li>
</ul>
</div>

{/* Marketing Materials */}
<div className="bg-white/5 py-10 px-6 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-4 text-[#f22a98]">
Marketing Materials
</h3>

<ul className="space-y-2 text-white/80 text-sm">
<li>Flyer Design</li>
<li>Poster & Pamphlet</li>
<li>Banner & Billboard</li>
<li>Social Media Content</li>
</ul>
</div>

{/* Business Documents */}
<div className="bg-white/5 py-10 px-6 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-4 text-[#f22a98]">
Business Documents
</h3>

<ul className="space-y-2 text-white/80 text-sm">
<li>Company Profile</li>
<li>Catalogue Design</li>
<li>Presentation Slides</li>
<li>Proposal & Pitch Deck</li>
</ul>
</div>

{/* Merchandise */}
<div className="bg-white/5 py-10 px-6 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-4 text-[#f22a98]">
Merchandise Design
</h3>

<ul className="space-y-2 text-white/80 text-sm">
<li>T-Shirt Design</li>
<li>Totebag & Slingbag</li>
<li>Sticker & Packaging</li>
<li>Brand Merchandise</li>
</ul>
</div>

</div>
<a
href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20layanan%20desain%20grafis"
target="_blank"
rel="noopener noreferrer"
className="mt-20 inline-block bg-[#f22a98] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#f22a98] border border-[#f22a98] transition"
>
Konsultasi Gratis
</a>
</section>
{/* ABOUT */}
<section className="max-w-6xl mx-auto mt-20 px-6 py-20 text-center">

<h2 className="text-4xl md:text-5xl font-bold text-[#f22a98] mb-6">
Mengapa desain grafis menjadi kebutuhan penting bagi brand kamu?
</h2>

<p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
Desain grafis adalah fondasi utama dalam membangun identitas brand yang kuat. Lebih dari sekadar tampilan visual, desain grafis membantu menyampaikan pesan, nilai, dan karakter bisnis kamu dengan cara yang konsisten dan mudah dikenali. Mulai dari logo, tipografi, palet warna, hingga konten media sosial, setiap elemen visual bekerja bersama untuk menciptakan kesan profesional yang meningkatkan kepercayaan audiens terhadap brand kamu.
</p>

<p className="text-white/80 leading-relaxed max-w-3xl mx-auto mt-4">
Dengan desain grafis yang tepat, brand kamu tidak hanya tampil menarik, tetapi juga mampu membedakan diri dari kompetitor dan membangun hubungan emosional dengan pelanggan. Visual yang dirancang secara strategis akan membuat pesan lebih mudah diingat, meningkatkan engagement, serta memperkuat citra brand di berbagai platform digital maupun offline. Inilah alasan mengapa investasi pada desain grafis adalah langkah penting untuk pertumbuhan bisnis yang berkelanjutan.
</p>

</section>

{/* PRICE LIST */}
<section className="text-center mt-30 max-w-7xl mx-auto px-6 py-10">

<h2 className="text-[#f22a98] text-4xl md:text-5xl font-bold mb-8">
Logo Design Price List
</h2>

<p className="text-white/80 max-w-3xl mx-auto mb-16">
Pilih paket desain logo yang sesuai dengan kebutuhan brand Anda.
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
href={`https://wa.me/6287793942392?text=Halo%20saya%20ingin%20desain%20grafis%20paket%20${pkg.name}`}
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
Proses Pengerjaan Graphic Design
</h2>

<p className="text-white/80 leading-relaxed max-w-4xl mx-auto mb-10">
Proses pengerjaan desain grafis di Crewtiv dilakukan secara terstruktur
mulai dari memahami kebutuhan brand hingga finalisasi desain. Kami
memastikan setiap desain memiliki konsep yang jelas, visual yang
menarik, serta mampu menyampaikan pesan brand secara efektif di
berbagai media digital maupun cetak.
</p>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

<div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-2">1. Konsultasi</h3>
<p className="text-white/70 text-sm">
Kami memahami kebutuhan desain Anda, mulai dari tujuan, target audiens,
hingga konsep visual yang diinginkan.
</p>
</div>

<div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-2">2. Konsep Desain</h3>
<p className="text-white/70 text-sm">
Tim desainer membuat konsep visual yang sesuai dengan karakter brand
dan kebutuhan media yang akan digunakan.
</p>
</div>

<div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-2">3. Revisi</h3>
<p className="text-white/70 text-sm">
Kami melakukan penyesuaian desain berdasarkan feedback Anda agar hasil
akhir benar-benar sesuai dengan ekspektasi.
</p>
</div>

<div className="bg-white/5 py-10 px-5 rounded-2xl hover:shadow-[0_0_30px_#f22a98] transition">
<h3 className="font-semibold text-xl mb-2">4. Finalisasi</h3>
<p className="text-white/70 text-sm">
Desain final dikirim dalam berbagai format siap pakai untuk kebutuhan
digital maupun cetak.
</p>
</div>

</div>

<a
href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20layanan%20desain%20grafis"
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
      FAQ Jasa Graphic Design
    </h2>

    <div className="space-y-6">

      <div>
        <h3 className="font-semibold text-black text-lg">
          Layanan desain apa saja yang tersedia?
        </h3>
        <p className="text-black/70 text-sm">
          Kami menyediakan berbagai layanan desain grafis seperti desain logo,
          branding identity, desain social media, poster, banner, hingga
          kebutuhan visual untuk bisnis maupun personal branding.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-black text-lg">
          Berapa lama proses pengerjaan desain?
        </h3>
        <p className="text-black/70 text-sm">
          Waktu pengerjaan tergantung jenis desain dan tingkat kompleksitas
          proyek. Umumnya proses desain membutuhkan waktu sekitar 2–10 hari
          kerja hingga hasil final siap digunakan.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-black text-lg">
          Apakah saya bisa meminta revisi desain?
        </h3>
        <p className="text-black/70 text-sm">
          Tentu. Kami menyediakan revisi sesuai dengan paket yang dipilih agar
          hasil desain benar-benar sesuai dengan konsep dan kebutuhan brand
          Anda.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-black text-lg">
          File apa saja yang akan saya dapatkan?
        </h3>
        <p className="text-black/70 text-sm">
          File desain akan diberikan dalam berbagai format seperti PNG, JPG,
          PDF, atau file source sesuai kebutuhan sehingga dapat digunakan
          untuk keperluan digital maupun cetak.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-black text-lg">
          Apakah desain bisa digunakan untuk kebutuhan cetak dan digital?
        </h3>
        <p className="text-black/70 text-sm">
          Ya. Semua desain dibuat dengan standar profesional sehingga dapat
          digunakan untuk berbagai kebutuhan seperti social media, website,
          banner, kemasan produk, maupun materi promosi lainnya.
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
Siap Membuat Logo untuk Brandmu?
</h3>

<p className="text-black/80 mb-6 max-w-xl">
Diskusikan kebutuhan desain logo Anda bersama tim Crewtiv dan
bangun identitas visual brand yang profesional dan mudah diingat.
</p>

<a
href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20desain%20logo"
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