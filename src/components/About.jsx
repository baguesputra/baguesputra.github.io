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
    period: '2026 — Sekarang',
    company: 'PT Tata Optima Property',
    role: 'IT Programmer',
    points: [
      'Membuat aplikasi kebutuhan perusahaan',
      'Bertanggung jawab dalam database',
    ],
  },
  {
    period: '2025 — 2026',
    company: 'Rumah Sakit Amanah Medical Centre',
    role: 'IT Coordinator',
    points: [
      'Mengembangkan, memelihara, dan meningkatkan SIMRS berbasis web (Python/Django, JavaScript, SQL) termasuk modul baru sesuai kebutuhan operasional',
      'Menangani bug fixing & error handling, analisis logika program, optimasi kode, dan solusi teknis yang efisien',
      'Mengelola server aplikasi & database: instalasi, konfigurasi, tuning performa, monitoring',
      'Mengelola keamanan jaringan & sistem (firewall, VPN) untuk akses aplikasi aman lintas departemen',
    ],
  },
  {
    period: '2022 — 2025',
    company: 'PT Mitra Megah Profitamas',
    role: 'IT Coordinator',
    points: [
      'Maintenance & debugging aplikasi perusahaan serta penambahan fitur (Yii Framework)',
      'Mengembangkan & memelihara aplikasi web Laravel & CodeIgniter untuk efisiensi operasional',
      'Merancang, mengelola, dan mengoptimalkan database MySQL/SQL + optimasi query',
      'Mengelola server aplikasi serta jaringan Mikrotik & CCTV Hikvision di pusat & cabang',
    ],
  },
  {
    period: '2022 — Sekarang',
    company: 'Freelance Programmer',
    role: 'Web Development',
    points: [
      'Mengembangkan aplikasi web sesuai kebutuhan klien (analisis, pengembangan, implementasi)',
      'Membangun website company profile & landing page untuk branding bisnis klien',
      'Mengembangkan sistem informasi & fitur kustom untuk digitalisasi proses bisnis',
      'Konsultasi teknis, pendampingan proyek, dan bimbingan pengembangan aplikasi',
    ],
  },
  {
    period: '2019',
    company: 'Lyceum of the Philippines University Batangas',
    role: 'Frontend Developer',
    tag: 'Magang · 1 bulan',
    points: [
      'Mengembangkan UI website Fakultas Hukum',
      'Merancang struktur modul & fitur website sesuai kebutuhan pengguna',
      'Mengimplementasikan desain web responsif & mudah digunakan',
      'Melakukan pengujian serta perbaikan tampilan untuk meningkatkan kualitas website',
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
