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
    <section id="projects" className="py-24 bg-[#06060a] clip-top relative">
      <div className="container mx-auto px-6 lg:px-16">
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
            MY PROJECTS
          </h2>
          <p className="text-[#c0c0d5] text-base mt-4 pl-6 max-w-xl">
            Hackathon wins and personal projects — each one a new challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {previewProjects.map((project: Project, index: number) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>

        {projectsData.length > 4 && (
          <div className="mt-12 pl-0">
            <Link
              href="/projects"
              className="inline-block bg-transparent text-[#ffd000] px-8 py-3 border border-[#ffd000] hover:bg-[#ffd000] hover:text-black transition-all duration-300 font-semibold text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
