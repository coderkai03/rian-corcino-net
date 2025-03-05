"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import projectsData from "@/data/projects.json"
import ProjectItem from "./project-item"

interface Project {
  title: string
  description: string
  image: string
  devpost: string
  isWinner: boolean
}

export default function Projects() {
  const previewProjects = projectsData.slice(0, 4)

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
          <div className="w-20 h-1 bg-blue-800 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {previewProjects.map((project: Project, index: number) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>

        {projectsData.length > 4 && (
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

