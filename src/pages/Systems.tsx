import { MoreProjectCard, ProjectCard } from '../components/ProjectCard'
import { PageLead, PageShell, SectionIntro } from '../components/PageShell'
import { moreProjects, projects } from '../data/content'

export default function Systems() {
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
