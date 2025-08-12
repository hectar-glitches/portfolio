'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ChromaShiftProps {
  children: React.ReactNode
  className?: string
  radius?: number
  intensity?: number
  colors?: string[]
}

export function ChromaShift({ 
  children, 
  className = '',
  radius = 100,
  intensity = 2,
  colors = ['#ff6b9d', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
}: ChromaShiftProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [effect, setEffect] = useState({ active: false, color: '', strength: 0, offset: { x: 0, y: 0 } })

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
      
      if (distance < radius) {
        const strength = Math.max(0, 1 - distance / radius)
        const angle = Math.atan2(deltaY, deltaX)
        const colorIndex = Math.floor((angle + Math.PI) / (2 * Math.PI) * colors.length) % colors.length
        
        setEffect({
          active: true,
          color: colors[colorIndex],
          strength,
          offset: {
            x: (deltaX / radius) * intensity * strength,
            y: (deltaY / radius) * intensity * strength
          }
        })
      } else {
        setEffect({ active: false, color: '', strength: 0, offset: { x: 0, y: 0 } })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [radius, intensity, colors])

  const shiftStyle = effect.active ? {
    textShadow: `
      ${effect.offset.x}px ${effect.offset.y}px 0 ${effect.color}${Math.floor(effect.strength * 255).toString(16).padStart(2, '0')},
      ${-effect.offset.x * 0.5}px ${-effect.offset.y * 0.5}px 0 rgba(255, 255, 255, ${effect.strength * 0.3}),
      0 0 ${effect.strength * 10}px ${effect.color}${Math.floor(effect.strength * 128).toString(16).padStart(2, '0')}
    `,
    transform: `translate(${effect.offset.x * 0.3}px, ${effect.offset.y * 0.3}px)`,
    transition: 'all 0.1s ease-out',
    filter: `hue-rotate(${effect.strength * 30}deg) saturate(${1 + effect.strength * 0.5})`
  } : {
    transition: 'all 0.2s ease-out'
  }

  return (
    <div 
      ref={elementRef}
      className={className}
      style={shiftStyle}
    >
      {children}
    </div>
  )
}
