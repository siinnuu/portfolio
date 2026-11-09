import React, { useState } from 'react'
import { ZoomIn, BookOpen, Layers, Image as ImageIcon, CreditCard, Sparkles, ArrowRight } from 'lucide-react'

// Asset imports
import spread1 from '../assets/magazine/nambikkai-spread-1.png'
import spread2 from '../assets/magazine/nambikkai-spread-2.png'
import spread3 from '../assets/magazine/nambikkai-spread-3.png'
import spread4 from '../assets/magazine/nambikkai-spread-4.png'
import spread5 from '../assets/magazine/nambikkai-spread-5.png'

import ethikVariants from '../assets/branding/ethik20-logo-variants.png'
import ethikColors from '../assets/branding/ethik20-colors.png'
import ethikDark from '../assets/branding/ethik20-identity-dark.png'
import ethikPattern from '../assets/branding/ethik20-pattern.png'

import idCardMockup from '../assets/id-card/iedc-id-card.png'

import football from '../assets/posters/FOOTBALL.jpg'
import mamangam from '../assets/posters/mamangam.png'
import jazAslam from '../assets/posters/Jaz_Aslam.jpg'
import treasureHunt from '../assets/posters/tresuer_hunt.png'
import nawaf from '../assets/posters/Nawaf_naz.jpg'
import akvi from '../assets/posters/akvi.jpg'
import launchSoon from '../assets/posters/launch_soon.png'
import rajasthan from '../assets/posters/rajasthan_main.jpg'
import csbs from '../assets/posters/download (14).jpg'
import sarabSingh from '../assets/posters/sarab_singh.jpg'
import soofiNight from '../assets/posters/soofi_night_2.jpg'
import ayumi from '../assets/posters/ayumi_final.jpg'
import kasatt from '../assets/posters/kasatt2.png'

