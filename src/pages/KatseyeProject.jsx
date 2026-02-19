import { useState } from 'react'
import { Link } from 'react-router-dom'

const FINAL_DESIGN_SLIDES = [
  { src: null, alt: 'Katseye poster 1' },
  { src: null, alt: 'Katseye poster 2' },
  { src: null, alt: 'Katseye poster 3' },
]

export default function KatseyeProject() {
  const [finalDesignIndex, setFinalDesignIndex] = useState(0)

  const goPrev = () => setFinalDesignIndex((i) => (i === 0 ? FINAL_DESIGN_SLIDES.length - 1 : i - 1))
  const goNext = () => setFinalDesignIndex((i) => (i === FINAL_DESIGN_SLIDES.length - 1 ? 0 : i + 1))

  return (
    <article className="project-layout">
      <section className="project-banner">
        <img
          src="/images/katseye-mockup.jpg"
          alt="Katseye Posters"
          className="project-banner-image"
        />
      </section>

      <section className="project-intro">
        <div className="project-intro-inner">
          <div className="project-intro-left">
            <h1 className="project-title">Katseye Posters</h1>
            <p className="project-description">
              A concept poster series for KATSEYE, using bold visuals and dynamic lighting to capture the group's confident, modern, and globally driven pop identity.
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
                <p className="project-detail-value">Visual Design, Branding, Illustration</p>
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

      <section className="project-hero-section">
        <div className="project-hero-placeholder">
          <span className="project-placeholder-label">Hero image placeholder</span>
        </div>
      </section>

      <section className="project-section">
        <div className="project-section-inner">
          <div className="project-design-intent-grid">
            <h2 className="project-section-title">Design Intent</h2>
            <div className="project-design-intent-text">
              <p>
              The concept art posters for KATSEYE were created to reflect the group’s bold, global identity and rising-star energy. Strong silhouettes, dynamic lighting, and high-contrast colours convey confidence and movement, while layered graphics add depth and a modern pop edge.
              </p>
              <p>
              The designs balance individuality and unity, highlighting each member’s presence within a cohesive visual narrative. Overall, the posters position KATSEYE as powerful, contemporary, and visually iconic.
              </p>
            </div>
            <div className="project-design-intent-image">
              <div className="project-placeholder-box project-placeholder-square">
                <span className="project-placeholder-label">Image placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-section-inner">
          <h2 className="project-section-title">Dieline</h2>
          <div className="project-dieline-stack">
            <div className="project-placeholder-box project-dieline-image project-placeholder-wide">
              <span className="project-placeholder-label">Dieline image 1</span>
            </div>
            <div className="project-placeholder-box project-dieline-image project-placeholder-wide">
              <span className="project-placeholder-label">Dieline image 2</span>
            </div>
            <div className="project-placeholder-box project-dieline-image project-placeholder-wide">
              <span className="project-placeholder-label">Dieline image 3</span>
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
                  key={i}
                  className={`project-final-slide ${i === finalDesignIndex ? 'is-active' : ''}`}
                  aria-hidden={i !== finalDesignIndex}
                >
                  <div className="project-final-image-box has-placeholder">
                    <span className="project-placeholder-label">Poster {i + 1}</span>
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
