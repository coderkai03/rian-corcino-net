"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

const BUTTON_HEIGHT = 46 // p-3 (12px × 2) + icon 22px
const DEFAULT_BOTTOM = 24 // bottom-6

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [bottomPx, setBottomPx] = useState(DEFAULT_BOTTOM)

  useEffect(() => {
    const update = () => {
      setIsVisible(window.scrollY > 500)

      const footer = document.querySelector("footer")
      if (!footer) return

      const rect = footer.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        // Footer is (partially) visible — align button top with the social icons row.
        // Footer has py-10 (40px) top padding before content starts.
        const socialsTopInViewport = rect.top + 40
        const bottom = window.innerHeight - socialsTopInViewport - BUTTON_HEIGHT
        setBottomPx(Math.max(DEFAULT_BOTTOM, bottom))
      } else {
        setBottomPx(DEFAULT_BOTTOM)
      }
    }

    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          style={{ bottom: bottomPx, transition: "bottom 0.15s ease" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 p-3 border border-[#ffd000] text-[#ffd000] bg-[#03030a] hover:bg-[#ffd000] hover:text-black transition-colors duration-200 z-50 shadow-[0_0_12px_rgba(255,208,0,0.2)]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
