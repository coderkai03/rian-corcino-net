"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Resume", href: "/#resume" },
  { name: "Contact", href: "/#contact" },
  { name: "Arcade", href: "/arcade" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 20)
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/85 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.97)" : "rgba(0,0,0,0.85)",
          borderBottom: "1px solid rgba(255,208,0,0.15)",
        }}
      >
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-white text-xl tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Rian Corcino
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#ffd000] transition-colors duration-200 text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#ffd000] transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 border-t border-[#ffd000]/20 pt-4">
              <ul className="flex flex-col space-y-4 pb-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[#8888aa] hover:text-[#ffd000] transition-colors duration-300 block text-xs tracking-[0.2em] uppercase"
                      style={{ fontFamily: 'var(--font-oswald)' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-[#ffd000]"
          style={{
            width: `${scrollProgress}%`,
            transition: "width 0.1s linear",
            opacity: 0.8,
            boxShadow: scrollProgress > 0 ? "0 0 6px #ffd000, 0 0 12px rgba(255,208,0,0.4)" : "none",
          }}
        />
      </header>
    </>
  )
}
