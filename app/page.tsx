import Image from "next/image"
import { Github, Linkedin, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { personalInfo } from "./data/personalInfo"
import { researchInterests } from "./data/researchInterests"
import { news } from "./data/news"
import { resume } from "./data/resume"

export default function Home() {
  const iconMap = {
    Linkedin,
    BookOpen,
    Github,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{personalInfo.name}</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#news" className="font-medium hover:text-primary transition-colors">
              News
            </a>
            <a href="#resume" className="font-medium hover:text-primary transition-colors">
              Resume
            </a>
            <a href="#publications" className="font-medium hover:text-primary transition-colors">
              Publications
            </a>
            <a href="#projects" className="font-medium hover:text-primary transition-colors">
              Projects
            </a>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="home" className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h1>
              <h2 className="text-xl text-muted-foreground mb-6">{personalInfo.title}</h2>
              <p className="text-lg mb-6">{personalInfo.bio}</p>
              <div className="flex space-x-4">
                {/* <Button variant="default">Contact Me</Button> */}
                {/* <Button variant="outline">Download CV</Button> */}
              </div>
              <div className="flex mt-6 space-x-4">
                {personalInfo.socialLinks.map((link, index) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap]
                  return (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <Icon className="h-6 w-6 text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                <Image
                  src="/images/my_image.jpeg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {researchInterests.map((interest, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium">{interest}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="news" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {news.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Badge className="mt-1 mr-3">{item.year}</Badge>
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="resume" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
          <Tabs defaultValue="education">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
              <Card>
                <CardContent className="p-6 space-y-6">
                  {resume.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution} | {edu.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardContent className="p-6 space-y-6">
                  {resume.experience.map((exp, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.institution} | {exp.period}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="publications">
              <Card>
                <CardContent className="p-6 space-y-4">
                  {resume.publications.map((pub, index) => (
                    <div key={index} className="flex items-start">
                      <Badge className="mt-1 mr-3">{pub.year}</Badge>
                      <p>{pub.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">{personalInfo.name}</h2>
              <p className="mb-4">{personalInfo.title}</p>
              <p>Specializing in AI Security, NLP, and Cybersecurity</p>
            </div>
            <div>
              {/* <h2 className="text-xl font-bold mb-4">Contact</h2> */}
              {/* <p className="mb-2">King Khalid University</p>
              <p className="mb-2">Muhayil Aseer, Saudi Arabia</p>
              <p>Email: contact@example.com</p> */}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

