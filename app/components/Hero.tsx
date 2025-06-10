"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setIsVisible(true)

    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <div className="mb-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-6 relative">
                <span className={`${letterClass} name`}>G</span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.1s" }}>
                  a
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.2s" }}>
                  u
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.3s" }}>
                  r
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.4s" }}>
                  a
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.5s" }}>
                  v
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.6s" }}>
                  &nbsp;
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.7s" }}>
                  S
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.8s" }}>
                  i
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "0.9s" }}>
                  n
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "1s" }}>
                  g
                </span>
                <span className={`${letterClass} name`} style={{ animationDelay: "1.1s" }}>
                  h
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Software Developer specializing in C++, Java, and web technologies
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:himanshu8115832782@gmail.com"
              className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300 relative group"
            >
              Email
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://in.linkedin.com/in/gaurav-singh-baba39271"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300 relative group"
            >
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://drive.google.com/file/d/18LCKopnBsAaFuxaBrfGjpBR5TUIb4KQq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300 relative group"
            >
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="#projects"
              className="group relative px-8 py-3 overflow-hidden rounded-lg border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 transition-all duration-500"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white dark:group-hover:text-gray-900">
                View Projects
              </span>
              <span className="absolute inset-0 bg-gray-900 dark:bg-gray-100 translate-y-full transform transition-transform duration-500 group-hover:translate-y-0"></span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
