import { useRef, useState } from 'react'

const TIMELINE_SECTIONS = [
  { id: 'problem-space', label: 'PROBLEM SPACE' },
  { id: 'user-research', label: 'USER RESEARCH' },
  { id: 'information-architecture', label: 'INFORMATION ARCHITECTURE' },
  { id: 'writing-flow', label: 'WRITING FLOW' },
  { id: 'visual-design', label: 'VISUAL DESIGN' },
  { id: 'final-product', label: 'FINAL PRODUCT' },
]

const YOUTUBE_VIDEO_ID = 'RwwwTf21CHA'

export default function InkLinkCaseStudy({ project }) {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxZoom, setLightboxZoom] = useState(1)
  const [lightboxFitSize, setLightboxFitSize] = useState(null)
  const lightboxViewportRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false)

  const title = project?.title ?? 'InkLink'
  const description =
    project?.description ??
    'A collaborative chain writing web app where writers can jump into story chains, add their own twist, and watch narratives grow beyond imagination.'

  const bannerImage = project?.image ?? '/images/inklink-mockup.png'

  const openLightbox = (src, alt) => {
    setLightboxImage({ src, alt })
    setLightboxZoom(1)
    setLightboxFitSize(null)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxZoom(1)
    setLightboxFitSize(null)
  }

  const handleLightboxImageLoad = (e) => {
    const viewportEl = lightboxViewportRef.current
    if (!viewportEl) return

    const viewportRect = viewportEl.getBoundingClientRect()
    const naturalWidth = e.currentTarget.naturalWidth
    const naturalHeight = e.currentTarget.naturalHeight
    if (!naturalWidth || !naturalHeight || viewportRect.width <= 0 || viewportRect.height <= 0) {
      return
    }

    const fitScale = Math.min(viewportRect.width / naturalWidth, viewportRect.height / naturalHeight)
    setLightboxFitSize({
      width: naturalWidth * fitScale,
      height: naturalHeight * fitScale,
    })
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
              {(project?.githubUrl || project?.websiteUrl) && (
                <div className="uxcs-hero-chips">
                  {project?.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uxcs-chip"
                    >
                      Website ↗
                    </a>
                  )}
                  {project?.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uxcs-chip"
                    >
                      View App ↗
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="uxcs-hero-meta">
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">My Role(s)</p>
                <ul className="uxcs-meta-list">
                  <li>Product Designer</li>
                  <li>UX/UI Designer</li>
                  <li>Interaction Designer</li>
                </ul>
              </div>
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">Skills</p>
                <ul className="uxcs-meta-list">
                  <li>User Research</li>
                  <li>Interaction Design</li>
                  <li>Prototyping</li>
                  <li>Design Systems</li>
                </ul>
              </div>
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">Toolkit</p>
                <ul className="uxcs-meta-list">
                  <li>Figma</li>
                  <li>FigJam</li>
                  <li>Notion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="timeline" className="uxcs-timeline">
          <div className="uxcs-section-inner">
            <h2 className="uxcs-timeline-title">Timeline</h2>
            <p className="uxcs-timeline-helper">[ click on the timeline to jump to a section ]</p>
            <div className="uxcs-timeline-row">
              <span className="uxcs-timeline-label">Jan 2026</span>
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
              <span className="uxcs-timeline-label">Mar 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM OVERVIEW */}
      <section id="problem-overview" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">PROBLEM OVERVIEW</p>
          <h2 className="uxcs-section-title">Making Collaborative Writing Feel Effortless</h2>
          <p className="uxcs-body">
            Writers often want to collaborate for fun, practice, or inspiration, but most tools are
            built for serious documents, not playful storytelling. Threads get messy, version
            control is confusing, and it&apos;s hard to see where to jump in. InkLink explores how a
            lightweight, chain-based format can lower the barrier to collaboration while keeping the
            experience focused, welcoming, and creative.
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
              src="/images/inklink-comp_analysis.svg"
              alt="InkLink competitive analysis"
              onClick={() => openLightbox('/images/inklink-comp_analysis.svg', 'InkLink competitive analysis')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>

      {/* User research */}
      <section id="user-research" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">USER RESEARCH</p>
          <h2 className="uxcs-section-title">Understanding Writers&apos; Habits</h2>
          <p className="uxcs-body">
          Interviewees and survey respondents included hobbyists and students or aspiring writing professionals with varying levels of experience. The key findings were:
          </p>
          <div className="uxcs-stat-cards">
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">88%</span>
              <p className="uxcs-stat-text">
                would benefit from a writing tool that guides the publishing process and file formatting.
              </p>
            </div>
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">67%</span>
              <p className="uxcs-stat-text">
                prefer writing using both digital platforms and analog tools.
              </p>
            </div>
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">100%</span>
              <p className="uxcs-stat-text">
                prefer writing on a laptop or PC when writing digitally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section id="user-persona" className="uxcs-section">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title uxcs-personas-title">Who We're Building For</h2>
          <div className="uxcs-personas-grid">
            <div className="uxcs-persona-item">
              <div className="uxcs-image-placeholder uxcs-persona-placeholder uxcs-persona-placeholder--inklink">
                <img
                  src="/images/inklink-primary_persona.svg"
                  alt="InkLink primary persona"
                  onClick={() =>
                    openLightbox(
                      '/images/inklink-primary_persona.svg',
                      'InkLink primary persona',
                    )
                  }
                  style={{ cursor: 'zoom-in' }}
                />
              </div>
              <a
                href="/documents/inklink-primary_persona.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="uxcs-persona-cta"
              >
                View Full Primary Persona →
              </a>
            </div>

            <div className="uxcs-persona-item">
              <div className="uxcs-image-placeholder uxcs-persona-placeholder uxcs-persona-placeholder--inklink">
                <img
                  src="/images/inklink-secondary_persona.svg"
                  alt="InkLink secondary persona"
                  onClick={() =>
                    openLightbox(
                      '/images/inklink-secondary_persona.svg',
                      'InkLink secondary persona',
                    )
                  }
                  style={{ cursor: 'zoom-in' }}
                />
              </div>
              <a
                href="/documents/inklink-secondary_persona.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="uxcs-persona-cta"
              >
                View Full Secondary Persona →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* User Sitemap and Wireframes */}
      <section id="information-architecture" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">USER SITEMAP AND WIREFRAMES</p>
          <h2 className="uxcs-section-title">Creating a User-Centered Experience</h2>
          <p className="uxcs-body">
          The sitemap was drafted around three main goals: enabling users to create reports, access and review reports, and view anonymous reports on a public dashboard.
          </p>
          <div className="uxcs-image-placeholder uxcs-sitemap-placeholder">
            <img
              src="/images/inklink-sitemap.png"
              alt="InkLink sitemap"
              onClick={() => openLightbox('/images/inklink-sitemap.png', 'InkLink sitemap')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>

      {/* Lo-Fi Wireframes */}
      <section className="uxcs-section">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title">Lo-Fi Wireframes</h2>
          <p className="uxcs-body">
          As the wireframes were developed, different formats and layouts were explored for each screen, with accessibility prioritized for trade workers wearing gloves. To support this need, a larger central report button was designed to ensure easier and more reliable use.
          </p>
          <div className="uxcs-image-placeholder uxcs-wireframe-placeholder">
            <img
              src="/images/inklink-lofi.png"
              alt="InkLink lo-fi wireframes"
              onClick={() => openLightbox('/images/inklink-lofi.png', 'InkLink lo-fi wireframes')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>

      {/* Design System */}
      <section id="design-system" className="uxcs-section">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title">Design System</h2>
          <div className="uxcs-image-placeholder uxcs-styleguide-placeholder">
            <img
              src="/images/inklink-styleguide.svg"
              alt="InkLink styleguide"
              onClick={() => openLightbox('/images/inklink-styleguide.svg', 'InkLink styleguide')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>
      
      {/* Marketing Material */}
      <section id="marketing-material" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">MARKETING MATERIAL</p>
          <h2 className="uxcs-section-title">Promotional Video</h2>
          <div className="uxcs-youtube-wrapper">
            {showVideo ? (
              <div className="uxcs-youtube-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                  title="InkLink promotional video"
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
                aria-label="Play InkLink promotional video"
              >
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                  alt="InkLink promotional video thumbnail"
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

      {/* Final product */}
      <section id="final-product" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">FINAL PRODUCT</p>
          <h2 className="uxcs-section-title">Hi-Fi Wireframes</h2>
          <p className="uxcs-body">
            The final wireframes showcases how writers can browse chains, join in with a quick
            contribution, and see their addition immediately reflected in the narrative. It&apos;s a
            small but joyful space designed to lower the pressure around writing and make it easier
            to create something together.</p>
          <div className="uxcs-image-placeholder uxcs-hifi-placeholder">
            <img
              src="/images/inklink-hifi.png"
              alt="InkLink hi-fi wireframes"
              onClick={() => openLightbox('/images/inklink-hifi.png', 'InkLink hi-fi wireframes')}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">ACHIEVEMENTS</p>
          <h2 className="uxcs-section-title">🥇 Link the World Through Ink</h2>
          <div className="uxcs-achievements-intro">
            <div className="uxcs-achievements-copy">
              <p className="uxcs-body">
                Over the span of 15 weeks, the project provided valuable hands-on experience-from
                designing the user interface to developing strong team collaboration skills.
              </p>
              <p className="uxcs-body">
                After presenting to the D3 program, InkLink was voted 1st place in the Web App category by fellow D3 students.
              </p>
              <p className="uxcs-body">
                Shout out to my team for their hard work and dedication, this project would not have been possible without them!
              </p>
            </div>
            <div className="uxcs-image-placeholder uxcs-achievements-photo-placeholder">
              <img
                src="/images/inklink-photo.jpg"
                alt="InkLink team photo"
                onClick={() =>
                  openLightbox('/images/inklink-photo.jpg', 'InkLink team photo')
                }
                style={{ cursor: 'zoom-in' }}
              />
            </div>
          </div>
          <div className="uxcs-achievements-cards">
            <div className="uxcs-achievements-card">
              <p className="uxcs-achievements-callout-title">🥇 1st Place</p>
              <p className="uxcs-achievements-callout-desc">InkLink was voted 1st place in the Web App category.</p>
            </div>
            <div className="uxcs-achievements-card">
              <p className="uxcs-achievements-callout-title">🤝 Collaborated with BCIT FSWD Students</p>
              <p className="uxcs-achievements-callout-desc"> Worked closely with 4 FSWD students to bring InkLink to life.</p>
            </div>
            <div className="uxcs-achievements-card">
              <p className="uxcs-achievements-callout-title">👥 70+ Attendees</p>
              <p className="uxcs-achievements-callout-desc">Pitched InkLink to D3 Students and Faculty.</p>
            </div>
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

            <div className="uxcs-image-lightbox-viewport" ref={lightboxViewportRef}>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                onLoad={handleLightboxImageLoad}
                style={
                  lightboxFitSize
                    ? {
                        width: lightboxFitSize.width * lightboxZoom,
                        height: lightboxFitSize.height * lightboxZoom,
                      }
                    : { maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }
                }
              />
            </div>
          </div>
        </div>
      )}
    </article>
  )
}