"use client"

import { useState, useEffect } from "react"
import Preloader from "@/components/preloader"
import Navigation from "@/components/navigation"
import AnimatedFlowers from "@/components/animated-flowers"
import FallingPetals from "@/components/falling-petals"
import MusicPlayer from "@/components/music-player"

export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
      setTimeout(() => setContentVisible(true), 500)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (showPreloader) {
    return <Preloader />
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Navigation />
      <MusicPlayer />

      <section
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 transition-opacity duration-1000 ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Animated Flowers */}
        <div className="relative w-full max-w-lg mx-auto mb-8">
          <AnimatedFlowers />
        </div>

        {/* Main Birthday Message */}
        <div className={`text-center space-y-6 ${contentVisible ? "animate-fade-in" : ""}`}>
          <h1 className="font-[family-name:var(--font-dancing)] text-5xl md:text-7xl text-primary drop-shadow-sm">
            Feliz Cumpleaños
          </h1>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-foreground font-semibold">
            Tania Marlene
          </h2>

          <div className="flex items-center justify-center gap-2 text-secondary">
            <span className="text-2xl animate-heartbeat">❤️</span>
            <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl">20 años</span>
            <span className="text-2xl animate-heartbeat delay-300">❤️</span>
          </div>

          <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed mt-8">
            Hoy celebramos no solo un año más de vida, sino la existencia de alguien que hace mi mundo más hermoso cada
            día.
          </p>

          <div className={`mt-12 ${contentVisible ? "animate-fade-in delay-500" : ""}`}>
            <p className="font-[family-name:var(--font-dancing)] text-xl text-primary mb-4">9 de enero de 2006</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/carta"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-[family-name:var(--font-playfair)] text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Leer mi Carta
              </a>
              <a
                href="/galeria"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-[family-name:var(--font-playfair)] text-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ver Galería
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary opacity-60">
            <path
              d="M20 35C20 35 5 25 5 15C5 8 10 5 15 5C18 5 20 8 20 8C20 8 22 5 25 5C30 5 35 8 35 15C35 25 20 35 20 35Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-muted-foreground">
        <p className="font-[family-name:var(--font-dancing)] text-lg">Hecho con mucho amor ❤️</p>
        <p className="font-[family-name:var(--font-playfair)] text-sm mt-2">Atte: El Panquesito</p>
      </footer>
    </main>
  )
}
