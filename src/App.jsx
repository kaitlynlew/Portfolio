import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import UnderConstructionPage from './pages/UnderConstructionPage'

export default function App() {
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
