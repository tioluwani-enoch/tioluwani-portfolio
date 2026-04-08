import { personal, stats } from '../data/content'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="px-8 md:px-16 py-28">
      <p className="text-accent text-[11px] tracking-[0.2em] uppercase mb-3">// 01 — about</p>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {/* Text */}
        <div>
          <h2 className="font-display font-extrabold tracking-tight leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            A developer<br />who ships.
          </h2>
          <div className="text-muted text-[15px] leading-[1.9] space-y-4">
            {personal.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-px bg-border">
          {stats.map((s) => (
            <div key={s.label} className="group bg-surface p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              <div className="font-display font-extrabold text-accent leading-none mb-1"
                style={{ fontSize: '3rem' }}>
                {s.value}
              </div>
              <div className="text-muted text-xs tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
