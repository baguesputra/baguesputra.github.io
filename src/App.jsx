import { useEffect, useState } from 'react'
import { useMouseGlow } from './hooks/useEffects.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import WorkWithMe from './components/WorkWithMe.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Magnetic from './components/Magnetic.jsx'

const sectionIds = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function ScrollNav({ activeSection }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <nav className="scroll-nav" aria-label="Section navigation">
      {sectionIds.map((s) => (
        <button
          key={s.id}
          className={`scroll-nav-dot ${activeSection === s.id ? 'active' : ''}`}
          onClick={() => go(s.id)}
          aria-label={`Go to ${s.label}`}
          title={s.label}
        >
          <span className="scroll-nav-label">{s.label}</span>
        </button>
      ))}
    </nav>
  )
}

function FloatingTop({ show }) {
  return (
    <Magnetic
      as="button"
      className={`floating-top ${show ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </Magnetic>
  )
}

export default function App() {
  useMouseGlow()
  const [scrollY, setScrollY] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrollY(y)
      setShowTop(y > 500)
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
      <ScrollNav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkWithMe />
        <Contact />
      </main>
      <Footer />
      <FloatingTop show={showTop} />
    </div>
  )
}