"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  devpost: string
  isWinner?: boolean
  hackathon: string
}

interface ProjectItemProps {
  project: Project
  index: number
  isPage?: boolean
}

export default function ProjectItem({ project, index, isPage = false }: ProjectItemProps) {
  const motionProps = isPage
    ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

  return (
    <a
      href={project.devpost}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        {...motionProps}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-yellow-400/20 hover:shadow-xl hover:shadow-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col relative"
      >
        <div className="relative h-64 w-full">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {project.isWinner && (
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              Winner 🏆
            </div>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 flex-1">{project.description}</p>
          {project.hackathon && (
            <div className="mt-4 self-start bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full text-xs font-medium shadow">
              {project.hackathon}
            </div>
          )}
        </div>
      </motion.div>
    </a>
  )
} 