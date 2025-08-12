'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ColorDistortionProps {
  children: React.ReactNode
  className?: string
  distortionRadius?: number
  intensity?: number
}

export function ColorDistortion({ 
  children, 
  className = '',
  distortionRadius = 150,
  intensity = 3
}: ColorDistortionProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [distortion, setDistortion] = useState({ x: 0, y: 0, strength: 0 })

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
      
      if (distance < distortionRadius) {
        const strength = Math.max(0, 1 - distance / distortionRadius)
        const normalizedX = deltaX / distortionRadius
        const normalizedY = deltaY / distortionRadius
        
        setDistortion({
          x: normalizedX * intensity * strength,
          y: normalizedY * intensity * strength,
          strength
        })
      } else {
        setDistortion({ x: 0, y: 0, strength: 0 })
      }
    }

    const handleMouseLeave = () => {
      setDistortion({ x: 0, y: 0, strength: 0 })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [distortionRadius, intensity])

  const chromaStyle = distortion.strength > 0 ? {
    textShadow: `
      ${distortion.x}px ${distortion.y}px 0 rgba(255, 0, 150, ${distortion.strength * 0.3}),
      ${-distortion.x}px ${-distortion.y}px 0 rgba(0, 255, 255, ${distortion.strength * 0.3}),
      ${distortion.x * 0.5}px ${distortion.y * 0.5}px 0 rgba(255, 255, 0, ${distortion.strength * 0.2})
    `,
    transform: `translate(${distortion.x * 0.5}px, ${distortion.y * 0.5}px)`,
    transition: 'all 0.1s ease-out'
  } : {
    transition: 'all 0.3s ease-out'
  }

  return (
    <div 
      ref={elementRef}
      className={className}
      style={chromaStyle}
    >
      {children}
    </div>
  )
}
