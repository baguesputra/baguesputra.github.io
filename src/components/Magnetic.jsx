import { useMagnetic } from '../hooks/useEffects.js'

export default function Magnetic({ as: Tag = 'a', strength, className = '', ...props }) {
  const ref = useMagnetic(strength)
  return <Tag ref={ref} className={className} {...props} />
}