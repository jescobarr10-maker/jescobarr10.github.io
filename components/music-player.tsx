"use client"

import { useState, useRef, useEffect } from "react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  /*
   * NOTA IMPORTANTE SOBRE LA MÚSICA:
   *
   * Para que la música funcione correctamente, debes:
   * 1. Descargar los archivos .mp3 de las canciones deseadas:
   *    - "Out of My League" - Fitz and The Tantrums
   *    - "Dontmakemefallinlove" - Cuco
   *
   * 2. Colocar el archivo en la carpeta public/music/
   *    Ejemplo: public/music/romantic-song.mp3
   *
   * 3. Actualizar la ruta en el elemento <audio> abajo
   *
   * NO se recomienda usar YouTube embebido porque:
   * - Consume muchos recursos del dispositivo
   * - Tiene restricciones de autoplay
   * - Puede afectar el rendimiento en móviles
   *
   * Servicios de streaming alternativos ligeros:
   * - SoundCloud embed (más ligero que YouTube)
   * - Archivos MP3 propios (la mejor opción)
   */

  useEffect(() => {
    // Intentar reproducir automáticamente cuando se carga
    // Nota: Muchos navegadores bloquean el autoplay
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // Volumen bajo y romántico
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // El navegador bloqueó el autoplay
          console.log("Autoplay bloqueado por el navegador")
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Audio Element - Reemplazar src con tu archivo de música */}
      <audio 
        ref={audioRef}
        loop
        preload="none"
        // src="/music/romantic-song.mp3" // Descomentar y añadir tu archivo
      >
        {/* Fallback para navegadores que no soportan el elemento audio */}
        Tu navegador no soporta el elemento de audio.
      </audio>

      <div
        className={`bg-card/90 backdrop-blur-md rounded-2xl shadow-lg border border-border transition-all duration-300 ${isExpanded ? "p-4" : "p-2"}`}
      >
        {isExpanded && (
          <div className="mb-3 text-center">
            <p className="font-[family-name:var(--font-dancing)] text-lg text-primary">Música de Fondo</p>
            <p className="font-[family-name:var(--font-playfair)] text-xs text-muted-foreground">Out of My League</p>
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label={isExpanded ? "Contraer reproductor" : "Expandir reproductor"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isExpanded ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
