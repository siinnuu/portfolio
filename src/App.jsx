import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'

export default function App() {
  const [lightboxData, setLightboxData] = useState(null)

  const handleOpenLightbox = (data) => {
    setLightboxData(data)
  }

  const handleCloseLightbox = () => {
    setLightboxData(null)
  }

  return (
    <div className="portfolio-app">
      <Navbar />

      <main>
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: About Me */}
        <About />

        {/* Section 03: Major Projects */}
        <Projects onOpenLightbox={handleOpenLightbox} />

        {/* Section 04: Experience & Event Contributions */}
        <Experience onOpenLightbox={handleOpenLightbox} />

        {/* Section 05: Software Skills */}
        <Skills />

        {/* Section 06: Contact & Thank You */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lightbox Modal */}
      {lightboxData && (
        <Lightbox
          image={lightboxData.image}
          title={lightboxData.title}
          category={lightboxData.category}
          description={lightboxData.description}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  )
}

