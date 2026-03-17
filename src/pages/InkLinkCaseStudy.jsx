const TIMELINE_SECTIONS = [
  { id: 'problem-space', label: 'PROBLEM SPACE' },
  { id: 'user-research', label: 'USER RESEARCH' },
  { id: 'information-architecture', label: 'INFORMATION ARCHITECTURE' },
  { id: 'writing-flow', label: 'WRITING FLOW' },
  { id: 'visual-design', label: 'VISUAL DESIGN' },
  { id: 'final-product', label: 'FINAL PRODUCT' },
]

export default function InkLinkCaseStudy({ project }) {
  const title = project?.title ?? 'InkLink'
  const description =
    project?.description ??
    'A collaborative chain writing web app where writers can jump into story chains, add their own twist, and watch narratives grow beyond imagination.'

  const bannerImage = project?.image ?? '/images/inklink-mockup.png'

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

      {/* Problem space */}
      <section id="problem-space" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">PROBLEM SPACE</p>
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

      {/* User research */}
      <section id="user-research" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">USER RESEARCH</p>
          <h2 className="uxcs-section-title">Understanding Writers&apos; Habits</h2>
          <p className="uxcs-body">
            Through interviews and surveys with hobby writers, creative writing students, and friends
            who write casually online, I explored how people currently co-write stories, what blocks
            them from sharing, and what keeps them coming back. A few themes consistently emerged:
          </p>
          <div className="uxcs-stat-cards">
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">Anxiety</span>
              <p className="uxcs-stat-text">
                Many writers feel nervous joining open communities because they don&apos;t want to
                &quot;ruin&quot; a story thread or slow the group down.
              </p>
            </div>
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">Momentum</span>
              <p className="uxcs-stat-text">
                Once a story loses momentum, it&apos;s rare for people to return—so the first few
                interactions matter a lot.
              </p>
            </div>
            <div className="uxcs-stat-card">
              <span className="uxcs-stat-value">Clarity</span>
              <p className="uxcs-stat-text">
                Writers want a clear sense of where to jump in, what&apos;s already happened, and
                how long their contribution should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information architecture */}
      <section id="information-architecture" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">INFORMATION ARCHITECTURE</p>
          <h2 className="uxcs-section-title">Structuring Chains Instead of Documents</h2>
          <p className="uxcs-body">
            Rather than traditional folders and files, InkLink organizes content as story chains.
            Each chain has a clear starting prompt, a visible path of contributions, and simple
            entry points for new writers. The IA focuses on helping users quickly browse active
            chains, understand their tone, and decide whether to add on or start something new.
          </p>
          <div className="uxcs-image-placeholder uxcs-sitemap-placeholder">
            <span className="uxcs-placeholder-label">InkLink sitemap &amp; user flows (coming soon)</span>
          </div>
        </div>
      </section>

      {/* Writing flow */}
      <section id="writing-flow" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">WRITING FLOW</p>
          <h2 className="uxcs-section-title">Designing a Lightweight Contribution Flow</h2>
          <p className="uxcs-body">
            The core interaction for InkLink is adding a new link in the story chain. The flow is
            intentionally minimal: choose a chain, read a short context summary, write a constrained
            entry, and publish. Small guardrails—like character ranges and contribution prompts—help
            writers focus on ideas instead of worrying about &quot;getting it perfect.&quot;
          </p>
          <div className="uxcs-wireframe-placeholder">
            <span className="uxcs-placeholder-label">Lo-fi wireframes for the chain writing flow</span>
          </div>
        </div>
      </section>

      {/* Visual design */}
      <section id="visual-design" className="uxcs-section">
        <div className="uxcs-section-inner">
          <h2 className="uxcs-section-title">Visual Language for Playful Collaboration</h2>
          <p className="uxcs-body">
            The visual direction for InkLink balances cozy, notebook-inspired textures with clean UI
            so the interface feels playful but not distracting. Soft colours, rounded cards, and
            subtle motion reinforce the idea that experimentation is welcome and nothing is too
            precious to try.
          </p>
          <div className="uxcs-image-placeholder uxcs-styleguide-placeholder">
            <span className="uxcs-placeholder-label">Colour, typography, and component styleguide</span>
          </div>
        </div>
      </section>

      {/* Final product */}
      <section id="final-product" className="uxcs-section">
        <div className="uxcs-section-inner">
          <p className="uxcs-section-label">FINAL PRODUCT</p>
          <h2 className="uxcs-section-title">From Prompt to Collaborative Story</h2>
          <p className="uxcs-body">
            The final prototype showcases how writers can browse chains, join in with a quick
            contribution, and see their addition immediately reflected in the narrative. It&apos;s a
            small but joyful space designed to lower the pressure around writing and make it easier
            to create something together.
          </p>
          <div className="uxcs-image-placeholder uxcs-hifi-placeholder">
            <span className="uxcs-placeholder-label">Hi-fi screens and interaction mockups</span>
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

