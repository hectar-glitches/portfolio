'use client'

import React, { useEffect, useRef, useState } from 'react'

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
  triggerDistance?: number
  intensity?: number
}

export function GlitchText({ 
  children, 
  className = '',
  triggerDistance = 120,
  intensity = 4
}: GlitchTextProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [glitch, setGlitch] = useState({ active: false, intensity: 0 })

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      
      if (distance < triggerDistance) {
        const strength = Math.max(0, 1 - distance / triggerDistance)
        setGlitch({
          active: true,
          intensity: strength
        })
      } else {
        setGlitch({ active: false, intensity: 0 })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [triggerDistance])

  const glitchStyle = glitch.active ? {
    animation: `glitch ${0.1 + glitch.intensity * 0.2}s infinite`,
    textShadow: `
      ${glitch.intensity * intensity}px 0 #ff0080,
      ${-glitch.intensity * intensity}px 0 #00ffff,
      0 0 ${glitch.intensity * 20}px rgba(255, 255, 255, 0.1)
    `,
    transform: `skew(${glitch.intensity * 2}deg, 0deg)`,
  } : {}

  return (
    <>
      <style jsx>{`
        @keyframes glitch {
          0% {
            text-shadow: 
              ${glitch.intensity * intensity}px 0 #ff0080,
              ${-glitch.intensity * intensity}px 0 #00ffff;
            transform: skew(0deg);
          }
          20% {
            text-shadow: 
              ${glitch.intensity * intensity * 2}px 0 #ff0080,
              ${-glitch.intensity * intensity * 2}px 0 #00ffff;
            transform: skew(${glitch.intensity * 3}deg);
          }
          40% {
            text-shadow: 
              ${-glitch.intensity * intensity}px 0 #ff0080,
              ${glitch.intensity * intensity}px 0 #00ffff;
            transform: skew(${-glitch.intensity * 2}deg);
          }
          60% {
            text-shadow: 
              ${glitch.intensity * intensity * 1.5}px 0 #ff0080,
              ${-glitch.intensity * intensity * 1.5}px 0 #00ffff;
            transform: skew(0deg);
          }
          80% {
            text-shadow: 
              ${-glitch.intensity * intensity * 0.5}px 0 #ff0080,
              ${glitch.intensity * intensity * 0.5}px 0 #00ffff;
            transform: skew(${glitch.intensity}deg);
          }
          100% {
            text-shadow: 
              ${glitch.intensity * intensity}px 0 #ff0080,
              ${-glitch.intensity * intensity}px 0 #00ffff;
            transform: skew(0deg);
          }
        }
      `}</style>
      <div 
        ref={elementRef}
        className={className}
        style={glitchStyle}
      >
        {children}
      </div>
    </>
  )
}
