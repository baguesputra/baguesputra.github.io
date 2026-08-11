import { useEffect, useState } from 'react'
import { useMouseGlow } from './hooks/useEffects.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useMouseGlow()
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const offset = window.innerHeight / 3
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      <div className="mouse-glow" />
      <div className="scroll-progress" style={{ width: `${scrollY > 0 ? (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0}%` }} />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
