"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: <Github size={28} />,
    href: "https://github.com/coderkai03",
    label: "Github",
    desc: "coderkai03",
  },
  {
    icon: <Linkedin size={28} />,
    href: "https://www.linkedin.com/in/riancorcino/",
    label: "LinkedIn",
    desc: "riancorcino",
  },
  {
    icon: <Instagram size={28} />,
    href: "https://www.instagram.com/rian.corcino/",
    label: "Instagram",
    desc: "rian.corcino",
  },
  {
    icon: <Mail size={28} />,
    href: "mailto:rian@corcino.net",
    label: "Email",
    desc: "rian@corcino.net",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#06060a] clip-top relative">
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
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            CONTACT
          </h2>
          <p className="text-[#9898b8] mt-4 pl-6 text-base tracking-wide">
            Let&apos;s connect — I&apos;m always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 bg-[#0e0e18] border border-[#ffd000]/20 hover:border-[#ffd000]/70 p-5 transition-all duration-200 hover:bg-[#ffd000]/5"
              aria-label={link.label}
            >
              <span className="text-[#ffd000]/60 group-hover:text-[#ffd000] transition-colors duration-200">
                {link.icon}
              </span>
              <div>
                <div
                  className="text-white font-semibold text-sm tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {link.label}
                </div>
                <div className="text-[#9898b8] text-xs mt-0.5 group-hover:text-[#ffd000]/70 transition-colors duration-200">
                  {link.desc}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
