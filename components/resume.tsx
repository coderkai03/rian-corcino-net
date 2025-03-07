"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
          <div className="w-20 h-1 bg-blue-800 mx-auto rounded-full"></div>
        </motion.div>

        {/* Mobile View Button */}
        <div className="md:hidden flex justify-center mb-6">
          <a
            href="/assets/Rian_Corcino_Resume_DISPLAY.pdf"
            target="_blank"
            className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2"
          >
            View Resume <ExternalLink size={20} />
          </a>
        </div>

        {/* Desktop iframe */}
        <div className="hidden md:flex justify-center">
          <iframe
            src="/assets/Rian_Corcino_Resume_DISPLAY.pdf"
            className="w-full max-w-5xl h-screen max-h-[800px] rounded-lg shadow-lg"
            title="Resume"
          />
        </div>
      </div>
    </section>
  );
}
