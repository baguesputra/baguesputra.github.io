import { Children } from 'react'
import { useInView } from '../hooks/useEffects.js'

function splitNode(child, indexRef) {
  if (typeof child === 'string' || typeof child === 'number') {
    return String(child)
      .split(' ')
      .filter(Boolean)
      .map((w, i) => {
        const d = indexRef.current
        indexRef.current += 1
        return (
          <span className="word" key={`${w}-${i}`}>
            <span className="word-inner" style={{ ['--d']: `${d * 50}ms` }}>{w}</span>
          </span>
        )
      })
  }
  const d = indexRef.current
  indexRef.current += 1
  return (
    <span className="word" key={d}>
      <span className="word-inner" style={{ ['--d']: `${d * 50}ms` }}>{child}</span>
    </span>
  )
}

export default function SplitWords({ as: Tag = 'h2', className = '', children }) {
  const [ref, inView] = useInView(0.5)
  const indexRef = { current: 0 }
  return (
    <Tag ref={ref} className={`word-reveal ${inView ? 'started' : ''} ${className}`.trim()}>
      {Children.map(children, (child) => splitNode(child, indexRef))}
    </Tag>
  )
}