import { projects } from '../data/content'
import { useInView } from '../hooks/useInView'

const ACCENTS = ['#00ff88', '#ff3c6e', '#3c8fff', '#00ff88', '#ff3c6e', '#3c8fff']

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="px-8 md:px-16 pb-28">
      <p className="text-accent text-[11px] tracking-[0.2em] uppercase mb-3">// 02 — projects</p>

      <h2
        ref={ref}
        className={`font-display font-extrabold tracking-tight leading-[1.05] mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        Things I've<br />built.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.url ?? '#'}
            className="group bg-surface hover:bg-[#16161f] p-10 relative overflow-hidden transition-colors duration-200 no-underline"
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: ACCENTS[i % ACCENTS.length] }}
            />

            <div className="text-muted text-[11px] tracking-[0.2em] mb-6">
              {String(i + 1).padStart(2, '0')}
            </div>

            <h3 className="font-display font-bold text-[1.4rem] tracking-tight text-[#f0f0f8] mb-3">
              {project.title}
            </h3>

            <p className="text-muted text-[13px] leading-relaxed mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-muted text-[10px] tracking-widest uppercase border border-border px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow */}
            <span
              className="absolute bottom-8 right-8 text-2xl text-border group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
              style={{ color: inView ? undefined : 'var(--border)' }}
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
