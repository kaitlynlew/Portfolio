import { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import '../App.css'

export default function Layout() {
  const location = useLocation()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className="header">
        <NavLink
          to="/"
          className="header-logo"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          Kaitlyn Lew
        </NavLink>
        <nav className="header-nav">
          <NavLink
            to="/#work"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault()
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Work
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <a href="mailto:l.kaitlyn@gmail.com">Contact</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer id="contact" className="footer">
        <h2 className="footer-title">Let&apos;s Chat!</h2>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/kaitlynrlew/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:l.kaitlyn@gmail.com">Email</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <div>
          <p>₊✩‧₊˚౨ৎ˚₊✩‧₊</p>
        </div>
        <p className="footer-copy">
          Designed and coded by © Kaitlyn Lew, 2026.
        </p>
      </footer>

      {/* Back to top button */}
      {/* {showBackToTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ⬆ Back to top
        </button>
      )} */}
    </>
  )
}
