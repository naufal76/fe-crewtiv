'use client'

import { FaGlobe, FaRocket, FaSearch } from 'react-icons/fa'

export default function ImportantWebsite() {
  const benefits = [
    {
      icon: <FaGlobe className="text-4xl text-[#f22a98]" />,
      title: 'Meningkatkan Kredibilitas',
      desc: 'Website membuat bisnismu terlihat profesional dan terpercaya, terutama di mata pelanggan baru yang mencari informasi secara online.',
    },
    {
      icon: <FaRocket className="text-4xl text-[#f22a98]" />,
      title: 'Akses 24/7',
      desc: 'Pelanggan bisa mengakses informasi tentang produk dan layananmu kapan saja, bahkan di luar jam kerja. Website tidak pernah tidur.',
    },
    {
      icon: <FaSearch className="text-4xl text-[#f22a98]" />,
      title: 'Memudahkan Ditemukan di Google',
      desc: 'Dengan optimasi SEO yang tepat, website membantumu menjangkau audiens yang lebih luas lewat pencarian Google.',
    },
  ]

  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-[#f22a98] mb-12">
          Kenapa Website Itu Penting?
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-16 text-lg">
          Website bukan hanya sebagai media informasi, tapi juga menjadi pusat kehadiran digital dari brand kamu. Investasi yang tepat untuk pertumbuhan jangka panjang.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg 
                transform transition duration-300 hover:scale-105 hover:shadow-[0_0_10px_#ffffff]"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
              <p className="text-white/80 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
