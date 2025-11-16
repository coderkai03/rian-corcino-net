"use client"

import { motion } from "framer-motion"
import { GraduationCap, User, Zap, Code2, Blocks, Wrench } from "lucide-react"
import SchoolItem from './school-item'

const skills = {
  languages: {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: ["JavaScript", "Java", "C/C++", "C#", "Python", "SQL", "Kotlin", "HTML/CSS", "XML"],
  },
  frameworks: {
    title: "Frameworks",
    icon: <Blocks className="w-5 h-5" />,
    items: ["ReactJS", "Node.js", "Next.js", "TypeScript", "Flask", "Material UI"],
  },
  tools: {
    title: "Developer Tools",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Git", "Postman", "Vercel", "Firebase", "Clerk", "Google Console", "Supabase"],
  },
  libraries: {
    title: "Libraries",
    icon: <Zap className="w-5 h-5" />,
    items: ["Pandas", "Keras", "Pytorch", "OpenAI", "Gemini", "Vercel"],
  },
}

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400/20 p-3 rounded-lg text-yellow-400">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Who I Am</h3>
                <div className="text-gray-300 leading-relaxed">
                  <p>
                    👋 Hey there! I&apos;m Rian, an aspiring <strong>Software Engineer</strong> who&apos;s obsessed with
                    enhancing everyday tasks with AI.
                    <br /><br />
                    Major achievements that I&apos;m proud of!
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li><strong>2x</strong> SWE Intern @ Microsoft</li>
                    <li>Won <strong>7x</strong> hackathons across the US</li>
                    <li><strong>20K+</strong> followers on social media</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400/20 p-3 rounded-lg text-yellow-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <div className="space-y-6">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>

              <div className="grid gap-6">
                {Object.entries(skills).map(([key, category], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-yellow-400/20 p-2 rounded-md text-yellow-400">{category.icon}</div>
                      <h4 className="font-semibold text-white">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: index * 0.1 + i * 0.05,
                            type: "spring",
                            stiffness: 100,
                          }}
                          viewport={{ once: true }}
                          className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-400/20 transition-all duration-300 hover:-translate-y-0.5"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/10 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/10 rounded-lg z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

