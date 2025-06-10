import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gaurav Singh - Software Developer",
  description:
    "Portfolio of Gaurav Singh - Software developer proficient in C++, Java, and web technologies. Showcasing projects in AI/ML and web development.",
  keywords:
    "Gaurav Singh, Software Developer, Web Development, React.js, JavaScript, C++, Java, UI/UX Design, Machine Learning, Portfolio",
  authors: [{ name: "Gaurav Singh" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Gaurav Singh - Software Developer",
    description: "Portfolio showcasing projects in software development, web technologies, and AI/ML",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Singh - Software Developer",
    description: "Portfolio showcasing projects in software development, web technologies, and AI/ML",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
