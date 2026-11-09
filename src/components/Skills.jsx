import React from 'react'
import { Sparkles } from 'lucide-react'

// Authentic software icon imports
import psIcon from '../assets/software/Adobe_Photoshop_CC_icon.svg.png'
import aiIcon from '../assets/software/Adobe_Illustrator_CC_icon.svg.png'
import idIcon from '../assets/software/Adobe_InDesign_CC_icon.svg.png'
import figmaIcon from '../assets/software/Figma-logo.svg.webp'
import prIcon from '../assets/software/Adobe_Premiere_Pro_CC_icon.svg.webp'
import aeIcon from '../assets/software/Adobe_After_Effects_CC_icon.svg.webp'
import capcutIcon from '../assets/software/Capcut-icon.png'

export default function Skills() {
  const tools = [
    { name: "Adobe Photoshop", role: "Image Editing & Compositing", icon: psIcon },
    { name: "Adobe Illustrator", role: "Vector Art & Logo Design", icon: aiIcon },
    { name: "Adobe InDesign", role: "Editorial & Publication Layouts", icon: idIcon },
    { name: "Figma", role: "UI Design & Digital Prototyping", icon: figmaIcon },
    { name: "Adobe Premiere Pro", role: "Video Production & Editing", icon: prIcon },
    { name: "Adobe After Effects", role: "Motion Graphics & Visual FX", icon: aeIcon },
    { name: "CapCut", role: "Short-form & Social Video", icon: capcutIcon },
  ]

  return (
    <section
      id="skills"
      style={{
        backgroundColor: 'var(--color-purple)',
        color: 'var(--color-white)',
        paddingTop: 'var(--space-900)',
        paddingBottom: 'var(--space-900)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-white)',
              display: 'block',
              marginBottom: '4px',
              fontFamily: 'var(--font-body)',
            }}
          >
            SOFTWARE
          </span>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 9vw, 6.5rem)',
              lineHeight: 0.95,
              color: 'var(--color-pink)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              userSelect: 'none',
            }}
          >
            SKILLS
          </h2>

          <p
            style={{
              maxWidth: '560px',
              margin: '16px auto 0',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              lineHeight: 1.5,
            }}
          >
            Core creative software and tool stack utilized for crafting brand systems, editorial publications, and high-impact visual design.
          </p>
        </div>

        {/* Software Grid with centered 2nd row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
        >
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="card-hover-lift software-skill-box"
              style={{
                flex: '1 1 220px',
                maxWidth: '240px',
                minWidth: '200px',
                backgroundColor: 'rgba(23, 19, 27, 0.45)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(245, 134, 255, 0.25)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '14px',
                transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(23, 19, 27, 0.7)'
                e.currentTarget.style.borderColor = 'var(--color-pink)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(23, 19, 27, 0.45)'
                e.currentTarget.style.borderColor = 'rgba(245, 134, 255, 0.25)'
              }}
            >
              <div
                className="software-skill-icon-wrapper"
                style={{
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '14px',
                  backgroundColor: '#17131B',
                  padding: '10px',
                  border: '1px solid rgba(245, 134, 255, 0.3)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                }}
              >
                <img
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '4px',
                  }}
                >
                  {tool.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'rgba(255, 255, 255, 0.65)',
                    lineHeight: 1.35,
                  }}
                >
                  {tool.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative dotted line matching Page 9 of PDF */}
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            gap: '6px',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '56px',
          }}
        >
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-pink)',
                opacity: i < 20 ? 0.7 : 0.25,
                display: 'inline-block',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

