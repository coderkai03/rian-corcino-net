"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-600 text-white relative overflow-hidden">
      {/* Lightning Effect Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"
        />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <Link href="#home" className="text-2xl font-bold flex items-center mb-4">
              <span className="mr-1">⚡</span> Rian Corcino
            </Link>
            <p className="text-blue-100 mb-6 max-w-md">
              Software engineer passionate about building innovative solutions and creating impactful experiences
              through technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/coderkai03"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/riancorcino/"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/rian.corcino/"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:rian@corcino.net"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Experience", "Projects"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a
                  href="mailto:rian@corcino.net"
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                >
                  rian@corcino.net
                </a>
              </li>
              <li>
                <p className="text-blue-100">Feel free to reach out for collaborations or just a friendly chat!</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-blue-500 mt-12 pt-8 text-center">
          <p className="text-blue-100">© {new Date().getFullYear()} Rian Corcino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

