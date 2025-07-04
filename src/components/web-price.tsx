'use client'

import React from 'react'

const packages = [
  {
    name: 'Starter',
    priceOriginal: 'Rp.2.000.000',
    priceDiscounted: 'Rp.980.000',
    features: [
      'Domain .com',
      'Hosting 2 G',
      '5 Menu',
      '1 Halaman',
      'Desain Tema Standar',
      'Perpanjang Rp.500.000',
      'Optimasi SEO',
      'Desain Responsif (Mobile)',
      'Revisi 2x (Text/Gambar)',
      'Maintenance Garansi 6 bulan',
      'Akses Dashboard Admin',
      'Backup Data Tahunan',
      'Bisa Upload/Edit Data',
    ],
    unavailable: [11, 12], // index fitur yang tidak tersedia
  },
  {
    name: 'Professional',
    priceOriginal: 'Rp.3.500.000',
    priceDiscounted: 'Rp.1.980.000',
    features: [
      'Domain .com .id',
      'Hosting 1 GB',
      '6 Menu',
      '4 Halaman',
      'Desain Tema Standar',
      'Perpanjang Rp.800.000',
      'Optimasi SEO',
      'Desain Responsif (Mobile)',
      'Revisi 3x (Text/Gambar)',
      'Maintenance Garansi 1 Tahun',
      'Akses Dashboard Admin',
      'Backup Data Tahunan',
      'Bisa Upload/Edit Data',
    ],
    unavailable: [],
  },
  {
    name: 'Business',
    priceOriginal: 'Rp.5.500.000',
    priceDiscounted: 'Rp.3.980.000',
    features: [
      'Domain .com .id',
      'Hosting 2GB + 512MB RAM',
      '8 Menu',
      '7 Halaman',
      'Desain Tema Standar',
      'Perpanjang Rp.1.000.000',
      'Optimasi SEO',
      'Desain Responsif (Mobile)',
      'Revisi 5x (Text/Gambar)',
      'Maintenance Garansi 1 Tahun',
      'Akses Dashboard Admin',
      'Backup Data Bulanan',
      'Bisa Upload/Edit Data',
    ],
    unavailable: [],
  },
]

export default function WebPrice() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <h2 className="text-center text-[#f22a98] text-8xl font-bold mb-16">Website Price List</h2>

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
  )
}
