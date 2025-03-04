import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface WorkItemProps {
  company: string
  position: string
  period: string
  location: string
  logo: string
  responsibilities: string[]
  index: number
}

export default function WorkItem({ company, position, period, location, logo, responsibilities, index }: WorkItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>

        {/* Content Card */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 h-full">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-4 overflow-hidden">
                <Image src={logo || "/placeholder.svg"} alt={company} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{company}</h3>
                <p className="text-blue-600 font-medium">{position}</p>
              </div>
            </div>

            <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{period}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span>{location}</span>
              </div>
            </div>

            <ul className="space-y-2 text-gray-600">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Empty Space for Timeline */}
        <div className="w-full md:w-2/12"></div>

        {/* Date for Desktop */}
        <div className="hidden md:block w-full md:w-5/12"></div>
      </div>
    </motion.div>
  )
} 