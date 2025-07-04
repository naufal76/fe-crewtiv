'use client'

import Footer from '@/components/footer'

const packages = [
  {
    name: 'Starter',
    priceOriginal: 'Rp.1.200.000',
    priceDiscounted: 'Rp.750.000',
    features: [
      'Desain 8 Konten Feed',
      '2 Konten Video (Reels)',
      'Copywriting Caption',
      'Riset Hashtag & Trending',
      'Kalender Konten',
      '1x Revisi Per Konten',
      'Jadwal Upload Mandiri',
      'Free Template Story',
    ],
    unavailable: [6],
  },
  {
    name: 'Professional',
    priceOriginal: 'Rp.2.000.000',
    priceDiscounted: 'Rp.1.450.000',
    features: [
      'Desain 12 Konten Feed',
      '4 Konten Video (Reels)',
      'Copywriting Caption',
      'Riset Hashtag & Trending',
      'Kalender Konten',
      '2x Revisi Per Konten',
      'Jadwal Upload oleh Tim',
      'Free Template Story',
    ],
    unavailable: [],
  },
  {
    name: 'Business',
    priceOriginal: 'Rp.3.500.000',
    priceDiscounted: 'Rp.2.500.000',
    features: [
      'Desain 20 Konten Feed',
      '6 Konten Video (Reels)',
      'Copywriting Caption',
      'Riset Hashtag & Trending',
      'Kalender Konten Lengkap',
      'Unlimited Revisi',
      'Jadwal Upload oleh Tim',
      'Analisis & Laporan Bulanan',
    ],
    unavailable: [],
  },
]

export default function SocialMediaPage() {
  return (
    <div className="relative bg-[url('/hero-bg.png')] bg-cover bg-center bg-black text-white">
      <div>
      
        <section className="min-h-[70vh] h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl sm:text-9xl font-bold text-[#f22a98] mb-6">
              Social Media <br /> Management
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Kelola media sosial kamu lebih mudah, terkonsep, dan profesional bersama tim kreatif kami.
            </p>
          </div>
        </section>

   
        <section className="text-center max-w-6xl mx-auto px-6 py-10 mb-9">
          <h2 className="text-center text-[#f22a98] text-6xl font-bold mb-10">Price List</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-16">
            Kami bantu kamu membangun personal branding atau identitas bisnis melalui strategi konten yang menarik dan tepat sasaran.
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
            Siap Bikin Sosial Mediamu Lebih Aktif?
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Diskusikan kebutuhan brand kamu dengan tim kami. Gratis konsultasi dan kami bantu dari perencanaan hingga eksekusi!
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
