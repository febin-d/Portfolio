import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"

export default function Home() {
  return (
    <main className="bg-background min-h-screen relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
