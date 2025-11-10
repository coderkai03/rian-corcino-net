"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: <Github size={24} />, href: "https://github.com/coderkai03", label: "Github" },
  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/riancorcino/", label: "LinkedIn" },
  { icon: <Instagram size={24} />, href: "https://www.instagram.com/rian.corcino/", label: "Instagram" },
  { icon: <Mail size={24} />, href: "mailto:rian@corcino.net", label: "Email" },
]

const pageLinks = ["Home", "About", "Experience", "Projects", "Resume"]

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto mb-12 gap-8">
          {/* Left side: Page Links */}
          <motion.div 
            className="flex flex-wrap justify-center sm:justify-start gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {pageLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-blue-200 hover:text-white transition-colors duration-300 text-lg"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Right side: Social Links */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          {/* Copyright */}
          <motion.div
            className="text-center w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} Rian Corcino. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

