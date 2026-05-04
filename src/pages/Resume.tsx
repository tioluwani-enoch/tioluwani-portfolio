import { PageLead, PageShell } from '../components/PageShell'
import { education, personal, skillGroups } from '../data/content'
import type { Route } from '../routes'

type ResumeProps = {
  navigate: (path: Route) => void
}

export default function Resume({ navigate }: ResumeProps) {
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
