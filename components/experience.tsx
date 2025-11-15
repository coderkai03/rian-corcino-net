"use client"

import { motion } from "framer-motion"
import WorkItem from '@/components/work-item'

const experiences = [
  {
    company: "Ayzenberg",
    position: "AI Engineer Intern",
    period: "Jul. 2025 – Present",
    location: "Pasadena, CA",
    logo: "/assets/ayzenberg.jpg",
    responsibilities: [
      <>Developing internal Copilot agents adopted by <strong>160+</strong> employees, automating <strong>14+</strong> cross-department workflows spanning HR, finance, and project management; reduced manual task time by <strong>40%</strong> and enabled instant access to company data</>,
      <>Achieved <strong>98%</strong> response accuracy and <strong>200ms</strong> query latency through optimized Azure RAG pipelines</>,
      <>Managing LLM/embedding models via Azure AI Foundry, ensuring scalable integration with Microsoft 365</>,
      <>Collaborating with SVPs and IT leadership to deliver AI agents aligned with organizational priorities</>,
    ],
  },
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    period: "Jun. 2024 – Sep. 2024",
    location: "Redmond, WA",
    logo: "/assets/microsoft.png",
    responsibilities: [
      <>Enhanced Microsoft Copilot catch-up search accuracy by <strong>7%</strong> by optimizing queries with Azure Search</>,
      <>Reduced search latency by <strong>200 ms</strong> by integrating meeting summaries with C#, Azure Functions, and Kafka</>,
      <>Increased query retrieval efficiency by <strong>15%</strong> by optimizing search pipeline with Microsoft Knowledge Graph</>,
      <>Learned and applied Microsoft’s internal AGILE development framework through weekly sprints</>,
    ],
  },
  {
    company: 'OHDC',
    position: 'Software Engineer Intern',
    period: 'Oct. 2023 - Apr. 2024',
    location: 'Los Angeles, CA',
    logo: '/assets/ohdc.jpg',
    responsibilities: [
      <>Built an Android app using Kotlin to educate <strong>68,000+</strong> farmers on pesticide safety and heat stress management</>,
      <>Implemented table partitioning using BigQuery to replace static data, reducing update time by <strong>90%</strong></>,
      <>Enhanced accessibility by automating translating for <strong>3+</strong> languages for Hispanic farmers using localization</>,
    ],
  },
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    period: "May 2023 – Jul. 2023",
    location: "Remote",
    logo: "/assets/microsoft.png",
    responsibilities: [
      <>Built real-time collaborations app for <strong>100+</strong> students using React, resulting in a <strong>63%</strong> increase in classroom engagement</>,
      <>Implemented messaging, polling, and feedback features using web sockets to enhance participation in real-time</>,
      <>Designed an analytics dashboard using GraphQL to surface action items and visualize student data</>,
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
          <div className="w-20 h-1 bg-blue-800 mx-auto rounded-full"></div>
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

