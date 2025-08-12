'use client'

import React, { useEffect, useRef } from 'react'

interface MagneticElementProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function MagneticElement({ 
  children, 
  strength = 0.3, 
  className = '' 
}: MagneticElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

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
      
      // Only apply effect within 200px radius
      if (distance < 200) {
        const force = Math.max(0, 1 - distance / 200)
        const moveX = deltaX * force * strength
        const moveY = deltaY * force * strength
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`
      } else {
        element.style.transform = 'translate(0px, 0px)'
      }
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)'
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return (
    <div 
      ref={elementRef}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  )
}
