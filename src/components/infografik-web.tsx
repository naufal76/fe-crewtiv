'use client'
import { FaComments, FaCogs, FaLaptopCode, FaGlobe } from 'react-icons/fa'

const steps = [
  {
    icon: <FaComments className="text-2xl text-[#f22a98]" />,
    title: 'Konsultasi & Kebutuhan',
    desc: 'Diskusikan kebutuhan website Anda bersama tim kami.',
  },
  {
    icon: <FaCogs className="text-2xl text-[#f22a98]" />,
    title: 'Desain & Pengembangan',
    desc: 'Kami mulai membuat desain dan membangun struktur website.',
  },
  {
    icon: <FaLaptopCode className="text-2xl text-[#f22a98]" />,
    title: 'Uji Coba & Revisi',
    desc: 'Website diuji dan disesuaikan dengan masukan Anda.',
  },
  {
    icon: <FaGlobe className="text-2xl text-[#f22a98]" />,
    title: 'Website Siap Online',
    desc: 'Website Anda dipublikasikan dan siap digunakan.',
  },
]

export default function InfographicWeb() {
  return (
    <section className="text-white py-16 px-6">
      <h2 className="text-5xl sm:text-6xl text-center font-bold text-[#f22a98] mb-14">
        Workflow Website Development
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
