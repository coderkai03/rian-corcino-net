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
  hackathon: string
}

export default function Projects() {
  const previewProjects = projectsData
  .filter((project: Project) => project.isWinner)
  .slice(0, 4)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
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
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-300 font-medium"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

