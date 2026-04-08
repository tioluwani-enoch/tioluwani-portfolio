import { useState } from 'react'
import { personal } from '../data/content'
import { useInView } from '../hooks/useInView'

type Status = 'idle' | 'loading' | 'success' | 'error'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const links = [
    { label: 'GitHub', value: personal.github.replace('https://', ''), href: personal.github },
    { label: 'LinkedIn', value: personal.linkedin.replace('https://', ''), href: personal.linkedin },
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setErrorMsg('Could not reach the server. Please try again later.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-8 md:px-16 py-28">
      <p className="text-accent text-[11px] tracking-[0.2em] uppercase mb-3">// 04 — contact</p>

      <h2
        className="font-display font-extrabold tracking-tight leading-[1.05] mb-10"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        Let's build<br />something.
      </h2>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {/* Left */}
        <div>
          <p className="text-muted text-[15px] leading-[1.9] mb-8">
            I'm open to freelance projects, full-time roles, and interesting collaborations.
            If you have a problem that needs engineering, let's talk.
          </p>

          <div className="flex flex-col gap-px bg-border">
            {links.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface hover:bg-[#16161f] flex justify-between items-center px-6 py-5 no-underline text-[#f0f0f8] hover:text-accent transition-all duration-200 group"
              >
                <span>
                  <span className="block text-muted text-[11px] tracking-widest uppercase mb-0.5">{label}</span>
                  <span className="text-[13px]">{value}</span>
                </span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          {status === 'success' && (
            <div className="border border-accent/30 bg-accent/5 px-5 py-4 text-accent text-[13px]">
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="border border-accent2/30 bg-accent2/5 px-5 py-4 text-accent2 text-[13px]">
              ✕ {errorMsg}
            </div>
          )}

          {(['name', 'email'] as const).map((field) => (
            <div key={field} className="flex flex-col gap-1.5">
              <label className="text-muted text-[11px] tracking-[0.15em] uppercase">{field}</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                value={form[field]}
                onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                placeholder={field === 'email' ? 'jane@example.com' : 'Jane Smith'}
                disabled={status === 'loading' || status === 'success'}
                required
                className="bg-surface border border-border text-[#f0f0f8] font-mono text-[13px] px-3.5 py-3 outline-none focus:border-accent transition-colors duration-200 placeholder:text-muted/50 disabled:opacity-50"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1.5">
            <label className="text-muted text-[11px] tracking-[0.15em] uppercase">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="Tell me about your project..."
              disabled={status === 'loading' || status === 'success'}
              required
              className="bg-surface border border-border text-[#f0f0f8] font-mono text-[13px] px-3.5 py-3 outline-none focus:border-accent transition-colors duration-200 resize-none placeholder:text-muted/50 disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="self-start bg-accent text-bg font-mono text-xs font-bold tracking-widest uppercase px-7 py-3.5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0"
          >
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
