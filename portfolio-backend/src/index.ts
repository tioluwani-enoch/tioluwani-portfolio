import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// ── Env validation ────────────────────────────────────────────────────────────
const required = ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'RECIPIENT_EMAIL']
for (const key of required) {
  if (!process.env[key]) {
    console.error(`❌  Missing env variable: ${key}`)
    process.exit(1)
  }
}

const {
  GMAIL_USER,
  GMAIL_APP_PASSWORD,
  RECIPIENT_EMAIL,
  PORT = '3001',
  FRONTEND_URL = 'http://localhost:5173',
} = process.env as Record<string, string>

// ── Nodemailer transporter ────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
})

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌  Gmail connection failed:', error.message)
    console.error('    Make sure GMAIL_APP_PASSWORD is a valid App Password.')
  } else {
    console.log('✅  Gmail transporter ready')
  }
})

// ── Express setup ─────────────────────────────────────────────────────────────
const app = express()

app.use(cors({ origin: FRONTEND_URL, methods: ['POST', 'GET'] }))
app.use(express.json())

// ── Types ─────────────────────────────────────────────────────────────────────
interface ContactBody {
  name: string
  email: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// ── Routes ────────────────────────────────────────────────────────────────────
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.post('/api/contact', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, message } = req.body as ContactBody

    // ── Validation ──────────────────────────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      res.status(400).json({ error: 'All fields are required.' })
      return
    }
    if (!isValidEmail(email)) {
      res.status(400).json({ error: 'Please provide a valid email address.' })
      return
    }
    if (message.trim().length < 10) {
      res.status(400).json({ error: 'Message must be at least 10 characters.' })
      return
    }
    if (name.trim().length > 100 || email.trim().length > 200 || message.trim().length > 5000) {
      res.status(400).json({ error: 'Input too long.' })
      return
    }

    // ── Email to you ─────────────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `📩 New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0f; color: #f0f0f8; border: 1px solid #222233;">
          <h2 style="color: #00ff88; margin: 0 0 24px; font-size: 20px;">New portfolio message</h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="color: #888899; padding: 8px 0; width: 80px; vertical-align: top;">From</td>
              <td style="padding: 8px 0; color: #f0f0f8;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="color: #888899; padding: 8px 0; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #00ff88;">${escapeHtml(email)}</a></td>
            </tr>
          </table>

          <div style="border-top: 1px solid #222233; padding-top: 24px;">
            <p style="color: #888899; margin: 0 0 12px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Message</p>
            <p style="color: #f0f0f8; line-height: 1.8; white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
          </div>

          <p style="color: #444455; font-size: 11px; margin-top: 32px; border-top: 1px solid #222233; padding-top: 16px;">
            Sent from your portfolio contact form · Hit reply to respond directly.
          </p>
        </div>
      `,
    })

    // ── Auto-reply to sender ─────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Tioluwani Enoch" <${GMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0f; color: #f0f0f8; border: 1px solid #222233;">
          <h2 style="color: #00ff88; margin: 0 0 16px;">Thanks for reaching out!</h2>
          <p style="color: #888899; line-height: 1.8; margin: 0 0 16px;">
            Hey ${escapeHtml(name.split(' ')[0])}, I got your message and will get back to you as soon as I can.
          </p>
          <p style="color: #888899; line-height: 1.8; margin: 0 0 32px;">
            — Tioluwani
          </p>
          <p style="color: #444455; font-size: 11px; border-top: 1px solid #222233; padding-top: 16px; margin: 0;">
            This is an automated reply. Please don't respond to this email.
          </p>
        </div>
      `,
    })

    res.json({ success: true, message: 'Message sent successfully!' })
  } catch (err) {
    next(err)
  }
})

// ── Error handler ─────────────────────────────────────────────────────────────
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Server error:', err)
  res.status(500).json({ error: 'Something went wrong. Please try again.' })
})

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(Number(PORT), () => {
  console.log(`🚀  Server running on http://localhost:${PORT}`)
  console.log(`    Accepting requests from: ${FRONTEND_URL}`)
})

// ── Helpers ───────────────────────────────────────────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
