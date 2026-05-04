import { useEffect, useState } from 'react'
import {
  education,
  experience,
  moreProjects,
  personal,
  projects,
  skillGroups,
  thesis,
} from './data/content'

type Route = '/' | '/experience' | '/systems' | '/resume' | '/contact'

const routes: { path: Route; label: string }[] = [
  { path: '/', label: 'Overview' },
  { path: '/experience', label: 'Experience' },
  { path: '/systems', label: 'Systems' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]

function getRoute(): Route {
  const path = window.location.pathname
  return routes.some((route) => route.path === path) ? (path as Route) : '/'
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute)

  useEffect(() => {
    const onPopState = () => setRoute(getRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function navigate(path: Route) {
    window.history.pushState({}, '', path)
    setRoute(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-bg text-ink noise-overlay">
      <Navbar route={route} navigate={navigate} />
      <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10">
        {route === '/' && <Overview navigate={navigate} />}
        {route === '/experience' && <ExperiencePage />}
        {route === '/systems' && <SystemsPage />}
        {route === '/resume' && <ResumePage navigate={navigate} />}
        {route === '/contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  )
}

function Navbar({
  route,
  navigate,
}: {
  route: Route
  navigate: (path: Route) => void
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 text-left font-display text-lg font-extrabold tracking-tight text-ink"
        >
          <img src="/logo.svg" alt="" className="h-8 w-8" />
          <span>
            {personal.shortName}
            <span className="text-accent">.</span>
          </span>
        </button>
        <div className="flex flex-wrap gap-2">
          {routes.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`border px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                route === item.path
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border text-muted hover:border-accent/70 hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Overview({ navigate }: { navigate: (path: Route) => void }) {
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

function ExperiencePage() {
  return (
    <PageShell eyebrow="// experience" title="Work experience">
      <PageLead>
        Roles where I built interfaces, internal tools, and systems that supported real users and
        day-to-day operations.
      </PageLead>
      <div className="grid gap-px border border-border bg-border">
        {experience.map((item) => (
          <article key={item.role} className="bg-surface p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-ink">{item.role}</h2>
                <p className="mt-1 text-sm text-muted">{item.org} / {item.location}</p>
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent">{item.date}</p>
            </div>
            <ul className="mt-8 grid gap-4 text-sm leading-7 text-muted md:grid-cols-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="border-l border-accent/40 pl-4">{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  )
}

function SystemsPage() {
  return (
    <PageShell eyebrow="// systems" title="Selected projects">
      <PageLead>
        A small set of projects that show how I work across full-stack development, machine
        learning, automation, and developer tooling.
      </PageLead>
      <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <section className="mt-16">
        <SectionIntro
          eyebrow="// more work"
          title="More builds, experiments, and practice projects."
        />
        <p className="mt-5 mb-8 max-w-3xl text-[15px] leading-8 text-muted">
          These are smaller projects and experiments from my GitHub. They show range, learning,
          and the kind of problems I keep exploring.
        </p>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {moreProjects.map((project) => (
            <MoreProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  )
}

function ResumePage({ navigate }: { navigate: (path: Route) => void }) {
  return (
    <PageShell eyebrow="// resume" title="Resume">
      <PageLead>
        Education, coursework, technical skills, and the downloadable PDF version of my resume.
      </PageLead>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="border border-border bg-surface p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-ink">Education</h2>
          <p className="mt-5 text-lg text-ink">{education.degree}</p>
          <p className="mt-2 text-sm text-muted">{education.school} / {education.location}</p>
          <p className="mt-2 text-sm text-muted">{education.date}</p>
          <p className="mt-6 text-sm uppercase tracking-[0.16em] text-accent">GPA {education.gpa}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span key={course} className="tag">{course}</span>
            ))}
          </div>
        </section>

        <section className="border border-border bg-surface p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-ink">Technical Skills</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-accent">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={personal.resume} download className="primary-action">Download PDF resume</a>
        <button onClick={() => navigate('/experience')} className="secondary-action">Read experience</button>
        <button onClick={() => navigate('/systems')} className="secondary-action">Read systems</button>
      </div>
    </PageShell>
  )
}

function ContactPage() {
  const links = [
    { label: 'LinkedIn', value: 'linkedin.com/in/tioluwani-enoch', href: personal.linkedin },
    { label: 'GitHub', value: 'github.com/tioluwani-enoch', href: personal.github },
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  ]

  return (
    <PageShell eyebrow="// contact" title="Contact">
      <PageLead>
        The best ways to reach me directly. No contact form, no extra routing.
      </PageLead>
      <div className="grid gap-px border border-border bg-border">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="group flex flex-col justify-between gap-4 bg-surface p-6 text-ink transition-colors hover:bg-surface2 sm:flex-row sm:items-center md:p-8"
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.18em] text-accent">{link.label}</span>
              <span className="mt-2 block text-lg">{link.value}</span>
            </span>
            <span className="text-sm uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-accent">
              Open
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  )
}

function ProjectCard({
  project,
  compact = false,
}: {
  project: (typeof projects)[number]
  compact?: boolean
}) {
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

function MoreProjectCard({ project }: { project: (typeof moreProjects)[number] }) {
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

function PageShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-10 max-w-3xl">
        <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h1 className="font-display text-2xl font-extrabold leading-[1.18] tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
      </div>
      {children}
    </div>
  )
}

function PageLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="-mt-5 mb-12 max-w-3xl text-[15px] leading-8 text-muted">
      {children}
    </p>
  )
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-xl font-extrabold leading-[1.22] tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 text-xs text-muted sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span>{new Date().getFullYear()} {personal.shortName}. Built around systems, not decoration.</span>
        <span className="text-muted/60">Vite / React / TypeScript / Tailwind</span>
      </div>
    </footer>
  )
}
