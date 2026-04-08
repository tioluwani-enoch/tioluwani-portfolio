import { personal } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-muted text-xs">
      <span>© {new Date().getFullYear()} {personal.name}. Built with care.</span>
      <span style={{ color: '#444455' }}>v1.0.0 — online</span>
    </footer>
  )
}
