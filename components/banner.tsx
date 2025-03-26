import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Banner() {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Hi, I&apos;m a <span className="text-primary">Java Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Passionate about building robust backend systems and scalable web applications. With expertise in Java,
              Spring Boot, and modern frontend technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

