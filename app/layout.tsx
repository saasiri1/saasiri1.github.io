import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Sultan Asiri – AI Security & Cybersecurity Researcher",
  description:
    "Personal academic website of Dr. Sultan Asiri, Assistant Professor at King Khalid University. Research in AI security, adversarial attacks, digital forensics, and NLP-based cybercrime detection.",
  keywords: [
    "Sultan Asiri",
    "AI Security",
    "Adversarial Attacks",
    "NLP",
    "Cybersecurity",
    "Forensic Analysis",
    "King Khalid University",
    "Computer Science",
    "Deep Learning",
  ],
  openGraph: {
    title: "Dr. Sultan Asiri – AI Security & Cybersecurity Researcher",
    description:
      "Assistant Professor at King Khalid University. Research in AI security, adversarial attacks, digital forensics, and NLP-based cybercrime detection.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

