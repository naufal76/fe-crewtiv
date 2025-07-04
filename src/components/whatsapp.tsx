'use client'

import { Link } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/6287793942392"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-[#f22a98]  hover:bg-black hover:shadow-[0_0_10px_#f22a98] text-white p-4 rounded-full shadow-lg transition duration-300"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp size={30} />
    </Link>
  )
}
