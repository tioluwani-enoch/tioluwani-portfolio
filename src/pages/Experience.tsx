import { PageLead, PageShell } from '../components/PageShell'
import { experience } from '../data/content'

export default function Experience() {
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
