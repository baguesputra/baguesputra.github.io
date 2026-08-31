import { useMemo, useState } from 'react'
import { useReveal, useTilt, useSpotlight } from '../hooks/useEffects.js'
import SplitWords from './SplitWords.jsx'
import { projects } from '../data/portfolio.js'

const categories = ['All', 'Fullstack', 'Backend', 'Frontend', 'SaaS']

function ProjectCard({ project, index }) {
  const tiltRef = useTilt()
  const revealRef = useReveal()
  const spotlightRef = useSpotlight()

  return (
    <article
      ref={(el) => {
        tiltRef.current = el
        revealRef.current = el
        spotlightRef.current = el
      }}
      className={`project-card accent-${project.accent} reveal`}
      style={{ ['--d']: `${index * 80}ms` }}
    >
      <div className="project-card-glow" />
      <div className="project-card-head">
        <span className="folder-icon">📁</span>
        <div className="project-links">
          <a href={project.repo} target="_blank" rel="noreferrer" aria-label="Open repository" title="Repository">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.11-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" /></svg>
          </a>
          <a href={project.repo} target="_blank" rel="noreferrer" aria-label="External link" title="Open on GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>
        </div>
      </div>

      <h3 className="project-title">
        <a href={project.repo} target="_blank" rel="noreferrer">{project.title}</a>
      </h3>

      <p className="project-desc">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      <div className="project-tech">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="project-tech-item">{t}</span>
        ))}
        {project.tech.length > 5 && <span className="project-tech-item">+{project.tech.length - 5}</span>}
      </div>

      <div className="project-card-footer">
        <span className="project-cat">{project.category}</span>
        <a className="project-code" href={project.repo} target="_blank" rel="noreferrer">
          View code →
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  const headRef = useReveal()
  const [active, setActive] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const highlightedProjects = projects.filter(project => project.highlight)
  const filteredProjects = active === 'All' ? projects : projects.filter(p => p.category === active)
  const filteredHighlighted = active === 'All' ? highlightedProjects : highlightedProjects.filter(p => p.category === active)
  const displayedProjects = showAll ? filteredProjects : filteredHighlighted.slice(0, 3)

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head projects-head reveal" ref={headRef}>
          <span className="section-tag">// Projects</span>
          <SplitWords as="h2" className="section-title">
            Things I&apos;ve <span className="gradient-text">built</span>
          </SplitWords>
          <p className="section-sub">
            A selection of real projects from my GitHub — fullstack apps, production APIs,
            and tools across healthcare, finance, logistics and public services.
          </p>
        </div>

        <div className="filter-bar reveal">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {displayedProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {!showAll && filteredHighlighted.length > 3 && (
          <div className="projects-more">
            <button className="btn btn-ghost" onClick={() => setShowAll(true)}>
              Show all {filteredHighlighted.length} projects
              <span>↓</span>
            </button>
          </div>
        )}

        {showAll && filteredHighlighted.length > 3 && (
          <div className="projects-more">
            <a className="btn btn-ghost" href="https://github.com/baguesputra?tab=repositories" target="_blank" rel="noreferrer">
              See all repositories on GitHub
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
