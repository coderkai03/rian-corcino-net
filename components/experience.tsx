"use client"

import { motion } from "framer-motion"
import WorkItem from '@/components/work-item'

const experiences = [
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    period: "Jun 2024 – Sep. 2024",
    location: "Redmond, WA",
    logo: "/assets/microsoft.png",
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
    logo: "/assets/ohdc.jpg",
    responsibilities: [
      "Built mobile application using Kotlin to educate 150K+ farmers on pesticide safety and heat stress management",
      "Implemented table partitioning using BigQuery to replace static data, reducing update time by 90%",
      "Integrated localization, translating the app into multiple languages to ensure accessibility for Hispanic farmers",
    ],
  },
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    period: "May 2022 – Jul. 2022",
    location: "Remote",
    logo: "/assets/microsoft.png",
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
    logo: "/assets/rcc.png",
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
              <WorkItem key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

