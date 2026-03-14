'use client'

import { FaComments, FaClipboardList, FaChartLine } from 'react-icons/fa'

export default function HowToSosmed() {
  const steps = [
    {
      icon: <FaComments className="text-4xl text-[#f22a98]" />,
      title: 'Konsultasi Kebutuhan',
      desc: 'Kami bahas target audiens, tujuan akun, dan gaya visual yang kamu inginkan.',
    },
    {
      icon: <FaClipboardList className="text-4xl text-[#f22a98]" />,
      title: 'Pilih Paket Sosmed',
      desc: 'Tentukan jumlah postingan, jenis konten, dan platform yang akan kami kelola.',
    },
    {
      icon: <FaChartLine className="text-4xl text-[#f22a98]" />,
      title: 'Akun Dikelola',
      desc: 'Tim kami mulai produksi konten & mengelola akun kamu secara rutin dan profesional.',
    },
  ]

  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-center text-5xl sm:text-6xl font-bold text-[#f22a98] mb-14">
        Naikin Sosmed Tanpa Ribet!
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
