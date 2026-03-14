'use client'

import { FaBriefcase, FaTags, FaPalette, FaHandsHelping, FaRegComments, FaThumbsUp } from 'react-icons/fa'

export default function WhyCrewtiv() {
  const reasons = [
    {
      icon: <FaBriefcase className="text-4xl text-[#f22a98]" />,
      title: 'Berpengalaman & Profesional',
      desc: 'Tim kami terdiri dari desainer, developer, dan kreator berpengalaman yang siap membantu bisnismu tumbuh.',
    },
    {
      icon: <FaTags className="text-4xl text-[#f22a98]" />,
      title: 'Harga Bersahabat',
      desc: 'Kami percaya bahwa layanan berkualitas tidak harus mahal. Tersedia berbagai paket sesuai kebutuhan.',
    },
    {
      icon: <FaPalette className="text-4xl text-[#f22a98]" />,
      title: 'Desain Unik & Relevan',
      desc: 'Setiap desain kami buat berdasarkan identitas brand, bukan template pasaran.',
    },
    {
      icon: <FaHandsHelping className="text-4xl text-[#f22a98]" />,
      title: 'Full Support & Maintenance',
      desc: 'Tidak hanya selesai saat project launch. Kami siap bantu revisi dan maintenance ke depannya.',
    },
    {
      icon: <FaRegComments className="text-4xl text-[#f22a98]" />,
      title: 'Konsultasi Gratis',
      desc: 'Diskusikan ide dan kebutuhan kamu dengan tim kami tanpa biaya tambahan.',
    },
    {
      icon: <FaThumbsUp className="text-4xl text-[#f22a98]" />,
      title: 'Terbukti Klien Puas',
      desc: 'Puluhan UMKM, personal brand, dan bisnis lokal telah mempercayakan brandingnya kepada kami.',
    },
  ]

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-[#f22a98] mb-12">
          Kenapa Harus Crewtiv?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f22a98]"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 transition duration-300 group-hover:scale-105">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm transition duration-300 group-hover:scale-105">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
