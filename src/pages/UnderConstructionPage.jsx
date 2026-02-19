import { Link } from 'react-router-dom'

export default function UnderConstructionPage() {
  return (
    <section className="under-construction">
      <h1 className="under-construction-title">Under Construction</h1>
      <p className="under-construction-text">
        This case study is coming soon. Check back later!
      </p>
      <Link to="/#work" className="project-cta">
        Back to Projects
      </Link>
    </section>
  )
}
