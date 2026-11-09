import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '16px',
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
          pointerEvents: 'none',
        }}
      >
        <nav
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            backgroundColor: scrolled ? 'rgba(23, 19, 27, 0.88)' : 'rgba(23, 19, 27, 0.72)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(245, 134, 255, 0.22)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            borderRadius: '9999px',
            padding: '8px 16px',
            maxWidth: 'fit-content',
            transition: 'background-color 300ms cubic-bezier(0.22, 1, 0.36, 1), border-color 300ms',
          }}
        >
          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    color: isActive ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.72)',
                    backgroundColor: isActive ? 'var(--color-purple)' : 'transparent',
                    border: isActive ? '1px solid rgba(245, 134, 255, 0.4)' : '1px solid transparent',
                    transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--color-pink)'
                      e.currentTarget.style.backgroundColor = 'rgba(245, 134, 255, 0.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.72)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          {/* Connect Button in Navigation Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn btn-pink"
              style={{
                fontSize: '0.8125rem',
                padding: '6px 14px',
                gap: '4px',
              }}
            >
              <span>Connect</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-pink)',
                cursor: 'pointer',
                display: 'none',
                padding: '6px',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-in Panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(23, 19, 27, 0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '32px',
          }}
        >
          {/* Dedicated Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(245, 134, 255, 0.15)',
              border: '1px solid rgba(245, 134, 255, 0.3)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-pink)',
              cursor: 'pointer',
            }}
          >
            <X size={22} />
          </button>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              width: '100%',
              maxWidth: '320px',
            }}
          >
            {/* Connect Button on Top in Mobile Drawer */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn btn-pink"
              style={{
                width: '100%',
                fontSize: '1rem',
                padding: '12px 20px',
                marginBottom: '12px',
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={18} />
            </a>

            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontSize: '1.35rem',
                    fontFamily: 'var(--font-display)',
                    textDecoration: 'none',
                    color: isActive ? 'var(--color-pink)' : 'var(--color-white)',
                    padding: '8px 24px',
                    borderRadius: '12px',
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: isActive ? 'rgba(105, 0, 171, 0.4)' : 'transparent',
                    border: isActive ? '1px solid var(--color-pink)' : '1px solid transparent',
                    transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                    animation: `fadeSlideUp 400ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 60}ms forwards`,
                  }}
                >
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      )}

      {/* Style for responsive navbar rules */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-brand-name {
            display: inline-block !important;
          }
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

