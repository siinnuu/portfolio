import React, { useEffect, useRef, useState } from 'react'

export default function TaglineReveal() {
  const containerRef = useRef(null)
  const [activeWordsCount, setActiveWordsCount] = useState(0)

  const words = [
    "I", "don't", "just", "create", "designs.",
    "I", "create", "visuals", "that", "speak", "louder."
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how far through the section the viewport is
      // Start reveal when element is 75% down the screen, finish when 30% down
      const start = windowHeight * 0.8
      const end = windowHeight * 0.25
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1)

      const activeCount = Math.floor(progress * words.length)
      setActiveWordsCount(activeCount)
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [words.length])

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: 'var(--color-near-black)',
        paddingTop: 'var(--space-800)',
        paddingBottom: 'var(--space-800)',
        borderTop: '1px solid rgba(245, 134, 255, 0.1)',
        borderBottom: '1px solid rgba(245, 134, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-pink)',
            marginBottom: '20px',
            fontWeight: 600,
          }}
        >
          Creative Philosophy
        </span>

        <h2
          className="font-display"
          style={{
            maxWidth: '820px',
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px 14px',
          }}
        >
          {words.map((word, idx) => {
            const isActive = idx < activeWordsCount
            const isHighlight = word.includes("visuals") || word.includes("louder.")
            return (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  color: isActive
                    ? (isHighlight ? 'var(--color-pink)' : 'var(--color-white)')
                    : 'rgba(255, 255, 255, 0.25)',
                  transition: 'color 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                  transform: isActive ? 'translateY(0)' : 'translateY(4px)',
                }}
              >
                {word}
              </span>
            )
          })}
        </h2>
      </div>
    </section>
  )
}

