"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Resume", href: "/#resume" },
  { name: "Contact", href: "/#contact" },
]

const moreLinks = [
  { name: "Career Goals", href: "/career-goals" },
  { name: "Cover Letter", href: "/cover-letter" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  useEffect(() => {
    // Add/remove overflow hidden on body when menu is opened
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop blur overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="text-2xl font-bold text-blue-800 flex items-center">
                <span className="mr-1">⚡</span> Rian Corcino
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="hidden md:flex space-x-8"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-gray-700 hover:text-blue-800 font-medium transition-colors duration-300 relative group pb-1`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="relative"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <button className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-300 flex items-center gap-1">
                  More <ChevronDown size={16} className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMoreOpen && (
                  <>
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="absolute top-full left-0 right-0 h-2" />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    >
                      {moreLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                )}
              </motion.li>
            </motion.ul>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-800 transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <ul className="flex flex-col space-y-4 pb-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                >
                  <div className="text-gray-700 font-medium">More</div>
                  <ul className="ml-4 mt-2 space-y-2">
                    {moreLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (navLinks.length + index) * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-300 block"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </nav>
      </header>
    </>
  )
}

