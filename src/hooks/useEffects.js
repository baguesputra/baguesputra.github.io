import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}

export function useMouseGlow() {
  useEffect(() => {
    const glow = document.querySelector('.mouse-glow')
    if (!glow) return
    let raf = null
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let cx = tx
    let cy = ty

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (!raf) raf = requestAnimationFrame(animate)
    }

    const animate = () => {
      cx += (tx - cx) * 0.12
      cy += (ty - cy) * 0.12
      glow.style.left = `${cx}px`
      glow.style.top = `${cy}px`
      raf = null
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}

export function useTyped(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let timer

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () => {
          setText(word.slice(0, deleting ? text.length - 1 : text.length + 1))
        },
        deleting ? speed / 2 : speed,
      )
    }
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export function useCounter(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const startTime = performance.now()
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])

  return value
}

export function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView]
}

export function useTilt() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-6px)`
    }
    const onLeave = () => {
      el.style.transform = 'perspective(900px) rotateY(0) rotateX(0)'
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return ref
}

export function useParallax(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return
    let raf = null
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(animate)
    }
    const animate = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      el.querySelectorAll('.parallax-layer').forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth) || 20
        layer.style.transform = `translate3d(${-cx * depth}px, ${-cy * depth}px, 0)`
      })
      raf = null
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
}

export function useParticleNetwork(ref) {
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let width = 0
    let height = 0
    let raf = null
    let particles = []
    const mouse = { x: null, y: null }
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * DPR
      canvas.height = height * DPR
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      const count = Math.min(70, Math.max(24, Math.floor((width * height) / 16000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.9,
      }))
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        if (mouse.x !== null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < 110 && dist > 0) {
            p.x += (dx / dist) * 0.9
            p.y += (dy / dist) * 0.9
          }
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(43, 90, 160, 0.5)'
        ctx.fill()
      }
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        if (mouse.x !== null) {
          const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(30, 127, 240, ${0.3 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(43, 90, 160, ${0.16 * (1 - dist / 130)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [ref])
}

export function useSpotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--sx', `${e.clientX - r.left}px`)
      el.style.setProperty('--sy', `${e.clientY - r.top}px`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return ref
}

export function useScrollProgress(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fill = el.querySelector('.timeline-progress')
    if (!fill) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = null
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(Math.max((vh - rect.top) / (rect.height + vh), 0), 1)
      const max = Math.max(el.clientHeight - 16, 0)
      fill.style.height = `${Math.round(8 + p * max)}px`
      raf = null
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
}

export function useHeroFade(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return
    let raf = null
    const update = () => {
      const vh = window.innerHeight
      const p = Math.min(Math.max(window.scrollY / vh, 0), 1)
      el.style.opacity = `${1 - p * 1.3}`
      el.style.transform = `translateY(${p * -70}px) scale(${1 - p * 0.06})`
      el.style.pointerEvents = p > 0.85 ? 'none' : ''
      raf = null
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
}

export function useMagnetic(strength = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      el.style.setProperty('--mx', `${dx * strength}px`)
      el.style.setProperty('--my', `${dy * strength}px`)
    }
    const onLeave = () => {
      el.style.setProperty('--mx', '0px')
      el.style.setProperty('--my', '0px')
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}
