import { useState } from 'react'
import { useReveal } from '../hooks/useEffects.js'
import { socials } from '../data/portfolio.js'

export default function Contact() {
  const headRef = useReveal()
  const formRef = useReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    const message = data.get('message')
    const subject = `Portfolio Contact from ${name}`
    const body = encodeURIComponent(`${message}\n\n— ${name}`)
    window.location.href = `mailto:bagus.putra.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-left reveal" ref={headRef}>
            <span className="section-tag">// Contact</span>
            <h2 className="section-title">
              Let&apos;s build something <span className="gradient-text">amazing</span>
            </h2>
            <p className="contact-desc">
              Whether you have a project in mind, a role to fill, or just want to talk tech —
              my inbox is always open. I&apos;ll get back to you as soon as possible.
            </p>

            <div className="contact-links">
              <a className="contact-link" href="mailto:bagus.putra.dev@gmail.com">
                <span className="c-icon">✉️</span>
                <span>
                  <small>Email me at</small>
                  <strong>bagus.putra.dev@gmail.com</strong>
                </span>
              </a>
              <a className="contact-link" href="https://github.com/baguesputra" target="_blank" rel="noreferrer">
                <span className="c-icon">🐙</span>
                <span>
                  <small>Find me on</small>
                  <strong>github.com/baguesputra</strong>
                </span>
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/baguesputra" target="_blank" rel="noreferrer">
                <span className="c-icon">💼</span>
                <span>
                  <small>Connect on</small>
                  <strong>linkedin.com/in/baguesputra</strong>
                </span>
              </a>
            </div>

            <div className="contact-socials">
              {socials.map((s) => (
                <a key={s.label} className="social-btn" href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right reveal" ref={formRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Project / Job opportunity" />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                {sent ? '✓ Opening your email app…' : 'Send Message'}
                <span>{sent ? '' : '→'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
