'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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

            <NavItem href="/project-page">Project</NavItem>

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
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black pb-4 space-y-2">

            <NavItem href="/">Home</NavItem>

            <p className="px-3 pt-2 text-gray-400 text-sm">Layanan</p>

            <DropdownItem href="/website-development">
              Website Development
            </DropdownItem>

            <DropdownItem href="/social-media">
              Social Media Management
            </DropdownItem>

            <DropdownItem href="/graphic-design">
              Desain Grafis
            </DropdownItem>

            <NavItem href="/project-page">Project</NavItem>

            <NavItem href="/contact">Contact</NavItem>

          </div>
        )}

      </div>
    </nav>
  )
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
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