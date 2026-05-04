import { moreProjects, projects } from '../data/content'

type ProjectCardProps = {
  project: (typeof projects)[number]
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="group bg-surface p-6 transition-colors hover:bg-surface2 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-accent">{project.period ?? 'Open source'}</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink">{project.title}</h2>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-muted transition-colors group-hover:border-accent group-hover:text-accent"
        >
          GitHub
        </a>
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">{project.description}</p>
      {!compact && (
        <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted">
          {project.decisions.map((decision) => (
            <li key={decision} className="border-l border-accent/40 pl-4">{decision}</li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>
    </article>
  )
}

export function MoreProjectCard({ project }: { project: (typeof moreProjects)[number] }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-surface p-6 text-ink transition-colors hover:bg-surface2"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-bold leading-tight">{project.title}</h3>
        <span className="text-[10px] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
          GitHub
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>
    </a>
  )
}
