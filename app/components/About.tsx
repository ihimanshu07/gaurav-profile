"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
            About
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gray-900 dark:bg-gray-100 rounded-full"></span>
          </h2>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Motivated and detail-oriented recent graduate proficient in C++ and Java, with a strong foundation in
              programming principles and a growing passion for web development.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Eager to apply my technical skills and creativity in a dynamic environment, while further exploring UI/UX
              design. Seeking an entry-level position where I can contribute to innovative projects and develop my
              expertise in software development and user-centered design.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mr-3"></span>
                  Education
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="pl-5 border-l border-gray-200 dark:border-gray-700">
                    Bachelor of Engineering — Chandigarh University, Mohali
                  </li>
                  <li className="pl-5 border-l border-gray-200 dark:border-gray-700">
                    Senior Secondary — S.S. Public School, Babatpur
                  </li>
                  <li className="pl-5 border-l border-gray-200 dark:border-gray-700">
                    High School — S.S. Public School, Babatpur
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mr-3"></span>
                  Address
                </h3>
                <p className="text-gray-600 dark:text-gray-300 pl-5 border-l border-gray-200 dark:border-gray-700">
                  Babatpur, Varanasi, Uttar Pradesh, 221006
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
