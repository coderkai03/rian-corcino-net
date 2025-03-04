"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SectionWrapperProps {
  id: string
  children: ReactNode
  initialActive?: boolean
}

export default function SectionWrapper({ id, children, initialActive = false }: SectionWrapperProps) {
  const [isActive, setIsActive] = useState(initialActive)
  const [isVisible, setIsVisible] = useState(initialActive)

  useEffect(() => {
    // Initial setup - only show the home section
    if (id === "home") {
      setIsActive(true)
      setIsVisible(true)
    }

    // Function to check if this section is active
    const checkActive = () => {
      // Don't update while navigating
      if (document.body.classList.contains("navigating")) return

      // Check if this section is in view
      const element = document.getElementById(id)
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top <= 200 && rect.bottom >= 200

        setIsActive(isInView)

        // Only update visibility if we're not in the middle of a navigation
        if (!document.body.classList.contains("navigating")) {
          setIsVisible(true)
        }
      }
    }

    // Set up scroll listener
    window.addEventListener("scroll", checkActive)

    // Initial check
    checkActive()

    return () => window.removeEventListener("scroll", checkActive)
  }, [id])

  return (
    <section
      id={id}
      className={`transition-opacity duration-500 min-h-screen ${isActive ? "opacity-100" : "opacity-0"}`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

