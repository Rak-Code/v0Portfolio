import Navbar from "@/components/navbar"
import Banner from "@/components/banner"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  )
}

