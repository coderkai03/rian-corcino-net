"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Menu, X } from "lucide-react"

const sections = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "👨‍💻" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "contact", label: "Contact", icon: "📧" },
]

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section while navigating
      if (document.body.classList.contains("navigating")) return

      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle section navigation
  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileNavOpen(false)

    // Add navigating class to prevent scroll detection during navigation
    document.body.classList.add("navigating")

    // Hide all sections except the target one
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        if (section.id === sectionId) {
          element.style.display = "block"
        } else {
          element.style.display = "none"
        }
      }
    })

    // Scroll to the section
    const targetSection = document.getElementById(sectionId)
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      })

      // Remove navigating class after animation completes
      setTimeout(() => {
        document.body.classList.remove("navigating")
      }, 1000)
    }
  }

  // Handle click outside to close mobile nav
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileNavOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className="fixed top-20 left-4 z-50 md:hidden bg-blue-600 text-white p-2 rounded-full shadow-lg"
        aria-label="Toggle navigation"
      >
        {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation Sidebar */}
      <motion.div
        ref={navRef}
        initial={{ x: "-100%" }}
        animate={{ x: isMobileNavOpen || window.innerWidth >= 768 ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-full bg-white/90 backdrop-blur-md shadow-lg z-40 pt-24 w-64 md:w-20 lg:w-24"
      >
        <div className="flex flex-col items-center h-full">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => navigateToSection(section.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center w-full px-4 py-4 mb-2 transition-colors duration-300 ${
                activeSection === section.id ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"
              }`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full">
                <span className="text-xl">{section.icon}</span>
              </div>
              <span className="ml-3 md:hidden lg:inline">{section.label}</span>
              {activeSection === section.id && <ChevronRight className="ml-auto md:hidden lg:inline" size={16} />}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}

