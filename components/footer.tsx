import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-3">
            <Link href="https://github.com/Rak-Code" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/rakesh-gupta-developer/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://x.com/RakeshG33139449" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Built with Next.js and Tailwind CSS. Deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  )
}

