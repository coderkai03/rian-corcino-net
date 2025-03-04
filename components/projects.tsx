"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "NagaGuard",
    description:
      "A ReactJS full-stack web app that optimizes patient data management within clinics and hospitals. Reduced medical coding time by 99% using Gemini LLM API to automate transcription process.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Gemini", "NextJS", "Python", "Flask", "SQL"],
    github: "#",
    live: "#",
    award: "Best Startup at BearHacks",
  },
  {
    title: "SF Civil Pro",
    description:
      "A web app that personalizes study plans using generative AI for prospective civil service workers. Implemented AI study features using OpenAI LLM API which batch-generated 20+ cards and exam questions.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["OpenAI", "ReactJS", "CSV", "Firebase", "Figma"],
    github: "#",
    live: "#",
    award: "Best Use of AI in Education at SF Hacks",
  },
  {
    title: "EcoMaps",
    description:
      "A mobile app using Kotlin that analyzes 2K+ water treatment health and safety stats. Educated users by visualizing 10K+ water stats and locations using a Google Maps marker overlay.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Kotlin", "XML", "CSV", "Google Maps", "Figma"],
    github: "#",
    live: "#",
    award: "Best Mobile App at FullyHacks",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white relative">
      {/* Lightning Effect Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                {project.award && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                    {project.award}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.github}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <ExternalLink size={18} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

