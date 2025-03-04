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
    <section id="about" className="py-20 bg-white relative">
      {/* Lightning Effect Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100, y: -100 }}
          whileInView={{ opacity: 0.05, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          whileInView={{ opacity: 0.05, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
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
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Who I Am</h3>
                <p className="text-gray-600 leading-relaxed">
                  I&apos;m a passionate software engineer with experience in full-stack development, mobile applications, and
                  cloud technologies. I enjoy solving complex problems and building innovative solutions that make a
                  positive impact.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
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
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>

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
                      <div className="bg-blue-100 p-2 rounded-md text-blue-600">{category.icon}</div>
                      <h4 className="font-semibold text-gray-800">{category.title}</h4>
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
                          className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
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
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

