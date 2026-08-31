import { useState, useRef } from 'react'
import { useReveal } from '../hooks/useEffects.js'
import SplitWords from './SplitWords.jsx'
import Magnetic from './Magnetic.jsx'
import { socials } from '../data/portfolio.js'

export default function Contact() {
  const headRef = useReveal()
  const formRef = useReveal()
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const messageRef = useRef(null)

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : ''
      case 'message':
        return value.trim().length < 20 ? 'Message should be at least 20 characters' : ''
      default:
        return ''
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
    if (name === 'message' && messageRef.current) {
      messageRef.current.dispatchEvent(new Event('input'))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const formData = Object.fromEntries(data)
    
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched({ name: true, email: true, subject: true, message: true })
      return
    }
    
    const name = data.get('name')
    const message = data.get('message')
    const subject = `Portfolio Contact from ${name}`
    const body = encodeURIComponent(`${message}\n\n— ${name}`)
    window.location.href = `mailto:bagus.putra.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const messageLength = messageRef.current?.value?.length || 0

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-left reveal reveal-left" ref={headRef}>
            <span className="section-tag">// Contact</span>
            <SplitWords as="h2" className="section-title">
              Let&apos;s build something <span className="gradient-text">amazing</span>
            </SplitWords>
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
                <Magnetic key={s.label} className="social-btn" href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.label}
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="contact-right reveal reveal-right" ref={formRef}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={touched.name && !!errors.name}
                    aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                  />
                  {touched.name && errors.name && (
                    <span id="name-error" className="form-error" role="alert">{errors.name}</span>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && errors.email && (
                    <span id="email-error" className="form-error" role="alert">{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project / Job opportunity"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  aria-invalid={touched.message && !!errors.message}
                  aria-describedby={touched.message && errors.message ? 'message-error' : 'message-hint'}
                />
                {touched.message && errors.message && (
                  <span id="message-error" className="form-error" role="alert">{errors.message}</span>
                )}
                <span id="message-hint" className="form-hint">
                  {messageLength}/20 min characters
                </span>
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={sent}>
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
