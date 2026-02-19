import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

export default function HomePage() {
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (window.location.hash === '#work') {
      const el = document.getElementById('work')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : filter === 'uiux'
        ? PROJECTS.filter((p) => p.category === 'uiux')
        : PROJECTS.filter((p) => p.category === 'graphic')

  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <h1 className="hero-title">Kaitlyn Lew</h1>
        <div className="hero-decorative">✦ ✦ ✦ ✦ ✦</div>
        <p className="hero-tagline">
          Using my <span className="hero-tagline-accent">passion</span> for design to
          <br />
          create <span className="hero-tagline-accent">memorable</span> and <span className="hero-tagline-accent">intuitive</span>
          <br />
          experiences one <span className="hero-tagline-accent">pixel</span> at a time.
        </p>
      </section>

      <section id="work" className="projects">
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

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
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
                    ['sojubly', 'katseye', 'korea'].includes(project.id)
                      ? `/project/${project.id}`
                      : '/under-construction'
                  }
                  className="project-cta"
                >
                  View Case Study
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
