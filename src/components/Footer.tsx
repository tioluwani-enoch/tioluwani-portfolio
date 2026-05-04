import { personal } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 text-xs text-muted sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span>{new Date().getFullYear()} {personal.shortName}. Built around systems, not decoration.</span>
        <span className="text-muted/60">Vite / React / TypeScript / Tailwind</span>
      </div>
    </footer>
  )
}
