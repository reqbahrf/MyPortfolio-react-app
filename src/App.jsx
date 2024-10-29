import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'
import HomeSection from './HomeSection'
import AboutSection from './AboutSection'
import ProjectSection from './ProjectSection'
import Footer from './Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HomeSection />
    <AboutSection />
    <ProjectSection />
    <Footer />

  </StrictMode>,
)
