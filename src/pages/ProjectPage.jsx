import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import { getCaseStudyByProjectId } from '../data/projectCaseStudies'
import GraphicProjectPage from './GraphicProjectPage'
import UnderConstructionPage from './UnderConstructionPage'
import SafeSpaceCaseStudy from './SafeSpaceCaseStudy'
import InkLinkCaseStudy from './InkLinkCaseStudy'
import SensaCaseStudy from './SensaCaseStudy'

export default function ProjectPage() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)
  const caseStudy = project ? getCaseStudyByProjectId(projectId) : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return (
      <section className="project-page">
        <div className="project-not-found">
          <h1>Project not found</h1>
          <Link to="/" className="project-cta">
            Back to Work
          </Link>
        </div>
      </section>
    )
  }

  if (project.id === 'safespace') {
    return <SafeSpaceCaseStudy project={project} />
  }

  if (project.id === 'inklink') {
    return <InkLinkCaseStudy project={project} />
  }

  if (project.id === 'sensa') {
    return <SensaCaseStudy project={project} />
  }

  if (caseStudy) {
    return <GraphicProjectPage project={project} />
  }

  if (project.category === 'graphic') {
    return <UnderConstructionPage />
  }

  return (
    <section className="project-page">
      <Link to="/#work" className="project-back">
        ← Back to Work
      </Link>
      <header className="project-header">
        <h1 className="project-page-title">{project.title}</h1>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="project-hero-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-body">
        <p className="project-description">{project.description}</p>
        <p className="project-placeholder">
          Add your full case study content here—research, process, iterations, and final
          outcomes—for the {project.title} project.
        </p>
      </div>
    </section>
  )
}
