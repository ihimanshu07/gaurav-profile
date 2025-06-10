"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
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

  const technicalSkills = [
    {
      name: "JavaScript",
      level: 85,
    },
    {
      name: "Java",
      level: 90,
    },
    {
      name: "C++",
      level: 88,
    },
    {
      name: "React.js",
      level: 82,
    },
    {
      name: "TypeScript",
      level: 78,
    },
    {
      name: "MongoDB",
      level: 75,
    },
  ]

  const interpersonalSkills = ["Consistent", "Time Management", "Leadership"]

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
            Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gray-900 dark:bg-gray-100 rounded-full"></span>
          </h2>

          <div className="space-y-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 py-1 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 rounded-full transition-all duration-1000 ease-out group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-gray-100 dark:group-hover:to-gray-300"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Interpersonal Skills</h3>
              <div className="flex flex-wrap gap-3">
                {interpersonalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
