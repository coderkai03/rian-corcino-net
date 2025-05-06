import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cover Letter | Rian Corcino",
  description: "My professional cover letter",
}

export default function CoverLetter() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cover Letter</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Dear Hiring Manager,
            </p>
            
            <p className="text-gray-700 mb-4">
              As a Computer Science student at Western Governors University, I'm driven by a vision to leverage technology for meaningful impact. My journey has been shaped by a passion for <strong>building solutions</strong> that address real-world challenges, from enhancing workplace productivity to empowering communities through accessible technology.
            </p>
            
            <p className="text-gray-700 mb-4">
              My experience at Microsoft has been transformative, not just in terms of technical growth but in understanding how enterprise AI can revolutionize workplace efficiency. Working on Microsoft Copilot, I saw firsthand how large language models and intelligent systems can augment human capabilities at scale. This experience ignited my fascination with <strong>enterprise AI technology</strong> and its potential to transform how organizations operate and innovate.
            </p>
            
            <p className="text-gray-700 mb-4">
              What truly excites me is the intersection of <strong>technology and social impact</strong>. At Oregon Human Development Corp, I witnessed how technology can bridge gaps in education and accessibility. Building an app that reached 68,000+ farmers wasn't just about coding – it was about understanding user needs and creating solutions that make a real difference in people's lives. This experience has shaped my approach to product development, emphasizing user-centric design and scalable solutions.
            </p>
            
            <p className="text-gray-700 mb-4">
              My work on Synergy, a team-matching platform for hackathons, reflects my commitment to fostering innovation and collaboration in the tech community. By helping 4,000+ hackers find their perfect teammates, I've seen how technology can create meaningful connections and accelerate innovation. This project embodies my belief in the power of <strong>community-driven development</strong> and the importance of building platforms that enable others to succeed.
            </p>
            
            <p className="text-gray-700 mb-4">
              Looking ahead, I'm particularly interested in Software Engineering with a focus on enterprise AI applications. I see an opportunity to contribute my experience in building scalable, user-focused applications while learning from your team's expertise in Full Stack Development. I'm excited about the possibility of joining a team that values both technical excellence and meaningful impact, especially in the rapidly evolving landscape of enterprise AI technology.
            </p>
            
            <p className="text-gray-700 mb-4">
              I would welcome the opportunity to discuss how my vision and experience align with your team's goals. Thank you for considering my application.
            </p>
            
            <p className="text-gray-700">
              Sincerely,<br />
              Rian Corcino
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 