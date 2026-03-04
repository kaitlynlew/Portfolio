const TIMELINE_SECTIONS = [
  { id: 'competitive-analysis', label: 'COMPETITIVE ANALYSIS' },
  { id: 'user-research', label: 'USER RESEARCH' },
  { id: 'user-sitemap-wireframes', label: 'USER SITEMAP AND WIREFRAMES' },
  { id: 'user-testing', label: 'USER TESTING' },
  { id: 'web-supplement', label: 'WEB SUPPLEMENT' },
  { id: 'marketing-strategy', label: 'MARKETING STRATEGY' },
  { id: 'final-product', label: 'FINAL PRODUCT' },
  { id: 'achievements', label: 'ACHIEVEMENTS' },
]

export default function SafeSpaceCaseStudy({ project }) {
  const title = project?.title ?? 'SafeSpace'
  const description =
    project?.description ??
    'An anonymous reporting app for gender minorities in the trades industry to record incidents, build awareness, and push for change.'

  const bannerImage = project?.image ?? '/images/safespace-mockup.png'

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <article className="uxcs">
      <section className="project-banner">
        <img
          src={bannerImage}
          alt={title}
          className="project-banner-image"
        />
      </section>

      <section className="uxcs-hero">
        <div className="uxcs-hero-body">
          <div className="uxcs-hero-inner">
            <div className="uxcs-hero-left">
              <h1 className="uxcs-title">{title}</h1>
              <p className="uxcs-lede">{description}</p>
              {(project?.githubUrl || project?.websiteUrl) && (
                <div className="uxcs-hero-chips">
                  {project?.githubUrl && (
                    <a
                      href={project.githubUrl || 'https://github.com/Crite-Spranberries/SafeSpace'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uxcs-chip"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project?.websiteUrl || (
                    <a
                      href={project.websiteUrl || 'https://safe-space.figma.site'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uxcs-chip"
                    >
                      Website ↗
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="uxcs-hero-meta">
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">My Role(s)</p>
                <ul className="uxcs-meta-list">
                  <li>Project Manager</li>
                  <li>UX/UI Designer</li>
                  <li>Researcher</li>
                  <li>Graphic Designer</li>
                  <li>Marketer</li>
                </ul>
              </div>
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">Skills</p>
                <ul className="uxcs-meta-list">
                <li>Project Management</li>
                <li>User Research</li>
                <li>Marketing</li>
                <li>Prototyping</li>
                <li>Wireframing</li>
                </ul>
              </div>
              <div className="uxcs-meta-column">
                <p className="uxcs-meta-heading">Toolkit</p>
                <ul className="uxcs-meta-list">
                  <li>Figma</li>
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                  <li>Premiere Pro</li>
                  <li>After Effects</li>
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
              <span className="uxcs-timeline-label">Sept 2025</span>
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
              <span className="uxcs-timeline-label">Dec 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Context section */}
      <section className="uxcs-section">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title">The Reality Workers Face</h2>
          <p className="uxcs-body">
            Every day, women and gender-diverse trade workers face harassment, gender bias, and exclusion in their workplaces. Many hesitate to speak out, fearing retaliation or not being believed. SafeSpace aims to change trade culture by creating a safer, more supportive environment for everyone.
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="uxcs-section uxcs-section-dark">
        <div className="uxcs-section-inner uxcs-mission-grid">
          <div className="uxcs-mission-copy">
            <h2 className="uxcs-section-title uxcs-section-title-light">SafeSpace's Mission</h2>
            <p className="uxcs-body uxcs-body-light">
              SafeSpace is designed to address these challenges by empowering women and gender-diverse trade workers to report issues safely and anonymously. Using AI, the platform summarizesworker experiences and generates practical, actionable solutions to help create safer, more inclusive work sites.
            </p>

            <div className="uxcs-mission-feature">
              <h3 className="uxcs-feature-title">Easily Generate Reports</h3>
              <p className="uxcs-body uxcs-body-light">
                From recordings, chats, or your own written evidence, SafeSpace your information and generates it into a professional and fully anonymous report for you.
              </p>
            </div>

            <div className="uxcs-mission-feature">
              <h3 className="uxcs-feature-title">Location Based Insights</h3>
              <p className="uxcs-body uxcs-body-light">
                SafeSpace’s AI summarizes reports by location, helping users quickly identify which sites are safe—without the need to search.
              </p>
            </div>

            <div className="uxcs-mission-feature">
              <h3 className="uxcs-feature-title">Chat with Safi</h3>
              <p className="uxcs-body uxcs-body-light">
                Users can speak with Safi, SafeSpace’s AI, to turn unsafe experiences into clear, fully developed reports.
              </p>
            </div>
          </div>

          <div className="uxcs-mission-visual">
            <div className="uxcs-mission-phones-top">
              <div className="uxcs-phone-frame uxcs-phone-frame-large">
                <img src="/images/safespace-home.png" alt="Map reporting screen" />
              </div>
              <div className="uxcs-phone-frame uxcs-phone-frame-large">
                <img src="/images/safespace-recording.png" alt="Voice recording screen" />
              </div>
            </div>
            <div className="uxcs-mission-phones-bottom">
              <div className="uxcs-phone-frame uxcs-phone-frame-large">
                <img src="/images/safespace-safi.jpg" alt="Chat with Safi screen" />
              </div>
              <div className="uxcs-phone-frame uxcs-phone-frame-large">
                <img src="/images/safespace-form.jpg" alt="SafeSpace app screen" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section id="competitive-analysis" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">COMPETITIVE ANALYSIS</p>
          <h2 className="uxcs-section-title">Exploring the Existing Solutions</h2>
          <div className="uxcs-image-placeholder uxcs-comp-placeholder">
            <img src="/images/safespace-competitive_analysis.svg" alt="Competitive analysis image" />
          </div>
        </div>
      </section>

      {/* User Research */}
      <section id="user-research" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">USER RESEARCH</p>
          <h2 className="uxcs-section-title">Understanding Before Designing</h2>
          <p className="uxcs-body uxcs-research-intro">
            Interviewees and survey respondents included women and gender-diverse people working in the trades, ranging from newcomers to experienced professionals. The key findings were:
          </p>
          <div className="uxcs-stat-cards">
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">67%</span>
              <p className="uxcs-stat-text">
                feel isolated because of their gender, often suppressing their identity and emotions in the male-dominated work environment.
              </p>
            </div>
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">63%</span>
              <p className="uxcs-stat-text">
                believe peer support improves their mental health, saying that having a safe, reliable community helps them feel more comfortable at work.
              </p>
            </div>
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">70%</span>
              <p className="uxcs-stat-text">
                want to report harassment and unsafe conditions in-app, noting that a built-in logging system would help them organize and track their reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Building For */}
      <section className="uxcs-section">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title uxcs-personas-title">Who We&apos;re Building For</h2>
          <div className="uxcs-personas-grid">
            <div className="uxcs-persona-item">
              <div className="uxcs-image-placeholder uxcs-persona-placeholder">
                <img src="/images/safespace-primary_persona.svg" alt="Primary persona image" />
              </div>
              <a
                href="/documents/safespace-primary_persona.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="uxcs-persona-cta"
              >
                View Full Primary Persona →
              </a>
            </div>
            <div className="uxcs-persona-item">
              <div className="uxcs-image-placeholder uxcs-persona-placeholder">
                <img src="/images/safespace-secondary_persona.svg" alt="Secondary persona image" /> 
              </div>
              <a
                href="/documents/safespace-secondary_persona.pdf"
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

      {/* User Research - Sitemap */}
      <section id="user-sitemap-wireframes" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">USER SITEMAP AND WIREFRAMES</p>
          <h2 className="uxcs-section-title">Creating a User-Centered Experience</h2>
          <p className="uxcs-body">
            The sitemap was drafted around three main goals: enabling users to create reports, access and review reports, and view anonymous reports on a public dashboard.
          </p>
          <div className="uxcs-image-placeholder uxcs-sitemap-placeholder">
            <img src="/images/safespace-sitemap.svg" alt="Sitemap diagram" />
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
          <div className="uxcs-wireframe-placeholder">
            <img src="/images/safespace-low-fi.png" alt="Lo-Fi wireframes Mockup" />
          </div>
        </div>
      </section>

      {/* Styleguide */}
      <section className="uxcs-section">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title">Design System</h2>
          <div className="uxcs-image-placeholder uxcs-styleguide-placeholder">
            <img src="/images/safespace-style_guide.svg" alt="Styleguide image" />
          </div>
        </div>
      </section>

      {/* User Testing */}
      <section id="user-testing" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">USER TESTING</p>
          <h2 className="uxcs-section-title">Validating with Real Users</h2>
          <p className="uxcs-body uxcs-testing-intro">
            User testing confirmed that the wireframes are well-received, while also highlighting several key areas for improvement. The following actionable feedback helped refine specific features and streamline the overall user flow:          </p>
          <div className="uxcs-feedback-blocks">
            <div className="uxcs-feedback-block">
              <span className="uxcs-feedback-num">01</span>
              After filing a report, users should receive actionable steps on how to move forward to ensure they feel guided.
            </div>
            <div className="uxcs-feedback-block">
              <span className="uxcs-feedback-num">02</span>
              Implement an onboarding sequence to guide users through the initialization of the passcode protection feature.
            </div>
            <div className="uxcs-feedback-block">
              <span className="uxcs-feedback-num">03</span>
              Categorize and filter reports by severity, location, and type of trade so users can search for incidents efficiently.
            </div>
            <div className="uxcs-feedback-block">
              <span className="uxcs-feedback-num">04</span>
              To ensure users don&apos;t confuse recording with reporting, the app should use distinct visual cues and entry points.
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Implementation */}
      <section className="uxcs-section uxcs-section-feedback">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title">Feedback Implementation</h2>

          <div className="uxcs-feedback-card-placeholders">
            <div className="uxcs-image-placeholder uxcs-feedback-card-placeholder">
              <img src="/images/safespace-feedback1.svg" alt="Feedback implementation card 1" />
            </div>
            <div className="uxcs-image-placeholder uxcs-feedback-card-placeholder">
              <img src="/images/safespace-feedback2.svg" alt="Feedback implementation card 2" />
            </div>
            <div className="uxcs-image-placeholder uxcs-feedback-card-placeholder">
              <img src="/images/safespace-feedback3.svg" alt="Feedback implementation card 3" />
            </div>
            <div className="uxcs-image-placeholder uxcs-feedback-card-placeholder">
              <img src="/images/safespace-feedback4.svg" alt="Feedback implementation card 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Web Supplement */}
      <section id="web-supplement" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">WEB SUPPLEMENT</p>
          <h2 className="uxcs-section-title">Turning Reports into Responsibility</h2>
          <p className="uxcs-body">
            SafeSpace includes a web supplement that empowers foremen, managers, and companies to create safer work environments. It summarizes reports within a set radius and provides recommended actions, enabling leadership and real change.
          </p>
          <div className="uxcs-image-placeholder uxcs-web-supplement-placeholder">
            <img src="/images/safespace-web_supp.png" alt="Web supplement Mockup" />
          </div>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section id="marketing-strategy" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">MARKETING STRATEGY</p>
          <h2 className="uxcs-section-title">From Concept to Community</h2>
          <div className="uxcs-marketing-grid">
            <div className="uxcs-marketing-card">
              <div className="uxcs-image-placeholder uxcs-marketing-placeholder">
                <img src="/images/safespace-ig.png" alt="Instagram Mockup" />
              </div>
              <a href="https://www.instagram.com/safespace__app" target="_blank" rel="noopener noreferrer" className="uxcs-marketing-cta">Instagram →</a>
            </div>
            <div className="uxcs-marketing-card">
              <div className="uxcs-image-placeholder uxcs-marketing-placeholder">
                <img src="/images/safespace-web.png" alt="Website Mockup" />
              </div>
              <a href="https://safe-space.figma.site" target="_blank" rel="noopener noreferrer" className="uxcs-marketing-cta">Website / Blog →</a>
              </div>
          </div>
        </div>
      </section>

      {/* Promotional Materials */}
      <section className="uxcs-section">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title">Promotional Materials</h2>
          <div className="uxcs-promo-grid">
            <div className="uxcs-image-placeholder uxcs-promo-placeholder">
              <img src="/images/safespace-brochure.jpg" alt="Brochure Mockup" />
            </div>
            <div className="uxcs-image-placeholder uxcs-promo-placeholder">
              <img src="/images/safespace-bcards.jpg" alt="Business Cards Mockup" />
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="uxcs-image-placeholder uxcs-promo-placeholder uxcs-youtube-placeholder"
            >
              <span className="uxcs-placeholder-label">SafeSpace Promo Video</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final Product */}
      <section id="final-product" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">FINAL PRODUCT</p>
          <h2 className="uxcs-section-title">Hi-Fi Wireframes</h2>
          <p className="uxcs-body">
            Visual assets, colour, and typography was refined for the hi-fi wireframes to strengthen clarity and hierarchy while maintaining accessibility.
          </p>
          <div className="uxcs-image-placeholder uxcs-hifi-placeholder">
            <img src="/images/safespace-hi-fi.png" alt="Hi-Fi wireframes Mockup" />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">ACHIEVEMENTS</p>
          <h2 className="uxcs-section-title">🥇 Hard Work Pays Off</h2>
          <div className="uxcs-achievements-intro">
            <div className="uxcs-achievements-copy">
              <p className="uxcs-body">
                After months of hard work and dedication, <strong>SafeSpace placed first at the BCIT D3/FSWD x ConnectHer Student Design &amp; Technology Innovation Showcase.</strong> Winning first place validated not only the strength of the design execution, but also the urgency and relevance of the problem SafeSpace set out to address.
              </p>
              <p className="uxcs-body">
                The experience reinforced that thoughtful research, intentional design, and empathy-driven problem solving can create meaningful, real-world impact.
              </p>
              <p className="uxcs-body">
                Shout out to my team for their hard work and dedication, this project would not have been possible without them!
              </p>
            </div>
            <div className="uxcs-image-placeholder uxcs-achievements-photo-placeholder">
              <img src="/images/safespace-photo2.jpg" alt="Team Photo" />
            </div>
          </div>
          <div className="uxcs-achievements-photos">
            <div className="uxcs-image-placeholder uxcs-achievements-photo-placeholder">
              <img src="/images/safespace-photo1.jpg" alt="Achievement Photo" />
            </div>
            <div className="uxcs-image-placeholder uxcs-achievements-photo-placeholder">
              <img src="/images/safespace-photo3.jpg" alt="Achievement Photo" />
            </div>
          </div>
          <div className="uxcs-achievements-cards">
            <div className="uxcs-achievements-card">
              <p className="uxcs-achievements-callout-title"><span className="uxcs-achievements-emoji">🏆</span> 1st Place</p>
              <p className="uxcs-achievements-callout-desc">SafeSpace placed first out of 10 different projects</p>
            </div>
            <div className="uxcs-achievements-card">
              <p className="uxcs-achievements-callout-title"><span className="uxcs-achievements-emoji">🏛️</span> Government Recognition</p>
              <p className="uxcs-achievements-callout-desc">Received a Certificate of Recognition from the House of Commons</p>
            </div>
            <div className="uxcs-achievements-card">
              <p className="uxcs-achievements-callout-title"><span className="uxcs-achievements-emoji">👥</span> 200+ Attendees</p>
              <p className="uxcs-achievements-callout-desc">Pitched SafeSpace to industry leaders and trades professionals</p>
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
    </article>
  )
}

