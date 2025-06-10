"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Send, Mail, Phone, Linkedin, MapPin } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form and show success
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      title: "Email",
      value: "himanshu8115832782@gmail.com",
      href: "mailto:himanshu8115832782@gmail.com",
      icon: Mail,
    },
    {
      title: "Phone",
      value: "+91 8115832782",
      href: "tel:+918115832782",
      icon: Phone,
    },
    {
      title: "LinkedIn",
      value: "Gaurav Singh",
      href: "https://in.linkedin.com/in/gaurav-singh-baba39271",
      icon: Linkedin,
    },
    {
      title: "Address",
      value: "Babatpur, Varanasi, Uttar Pradesh, 221006",
      href: null,
      icon: MapPin,
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></span>
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gray-900 dark:bg-gray-100 rounded-full"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm currently available for new opportunities. Feel free to reach out if you'd like to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm interested in freelance opportunities and full-time positions. If you have a project that needs
                coding or a position that matches my skills, please don't hesitate to contact me.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start group">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <info.icon
                        size={18}
                        className="text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">{info.title}</span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 group-hover:translate-x-1 inline-block transform"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-900 dark:text-white group-hover:translate-x-1 inline-block transform transition-transform duration-300">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              {isSubmitted && (
                <div className="mb-6 p-4 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 rounded-lg animate-fadeInUp">
                  Thank you for your message. I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-3 transition-all duration-300 ${
                      focusedField === "name" || formData.name
                        ? "-top-2 text-xs bg-gray-50 dark:bg-gray-800 px-1"
                        : "top-3 text-sm"
                    } ${
                      focusedField === "name" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-100 outline-none transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-3 transition-all duration-300 ${
                      focusedField === "email" || formData.email
                        ? "-top-2 text-xs bg-gray-50 dark:bg-gray-800 px-1"
                        : "top-3 text-sm"
                    } ${
                      focusedField === "email" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-100 outline-none transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-3 transition-all duration-300 ${
                      focusedField === "message" || formData.message
                        ? "-top-2 text-xs bg-gray-50 dark:bg-gray-800 px-1"
                        : "top-3 text-sm"
                    } ${
                      focusedField === "message" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-100 outline-none transition-colors duration-300 resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium transition-all duration-300 hover:shadow-lg disabled:bg-gray-400 dark:disabled:bg-gray-600"
                >
                  <div className="absolute inset-0 w-3 bg-white dark:bg-gray-900 opacity-30 transform -skew-x-12 transition-all duration-1000 ease-out group-hover:w-full group-hover:skew-x-0"></div>
                  <div className="relative flex items-center justify-center">
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send
                      size={16}
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Gaurav Singh. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
