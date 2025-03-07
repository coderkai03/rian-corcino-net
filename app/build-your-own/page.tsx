"use client"

import Link from "next/link"
import { ExternalLink, Sparkle, Download } from "lucide-react"

interface Step {
  number: string;
  text: string;
  link?: string;
  code: string | null;
  download?: {
    text: string;
    link: string;
  };
}

interface Section {
  title: string;
  steps: Step[];
}

const steps: Section[] = [
  {
    title: "Generate v0 Design",
    steps: [
      {
        number: "1.1",
        text: "Visit v0.dev",
        link: "https://v0.dev",
        code: null
      },
      {
        number: "1.2",
        text: "Generate the initial design with this prompt",
        code: null,
        download: {
          text: "Download v0 Prompt",
          link: "/assets/Portfolio-Prompt.pdf"
        }
      },
      {
        number: "1.3",
        text: "Modify the design to your preferences and submit",
        code: null
      },
      {
        number: "1.4",
        text: "Copy the CLI command using the 3 dots on the top right",
        code: null
      }
    ]
  },
  {
    title: "Create Next.js Project",
    steps: [
      {
        number: "2.1",
        text: "Run these commands in your IDE:",
        code: `npx create-next-app@latest portfolio
cd portfolio
npm install framer-motion lucide-react`
      },
      {
        number: "2.2", 
        text: "Create a new repository on GitHub",
        link: "https://github.com/new",
        code: null
      },
      {
        number: "2.3",
        text: "Initialize git and push to GitHub:",
        code: `git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<project-name>.git
git push -u origin main`
      }
    ]
  },
  {
    title: "Deploy with Vercel",
    steps: [
      {
        number: "3.1",
        text: "Visit Vercel and create account",
        link: "https://vercel.com",
        code: null
      },
      {
        number: "3.2",
        text: "Link your GitHub account",
        code: null
      },
      {
        number: "3.3",
        text: "Add a new project and select your website repo",
        code: null
      },
      {
        number: "3.4",
        text: "Deploy!",
        code: null
      }
    ]
  }
]

export default function AIBuildGuide() {
  return (
    <section id="ai-guide" className="py-20 bg-blue-50 relative">
      {/* Lightning Effect Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Sparkle size={32} className="text-blue-800" /> Build your portfolio in a day with AI!
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((section, index) => (
            <div
              key={index}
              className="mb-16"
            >
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-blue-800 text-white p-3 rounded-lg">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 pt-1">{section.title}</h3>
              </div>

              <div className="space-y-6 pl-16">
                {section.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="space-y-3"
                  >
                    <p className="text-gray-600 text-lg flex items-start gap-3">
                      <span className="font-semibold text-blue-800">{step.number}</span>
                      {step.link ? (
                        <Link 
                          href={step.link}
                          className="text-blue-800 hover:text-blue-900 inline-flex items-center gap-1"
                          target="_blank"
                        >
                          {step.text} <ExternalLink size={16} />
                        </Link>
                      ) : (
                        step.text
                      )}
                    </p>
                    {step.download && (
                      <div className="mt-2 ml-10">
                        <Link
                          href={step.download.link}
                          className="inline-flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
                          target="_blank"
                          download
                        >
                          <Download size={16} />
                          {step.download.text}
                        </Link>
                      </div>
                    )}
                    {step.code && (
                      <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-lg">
                        <pre className="overflow-x-auto">
                          <code className="text-blue-800">{step.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}