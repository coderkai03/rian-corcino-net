"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-[#08080f] clip-top">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white border-l-4 border-[#ffd000] pl-6"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            RESUME
          </h2>
        </motion.div>

        {/* Mobile View Button */}
        <div className="md:hidden flex justify-start pl-6 mb-6">
          <a
            href="/assets/Rian_Corcino_Resume_DISPLAY.pdf"
            target="_blank"
            className="border border-[#ffd000] text-[#ffd000] bg-transparent px-6 py-3 font-semibold hover:bg-[#ffd000] hover:text-black transition-all duration-300 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            View Resume <ExternalLink size={16} />
          </a>
        </div>

        {/* Desktop iframe */}
        <div className="hidden md:block">
          <iframe
            src="/assets/Rian_Corcino_Resume_DISPLAY.pdf"
            className="w-full max-w-5xl h-screen max-h-[800px] shadow-lg border-l-4 border-[#ffd000]"
            title="Resume"
          />
        </div>
      </div>
    </section>
  );
}
