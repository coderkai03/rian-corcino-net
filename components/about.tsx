"use client"

import { motion } from "framer-motion"
import { Code2, Blocks, Wrench, Zap, Key, Coffee, Hash, Database, Brain, BarChart2, Cloud } from "lucide-react"
import SchoolItem from './school-item'
import {
  SiJavascript, SiTypescript, SiCplusplus, SiPython, SiMysql, SiKotlin, SiHtml5,
  SiReact, SiNodedotjs, SiNextdotjs, SiFlask, SiMui, SiExpress,
  SiPostman, SiVercel, SiFirebase, SiGooglecloud, SiSupabase, SiGraphql, SiDocker,
  SiPandas, SiNumpy, SiOpencv, SiPytorch, SiTensorflow, SiKeras, SiOpenai,
} from "react-icons/si"
import type { ReactNode } from "react"

interface SkillItem {
  label: string
  icon: ReactNode
  color: string
}

interface SkillCategory {
  title: string
  icon: ReactNode
  items: SkillItem[]
}

const skills: Record<string, SkillCategory> = {
  languages: {
    title: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    items: [
      { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { label: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { label: "Java", icon: <Coffee size={14} />, color: "#ED8B00" },
      { label: "C/C++", icon: <SiCplusplus />, color: "#00599C" },
      { label: "C#", icon: <Hash size={14} />, color: "#239120" },
      { label: "Python", icon: <SiPython />, color: "#3776AB" },
      { label: "SQL", icon: <SiMysql />, color: "#4479A1" },
      { label: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
      { label: "HTML/CSS", icon: <SiHtml5 />, color: "#E34F26" },
    ],
  },
  frameworks: {
    title: "Frameworks",
    icon: <Blocks className="w-4 h-4" />,
    items: [
      { label: "React", icon: <SiReact />, color: "#61DAFB" },
      { label: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { label: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
      { label: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { label: "Flask", icon: <SiFlask />, color: "#ffffff" },
      { label: "Material UI", icon: <SiMui />, color: "#007FFF" },
      { label: "ExpressJS", icon: <SiExpress />, color: "#ffffff" },
    ],
  },
  tools: {
    title: "Developer Tools",
    icon: <Wrench className="w-4 h-4" />,
    items: [
      { label: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { label: "Vercel", icon: <SiVercel />, color: "#ffffff" },
      { label: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { label: "Clerk", icon: <Key size={14} />, color: "#ffd000" },
      { label: "GCP", icon: <SiGooglecloud />, color: "#4285F4" },
      { label: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
      { label: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
      { label: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { label: "ChromaDB", icon: <Database size={14} />, color: "#ffd000" },
      { label: "Azure AI Foundry", icon: <Cloud size={14} />, color: "#0078D4" },
    ],
  },
  libraries: {
    title: "Libraries",
    icon: <Zap className="w-4 h-4" />,
    items: [
      { label: "OpenAI", icon: <SiOpenai />, color: "#ffffff" },
      { label: "Anthropic", icon: <Brain size={14} />, color: "#ffd000" },
      { label: "NumPy", icon: <SiNumpy />, color: "#013243" },
      { label: "Pandas", icon: <SiPandas />, color: "#150458" },
      { label: "Scikit Learn", icon: <BarChart2 size={14} />, color: "#F7931E" },
      { label: "MatplotLib", icon: <BarChart2 size={14} />, color: "#11557C" },
      { label: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
      { label: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
      { label: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      { label: "Keras", icon: <SiKeras />, color: "#D00000" },
    ],
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
                        className="flex items-center gap-1.5 border border-[#ffd000]/40 text-[#ffd000] px-3 py-1.5 text-sm font-medium hover:border-[#ffd000]/80 hover:bg-[#ffd000]/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                        style={{ fontFamily: 'var(--font-oswald)' }}
                      >
                        <span style={{ color: item.color, display: "flex", alignItems: "center", fontSize: "1rem" }}>
                          {item.icon}
                        </span>
                        {item.label}
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
