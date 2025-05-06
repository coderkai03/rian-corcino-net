import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Career Goals | Rian Corcino",
  description: "My professional career goals and aspirations",
}

export default function CareerGoals() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Career Goals</h1>
        
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">🎓 Undergrad Goals</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Complete Bachelor's Degree in Computer Science</li>
              <li>Win 10+ hackathons to build technical skills</li>
              <li>Land 3 software engineering internships at top companies</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">🚀 New Grad Goals</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Secure software engineering role at a Big Tech company</li>
              <li>Build personal brand to 50k Instagram followers</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">💫 Long-term Vision</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Found and lead an innovative AI startup as CEO</li>
              <li>Achieve billionaire status through tech entrepreneurship</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
} 