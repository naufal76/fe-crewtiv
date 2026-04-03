"use client";

import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/constants";
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile(640);
  const itemsPerSlide = isMobile ? 1 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 > testimonials.length - itemsPerSlide ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  return (
    <section className="bg-white text-white py-20 px-6 overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="text-5xl sm:text-7xl font-bold text-[#f22a98]">
          Kata Orang
        </h2>
        <p className="text-xl mt-4 text-black/80">
          Ini yang orang bilang tentang Crewtiv Media
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`w-full ${itemsPerSlide === 3 ? "sm:w-1/3" : "w-full"} flex-shrink-0 px-4`}
            >
              <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg transition hover:scale-[1.02] h-full">
                <FaQuoteLeft className="text-[#f22a98] text-3xl mb-4" />
                <p className="text-lg leading-relaxed mb-6">{item.message}</p>
                <hr className="border-gray-600 mb-2" />
                <p className="text-sm font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
