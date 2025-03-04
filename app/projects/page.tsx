"use client"

import { motion } from "framer-motion"
import projectsData from "@/data/projects.json"
import ProjectItem from "@/components/project-item"

interface Project {
  title: string
  description: string
  image: string
  devpost: string
  isWinner?: boolean
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">All Projects</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive collection of my projects and hackathon submissions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectsData.map((project: Project, index: number) => (
            <ProjectItem key={index} project={project} index={index} isPage={true} />
          ))}
        </div>
      </div>
    </main>
  )
} 