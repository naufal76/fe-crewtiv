'use client'
import { FaSearch, FaPaintBrush, FaSyncAlt, FaCheckCircle } from 'react-icons/fa'

const steps = [
  {
    icon: <FaSearch className="text-2xl text-[#f22a98]" />,
    title: 'Brief & Riset Brand',
    desc: 'Diskusi awal untuk memahami visi dan karakter brand kamu.',
  },
  {
    icon: <FaPaintBrush className="text-2xl text-[#f22a98]" />,
    title: 'Pembuatan Konsep Logo',
    desc: 'Membuat beberapa konsep logo yang sesuai dengan riset dan brief.',
  },
  {
    icon: <FaSyncAlt className="text-2xl text-[#f22a98]" />,
    title: 'Revisi & Penyempurnaan',
    desc: 'Melakukan revisi hingga logo benar-benar sesuai harapan.',
  },
  {
    icon: <FaCheckCircle className="text-2xl text-[#f22a98]" />,
    title: 'Finalisasi & Delivery File',
    desc: 'Mengirim file final lengkap dalam berbagai format siap pakai.',
  },
]

export default function InfographicLogo() {
  return (
    <section className="text-white py-16 px-6">
      <h2 className="text-5xl sm:text-6xl text-center font-bold text-[#f22a98] mb-14">
        Workflow Desain Logo
      </h2>
      <div className="flex items-center">
        <div className="relative border-l-6 border-[#f22a98] max-w-3xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="ml-9 mb-12 relative">
              <div className="absolute -left-15 top-0 bg-[#f22a98] text-black w-10 h-10 flex items-center justify-center rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
