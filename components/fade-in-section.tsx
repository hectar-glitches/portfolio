'use client'

import React from 'react'
import { useFadeIn } from '@/hooks/use-fade-in'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: 'default' | 'scale'
}

export function FadeInSection({ 
  children, 
  className = '', 
  delay = 0, 
  variant = 'default' 
}: FadeInSectionProps) {
  const [ref, isVisible] = useFadeIn({
    threshold: 0.2,
    delay
  })

  const baseClass = variant === 'scale' ? 'fade-in-scale' : 'fade-in'

  return (
    <div 
      ref={ref} 
      className={`${baseClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
