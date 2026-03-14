'use client'

import { FaEye, FaBrain, FaHandshake } from 'react-icons/fa'

export default function ImportantLogo() {
  const reasons = [
    {
      icon: <FaEye className="text-4xl text-[#f22a98]" />,
      title: 'Meningkatkan Daya Ingat Brand',
      desc: 'Logo yang kuat dan mudah diingat membantu pelanggan mengenali dan mengingat brand kamu di tengah persaingan.',
    },
    {
      icon: <FaBrain className="text-4xl text-[#f22a98]" />,
      title: 'Membangun Citra Profesional',
      desc: 'Logo adalah wajah dari bisnis kamu. Desain yang profesional memberikan kesan bahwa brand kamu terpercaya dan serius.',
    },
    {
      icon: <FaHandshake className="text-4xl text-[#f22a98]" />,
      title: 'Membangun Kepercayaan Pelanggan',
      desc: 'Logo yang konsisten dan relevan menciptakan hubungan emosional dan kepercayaan dengan pelanggan kamu.',
    },
  ]

  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-[#f22a98] mb-12">
          Kenapa Logo Itu Penting?
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-16 text-lg">
          Logo bukan sekadar gambar, tapi representasi visual dari identitas brand kamu. Logo yang baik bisa meninggalkan kesan mendalam, membangun kredibilitas, dan membuat brand kamu lebih mudah dikenali.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg
        transform transition duration-300 hover:scale-105 hover:shadow-[0_0_10px_#ffffff]"
            >
              {r.icon}
              <h3 className="text-2xl font-semibold mt-4">{r.title}</h3>
              <p className="text-white/80 mt-2">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
