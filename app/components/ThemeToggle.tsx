"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center">
        <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-all duration-300 group hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun
          size={20}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75"
          }`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
          }`}
        />
      </div>
    </button>
  )
}
