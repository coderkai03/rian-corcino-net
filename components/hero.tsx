"use client"

import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const sequence = [
    "I'm an aspiring Software Engineer", 2000,
    "I'm an aspiring AI Engineer", 2000,
    "I'm a Content Creator", 2000,
    "I'm a Hack(athon)er", 2000,
    "I'm a Duolingo Nerd", 2000,
  ]
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Lightning Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-10"
        />
      </div>

      {/* Responsive right-side image: Full background on desktop, circular profile on mobile */}
      {/* Desktop: background image with gradient fade */}
      <div className="hidden sm:flex pointer-events-none absolute inset-y-0 right-0 w-1/2 items-stretch">
        <div className="relative h-full w-full">
          <Image
            src="/assets/palace-of-one-fine-art.jpg"
            alt="Rian Corcino"
            fill
            className="object-cover object-bottom md:object-center"
            priority
            style={{ objectPosition: "center bottom" }}
          />
          <div className="absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="sm:hidden flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/assets/HEADSHOT.jpg"
                alt="Rian Corcino"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            >
              Hi, I&apos;m Rian Corcino
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-blue-600 font-medium mb-6 h-16"
            >
              <TypeAnimation
                sequence={sequence}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="inline-block"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-blue-300/50 flex items-center group"
              >
                View My Work
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Spacer to preserve layout on larger screens */}
          <div className="hidden md:block flex-1" />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

