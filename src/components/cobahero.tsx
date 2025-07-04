'use Client'

import Splinehero from './splinehero'

export default function Cobahero() {
  return (
    <section className="relative bg-[url('/hero-bg.png')] bg-cover bg-center bg-fixed text-white overflow-hidden min-h-screen flex items-center px-3">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto gap-5 py-6">
       <div className=" max-w-9xl ">
          <h2 className="text-7xl ml-5 sm:text-8xl font-bold leading-tight">
            Make <br />
            Your Brand <br />
            <span className="text-[#f22a98]">Visible</span>
          </h2>
          <p className="max-w-xl mt-6 ml-5 sm:text-xl text-white text-lg">
            Solusi kreatif untuk kehadiran digital kamu, Yuk bangun sesuatu yang luar biasa bersama!
          </p>

          <button className="mt-8 ml-5 px-6 py-3 rounded-full text-white font-semibold bg-[#f22a98] hover:bg-white hover:text-[#f22a98] transition duration-300 shadow-lg">
            EXPLORE NOW →
          </button>
        </div>

       
        <div className=" md:w-1/2 h-[500px] sm:h-[900px]">
         <Splinehero/>
        </div>

      </div>
    </section>
  )
}
