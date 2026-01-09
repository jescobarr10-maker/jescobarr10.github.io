"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const newPetals: Petal[] = []
    for (let i = 0; i < 20; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 8,
        size: 10 + Math.random() * 15,
        opacity: 0.3 + Math.random() * 0.4,
      })
    }
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute petal"
          style={{
            left: `${petal.left}%`,
            top: "-5%",
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
          }}
        >
          <svg width={petal.size} height={petal.size * 1.5} viewBox="0 0 20 30" fill="#e8a4b8">
            <ellipse cx="10" cy="15" rx="8" ry="12" />
          </svg>
        </div>
      ))}
    </div>
  )
}
