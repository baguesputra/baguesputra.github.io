import { useEffect, useRef, useState } from 'react'
import Magnetic from './Magnetic.jsx'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const openRef = useRef(false)
  const lastYRef = useRef(0)

  useEffect(() => {
    openRef.current = open
  }, [open])

  useEffect(() => {
    lastYRef.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (openRef.current) {
        setHidden(false)
        lastYRef.current = y
        return
      }
      setHidden(y > 160 && y > lastYRef.current)
      lastYRef.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
        <div className="navbar-inner container">
          <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="brand-dot" />
            <span>bagues<em>putra</em></span>
            <span className="brand-cursor">_</span>
          </button>

          <nav className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <button
                key={l.id}
                className={`nav-link ${activeSection === l.id ? 'active' : ''}`}
                onClick={() => go(l.id)}
              >
                {l.label}
              </button>
            ))}
            <Magnetic className="nav-cta" href="/Bagues-Putra-Tawaqqal-Resume.pdf" download>
              Resume ⬇
            </Magnetic>
            <Magnetic className="nav-cta" href="https://github.com/baguesputra" target="_blank" rel="noreferrer">
              GitHub ↗
            </Magnetic>
          </nav>

          <button
            className={`hamburger ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            {links.map((l, i) => (
              <button
                key={l.id}
                className="mobile-link"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => go(l.id)}
              >
                {l.label}
              </button>
            ))}
            <div className="mobile-socials">
              <a href="/Bagues-Putra-Tawaqqal-Resume.pdf" download>Resume</a>
              <a href="https://github.com/baguesputra" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/baguesputra" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com/baguesputra" target="_blank" rel="noreferrer">X</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
