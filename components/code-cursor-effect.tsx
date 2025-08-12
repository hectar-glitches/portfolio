'use client'

import React, { useEffect, useState } from 'react'

interface CodeSymbol {
  id: number
  x: number
  y: number
  life: number
  maxLife: number
  symbol: string
  velocity: { x: number; y: number }
  rotation: number
  rotationSpeed: number
}

export function CodeCursorEffect() {
  const [symbols, setSymbols] = useState<CodeSymbol[]>([])
  const codeChars = ['<', '>', '/', '{', '}', '(', ')', '[', ']', ';', '=', '+', '-', '*', '&', '$', '#']

  useEffect(() => {
    let symbolId = 0
    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      // Create new code symbol occasionally
      if (Math.random() < 0.3) {
        const newSymbol: CodeSymbol = {
          id: symbolId++,
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
          life: 80,
          maxLife: 80,
          symbol: codeChars[Math.floor(Math.random() * codeChars.length)],
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: Math.random() * -1 - 0.5
          },
          rotation: 0,
          rotationSpeed: (Math.random() - 0.5) * 5
        }

        setSymbols(prev => [...prev.slice(-15), newSymbol])
      }
    }

    const updateSymbols = () => {
      setSymbols(prev => 
        prev
          .map(symbol => ({
            ...symbol,
            x: symbol.x + symbol.velocity.x,
            y: symbol.y + symbol.velocity.y,
            life: symbol.life - 1,
            rotation: symbol.rotation + symbol.rotationSpeed,
            velocity: {
              x: symbol.velocity.x * 0.98,
              y: symbol.velocity.y + 0.02 // gravity
            }
          }))
          .filter(symbol => symbol.life > 0)
      )
      animationFrame = requestAnimationFrame(updateSymbols)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animationFrame = requestAnimationFrame(updateSymbols)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {symbols.map(symbol => (
        <div
          key={symbol.id}
          className="absolute text-primary font-mono font-bold pointer-events-none select-none"
          style={{
            left: symbol.x,
            top: symbol.y,
            opacity: symbol.life / symbol.maxLife,
            transform: `rotate(${symbol.rotation}deg) scale(${symbol.life / symbol.maxLife})`,
            fontSize: '14px',
            textShadow: '0 0 10px rgba(210, 215, 225, 0.5)',
          }}
        >
          {symbol.symbol}
        </div>
      ))}
    </div>
  )
}
