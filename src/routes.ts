export type Route = '/' | '/experience' | '/systems' | '/resume' | '/contact'

export const routes: { path: Route; label: string }[] = [
  { path: '/', label: 'Overview' },
  { path: '/experience', label: 'Experience' },
  { path: '/systems', label: 'Systems' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]

export function getRoute(): Route {
  const path = window.location.pathname
  return routes.some((route) => route.path === path) ? (path as Route) : '/'
}
