import Image from "next/image"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface WorkItemProps {
  company: string
  position: string
  period: string
  location: string
  logo: string
  responsibilities: ReactNode[]
  index: number
}

export default function WorkItem({ company, position, period, location, logo, responsibilities, index }: WorkItemProps) {
  const num = String(index + 1).padStart(2, "0")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative border-b border-[#ffd000]/10 py-10 hover:border-l-4 hover:border-l-[#ffd000] hover:pl-4 transition-all duration-200"
    >
      {/* Top row: number + company info + logo */}
      <div className="flex items-start gap-6 mb-6">
        {/* Big number */}
        <span
          className="text-7xl font-bold text-[#ffd000]/25 group-hover:text-[#ffd000]/70 transition-colors duration-300 leading-none select-none flex-shrink-0 hidden sm:block"
          style={{ fontFamily: 'var(--font-oswald)' }}
        >
          {num}
        </span>

        {/* Company + position + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
            <h3
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              {company}
            </h3>
            <span className="text-[#ff6a00] text-lg font-medium" style={{ fontFamily: 'var(--font-oswald)' }}>
              {position}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-[#b0b0c8] text-sm">
            <span>{period}</span>
            <span className="text-[#ffd000]/40">·</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Logo */}
        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <Image src={logo || "/placeholder.svg"} alt={company} fill className="object-contain" />
        </div>
      </div>

      {/* Responsibilities */}
      <ul className="space-y-2 text-[#c0c0d5] text-base pl-0 sm:pl-[calc(theme(spacing.7)+1.5rem+1.5rem)]">
        {responsibilities.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[#ffd000]/60 mt-1 flex-shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
