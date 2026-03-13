'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const projects = [
  {
    src: '/projects/alfabetea.png',
    alt: 'Alfabetea',
    title: 'Alfabetea Brand Identity',
    description:
      'Alfabetea adalah brand teh lokal yang mengusung konsep modern dan elegan.',
    category: 'desain',
    date: 'January 2026',
    client: 'Alfabetea',
    role: 'Brand Designer',
    overview:
      'Pengembangan brand identity lengkap mulai dari logo, warna brand, hingga panduan visual agar brand terlihat konsisten di semua media.',
    results: [
      'Brand recognition meningkat',
      'Identitas visual lebih konsisten',
      'Feedback client sangat positif'
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma']
  },
  {
    src: '/projects/ayam-mripil.jpg',
    alt: 'Ayam Mripil',
    title: 'Ayam Mripil',
    description: 'Brand FnB yang menjual makanan olahan ayam.',
    category: 'social',
    date: 'February 2026',
    client: 'Ayam Mripil',
    role: 'Social Media Designer',
    overview:
      'Pembuatan konten social media untuk meningkatkan engagement dan awareness brand.',
    results: [
      'Engagement meningkat',
      'Visual brand lebih konsisten',
      'Audience bertambah'
    ],
    tools: ['Photoshop', 'Illustrator']
  },
  {
    src: '/projects/azure.jpg',
    alt: 'Azure Adventure',
    title: 'Azure Adventure',
    description: 'Website traveling agency.',
    category: 'website',
    link: 'https://example.com'
  },
  {
    src: '/projects/open-bay.jpg',
    alt: 'OpenBay',
    title: 'OpenBay',
    description: 'Crypto wallet modern.',
    category: 'website',
    link: 'https://example.com'
  },
  {
    src: '/projects/srikandi.png',
    alt: 'Srikandi',
    title: 'Srikandi Distribution',
    description: 'Perusahaan distribusi bahan makanan.',
    category: 'desain',
    date: 'March 2026',
    client: 'Srikandi',
    role: 'Graphic Designer',
    overview:
      'Pembuatan visual identity untuk memperkuat brand perusahaan distribusi.',
    results: [
      'Brand identity lebih kuat',
      'Desain modern',
      'Client puas'
    ],
    tools: ['Illustrator', 'Photoshop']
  }
]

export const Project = () => {

  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter)

  const handleClick = (project:any) => {

    if (project.category === 'website') {
      window.open(project.link, '_blank')
    } else {
      setSelectedProject(project)
    }

  }

  return (
    <section className="bg-black py-20 px-6 text-white">

      <h1 className="text-5xl sm:text-8xl font-bold text-[#f22a98] text-center mb-12">
        Projects
      </h1>

      {/* CATEGORY FILTER */}

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full transition ${
            filter === 'all'
              ? 'bg-[#f22a98]'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          All Projects
        </button>

        <button
          onClick={() => setFilter('website')}
          className={`px-6 py-2 rounded-full transition ${
            filter === 'website'
              ? 'bg-[#f22a98]'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          Website
        </button>

        <button
          onClick={() => setFilter('desain')}
          className={`px-6 py-2 rounded-full transition ${
            filter === 'desain'
              ? 'bg-[#f22a98]'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          Desain Grafis
        </button>

        <button
          onClick={() => setFilter('social')}
          className={`px-6 py-2 rounded-full transition ${
            filter === 'social'
              ? 'bg-[#f22a98]'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          Social Media
        </button>

      </div>

      {/* GRID PROJECT */}

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 max-w-7xl mx-auto">

        {filteredProjects.map((project, index) => (

          <div
            key={index}
            onClick={() => handleClick(project)}
            className="relative group overflow-hidden cursor-pointer"
          >

            <Image
              src={project.src}
              alt={project.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* HOVER */}

            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">

              <h3 className="text-2xl font-semibold mb-2 text-[#f22a98]">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300">
                {project.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}

      {selectedProject && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">

          <div className="bg-[#111] text-white max-w-4xl w-full rounded-2xl overflow-y-auto max-h-[90vh]">

            {/* HEADER */}

            <div className="flex justify-between items-center p-6 border-b border-white/10">

              <h2 className="text-2xl font-bold text-[#f22a98]">
                {selectedProject.title}
              </h2>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-white text-xl"
              >
                ✕
              </button>

            </div>

            {/* IMAGE */}

            <div className="p-6">

              <Image
                src={selectedProject.src}
                alt="project"
                width={900}
                height={600}
                className="rounded-xl"
              />

            </div>

            {/* INFO */}

            <div className="grid grid-cols-3 gap-4 px-6">

              <div className="border border-[#f22a98] p-4 rounded-lg">
                <p className="text-[#f22a98] text-sm">Date</p>
                <p>{selectedProject.date}</p>
              </div>

              <div className="border border-[#f22a98] p-4 rounded-lg">
                <p className="text-[#f22a98] text-sm">Client</p>
                <p>{selectedProject.client}</p>
              </div>

              <div className="border border-[#f22a98] p-4 rounded-lg">
                <p className="text-[#f22a98] text-sm">Role</p>
                <p>{selectedProject.role}</p>
              </div>

            </div>

            {/* OVERVIEW */}

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-3 text-[#f22a98]">
                Project Overview
              </h3>

              <p className="text-gray-300">
                {selectedProject.overview}
              </p>

            </div>

            {/* RESULTS */}

            <div className="px-6 pb-6">

              <h3 className="text-xl font-semibold mb-3 text-[#f22a98]">
                Key Results
              </h3>

              <ul className="space-y-2">

                {selectedProject.results?.map((r:any, i:number) => (

                  <li
                    key={i}
                    className="bg-black border border-white/10 p-3 rounded-lg"
                  >
                    {r}
                  </li>

                ))}

              </ul>

            </div>

            {/* TOOLS */}

            <div className="px-6 pb-8">

              <h3 className="text-xl font-semibold mb-3 text-[#f22a98]">
                Tools & Technologies
              </h3>

              <div className="flex flex-wrap gap-2">

                {selectedProject.tools?.map((tool:any, i:number) => (

                  <span
                    key={i}
                    className="px-3 py-1 bg-[#f22a98]/20 text-[#f22a98] rounded-full text-sm"
                  >
                    {tool}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  )
};