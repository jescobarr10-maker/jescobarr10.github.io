"use client"

import { useEffect, useState } from "react"

export default function AnimatedFlowers() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Center Flower */}
      <svg
        viewBox="0 0 200 200"
        className={`w-40 h-40 md:w-56 md:h-56 absolute transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        {/* Flower Petals */}
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="60"
            rx="25"
            ry="50"
            fill="#e8a4b8"
            opacity="0.8"
            transform={`rotate(${i * 45} 100 100)`}
            className={`${visible ? "animate-bloom" : ""}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
        {/* Flower Center */}
        <circle cx="100" cy="100" r="25" fill="#f0c8d8" />
        <circle cx="100" cy="100" r="18" fill="#d4b8e0" />
        <circle cx="100" cy="100" r="10" fill="#e8a4b8" />
      </svg>

      {/* Left Flower */}
      <svg
        viewBox="0 0 150 150"
        className={`w-24 h-24 md:w-32 md:h-32 absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 transition-all duration-1000 delay-300 animate-sway ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      >
        {[...Array(6)].map((_, i) => (
          <ellipse
            key={i}
            cx="75"
            cy="45"
            rx="18"
            ry="35"
            fill="#d4b8e0"
            opacity="0.7"
            transform={`rotate(${i * 60} 75 75)`}
          />
        ))}
        <circle cx="75" cy="75" r="18" fill="#f0c8d8" />
        <circle cx="75" cy="75" r="12" fill="#e8a4b8" />
      </svg>

      {/* Right Flower */}
      <svg
        viewBox="0 0 150 150"
        className={`w-24 h-24 md:w-32 md:h-32 absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 transition-all duration-1000 delay-500 animate-sway ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        style={{ animationDirection: "reverse" }}
      >
        {[...Array(6)].map((_, i) => (
          <ellipse
            key={i}
            cx="75"
            cy="45"
            rx="18"
            ry="35"
            fill="#d4b8e0"
            opacity="0.7"
            transform={`rotate(${i * 60} 75 75)`}
          />
        ))}
        <circle cx="75" cy="75" r="18" fill="#f0c8d8" />
        <circle cx="75" cy="75" r="12" fill="#e8a4b8" />
      </svg>

      {/* Small Decorative Flowers */}
      <svg
        viewBox="0 0 80 80"
        className={`w-12 h-12 md:w-16 md:h-16 absolute left-1/4 -top-4 transition-all duration-1000 delay-700 animate-float ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {[...Array(5)].map((_, i) => (
          <ellipse
            key={i}
            cx="40"
            cy="25"
            rx="10"
            ry="20"
            fill="#f0c8d8"
            opacity="0.6"
            transform={`rotate(${i * 72} 40 40)`}
          />
        ))}
        <circle cx="40" cy="40" r="10" fill="#e8a4b8" />
      </svg>

      <svg
        viewBox="0 0 80 80"
        className={`w-12 h-12 md:w-16 md:h-16 absolute right-1/4 -top-2 transition-all duration-1000 delay-1000 animate-float-reverse ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {[...Array(5)].map((_, i) => (
          <ellipse
            key={i}
            cx="40"
            cy="25"
            rx="10"
            ry="20"
            fill="#d4b8e0"
            opacity="0.6"
            transform={`rotate(${i * 72} 40 40)`}
          />
        ))}
        <circle cx="40" cy="40" r="10" fill="#f0c8d8" />
      </svg>

      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-sparkle"
          style={{
            left: `${20 + i * 12}%`,
            top: `${10 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#e8a4b8">
            <path d="M8 0L9 7L16 8L9 9L8 16L7 9L0 8L7 7L8 0Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
