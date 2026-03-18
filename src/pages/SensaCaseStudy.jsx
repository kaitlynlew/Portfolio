import { useState } from 'react'

const TIMELINE_SECTIONS = [
  { id: 'competitive-analysis', label: 'COMPETITIVE ANALYSIS' },
  { id: 'user-research', label: 'USER RESEARCH' },
  { id: 'user-journey-and-sitemap', label: 'USER JOURNEY & SITEMAP' },
  { id: 'styleguide', label: 'STYLEGUIDE' },
  { id: 'final-product', label: 'FINAL PRODUCT' },
]

const YOUTUBE_VIDEO_ID = 'ZlWljG38Yrc?si=_BDRcB99M6-NgZDY'

export default function SensaCaseStudy({ project }) {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxZoom, setLightboxZoom] = useState(1.5)
  const [showVideo, setShowVideo] = useState(false)

  const title = project?.title ?? 'Sensa'
  const description =
    project?.description ??
    'A sensory-driven visual identity exploring colour, texture, and motion to create an immersive, emotive brand presence across touchpoints.'

  const bannerImage = project?.image ?? '/images/sensa.png'

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openLightbox = (src, alt) => {
    setLightboxImage({ src, alt })
    setLightboxZoom(1.5)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxZoom(1.5)
  }

  return (
    <article className="uxcs">
      <section className="project-banner">
        <img src={bannerImage} alt={title} className="project-banner-image" />
      </section>

      <section className="uxcs-hero">
        <div className="uxcs-hero-body">
          <div className="uxcs-hero-inner">
            <div className="uxcs-hero-left">
              <h1 className="uxcs-title">{title}</h1>
              <p className="uxcs-lede">{description}</p>
              <div className="uxcs-hero-chips">
                <a
                  href="https://devpost.com/software/sensa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uxcs-chip"
                >
                  Devpost ↗
                </a>
                <a
                  href="https://www.figma.com/deck/JEuXmEx8PU5Fi8Vjhzx55i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uxcs-chip"
                >
                  Pitch Deck ↗
                </a>
              </div>
            </div>

            <div className="uxcs-hero-meta">
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">My Role(s)</p>
                <ul className="uxcs-meta-list">
                  <li>UX/UI Designer</li>
                  <li>UX/UI Researcher</li>
                  <li>Video Editor</li>
                </ul>
              </div>
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">Toolkit</p>
                <ul className="uxcs-meta-list">
                  <li>Figma</li>
                  <li>Figma Make</li>
                  <li>Premiere Pro</li>
                </ul>
              </div>
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">Team</p>
                <ul className="uxcs-meta-list">
                  <li>4 members</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Video section */}
        <section id="video-overview" className="uxcs-section uxcs-video-section">
          <div className="uxcs-section-inner">
            <p className="uxcs-section-label">DEMO VIDEO</p>
            <h2 className="uxcs-section-title">Sensa Video Pitch</h2>
            <div className="uxcs-youtube-wrapper">
              {showVideo ? (
                <div className="uxcs-youtube-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}&autoplay=1`}
                    title="Sensa walkthrough video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="uxcs-youtube-thumb"
                  onClick={() => setShowVideo(true)}
                  aria-label="Play Sensa walkthrough video"
                >
                  <img
                    src={`https://img.youtube.com/vi/ZlWljG38Yrc/maxresdefault.jpg`}
                    alt="Sensa walkthrough video thumbnail"
                  />
                  <div className="uxcs-youtube-thumb-overlay">
                    <span className="uxcs-youtube-play-icon" />
                    <span className="uxcs-youtube-thumb-label">Play video</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </section>

        <div id="timeline" className="uxcs-timeline">
          <div className="uxcs-section-inner">
            <h2 className="uxcs-timeline-title">Timeline</h2>
            <p className="uxcs-timeline-helper">[ click on the timeline to jump to a section ]</p>
            <div className="uxcs-timeline-row">
              <span className="uxcs-timeline-label">March 7, 2026</span>
              <div className="uxcs-timeline-track">
                {TIMELINE_SECTIONS.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    className="uxcs-timeline-dot"
                    onClick={() => scrollToSection(id)}
                    aria-label={`Go to ${label}`}
                  >
                    <span className="uxcs-timeline-tooltip">{label}</span>
                  </button>
                ))}
              </div>
              <span className="uxcs-timeline-label">March 9, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="problem-space" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">OVERVIEW</p>
          <h2 className="uxcs-section-title">Listen to your body. Reclaim control.</h2>
          <p className="uxcs-body">
          Sensa is a speculative health app that explores how wearable technology and interoception — the body’s ability to sense internal signals — can help people recognize early warning signs before cravings occur. The goal is to empower individuals to better understand their bodies and regain control over impulse-driven habits.
          </p>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section id="competitive-analysis" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">COMPETITIVE ANALYSIS</p>
          <h2 className="uxcs-section-title">Exploring the Existing Solutions</h2>
          <div className="uxcs-image-placeholder uxcs-comp-placeholder">
            <img
              src="/images/sensa_comp-analysis.svg"
              alt="Competitive analysis image"
              onClick={() =>
                openLightbox('/images/sensa_comp-analysis.svg', 'Competitive analysis image')
              }
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>

      {/* User Research */}
      <section id="user-research" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">USER RESEARCH</p>
          <h2 className="uxcs-section-title">Understanding the User</h2>
          <p className="uxcs-body">
          The user persona represents Sensa’s target user, capturing their goals, frustrations, and behaviors around cravings. It guided design decisions by keeping the focus on real needs, ensuring the app feels relevant, supportive, and easy to use.
          </p>
          <div className="uxcs-image-placeholder uxcs-user-research-placeholder">
            <img
              src="/images/sensa_persona.svg"
              alt="User persona image"
              onClick={() => openLightbox('/images/sensa_persona.svg', 'User persona image')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>

      {/* User Journey and Sitemap*/}
      <section id="user-journey-and-sitemap" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">USER JOURNEY AND SITEMAP</p>
          <h2 className="uxcs-section-title">Mapping the User's Journey</h2>
          <p className="uxcs-body">
          The user journey and sitemap were created to understand the user's journey and the flow of the app.
          </p>
          <div className="uxcs-image-placeholder uxcs-user-journey-and-sitemap-placeholder">
            <img
              src="/images/sensa_user-journey.svg"
              alt="User journey image"
              onClick={() => openLightbox('/images/sensa_user-journey.svg', 'User journey image')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
          <div className="uxcs-image-placeholder uxcs-user-journey-and-sitemap-placeholder">
            <img
              src="/images/sensa_user-flow.svg"
              alt="User flow image"
              onClick={() => openLightbox('/images/sensa_user-flow.svg', 'User flow image')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>
      
      {/* Styleguide */}
      <section id="styleguide" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">STYLEGUIDE</p>
          <h2 className="uxcs-section-title">Defining the Visual Language</h2>
          <p className="uxcs-body">
          The style guide defines Sensa’s visual language—typography, colours, and logo—ensuring a consistent, calming, and cohesive user experience across the app.
          </p>
          <div className="uxcs-image-placeholder uxcs-styleguide-placeholder">  
            <img
              src="/images/sensa_styleguide.jpg"
              alt="Styleguide image"
              onClick={() => openLightbox('/images/sensa_styleguide.jpg', 'Styleguide image')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>

      {/* Final Product */}
      <section id="final-product" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">FINAL PRODUCT</p>
          <h2 className="uxcs-section-title">Hi-Fi Wireframes</h2>
          <p className="uxcs-body">
          High-fidelity wireframes refined Sensa’s visual identity and interactions into a clear, intuitive interface, creating a calm experience that supports users in managing cravings.
          </p>
          <div className="uxcs-image-placeholder uxcs-hifi-placeholder">
            <img
              src="/images/sensa_wireframes.png"
              alt="Hi-Fi wireframes Mockup"
              onClick={() =>
                openLightbox('/images/sensa_wireframes.png', 'Hi-Fi wireframes Mockup')
              }
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>

      <button
        type="button"
        className="uxcs-back-to-timeline"
        onClick={scrollToTimeline}
        aria-label="Back to timeline"
      >
        <span className="uxcs-back-to-timeline-arrow" />
        <span className="uxcs-back-to-timeline-label">Timeline</span>
      </button>

      {lightboxImage && (
        <div
          className="uxcs-image-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div className="uxcs-image-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="uxcs-image-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close enlarged image"
            >
              ×
            </button>

            <div className="uxcs-image-lightbox-toolbar">
              <button
                type="button"
                onClick={() => setLightboxZoom((z) => Math.max(0.5, z - 0.25))}
              >
                −
              </button>
              <span>{Math.round(lightboxZoom * 100)}%</span>
              <button
                type="button"
                onClick={() => setLightboxZoom((z) => Math.min(4, z + 0.25))}
              >
                +
              </button>
            </div>

            <div className="uxcs-image-lightbox-viewport">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                style={{ transform: `scale(${lightboxZoom})` }}
              />
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

