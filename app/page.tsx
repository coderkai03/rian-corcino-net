import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </main>
  )
}

