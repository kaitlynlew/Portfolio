import { useState, useEffect, useRef } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../App.css'

gsap.registerPlugin(ScrollTrigger)

export default function Layout() {
  const location = useLocation()
  const [showBackToTop, setShowBackToTop] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return
    const items = [...footer.children]
    gsap.set(items, { opacity: 0, y: 32 })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top bottom',
        toggleActions: 'play none none reverse',
      },
    })
    tl.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
    })
    // If footer is already in view (e.g. short page like About), show it immediately
    const inView = () => {
      const rect = footer.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.95
    }
    if (inView()) {
      tl.play(0)
    } else {
      const id = setTimeout(() => {
        if (inView()) tl.play(0)
      }, 150)
      return () => {
        clearTimeout(id)
        tl.scrollTrigger?.kill()
      }
    }
    return () => tl.scrollTrigger?.kill()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isGridPage = location.pathname === '/' || location.pathname === '/about'

  return (
    <div className={isGridPage ? 'page-grid-shell' : ''}>
      {isGridPage && <div className="page-grid-bg" aria-hidden="true" />}
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
          <a href="mailto:l.kaitlyn@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer id="contact" className="footer" ref={footerRef}>
        <h2 className="footer-title">｡⊹ ˚— ʚ Let's Chat ɞ —˚ ⊹｡</h2>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/kaitlynrlew/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:l.kaitlyn@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">
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
    </div>
  )
}