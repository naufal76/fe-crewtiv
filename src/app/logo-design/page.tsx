'use client'

import Footer from '@/components/footer'

const packages = [
  {
    name: 'Basic Logo',
    priceOriginal: 'Rp.800.000',
    priceDiscounted: 'Rp.450.000',
    features: [
      '1 Konsep Logo',
      '2x Revisi',
      'Waktu pengerjaan 3 hari',
      'Format PNG & JPG',
      'Mockup Presentasi',
      'Brief via WhatsApp',
      'Tanpa File Source (CDR/AI/PSD)',
    ],
    unavailable: [6],
  },
  {
    name: 'Professional Logo',
    priceOriginal: 'Rp.1.500.000',
    priceDiscounted: 'Rp.980.000',
    features: [
      '2 Konsep Logo',
      '4x Revisi',
      'Waktu pengerjaan 5 hari',
      'Format PNG, JPG & PDF',
      'Mockup Presentasi',
      'Brief via WhatsApp / Google Form',
      'File Source (AI/CDR)',
    ],
    unavailable: [],
  },
  {
    name: 'Business Identity',
    priceOriginal: 'Rp.2.800.000',
    priceDiscounted: 'Rp.1.980.000',
    features: [
      '3 Konsep Logo',
      'Unlimited Revisi',
      'Waktu pengerjaan 7-10 hari',
      'Format Lengkap (PNG, JPG, PDF, SVG)',
      'Mockup Presentasi',
      'Brief via Zoom / WhatsApp',
      'File Source Lengkap (AI/CDR/PSD)',
    ],
    unavailable: [],
  },
]

export default function LogoDesignPage() {
  return (
    <div className="relative bg-[url('/hero-bg.png')] bg-cover bg-center bg-black text-white">
      <div>
        <section className="min-h-[70vh] h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl sm:text-9xl font-bold text-[#f22a98] mb-6">
              Logo <br/> Design
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Bangun identitas visual brand kamu mulai dari logo yang kuat, berkesan, dan profesional. Cocok untuk UMKM, startup, maupun brand yang ingin rebranding.
            </p>
          </div>
        </section>

        <section className="text-center max-w-6xl mx-auto px-6 py-10 mb-9">
          <h2 className="text-center text-[#f22a98] text-6xl font-bold mb-10">Price List</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-16">
            Kami menyediakan layanan desain logo sesuai kebutuhanmu. Mulai dari yang simpel hingga paket lengkap identitas brand.
          </p>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center gap-10 max-w-7xl mx-auto">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 bg-black shadow-[0_0_10px_#f22a98] hover:shadow-[0_0_30px_#f22a98] transition duration-300 flex flex-col items-center w-full max-w-sm"
              >
                <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-lg text-gray-300 line-through">{pkg.priceOriginal}</p>
                <p className="text-3xl font-bold shadow-[0_0_10px_#f22a98] px-4 py-2 rounded-xl mt-1 mb-6">
                  {pkg.priceDiscounted}
                </p>

                <ul className="text-center space-y-3 text-md">
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

                <button className="mt-6 bg-[#f22a98] hover:bg-white hover:text-[#f22a98] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition">
                  Build Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center px-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-[#f22a98] mb-6">
            Siap Bangun Logo Kerenmu?
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Konsultasikan kebutuhan desain logomu dengan tim Crewtiv dan wujudkan logo profesional yang mewakili brand kamu secara maksimal.
          </p>
          <a
            href="https://wa.me/6287793942392"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f22a98] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#f22a98] transition"
          >
            Konsultasi Gratis Sekarang
          </a>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
