"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)
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

  const projects = [
    {
      title: "Object Detection System",
      description:
        "Developed an innovative object detection system for visually impaired individuals using ESP32-CAM and YOLOv3 deep learning model. The system provides real-time environmental awareness through auditory cues, helping users navigate their surroundings safely.",
      image: "/object-detection-system.png",
      technologies: ["ESP32-CAM", "YOLOv3", "Deep Learning", "Computer Vision", "Python", "TensorFlow"],
      features: [
        "Real-time object detection",
        "Audio feedback system",
        "Low-power ESP32 implementation",
        "Custom trained model",
      ],
    },
    {
      title: "Plant Leaf Disease Detection",
      description:
        "Developed a machine learning application for detecting plant diseases using TensorFlow. The project leverages AI/ML techniques to analyze images of plants and identify various diseases, helping farmers make informed decisions about crop health.",
      image: "/plant-disease-detection.png",
      technologies: ["TensorFlow", "Machine Learning", "Image Processing", "Python", "OpenCV", "Keras"],
      features: [
        "Multi-class disease classification",
        "High accuracy detection",
        "Mobile-friendly interface",
        "Detailed disease information",
      ],
    },
    {
      title: "Decentralized Finance Platform",
      description:
        "Developed a decentralized investment platform using modern web technologies, integrating MetaMask to enable secure Ethereum-based transactions. The platform provides users with seamless access to DeFi protocols and investment opportunities.",
      image: "/defi-blockchain.png",
      technologies: ["JavaScript", "HTML/CSS", "MetaMask", "Ethereum", "Web3.js", "Solidity"],
      features: [
        "MetaMask integration",
        "Smart contract interaction",
        "Real-time price tracking",
        "Secure wallet connection",
      ],
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
              Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></span>
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gray-900 dark:bg-gray-100 rounded-full"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my technical projects spanning AI/ML, web development, and blockchain technologies.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} group`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay with project links */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <button className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200 hover:scale-110 transform">
                          <ExternalLink size={20} />
                        </button>
                        <button className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200 hover:scale-110 transform">
                          <Github size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} space-y-6`}>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={feature}
                          className={`flex items-center text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                            activeProject === index ? "translate-x-1" : ""
                          }`}
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-gray-100 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs font-medium bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 transition-all duration-300 ${
                            activeProject === index ? "scale-105" : ""
                          }`}
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
