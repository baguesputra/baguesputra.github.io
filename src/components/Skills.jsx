import { useReveal, useInView } from '../hooks/useEffects.js'
import { skills } from '../data/portfolio.js'

const marquee = [
  'Laravel', 'React', 'Next.js', 'Node.js', 'Express', 'Golang', 'PHP',
  'JavaScript', 'TypeScript', 'MySQL', 'PostgreSQL', 'Redis', 'Prisma',
  'Docker', 'Linux', 'Git', 'Socket.io', 'Flask', 'Bootstrap', 'REST API',
]

function SkillBar({ skill, start, delay }) {
  return (
    <div className="skill-bar">
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
          <h2 className="section-title">
            My <span className="gradient-text">tech arsenal</span>
          </h2>
          <p className="section-sub">
            A battle-tested toolkit across the full stack and beyond — from pixel-perfect
            UIs to robust APIs and the infrastructure underneath.
          </p>
        </div>

        <div className="skills-grid reveal" ref={gridRef}>
          {skills.map((group, gi) => (
            <div className="skill-group" key={group.group}>
              <div className="skill-group-head">
                <span className="skill-group-icon">{group.icon}</span>
                <h3>{group.group}</h3>
              </div>
              {group.items.map((s, si) => (
                <SkillBar key={s.name} skill={s} start={true} delay={si * 120} />
              ))}
            </div>
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
