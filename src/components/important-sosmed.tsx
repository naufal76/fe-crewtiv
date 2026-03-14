'use client'

import { FaUsers, FaBullhorn, FaChartLine } from 'react-icons/fa'

export default function ImportantSosmed() {
  const benefits = [
    {
      icon: <FaUsers className="text-4xl text-[#f22a98]" />,
      title: 'Meningkatkan Engagement',
      desc: 'Akun media sosial yang dikelola dengan baik dapat membangun kedekatan dan komunikasi yang aktif dengan audiens.',
    },
    {
      icon: <FaBullhorn className="text-4xl text-[#f22a98]" />,
      title: 'Brand Awareness Lebih Luas',
      desc: 'Konten kreatif dan konsisten dapat memperkenalkan brand kamu ke lebih banyak orang dan menciptakan identitas yang kuat.',
    },
    {
      icon: <FaChartLine className="text-4xl text-[#f22a98]" />,
      title: 'Strategi Konten Terarah',
      desc: 'Kami tidak hanya mendesain, tapi juga menganalisis dan merencanakan strategi konten untuk pertumbuhan akun yang berkelanjutan.',
    },
  ]

  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-[#f22a98] mb-12">
          Kenapa Perlu Social Media Management?
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-16 text-lg">
          Di era digital, media sosial menjadi kunci utama membangun citra dan menjangkau pasar. Tapi tanpa strategi dan pengelolaan yang tepat, akunmu bisa kehilangan arah.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center group bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg
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
