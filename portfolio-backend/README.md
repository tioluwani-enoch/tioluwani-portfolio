# Portfolio Backend

Express + Nodemailer backend for the portfolio contact form.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create your .env file
```bash
cp .env.example .env
```

Then open `.env` and fill in:

| Variable | Value |
|---|---|
| `GMAIL_USER` | Your Gmail address e.g. `teolubunmi@gmail.com` |
| `GMAIL_APP_PASSWORD` | A 16-character Gmail App Password (see below) |
| `RECIPIENT_EMAIL` | Where to receive messages (same as GMAIL_USER is fine) |
| `PORT` | Default `3001` |
| `FRONTEND_URL` | Your frontend URL e.g. `http://localhost:5173` |

### 3. Get a Gmail App Password

You **cannot** use your regular Gmail password. You need an App Password:

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Security → 2-Step Verification (enable it if not already)
3. Security → App passwords
4. Select app: **Mail**, device: **Other** → name it "Portfolio"
5. Copy the 16-character password into `GMAIL_APP_PASSWORD`

### 4. Run the server

```bash
# Development (hot reload)
npm run dev

# Production
npm run build
npm start
```

Server starts on http://localhost:3001

## API

### `POST /api/contact`

**Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "Hello!"
}
```

**Success response (200):**
```json
{ "success": true, "message": "Message sent successfully!" }
```

**Error response (400/500):**
```json
{ "error": "All fields are required." }
```

### `GET /health`
Returns `{ "status": "ok" }` — useful to check if the server is running.

## What happens when someone submits the form

1. You receive a nicely formatted email at `RECIPIENT_EMAIL`
2. The sender gets an auto-reply confirming you received their message
3. The form shows a success message and clears

## Deploying

This is a standard Node.js app. You can deploy it to:
- **Railway** — connect your repo, set env vars in the dashboard
- **Render** — free tier available, set env vars in the dashboard
- **VPS** (DigitalOcean, Linode) — run with `pm2 start npm -- start`

Remember to update `FRONTEND_URL` to your live portfolio URL and `VITE_API_URL` in your frontend `.env.local` to your server's public URL.
