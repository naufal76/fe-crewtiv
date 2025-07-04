'use client'
import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <section className="bg-white pt-20 px-6 text-center">
      <h1 className="text-5xl sm:text-9xl font-bold text-[#f22a98] mb-8">
        Who we are?
      </h1>

      <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed">
        Crewtiv Media adalah creative agency yang berfokus pada solusi digital menyeluruh.
        Sejak didirikan pada tahun 2020, kami telah berkembang menjadi tim yang kreatif dan profesional.
        Dengan keahlian dalam pengembangan website, desain logo yang menarik, dan strategi social media
        management yang efektif, kami membantu brand Anda tampil menonjol, mudah dikenal,
        dan relevan di era digital.
      </p>

 
      <div className="flex justify-center">
        <Image
          src="/about.png"
          alt="Character"
          width={600}
          height={600}
          className="h-auto object-contain"
        />
      </div>
    </section>
  )
}
