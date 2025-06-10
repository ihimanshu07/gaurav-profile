"use client"

import { useTheme } from "./ThemeProvider"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  const { theme } = useTheme()

  return (
    <div className={`relative ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300"
        aria-label="Gaurav Singh Portfolio"
      >
        {/* Outer circle */}
        <circle cx="16" cy="16" r="15" className="stroke-gray-900 dark:stroke-white" strokeWidth="1.5" fill="none" />

        {/* Inner geometric pattern representing code/development */}
        <path
          d="M10 12L14 16L10 20"
          className="stroke-gray-900 dark:stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <path
          d="M22 12L18 16L22 20"
          className="stroke-gray-900 dark:stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <line
          x1="15"
          y1="10"
          x2="17"
          y2="22"
          className="stroke-gray-900 dark:stroke-white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Subtle accent dot */}
        <circle cx="16" cy="16" r="1" className="fill-gray-900 dark:fill-white" />
      </svg>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gray-900/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
    </div>
  )
}
