import React from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = (e) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--color-purple)',
        color: 'var(--color-white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(90px, 14vh, 120px) 16px 36px',
        overflow: 'hidden',
      }}
    >
      {/* Decorative dot matrix matrix in corners like the portfolio PDF */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '32px',
          left: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 5px)',
          gap: '4px',
          opacity: 0.35,
        }}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#F586FF' }} />
        ))}
      </div>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '32px',
          right: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 5px)',
          gap: '4px',
          opacity: 0.35,
        }}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#F586FF' }} />
        ))}
      </div>

      {/* Main Center Composition */}
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Role badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(245, 134, 255, 0.15)',
            border: '1px solid rgba(245, 134, 255, 0.4)',
            borderRadius: '9999px',
            padding: '8px 20px',
            marginBottom: '24px',
            color: 'var(--color-pink)',
            letterSpacing: '0.18em',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          <Sparkles size={16} />
          <span>GRAPHIC DESIGNER</span>
        </div>

        {/* Hero Title PORTFOLIO */}
        <h1
          className="hero-title font-display"
          style={{
            fontSize: 'clamp(3.5rem, 13vw, 10.5rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            color: 'var(--color-pink)',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            margin: '0 auto',
            textShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
            userSelect: 'none',
          }}
        >
          PORTFOLIO
        </h1>

        {/* Sub-header credits aligned thoughtfully */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '960px',
            marginTop: '16px',
            padding: '0 12px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              letterSpacing: '0.12em',
              color: 'var(--color-white)',
              textTransform: 'uppercase',
            }}
          >
            MUHAMMAD SINAN
          </span>

          <span
            className="font-display"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              color: 'var(--color-pink)',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            2026
          </span>
        </div>

        {/* Tagline sentence */}
        <p
          style={{
            maxWidth: '680px',
            marginTop: '36px',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.6,
          }}
        >
          "Turning ideas into impactful visual experiences."
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginTop: '36px',
          }}
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="btn btn-pink"
            style={{
              fontSize: '1rem',
              padding: '12px 28px',
              fontWeight: 600,
              boxShadow: '0 8px 24px rgba(245, 134, 255, 0.3)',
            }}
          >
            View Projects
          </a>
          <a
            href="#about"
            onClick={scrollToAbout}
            className="btn btn-outline-white"
            style={{
              fontSize: '1rem',
              padding: '12px 24px',
              fontWeight: 600,
            }}
          >
            About Sinan
          </a>
        </div>
      </div>

      {/* Hero Bottom Bar with PDF-style dotted decoration & scroll indicator */}
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2,
          paddingTop: '24px',
          borderTop: '1px solid rgba(245, 134, 255, 0.25)',
        }}
      >
        {/* Dotted row from Page 1 of PDF */}
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
            maxWidth: '55%',
            overflow: 'hidden',
          }}
        >
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-pink)',
                opacity: i < 18 ? 0.8 : 0.3,
                display: 'inline-block',
              }}
            />
          ))}
        </div>

        {/* Scroll down indicator */}
        <a
          href="#about"
          onClick={scrollToAbout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--color-pink)',
            textDecoration: 'none',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
          aria-label="Scroll down to About section"
        >
          <span style={{ display: 'none' }} className="desktop-scroll-text">Scroll Down</span>
          <div
            className="scroll-indicator-icon"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(245, 134, 255, 0.15)',
              border: '1px solid var(--color-pink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowDown size={16} />
          </div>
        </a>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .desktop-scroll-text {
            display: inline-block !important;
          }
        }
      `}</style>
    </section>
  )
}

