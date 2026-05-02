import { personal } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 sm:px-8 md:px-16 pt-32 pb-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg" />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)',
          top: -100, left: -100,
        }}
      />

      <div className="relative max-w-4xl">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 text-accent border border-accent/30 px-3 py-1.5 text-[11px] tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
          {personal.tagline}
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold leading-[0.95] tracking-tighter mb-6"
          style={{ fontSize: 'clamp(2rem, 9vw, 7rem)' }}>
          <span className="text-muted block">{personal.title}</span>
          <span className="block">{personal.titleHighlight}</span>
          <span className="text-accent block">{personal.titleAccent}</span>
        </h1>

        <p className="text-muted text-[15px] leading-relaxed max-w-md mb-10">
          I design systems and ship products. From APIs to interfaces — if it runs on electricity, I probably have opinions about it.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-accent text-bg font-mono text-xs font-bold tracking-widest uppercase px-7 py-3.5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase px-7 py-3.5 border border-border hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
