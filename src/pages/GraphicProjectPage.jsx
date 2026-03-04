import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCaseStudyByProjectId } from '../data/projectCaseStudies'

export default function GraphicProjectPage({ project }) {
  const caseStudy = getCaseStudyByProjectId(project.id)
  const data = caseStudy ?? {}

  const bannerImage = data.bannerImage ?? project.image
  const subtitle = data.subtitle ?? 'Graphic Design'
  const role = data.role ?? 'Graphic Designer'
  const skills = data.skills ?? '—'
  const tools = Array.isArray(data.tools) ? data.tools : (data.tools ? [data.tools] : ['—'])
  const designIntentText = data.designIntentText ?? []
  const designIntentImage = data.designIntentImage ?? null
  const dielineImages = data.dielineImages ?? [null, null, null]
  const finalDesignSlides = data.finalDesignSlides ?? []
  const finalDesignImage = data.finalDesignImage ?? null
  const showDieline = data.showDieline !== false

  const [finalDesignIndex, setFinalDesignIndex] = useState(0)
  const slides = finalDesignSlides.length > 0 ? finalDesignSlides : [{ src: null, alt: 'Final design' }]
  const goPrev = () => setFinalDesignIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
  const goNext = () => setFinalDesignIndex((i) => (i === slides.length - 1 ? 0 : i + 1))

  return (
    <article className="project-layout">
      <section className="project-banner">
        <img
          src={bannerImage}
          alt={project.title}
          className="project-banner-image"
        />
      </section>

      <section className="project-intro">
        <div className="project-intro-inner">
          <div className="project-intro-left">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <p className="project-read-more">{subtitle}</p>
          </div>
          <div className="project-intro-right">
            <div className="project-detail-column">
              <div className="project-detail">
                <strong className="project-detail-label">Role</strong>
                <p className="project-detail-value">{role}</p>
              </div>
            </div>
            <div className="project-detail-column">
              <div className="project-detail">
                <strong className="project-detail-label">Skills</strong>
                <p className="project-detail-value">{skills}</p>
              </div>
            </div>
            <div className="project-detail-column">
              <div className="project-detail">
                <strong className="project-detail-label">Tools</strong>
                {tools.map((t, i) => (
                  <p key={i} className="project-detail-value">{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-hero-section">
        {data.heroImage ? (
          <div className="project-hero-image">
            <img
              src={data.heroImage}
              alt={data.heroImageAlt ?? project.title}
            />
          </div>
        ) : (
          <div className="project-hero-placeholder">
            <span className="project-placeholder-label">Hero image placeholder</span>
          </div>
        )}
      </section>

      {designIntentText.length > 0 && (
        <section className="project-section">
          <div className="project-section-inner">
            <div className="project-design-intent-grid">
              <h2 className="project-section-title">Design Intent</h2>
              <div className="project-design-intent-text">
                {designIntentText.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="project-design-intent-image">
                {designIntentImage ? (
                  <div className="project-design-intent-image-box">
                    <img src={designIntentImage.src} alt={designIntentImage.alt} />
                  </div>
                ) : (
                  <div className="project-placeholder-box project-placeholder-square">
                    <span className="project-placeholder-label">Image placeholder</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="project-section">
        <div className="project-section-inner">
          <h2 className="project-section-title">Final Design</h2>
          {finalDesignImage ? (
            <div className="project-hero-image" style={{ marginBottom: '1.5rem' }}>
              <img src={finalDesignImage.src} alt={finalDesignImage.alt ?? project.title} />
            </div>
          ) : (
            <div className="project-hero-placeholder project-placeholder-box" style={{ minHeight: 280, marginBottom: '1.5rem' }}>
              <span className="project-placeholder-label">Image placeholder</span>
            </div>
          )}
          <div className="project-final-carousel">
            <div className="project-final-carousel-inner">
              {slides.map((slide, i) => (
                <div
                  key={slide.src ?? i}
                  className={`project-final-slide ${i === finalDesignIndex ? 'is-active' : ''}`}
                  aria-hidden={i !== finalDesignIndex}
                >
                  <div className={`project-final-image-box ${!slide.src ? 'has-placeholder' : ''}`}>
                    {slide.src ? (
                      <img src={slide.src} alt={slide.alt} />
                    ) : (
                      <span className="project-placeholder-label">
                        {slide.alt || `Slide ${i + 1}`}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {slides.length > 1 && (
                <>
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
                </>
              )}
            </div>
            {slides.length > 1 && (
              <div className="project-carousel-dots" role="tablist" aria-label="Final design slides">
                {slides.map((_, i) => (
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
            )}
          </div>
        </div>
      </section>

      {showDieline && (
        <section className="project-section">
          <div className="project-section-inner">
            <h2 className="project-section-title">Dieline</h2>
            <div className="project-dieline-stack">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="project-placeholder-box project-dieline-image project-placeholder-wide"
                >
                  {dielineImages[i]?.src ? (
                    <img src={dielineImages[i].src} alt={dielineImages[i].alt ?? `${project.title} dieline ${i + 1}`} />
                  ) : (
                    <span className="project-placeholder-label">Dieline image {i + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="project-back-wrap">
        <Link to="/#work" className="project-back-link">
          ← Back to Projects
        </Link>
      </div>
    </article>
  )
}
