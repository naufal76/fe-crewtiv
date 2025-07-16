'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import HowToWebsite from '@/components/how-to-web'
import ImportantWebsite from '@/components/important-web'
import InfographicWeb from '@/components/infografik-web'
import WebPrice from '@/components/web-price'
import { fadeUp, containerStagger } from '../../../lib/variants'

export default function WebDevPage() {
  return (
    <div className="relative bg-[url('/hero-bg.png')] bg-cover bg-center bg-black text-white">
      <div>
        {/* Hero */}
        <section className="min-h-[70vh] h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
          >
            <h1 className="text-7xl sm:text-9xl font-bold text-[#f22a98] mb-6">
              Website <br /> Development
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Layanan pembuatan website profesional, cepat, dan harga terjangkau. Cocok untuk UMKM, personal branding, atau bisnis yang ingin tampil online dengan optimal.
            </p>
          </motion.div>

          {/* USP Cards */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                title: 'Desain Responsif',
                desc: 'Website tampil optimal di berbagai perangkat, dari desktop hingga smartphone.',
              },
              {
                title: 'Optimasi SEO Dasar',
                desc: 'Website dioptimalkan agar mudah ditemukan di Google dan mesin pencari lainnya.',
              },
              {
                title: 'Mudah Dikelola',
                desc: 'Dilengkapi dashboard admin untuk edit konten tanpa perlu coding.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0_0_10px_#f22a98]"
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Price List */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center max-w-6xl mx-auto px-6 py-10 mb-9"
        >
          <WebPrice />
        </motion.section>

        {/* Other Sections */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <HowToWebsite />
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <InfographicWeb />
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <ImportantWebsite />
        </motion.div>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="py-20 text-center px-6"
        >
          <h3 className="text-5xl sm:text-6xl font-bold text-[#f22a98] mb-6">
            Siap Bangun Website Impianmu?
          </h3>
          <p className="text-white/80 mb-6 max-w-xl text-lg mx-auto">
            Hubungi kami sekarang dan dapatkan website profesional dengan harga bersahabat. Karena kami percaya, hal keren gak harus mahal.
          </p>
          <a
            href="https://wa.me/6287793942392"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f22a98] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#f22a98] transition"
          >
            Konsultasi Gratis Sekarang
          </a>
        </motion.section>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
