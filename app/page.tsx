import Image from "next/image"
import { Github, Linkedin, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Sultan Asiri</h1>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Sultan Asiri</h1>
              <h2 className="text-xl text-muted-foreground mb-6">Assistant Professor at King Khalid University</h2>
              <p className="text-lg mb-6">
                Dr. Sultan Asiri is an Assistant Professor at King Khalid University with a Ph.D. in Computer Science
                from The University of Alabama. His research focuses on applied NLP, AI security, adversarial attacks,
                and deep learning. Dr. Asiri is also a reviewer for major conferences and journals, including IEEE and
                ACM.
              </p>
              <div className="flex space-x-4">
                {/* <Button variant="default">Contact Me</Button> */}
                {/* <Button variant="outline">Download CV</Button> */}
              </div>
              <div className="flex mt-6 space-x-4">
                <a href="https://www.linkedin.com/in/sultan-asiri-48a1b5ab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" />
                </a>
                <a href="https://www.researchgate.net/profile/Sultan-Asiri-4" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate">
                  <BookOpen className="h-6 w-6 text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=lXloWNEAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                >
                  <Github className="h-6 w-6 text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                <Image
                  src="/images/my_image.jpeg"
                  alt="Dr. Sultan Asiri"
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
            {[
              "AI Security",
              "Adversarial Attacks & Detections",
              "Social Engineering Attacks & Detections",
              "Natural Language Processing",
              "Cybercrime",
            ].map((interest, index) => (
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
                <li className="flex items-start">
                  <Badge className="mt-1 mr-3">2024</Badge>
                  <p>
                    I started new position as the director of programs and academic affairs at Applied College, King
                    Khalid University, Muhayil Aseer, Saudi Arabia.
                  </p>
                </li>
                <li className="flex items-start">
                  <Badge className="mt-1 mr-3">2024</Badge>
                  <p>
                    I started new position as Assistant Professor at King Khalid University, Muhayil Aseer, Saudi
                    Arabia.
                  </p>
                </li>
                <li className="flex items-start">
                  <Badge className="mt-1 mr-3">2024</Badge>
                  <p>
                    I received the Computer Science Department's Outstanding Graduate research award for the 2024
                    academic year.
                  </p>
                </li>
                <li className="flex items-start">
                  <Badge className="mt-1 mr-3">2024</Badge>
                  <p>One paper was accepted Computer & Security Elsevier Journal 2024.</p>
                </li>
                <li className="flex items-start">
                  <Badge className="mt-1 mr-3">2024</Badge>
                  <p>I passed my Ph.D. defense on March,5 2024. I am now a Ph.D. in Computer Science.</p>
                </li>
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
                  <div>
                    <h3 className="text-xl font-bold">
                      Philosophy of Computer Science (Ph.D.) in Information Security
                    </h3>
                    <p className="text-muted-foreground">The University of Alabama, USA | 2024</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Master of Computer and Information Science</h3>
                    <p className="text-muted-foreground">Gannon University, USA | 2019</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Computer Information Systems</h3>
                    <p className="text-muted-foreground">King Khalid University, KSA | 2014</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">Director of Programs and Academic Affairs</h3>
                    <p className="text-muted-foreground">
                      Applied College, King Khalid University, KSA | 2024 - Present
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Assistant Professor in Computer Science (Information Security)
                    </h3>
                    <p className="text-muted-foreground">
                      Applied College, King Khalid University, KSA | 2024 - Present
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Member of W4NET lab with Dr. Yang Xiao</h3>
                    <p className="text-muted-foreground">The University of Alabama, USA | 2021 - 2024</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold"> Member of Geospatial data analysis lab</h3>
                    <p className="text-muted-foreground">The University of Alabama, USA | 2020-2021</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Member of The High Performance Data Analytics and Computing (HiPDAC) Lab</h3>
                    <p className="text-muted-foreground">The University of Alabama, USA |  2019-2020</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="publications">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start">
                    <Badge className="mt-1 mr-3">2024</Badge>
                    <p>One paper was accepted Computer & Security Elsevier Journal 2024.</p>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mt-1 mr-3">2024</Badge>
                    <p>One paper was accepted in ACMSE 2024 conference.</p>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mt-1 mr-3">2023</Badge>
                    <p>One paper was published in MDPI Electronics journal 2023.</p>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mt-1 mr-3">2023</Badge>
                    <p>One paper was published in ACMSE 2023 conference.</p>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mt-1 mr-3">2023</Badge>
                    <p>One paper was published in IEEE Access Journal 2023.</p>
                  </div>
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
              <h2 className="text-xl font-bold mb-4">Dr. Sultan Asiri</h2>
              <p className="mb-4">Assistant Professor at King Khalid University</p>
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
            <p>&copy; {new Date().getFullYear()} Dr. Sultan Asiri. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