export default function Projects({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('all')
  const [flipbookLoaded, setFlipbookLoaded] = useState(false)

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'magazine', label: '01. Magazine Design', icon: <BookOpen size={16} /> },
    { id: 'branding', label: '02. Logo & Branding', icon: <Layers size={16} /> },
    { id: 'posters', label: '03. Social Posters', icon: <ImageIcon size={16} /> },
    { id: 'idcard', label: '04. ID Card Design', icon: <CreditCard size={16} /> },
  ]

  const posterList = [
    { src: football, title: "Inter Department Football", sub: "CSE vs EEE Finals", tag: "Sports" },
    { src: mamangam, title: "Mamangam 8.0 Football", sub: "Tournament Promotion", tag: "Sports" },
    { src: jazAslam, title: "Jaz Aslam Live", sub: "Musical Concert Poster", tag: "Music" },
    { src: treasureHunt, title: "Treasure Hunt 2026", sub: "AD Block Campus Event", tag: "Campus" },
    { src: nawaf, title: "Nawaf NSR Live", sub: "Concert Visual Identity", tag: "Music" },
    { src: akvi, title: "AKVI — Sunburn Campus", sub: "Electronic Dance Festival", tag: "Festival" },
    { src: launchSoon, title: "ETHIKKO Launch Teaser", sub: "Stay Tuned Announcement", tag: "Branding" },
    { src: rajasthan, title: "Rajasthan Tour Poster", sub: "Jaisalmer & Jaipur Batch Trip", tag: "Travel" },
    { src: csbs, title: "CSBS Cultural Fest", sub: "Malayalam Calligraphy Art", tag: "Culture" },
    { src: sarabSingh, title: "Sarab Singh Musical Night", sub: "Live Performance Poster", tag: "Music" },
    { src: soofiNight, title: "Sufi Night 2026", sub: "Acoustic Stage Visual", tag: "Concert" },
    { src: ayumi, title: "Ayumi Earth Collection", sub: "Eco Skincare Promotion", tag: "Product" },
    { src: kasatt, title: "Kasatt Cultural Event", sub: "Festival Identity & Typography", tag: "Festival" },
  ]

  const shouldShow = (category) => activeTab === 'all' || activeTab === category

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--color-near-black)',
        color: 'var(--color-white)',
        paddingTop: 'var(--space-900)',
        paddingBottom: 'var(--space-900)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 6rem)',
              lineHeight: 0.95,
              color: 'var(--color-pink)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            MAJOR PROJECTS
          </h2>

          <p
            style={{
              maxWidth: '620px',
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: '1.05rem',
              lineHeight: 1.5,
            }}
          >
            Selected editorial layouts, branding systems, social media graphics, and print identities crafted with purpose and precision.
          </p>

          {/* Category Filter Tabs */}
          <div
            className="projects-filter-tabs"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              marginTop: '32px',
              padding: '6px',
              backgroundColor: '#201824',
              border: '1px solid rgba(245, 134, 255, 0.18)',
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 18px',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    backgroundColor: isSelected ? 'var(--color-purple)' : 'transparent',
                    color: isSelected ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.color = 'var(--color-pink)'
                      e.currentTarget.style.backgroundColor = 'rgba(245, 134, 255, 0.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {cat.icon && <span>{cat.icon}</span>}
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ----------------- 01. MAGAZINE DESIGN ----------------- */}
        {shouldShow('magazine') && (
          <div
            style={{
              backgroundColor: 'var(--color-pink)',
              color: 'var(--color-near-black)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              marginBottom: 'var(--space-800)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Header info */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '24px',
                marginBottom: '32px',
              }}
            >
              <div style={{ maxWidth: '800px' }}>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-purple)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  PROJECT 01 • EDITORIAL & PUBLICATION
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    lineHeight: 1.05,
                    color: 'var(--color-purple)',
                    marginBottom: '16px',
                  }}
                >
                  NAMBIKKAI '26 — AAWAAZ 2.0
                </h3>
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    color: 'var(--color-near-black)',
                    fontWeight: 500,
                  }}
                >
                  Designed and developed the editorial layout for NAMBIKKAI '26, the 104-page AAWAAZ College Union Magazine. Responsible for page layouts, typography, visual hierarchy, and overall publication design, bringing together multilingual articles, poems, and creative content into a cohesive magazine experience.
                </p>
              </div>
            </div>

            {/* Interactive Web Magazine Flipbook */}
            <div
              style={{
                backgroundColor: '#17131B',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '32px',
                border: '2px solid rgba(105, 0, 171, 0.35)',
                boxShadow: '0 12px 32px rgba(105, 0, 171, 0.2)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                  padding: '0 4px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={18} color="#F586FF" />
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
                    Interactive Digital Flipbook — NAMBIKKAI '26
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    color: '#F586FF',
                    fontWeight: 600,
                    backgroundColor: 'rgba(245, 134, 255, 0.15)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(245, 134, 255, 0.3)',
                  }}
                >
                  Click & Flip through 104 Pages
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: 'clamp(280px, 45vh, 420px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0F0B12',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                  position: 'relative',
                  border: '1px solid rgba(245, 134, 255, 0.2)',
                }}
              >
                {/* Skeleton Loader — displayed while the Heyzine flipbook loads */}
                {!flipbookLoaded && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#140E18',
                      padding: '20px',
                    }}
                  >
                    {/* Simulated dual-page magazine skeleton */}
                    <div
                      style={{
                        width: 'min(92%, 520px)',
                        height: 'min(68%, 210px)',
                        borderRadius: '10px',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                        padding: '12px',
                        backgroundColor: '#1E1625',
                        border: '1px solid rgba(245, 134, 255, 0.2)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Left Page Skeleton */}
                      <div
                        style={{
                          borderRadius: '6px',
                          backgroundColor: '#16101D',
                          padding: '10px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <div className="skeleton-shimmer" style={{ width: '50%', height: '12px', borderRadius: '4px' }} />
                        <div className="skeleton-shimmer" style={{ width: '100%', height: '52px', borderRadius: '4px' }} />
                        <div className="skeleton-shimmer" style={{ width: '92%', height: '6px', borderRadius: '3px' }} />
                        <div className="skeleton-shimmer" style={{ width: '70%', height: '6px', borderRadius: '3px' }} />
                      </div>

                      {/* Right Page Skeleton */}
                      <div
                        style={{
                          borderRadius: '6px',
                          backgroundColor: '#16101D',
                          padding: '10px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <div className="skeleton-shimmer" style={{ width: '100%', height: '48px', borderRadius: '4px' }} />
                        <div className="skeleton-shimmer" style={{ width: '85%', height: '10px', borderRadius: '4px' }} />
                        <div className="skeleton-shimmer" style={{ width: '95%', height: '6px', borderRadius: '3px' }} />
                        <div className="skeleton-shimmer" style={{ width: '60%', height: '6px', borderRadius: '3px' }} />
                      </div>
                    </div>

                    {/* Shimmer loading spinner & text */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginTop: '16px',
                      }}
                    >
                      <div
                        className="animate-spin"
                        style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid rgba(245, 134, 255, 0.25)',
                          borderTopColor: 'var(--color-pink)',
                          borderRadius: '50%',
                        }}
                      />
                      <span
                        style={{
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontSize: '0.825rem',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                        }}
                      >
                        Loading Interactive Flipbook...
                      </span>
                    </div>
                  </div>
                )}

                <iframe
                  allowFullScreen
                  allow="autoplay; fullscreen; clipboard-write"
                  scrolling="no"
                  title="NAMBIKKAI '26 Interactive Flipbook"
                  onLoad={() => setFlipbookLoaded(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '12px',
                    display: 'block',
                    opacity: flipbookLoaded ? 1 : 0,
                    transition: 'opacity 0.4s ease-in-out',
                  }}
                  src="https://heyzine.com/flip-book/8127945d82.html"
                />
              </div>
            </div>

            {/* Spreads Showcase */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {[
                { img: spread1, title: "Editorial Spread — Union & Principal Desk" },
                { img: spread2, title: "Feature Spread — Malayalam Poetry & Visuals" },
                { img: spread3, title: "Special Article — Kasaragod: Seven Languages" },
                { img: spread4, title: "Creative Layout — Student Submissions" },
                { img: spread5, title: "Editorial Layout — Articles & Illustrations" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="zoom-on-hover"
                  onClick={() => onOpenLightbox({
                    image: item.img,
                    title: item.title,
                    category: "Publication Spread",
                    description: "Internal magazine spread featuring dual column grid, editorial typography, and high-impact visual balancing."
                  })}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(105, 0, 171, 0.2)',
                    cursor: 'pointer',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '16 / 10',
                      backgroundColor: '#F8F4F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '6px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
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
                      padding: '10px 12px',
                      backgroundColor: '#FFFFFF',
                      borderTop: '1px solid rgba(105, 0, 171, 0.1)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--color-near-black)',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------- 02. LOGO & BRANDING ----------------- */}
        {shouldShow('branding') && (
          <div
            style={{
              backgroundColor: '#201824',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              marginBottom: 'var(--space-800)',
              border: '1px solid rgba(245, 134, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '24px',
                marginBottom: '36px',
              }}
            >
              <div style={{ maxWidth: '800px' }}>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-pink)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  PROJECT 02 • VISUAL IDENTITY SYSTEM
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    lineHeight: 1.05,
                    color: 'var(--color-white)',
                    marginBottom: '16px',
                  }}
                >
                  ETHIKKO Brand Identity
                </h3>
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 400,
                  }}
                >
                  ETHIKKO is a branding project focused on creating a distinctive visual identity that reflects the brand's personality and vision through a unique logo and cohesive visual language, combining simplicity, creativity, and thoughtful design to create a memorable brand presence.
                </p>
              </div>
            </div>

            {/* Branding Visual Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Logo Variations Card */}
              <div
                className="zoom-on-hover card-hover-lift"
                onClick={() => onOpenLightbox({
                  image: ethikVariants,
                  title: "ETHIKKO Logo Variations",
                  category: "Brand Identity",
                  description: "Primary and secondary logo marks tested across brand green (#00a651), deep black (#231f20), and clean white surfaces."
                })}
                style={{
                  backgroundColor: '#17131B',
                  borderRadius: '16px',
                  border: '1px solid rgba(245, 134, 255, 0.25)',
                  padding: '20px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={ethikVariants}
                  alt="ETHIKKO Logo Variations"
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }}
                />
                <div style={{ marginTop: '16px' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 600 }}>Logo Marks & Variations</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '4px' }}>
                    Multi-surface icon adaptation with yellow accent stroke.
                  </p>
                </div>
              </div>

              {/* Repeated Pattern Card */}
              <div
                className="zoom-on-hover card-hover-lift"
                onClick={() => onOpenLightbox({
                  image: ethikPattern,
                  title: "ETHIKKO Repeat Brand Pattern",
                  category: "Brand Pattern System",
                  description: "Geometric diagonal pattern grid uniting the numeric monogram in dual-tone emerald and electric yellow."
                })}
                style={{
                  backgroundColor: '#17131B',
                  borderRadius: '16px',
                  border: '1px solid rgba(245, 134, 255, 0.25)',
                  padding: '20px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={ethikPattern}
                  alt="ETHIKKO Repeat Pattern"
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }}
                />
                <div style={{ marginTop: '16px' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 600 }}>Brand Repeat Pattern</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '4px' }}>
                    Modular pattern used for packaging, merchandise, and digital backdrops.
                  </p>
                </div>
              </div>

              {/* Brand Color System */}
              <div
                style={{
                  backgroundColor: '#17131B',
                  borderRadius: '16px',
                  border: '1px solid rgba(245, 134, 255, 0.25)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--color-pink)', fontWeight: 700, marginBottom: '6px' }}>
                    Color Palette System
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '20px' }}>
                    High-contrast color architecture specified for the ETHIKKO brand ecosystem.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#00a651', border: '1px solid rgba(255,255,255,0.2)' }} />
                      <div>
                        <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem' }}>Emerald Green</div>
                        <div style={{ fontFamily: 'monospace', color: 'var(--color-pink)', fontSize: '0.85rem' }}>#00a651</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#f9ff00', border: '1px solid rgba(255,255,255,0.2)' }} />
                      <div>
                        <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem' }}>Electric Yellow</div>
                        <div style={{ fontFamily: 'monospace', color: 'var(--color-pink)', fontSize: '0.85rem' }}>#f9ff00</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#231f20', border: '1px solid rgba(255,255,255,0.2)' }} />
                      <div>
                        <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem' }}>Rich Black</div>
                        <div style={{ fontFamily: 'monospace', color: 'var(--color-pink)', fontSize: '0.85rem' }}>#231f20</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="zoom-on-hover"
                  onClick={() => onOpenLightbox({
                    image: ethikColors,
                    title: "ETHIKKO Visual Palette",
                    category: "Color Identity",
                    description: "Brand swatches with standardized hex codes for print and web deployment."
                  })}
                  style={{
                    marginTop: '20px',
                    padding: '8px 14px',
                    backgroundColor: 'rgba(245, 134, 255, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(245, 134, 255, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.8125rem', color: '#F586FF', fontWeight: 600 }}>Inspect Palette Mockup</span>
                  <ZoomIn size={16} color="#F586FF" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 03. SOCIAL MEDIA POSTERS ----------------- */}
        {shouldShow('posters') && (
          <div
            style={{
              backgroundColor: 'var(--color-pink)',
              color: 'var(--color-near-black)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              marginBottom: 'var(--space-800)',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '24px',
                marginBottom: '36px',
              }}
            >
              <div style={{ maxWidth: '800px' }}>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-purple)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  PROJECT 03 • VISUAL COMMUNICATION
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    lineHeight: 1.05,
                    color: 'var(--color-purple)',
                    marginBottom: '16px',
                  }}
                >
                  Social Media Posters
                </h3>
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    color: 'var(--color-near-black)',
                    fontWeight: 500,
                  }}
                >
                  A diverse collection of promotional campaign posters designed for music concerts, sports tournaments, campus festivals, tech conferences, and brand teasers.
                </p>
              </div>
            </div>

            {/* Posters Grid */}
            <div
              className="posters-responsive-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '20px',
              }}
            >
              {posterList.map((poster, idx) => (
                <div
                  key={idx}
                  className="zoom-on-hover card-hover-lift"
                  onClick={() => onOpenLightbox({
                    image: poster.src,
                    title: poster.title,
                    category: `${poster.tag} Poster Design`,
                    description: poster.sub
                  })}
                  style={{
                    backgroundColor: '#17131B',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '2px solid rgba(105, 0, 171, 0.25)',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <div className="poster-card-image" style={{ position: 'relative', overflow: 'hidden', height: '320px', backgroundColor: '#0d0a10' }}>
                    <img
                      src={poster.src}
                      alt={poster.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: 'rgba(23, 19, 27, 0.8)',
                        backdropFilter: 'blur(6px)',
                        color: '#F586FF',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(245, 134, 255, 0.3)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {poster.tag}
                    </div>
                  </div>

                  <div
                    className="poster-card-info"
                    style={{
                      padding: '14px 16px',
                      backgroundColor: '#1E1724',
                      borderTop: '1px solid rgba(245, 134, 255, 0.15)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <h4
                        className="poster-card-title"
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          marginBottom: '2px',
                        }}
                      >
                        {poster.title}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                        {poster.sub}
                      </p>
                    </div>
                    <ZoomIn size={16} color="#F586FF" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------- 04. ID CARD DESIGN ----------------- */}
        {shouldShow('idcard') && (
          <div
            style={{
              backgroundColor: '#201824',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              border: '1px solid rgba(245, 134, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '24px',
                marginBottom: '36px',
              }}
            >
              <div style={{ maxWidth: '800px' }}>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-pink)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  PROJECT 04 • IDENTITY & PRINT COLLATERAL
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    lineHeight: 1.05,
                    color: 'var(--color-white)',
                    marginBottom: '16px',
                  }}
                >
                  IEDC Executive Committee ID Card
                </h3>
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 400,
                  }}
                >
                  Designed an official ID card for the IEDC Executive Committee at LBSCEK, focusing on a clean, professional layout that reflects the organisation's identity while ensuring clarity, consistency, and functionality.
                </p>
              </div>
            </div>

            {/* ID Card Display */}
            <div
              className="zoom-on-hover card-hover-lift"
              onClick={() => onOpenLightbox({
                image: idCardMockup,
                title: "IEDC Executive Committee Official ID Card",
                category: "Print Collateral & ID Design",
                description: "Front & back view with magnetic lanyard clamp, dynamic QR verification, member designation badge, and clean typography."
              })}
              style={{
                backgroundColor: '#17131B',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(245, 134, 255, 0.25)',
                cursor: 'pointer',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={idCardMockup}
                alt="IEDC Executive Committee ID Card"
                style={{
                  maxWidth: '100%',
                  maxHeight: '520px',
                  objectFit: 'contain',
                }}
              />
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-pink)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                <span>Click to view ID card in full resolution</span>
                <ZoomIn size={16} />
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .projects-filter-tabs {
            border-radius: 16px !important;
          }
          .projects-filter-tabs button {
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}

