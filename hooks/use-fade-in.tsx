'use client'

import { useEffect, useState, useRef, RefObject } from 'react'

type FadeInOptions = {
  threshold?: number
  rootMargin?: string
  delay?: number
}

export function useFadeIn(options: FadeInOptions = {}): [
  RefObject<HTMLDivElement | null>,
  boolean
] {
  const { 
    threshold = 0.3, 
    rootMargin = '-10% 0px -10% 0px', 
    delay = 0 
  } = options
  
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, delay])

  return [ref, isVisible]
}
