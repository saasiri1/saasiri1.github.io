import Image from "next/image"
import {
  Github,
  Linkedin,
  BookOpen,
  GlobeLockIcon,
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { personalInfo } from "./data/personalInfo"
import { researchInterests } from "./data/researchInterests"
import { news } from "./data/news"
import { resume } from "./data/resume"
import { publications } from "./data/publications"

const iconMap = {
  Linkedin,
  BookOpen,
  Github,
  GlobeLockIcon,
}

const newsTypeConfig = {
  publication: {
    icon: FileText,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    label: "Publication",
  },
  position: {
    icon: Briefcase,
    color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    label: "Position",
  },
  award: {
    icon: Award,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    label: "Award",
  },
  milestone: {
    icon: GraduationCap,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    label: "Milestone",
  },
}

const featuredPublications = publications.filter((p) => p.featured)

const publicationsByYear = publications.reduce(
  (acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = []
    acc[pub.year].push(pub)
    return acc
  },
  {} as Record<string, typeof publications>,
)
const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a))

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold">{personalInfo.name}</span>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
            <a href="#news" className="font-medium hover:text-primary transition-colors">News</a>
            <a href="#resume" className="font-medium hover:text-primary transition-colors">Resume</a>
            <a href="#publications" className="font-medium hover:text-primary transition-colors">Publications</a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="md:hidden">Menu</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">

        {/* Hero */}
        <section id="home" className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-muted-foreground mb-5">{personalInfo.title}</h2>

              <ul className="mb-6 space-y-1.5">
                {personalInfo.currentRoles.map((role, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>

              <p className="text-base mb-3">{personalInfo.bio}</p>
              <p className="text-sm text-muted-foreground italic mb-6">{personalInfo.researchStatement}</p>

              <div className="flex space-x-4">
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

        {/* Research Interests */}
        <section id="research" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {researchInterests.map((interest, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Selected Publications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-2 text-center">Selected Publications</h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">
            Highlighted work across journals and conferences
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredPublications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={pub.type === "journal" ? "default" : "secondary"}>
                      {pub.type === "journal" ? "Journal" : "Conference"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{pub.year}</span>
                  </div>
                  <h3 className="font-semibold mb-4">{pub.venue}</h3>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-3 w-3" />
                      View Paper
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* News */}
        <section id="news" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {news.map((item, index) => {
                  const config = newsTypeConfig[item.type]
                  const Icon = config.icon
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Badge className="mt-0.5 flex-shrink-0">{item.year}</Badge>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ${config.color}`}
                      >
                        <Icon className="h-3 w-3" />
                        {config.label}
                      </span>
                      <p className="text-sm">{item.content}</p>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Resume */}
        <section id="resume" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
          <Tabs defaultValue="education">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
              <Card>
                <CardContent className="p-6 space-y-6">
                  {resume.education.map((edu, index) => (
                    <div
                      key={index}
                      className={index < resume.education.length - 1 ? "pb-6 border-b" : ""}
                    >
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardContent className="p-6 space-y-6">
                  {resume.experience.map((exp, index) => (
                    <div
                      key={index}
                      className={index < resume.experience.length - 1 ? "pb-6 border-b" : ""}
                    >
                      <h3 className="text-lg font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.institution}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Full Publications */}
        <section id="publications" className="mb-20">
          <h2 className="text-3xl font-bold mb-2 text-center">Publications</h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">
            {publications.length} publications across journals and conferences
          </p>
          <Card>
            <CardContent className="p-6 space-y-8">
              {sortedYears.map((year) => (
                <div key={year}>
                  <div className="flex items-center gap-3 mb-4 pb-2 border-b">
                    <h3 className="text-lg font-bold">{year}</h3>
                    <Badge variant="outline">{publicationsByYear[year].length}</Badge>
                  </div>
                  <div className="space-y-4">
                    {publicationsByYear[year].map((pub, i) => (
                      <div key={i} className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 min-w-0">
                          <Badge
                            variant={pub.type === "journal" ? "default" : "secondary"}
                            className="mt-0.5 flex-shrink-0 text-xs"
                          >
                            {pub.type === "journal" ? "Journal" : "Conference"}
                          </Badge>
                          <div className="min-w-0">
                            <p className="font-medium">{pub.venue}</p>
                            <p className="text-sm text-muted-foreground">{pub.content}</p>
                          </div>
                        </div>
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0"
                        >
                          <Button variant="outline" size="sm" className="gap-1 whitespace-nowrap">
                            <ExternalLink className="h-3 w-3" />
                            View Paper
                          </Button>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Get in Touch</h3>
                <p className="text-sm text-muted-foreground">
                  Open to research collaborations, speaking engagements, and academic inquiries.
                </p>
                {personalInfo.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {personalInfo.email}
                  </a>
                )}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{personalInfo.institution}</span>
                </div>
                <div className="flex gap-3 pt-2">
                  {personalInfo.socialLinks.map((link, index) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap]
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                      >
                        <Icon className="h-5 w-5 text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" />
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Current Affiliations</h3>
                <ul className="space-y-2">
                  {personalInfo.currentRoles.map((role, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-white pb-3">
        <div className="mt-8 pt-3 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
