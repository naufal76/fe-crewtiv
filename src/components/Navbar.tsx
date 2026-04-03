'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useScroll } from '@/hooks/use-scroll'
import { useOnClickOutside } from '@/hooks/use-click-outside'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const offsetY = useScroll()
  const scrolled = offsetY > 50

  const servicesRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(servicesRef, () => setServicesOpen(false))

  return (
    <nav
      className={`fixed w-screen px-4 sm:px-6 lg:px-8 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Crewtiv Logo" width={32} height={32} />
            <span className="text-xl font-bold text-[#f22a98]">Crewtiv</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <NavItem href="/">Home</NavItem>

            {/* Dropdown */}
            <div className="relative" ref={servicesRef}>

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-100 hover:text-[#f22a98] transition"
              >
                Layanan
              </button>

              {servicesOpen && (
                <div className="absolute top-10 left-0 bg-black shadow-lg rounded-lg py-2 w-56">

                  <DropdownItem
                    href="/website-development"
                    close={() => setServicesOpen(false)}
                  >
                    Website Development
                  </DropdownItem>

                  <DropdownItem
                    href="/social-media"
                    close={() => setServicesOpen(false)}
                  >
                    Social Media Management
                  </DropdownItem>

                  <DropdownItem
                    href="/graphic-design"
                    close={() => setServicesOpen(false)}
                  >
                    Graphic Design
                  </DropdownItem>

                </div>
              )}

            </div>

            <NavItem href="/projects">Project</NavItem>

            <a
                href="https://wa.me/6287793942392?text=Halo%20kak,%20saya%20ingin%20konsultasi%20layanan%20desain%20grafis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f22a98] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#f22a98] border border-[#f22a98] transition"
                >
                Contact
                </a>

          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl p-2"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black pb-4 space-y-2 overflow-hidden"
            >
              <NavItem href="/" onClick={() => setMenuOpen(false)}>Home</NavItem>

              {/* Layanan Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-100 hover:text-[#f22a98] font-medium transition"
                >
                  <span>Layanan</span>
                  <motion.svg
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-3 border-l-2 border-[#f22a98]/40 ml-3"
                    >
                      <DropdownItem href="/website-development" close={() => { setMenuOpen(false); setMobileServicesOpen(false) }}>Website Development</DropdownItem>
                      <DropdownItem href="/social-media" close={() => { setMenuOpen(false); setMobileServicesOpen(false) }}>Social Media Management</DropdownItem>
                      <DropdownItem href="/graphic-design" close={() => { setMenuOpen(false); setMobileServicesOpen(false) }}>Desain Grafis</DropdownItem>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavItem href="/projects" onClick={() => setMenuOpen(false)}>Project</NavItem>
              <NavItem href="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  )
}

function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-gray-100 hover:text-[#f22a98] font-medium transition"
    >
      {children}
    </Link>
  )
}

function DropdownItem({
  href,
  children,
  close,
}: {
  href: string
  children: React.ReactNode
  close?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="block px-4 py-2 text-gray-200 hover:bg-[#f22a98] hover:text-white transition"
    >
      {children}
    </Link>
  )
}