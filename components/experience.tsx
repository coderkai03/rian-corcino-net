"use client"

import { motion } from "framer-motion"
import WorkItem from '@/components/work-item'

const experiences = [
  {
    company: "Ayzenberg",
    position: "AI Engineer",
    period: "Jul. 2025 – Present",
    location: "Pasadena, CA",
    logo: "/assets/ayzenberg_logo.jpg",
    responsibilities: [
      "Building AI agents for Microsoft Teams that automate 10+ workflows (file management, employee lookups, project tracking, etc.), already reaching 500+ employees within the first month",
      "Implementing a RAG pipeline using Azure Functions and Vector Indexes from 5+ sources to unify company data, including project files, SharePoint content, and employee directory, into a centralized AI-powered search system",
      "Deploying LLM/embedding models via Azure AI Foundry, ensuring scalable integration with Microsoft 365",
      "Collaborating with SVPs and IT leadership to deliver AI agents aligned with organizational priorities",
    ],
  },
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    period: "Jun. 2024 – Sep. 2024",
    location: "Redmond, WA",
    logo: "/assets/microsoft.png",
    responsibilities: [
      "Enhanced Microsoft Copilot catch-up search accuracy by 7% by optimizing queries with Azure Search",
      "Reduced search latency by 200 ms by integrating meeting summaries with C#, Azure Functions, and Kafka",
      "Increased query retrieval efficiency by 15% by optimizing search pipeline with Microsoft Knowledge Graph",
      "Learned and applied Microsoft's internal AGILE development framework through weekly sprints",
    ],
  },
  {
    company: "Oregon Human Development Corporation",
    position: "Software Engineer Intern",
    period: "Oct. 2023 – Apr. 2024",
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
    period: "May 2023 – Jul. 2023",
    location: "Remote",
    logo: "/assets/microsoft.png",
    responsibilities: [
      "Built real-time collaborations app for 100+ students using React, resulting in a 63% increase in classroom engagement",
      "Implemented messaging, polling, and feedback features using web sockets to enhance participation in real-time classrooms",
      "Designed analytics dashboard using GraphQL to surface action items and visualize student data"
    ],
  },
  {
    company: "Riverside City College",
    position: "Teaching Assistant",
    period: "Feb. 2022 – Jul. 2023",
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
    <section id="experience" className="py-20 bg-neutral-900 relative">
      {/* Lightning Effect Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20 hidden md:block"></div>

          <div className="-space-y-4">
            {experiences.map((exp, index) => (
              <WorkItem key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

