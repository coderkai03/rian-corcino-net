"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: <Github size={24} />, href: "https://github.com/coderkai03", label: "Github" },
  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/riancorcino/", label: "LinkedIn" },
  { icon: <Instagram size={24} />, href: "https://www.instagram.com/rian.corcino/", label: "Instagram" },
  { icon: <Mail size={24} />, href: "mailto:rian@corcino.net", label: "Email" },
]

const pageLinks = ["Home", "About", "Experience", "Projects"]

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start max-w-4xl mx-auto mb-12">
          {/* Left side: Page Links */}
          <motion.div 
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {pageLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-blue-100 hover:text-white transition-colors duration-300 text-lg"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Right side: Social Links and Email */}
          <motion.div 
            className="flex flex-col items-end gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-4">
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
            </div>
            <a
              href="mailto:rian@corcino.net"
              className="text-blue-100 hover:text-white transition-colors duration-300 text-lg"
            >
              rian@corcino.net
            </a>
          </motion.div>
        </div>

        {/* Copyright centered at bottom */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} Rian Corcino. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

