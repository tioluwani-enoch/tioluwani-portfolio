import { PageLead, PageShell } from '../components/PageShell'
import { personal } from '../data/content'

const links = [
  { label: 'LinkedIn', value: 'linkedin.com/in/tioluwani-enoch', href: personal.linkedin },
  { label: 'GitHub', value: 'github.com/tioluwani-enoch', href: personal.github },
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
]

export default function Contact() {
  return (
    <PageShell eyebrow="// contact" title="Contact">
      <PageLead>
        The best ways to reach me directly.
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
