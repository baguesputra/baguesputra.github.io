import { useReveal, useInView, useCounter } from '../hooks/useEffects.js'

const stats = [
  { target: 4, suffix: '+', label: 'Years Experience' },
  { target: 15, suffix: '+', label: 'Projects Delivered' },
  { target: 10, suffix: '+', label: 'Technologies' },
  { target: 5, suffix: '+', label: 'Industries Served' },
]

function Stat({ stat, start }) {
  const value = useCounter(stat.target, 1800, start)
  return (
    <div className="stat-card">
      <span className="stat-card-num">{value}{stat.suffix}</span>
      <span className="stat-card-label">{stat.label}</span>
    </div>
  )
}

export default function About() {
  const headRef = useReveal()
  const bodyRef = useReveal()
  const [statsRef, statsInView] = useInView()

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-tag">// About me</span>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">digital products</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal" ref={bodyRef}>
            <p>
              I&apos;m an IT Coordinator and Full Stack Developer currently based at{' '}
              <strong className="text-accent">Amanah Medical Centre</strong>, where I bridge
              the gap between business operations and technology.
            </p>
            <p>
              My journey blends <strong>web development</strong> with{' '}
              <strong>IT infrastructure</strong> — building production-grade applications with
              Laravel, React, Next.js and Node.js, while keeping the servers, networks and
              systems they run on healthy and secure.
            </p>
            <p>
              From clinic management APIs to finance trackers and journal publishing platforms,
              I enjoy owning the full lifecycle: architecture, implementation, testing, and
              deployment.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="h-icon">💡</span>
                <div>
                  <h4>Full-Stack Ownership</h4>
                  <p>Frontend to backend to infrastructure — end to end.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="h-icon">🔐</span>
                <div>
                  <h4>Security First</h4>
                  <p>JWT, OAuth2, RBAC and hardened auth patterns.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="h-icon">⚡</span>
                <div>
                  <h4>Performance Minded</h4>
                  <p>Clean code, caching with Redis, optimized queries.</p>
                </div>
              </div>
            </div>

            <a className="btn btn-primary" href="https://github.com/baguesputra" target="_blank" rel="noreferrer">
              Explore My GitHub
              <span>↗</span>
            </a>
          </div>

          <div className="about-side">
            <div className="profile-card">
              <div className="profile-head">
                <img
                  src="https://avatars.githubusercontent.com/u/73976173?v=4"
                  alt="Bagues Putra avatar"
                  className="profile-avatar"
                  loading="lazy"
                />
                <div>
                  <h3 className="profile-name">Bagues Putra</h3>
                  <p className="profile-role">Full Stack Developer</p>
                  <span className="profile-loc">📍 Indonesia</span>
                </div>
              </div>
              <div className="profile-row">
                <span className="profile-key">Company</span>
                <span className="profile-val">Amanah Medical Centre</span>
              </div>
              <div className="profile-row">
                <span className="profile-key">Focus</span>
                <span className="profile-val">Web Apps · APIs · Infra</span>
              </div>
              <div className="profile-row">
                <span className="profile-key">GitHub</span>
                <span className="profile-val mono">@baguesputra</span>
              </div>
              <div className="profile-tags">
                <span className="chip">#Laravel</span>
                <span className="chip">#React</span>
                <span className="chip">#NextJS</span>
                <span className="chip">#NodeJS</span>
                <span className="chip">#Go</span>
                <span className="chip">#DevOps</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-row" ref={statsRef}>
          {stats.map((s, i) => (
            <div className="reveal" key={s.label} style={{ ['--d']: `${i * 100}ms` }}>
              <Stat stat={s} start={statsInView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
