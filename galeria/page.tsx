"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import FallingPetals from "@/components/falling-petals"
import MusicPlayer from "@/components/music-player"
import Image from "next/image"

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/Galeria/tania1.jpg",
    alt: "Tania",
    caption: "Tu sonrisa tiene algo que calma todo.",
  },
  {
    id: 2,
    src: "/Galeria/tania2.jpg",
    alt: "Tania",
    caption: "Eres increíblemente hermosa, por dentro y por fuera.",
  },
  {
    id: 3,
    src: "/Galeria/tania3.jpg",
    alt: "Tania",
    caption: "No hay distancia capaz de opacar lo hermosa que eres.",
  },
]

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    setImagesLoaded(true)
  }, [])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Navigation />
      <MusicPlayer />

      <section className="relative z-10 min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-dancing)] text-4xl md:text-6xl text-primary mb-4">
              Mi Hermosa Tania
            </h1>
            <p className="font-[family-name:var(--font-playfair)] text-muted-foreground text-lg">
              Cada foto tuya es un tesoro que guardo en mi corazón
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="text-2xl">💕</span>
              <span className="text-2xl">📸</span>
              <span className="text-2xl">💕</span>
            </div>
          </div>

          {/* Album Slider */}
          <div
            className={`relative transition-all duration-700 ${
              imagesLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main Album Frame */}
            <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden p-4 md:p-8">
              {/* Album Page Effect */}
              <div className="relative bg-background rounded-2xl overflow-hidden">
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-card/90 rounded-full shadow-lg hover:bg-card transition-all duration-300 hover:scale-110"
                  aria-label="Anterior"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-card/90 rounded-full shadow-lg hover:bg-card transition-all duration-300 hover:scale-110"
                  aria-label="Siguiente"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                {/* Image Container */}
                <div
                  className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(galleryImages[currentIndex])}
                >
                  {galleryImages.map((image, index) => (
                    <div
                      key={image.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}

                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-card via-card/90 to-transparent">
                  <p className="font-[family-name:var(--font-dancing)] text-xl md:text-3xl text-center text-primary">
                    {galleryImages[currentIndex].caption}
                  </p>
                </div>
              </div>

              {/* Photo Corner Decorations */}
              <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-primary/30 rounded-tl-sm" />
              <div className="absolute top-6 right-6 w-6 h-6 border-r-2 border-t-2 border-primary/30 rounded-tr-sm" />
              <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-primary/30 rounded-bl-sm" />
              <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-primary/30 rounded-br-sm" />
            </div>

            {/* Album Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-primary/10 rounded-full blur-xl" />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="/carta"
              className="px-6 py-3 bg-muted text-foreground rounded-full font-[family-name:var(--font-playfair)] hover:bg-muted/80 transition-all duration-300"
            >
              ← Ver Carta
            </a>
            <a
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-[family-name:var(--font-playfair)] hover:bg-primary/90 transition-all duration-300"
            >
              Ir al Inicio
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-card/90 rounded-full text-foreground hover:bg-card transition-colors"
              aria-label="Cerrar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="aspect-[3/4] relative">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Caption */}
            <div className="p-6 text-center">
              <p className="font-[family-name:var(--font-dancing)] text-2xl text-primary">{selectedImage.caption}</p>
              <span className="text-xl mt-2 inline-block">❤️</span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
