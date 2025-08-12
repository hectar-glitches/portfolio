'use client'

import React, { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  life: number
  maxLife: number
  size: number
  color: string
}

export function CursorEffects() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let particleId = 0
    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Create new particle
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        life: 60,
        maxLife: 60,
        size: Math.random() * 4 + 2,
        color: `hsl(210, ${Math.random() * 30 + 50}%, ${Math.random() * 20 + 70}%)`
      }

      setParticles(prev => [...prev.slice(-20), newParticle])
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const updateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            life: particle.life - 1,
            size: particle.size * 0.98
          }))
          .filter(particle => particle.life > 0)
      )
      animationFrame = requestAnimationFrame(updateParticles)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    animationFrame = requestAnimationFrame(updateParticles)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Glowing cursor orb */}
      {isVisible && (
        <div
          className="absolute w-6 h-6 rounded-full pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: cursorPos.x - 12,
            top: cursorPos.y - 12,
            background: 'radial-gradient(circle, rgba(210, 215, 225, 0.3) 0%, rgba(210, 215, 225, 0.1) 50%, transparent 100%)',
            boxShadow: '0 0 20px rgba(210, 215, 225, 0.5)',
          }}
        />
      )}

      {/* Particle trail */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife,
            transform: `scale(${particle.life / particle.maxLife})`,
          }}
        />
      ))}
    </div>
  )
}
