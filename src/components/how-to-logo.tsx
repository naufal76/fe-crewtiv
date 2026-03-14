'use client'

import { FaRegComments, FaPaintBrush, FaRocket } from 'react-icons/fa'

export default function HowToLogo() {
  const steps = [
    {
      icon: <FaRegComments className="text-4xl text-[#f22a98]" />,
      title: 'Diskusi & Briefing',
      desc: 'Kami dengarkan cerita brand kamu, visi, dan preferensi desain untuk membentuk arah logo.',
    },
    {
      icon: <FaPaintBrush className="text-4xl text-[#f22a98]" />,
      title: 'Pilih Paket Desain',
      desc: 'Tentukan paket yang sesuai: jumlah konsep, revisi, dan kebutuhan brand identity.',
    },
    {
      icon: <FaRocket className="text-4xl text-[#f22a98]" />,
      title: 'Logo Siap Digunakan',
      desc: 'Logo final dikirim dalam berbagai format dan siap digunakan untuk keperluan branding kamu.',
    },
  ]

  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-center text-5xl sm:text-6xl font-bold text-[#f22a98] mb-14">
        Logo Impianmu, Dalam Genggaman!
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center group bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg
        transform transition duration-300 hover:scale-105 hover:shadow-[0_0_10px_#f22a98]"
          >
            {s.icon}
            <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-white/80">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
