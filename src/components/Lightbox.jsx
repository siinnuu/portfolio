import React, { useEffect } from 'react'
import { X, ZoomIn } from 'lucide-react'

export default function Lightbox({ image, title, category, description, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!image) return null

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(15, 11, 18, 0.94)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close image preview"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'rgba(245, 134, 255, 0.15)',
          border: '1px solid rgba(245, 134, 255, 0.4)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F586FF',
          cursor: 'pointer',
          transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1), background-color 300ms'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.backgroundColor = 'rgba(245, 134, 255, 0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.backgroundColor = 'rgba(245, 134, 255, 0.15)'
        }}
      >
        <X size={22} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '92vw',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <div
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(245, 134, 255, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
            backgroundColor: '#17131B'
          }}
        >
          <img
            src={image}
            alt={title || 'Design Work'}
            style={{
              maxHeight: '75vh',
              maxWidth: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        {(title || category || description) && (
          <div
            style={{
              textAlign: 'center',
              maxWidth: '680px',
              color: '#FFFFFF'
            }}
          >
            {category && (
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#F586FF',
                  marginBottom: '4px',
                  fontWeight: 600
                }}
              >
                {category}
              </span>
            )}
            {title && (
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                  marginBottom: '4px'
                }}
              >
                {title}
              </h3>
            )}
            {description && (
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.4
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

