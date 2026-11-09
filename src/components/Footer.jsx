import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-near-black)',
        color: 'var(--color-white)',
        borderTop: '1px solid rgba(245, 134, 255, 0.15)',
        paddingTop: 'var(--space-600)',
        paddingBottom: 'var(--space-600)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            © 2026 Muhammad Sinan. All Rights Reserved.
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontSize: '0.8125rem', color: 'rgba(245, 134, 255, 0.7)' }}>
            Designed & Built with Passion
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              backgroundColor: 'rgba(245, 134, 255, 0.15)',
              border: '1px solid rgba(245, 134, 255, 0.3)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-pink)',
              cursor: 'pointer',
              transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1), background-color 300ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.backgroundColor = 'rgba(245, 134, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.backgroundColor = 'rgba(245, 134, 255, 0.15)'
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

