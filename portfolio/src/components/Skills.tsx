import { useState, useEffect } from 'react'
import { skills, type SkillCategory } from '../data/content'
import { useInView } from '../hooks/useInView'

const CATEGORIES: { key: SkillCategory; label: string }[] = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'infra', label: 'Infra & DevOps' },
]

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>('languages')
  const [animated, setAnimated] = useState(false)
  const { ref, inView } = useInView()

  // Re-trigger bar animation on category change
  useEffect(() => {
    setAnimated(false)
    const t = setTimeout(() => setAnimated(true), 50)
    return () => clearTimeout(t)
  }, [active])

  useEffect(() => {
    if (inView) setAnimated(true)
  }, [inView])

  return (
    <section id="skills" className="px-8 md:px-16 py-28">
      <p className="text-accent text-[11px] tracking-[0.2em] uppercase mb-3">// 03 — skills</p>

      <h2
        className="font-display font-extrabold tracking-tight leading-[1.05] mb-10"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        Tools of the<br />trade.
      </h2>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {/* Category buttons */}
        <div className="flex flex-row md:flex-col gap-2">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`font-mono text-xs tracking-widest uppercase px-5 py-4 text-left border transition-all duration-200 ${
                active === key
                  ? 'border-accent text-accent bg-accent/5'
                  : 'border-border text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="flex flex-col gap-5">
          {skills[active].map((skill) => (
            <div key={skill.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[13px]">
                <span>{skill.name}</span>
                <span className="text-accent text-[11px]">{skill.pct}%</span>
              </div>
              <div className="h-[3px] bg-border relative">
                <div
                  className="absolute top-0 left-0 h-full bg-accent transition-all duration-700 ease-out"
                  style={{ width: animated ? `${skill.pct}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
