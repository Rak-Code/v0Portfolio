import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, GitGraphIcon as Git } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Java", "Spring Boot", "MySQL"],
    },
    {
      title: "Version Control",
      icon: <Git className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p className="text-muted-foreground mt-2">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

