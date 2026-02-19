import { useState } from 'react'
import { Link } from 'react-router-dom'

const FINAL_DESIGN_SLIDES = [
  { src: '/images/Sojubly-Peach.jpg', alt: 'Sojubly Peach' },
  { src: '/images/Sojubly-Yogurt.jpg', alt: 'Sojubly Yogurt' },
  { src: '/images/Sojubly-Mango.jpg', alt: 'Sojubly Mango' },
]

export default function SojublyProject() {
  const [finalDesignIndex, setFinalDesignIndex] = useState(0)

  const goPrev = () => setFinalDesignIndex((i) => (i === 0 ? FINAL_DESIGN_SLIDES.length - 1 : i - 1))
  const goNext = () => setFinalDesignIndex((i) => (i === FINAL_DESIGN_SLIDES.length - 1 ? 0 : i + 1))
  return (
    <article className="project-layout">
      {/* 1. Banner / Hero */}
      <section className="project-banner">
        <img
          src="/images/sojubly-mockup.jpg"
          alt="Sojubly"
          className="project-banner-image"
        />
      </section>

      {/* 2. Project intro - title, description, details */}
      <section className="project-intro">
        <div className="project-intro-inner">
          <div className="project-intro-left">
            <h1 className="project-title">Sojubly</h1>
            <p className="project-description">
            A sparkling soju drink design created with bright colours and playful, modern visuals to convey a fun, refreshing, and youthful brand identity.
            </p>
            <p className="project-read-more">
            November 2025 (2 Weeks)
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
                <p className="project-detail-value">UX/UI Design Branding Illustration</p>
              </div>
            </div>
            <div className="project-detail-column">
              <div className="project-detail">
                <strong className="project-detail-label">Tools</strong>
                <p className="project-detail-value">Illustrator</p>
                <p className="project-detail-value">Photoshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main product visual - dark grey bg, one large placeholder */}
      <section className="project-hero-section">
        <div className="project-hero-image">
          <img src="/images/Sojubly-All.jpg" alt="Sojubly" />
        </div>
      </section>

      {/* 4. Design Intent */}
      <section className="project-section">
        <div className="project-section-inner">
          <div className="project-design-intent-grid">
            <h2 className="project-section-title">Design Intent</h2>
            <div className="project-design-intent-text">
              <p>
              The design for Sojubly focuses on capturing a bright, bubbly, and playful personality that reflects the light, fizzy nature of a carbonated soju spritz. Pastel colours, clean typography, and simple graphic elements are used to clearly distinguish each flavour while keeping the overall look cohesive and modern. The packaging balances fun and clarity, making the product easy to recognize and approachable on the shelf.
              </p>
              <p>
              Designed with a younger, social target audience in mind, Sojubly's visuals appeal to consumers who enjoy casual hangs, pre-drinks, and shareable moments, reinforcing the brand as a fun, easygoing alcoholic beverage meant to be enjoyed with friends.
              </p>
            </div>
            <div className="project-design-intent-image">
              <div className="project-design-intent-image-box">
                <img src="/images/sojubly-sketches.png" alt="Sojubly Sketches" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dieline */}
      <section className="project-section">
        <div className="project-section-inner">
          <h2 className="project-section-title">Dieline</h2>
          <div className="project-dieline-stack">
            <div className="project-placeholder-box project-dieline-image project-placeholder-wide">
              <img src="/images/sojuby-peach-dieline.png" alt="Sojubly Peach Dieline" />
            </div>
            <div className="project-placeholder-box project-dieline-image project-placeholder-wide">
              <img src="/images/sojuby-yogurt-dieline.png" alt="Sojubly Yogurt Dieline" />
            </div>
            <div className="project-placeholder-box project-dieline-image project-placeholder-wide">
                <img src="/images/sojuby-mango-dieline.png" alt="Sojubly Mango Dieline" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Design - carousel */}
      <section className="project-section">
        <div className="project-section-inner">
          <h2 className="project-section-title">Final Design</h2>
          <div className="project-final-carousel">
            <div className="project-final-carousel-inner">
              {FINAL_DESIGN_SLIDES.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`project-final-slide ${i === finalDesignIndex ? 'is-active' : ''}`}
                  aria-hidden={i !== finalDesignIndex}
                >
                  <div className="project-final-image-box">
                    <img src={slide.src} alt={slide.alt} />
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
