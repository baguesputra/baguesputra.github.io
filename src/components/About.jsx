import { useReveal, useInView, useCounter, useSpotlight, useScrollProgress } from '../hooks/useEffects.js'
import SplitWords from './SplitWords.jsx'

const stats = [
  { target: 4, suffix: '+', label: 'Years Experience' },
  { target: 15, suffix: '+', label: 'Projects Delivered' },
  { target: 10, suffix: '+', label: 'Technologies' },
  { target: 5, suffix: '+', label: 'Industries Served' },
]

const experiences = [
  {
    period: '2026 — Present',
    company: 'PT Tata Optima Property',
    role: 'IT Programmer',
    points: [
      'Develop and maintain internal business applications (Laravel, React, Node.js)',
      'Design and optimize PostgreSQL/MySQL databases for multi-tenant systems',
      'Implement CI/CD pipelines and Docker-based deployments',
    ],
  },
  {
    period: '2025 — 2026',
    company: 'Rumah Sakit Amanah Medical Centre',
    role: 'IT Coordinator',
    points: [
      'Developed, maintained, and enhanced web-based SIMRS (Hospital Information System) using Python/Django, JavaScript, SQL — adding new modules per operational needs',
      'Handled bug fixing, error handling, logic analysis, code optimization, and efficient technical solutions',
      'Managed application servers & databases: installation, configuration, performance tuning, monitoring',
      'Managed network & system security (firewall, VPN) for secure cross-department application access',
    ],
  },
  {
    period: '2022 — 2025',
    company: 'PT Mitra Megah Profitamas',
    role: 'IT Coordinator',
    points: [
      'Maintained & debugged company applications, added new features (Yii Framework)',
      'Developed & maintained Laravel & CodeIgniter web apps for operational efficiency',
      'Designed, managed, and optimized MySQL/SQL databases with query optimization',
      'Managed application servers, Mikrotik networking & Hikvision CCTV at HQ and branches',
    ],
  },
  {
    period: '2022 — Present',
    company: 'Freelance Programmer',
    role: 'Web Development',
    points: [
      'Developed custom web applications per client requirements (analysis, development, implementation)',
      'Built company profile websites & landing pages for client business branding',
      'Developed information systems & custom features for business process digitalization',
      'Technical consulting, project guidance, and application development mentoring',
    ],
  },
  {
    period: '2019',
    company: 'Lyceum of the Philippines University Batangas',
    role: 'Frontend Developer',
    tag: 'Internship · 1 month',
    points: [
      'Developed UI for Faculty of Law website',
      'Designed website module & feature structure per user requirements',
      'Implemented responsive, user-friendly web design',
      'Conducted testing and UI fixes to improve website quality',
    ],
  },
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

function TimelineItem({ exp, index }) {
  const ref = useSpotlight()
  return (
    <article
      className="timeline-item"
      ref={ref}
      style={{ ['--d']: `${index * 140}ms` }}
    >
      <span className="timeline-period">{exp.period}</span>
      <h4 className="timeline-company">{exp.company}</h4>
      <span className="timeline-role">{exp.role}</span>
      {exp.points?.length > 0 && (
        <ul className="timeline-points">
          {exp.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      {exp.tag && <span className="timeline-tag">{exp.tag}</span>}
      <span className="timeline-arrow" aria-hidden="true">→</span>
    </article>
  )
}

export default function About() {
  const headRef = useReveal()
  const bodyRef = useReveal()
  const expRef = useReveal()
  const [tlRef, tlInView] = useInView()
  const [statsRef, statsInView] = useInView()
  useScrollProgress(tlRef)

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-tag">// About me</span>
          <SplitWords as="h2" className="section-title">
            Turning ideas into <span className="gradient-text">digital products</span>
          </SplitWords>
        </div>

        <div className="about-grid">
          <div className="about-text reveal reveal-left" ref={bodyRef}>
            <p>
              I&apos;m an IT professional and Full Stack Developer, currently serving as{' '}
              <strong className="text-accent">IT Programmer at PT Tata Optima Property</strong>.
              My journey spans healthcare and enterprise — bridging business operations
              and technology.
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

          <div className="about-side reveal reveal-right">
            <div className="profile-card">
              <div className="profile-head">
                <img
                  src="https://avatars.githubusercontent.com/u/73976173?v=4"
                  alt="Bagues Putra Tawaqqal avatar"
                  className="profile-avatar"
                  loading="lazy"
                />
                <div>
                  <h3 className="profile-name">Bagues Putra Tawaqqal</h3>
                  <p className="profile-role">Full Stack Developer</p>
                  <span className="profile-loc">📍 Indonesia</span>
                </div>
              </div>
              <div className="profile-row">
                <span className="profile-key">Company</span>
                <span className="profile-val">PT Tata Optima Property</span>
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

        <div className="experience">
          <div className="exp-head reveal" ref={expRef}>
            <h3>Career Journey</h3>
            <span className="exp-sub">Full-time roles &amp; internship</span>
            <span className="exp-chip"><span className="exp-chip-dot" /> 2022 — Present</span>
          </div>
          <div className={`timeline ${tlInView ? 'started' : ''}`} ref={tlRef}>
            <span className="timeline-progress" aria-hidden="true" />
            {experiences.map((e, i) => (
              <TimelineItem key={`${e.company}-${e.period}`} exp={e} index={i} />
            ))}
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
