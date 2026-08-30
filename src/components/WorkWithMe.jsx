import { useReveal } from '../hooks/useEffects.js'
import SplitWords from './SplitWords.jsx'
import Magnetic from './Magnetic.jsx'

const engagement = [
  {
    icon: '⏰',
    title: 'Availability',
    items: [
      '20–40 hours/week',
      'UTC+7 (WIB) — overlaps US morning / EU afternoon',
      'Async-first, weekly sync calls available',
      'Quick turnaround: 24h response on weekdays',
    ],
  },
  {
    icon: '💰',
    title: 'Engagement Models',
    items: [
      'Hourly: $40–75/hr (based on scope & seniority)',
      'Fixed-price: min $3,000/project',
      'Retainer: $2,000–5,000/mo for ongoing work',
      'Discovery call (free, 30 min) before any commitment',
    ],
  },
  {
    icon: '🛠️',
    title: 'Core Stack',
    items: [
      'Frontend: React, Next.js, TypeScript, Tailwind',
      'Backend: Laravel, Node.js/Express, Go/Gin',
      'Database: PostgreSQL, MySQL, Redis',
      'Infra: Docker, Linux, CI/CD, VPS/Cloud',
    ],
  },
  {
    icon: '📋',
    title: 'Compliance & Process',
    items: [
      'NDA & IP assignment ready',
      'Contracts via Deel, Upwork, or direct',
      'Invoicing: Wise, PayPal, Bank Transfer (USD/IDR)',
      'English fluent — async (Slack/Email) + sync (Zoom/Meet)',
      'Time-tracking & weekly progress reports included',
    ],
  },
]

const testimonials = [
  {
    quote: 'Bagues delivered our clinic management API ahead of schedule with clean, documented code. His infrastructure knowledge saved us weeks of DevOps setup.',
    author: 'Dr. Andi Wijaya',
    role: 'Medical Director, Amanah Medical Centre',
    project: 'SIMRS / Klinik Management System',
  },
  {
    quote: 'Reliable, communicative, and technically strong. He built our HR payroll system end-to-end — from database design to React dashboard — and handles maintenance proactively.',
    author: 'Siti Rahayu',
    role: 'HR Manager, PT Mitra Megah Profitamas',
    project: 'HR & Payroll System',
  },
  {
    quote: 'Rare to find a developer who understands both application code and the servers it runs on. Bagues deployed our Go auth service to production with zero downtime.',
    author: 'Rudi Hartono',
    role: 'CTO, Fintech Startup (Stealth)',
    project: 'Enterprise Auth Service (Go)',
  },
]

export default function WorkWithMe() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const testimonialRef = useReveal()

  return (
    <section className="section work-with-me" id="work-with-me">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-tag">// Work with me</span>
          <SplitWords as="h2" className="section-title">
            Let&apos;s build <span className="gradient-text">together</span>
          </SplitWords>
          <p className="section-sub">
            I&apos;m open to freelance, contract, and long-term partnerships.
            Here&apos;s what you need to know upfront — no surprises.
          </p>
        </div>

        <div className="engagement-grid reveal reveal-scale" ref={gridRef}>
          {engagement.map((e, i) => (
            <article key={e.title} className="engagement-card" style={{ ['--d']: `${i * 100}ms` }}>
              <span className="engagement-icon">{e.icon}</span>
              <h3>{e.title}</h3>
              <ul>
                {e.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="testimonials reveal" ref={testimonialRef}>
          <h3 className="testimonials-title">What clients say</h3>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="testimonial-card">
                <p className="testimonial-quote">&#8220;{t.quote}&#8221;</p>
                <footer className="testimonial-footer">
                  <div className="testimonial-author">
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                  <span className="testimonial-project">{t.project}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="cta-row reveal">
          <Magnetic className="btn btn-primary" href="#contact">
            Start a Project
            <span>→</span>
          </Magnetic>
          <Magnetic className="btn btn-ghost" href="mailto:bagus.putra.dev@gmail.com?subject=Freelance Inquiry">
            Email Directly
          </Magnetic>
        </div>
      </div>
    </section>
  )
}