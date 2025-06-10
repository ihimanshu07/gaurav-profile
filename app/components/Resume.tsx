"use client"

import { useEffect, useRef, useState } from "react"
import { Download, ExternalLink, FileText, Eye } from "lucide-react"

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
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

  const resumeUrl = "https://drive.google.com/file/d/18LCKopnBsAaFuxaBrfGjpBR5TUIb4KQq/view?usp=sharing"
  const downloadUrl = "https://drive.google.com/uc?export=download&id=18LCKopnBsAaFuxaBrfGjpBR5TUIb4KQq"

  return (
    <section id="resume" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download or view my complete resume to learn more about my experience, skills, and qualifications.
            </p>
          </div>

          {/* Resume Card */}
          <div className="max-w-2xl mx-auto">
            <div
              className={`relative group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent dark:from-gray-700/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isHovered ? "scale-110 rotate-3" : ""
                        }`}
                      >
                        <FileText size={24} className="text-white dark:text-gray-900" />
                      </div>
                      <div
                        className={`absolute inset-0 bg-gray-900/20 dark:bg-gray-100/20 rounded-xl transition-all duration-300 ${
                          isHovered ? "scale-125 opacity-100" : "scale-100 opacity-0"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Gaurav Singh</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Software Developer Resume</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 dark:text-gray-500">PDF Document</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Updated 2024</p>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="mb-6 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Professional Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Technical Skills & Expertise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Education & Certifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Project Portfolio</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn relative overflow-hidden bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center space-x-2">
                      <Eye size={18} />
                      <span>View Resume</span>
                      <ExternalLink size={16} className="opacity-70" />
                    </div>
                  </a>

                  <a
                    href={downloadUrl}
                    className="flex-1 group/btn relative overflow-hidden border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:scale-105"
                  >
                    <div className="relative flex items-center justify-center space-x-2">
                      <Download size={18} />
                      <span>Download PDF</span>
                    </div>
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Available in PDF format</span>
                    <span>Last updated: December 2024</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-900/5 to-gray-600/5 dark:from-gray-100/5 dark:to-gray-400/5 transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Experience", value: "2+ Years" },
              { label: "Projects", value: "15+" },
              { label: "Technologies", value: "10+" },
              { label: "Certifications", value: "5+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
