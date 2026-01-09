"use client"

import { useState, useEffect } from "react"

export default function Preloader() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-muted to-accent">
      {/* Animated Hearts Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            <svg
              width={20 + Math.random() * 30}
              height={20 + Math.random() * 30}
              viewBox="0 0 40 40"
              fill="none"
              className="text-primary opacity-30"
            >
              <path
                d="M20 35C20 35 5 25 5 15C5 8 10 5 15 5C18 5 20 8 20 8C20 8 22 5 25 5C30 5 35 8 35 15C35 25 20 35 20 35Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 text-center px-8 py-12 max-w-md transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Warning Icon */}
        <div className="mb-6">
          <span className="text-5xl animate-heartbeat inline-block">⚠️</span>
        </div>

        {/* Warning Title */}
        <h1 className="font-[family-name:var(--font-dancing)] text-4xl md:text-5xl text-primary mb-8">Advertencia</h1>

        {/* Warning Text */}
        <div className="space-y-4 font-[family-name:var(--font-playfair)] text-foreground text-lg md:text-xl leading-relaxed">
          <p
            className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Esto no es algo común...
          </p>
          <p
            className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Es algo que jamás has visto.
          </p>
          <p
            className={`transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Lo hice con todo mi amor...
          </p>
        </div>

        {/* Hearts Animation */}
        <div
          className={`flex justify-center gap-2 mt-8 transition-all duration-700 delay-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <span className="text-3xl animate-heartbeat">❤️</span>
          <span className="text-3xl animate-heartbeat delay-200">❤️</span>
          <span className="text-3xl animate-heartbeat delay-400">❤️</span>
        </div>

        {/* Signature */}
        <p
          className={`font-[family-name:var(--font-dancing)] text-2xl text-primary mt-8 transition-all duration-700 delay-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Atte: El Panquesito ❤️
        </p>

        {/* Loading Indicator */}
        <div className={`mt-8 transition-all duration-700 delay-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-pulse-soft"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
