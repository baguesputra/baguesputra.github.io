import { useState } from 'react'
import { useReveal, useInView, useSpotlight } from '../hooks/useEffects.js'
import SplitWords from './SplitWords.jsx'
import { skills } from '../data/portfolio.js'

const marquee = [
  'Laravel', 'React', 'Next.js', 'Node.js', 'Express', 'Golang', 'PHP',
  'JavaScript', 'TypeScript', 'MySQL', 'PostgreSQL', 'Redis', 'Prisma',
  'Docker', 'Linux', 'Git', 'Socket.io', 'Flask', 'Bootstrap', 'REST API',
]

const skillDetails = {
  'React / React Native': 'Building SPAs, SSR with Next.js, mobile with Expo. Hooks, context, performance optimization.',
  'Next.js': 'App Router, Server Components, ISR, middleware, API routes, edge runtime.',
  'JavaScript (ES6+)': 'Modern JS: async/await, modules, destructuring, proxies, weakmaps, TypeScript interop.',
  'Tailwind CSS / Bootstrap': 'Utility-first CSS, responsive design, dark mode, custom design systems.',
  'HTML / CSS / Figma': 'Semantic HTML5, CSS Grid/Flexbox, animations, design handoff, prototyping.',
  'Laravel (PHP)': 'Eloquent ORM, queues, events, broadcasting, Octane, Sanctum, Pennant, testing with Pest.',
  'Node.js / Express': 'REST APIs, middleware, clustering, Prisma/TypeORM, Socket.io, JWT/OAuth2.',
  'Golang (Gin)': 'High-performance APIs, concurrency with goroutines, GORM, Redis, Docker multi-stage builds.',
  'Python (Flask)': 'Lightweight APIs, SQLAlchemy, Celery, testing with pytest, deployment with Gunicorn.',
  'REST API Design': 'OpenAPI/Swagger, versioning, pagination, filtering, rate limiting, error handling standards.',
  'MySQL': 'Indexing, query optimization, transactions, replication, JSON columns, CTEs.',
  'PostgreSQL': 'Advanced indexing, partitioning, advisory locks, full-text search, JSONB, extensions.',
  'Redis': 'Caching strategies, pub/sub, sorted sets, Lua scripting, Cluster mode, persistence.',
  'SQLite / Prisma / ORM': 'Type-safe DB access, migrations, seeding, relation queries, performance tuning.',
  'Docker': 'Multi-stage builds, Compose, BuildKit, multi-arch, security scanning, layer caching.',
  'Linux / Server Admin': 'Ubuntu/Debian, Nginx, systemd, SSH hardening, log rotation, monitoring with Prometheus.',
  'Git & GitHub / CI': 'Conventional commits, GitFlow, Actions, dependabot, semantic release, monorepo tooling.',
  'Networking & Security': 'TLS/mTLS, VPN, firewall (UFW/iptables), DNS, load balancing, zero-trust principles.',
  'JWT / OAuth2 / RBAC': 'Access/refresh tokens, PKCE, scopes, claims, policy-based auth, session management.',
}

function SkillBar({ skill, start, delay, onHover }) {
  const [isHovered, setIsHovered] = useState(false)
  const detail = skillDetails[skill.name]

  return (
    <div className="skill-bar" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="skill-bar-top">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct">{skill.level}%</span>
      </div>
      <div className="skill-track">
        <div
          className={`skill-fill ${start ? 'filled' : ''}`}
          style={{ width: start ? `${skill.level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
      {detail && isHovered && (
        <div className="skill-tooltip">
          {detail}
        </div>
      )}
    </div>
  )
}

function SkillGroup({ group }) {
  const ref = useSpotlight()
  return (
    <div className="skill-group" ref={ref}>
      <div className="skill-group-head">
        <span className="skill-group-icon">{group.icon}</span>
        <h3>{group.group}</h3>
      </div>
      {group.items.map((s, si) => (
        <SkillBar key={s.name} skill={s} start={true} delay={si * 120} />
      ))}
    </div>
  )
}

export default function Skills() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const [marqueeRef, marqueeInView] = useInView()

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-tag">// Skills</span>
          <SplitWords as="h2" className="section-title">
            My <span className="gradient-text">tech arsenal</span>
          </SplitWords>
          <p className="section-sub">
            A battle-tested toolkit across the full stack and beyond — from pixel-perfect
            UIs to robust APIs and the infrastructure underneath.
          </p>
        </div>

        <div className="skills-grid reveal reveal-scale" ref={gridRef}>
          {skills.map((group) => (
            <SkillGroup key={group.group} group={group} />
          ))}
        </div>
      </div>

      <div className="marquee-wrap" ref={marqueeRef}>
        <div className={`marquee ${marqueeInView ? 'running' : ''}`}>
          {[...marquee, ...marquee].map((t, i) => (
            <span className="marquee-item" key={`${t}-${i}`}>
              <span className="marquee-dot">◆</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
