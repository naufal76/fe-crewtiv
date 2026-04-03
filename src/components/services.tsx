"use client";

import Link from "next/link";
import React from "react";
import { servicesList } from "@/constants";

export const Services = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-5xl sm:text-8xl font-bold text-[#f22a98] text-center mt-10 mb-16">
        Our Services
      </h2>

      <div className="max-w-6xl mx-5 sm:mx-auto space-y-20 mb-20">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-16"
          >
            <Link href={`/services/${service.slug}`} className="sm:w-1/3">
              <h3 className="text-xl sm:text-3xl font-medium text-white hover:text-[#f22a98] transition duration-500 cursor-pointer">
                {service.title}
              </h3>
            </Link>

            <p className="text-gray-300 text-sm sm:text-base sm:w-2/3 mt-2 sm:mt-0 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
