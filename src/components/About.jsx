import React from 'react'
import portraitImg from '../assets/profile/sinan-cropped.png'
import { Sparkles, Palette, Layers, Eye } from 'lucide-react'

export default function About() {
  const highlights = [
    { icon: <Palette size={18} />, label: 'Editorial & Magazine Layouts' },
    { icon: <Layers size={18} />, label: 'Visual Identity & Branding' },
    { icon: <Eye size={18} />, label: 'Social Media & Event Posters' },
  ]

  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--color-pink)',
        color: 'var(--color-near-black)',
        position: 'relative',
        paddingTop: 'var(--space-900)',
        paddingBottom: 'var(--space-900)',
        overflow: 'hidden',
      }}
    >
      {/* Top right decorative dot matrix matching Page 2 of PDF */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '36px',
          right: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 5px)',
          gap: '4px',
          opacity: 0.4,
        }}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-purple)' }} />
        ))}
      </div>

      <div className="container">
        {/* Section Pill Badge */}
        <div style={{ marginBottom: '32px' }}>
          <span
            className="pill-badge"
            style={{
              backgroundColor: 'var(--color-purple)',
              color: 'var(--color-white)',
              boxShadow: '0 4px 12px rgba(105, 0, 171, 0.25)',
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--color-pink)' }} />
            <span>Creative Identity</span>
          </span>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-700)',
            alignItems: 'center',
          }}
        >
          {/* Column 1: Portrait Image without artificial shape */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'min(100%, 300px)',
                display: 'flex',
                justifyContent: 'center',
              }}
              className="zoom-on-hover"
            >
              <img
                src={portraitImg}
                alt="Muhammad Sinan — Graphic Designer"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* Column 2: About Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                lineHeight: 1.35,
                color: 'var(--color-near-black)',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              I'm a passionate Graphic Designer who loves turning ideas into impactful visuals. I create meaningful designs through creativity, thoughtful layouts, and unique concepts. Always exploring, experimenting, and pushing creative boundaries.
            </p>

            <p
              style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.55rem)',
                lineHeight: 1.45,
                color: 'var(--color-purple)',
                fontWeight: 700,
                marginBottom: '36px',
                paddingLeft: '16px',
                borderLeft: '4px solid var(--color-purple)',
              }}
            >
              "I don't just create designs. I create visuals that speak louder."
            </p>

            {/* Highlights pill tags */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '40px',
              }}
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(105, 0, 171, 0.15)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--color-near-black)',
                  }}
                >
                  <span style={{ color: 'var(--color-purple)' }}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Display typography signature "about me" from Page 2 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginTop: '12px',
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  lineHeight: 0.9,
                  color: 'var(--color-purple)',
                  letterSpacing: '-0.03em',
                  textTransform: 'lowercase',
                  userSelect: 'none',
                }}
              >
                about<br />me
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

