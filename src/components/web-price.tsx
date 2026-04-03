"use client";

import React from "react";
import { webPackages as packages } from "@/constants";

export default function WebPrice() {
  return (
    <section className="bg-black text-white py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-center text-[#f22a98] text-8xl font-bold mb-5">
        Website Price List
      </h2>
      <p className="text-center max-w-6xl  text-lg text-white/80 leading-relaxed mb-16">
        Pilih paket yang sesuai dengan kebutuhan dan anggaran kamu. Kami
        menyediakan layanan lengkap, dari domain, hosting, desain responsif,
        hingga optimasi SEO.
      </p>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center gap-10 sm:min-w-4xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-8 bg-black shadow-[0_0_10px_#f22a98] hover:shadow-[0_0_30px_#f22a98] transition duration-300 flex flex-col items-center w-full min-w-[350px]"
          >
            <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
            <p className="text-lg text-gray-300 line-through">
              {pkg.priceOriginal}
            </p>
            <p className="text-3xl font-bold shadow-[0_0_10px_#f22a98] px-4 py-2 rounded-xl mt-1 mb-6">
              {pkg.priceDiscounted}
            </p>

            <ul className="text-center space-y-3 text-md">
              {pkg.features.map((feat, i) => (
                <li
                  key={i}
                  className={
                    pkg.unavailable.includes(i)
                      ? "text-gray-500 line-through"
                      : "text-white"
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
  );
}
