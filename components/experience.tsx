"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    period: "Jun 2024 – Sep. 2024",
    location: "Redmond, WA",
    logo: "/placeholder.svg?height=80&width=80",
    responsibilities: [
      "Enhanced catch-up search accuracy by 7% in Microsoft Copilot by optimizing queries with C# and Azure Search",
      "Reduced search latency by 200 ms by integrating meeting summaries with C#, Azure Functions, and Kafka",
      "Increased query retrieval efficiency by 15% by optimizing search pipeline with C# and Microsoft Graph",
    ],
  },
  {
    company: "TuneLink",
    position: "Software Engineer Intern",
    period: "Oct 2023 – Apr. 2024",
    location: "Riverside, CA",
    logo: "/placeholder.svg?height=80&width=80",
    responsibilities: [
      "Built mobile application using Kotlin to educate 150K+ farmers on pesticide safety and heat stress management",
      "Implemented table partitioning using BigQuery to replace static data, reducing update time by 90%",
      "Integrated localization, translating the app into multiple languages to ensure accessibility for Hispanic farmers",
    ],
  },
  {
    company: "Microsoft",
    position: "New Technologist Intern",
    period: "May 2022 – Jul. 2022",
    location: "Remote",
    logo: "/placeholder.svg?height=80&width=80",
    responsibilities: [
      "Built React web app for 100+ daily active users; 60% higher engagement between student users",
      "Designed an analytics dashboard using GraphQL, managing over 2,000 weekly events and gaining practical experience in data processing",
    ],
  },
  {
    company: "Riverside City College",
    position: "Teaching Assistant",
    period: "Feb 2022 – Jul. 2023",
    location: "Riverside, CA",
    logo: "/placeholder.svg?height=80&width=80",
    responsibilities: [
      "Mentored Data Structures and Algorithms in C/C++, Java, Python, and JavaScript, resulting in a 90% pass rate",
      "Led weekly labs and provided feedback to 300+ students on assignments, projects, and exams",
      "Built full-stack automated code grading app; 70% faster reviews, scaled to 300+ concurrent users",
      "Integrated LeetCode challenges into course curriculum, boosting students' problem-solving skills by 35%",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-blue-50 relative">
      {/* Lightning Effect Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-5/12 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 h-full">
                      <div className="flex items-center mb-4">
                        <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-lg border border-gray-200">
                          <Image src={exp.logo || "/placeholder.svg"} alt={exp.company} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                          <p className="text-blue-600 font-medium">{exp.position}</p>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-gray-600">
                        {exp.responsibilities.map((item, i) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

