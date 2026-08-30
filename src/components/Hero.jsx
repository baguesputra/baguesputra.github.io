import { useRef } from 'react'
import { useTyped, useParallax, useParticleNetwork, useHeroFade } from '../hooks/useEffects.js'
import Magnetic from './Magnetic.jsx'
import { socials } from '../data/portfolio.js'

const roles = [
  'Full Stack Developer',
  'IT Coordinator',
  'Laravel & React Specialist',
  'Node.js Developer',
  'Network & Server Enthusiast',
  'Problem Solver',
]

function SocialIcon({ name }) {
  const paths = {
    github: 'M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.11-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z',
    linkedin: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z',
    twitter: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.63 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z',
    instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z',
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

export default function Hero() {
  const typed = useTyped(roles)
  const year = new Date().getFullYear()
  const bgRef = useRef(null)
  const canvasRef = useRef(null)
  const contentRef = useRef(null)
  useParallax(bgRef)
  useParticleNetwork(canvasRef)
  useHeroFade(contentRef)

  return (
    <section className="hero" id="home">
      <div className="hero-bg" ref={bgRef}>
        <span className="parallax-layer" data-depth="26"><span className="orb orb-1" /></span>
        <span className="parallax-layer" data-depth="42"><span className="orb orb-2" /></span>
        <span className="parallax-layer" data-depth="16"><span className="orb orb-3" /></span>
        <span className="parallax-layer" data-depth="12"><span className="hero-grid" /></span>
        <canvas ref={canvasRef} className="particle-canvas" />
      </div>

      <div className="container hero-content" ref={contentRef}>
        <div className="hero-left">
          <div className="availability-row">
            <span className="availability">
              <span className="status-dot" />
              Available for freelance & contract
            </span>
            <span className="availability-detail">
              <span className="detail-icon">🌐</span>
              UTC+7 (WIB) · Overlap: US Morning / EU Afternoon
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Bagues Putra Tawaqqal</span>
          </h1>

          <div className="hero-type">
            <span className="type-label">&lt;</span>
            <span className="typed-text">{typed}</span>
            <span className="type-cursor" />
            <span className="type-label">&gt;</span>
          </div>

          <p className="hero-desc">
            IT Coordinator &amp; Full Stack Developer crafting scalable web applications
            with <strong>Laravel, React, Next.js &amp; Node.js</strong> — backed by a passion
            for network &amp; server infrastructure.
          </p>

          <div className="hero-actions">
            <Magnetic className="btn btn-primary" href="#projects">
              View My Work
              <span>↓</span>
            </Magnetic>
            <Magnetic className="btn btn-ghost" href="#contact">
              Contact Me
            </Magnetic>
            <Magnetic className="btn btn-ghost" href="/Bagues-Putra-Tawaqqal-Resume.pdf" download>
              Download Resume
              <span>⬇</span>
            </Magnetic>
          </div>

          <div className="hero-socials">
            {socials.map((s) => (
              <Magnetic
                key={s.label}
                className="social-btn"
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <SocialIcon name={s.icon} />
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="terminal-card">
            <div className="terminal-head">
              <span className="t-dot red" />
              <span className="t-dot amber" />
              <span className="t-dot green" />
              <span className="terminal-title">developer.ts</span>
            </div>
            <div className="terminal-body">
              <p><span className="kw">const</span> <span className="fn">developer</span> = <span className="br">{"{"}</span></p>
              <p className="indent1"><span className="prop">name</span>: <span className="str">'Bagues Putra Tawaqqal'</span>,</p>
              <p className="indent1"><span className="prop">role</span>: <span className="str">'Full Stack Developer'</span>,</p>
              <p className="indent1"><span className="prop">stack</span>: [<span className="str">'Laravel'</span>, <span className="str">'React'</span>, <span className="str">'Next.js'</span>, <span className="str">'Node.js'</span>, <span className="str">'Go'</span>],</p>
              <p className="indent1"><span className="prop">passion</span>: <span className="str">'Clean scalable systems'</span>,</p>
              <p className="indent1"><span className="prop">coffee</span>: <span className="bool">true</span>,</p>
              <p className="indent1"><span className="prop">hiring</span>: <span className="bool">true</span>,</p>
              <p className="indent1"><span className="prop">hireMe</span>: <span className="kw">async</span> () =&gt; <span className="br">{"{"}</span></p>
              <p className="indent2"><span className="kw">return</span> <span className="str">'Let\'s build something great'</span></p>
              <p className="indent1"><span className="br">{"}"}</span></p>
              <p><span className="br">{"}"}</span>;</p>
              <p className="prompt-line"><span className="prompt">➜</span> <span className="cmd">bagues.run(<span className="str">'collaboration'</span>)</span></p>
              <p className="prompt-line out"><span className="ok">✓</span> ready_to_hire: <span className="bool">true</span></p>
            </div>
          </div>

          <div className="floating-badges">
            <span className="f-badge badge-a">
              <span className="f-icon">⚛️</span> React
            </span>
            <span className="f-badge badge-b">
              <span className="f-icon">🐘</span> Laravel
            </span>
            <span className="f-badge badge-c">
              <span className="f-icon">🚀</span> Node.js
            </span>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <div className="container hero-stats">
          <div className="stat">
            <span className="stat-num">{year - 2022}+</span>
            <span className="stat-label">Years Coding</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">15+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">8+</span>
            <span className="stat-label">Tech Stacks</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>
      </div>

      <a className="scroll-indicator" href="#about" aria-label="Scroll down">
        <span className="mouse"><span className="wheel" /></span>
        <span className="scroll-text">scroll</span>
      </a>
    </section>
  )
}
