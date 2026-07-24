import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Building2 } from "lucide-react"

const experienceData = [
  {
    company: "Cognifyz Technologies",
    role: "Full Stack Developer",
    duration: "January 2025 - February 2025 (2 months)",
    location: "Nagpur, Maharashtra, India",
    description: [
      "Created responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap",
      "Developed and connected REST APIs for smooth data flow between frontend and backend",
      "Built backend features using Node.js, Express.js, and MongoDB",
      "Added user authentication, form checks, and basic create/read/update/delete functions",
      "Gained solid experience working across the full stack in real-world projects",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
]

export default function Experience() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Experience</h2>
        <p className="text-muted-foreground">Professional work experience and internships</p>
      </div>

      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    {experience.company}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-foreground">{experience.role}</CardDescription>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
