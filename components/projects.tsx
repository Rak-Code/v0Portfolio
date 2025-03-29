import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Clothing Platform",
      description:
        "Implementing authentication, role-based access, and an admin dashboard. Implemented RESTful APIs for product management, shopping cart. Integrated AI Chatbot to assist users. Payment Integration using Razor pay. Added Email Notifications for payment confirmation and order updates.",
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/Rak-Code/Athena",
      demo: "https://github.com/Rak-Code/Athena",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Developed a responsive portfolio using React.js and Tailwind CSS, deployed on Netlify. Integrated a contact form with emails, achieving a successful delivery rate",
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/Rak-Code/rakportfolio",
      demo: "https://rak-code.github.io/rakportfolio/",
    },
    {
      title: "Customer Feedback System",
      description: "Developed a Customer Feedback System using Spring Boot, React, and MySQL with role-based access control for admins and customers. Admins can post topics, and customers can provide feedback. Feedback is visible to admins for review and analysis.",
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com/RakCode/customerfeedbackfront",
      demo: "https://github.com/RakCode/customerfeedbackfront",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-muted-foreground mt-2">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-none shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
