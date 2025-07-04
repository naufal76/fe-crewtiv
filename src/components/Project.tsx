'use client'

import Image from 'next/image'
import React from 'react'

const projects = [
  {
    src: '/projects/alfabetea.png',
    alt: 'Project 1',
    title: 'Alfabetea Brand Identity',
    description: 'Alfabetea adalah brand teh lokal yang mengusung konsep modern dan elegan, dengan sentuhan alami sebagai inti identitasnya.'
  },
  {
    src: '/projects/ayam-mripil.jpg',
    alt: 'Project 2',
    title: 'Ayam Mripil',
    description: 'Brand FnB yang menjual makanan olahan ayam'
  },
  {
    src: '/projects/azure.jpg',
    alt: 'Project 3',
    title: 'Azure Adventure',
    description: 'Agency traveling yang memberikan pengalaman liburan menyatu dengan alam'
  },
  {
    src: '/projects/open-bay.jpg',
    alt: 'Openbay',
    title: 'OpenBay',
    description: 'Perusahaan wallet untuk menyimpan asset crypto dan NFT'
  },
  {
    src: '/projects/srikandi.png',
    alt: 'Project 5',
    title: 'Srikandi Distribution',
    description: 'Perusahaan distribution yang menyediakan layanan destribusi bahan makanan pokok'
  },
  {
    src: '/projects/kopi-tara.jpg',
    alt: 'Kopi Tara',
    title: 'Srikandi Distribution',
    description: 'Brand FnB yang menjual minuman olahan kopi dengan konsep street food'
  }
]

export const Project = () => {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <h1 className="text-5xl sm:text-8xl font-bold text-[#f22a98] text-center mb-16">
        Projects
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
          >
            <Image
              src={project.src}
              alt={project.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-2xl font-semibold mb-2 text-[#f22a98]">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol tampilkan lebih */}
      <div className="mt-16 flex justify-center">
        <button className="bg-[#f22a98] hover:bg-[#d0167f] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
          Tampilkan Lebih
        </button>
      </div>
    </section>
  )
}
