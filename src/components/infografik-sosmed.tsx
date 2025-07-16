'use client'
import { FaPalette, FaCalendarAlt, FaPenFancy, FaShareSquare } from 'react-icons/fa'

const steps = [
  {
    icon: <FaPalette className="text-2xl text-[#f22a98]" />,
    title: 'Pembuatan Template Desain',
    desc: 'Menentukan gaya visual agar identitas brand konsisten.',
  },
  {
    icon: <FaCalendarAlt className="text-2xl text-[#f22a98]" />,
    title: 'Rencana Konten & Kalender Post',
    desc: 'Membuat jadwal konten dan tema post bulanan.',
  },
  {
    icon: <FaPenFancy className="text-2xl text-[#f22a98]" />,
    title: 'Produksi Konten',
    desc: 'Menulis caption dan membuat desain konten.',
  },
  {
    icon: <FaShareSquare className="text-2xl text-[#f22a98]" />,
    title: 'Posting & Monitoring',
    desc: 'Konten diposting dan performa dianalisis.',
  },
]

export default function InfographicSosmed() {
  return (
    <section className=" text-white py-16 px-6 ">
      <h2 className="text-5xl sm:text-6xl text-center font-bold text-[#f22a98] mb-14">Workflow Layanan Sosial Media</h2>
      <div className='flex items-center'>
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
