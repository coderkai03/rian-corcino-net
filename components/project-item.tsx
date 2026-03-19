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
      className="block group"
    >
      <motion.div
        {...motionProps}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-[#0e0e18] rounded-none overflow-hidden border border-[#ffd000]/10 hover:border-[#ffd000]/50 hover:-translate-y-2 hover:border-l-2 hover:border-l-[#ffd000] transition-all duration-300 h-full flex flex-col relative"
      >
        {/* Full-bleed image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {project.isWinner && (
            <div
              className="absolute top-3 right-3 bg-[#ffd000] text-black px-2 py-0.5 text-xs font-bold"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              WINNER 🏆
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col border-l-2 border-[#ffd000]/20 group-hover:border-[#ffd000] transition-colors duration-300">
          <h3
            className="text-lg font-bold text-[#f0f0f0] mb-2"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            {project.title}
          </h3>
          <p className="text-[#8888aa] text-sm flex-1">{project.description}</p>
          {project.hackathon && (
            <div
              className="mt-4 self-start border border-[#ffd000]/30 text-[#ffd000] px-2 py-0.5 text-xs"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              {project.hackathon}
            </div>
          )}
        </div>
      </motion.div>
    </a>
  )
}
