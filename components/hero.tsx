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
    <section id="home" className="min-h-screen h-screen sm:h-auto flex items-start sm:items-center justify-center pt-16 relative overflow-hidden">
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

      {/* Mobile: full-bleed background image */}
      <div className="sm:hidden pointer-events-none absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src="/assets/palace-of-one-fine-art.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        </div>
      </div>

      {/* Desktop: right-side image with gradient fade */}
      <div className="hidden sm:flex pointer-events-none absolute inset-y-0 right-0 w-1/2 items-stretch">
        <div
          className="relative h-full w-full [mask-image:linear-gradient(to_right,transparent_0%,black_35%)] [mask-size:auto] [mask-repeat:no-repeat]"
        >
          <Image
            src="/assets/palace-of-one-fine-art.jpg"
            alt="Rian Corcino"
            fill
            className="object-cover object-bottom md:object-center"
            priority
            style={{ objectPosition: "center bottom" }}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-12 md:py-24 flex flex-col sm:block sm:min-h-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 flex-initial sm:flex-initial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex-initial sm:flex-1 flex flex-col w-full text-center md:text-left sm:justify-start"
          >
            {/* Intro text — 25% down on mobile, then buttons directly below */}
            <div className="pt-[10vh] sm:pt-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white sm:text-gray-800 mb-4 drop-shadow-lg sm:drop-shadow-none"
              >
                Hi, I&apos;m Rian Corcino
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl text-white sm:text-blue-600 font-medium mb-2 sm:mb-6 h-16"
              >
                <TypeAnimation
                  sequence={sequence}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="inline-block"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Spacer to preserve layout on larger screens */}
          <div className="hidden md:block flex-1" />
        </div>
      </div>

      {/* Scroll Down Indicator — at bottom; white on mobile for contrast on image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-white/90 hover:text-white sm:text-gray-500 sm:hover:text-blue-600 transition-colors duration-300"
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

