import { personal } from '../data/content'
import { routes, type Route } from '../routes'

type NavbarProps = {
  route: Route
  navigate: (path: Route) => void
}

export default function Navbar({ route, navigate }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <button
          onClick={() => navigate('/')}
          className="flex min-w-0 items-center gap-3 text-left font-display text-base font-extrabold tracking-tight text-ink sm:text-lg"
        >
          <img src="/logo.svg" alt="" className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
          <span className="truncate">
            {personal.shortName}
            <span className="text-accent">.</span>
          </span>
        </button>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
          {routes.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`shrink-0 border px-3 py-2 text-[10px] uppercase tracking-[0.16em] transition-colors sm:text-[11px] ${
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
