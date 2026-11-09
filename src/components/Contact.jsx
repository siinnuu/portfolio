import React, { useState } from 'react'
import { Phone, Mail, Send, CheckCircle2, ArrowUpRight } from 'lucide-react'

// Authentic icons from PDF
import phoneIconImg from '../assets/icons/phone.png'
import mailIconImg from '../assets/icons/mail.png'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSending(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/work.sinan7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Fallback to email client')
      }
    } catch (err) {
      // Direct mailto fallback to work.sinan7@gmail.com
      const mailtoUrl = `mailto:work.sinan7@gmail.com?subject=${encodeURIComponent('Design Inquiry from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender: ' + formData.name + ' (' + formData.email + ')')}`
      window.location.href = mailtoUrl
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsSending(false)
    }
  }

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/s.innuu/',
      display: '@s.innuu',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sinnuu',
      display: 'linkedin.com/in/sinnuu',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    }
  ]

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--color-purple)',
        color: 'var(--color-white)',
        paddingTop: 'var(--space-900)',
        paddingBottom: 'var(--space-800)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Main contact card composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-700)',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Direct Contact Information */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-pink)',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Get In Touch
            </span>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1,
                color: 'var(--color-white)',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              LET'S CONNECT.
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '36px',
                lineHeight: 1.5,
              }}
            >
              Available for freelance design projects, editorial publications, branding identities, and creative collaborations.
            </p>

            {/* Direct Contact Links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '40px',
              }}
            >
              {/* Phone */}
              <a
                href="tel:+917510223381"
                className="card-hover-lift"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: 'rgba(23, 19, 27, 0.5)',
                  padding: '14px 20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(245, 134, 255, 0.25)',
                  textDecoration: 'none',
                  color: 'var(--color-white)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245, 134, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-pink)',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.08em' }}>
                    Direct Call / WhatsApp
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF' }}>
                    +91 7510223381
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ marginLeft: 'auto', color: 'var(--color-pink)' }} />
              </a>

              {/* Email */}
              <a
                href="mailto:amsinan1234@gmail.com"
                className="card-hover-lift"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: 'rgba(23, 19, 27, 0.5)',
                  padding: '14px 20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(245, 134, 255, 0.25)',
                  textDecoration: 'none',
                  color: 'var(--color-white)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245, 134, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-pink)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.08em' }}>
                    Email Inquiries
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', wordBreak: 'break-all' }}>
                    amsinan1234@gmail.com
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ marginLeft: 'auto', color: 'var(--color-pink)' }} />
              </a>
            </div>

            {/* Social Channels */}
            <div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-pink)',
                  marginBottom: '14px',
                }}
              >
                Digital Presence
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      fontSize: '0.875rem',
                      padding: '8px 16px',
                      backgroundColor: 'rgba(23, 19, 27, 0.35)',
                      color: '#FFFFFF',
                      borderColor: 'rgba(245, 134, 255, 0.35)',
                    }}
                  >
                    <span style={{ color: 'var(--color-pink)' }}>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Message Box & Iconic Thank You sign-off */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            {/* Quick Contact Form */}
            <div
              style={{
                backgroundColor: 'rgba(23, 19, 27, 0.6)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: 'clamp(20px, 4vw, 32px)',
                border: '1px solid rgba(245, 134, 255, 0.25)',
                marginBottom: '36px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '8px',
                }}
              >
                Send a Direct Message
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '20px',
                }}
              >
                Have a design brief, project inquiry, or creative concept? Drop a line below.
              </p>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(105, 0, 171, 0.5)',
                    border: '1px solid var(--color-pink)',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <CheckCircle2 size={36} color="var(--color-pink)" style={{ margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Message Sent Directly!</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '16px' }}>
                    Your message has been delivered. Sinan will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                    style={{
                      fontSize: '0.8125rem',
                      padding: '6px 14px',
                      color: '#FFFFFF',
                      borderColor: 'var(--color-pink)',
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--color-pink)',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Ayesha Rahman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(23, 19, 27, 0.8)',
                        border: '1px solid rgba(245, 134, 255, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--color-pink)',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. hello@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(23, 19, 27, 0.8)',
                        border: '1px solid rgba(245, 134, 255, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--color-pink)',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Project Brief or Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      placeholder="Describe what you want to create together..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(23, 19, 27, 0.8)',
                        border: '1px solid rgba(245, 134, 255, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn btn-pink"
                    style={{
                      marginTop: '6px',
                      padding: '10px 20px',
                      fontWeight: 600,
                      gap: '8px',
                      opacity: isSending ? 0.7 : 1,
                      cursor: isSending ? 'wait' : 'pointer',
                    }}
                  >
                    <span>{isSending ? 'Sending to Sinan...' : 'Send Direct Message'}</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Right side signature from Page 10 of PDF:
                "GOOD DESIGN STARTS WITH A GOOD CONVERSATION"
                "thank you" */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right',
                marginTop: '16px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.85rem, 1.8vw, 1.15rem)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                GOOD DESIGN STARTS WITH A GOOD CONVERSATION
              </div>

              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                  lineHeight: 0.9,
                  color: 'var(--color-pink)',
                  letterSpacing: '-0.02em',
                  textTransform: 'lowercase',
                  userSelect: 'none',
                }}
              >
                thank<br />you
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
