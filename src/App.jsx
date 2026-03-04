import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import UnderConstructionPage from './pages/UnderConstructionPage'

gsap.registerPlugin(ScrollTrigger)

function lerp(a, b, t) {
  return a + (b - a) * t
}

function rgba(r, g, b, a) {
  return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a.toFixed(2)})`
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join('')
}

function lerpHex(hexStart, hexEnd, t) {
  const [r1, g1, b1] = hexToRgb(hexStart)
  const [r2, g2, b2] = hexToRgb(hexEnd)
  return rgbToHex(lerp(r1, r2, t), lerp(g1, g2, t), lerp(b1, b2, t))
}

function applyGradientProgress(progress) {
  const t = Math.max(0, Math.min(1, progress))
  const blob1 = rgba(lerp(70, 60, t), lerp(130, 118, t), lerp(190, 178, t), lerp(0.5, 0.58, t))
  const blob2 = rgba(lerp(90, 78, t), lerp(150, 138, t), lerp(200, 188, t), lerp(0.55, 0.63, t))
  const blob3 = rgba(lerp(180, 162, t), lerp(205, 190, t), lerp(235, 218, t), lerp(0.7, 0.78, t))
  const root = document.documentElement
  root.style.setProperty('--bg-blob-1', blob1)
  root.style.setProperty('--bg-blob-2', blob2)
  root.style.setProperty('--bg-blob-3', blob3)
  root.style.setProperty('--bg-base-start', lerpHex('#e2eaf5', '#d8e4f0', t))
  root.style.setProperty('--bg-base-mid', lerpHex('#f0f5fc', '#e4ecf6', t))
  root.style.setProperty('--bg-base-end', lerpHex('#fafcff', '#eef4fa', t))
  root.style.setProperty('--bg-blob-1-x', `${lerp(10, 22, t)}%`)
  root.style.setProperty('--bg-blob-1-y', `${lerp(20, 32, t)}%`)
  root.style.setProperty('--bg-blob-2-x', `${lerp(85, 72, t)}%`)
  root.style.setProperty('--bg-blob-2-y', `${lerp(25, 38, t)}%`)
  root.style.setProperty('--bg-blob-3-x', `${lerp(20, 30, t)}%`)
  root.style.setProperty('--bg-blob-3-y', `${lerp(75, 62, t)}%`)
}

function isScrollableElement(el) {
  if (!el || el === document.body || el === document.documentElement) return false
  const style = getComputedStyle(el)
  const overflowY = style.overflowY
  const isScrollable = (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight
  return isScrollable
}

function hasScrollableAncestor(el) {
  let node = el
  while (node && node !== document.body) {
    if (isScrollableElement(node)) return true
    node = node.parentElement
  }
  return false
}

const SCROLL_SPEED_FACTOR = 0.5

export default function App() {
  useEffect(() => {
    const onWheel = (e) => {
      if (hasScrollableAncestor(e.target)) return
      e.preventDefault()
      window.scrollBy({ top: e.deltaY * SCROLL_SPEED_FACTOR, left: 0, behavior: 'auto' })
    }
    window.addEventListener('wheel', onWheel, { passive: false })

    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    let st
    const scrollDepth = 2000

    const updateFromScroll = () => {
      const progress = Math.min(1, window.scrollY / scrollDepth)
      applyGradientProgress(progress)
    }

    const setup = () => {
      st = ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: `+=${scrollDepth}`,
        onUpdate: (self) => applyGradientProgress(self.progress),
      })
      ScrollTrigger.refresh()
      updateFromScroll()
    }

    window.addEventListener('scroll', updateFromScroll, { passive: true })
    const t = setTimeout(setup, 150)

    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', updateFromScroll)
      if (st) st.kill()
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project/:projectId" element={<ProjectPage />} />
          <Route path="under-construction" element={<UnderConstructionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
