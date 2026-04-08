import { personal } from '../data/content'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="font-display text-xl font-extrabold tracking-tight">
        {personal.name}<span className="text-accent">.</span>
      </div>
      <ul className="hidden md:flex gap-10">
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-muted text-xs tracking-widest uppercase hover:text-accent transition-colors duration-200"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
