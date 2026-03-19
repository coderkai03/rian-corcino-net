"use client"

import { motion } from "framer-motion"
import { Code2, Blocks, Wrench, Zap } from "lucide-react"
import SchoolItem from './school-item'

const skills = {
  languages: {
    title: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    items: ["JavaScript", "Java", "C/C++", "C#", "Python", "SQL", "Kotlin", "HTML/CSS", "XML"],
  },
  frameworks: {
    title: "Frameworks",
    icon: <Blocks className="w-4 h-4" />,
    items: ["ReactJS", "Node.js", "Next.js", "TypeScript", "Flask", "Material UI"],
  },
  tools: {
    title: "Developer Tools",
    icon: <Wrench className="w-4 h-4" />,
    items: ["Git", "Postman", "Vercel", "Firebase", "Clerk", "Google Console", "Supabase"],
  },
  libraries: {
    title: "Libraries",
    icon: <Zap className="w-4 h-4" />,
    items: ["Pandas", "Keras", "Pytorch", "OpenAI", "Gemini", "Vercel"],
  },
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a12] clip-top relative">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section heading — left-aligned with border accent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white border-l-4 border-[#ffd000] pl-6"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-16 items-start">
          {/* Left: Who I Am + Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3
                className="text-2xl font-bold text-white mb-4 border-l-2 border-[#ffd000] pl-4"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Who I Am
              </h3>
              <div className="text-[#c0c0d5] text-base leading-relaxed pl-4">
                <p>
                  👋 Hey there! I&apos;m Rian, an aspiring <strong className="text-white">Software Engineer</strong> who&apos;s obsessed with
                  enhancing everyday tasks with AI.
                  <br /><br />
                  Major achievements that I&apos;m proud of!
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong className="text-white">2x</strong> SWE Intern @ Microsoft</li>
                  <li>Won <strong className="text-white">7x</strong> hackathons across the US</li>
                  <li><strong className="text-white">20K+</strong> followers on social media</li>
                </ul>
              </div>
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-white mb-4 border-l-2 border-[#ffd000] pl-4"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Education
              </h3>
              <div className="pl-4 space-y-6">
                <SchoolItem
                  logo="/assets/wgu-logo.png"
                  logoAlt="WGU Logo"
                  schoolName="Western Governors University"
                  degree="Bachelor's in Computer Science"
                  years="2024 - 2026"
                />
                <SchoolItem
                  logo="/assets/rcc.png"
                  logoAlt="RCC Logo"
                  schoolName="Riverside City College"
                  degree="Associate's in Computer Science"
                  years="2021 - 2024"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-bold text-white mb-8 border-l-2 border-[#ffd000] pl-4"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Technical Skills
            </h3>

            <div className="grid gap-6">
              {Object.entries(skills).map(([key, category], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-[#0e0e18] border-t-2 border-[#ffd000] pt-4 px-4 pb-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#ffd000]">{category.icon}</span>
                    <h4
                      className="font-semibold text-white text-sm tracking-widest uppercase"
                      style={{ fontFamily: 'var(--font-oswald)' }}
                    >
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <span
                        key={i}
                        className="border border-[#ffd000]/40 text-[#ffd000] px-4 py-1.5 text-sm font-medium hover:border-[#ffd000]/80 hover:bg-[#ffd000]/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                        style={{ fontFamily: 'var(--font-oswald)' }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
