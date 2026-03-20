"use client"

import { Github, Instagram, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: <Github size={20} />, href: "https://github.com/coderkai03", label: "Github" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/riancorcino/", label: "LinkedIn" },
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/rian.corcino/", label: "Instagram" },
  { icon: <Mail size={20} />, href: "mailto:rian@corcino.net", label: "Email" },
]

const pageLinks = ["Home", "About", "Experience", "Projects", "Resume"]

export default function Footer() {
  return (
    <footer className="bg-[#03030a] text-white py-10 px-6 border-t-2 border-[#ffd000]/30">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <span
              className="text-white text-xl font-bold tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Rian Corcino
            </span>
            <p className="text-[#9898b8] text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Page links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {pageLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-[#9898b8] hover:text-[#ffd000] transition-colors duration-200 text-sm tracking-[0.15em] uppercase"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3 mr-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#9898b8] hover:text-[#ffd000] transition-colors duration-200 p-2 border border-[#ffd000]/20 hover:border-[#ffd000]/50"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
