import type { ReactNode } from 'react'

type PageShellProps = {
  eyebrow: string
  title: string
  children: ReactNode
}

export function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <div>
      <div className="mb-10 max-w-3xl">
        <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-accent sm:text-[11px]">{eyebrow}</p>
        <h1 className="font-display text-[1.7rem] font-extrabold leading-[1.18] tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
      </div>
      {children}
    </div>
  )
}

export function PageLead({ children }: { children: ReactNode }) {
  return (
    <p className="-mt-5 mb-12 max-w-3xl text-sm leading-8 text-muted sm:text-[15px]">
      {children}
    </p>
  )
}

export function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-accent sm:text-[11px]">{eyebrow}</p>
      <h2 className="font-display text-xl font-extrabold leading-[1.22] tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
    </div>
  )
}
