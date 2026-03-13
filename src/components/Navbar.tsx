'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)


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
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo Perusahaan" width={32} height={32} />
            <span className="text-xl font-bold text-[#f22a98]">Crewtiv</span>
          </Link>

       
          <div className="hidden md:flex items-center space-x-6">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/website-development">Website Development</NavItem>
            <NavItem href="/social-media">Social Media Management</NavItem>
            <NavItem href="/logo-design">Logo Design</NavItem>
            <NavItem href="/project-page">Project</NavItem>
          </div>

        
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-100 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* hp */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/website-development">Website Development</NavItem>
            <NavItem href="/social-media">Social Media Management</NavItem>
            <NavItem href="/logo-design">Logo Design</NavItem>
            <NavItem href="/project-page">Project</NavItem>
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
      className="block px-3 py-2 text-gray-100 hover:text-[#f22a98] font-medium transition-colors"
    >
      {children}
    </Link>
  )
}
