import { Navbar } from "@/components/portfolio/Navbar"
import { Hero } from "@/components/portfolio/Hero"
import { Philosophy } from "@/components/portfolio/Philosophy"
import { Matrix } from "@/components/portfolio/Matrix"
import { CaseStudies } from "@/components/portfolio/CaseStudies"
import { TechStack } from "@/components/portfolio/TechStack"
import { Contact } from "@/components/portfolio/Contact"
import { Footer } from "@/components/portfolio/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-sand-50 text-navy-950 dark:bg-navy-950 dark:text-sand-50">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Matrix />
        <CaseStudies />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
