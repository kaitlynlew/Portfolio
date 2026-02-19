import { useState } from 'react'
import { Link } from 'react-router-dom'

const FINAL_DESIGN_SLIDES = [
  { src: '/images/korea-brochure-1.png', alt: 'Brochure pages 1' },
  { src: '/images/korea-brochure-2-3.png', alt: 'Brochure pages 2-3' },
  { src: '/images/korea-brochure-4-5.png', alt: 'Brochure pages 4-5' },
  { src: '/images/korea-brochure-6-7.png', alt: 'Brochure pages 6-7' },
  { src: '/images/korea-brochure-10-11.png', alt: 'Brochure pages 8-9' },
  { src: '/images/korea-brochure-12.png', alt: 'Brochure pages 10-11' },
]

export default function KoreaBrochureProject() {
  const [finalDesignIndex, setFinalDesignIndex] = useState(0)

  const goPrev = () => setFinalDesignIndex((i) => (i === 0 ? FINAL_DESIGN_SLIDES.length - 1 : i - 1))
  const goNext = () => setFinalDesignIndex((i) => (i === FINAL_DESIGN_SLIDES.length - 1 ? 0 : i + 1))

  return (
    <article className="project-layout">
      <section className="project-banner">
        <img
          src="/images/korea-brochure-mockup.jpg"
          alt="Korea Travel Brochure"
          className="project-banner-image"
        />
      </section>

      <section className="project-intro">
        <div className="project-intro-inner">
          <div className="project-intro-left">
            <h1 className="project-title">Korea Travel Brochure</h1>
            <p className="project-description">
              A travel brochure for Korea designed with modern layouts and vibrant visuals to highlight the country's culture, landmarks, and sense of adventure.
            </p>
            <p className="project-read-more">
              Graphic Design
            </p>
          </div>
          <div className="project-intro-right">
            <div className="project-detail-column">
              <div className="project-detail">
                <strong className="project-detail-label">Role</strong>
                <p className="project-detail-value">Graphic Designer</p>
              </div>
            </div>
            <div className="project-detail-column">
              <div className="project-detail">
                <strong className="project-detail-label">Skills</strong>
                <p className="project-detail-value">Layout Design, Branding, Illustration</p>
              </div>
            </div>
            <div className="project-detail-column">
              <div className="project-detail">
                <strong className="project-detail-label">Tools</strong>
                <p className="project-detail-value">Illustrator</p>
                <p className="project-detail-value">InDesign</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-hero-section">
        <div className="project-hero-image">
          <img src="/images/Korea-Brochure.jpg" alt="Korea Travel Brochure — Seoul to Jeju-si" />
        </div>
      </section>

      <section className="project-section">
        <div className="project-section-inner">
          <div className="project-design-intent-grid">
            <h2 className="project-section-title">Design Intent</h2>
            <div className="project-design-intent-text">
              <p>
              Designed with curious, adventure-seeking travellers in mind—particularly younger audiences and first-time visitors—the overall design balances inspiration with clarity, encouraging exploration and positioning Korea as an exciting, accessible, and must-visit destination.
              </p>
              <p>
              Blending tradition with modernity, the brochure highlights expressive portraits and authentic everyday moments to create a personal, relatable connection to the culture. Instead of simply presenting landmarks, it immerses readers in experiences, helping them picture themselves there and ultimately motivating them to turn that interest into a trip.              </p>
            </div>
            <div className="project-design-intent-image">
              <div className="project-design-intent-image-box">
                <img src="/images/korea-brochure-mockup2.jpg" alt="Soul of South Korea brochure in rattan tray" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-section-inner">
          <h2 className="project-section-title">Final Design</h2>
          <div className="project-final-carousel">
            <div className="project-final-carousel-inner">
              {FINAL_DESIGN_SLIDES.map((slide, i) => (
                <div
                  key={slide.src ?? i}
                  className={`project-final-slide ${i === finalDesignIndex ? 'is-active' : ''}`}
                  aria-hidden={i !== finalDesignIndex}
                >
                  <div className={`project-final-image-box ${!slide.src ? 'has-placeholder' : ''}`}>
                    {slide.src ? (
                      <img src={slide.src} alt={slide.alt} />
                    ) : (
                      <span className="project-placeholder-label">Pages {i * 2 + 1}–{i * 2 + 2}</span>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="project-carousel-btn project-carousel-prev"
                onClick={goPrev}
                aria-label="Previous design"
              >
                ‹
              </button>
              <button
                type="button"
                className="project-carousel-btn project-carousel-next"
                onClick={goNext}
                aria-label="Next design"
              >
                ›
              </button>
            </div>
            <div className="project-carousel-dots" role="tablist" aria-label="Final design slides">
              {FINAL_DESIGN_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === finalDesignIndex}
                  aria-label={`Slide ${i + 1}`}
                  className={`project-carousel-dot ${i === finalDesignIndex ? 'is-active' : ''}`}
                  onClick={() => setFinalDesignIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="project-back-wrap">
        <Link to="/#work" className="project-back-link">
          ← Back to Projects
        </Link>
      </div>
    </article>
  )
}
