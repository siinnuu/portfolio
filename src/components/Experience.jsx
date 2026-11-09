import React from 'react'
import { ZoomIn, Calendar, CheckCircle2 } from 'lucide-react'

import cipherFest from '../assets/events/Cipher.jpg'
import cipherthon from '../assets/events/ciperthon.jpg'
import grammarData from '../assets/events/the grammar of data.png'
import ciphercine from '../assets/events/Ciphercine.jpg'
import gameVerse from '../assets/events/Game_verse.jpg'

export default function Experience({ onOpenLightbox }) {
  const contributions = [
    { title: "Design Co-Lead — IEDC Summit", desc: "Led creative direction and comprehensive visual branding across social media, badges, and stage backdrops." },
    { title: "Cipher Tech Fest", desc: "Designed theme branding, hackathon brochures, and technical workshop promotions." },
    { title: "College Arts Fest & Union Day", desc: "Crafted stage visuals, digital invites, schedules, and social teasers." },
    { title: "SSF District & Division Sahithyolsav", desc: "Delivered regional cultural event promotions and publication layouts." },
  ]

  const eventVisuals = [
    { src: cipherFest, title: "Cipher '26 Tech Fest", type: "Tech Fest Branding" },
    { src: cipherthon, title: "Cipherthon 2.0 Hackathon", type: "Hackathon Identity" },
    { src: grammarData, title: "The Grammar of Data", type: "Technical Workshop Flyer" },
    { src: ciphercine, title: "Ciphercine Cinema Event", type: "Film Fest Poster" },
    { src: gameVerse, title: "Game Verse Esports", type: "Gaming Competition" },
  ]

  return (
    <section
      id="experience"
      style={{
        backgroundColor: 'var(--color-pink)',
        color: 'var(--color-near-black)',
        paddingTop: 'var(--space-900)',
        paddingBottom: 'var(--space-900)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-700)',
            alignItems: 'center',
          }}
        >
          {/* Column 1: Event Posters Collage / Gallery */}
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
              }}
            >
              {eventVisuals.slice(0, 4).map((visual, idx) => (
                <div
                  key={idx}
                  className="zoom-on-hover card-hover-lift"
                  onClick={() => onOpenLightbox({
                    image: visual.src,
                    title: visual.title,
                    category: visual.type,
                    description: "Event promotional collateral created for college and community media initiatives."
                  })}
                  style={{
                    backgroundColor: '#17131B',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 10px 24px rgba(105, 0, 171, 0.25)',
                    border: '2px solid #FFFFFF',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '3 / 4',
                      backgroundColor: '#120E15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={visual.src}
                      alt={visual.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(23, 19, 27, 0.88)',
                      backdropFilter: 'blur(6px)',
                      padding: '8px 10px',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {visual.title}
                    </span>
                    <ZoomIn size={14} color="#F586FF" />
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              <button
                onClick={() => onOpenLightbox({
                  image: grammarData,
                  title: "The Grammar of Data Workshop",
                  category: "Workshop Flyer",
                  description: "Association of B.Tech in IT event promotion for research scholar keynote."
                })}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-purple)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>View Full Workshop Flyer</span>
                <ZoomIn size={14} />
              </button>
            </div>
          </div>

          {/* Column 2: Experience & Roles Text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                fontWeight: 700,
                color: 'var(--color-purple)',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Media & Creative Team — Event Contributions
            </h3>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'var(--color-near-black)',
                fontWeight: 500,
                marginBottom: '16px',
              }}
            >
              Actively contributed to the media and creative teams of various college and community events, including <strong>Cipher Tech Fest</strong>, <strong>College Arts Fest</strong>, <strong>College Union Day</strong>, <strong>SSF District Sahithyolsav</strong>, and <strong>SSF Division Sahithyolsav</strong>.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'var(--color-near-black)',
                fontWeight: 500,
                marginBottom: '28px',
              }}
            >
              Served as <strong>Design Co-Lead for IEDC Summit</strong>, contributing to creative direction and visual communication. My work involved creating engaging visuals, supporting event branding, and delivering designs that enhanced the overall event experience.
            </p>

            {/* List of contribution cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              {contributions.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(105, 0, 171, 0.15)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: 'var(--color-purple)',
                      marginBottom: '2px',
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--color-purple)" />
                    <span>{item.title}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#332938', paddingLeft: '24px' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

