import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '../data/projects'
import { getCaseStudyByProjectId } from '../data/projectCaseStudies'

export default function HomePage() {
  const [filter, setFilter] = useState('all')
  const [scrollY, setScrollY] = useState(0)
  const heroNameRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroTaglineRef = useRef(null)

  useEffect(() => {
    if (window.location.hash === '#work') {
      const el = document.getElementById('work')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const name = heroNameRef.current
    const title = heroTitleRef.current
    const tagline = heroTaglineRef.current
    if (!name || !title || !tagline) return

    gsap.set([name, title, tagline], { opacity: 0, y: 28, filter: 'blur(10px)' })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.to(name, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 })
      .to(title, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }, 0.25)
      .to(tagline, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }, 0.5)
  }, [])

  useEffect(() => {
    const updateCardScales = () => {
      const cards = Array.from(document.querySelectorAll('.project-card'))
      const viewportHeight = window.innerHeight || 1
      const viewportCenter = viewportHeight / 2

      cards.forEach((card) => {
        if (!card.classList.contains('project-card-visible')) return
        const rect = card.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - cardCenter)
        const maxDistance = viewportHeight * 0.8
        const clamped = Math.min(distance / maxDistance, 1)
        const scale = 0.94 + (1.02 - 0.94) * (1 - clamped)
        card.style.setProperty('--card-scale', scale.toFixed(3))
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY || 0)
      requestAnimationFrame(updateCardScales)
    }

    updateCardScales()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : filter === 'uiux'
        ? PROJECTS.filter((p) => p.category === 'uiux')
        : PROJECTS.filter((p) => p.category === 'graphic')

  useEffect(() => {
    const header = document.querySelector('.projects-header')
    const cards = Array.from(document.querySelectorAll('.project-card'))

    if (!('IntersectionObserver' in window)) {
      header?.classList.add('projects-header-visible')
      cards.forEach((card) => card.classList.add('project-card-visible'))
      // Grid height changes with filtering; keep footer animation in sync.
      ScrollTrigger.refresh()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('projects-header')) {
              entry.target.classList.add('projects-header-visible')
            } else {
              entry.target.classList.add('project-card-visible')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    if (header) observer.observe(header)
    cards.forEach((card) => observer.observe(card))

    // Filtering changes the number of rendered project cards, which changes
    // layout and therefore the footer's trigger position. Recompute so the
    // footer reveal animation runs correctly without requiring a scroll.
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()

      // IntersectionObserver callbacks can miss "already intersecting" items
      // after a filter switch + layout shift. As a fallback, immediately
      // reveal anything currently in the viewport so cards like "Sojubly"
      // show up without requiring an extra scroll.
      const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect()
        return rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15
      }

      if (header && isElementInViewport(header)) {
        header.classList.add('projects-header-visible')
      }
      cards.forEach((card) => {
        if (isElementInViewport(card)) card.classList.add('project-card-visible')
      })
    })

    return () => observer.disconnect()
  }, [filteredProjects.length])

  const heroParallax = scrollY * 0.45
  const heroOpacity = Math.max(0, 1 - scrollY / 400)
  const heroCarouselProjects = PROJECTS

  return (
    <>
      <section className="hero">
        <div
          className="hero-grid"
          aria-hidden="true"
          style={{ transform: `translateY(${Math.min(scrollY, 400) * 0.15}px)` }}
        />
        <div
          className="hero-inner"
          style={{
            transform: `translateY(-${heroParallax}px)`,
            opacity: heroOpacity,
          }}
        >
          <p ref={heroNameRef} className="hero-name">PRODUCT DESIGNER</p>
          <h1 ref={heroTitleRef} className="hero-title">Kaitlyn Lew</h1>
          <p ref={heroTaglineRef} className="hero-tagline">
            using my passion for design to create memorable<br />
            and intuitive experiences one pixel at a time
          </p>
        </div>

        <div className="hero-carousel" aria-hidden="true">
          <div className="hero-carousel-track">
            {[...heroCarouselProjects, ...heroCarouselProjects].map((project, index) => (
              <div key={`${project.id}-${index}`} className="hero-carousel-item">
                <img src={project.image} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="projects">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === 'uiux' ? 'active' : ''}`}
            onClick={() => setFilter('uiux')}
          >
            UI/UX
          </button>
          <button
            className={`filter-btn ${filter === 'graphic' ? 'active' : ''}`}
            onClick={() => setFilter('graphic')}
          >
            Graphic Design
          </button>
        </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              style={{
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                '--card-index': `${index}`,
              }}
            >
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={
                    ['safespace', 'inklink', 'sensa'].includes(project.id) ||
                    getCaseStudyByProjectId(project.id)
                      ? `/project/${project.id}`
                      : '/under-construction'
                  }
                  className="project-cta"
                >
                  {(['safespace', 'inklink', 'sensa'].includes(project.id) || getCaseStudyByProjectId(project.id)) &&
                  !['sojubly', 'korea'].includes(project.id)
                    ? 'View Case Study'
                    : 'View Project'}
                </Link>
              </div>
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

