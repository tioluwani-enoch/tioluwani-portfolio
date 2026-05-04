import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Overview from './pages/Overview'
import Resume from './pages/Resume'
import Systems from './pages/Systems'
import { getRoute, type Route } from './routes'

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute)

  useEffect(() => {
    const onPopState = () => setRoute(getRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function navigate(path: Route) {
    window.history.pushState({}, '', path)
    setRoute(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-bg text-ink noise-overlay">
      <Navbar route={route} navigate={navigate} />
      <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-32 md:pt-28 lg:px-10">
        {route === '/' && <Overview navigate={navigate} />}
        {route === '/experience' && <Experience />}
        {route === '/systems' && <Systems />}
        {route === '/resume' && <Resume navigate={navigate} />}
        {route === '/contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
