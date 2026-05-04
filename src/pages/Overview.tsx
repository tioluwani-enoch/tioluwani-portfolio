import { personal, projects, thesis } from '../data/content'
import { ProjectCard } from '../components/ProjectCard'
import { SectionIntro } from '../components/PageShell'
import type { Route } from '../routes'

type OverviewProps = {
  navigate: (path: Route) => void
}

export default function Overview({ navigate }: OverviewProps) {
  return (
    <div className="space-y-16">
      <section className="flex min-h-[calc(100vh-10rem)] items-center border-b border-border">
        <div className="max-w-5xl pb-16">
          <p className="mb-9 text-[11px] uppercase tracking-[0.46em] text-accent">
            Software Engineer / Data Systems / Embedded Thinking
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {personal.shortName}
          </h1>
          <p className="mt-9 max-w-3xl text-lg font-bold leading-8 text-ink sm:text-xl">
            Software systems designed for useful workflows, clear data, and real-world constraints.
          </p>
          <div className="mt-10 max-w-3xl space-y-6 text-[15px] leading-8 text-muted">
            <p>
              I build full-stack products, machine learning pipelines, and embedded interfaces that
              turn messy operations into reliable tools.
            </p>
            <p>
              Currently studying Computer and Data Science at Knox College and seeking summer 2026
              software engineering internships.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a href={personal.resume} download className="hero-link hero-link-primary">
              Resume
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hero-link">
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
              LinkedIn
            </a>
            <a href={`mailto:${personal.email}`} className="hero-link">
              Email
            </a>
            <button onClick={() => navigate('/systems')} className="hero-link">
              Systems
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionIntro eyebrow="// core idea" title="Reasoning belongs in design. Execution belongs in systems." />
        <div className="grid gap-px border border-border bg-border">
          {thesis.map((line, index) => (
            <div key={line} className="bg-surface p-6">
              <p className="mb-3 text-xs text-accent">0{index + 1}</p>
              <p className="text-lg leading-8 text-ink">{line}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionIntro eyebrow="// selected systems" title="Projects shaped around workflows, constraints, and impact." />
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
      </section>
    </div>
  )
}
