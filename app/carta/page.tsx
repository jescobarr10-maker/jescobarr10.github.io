"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import FallingPetals from "@/components/falling-petals"
import MusicPlayer from "@/components/music-player"

export default function CartaPage() {
  const [letterOpen, setLetterOpen] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterOpen(true)
      setTimeout(() => setContentVisible(true), 1000)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Navigation />
      <MusicPlayer />

      <section className="relative z-10 min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Letter Container */}
          <div className="relative perspective-1000">
            {/* Envelope */}
            <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
              {/* Envelope Flap */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-accent origin-top transition-transform duration-1000 ease-out z-20 ${
                  letterOpen ? "animate-letter-open" : ""
                }`}
                style={{
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center pt-4">
                  <span className="text-3xl">💌</span>
                </div>
              </div>

              {/* Letter Content */}
              <div
                className={`relative z-10 bg-card p-6 md:p-10 transition-all duration-1000 ${
                  contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Letter Header - Updated title */}
                <div className="text-center mb-8 pt-8">
                  <h1 className="font-[family-name:var(--font-dancing)] text-4xl md:text-5xl text-primary mb-4">
                    Mi amor, Tania:
                  </h1>
                  <div className="flex justify-center gap-2">
                    <span className="text-2xl">🌸</span>
                    <span className="text-2xl">💕</span>
                    <span className="text-2xl">🌸</span>
                  </div>
                </div>

                {/* Letter Body - Complete rewrite with personalized content */}
                <div className="font-[family-name:var(--font-playfair)] text-foreground leading-relaxed space-y-6 text-base md:text-lg">
                  <p>
                    Hoy celebras 20 años, y aunque la distancia nos separa en kilómetros, jamás ha sido suficiente para
                    alejarnos de verdad. Desde Guatemala hasta México, mi corazón siempre encuentra el camino hacia ti.
                  </p>

                  <p>
                    A veces me cuesta creer que todo empezó de una forma tan simple y tan perfecta al mismo tiempo. Un
                    comentario en TikTok, una frase lanzada al aire: <em>"quisiera a mi tv girl"</em>, y tu respuesta
                    que cambió mi vida: <em>"¿puedo ser yo?"</em>.
                  </p>

                  <p className="font-semibold text-primary">
                    Desde ese 10 de enero de 2024, nada volvió a ser igual para mí.
                  </p>

                  <p>
                    Nuestro amor es virtual, sí… pero nunca ha sido irreal. Es real en cada mensaje, en cada llamada, en
                    cada desvelo, en cada risa compartida a través de una pantalla. Es real porque nace del corazón y se
                    sostiene con paciencia, confianza y mucho amor.
                  </p>

                  <p>
                    Hoy quiero recordarte la promesa que te hice, esa que guardo con tanta ilusión:{" "}
                    <strong>verte, abrazarte y mirarte a los ojos a finales de este año</strong>. No es solo un deseo,
                    es un sueño que estoy decidido a convertir en realidad. De todo corazón espero que el destino nos
                    regale ese momento que tanto hemos esperado.
                  </p>

                  <p>
                    Gracias por ser tú. Por tu ternura, por tu forma de hablarme, por tu sonrisa que ilumina incluso mis
                    días más difíciles. Gracias por elegirme, incluso a la distancia.
                  </p>

                  <p className="font-semibold text-primary text-center text-xl">Feliz cumpleaños, mi amor.</p>

                  <p>
                    Que este nuevo año de vida te llene de alegría, de sueños cumplidos y de razones para sonreír. Yo
                    estaré aquí, amándote, esperando el día en que la distancia deje de existir.
                  </p>
                </div>

                {/* Letter Signature - Updated signature */}
                <div className="mt-10 text-right">
                  <p className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-primary">
                    Con todo mi amor,
                  </p>
                  <p className="font-[family-name:var(--font-dancing)] text-xl md:text-2xl text-secondary mt-2">
                    Tu Panquesito 🥞❤️
                  </p>
                </div>

                {/* Decorative Hearts */}
                <div className="flex justify-center gap-4 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl animate-heartbeat" style={{ animationDelay: `${i * 0.2}s` }}>
                      ❤️
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Envelope Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-primary/10 rounded-full blur-xl" />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="/"
              className="px-6 py-3 bg-muted text-foreground rounded-full font-[family-name:var(--font-playfair)] hover:bg-muted/80 transition-all duration-300"
            >
              ← Volver al Inicio
            </a>
            <a
              href="/galeria"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-[family-name:var(--font-playfair)] hover:bg-primary/90 transition-all duration-300"
            >
              Ver Galería →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
