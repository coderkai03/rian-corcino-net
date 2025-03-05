"use client"

import { motion } from "framer-motion"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex justify-center">
          <iframe
            src="/assets/Rian_Corcino_Resume_DISPLAY.pdf"
            className="w-full max-w-5xl h-screen max-h-[800px] rounded-lg shadow-lg"
            title="Resume"
          />
        </div>
      </div>
    </section>
  )
} 